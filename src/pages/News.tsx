import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { newsItems } from '../data/news';
import { Calendar, ArrowRight } from 'lucide-react';

export const News = () => {
  const { t, language } = useLanguage();
  const navigate = useNavigate();

  const getTitle = (item: typeof newsItems[0]) => {
    switch (language) {
      case 'en':
        return item.titleEn;
      case 'ko':
        return item.titleKo;
      default:
        return item.title;
    }
  };

  const getExcerpt = (item: typeof newsItems[0]) => {
    switch (language) {
      case 'en':
        return item.excerptEn;
      case 'ko':
        return item.excerptKo;
      default:
        return item.excerpt;
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat(language === 'vi' ? 'vi-VN' : language === 'ko' ? 'ko-KR' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  };

  return (
    <div className="min-h-screen bg-[#FDF8F4]">
      {/* News Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#3D5647' }}>
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p
              className="text-3xl md:text-4xl mb-4"
              style={{ 
                fontFamily: "'Satisfy', cursive",
                color: '#D4AF37'
              }}
            >
              {t('news.latest')}
            </p>
            <h1
              className="text-3xl md:text-4xl lg:text-5xl font-normal mb-6 text-white tracking-wider"
              style={{ 
                fontFamily: "'Raleway', sans-serif",
                fontWeight: 400
              }}
            >
              {t('news.title')}
            </h1>
            <p className="text-white/80 max-w-2xl mx-auto">
              Cập nhật tin tức, ưu đãi và mẹo chăm sóc sức khỏe từ Lam An Spa
            </p>
          </motion.div>

          {/* Featured Article */}
          {newsItems.length > 0 && (
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-16 bg-white rounded-lg shadow-xl overflow-hidden cursor-pointer"
              onClick={() => navigate(`/tin-tuc/${newsItems[0].id}`)}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 lg:h-full">
                  <img
                    src={newsItems[0].image}
                    alt={getTitle(newsItems[0])}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-[#D4AF37] text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Featured
                  </div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                    <Calendar size={16} />
                    <span>{formatDate(newsItems[0].date)}</span>
                  </div>
                  <h2
                    className="text-3xl font-light mb-4 text-[#1A1A1A]"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {getTitle(newsItems[0])}
                  </h2>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {getExcerpt(newsItems[0])}
                  </p>
                  <button className="inline-flex items-center gap-2 text-[#D4AF37] font-medium hover:gap-3 transition-all">
                    {t('news.readMore')}
                    <ArrowRight size={20} />
                  </button>
                </div>
              </div>
            </motion.article>
          )}

          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.slice(1).map((item, index) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group cursor-pointer"
                onClick={() => navigate(`/tin-tuc/${item.id}`)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={getTitle(item)}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                    <Calendar size={14} />
                    <span>{formatDate(item.date)}</span>
                  </div>
                  <h3
                    className="text-xl font-light mb-3 text-[#1A1A1A] line-clamp-2"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {getTitle(item)}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                    {getExcerpt(item)}
                  </p>
                  <button className="inline-flex items-center gap-2 text-[#D4AF37] text-sm font-medium hover:gap-3 transition-all">
                    {t('news.readMore')}
                    <ArrowRight size={16} />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
