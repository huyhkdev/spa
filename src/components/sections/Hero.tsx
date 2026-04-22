import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay, EffectFade } from 'swiper/modules';
import { useLanguage } from '../../contexts/LanguageContext';
import slider1 from '../../assets/slider1.png';
import slider2 from '../../assets/slider2.png';
import slider3 from '../../assets/slider3.png';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const heroSlides = [
  {
    image: slider1,
    titleVi: 'Nuôi Dưỡng Thân - An Dưỡng Tâm',
    titleEn: 'Nourish Body - Calm Mind',
    titleKo: '몸을 영양하고 마음을 진정시키다'
  },
  {
    image: slider2,
    titleVi: 'Chạm đến sự thư thái sâu bên trong',
    titleEn: 'Touch Deep Tranquility Within',
    titleKo: '내면의 깊은 평온함에 닿다'
  },
  {
    image: slider3,
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
                      href="https://www.facebook.com/people/Lam-An-Spa/61580592373465/"
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
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
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
