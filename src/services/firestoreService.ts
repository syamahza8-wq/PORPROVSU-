import { 
  collection, 
  doc, 
  onSnapshot, 
  setDoc, 
  updateDoc, 
  writeBatch,
  query,
  orderBy
} from 'firebase/firestore';
import { getFirebaseDb } from './firebase';
import { MedalStanding, MatchSchedule, NewsArticle } from '../types';
import { INITIAL_MEDALS, INITIAL_SCHEDULES, INITIAL_NEWS } from '../constants/initialData';

const MEDALS_COLLECTION = 'porprovsu_medals';
const SCHEDULES_COLLECTION = 'porprovsu_schedules';
const NEWS_COLLECTION = 'porprovsu_news';

const LOCAL_MEDALS_KEY = 'local_porprovsu_medals';
const LOCAL_SCHEDULES_KEY = 'local_porprovsu_schedules';
const LOCAL_NEWS_KEY = 'local_porprovsu_news';

function getLocalData<T>(key: string, fallback: T): T {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : fallback;
  } catch {
    return fallback;
  }
}

function setLocalData<T>(key: string, value: T): void {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.warn('Error saving to localStorage:', e);
  }
}

// 1. Subscribe to Medals
export function subscribeToMedals(
  onUpdate: (medals: MedalStanding[]) => void,
  onError?: (err: any) => void
): () => void {
  const db = getFirebaseDb();
  if (!db) {
    const local = getLocalData<MedalStanding[]>(LOCAL_MEDALS_KEY, INITIAL_MEDALS);
    onUpdate(local);
    return () => {};
  }

  try {
    const q = query(collection(db, MEDALS_COLLECTION), orderBy('rank', 'asc'));
    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        if (snapshot.empty) {
          // If Firestore collection is empty yet, fallback to local/initial
          const local = getLocalData<MedalStanding[]>(LOCAL_MEDALS_KEY, INITIAL_MEDALS);
          onUpdate(local);
        } else {
          const items: MedalStanding[] = [];
          snapshot.forEach((doc) => {
            items.push({ id: doc.id, ...doc.data() } as MedalStanding);
          });
          setLocalData(LOCAL_MEDALS_KEY, items);
          onUpdate(items);
        }
      },
      (error) => {
        console.warn('Firestore snapshot error on medals (using local fallback):', error);
        if (onError) onError(error);
        const local = getLocalData<MedalStanding[]>(LOCAL_MEDALS_KEY, INITIAL_MEDALS);
        onUpdate(local);
      }
    );
    return unsubscribe;
  } catch (err) {
    console.warn('Firestore listen exception:', err);
    const local = getLocalData<MedalStanding[]>(LOCAL_MEDALS_KEY, INITIAL_MEDALS);
    onUpdate(local);
    return () => {};
  }
}

// 2. Subscribe to Match Schedules
export function subscribeToSchedules(
  onUpdate: (schedules: MatchSchedule[]) => void,
  onError?: (err: any) => void
): () => void {
  const db = getFirebaseDb();
  if (!db) {
    const local = getLocalData<MatchSchedule[]>(LOCAL_SCHEDULES_KEY, INITIAL_SCHEDULES);
    onUpdate(local);
    return () => {};
  }

  try {
    const q = query(collection(db, SCHEDULES_COLLECTION), orderBy('date', 'asc'));
    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        if (snapshot.empty) {
          const local = getLocalData<MatchSchedule[]>(LOCAL_SCHEDULES_KEY, INITIAL_SCHEDULES);
          onUpdate(local);
        } else {
          const items: MatchSchedule[] = [];
          snapshot.forEach((doc) => {
            items.push({ id: doc.id, ...doc.data() } as MatchSchedule);
          });
          setLocalData(LOCAL_SCHEDULES_KEY, items);
          onUpdate(items);
        }
      },
      (error) => {
        console.warn('Firestore snapshot error on schedules:', error);
        if (onError) onError(error);
        const local = getLocalData<MatchSchedule[]>(LOCAL_SCHEDULES_KEY, INITIAL_SCHEDULES);
        onUpdate(local);
      }
    );
    return unsubscribe;
  } catch (err) {
    const local = getLocalData<MatchSchedule[]>(LOCAL_SCHEDULES_KEY, INITIAL_SCHEDULES);
    onUpdate(local);
    return () => {};
  }
}

