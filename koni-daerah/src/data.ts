import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore, collection, doc, onSnapshot, setDoc, deleteDoc, Firestore } from 'firebase/firestore';

export interface DistrictItem {
  id: string;
  contingent: string;
  regionCode: string;
  emblemInitials: string;
  badgeBg: string;
}

export interface Athlete {
  id: string;
  name: string;
  gender: 'Putra' | 'Putri';
  contingent: string;
  cabor: string;
  eventNumber: string;
  medals: {
    gold: number;
    silver: number;
    bronze: number;
    total: number;
  };
  achievements: string;
  coachName: string;
}

export interface Coach {
  id: string;
  name: string;
  cabor: string;
  contingent: string;
  certification: string;
  experienceYears: number;
  athletesTrained: number;
  medalsProduced: {
    gold: number;
    silver: number;
    bronze: number;
  };
}

export const DISTRICTS: DistrictItem[] = [
  { id: '1', contingent: 'Kota Medan', regionCode: 'MDN', emblemInitials: 'MDN', badgeBg: '#1E3A8A' },
  { id: '2', contingent: 'Kabupaten Deli Serdang', regionCode: 'DS', emblemInitials: 'DS', badgeBg: '#065F46' },
  { id: '3', contingent: 'Kota Binjai', regionCode: 'BNJ', emblemInitials: 'BNJ', badgeBg: '#7C2D12' },
  { id: '4', contingent: 'Kabupaten Karo', regionCode: 'KAR', emblemInitials: 'KAR', badgeBg: '#831843' },
  { id: '5', contingent: 'Kabupaten Asahan', regionCode: 'ASH', emblemInitials: 'ASH', badgeBg: '#1E293B' },
  { id: '6', contingent: 'Kota Pematangsiantar', regionCode: 'PMS', emblemInitials: 'PMS', badgeBg: '#312E81' },
  { id: '7', contingent: 'Kabupaten Simalungun', regionCode: 'SML', emblemInitials: 'SML', badgeBg: '#064E3B' },
  { id: '8', contingent: 'Kabupaten Serdang Bedagai', regionCode: 'SER', emblemInitials: 'SER', badgeBg: '#713F12' },
  { id: '9', contingent: 'Kabupaten Toba', regionCode: 'TOB', emblemInitials: 'TOB', badgeBg: '#155E75' },
  { id: '10', contingent: 'Kabupaten Labuhanbatu', regionCode: 'LBB', emblemInitials: 'LBB', badgeBg: '#4C1D95' },
  { id: '11', contingent: 'Kabupaten Dairi', regionCode: 'DAI', emblemInitials: 'DAI', badgeBg: '#14532D' },
  { id: '12', contingent: 'Kota Tanjungbalai', regionCode: 'TJB', emblemInitials: 'TJB', badgeBg: '#1E3E62' },
  { id: '13', contingent: 'Kota Tebing Tinggi', regionCode: 'TBT', emblemInitials: 'TBT', badgeBg: '#3F3F46' },
  { id: '14', contingent: 'Kabupaten Langkat', regionCode: 'LKT', emblemInitials: 'LKT', badgeBg: '#047857' },
  { id: '15', contingent: 'Kota Padangsidimpuan', regionCode: 'PSP', emblemInitials: 'PSP', badgeBg: '#854D0E' },
  { id: '16', contingent: 'Kabupaten Tapanuli Utara', regionCode: 'TAP', emblemInitials: 'TAP', badgeBg: '#1E40AF' },
  { id: '17', contingent: 'Kabupaten Samosir', regionCode: 'SMS', emblemInitials: 'SMS', badgeBg: '#0E7490' },
  { id: '18', contingent: 'Kota Sibolga', regionCode: 'SBG', emblemInitials: 'SBG', badgeBg: '#0284C7' },
  { id: '19', contingent: 'Kabupaten Batubara', regionCode: 'BTR', emblemInitials: 'BTR', badgeBg: '#475569' },
  { id: '20', contingent: 'Kabupaten Humbang Hasundutan', regionCode: 'HMB', emblemInitials: 'HMB', badgeBg: '#15803D' },
  { id: '21', contingent: 'Kabupaten Nias', regionCode: 'NIS', emblemInitials: 'NIS', badgeBg: '#B45309' },
  { id: '22', contingent: 'Kota Gunungsitoli', regionCode: 'GNS', emblemInitials: 'GNS', badgeBg: '#0369A1' },
  { id: '23', contingent: 'Kabupaten Mandailing Natal', regionCode: 'MND', emblemInitials: 'MND', badgeBg: '#991B1B' },
  { id: '24', contingent: 'Kabupaten Labuhanbatu Utara', regionCode: 'LBU', emblemInitials: 'LBU', badgeBg: '#5B21B6' },
  { id: '25', contingent: 'Kabupaten Labuhanbatu Selatan', regionCode: 'LBS', emblemInitials: 'LBS', badgeBg: '#6B21A8' },
  { id: '26', contingent: 'Kabupaten Pakpak Bharat', regionCode: 'PKP', emblemInitials: 'PKP', badgeBg: '#166534' },
  { id: '27', contingent: 'Kabupaten Tapanuli Selatan', regionCode: 'TSL', emblemInitials: 'TSL', badgeBg: '#1E3A8A' },
  { id: '28', contingent: 'Kabupaten Tapanuli Tengah', regionCode: 'TTG', emblemInitials: 'TTG', badgeBg: '#0284C7' },
  { id: '29', contingent: 'Kabupaten Padang Lawas', regionCode: 'PDL', emblemInitials: 'PDL', badgeBg: '#92400E' },
  { id: '30', contingent: 'Kabupaten Padang Lawas Utara', regionCode: 'PLU', emblemInitials: 'PLU', badgeBg: '#78350F' },
  { id: '31', contingent: 'Kabupaten Nias Selatan', regionCode: 'NSS', emblemInitials: 'NSS', badgeBg: '#C2410C' },
  { id: '32', contingent: 'Kabupaten Nias Utara', regionCode: 'NSU', emblemInitials: 'NSU', badgeBg: '#EA580C' },
  { id: '33', contingent: 'Kabupaten Nias Barat', regionCode: 'NSB', emblemInitials: 'NSB', badgeBg: '#D97706' },
];

