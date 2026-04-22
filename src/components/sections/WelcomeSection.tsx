import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import welcomeImage from '../../assets/welcome.png';

export const WelcomeSection = () => {
  const { language } = useLanguage();

  const content = {
    vi: {
      subtitle: 'Chào mừng đến với',
      title: 'Lam An Spa',
      description: 'Lam An Spa cung cấp dịch vụ massage dựa trên triết lý Ngũ Hành và cung đình Huế cổ xưa.',
      whyChoose: 'TẠI SAO BẠN NÊN CHỌN DỊCH VỤ CỦA CHÚNG TÔI?',
      reasons: [
        '* Dịch vụ massage tốt nhất tại Thành phố Huế',
        '* Tinh hoa của triết lý Ngũ Hành và Cung đình Huế.',
        '* Đội ngũ chuyên viên massage giàu kinh nghiệm'
      ]
    },
    en: {
      subtitle: 'Welcome to',
      title: 'Lam An Spa',
      description: 'Lam An Spa offers massage services based on the philosophy of the Five Elements and the ancient Hue Imperial Court.',
      whyChoose: 'WHY SHOULD YOU CHOOSE OUR SERVICE?',
      reasons: [
        '* The best massage service in Hue City',
        '* The essence of the Five Elements philosophy and the Hue Imperial Court.',
        '* A team of highly experienced massage therapists'
      ]
    },
    ko: {
      subtitle: '환영합니다',
      title: 'Lam An Spa',
      description: 'Lam An Spa는 오행 철학과 고대 후에 황실 궁정에 기반한 마사지 서비스를 제공합니다.',
      whyChoose: '왜 저희 서비스를 선택해야 하나요?',
      reasons: [
        '* 후에시 최고의 마사지 서비스',
        '* 오행 철학과 후에 황실 궁정의 정수',
        '* 풍부한 경험을 가진 마사지 전문가 팀'
      ]
    }
  };

  const currentContent = content[language];

  return (
    <section className="relative py-12 md:py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#3D5647' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-white order-2 lg:order-1"
          >
            <p
              className="text-xl md:text-2xl lg:text-3xl mb-3 md:mb-4 uppercase tracking-widest"
              style={{ 
                fontFamily: "'Inter', sans-serif",
                color: '#FBE39D',
                fontWeight: 400
              }}
            >
              {currentContent.subtitle}
            </p>
            
            <h1
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal mb-4 md:mb-6 tracking-wider"
              style={{ 
                fontFamily: "'Playfair Display', serif",
                fontWeight: 400,
                letterSpacing: '0.1em',
                color: '#FBE39D'
              }}
            >
              {currentContent.title}
            </h1>

            <p
              className="text-white text-base md:text-lg mb-8 md:mb-12 leading-relaxed"
              style={{ 
                fontFamily: "'Inter', sans-serif",
                fontWeight: 300
              }}
            >
              {currentContent.description}
            </p>

            {/* Why Choose Section */}
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 md:p-6 lg:p-8">
              <h2
                className="text-xl md:text-2xl lg:text-3xl font-normal mb-4 md:mb-6"
                style={{ 
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 400,
                  letterSpacing: '0.05em',
                  color: '#FBE39D'
                }}
              >
                {currentContent.whyChoose}
              </h2>
              
              <div className="space-y-3 md:space-y-4">
                {currentContent.reasons.map((reason, index) => (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-sm md:text-base leading-relaxed flex items-start gap-2"
                    style={{ 
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 300
                    }}
                  >
                    <span className="text-[#D4AF37] mt-1">•</span>
                    <span>{reason.replace('* ', '')}</span>
                  </motion.p>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right - Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative h-[400px] sm:h-[500px] md:h-[560px] lg:h-[640px] rounded-lg overflow-hidden shadow-2xl">
              <img
                src={welcomeImage}
                alt="Lam An Spa Interior"
                className="w-full h-full object-contain bg-[#2f4338]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
