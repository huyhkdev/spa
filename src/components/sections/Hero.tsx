import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay, EffectFade } from 'swiper/modules';
import { useLanguage } from '../../contexts/LanguageContext';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

const heroSlides = [
  {
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1920&q=80',
    titleVi: 'Chạm đến sự thư thái sâu bên trong',
    titleEn: 'Touch Deep Relaxation Within',
    titleKo: '깊은 휴식을 경험하세요'
  },
  {
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1920&q=80',
    titleVi: 'Tinh hoa cung đình Huế',
    titleEn: 'Imperial Hue Heritage',
    titleKo: '후에 황실 유산'
  },
  {
    image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=1920&q=80',
    titleVi: 'Trải nghiệm spa đẳng cấp',
    titleEn: 'Premium Spa Experience',
    titleKo: '프리미엄 스파 경험'
  }
];

export const Hero = () => {
  const { language, t } = useLanguage();

  const getTitle = (slide: typeof heroSlides[0]) => {
    switch (language) {
      case 'en':
        return slide.titleEn;
      case 'ko':
        return slide.titleKo;
      default:
        return slide.titleVi;
    }
  };

  return (
    <section className="relative h-screen w-full">
      <Swiper
        modules={[Pagination, Navigation, Autoplay, EffectFade]}
        effect="fade"
        pagination={{ 
          clickable: true,
          bulletClass: 'swiper-pagination-bullet hero-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active hero-bullet-active'
        }}
        navigation={{
          nextEl: '.hero-button-next',
          prevEl: '.hero-button-prev'
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false
        }}
        loop
        className="h-full w-full hero-swiper"
      >
        {heroSlides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full">
              {/* Background Image */}
              <img
                src={slide.image}
                alt={getTitle(slide)}
                className="absolute inset-0 w-full h-full object-cover"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />

              {/* Content */}
              <div className="relative z-10 h-full flex items-center justify-center px-4">
                <div className="text-center max-w-4xl">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                  >
                    {/* Decorative Line */}
                    <div className="flex items-center justify-center gap-4 mb-6">
                      <div className="w-16 h-px bg-[#D4AF37]" />
                      <div className="w-2 h-2 rotate-45 bg-[#D4AF37]" />
                      <div className="w-16 h-px bg-[#D4AF37]" />
                    </div>

                    <p className="text-[#D4AF37] text-sm md:text-base uppercase tracking-widest mb-4">
                      {t('hero.subtitle')}
                    </p>
                    
                    <h1
                      className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-light leading-tight mb-8"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {getTitle(slide)}
                    </h1>

                    {/* Decorative Line */}
                    <div className="flex items-center justify-center gap-4 mb-8">
                      <div className="w-16 h-px bg-[#D4AF37]" />
                      <div className="w-2 h-2 rotate-45 bg-[#D4AF37]" />
                      <div className="w-16 h-px bg-[#D4AF37]" />
                    </div>

                    {/* Book Appointment Button */}
                    <motion.a
                      href="https://m.me/YOUR_PAGE_ID"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 px-8 py-4 bg-[#D4AF37] text-white font-semibold uppercase tracking-wider rounded-full hover:bg-[#b8962f] transition-all duration-300 shadow-lg hover:shadow-2xl text-sm md:text-base"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8, duration: 0.8 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.477 2 2 6.145 2 11.243c0 2.896 1.447 5.482 3.71 7.162V22l3.447-1.89c.92.255 1.895.39 2.843.39 5.523 0 10-4.145 10-9.257C22 6.145 17.523 2 12 2zm.993 12.535l-2.557-2.73-4.993 2.73 5.492-5.828 2.623 2.73 4.927-2.73-5.492 5.828z"/>
                      </svg>
                      BOOK YOUR APPOINTMENT NOW!
                    </motion.a>
                  </motion.div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <button className="hero-button-prev absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-[#D4AF37] transition-all duration-300">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button className="hero-button-next absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-[#D4AF37] transition-all duration-300">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Custom Swiper Styles */}
      <style>{`
        .hero-swiper .swiper-pagination {
          bottom: 40px;
        }
        .hero-bullet {
          width: 12px;
          height: 12px;
          background: rgba(255, 255, 255, 0.3);
          opacity: 1;
          margin: 0 6px;
          transition: all 0.3s;
        }
        .hero-bullet-active {
          background: #D4AF37;
          width: 40px;
          border-radius: 6px;
        }
      `}</style>
    </section>
  );
};