export const OFFICIAL_CABOR_LIST = [
  'Sepak Bola',
  'Futsal',
  'Bola Voli Indoor',
  'Bola Voli Pasir',
  'Atletik',
  'Akuatik / Renang',
  'Pencak Silat',
  'Karate',
  'Taekwondo',
  'Wushu',
  'Catur',
  'Bulu Tangkis',
  'Tenis Meja',
  'Tinju',
  'Billiard',
  'Angkat Besi',
  'Angkat Berat',
  'Binaraga',
  'Gulat',
  'Tarung Derajat',
  'Muaythai',
  'Kickboxing',
  'Sambo',
  'Judo',
  'Sepak Takraw',
  'Petanque',
  'Drumband',
  'Bridge',
  'Gateball',
  'Menembak',
];

// Shared keys & collections with main PORPROVSU site
const STORAGE_KEY = 'porprovsu_firebase_config';
const ATHLETES_COLLECTION = 'porprovsu_athletes';
const COACHES_COLLECTION = 'porprovsu_coaches';
const LOCAL_ATHLETES_KEY = 'local_porprovsu_athletes';
const LOCAL_COACHES_KEY = 'local_porprovsu_coaches';

function getDb(): Firestore | null {
  try {
    let config = {
      apiKey: 'AIzaSyDummyKeyPORPROVSU2026OfficialPortal',
      authDomain: 'porprovsu-official.firebaseapp.com',
      projectId: 'porprovsu-official',
      storageBucket: 'porprovsu-official.appspot.com',
      messagingSenderId: '109823487123',
      appId: '1:109823487123:web:porprovsuofficialsumut',
    };
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed.projectId && parsed.apiKey) config = parsed;
    }
    const app = !getApps().length ? initializeApp(config) : getApp();
    return getFirestore(app);
  } catch {
    return null;
  }
}

