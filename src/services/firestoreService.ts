import { 
  collection, 
  doc, 
  onSnapshot, 
  setDoc, 
  writeBatch,
  query,
  orderBy
} from 'firebase/firestore';
import { getFirebaseDb } from './firebase';
import { MedalStanding, MatchSchedule, NewsArticle, Athlete, Coach } from '../types';
import { 
  INITIAL_MEDALS, 
  INITIAL_SCHEDULES, 
  INITIAL_NEWS, 
  INITIAL_ATHLETES, 
  INITIAL_COACHES 
} from '../constants/initialData';

const MEDALS_COLLECTION = 'porprovsu_medals';
const SCHEDULES_COLLECTION = 'porprovsu_schedules';
const NEWS_COLLECTION = 'porprovsu_news';
const ATHLETES_COLLECTION = 'porprovsu_athletes';
const COACHES_COLLECTION = 'porprovsu_coaches';

const LOCAL_MEDALS_KEY = 'local_porprovsu_medals';
const LOCAL_SCHEDULES_KEY = 'local_porprovsu_schedules';
const LOCAL_NEWS_KEY = 'local_porprovsu_news';
const LOCAL_ATHLETES_KEY = 'local_porprovsu_athletes';
const LOCAL_COACHES_KEY = 'local_porprovsu_coaches';

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
        if (onError) onError(error);
        const local = getLocalData<MedalStanding[]>(LOCAL_MEDALS_KEY, INITIAL_MEDALS);
        onUpdate(local);
      }
    );
    return unsubscribe;
  } catch (err) {
    const local = getLocalData<MedalStanding[]>(LOCAL_MEDALS_KEY, INITIAL_MEDALS);
    onUpdate(local);
    return () => {};
  }
}

// 2. Subscribe to Athletes
export function subscribeToAthletes(
  onUpdate: (athletes: Athlete[]) => void
): () => void {
  const db = getFirebaseDb();
  if (!db) {
    const local = getLocalData<Athlete[]>(LOCAL_ATHLETES_KEY, INITIAL_ATHLETES);
    onUpdate(local);
    return () => {};
  }

  try {
    const q = collection(db, ATHLETES_COLLECTION);
    return onSnapshot(q, (snapshot) => {
      if (snapshot.empty) {
        onUpdate(getLocalData<Athlete[]>(LOCAL_ATHLETES_KEY, INITIAL_ATHLETES));
      } else {
        const items: Athlete[] = [];
        snapshot.forEach((doc) => items.push({ id: doc.id, ...doc.data() } as Athlete));
        setLocalData(LOCAL_ATHLETES_KEY, items);
        onUpdate(items);
      }
    }, () => {
      onUpdate(getLocalData<Athlete[]>(LOCAL_ATHLETES_KEY, INITIAL_ATHLETES));
    });
  } catch {
    onUpdate(getLocalData<Athlete[]>(LOCAL_ATHLETES_KEY, INITIAL_ATHLETES));
    return () => {};
  }
}

// 3. Subscribe to Coaches
export function subscribeToCoaches(
  onUpdate: (coaches: Coach[]) => void
): () => void {
  const db = getFirebaseDb();
  if (!db) {
    const local = getLocalData<Coach[]>(LOCAL_COACHES_KEY, INITIAL_COACHES);
    onUpdate(local);
    return () => {};
  }

  try {
    const q = collection(db, COACHES_COLLECTION);
    return onSnapshot(q, (snapshot) => {
      if (snapshot.empty) {
        onUpdate(getLocalData<Coach[]>(LOCAL_COACHES_KEY, INITIAL_COACHES));
      } else {
        const items: Coach[] = [];
        snapshot.forEach((doc) => items.push({ id: doc.id, ...doc.data() } as Coach));
        setLocalData(LOCAL_COACHES_KEY, items);
        onUpdate(items);
      }
    }, () => {
      onUpdate(getLocalData<Coach[]>(LOCAL_COACHES_KEY, INITIAL_COACHES));
    });
  } catch {
    onUpdate(getLocalData<Coach[]>(LOCAL_COACHES_KEY, INITIAL_COACHES));
    return () => {};
  }
}

