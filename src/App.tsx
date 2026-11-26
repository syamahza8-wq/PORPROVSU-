import React, { useState, useEffect, useMemo } from 'react';
import { IntroLoader } from './components/IntroLoader';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { RunningTicker } from './components/RunningTicker';
import { MedalTable } from './components/MedalTable';
import { MatchScheduleSection } from './components/MatchSchedule';
import { SportsBranches } from './components/SportsBranches';
import { VenuesSection } from './components/VenuesSection';
import { ContingentsSection } from './components/ContingentsSection';
import { AthletesCoachesSection } from './components/AthletesCoachesSection';
import { NewsSection } from './components/NewsSection';
import { GallerySection } from './components/GallerySection';
import { Footer } from './components/Footer';
import { MobileBottomNav } from './components/MobileBottomNav';
import { ArrowLeft } from 'lucide-react';
import {
  MedalStanding,
  MatchSchedule,
  NewsArticle,
  Athlete,
  Coach,
} from './types';
import {
  INITIAL_MEDALS,
  INITIAL_SCHEDULES,
  INITIAL_NEWS,
  INITIAL_ATHLETES,
  INITIAL_COACHES,
  INITIAL_CABOR,
  INITIAL_VENUES,
  INITIAL_GALERI,
} from './constants/initialData';
import {
  subscribeToMedals,
  subscribeToSchedules,
  subscribeToNews,
  subscribeToAthletes,
  subscribeToCoaches,
} from './services/firestoreService';

export function App() {
  const [introDone, setIntroDone] = useState(false);
  const [activeSection, setActiveSection] = useState('beranda');

  // Firebase Firestore Real-time States
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

  const liveMatchesCount = useMemo(
    () => schedules.filter((s) => s.status === 'LIVE').length,
    [schedules]
  );

  const handleNavigate = (section: string) => {
    setActiveSection(section);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] flex flex-col">
      {!introDone && <IntroLoader onComplete={() => setIntroDone(true)} />}

      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        liveMatchesCount={liveMatchesCount}
      />

      <RunningTicker schedules={schedules} />

      <main className="flex-1">
        {activeSection !== 'beranda' && (
          <div className="bg-white border-b border-slate-200/80">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
              <button
                onClick={() => handleNavigate('beranda')}
                className="inline-flex items-center gap-2 text-xs font-extrabold text-[#0284C7] hover:text-[#0369A1] cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Kembali ke Beranda</span>
              </button>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                PORPROVSU XII 2026
              </span>
            </div>
          </div>
        )}

        {activeSection === 'beranda' && (
          <>
            <Hero
              totalContingents={medals.length}
              totalVenues={INITIAL_VENUES.length}
              totalCabor={INITIAL_CABOR.length}
              totalSchedules={schedules.length}
              onNavigate={handleNavigate}
            />

            <MedalTable
              medals={medals}
              athletes={athletes}
              compact={true}
              onViewAll={() => handleNavigate('klasemen')}
            />

            <MatchScheduleSection schedules={schedules} />

            <NewsSection news={news} />

            <GallerySection items={INITIAL_GALERI} />

            <SportsBranches />

            <VenuesSection />

            <ContingentsSection medals={medals} athletes={athletes} />

            <AthletesCoachesSection
              athletes={athletes}
              coaches={coaches}
              medals={medals}
            />
          </>
        )}

        {activeSection === 'klasemen' && (
          <MedalTable medals={medals} athletes={athletes} compact={false} />
        )}

        {activeSection === 'jadwal' && (
          <MatchScheduleSection schedules={schedules} />
        )}

        {activeSection === 'cabor' && <SportsBranches />}

        {activeSection === 'venue' && <VenuesSection />}

        {activeSection === 'kontingen' && (
          <ContingentsSection medals={medals} athletes={athletes} />
        )}

        {activeSection === 'atlet' && (
          <AthletesCoachesSection
            athletes={athletes}
            coaches={coaches}
            medals={medals}
          />
        )}

        {activeSection === 'berita' && <NewsSection news={news} />}

        {activeSection === 'galeri' && <GallerySection items={INITIAL_GALERI} />}
      </main>

      <Footer onNavigate={handleNavigate} />

      <MobileBottomNav
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />
    </div>
  );
}

export default App;
