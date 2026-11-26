import React, { useState } from 'react';
import { Newspaper, Calendar, Clock, ChevronRight, X, User } from 'lucide-react';
import { NewsArticle } from '../types';

interface NewsSectionProps {
  news: NewsArticle[];
}

export const NewsSection: React.FC<NewsSectionProps> = ({ news }) => {
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null);

  return (
    <section id="berita" className="py-14 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-brand-royal text-xs font-bold uppercase tracking-wider mb-2">
            <Newspaper className="w-3.5 h-3.5 text-brand-gold" />
            <span>Kabar & Liputan Media</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-brand-dark tracking-tight">
            Berita Terkini PORPROVSU
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            Informasi resmi capaian rekor atlet, klasemen daerah, dan agenda harian pertandingan.
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {news.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedArticle(item)}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md hover:border-brand-royal transition-all flex flex-col justify-between cursor-pointer group"
            >
              <div>
                <div className="relative h-44 overflow-hidden bg-slate-50 border-b border-slate-100 p-4 flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 bg-brand-royal text-white text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
                    {item.category}
                  </div>
                </div>

                <div className="p-4 sm:p-5 space-y-2">
                  <div className="flex items-center gap-2 text-[11px] text-slate-400 font-medium">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-brand-gold" />
                      {item.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {item.readTime}
                    </span>
                  </div>

                  <h3 className="font-bold text-sm sm:text-base text-slate-900 group-hover:text-brand-royal transition-colors line-clamp-2">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-500 line-clamp-3 leading-relaxed">
                    {item.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-4 sm:p-5 pt-0 flex items-center justify-between text-xs font-bold text-brand-royal group-hover:text-brand-gold transition-colors">
                <span>Baca Selengkapnya</span>
                <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Article Detail Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 p-6 sm:p-8 space-y-5">
            <div className="flex items-start justify-between gap-4">
              <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-brand-royal text-white">
                {selectedArticle.category}
              </span>
              <button
                onClick={() => setSelectedArticle(null)}
                className="p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-snug">
                {selectedArticle.title}
              </h3>
              <div className="flex items-center gap-3 text-xs text-slate-500 font-medium pb-2 border-b border-slate-100">
                <span className="flex items-center gap-1">
                  <User className="w-3.5 h-3.5 text-brand-gold" />
                  {selectedArticle.author}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {selectedArticle.date}
                </span>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden max-h-56 bg-slate-50 border border-slate-200 p-4 flex items-center justify-center">
              <img
                src={selectedArticle.image}
                alt={selectedArticle.title}
                className="max-h-48 object-contain"
              />
            </div>

            <div className="text-slate-700 text-sm sm:text-base leading-relaxed space-y-4">
              <p className="font-semibold text-slate-900 italic">{selectedArticle.excerpt}</p>
              <p>{selectedArticle.content}</p>
              <p>
                Ajang PORPROVSU terus menjadi barometer pembinaan olahraga daerah yang transparan, akuntabel, dan kompetitif dalam mencetak atlet bermental juara.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setSelectedArticle(null)}
                className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs uppercase tracking-wider"
              >
                Tutup Artikel
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
