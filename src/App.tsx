import React, { useState, useEffect } from 'react';
import { RunningTicker } from './components/RunningTicker';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MedalTable } from './components/MedalTable';
import { AthletesCoachesSection } from './components/AthletesCoachesSection';
import { MatchScheduleSection } from './components/MatchSchedule';
import { SportsBranches } from './components/SportsBranches';
import { VenuesSection } from './components/VenuesSection';
import { ContingentsSection } from './components/ContingentsSection';
import { OfficialFormSection } from './components/OfficialFormSection';
import { NewsSection } from './components/NewsSection';
import { Footer } from './components/Footer';
import { AdminModal } from './components/AdminModal';
import { IntroLoader } from './components/IntroLoader';
import { DeveloperNoticeModal } from './components/DeveloperNoticeModal';
import { LoginModal } from './components/LoginModal';
import { MobileBottomNav } from './components/MobileBottomNav';
import {
  subscribeToMedals,
  subscribeToSchedules,
  subscribeToNews,
  subscribeToAthletes,
  subscribeToCoaches,
  addAthleteItem,
} from './services/firestoreService';
import { MedalStanding, MatchSchedule, NewsArticle, Athlete, Coach } from './types';
import {
  INITIAL_MEDALS,
  INITIAL_SCHEDULES,
  INITIAL_NEWS,
  INITIAL_ATHLETES,
  INITIAL_COACHES,
} from './constants/initialData';

export const App: React.FC = () => {
  // 3-second Intro Loading State (Strictly 3s, no skip)
  const [isLoading, setIsLoading] = useState<boolean>(true);
  // Developer notice modal state
  const [isNoticeOpen, setIsNoticeOpen] = useState<boolean>(false);
  // Admin & Login state
  const [isAdminOpen, setIsAdminOpen] = useState<boolean>(false);
  const [isLoginOpen, setIsLoginOpen] = useState<boolean>(false);

  const [currentUser, setCurrentUser] = useState<{ name: string; role: string } | null>(() => {
    try {
      const saved = localStorage.getItem('porprovsu_user');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const [activeSection, setActiveSection] = useState<string>('beranda');

  // Real-time Firestore state
  const [medals, setMedals] = useState<MedalStanding[]>(INITIAL_MEDALS);
  const [schedules, setSchedules] = useState<MatchSchedule[]>(INITIAL_SCHEDULES);
  const [news, setNews] = useState<NewsArticle[]>(INITIAL_NEWS);
  const [athletes, setAthletes] = useState<Athlete[]>(INITIAL_ATHLETES);
  const [coaches, setCoaches] = useState<Coach[]>(INITIAL_COACHES);

  useEffect(() => {
    const unsubMedals = subscribeToMedals((data) => setMedals(data));
    const unsubSchedules = subscribeToSchedules((data) => setSchedules(data));
    const unsubNews = subscribeToNews((data) => setNews(data));
    const unsubAthletes = subscribeToAthletes((data) => setAthletes(data));
    const unsubCoaches = subscribeToCoaches((data) => setCoaches(data));

    return () => {
      unsubMedals();
      unsubSchedules();
      unsubNews();
      unsubAthletes();
      unsubCoaches();
    };
  }, []);

  const handleIntroComplete = () => {
    setIsLoading(false);
    setIsNoticeOpen(true);
  };

  const handleLoginSuccess = (user: { name: string; role: string }) => {
    setCurrentUser(user);
    setIsAdminOpen(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('porprovsu_user');
    setCurrentUser(null);
  };

  const handleAddAthlete = async (athlete: Athlete) => {
    await addAthleteItem(athlete);
    // Ensure instant UI update even in local fallback mode
    setAthletes((prev) => [athlete, ...prev.filter((item) => item.id !== athlete.id)]);
  };

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'beranda') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-brand-surface font-sans text-brand-dark antialiased">
      {/* 0. 3-Second Intro Loader: Strict 3 seconds, no skip */}
      {isLoading && <IntroLoader onComplete={handleIntroComplete} />}

      {/* 1. Running Ticker */}
      <RunningTicker schedules={schedules} />

      {/* 2. Clean Sticky Header */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenAdmin={() => setIsAdminOpen(true)}
        onOpenDeveloperNotice={() => setIsNoticeOpen(true)}
        onOpenLogin={() => setIsLoginOpen(true)}
        currentUser={currentUser}
        onLogout={handleLogout}
      />

      {/* Main Content (Bright, Mobile-First, NO Kata Sambutan) */}
      <main className="flex-grow">
        {/* 3. Bright Hero Section */}
        <div id="beranda">
          <Hero
            topMedals={medals}
            athletesCount={athletes.length}
            coachesCount={coaches.length}
            onNavigate={handleNavigate}
          />
        </div>

        {/* 4. Klasemen Medali 33 Kabupaten/Kota + Logo Daerah */}
        <MedalTable medals={medals} />

        {/* 5. Data Atlet, Pelatih, dan Medali Perseorangan */}
        <AthletesCoachesSection
          athletes={athletes}
          coaches={coaches}
          medals={medals}
        />

        {/* 6. Lokasi Venue & Cabor Apa Saja */}
        <VenuesSection />

        {/* 7. Cabang Olahraga Resmi (28 Cabor) */}
        <SportsBranches />

        {/* 8. Jadwal & Hasil Pertandingan */}
        <MatchScheduleSection schedules={schedules} />

        {/* 9. 33 Kontingen Kabupaten & Kota */}
        <ContingentsSection medals={medals} />

        {/* 10. Form Input & Login dengan Background Foto Kadis (Tanpa Kata Sambutan) */}
        <OfficialFormSection
          onAddAthlete={handleAddAthlete}
          onLoginSuccess={(u) => setCurrentUser(u)}
          currentUser={currentUser}
        />

        {/* 11. Berita Terkini */}
        <NewsSection news={news} />
      </main>

      {/* 12. Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenAdmin={() => setIsAdminOpen(true)}
        onOpenLogin={() => setIsLoginOpen(true)}
      />

      {/* 13. Mobile Bottom Navigation Bar */}
      <MobileBottomNav
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      {/* 14. Modals */}
      <AdminModal
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
        medals={medals}
        schedules={schedules}
      />

      <DeveloperNoticeModal
        isOpen={isNoticeOpen}
        onClose={() => setIsNoticeOpen(false)}
      />

      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onLoginSuccess={handleLoginSuccess}
      />
    </div>
  );
};
