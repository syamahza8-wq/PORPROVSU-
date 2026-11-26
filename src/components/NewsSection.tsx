import React, { useMemo, useState } from 'react';
import { Newspaper, Calendar, User, ArrowRight, X, Clock } from 'lucide-react';
import { NewsArticle } from '../types';

interface NewsSectionProps {
  news: NewsArticle[];
}

export const NewsSection: React.FC<NewsSectionProps> = ({ news }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null);

  const categories = useMemo(() => {
    const uniq = Array.from(new Set(news.map((n) => n.category)));
    return ['Semua', ...uniq];
  }, [news]);

  const filteredNews = useMemo(() => {
    if (selectedCategory === 'Semua') return news;
    return news.filter((n) => n.category === selectedCategory);
  }, [news, selectedCategory]);

  return (
    <section id="berita" className="py-10 sm:py-14 bg-slate-50/70 border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-[#0284C7] text-[11px] font-extrabold uppercase tracking-wider mb-2.5">
              <Newspaper className="w-3.5 h-3.5" />
              <span>Kabar Terkini PORPROVSU</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
              Berita &amp; Liputan Resmi PORPROVSU XII
            </h2>
            <p className="text-sm text-slate-600 mt-1 max-w-2xl">
              Informasi resmi, kesiapan kontingen Kabupaten/Kota, serta liputan persiapan cabang olahraga Sumatera Utara.
            </p>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold border transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#0284C7] border-[#0284C7] text-white shadow-xs'
                    : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredNews.map((article) => (
            <article
              key={article.id}
              onClick={() => setSelectedArticle(article)}
              className="group bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-xl hover:border-sky-200 transition-all flex flex-col cursor-pointer"
            >
              <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/95 text-[#0284C7] text-[10px] font-extrabold uppercase tracking-wider shadow-xs">
                  {article.category}
                </span>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-[11px] font-semibold text-slate-400 mb-2">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {article.date}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-extrabold text-[#0F172A] group-hover:text-[#0284C7] transition-colors leading-snug mb-2 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold">
                  <span className="inline-flex items-center gap-1.5 text-slate-500">
                    <User className="w-3.5 h-3.5" />
                    {article.author}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[#0284C7] group-hover:translate-x-0.5 transition-transform">
                    Baca <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Article Detail Modal */}
      {selectedArticle && (
        <div
          className="fixed inset-0 z-50 bg-slate-900/75 backdrop-blur-xs flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setSelectedArticle(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-2xl w-full max-h-[88vh] overflow-y-auto shadow-2xl border border-slate-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-video bg-slate-900">
              <img
                src={selectedArticle.image}
                alt={selectedArticle.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedArticle(null)}
                className="sticky sm:absolute top-3 right-3 float-right m-3 sm:m-0 w-9 h-9 rounded-full bg-white/95 hover:bg-white text-[#0F172A] flex items-center justify-center shadow-md cursor-pointer"
                aria-label="Tutup berita"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-5 sm:p-8">
              <div className="flex flex-wrap items-center gap-2.5 text-xs font-bold mb-3">
                <span className="px-2.5 py-1 rounded-full bg-sky-50 border border-sky-200 text-[#0284C7] uppercase tracking-wider text-[10px]">
                  {selectedArticle.category}
                </span>
                <span className="text-slate-400">{selectedArticle.date}</span>
                <span className="text-slate-400">• {selectedArticle.author}</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-[#0F172A] leading-snug mb-4">
                {selectedArticle.title}
              </h3>

              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                {selectedArticle.content.split(/\n+/).map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