export function getLocalList<T>(key: string): T[] {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function setLocalList<T>(key: string, data: T[]): void {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (e) {
    console.warn('localStorage error:', e);
  }
}

export function subscribeAthletes(onUpdate: (items: Athlete[]) => void): () => void {
  const db = getDb();
  if (!db) {
    onUpdate(getLocalList<Athlete>(LOCAL_ATHLETES_KEY));
    return () => {};
  }
  try {
    return onSnapshot(
      collection(db, ATHLETES_COLLECTION),
      (snap) => {
        if (snap.empty) {
          onUpdate(getLocalList<Athlete>(LOCAL_ATHLETES_KEY));
        } else {
          const items: Athlete[] = [];
          snap.forEach((d) => items.push({ id: d.id, ...d.data() } as Athlete));
          setLocalList(LOCAL_ATHLETES_KEY, items);
          onUpdate(items);
        }
      },
      () => onUpdate(getLocalList<Athlete>(LOCAL_ATHLETES_KEY))
    );
  } catch {
    onUpdate(getLocalList<Athlete>(LOCAL_ATHLETES_KEY));
    return () => {};
  }
}

export function subscribeCoaches(onUpdate: (items: Coach[]) => void): () => void {
  const db = getDb();
  if (!db) {
    onUpdate(getLocalList<Coach>(LOCAL_COACHES_KEY));
    return () => {};
  }
  try {
    return onSnapshot(
      collection(db, COACHES_COLLECTION),
      (snap) => {
        if (snap.empty) {
          onUpdate(getLocalList<Coach>(LOCAL_COACHES_KEY));
        } else {
          const items: Coach[] = [];
          snap.forEach((d) => items.push({ id: d.id, ...d.data() } as Coach));
          setLocalList(LOCAL_COACHES_KEY, items);
          onUpdate(items);
        }
      },
      () => onUpdate(getLocalList<Coach>(LOCAL_COACHES_KEY))
    );
  } catch {
    onUpdate(getLocalList<Coach>(LOCAL_COACHES_KEY));
    return () => {};
  }
}

export async function saveAthlete(athlete: Athlete): Promise<void> {
  const list = getLocalList<Athlete>(LOCAL_ATHLETES_KEY);
  const exists = list.some((a) => a.id === athlete.id);
  const next = exists ? list.map((a) => (a.id === athlete.id ? athlete : a)) : [athlete, ...list];
  setLocalList(LOCAL_ATHLETES_KEY, next);

  const db = getDb();
  if (db) {
    try {
      await setDoc(doc(db, ATHLETES_COLLECTION, athlete.id), athlete, { merge: true });
    } catch (e) {
      console.warn('Firestore write fallback:', e);
    }
  }
}

export async function removeAthlete(id: string): Promise<void> {
  const list = getLocalList<Athlete>(LOCAL_ATHLETES_KEY);
  setLocalList(LOCAL_ATHLETES_KEY, list.filter((a) => a.id !== id));

  const db = getDb();
  if (db) {
    try {
      await deleteDoc(doc(db, ATHLETES_COLLECTION, id));
    } catch (e) {
      console.warn('Firestore delete fallback:', e);
    }
  }
}

export async function saveCoach(coach: Coach): Promise<void> {
  const list = getLocalList<Coach>(LOCAL_COACHES_KEY);
  const exists = list.some((c) => c.id === coach.id);
  const next = exists ? list.map((c) => (c.id === coach.id ? coach : c)) : [coach, ...list];
  setLocalList(LOCAL_COACHES_KEY, next);

  const db = getDb();
  if (db) {
    try {
      await setDoc(doc(db, COACHES_COLLECTION, coach.id), coach, { merge: true });
    } catch (e) {
      console.warn('Firestore write fallback:', e);
    }
  }
}

export async function removeCoach(id: string): Promise<void> {
  const list = getLocalList<Coach>(LOCAL_COACHES_KEY);
  setLocalList(LOCAL_COACHES_KEY, list.filter((c) => c.id !== id));

  const db = getDb();
  if (db) {
    try {
      await deleteDoc(doc(db, COACHES_COLLECTION, id));
    } catch (e) {
      console.warn('Firestore delete fallback:', e);
    }
  }
}