// 3. Subscribe to News
export function subscribeToNews(
  onUpdate: (news: NewsArticle[]) => void,
  onError?: (err: any) => void
): () => void {
  const db = getFirebaseDb();
  if (!db) {
    const local = getLocalData<NewsArticle[]>(LOCAL_NEWS_KEY, INITIAL_NEWS);
    onUpdate(local);
    return () => {};
  }

  try {
    const q = collection(db, NEWS_COLLECTION);
    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        if (snapshot.empty) {
          const local = getLocalData<NewsArticle[]>(LOCAL_NEWS_KEY, INITIAL_NEWS);
          onUpdate(local);
        } else {
          const items: NewsArticle[] = [];
          snapshot.forEach((doc) => {
            items.push({ id: doc.id, ...doc.data() } as NewsArticle);
          });
          setLocalData(LOCAL_NEWS_KEY, items);
          onUpdate(items);
        }
      },
      (error) => {
        console.warn('Firestore snapshot error on news:', error);
        if (onError) onError(error);
        const local = getLocalData<NewsArticle[]>(LOCAL_NEWS_KEY, INITIAL_NEWS);
        onUpdate(local);
      }
    );
    return unsubscribe;
  } catch (err) {
    const local = getLocalData<NewsArticle[]>(LOCAL_NEWS_KEY, INITIAL_NEWS);
    onUpdate(local);
    return () => {};
  }
}

// 4. Update or Add Medal
export async function updateMedalItem(medal: MedalStanding): Promise<void> {
  // Update local
  const current = getLocalData<MedalStanding[]>(LOCAL_MEDALS_KEY, INITIAL_MEDALS);
  const updated = current.map(m => m.id === medal.id ? medal : m);
  // Recalculate rank by gold, silver, bronze
  updated.sort((a, b) => {
    if (b.gold !== a.gold) return b.gold - a.gold;
    if (b.silver !== a.silver) return b.silver - a.silver;
    if (b.bronze !== a.bronze) return b.bronze - a.bronze;
    return b.total - a.total;
  });
  updated.forEach((m, idx) => m.rank = idx + 1);
  setLocalData(LOCAL_MEDALS_KEY, updated);

  const db = getFirebaseDb();
  if (db) {
    try {
      const docRef = doc(db, MEDALS_COLLECTION, medal.id);
      await setDoc(docRef, medal, { merge: true });
    } catch (e) {
      console.warn('Firestore write failed, stored locally:', e);
    }
  }
}

// 5. Update Schedule / Match Score
export async function updateScheduleItem(schedule: MatchSchedule): Promise<void> {
  const current = getLocalData<MatchSchedule[]>(LOCAL_SCHEDULES_KEY, INITIAL_SCHEDULES);
  const exists = current.some(s => s.id === schedule.id);
  const updated = exists ? current.map(s => s.id === schedule.id ? schedule : s) : [schedule, ...current];
  setLocalData(LOCAL_SCHEDULES_KEY, updated);

  const db = getFirebaseDb();
  if (db) {
    try {
      const docRef = doc(db, SCHEDULES_COLLECTION, schedule.id);
      await setDoc(docRef, schedule, { merge: true });
    } catch (e) {
      console.warn('Firestore write failed, stored locally:', e);
    }
  }
}

// 6. Seed All Initial Data to Firestore
export async function seedAllToFirestore(): Promise<{ success: boolean; message: string }> {
  const db = getFirebaseDb();
  if (!db) {
    return { success: false, message: 'Database Firebase belum terinisialisasi. Periksa koneksi atau konfigurasi Firebase.' };
  }

  try {
    const batch = writeBatch(db);

    INITIAL_MEDALS.forEach((m) => {
      const ref = doc(db, MEDALS_COLLECTION, m.id);
      batch.set(ref, m);
    });

    INITIAL_SCHEDULES.forEach((s) => {
      const ref = doc(db, SCHEDULES_COLLECTION, s.id);
      batch.set(ref, s);
    });

    INITIAL_NEWS.forEach((n) => {
      const ref = doc(db, NEWS_COLLECTION, n.id);
      batch.set(ref, n);
    });

    await batch.commit();
    return { success: true, message: 'Berhasil mengunggah dan menyinkronkan seluruh data PORPROVSU ke Firestore!' };
  } catch (error: any) {
    console.error('Seed error:', error);
    return { success: false, message: `Gagal sinkronisasi ke Firestore: ${error.message}` };
  }
}
