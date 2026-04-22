import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

export const Contact = () => {
  const { language, t } = useLanguage();

  const getContent = () => {
    switch (language) {
      case 'en':
        return {
          subtitle: t('contact.subtitle'),
          title: t('contact.titleMain'),
          location1Title: 'Lam An Spa',
          location1Text: 'You can book an appointment online.',
          phone: 'Phone: 0915954699',
          hoursTitle: t('contact.hours'),
          hours: t('contact.hoursValue'),
          location2Title: 'Lam An Spa',
          address: '28 Vo Thi Sau Street, Thuan Hoa District, Hue City, Hue 49000',
          mapTitle: 'LAM AN MASSAGE & SPA'
        };
      case 'ko':
        return {
          subtitle: t('contact.subtitle'),
          title: t('contact.titleMain'),
          location1Title: 'Lam An Spa',
          location1Text: '온라인으로 예약하실 수 있습니다.',
          phone: '전화: 0915954699',
          hoursTitle: t('contact.hours'),
          hours: t('contact.hoursValue'),
          location2Title: 'Lam An Spa',
          address: '28 Vo Thi Sau Street, Thuan Hoa District, Hue City, Hue 49000',
          mapTitle: 'LAM AN MASSAGE & SPA'
        };
      default:
        return {
          subtitle: t('contact.subtitle'),
          title: t('contact.titleMain'),
          location1Title: 'Lam An Spa',
          location1Text: 'Bạn có thể đặt lịch hẹn trực tuyến.',
          phone: 'Điện thoại: 0915954699',
          hoursTitle: t('contact.hours'),
          hours: t('contact.hoursValue'),
          location2Title: 'Lam An Spa',
          address: '28 Võ Thị Sáu, Thuận Hòa, TP Huế, Huế 49000',
          mapTitle: 'LAM AN MASSAGE & SPA'
        };
    }
  };

  const content = getContent();

  return (
    <div className="min-h-screen bg-[#FDF8F4]">
      {/* Contact Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#3D5647' }}>
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            {/* Subtitle - Cursive */}
            <p
              className="text-3xl md:text-4xl mb-6"
              style={{ 
                fontFamily: "'Satisfy', cursive",
                color: '#FBE39D'
              }}
            >
              {content.subtitle}
            </p>
            
            {/* Title */}
            <h1
              className="text-2xl md:text-3xl lg:text-4xl font-normal mb-8 tracking-[0.2em] uppercase"
              style={{ 
                fontFamily: "'Raleway', sans-serif",
                fontWeight: 400,
                color: '#FBE39D'
              }}
            >
              {content.title}
            </h1>
            
            {/* Decorative ornament */}
            <div className="flex items-center justify-center gap-4">
              <div className="w-24 h-px bg-[#D4AF37]" />
              <svg className="w-8 h-8 text-[#D4AF37]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L9 9H2l6 5-2 7 6-4 6 4-2-7 6-5h-7z" />
              </svg>
              <div className="w-24 h-px bg-[#D4AF37]" />
            </div>
          </motion.div>

          {/* Contact Info Grid - 3 Columns */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          >
            {/* Location 1 */}
            <div className="text-center">
              <h3
                className="text-xl md:text-2xl font-normal mb-4 text-white"
                style={{ 
                  fontFamily: "'Raleway', sans-serif",
                  fontWeight: 400
                }}
              >
                {content.location1Title}
              </h3>
              <p
                className="text-[#D4AF37] text-sm md:text-base mb-6"
                style={{ 
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 300
                }}
              >
                {content.location1Text}
              </p>
              <p
                className="text-white text-base md:text-lg"
                style={{ 
                  fontFamily: "'Raleway', sans-serif",
                  fontWeight: 400
                }}
              >
                {content.phone}
              </p>
            </div>

            {/* Opening Hours */}
            <div className="text-center">
              <h3
                className="text-xl md:text-2xl font-normal mb-4 text-white"
                style={{ 
                  fontFamily: "'Raleway', sans-serif",
                  fontWeight: 400
                }}
              >
                {content.hoursTitle}
              </h3>
              <p
                className="text-white text-base md:text-lg"
                style={{ 
                  fontFamily: "'Raleway', sans-serif",
                  fontWeight: 300
                }}
              >
                {content.hours}
              </p>
            </div>

            {/* Location 2 */}
            <div className="text-center">
              <h3
                className="text-xl md:text-2xl font-normal mb-4 text-white"
                style={{ 
                  fontFamily: "'Raleway', sans-serif",
                  fontWeight: 400
                }}
              >
                {content.location2Title}
              </h3>
              <p
                className="text-white text-sm md:text-base leading-relaxed"
                style={{ 
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 300
                }}
              >
                {content.address}
              </p>
            </div>
          </motion.div>

          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mb-8"
          >
            <h2
              className="text-2xl md:text-3xl font-normal mb-6 text-center text-white"
              style={{ 
                fontFamily: "'Raleway', sans-serif",
                fontWeight: 400
              }}
            >
              {content.mapTitle}
            </h2>

            {/* Google Map Embed */}
            <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3826.0754791766584!2d107.59389467590816!3d16.470570282055906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3141a122b8bf63c5%3A0x5504279cbd65b0b!2s28%20V%C3%B5%20Th%E1%BB%8B%20S%C3%A1u%2C%20Ph%C3%BA%20H%E1%BB%99i%2C%20Thu%E1%BA%ADn%20H%C3%B3a%2C%20Hu%E1%BA%BF%2049000%2C%20Vietnam!5e0!3m2!1sen!2s!4v1710000000000!5m2!1sen!2s"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lam An Spa Location"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
