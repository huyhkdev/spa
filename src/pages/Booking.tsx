import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

export const Booking = () => {
  const { language } = useLanguage();

  const getTitle = () => {
    switch (language) {
      case 'en':
        return 'LAM AN SPA';
      case 'ko':
        return 'LAM AN SPA';
      default:
        return 'LAM AN SPA';
    }
  };

  const getSubtitle = () => {
    switch (language) {
      case 'en':
        return 'Schedule an appointment during a specific time slot.';
      case 'ko':
        return '특정 시간대에 예약을 잡으세요.';
      default:
        return 'Đặt lịch vào khung giờ cụ thể.';
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
    <div className="min-h-screen" style={{ backgroundColor: '#3D5647' }}>
      {/* Booking Section */}
      <section
        className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-screen flex items-center"
        style={{ backgroundColor: '#3D5647' }}
      >
        {/* Decorative Floral Pattern - Left */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/3 opacity-40">
          <svg
            viewBox="0 0 400 300"
            className="w-full h-auto"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="none" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round">
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

        {/* Decorative Floral Pattern - Right */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 opacity-40">
          <svg
            viewBox="0 0 400 300"
            className="w-full h-auto scale-x-[-1]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="none" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round">
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
              {getTitle()}
            </h2>

            {/* Subtitle */}
            <p
              className="text-white/90 text-base md:text-lg mb-12"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 300,
              }}
            >
              {getSubtitle()}
            </p>

            {/* Schedule Times */}
            <div className="mb-12 max-w-2xl mx-auto">
              <p
                className="text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-wide"
                style={{
                  fontFamily: "'Raleway', sans-serif",
                  fontWeight: 300,
                }}
              >
                8:00 AM – 11:00 PM
              </p>
            </div>

            {/* Book Now Button with Messenger Icon */}
            <motion.a
              href="https://www.facebook.com/people/Lam-An-Spa/61580592373465/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-12 py-4 bg-white/95 hover:bg-white text-[#3D5647] rounded-full text-sm md:text-base font-medium uppercase tracking-wider transition-all duration-300 shadow-lg hover:shadow-xl"
              style={{
                fontFamily: "'Raleway', sans-serif",
                fontWeight: 500,
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Messenger Icon */}
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              {getButtonText()}
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
