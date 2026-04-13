import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';

export const WelcomeSection = () => {
  const { language } = useLanguage();

  const content = {
    vi: {
      subtitle: 'Welcome to',
      title: 'MAIA IMPERIAL SPA',
      description: 'Maia Imperial Spa offers treatments based on traditional therapies.',
      whyChoose: 'WHY SHOULD YOU CHOOSE OUR SERVICE?',
      reasons: [
        '* The best massage service in Hue City',
        '* The essence of traditional imperial medicine in Hue.',
        '* Technicians with over 10 years of experience'
      ]
    },
    en: {
      subtitle: 'Welcome to',
      title: 'MAIA IMPERIAL SPA',
      description: 'Maia Imperial Spa offers treatments based on traditional therapies.',
      whyChoose: 'WHY SHOULD YOU CHOOSE OUR SERVICE?',
      reasons: [
        '* The best massage service in Hue City',
        '* The essence of traditional imperial medicine in Hue.',
        '* Technicians with over 10 years of experience'
      ]
    },
    ko: {
      subtitle: 'Welcome to',
      title: 'MAIA IMPERIAL SPA',
      description: 'Maia Imperial Spa offers treatments based on traditional therapies.',
      whyChoose: 'WHY SHOULD YOU CHOOSE OUR SERVICE?',
      reasons: [
        '* The best massage service in Hue City',
        '* The essence of traditional imperial medicine in Hue.',
        '* Technicians with over 10 years of experience'
      ]
    }
  };

  const currentContent = content[language];

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#872D29' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <p
              className="text-2xl md:text-3xl mb-4"
              style={{ 
                fontFamily: "'Satisfy', cursive",
                color: '#D4AF37',
                fontWeight: 400
              }}
            >
              {currentContent.subtitle}
            </p>
            
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-normal mb-6 tracking-wider"
              style={{ 
                fontFamily: "'Raleway', sans-serif",
                fontWeight: 400,
                letterSpacing: '0.1em'
              }}
            >
              {currentContent.title}
            </h1>

            <p
              className="text-lg mb-12 leading-relaxed"
              style={{ 
                fontFamily: "'Raleway', sans-serif",
                fontWeight: 300
              }}
            >
              {currentContent.description}
            </p>

            {/* Why Choose Section */}
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8">
              <h2
                className="text-2xl md:text-3xl font-normal mb-6"
                style={{ 
                  fontFamily: "'Raleway', sans-serif",
                  fontWeight: 400,
                  letterSpacing: '0.05em'
                }}
              >
                {currentContent.whyChoose}
              </h2>
              
              <div className="space-y-4">
                {currentContent.reasons.map((reason, index) => (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-base leading-relaxed flex items-start gap-2"
                    style={{ 
                      fontFamily: "'Raleway', sans-serif",
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
            className="relative"
          >
            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80"
                alt="Maia Imperial Spa Interior"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