// 4. Subscribe to Match Schedules
export function subscribeToSchedules(
  onUpdate: (schedules: MatchSchedule[]) => void
): () => void {
  const db = getFirebaseDb();
  if (!db) {
    const local = getLocalData<MatchSchedule[]>(LOCAL_SCHEDULES_KEY, INITIAL_SCHEDULES);
    onUpdate(local);
    return () => {};
  }

  try {
    const q = query(collection(db, SCHEDULES_COLLECTION), orderBy('date', 'asc'));
    return onSnapshot(q, (snapshot) => {
      if (snapshot.empty) {
        onUpdate(getLocalData<MatchSchedule[]>(LOCAL_SCHEDULES_KEY, INITIAL_SCHEDULES));
      } else {
        const items: MatchSchedule[] = [];
        snapshot.forEach((doc) => items.push({ id: doc.id, ...doc.data() } as MatchSchedule));
        setLocalData(LOCAL_SCHEDULES_KEY, items);
        onUpdate(items);
      }
    }, () => {
      onUpdate(getLocalData<MatchSchedule[]>(LOCAL_SCHEDULES_KEY, INITIAL_SCHEDULES));
    });
  } catch {
    onUpdate(getLocalData<MatchSchedule[]>(LOCAL_SCHEDULES_KEY, INITIAL_SCHEDULES));
    return () => {};
  }
}

// 5. Subscribe to News
export function subscribeToNews(
  onUpdate: (news: NewsArticle[]) => void
): () => void {
  const db = getFirebaseDb();
  if (!db) {
    onUpdate(getLocalData<NewsArticle[]>(LOCAL_NEWS_KEY, INITIAL_NEWS));
    return () => {};
  }

  try {
    const q = collection(db, NEWS_COLLECTION);
    return onSnapshot(q, (snapshot) => {
      if (snapshot.empty) {
        onUpdate(getLocalData<NewsArticle[]>(LOCAL_NEWS_KEY, INITIAL_NEWS));
      } else {
        const items: NewsArticle[] = [];
        snapshot.forEach((doc) => items.push({ id: doc.id, ...doc.data() } as NewsArticle));
        setLocalData(LOCAL_NEWS_KEY, items);
        onUpdate(items);
      }
    }, () => {
      onUpdate(getLocalData<NewsArticle[]>(LOCAL_NEWS_KEY, INITIAL_NEWS));
    });
  } catch {
    onUpdate(getLocalData<NewsArticle[]>(LOCAL_NEWS_KEY, INITIAL_NEWS));
    return () => {};
  }
}

// 6. Update Medal
export async function updateMedalItem(medal: MedalStanding): Promise<void> {
  const current = getLocalData<MedalStanding[]>(LOCAL_MEDALS_KEY, INITIAL_MEDALS);
  const updated = current.map(m => m.id === medal.id ? medal : m);
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

// 7. Update Schedule / Score
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

// 7b. Add / Update Athlete
export async function addAthleteItem(athlete: Athlete): Promise<void> {
  const current = getLocalData<Athlete[]>(LOCAL_ATHLETES_KEY, INITIAL_ATHLETES);
  const exists = current.some((a) => a.id === athlete.id);
  const updated = exists
    ? current.map((a) => (a.id === athlete.id ? athlete : a))
    : [athlete, ...current];
  setLocalData(LOCAL_ATHLETES_KEY, updated);

  const db = getFirebaseDb();
  if (db) {
    try {
      const docRef = doc(db, ATHLETES_COLLECTION, athlete.id);
      await setDoc(docRef, athlete, { merge: true });
    } catch (e) {
      console.warn('Firestore write failed, stored locally:', e);
    }
  }
}

// 7c. Add Coach
export async function addCoachItem(coach: Coach): Promise<void> {
  const current = getLocalData<Coach[]>(LOCAL_COACHES_KEY, INITIAL_COACHES);
  const exists = current.some((c) => c.id === coach.id);
  const updated = exists
    ? current.map((c) => (c.id === coach.id ? coach : c))
    : [coach, ...current];
  setLocalData(LOCAL_COACHES_KEY, updated);

  const db = getFirebaseDb();
  if (db) {
    try {
      const docRef = doc(db, COACHES_COLLECTION, coach.id);
      await setDoc(docRef, coach, { merge: true });
    } catch (e) {
      console.warn('Firestore write failed, stored locally:', e);
    }
  }
}

// 8. Seed All to Firestore
export async function seedAllToFirestore(): Promise<{ success: boolean; message: string }> {
  const db = getFirebaseDb();
  if (!db) {
    return { success: false, message: 'Database Firebase belum terinisialisasi. Periksa konfigurasi Firebase.' };
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

    INITIAL_ATHLETES.forEach((a) => {
      const ref = doc(db, ATHLETES_COLLECTION, a.id);
      batch.set(ref, a);
    });

    INITIAL_COACHES.forEach((c) => {
      const ref = doc(db, COACHES_COLLECTION, c.id);
      batch.set(ref, c);
    });

    await batch.commit();
    return { success: true, message: 'Berhasil mengunggah Medali, Jadwal, Atlet, & Pelatih ke Firestore!' };
  } catch (error: any) {
    return { success: false, message: `Gagal sinkronisasi: ${error.message}` };
  }
}
