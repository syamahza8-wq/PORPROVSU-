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
import { 
  subscribeToMedals, 
  subscribeToSchedules, 
  subscribeToNews 
} from './services/firestoreService';
import { MedalStanding, MatchSchedule, NewsArticle } from './types';
import { INITIAL_MEDALS, INITIAL_SCHEDULES, INITIAL_NEWS } from './constants/initialData';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('beranda');
  const [isAdminOpen, setIsAdminOpen] = useState<boolean>(false);

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
      
      {/* 1. Running Ticker: Live Scores & Announcements */}
      <RunningTicker schedules={schedules} />

      {/* 2. Official Sticky Header & Navigation */}
      <Navbar 
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenAdmin={() => setIsAdminOpen(true)}
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
      />

      {/* 12. Modal Admin & Firestore Management */}
      <AdminModal
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
        medals={medals}
        schedules={schedules}
      />

    </div>
  );
};
