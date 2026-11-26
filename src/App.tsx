import React, { useState, useEffect } from 'react';
import { RunningTicker } from './components/RunningTicker';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { KadisSpeech } from './components/KadisSpeech';
import { MedalTable } from './components/MedalTable';
import { MatchScheduleSection } from './components/MatchSchedule';
import { SportsBranches } from './components/SportsBranches';
import { VenuesSection } from './components/VenuesSection';
import { ContingentsSection } from './components/ContingentsSection';
import { NewsSection } from './components/NewsSection';
import { Footer } from './components/Footer';
import { AdminModal } from './components/AdminModal';
import { IntroLoader } from './components/IntroLoader';
import { DeveloperNoticeModal } from './components/DeveloperNoticeModal';
import { LoginModal } from './components/LoginModal';
import { 
  subscribeToMedals, 
  subscribeToSchedules, 
  subscribeToNews 
} from './services/firestoreService';
import { MedalStanding, MatchSchedule, NewsArticle } from './types';
import { INITIAL_MEDALS, INITIAL_SCHEDULES, INITIAL_NEWS } from './constants/initialData';

export const App: React.FC = () => {
  // 3-second Intro Loading State (Strictly 3s, no skip)
  const [isLoading, setIsLoading] = useState<boolean>(true);
  // Developer notice modal state
  const [isNoticeOpen, setIsNoticeOpen] = useState<boolean>(false);
  // Admin & Login state
  const [isAdminOpen, setIsAdminOpen] = useState<boolean>(false);
  const [isLoginOpen, setIsLoginOpen] = useState<boolean>(false);
  
  // Current logged in user (from localStorage if exists)
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

  useEffect(() => {
    // 1. Subscribe to Medals (Firestore real-time or local fallback)
    const unsubMedals = subscribeToMedals((data) => {
      setMedals(data);
    });

    // 2. Subscribe to Match Schedules
    const unsubSchedules = subscribeToSchedules((data) => {
      setSchedules(data);
    });

    // 3. Subscribe to News
    const unsubNews = subscribeToNews((data) => {
      setNews(data);
    });

    return () => {
      unsubMedals();
      unsubSchedules();
      unsubNews();
    };
  }, []);

  const handleIntroComplete = () => {
    setIsLoading(false);
    // After 3 seconds loading completes, immediately show the explanation modal
    setIsNoticeOpen(true);
  };

  const handleLoginSuccess = (user: { name: string; role: string }) => {
    setCurrentUser(user);
    // After login, automatically open admin panel for instant control
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
    <div className="min-h-screen flex flex-col bg-brand-surface font-sans text-brand-dark antialiased">
      
      {/* 0. 3-Second Intro Loader: Strict 3 seconds duration, cannot be skipped */}
      {isLoading && (
        <IntroLoader onComplete={handleIntroComplete} />
      )}

      {/* 1. Running Ticker: Live Scores & Announcements */}
      <RunningTicker schedules={schedules} />

      {/* 2. Official Sticky Header & Navigation */}
      <Navbar 
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenAdmin={() => setIsAdminOpen(true)}
        onOpenDeveloperNotice={() => setIsNoticeOpen(true)}
        onOpenLogin={() => setIsLoginOpen(true)}
        currentUser={currentUser}
        onLogout={handleLogout}
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        
        {/* 3. Hero Section with Kadis Backdrop (No neon gradients, deep solid aesthetic) */}
        <div id="beranda">
          <Hero 
            topMedals={medals} 
            onNavigate={handleNavigate} 
          />
        </div>

        {/* 4. Sambutan Resmi Kepala Dinas Pemuda dan Olahraga Provinsi Sumatera Utara */}
        <KadisSpeech />

        {/* 5. Klasemen Perolehan Medali (33 Kabupaten / Kota) */}
        <MedalTable medals={medals} />

        {/* 6. Jadwal & Hasil Pertandingan (Live Score & Filters) */}
        <MatchScheduleSection schedules={schedules} />

        {/* 7. Cabang Olahraga Resmi (28 Cabor) */}
        <SportsBranches />

        {/* 8. 33 Kontingen Kabupaten & Kota */}
        <ContingentsSection />

        {/* 9. Arena & Lokasi Venue Pertandingan */}
        <VenuesSection />

        {/* 10. Berita & Press Release Terkini */}
        <NewsSection news={news} />

      </main>

      {/* 11. Footer Resmi */}
      <Footer 
        onNavigate={handleNavigate}
        onOpenAdmin={() => setIsAdminOpen(true)}
        onOpenLogin={() => setIsLoginOpen(true)}
      />

      {/* 12. Modal Admin & Firestore Management */}
      <AdminModal
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
        medals={medals}
        schedules={schedules}
      />

      {/* 13. Modal Pernyataan Pengembang Muhammad Syam Ahza */}
      <DeveloperNoticeModal
        isOpen={isNoticeOpen}
        onClose={() => setIsNoticeOpen(false)}
      />

      {/* 14. Modal Form Login Panitia & Wasit */}
      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onLoginSuccess={handleLoginSuccess}
      />

    </div>
  );
};
