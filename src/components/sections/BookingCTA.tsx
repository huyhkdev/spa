import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';

export const BookingCTA = () => {
  const { language } = useLanguage();

  const getScheduleText = () => {
    switch (language) {
      case 'en':
        return 'Schedule and opening hours';
      case 'ko':
        return '일정 및 영업 시간';
      default:
        return 'Đặt lịch vào khung giờ';
    }
  };

  const getButtonText = () => {
    switch (language) {
      case 'en':
        return 'BOOK NOW';
      case 'ko':
        return '지금 예약';
      default:
        return 'ĐẶT LỊCH NGAY';
    }
  };

  return (
    <section
      className="relative py-20 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{ backgroundColor: '#872D29' }}
    >
      {/* Decorative Floral Pattern - Left */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/3 opacity-40">
        <svg
          viewBox="0 0 400 300"
          className="w-full h-auto"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round">
            {/* Floral ornamental pattern */}
            <path d="M50 150 Q80 120, 100 150 Q80 180, 50 150 Z" />
            <path d="M100 150 Q130 120, 150 150 Q130 180, 100 150 Z" />
            <path d="M150 150 Q180 130, 200 150 Q180 170, 150 150 Z" />
            <path d="M75 100 Q90 80, 105 100 Q90 120, 75 100 Z" />
            <path d="M125 100 Q140 80, 155 100 Q140 120, 125 100 Z" />
            <path d="M75 200 Q90 180, 105 200 Q90 220, 75 200 Z" />
            <path d="M125 200 Q140 180, 155 200 Q140 220, 125 200 Z" />
            
            {/* Leaf details */}
            <path d="M60 140 C70 130, 80 130, 90 140" />
            <path d="M110 140 C120 130, 130 130, 140 140" />
            <path d="M60 160 C70 170, 80 170, 90 160" />
            <path d="M110 160 C120 170, 130 170, 140 160" />
            
            {/* Curved stems */}
            <path d="M100 150 Q120 100, 140 80" />
            <path d="M100 150 Q120 200, 140 220" />
            <path d="M150 150 Q170 120, 190 100" />
            <path d="M150 150 Q170 180, 190 200" />
          </g>
        </svg>
      </div>

      {/* Decorative Floral Pattern - Right */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 opacity-40">
        <svg
          viewBox="0 0 400 300"
          className="w-full h-auto scale-x-[-1]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round">
            {/* Mirror the same pattern */}
            <path d="M50 150 Q80 120, 100 150 Q80 180, 50 150 Z" />
            <path d="M100 150 Q130 120, 150 150 Q130 180, 100 150 Z" />
            <path d="M150 150 Q180 130, 200 150 Q180 170, 150 150 Z" />
            <path d="M75 100 Q90 80, 105 100 Q90 120, 75 100 Z" />
            <path d="M125 100 Q140 80, 155 100 Q140 120, 125 100 Z" />
            <path d="M75 200 Q90 180, 105 200 Q90 220, 75 200 Z" />
            <path d="M125 200 Q140 180, 155 200 Q140 220, 125 200 Z" />
            <path d="M60 140 C70 130, 80 130, 90 140" />
            <path d="M110 140 C120 130, 130 130, 140 140" />
            <path d="M60 160 C70 170, 80 170, 90 160" />
            <path d="M110 160 C120 170, 130 170, 140 160" />
            <path d="M100 150 Q120 100, 140 80" />
            <path d="M100 150 Q120 200, 140 220" />
            <path d="M150 150 Q170 120, 190 100" />
            <path d="M150 150 Q170 180, 190 200" />
          </g>
        </svg>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Title */}
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-normal mb-4 text-white tracking-wider"
            style={{
              fontFamily: "'Raleway', sans-serif",
              fontWeight: 400,
            }}
          >
            MAIA IMPERIAL SPA
          </h2>

          {/* Subtitle */}
          <p
            className="text-white/90 text-base md:text-lg mb-6"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 300,
            }}
          >
            {getScheduleText()}
          </p>

          {/* Time */}
          <p
            className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-8 tracking-wide"
            style={{
              fontFamily: "'Raleway', sans-serif",
              fontWeight: 300,
            }}
          >
            9:00 – 00:30
          </p>

          {/* Book Now Button */}
          <motion.a
            href="https://m.me/YOUR_PAGE_ID"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-12 py-4 bg-white/95 hover:bg-white text-[#9B4444] rounded-full text-sm md:text-base font-medium uppercase tracking-wider transition-all duration-300 shadow-lg hover:shadow-xl"
            style={{
              fontFamily: "'Raleway', sans-serif",
              fontWeight: 500,
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            {getButtonText()}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
