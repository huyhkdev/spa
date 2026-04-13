import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

export const Booking = () => {
  const { language } = useLanguage();

  const getTitle = () => {
    switch (language) {
      case 'en':
        return 'MAIA IMPERIAL SPA';
      case 'ko':
        return 'MAIA IMPERIAL SPA';
      default:
        return 'MAIA IMPERIAL SPA';
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

  const getScheduleTitle = () => {
    switch (language) {
      case 'en':
        return 'MORNING SESSION';
      case 'ko':
        return '오전 세션';
      default:
        return 'BUỔI SÁNG';
    }
  };

  const getAfternoonTitle = () => {
    switch (language) {
      case 'en':
        return 'AFTERNOON & EVENING';
      case 'ko':
        return '오후 및 저녁';
      default:
        return 'BUỔI CHIỀU & TỐI';
    }
  };

  return (
    <div className=" bg-[#FDF8F4]">
      {/* Booking Section */}
      <section
        className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-2xl mx-auto">
              {/* Morning Session */}
              <div>
                <p
                  className="text-white/80 text-sm uppercase tracking-wider mb-3"
                  style={{
                    fontFamily: "'Raleway', sans-serif",
                    fontWeight: 400,
                  }}
                >
                  {getScheduleTitle()}
                </p>
                <p
                  className="text-4xl md:text-5xl font-light text-white tracking-wide"
                  style={{
                    fontFamily: "'Raleway', sans-serif",
                    fontWeight: 300,
                  }}
                >
                  9:00 AM – 12:30 AM
                </p>
              </div>

              {/* Afternoon/Evening Session */}
              <div>
                <p
                  className="text-white/80 text-sm uppercase tracking-wider mb-3"
                  style={{
                    fontFamily: "'Raleway', sans-serif",
                    fontWeight: 400,
                  }}
                >
                  {getAfternoonTitle()}
                </p>
                <p
                  className="text-4xl md:text-5xl font-light text-white tracking-wide"
                  style={{
                    fontFamily: "'Raleway', sans-serif",
                    fontWeight: 300,
                  }}
                >
                  1:30 PM – 11:00 PM
                </p>
              </div>
            </div>

            {/* Book Now Button with Messenger Icon */}
            <motion.a
              href="https://m.me/YOUR_PAGE_ID"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-12 py-4 bg-white/95 hover:bg-white text-[#872D29] rounded-full text-sm md:text-base font-medium uppercase tracking-wider transition-all duration-300 shadow-lg hover:shadow-xl"
              style={{
                fontFamily: "'Raleway', sans-serif",
                fontWeight: 500,
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Messenger Icon */}
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.145 2 11.243c0 2.899 1.438 5.483 3.688 7.171V22l3.486-1.914c.93.257 1.913.393 2.826.393 5.523 0 10-4.145 10-9.243C22 6.145 17.523 2 12 2zm1.032 12.433l-2.558-2.73-4.994 2.73 5.488-5.823 2.623 2.73 4.929-2.73-5.488 5.823z"/>
              </svg>
              {getButtonText()}
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
