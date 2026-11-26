import React, { useState, useEffect } from 'react';
import { RunningTicker } from './components/RunningTicker';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
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
  const [isNoticeOpen, setIsNoticeOpen] = useState<boolean>(false);
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
    <div className="min-h-screen flex flex-col bg-brand-surface font-sans text-brand-dark antialiased overflow-x-hidden">
      {/* 0. 3-Second Intro Loader: Strict 3 seconds, no skip */}
      {isLoading && <IntroLoader onComplete={handleIntroComplete} />}

      {/* 1. Running Ticker */}
      <RunningTicker schedules={schedules} />

      {/* 2. Clean 2-Tier Sticky Header */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenAdmin={() => setIsAdminOpen(true)}
        onOpenDeveloperNotice={() => setIsNoticeOpen(true)}
        onOpenLogin={() => setIsLoginOpen(true)}
        currentUser={currentUser}
        onLogout={handleLogout}
      />

      {/* Main Content */}
      <main className="flex-grow">
        <div id="beranda">
          <Hero
            athletesCount={athletes.length}
            coachesCount={coaches.length}
            onNavigate={handleNavigate}
          />
        </div>

        {/* Data Atlet & Pelatih (kosong secara default; hanya diisi lewat portal KONI Kab/Kota) */}
        <AthletesCoachesSection
          athletes={athletes}
          coaches={coaches}
          medals={medals}
        />

        {/* Lokasi Venue Resmi porprovsumut.com & Cabor Apa Saja */}
        <VenuesSection />

        {/* 30 Cabang Olahraga Resmi PORPROVSU XII */}
        <SportsBranches />

        {/* Jadwal & Skor Pertandingan */}
        <MatchScheduleSection schedules={schedules} />

        {/* 33 Kabupaten & Kota + Logo Daerah */}
        <ContingentsSection medals={medals} athletes={athletes} />

        {/* Form Akses Portal KONI Kab/Kota dengan Background Foto Kadis */}
        <OfficialFormSection athletes={athletes} />

        {/* Berita & Informasi Resmi */}
        <NewsSection news={news} />
      </main>

      <Footer
        onNavigate={handleNavigate}
        onOpenAdmin={() => setIsAdminOpen(true)}
        onOpenLogin={() => setIsLoginOpen(true)}
      />

      <MobileBottomNav
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      <AdminModal
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
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
