import { Hero } from '../components/sections/Hero';
import { WelcomeSection } from '../components/sections/WelcomeSection';
import { ServicesSection } from '../components/sections/ServicesSection';
import { ProductsSection } from '../components/sections/ProductsSection';
import { BookingCTA } from '../components/sections/BookingCTA';
import { Testimonials } from '../components/sections/Testimonials';


export const Home = () => {
  return (
    <div className="min-h-screen bg-[#FDF8F4]">
      {/* Hero Section */}
      <Hero />

      {/* Welcome Section */}
      <WelcomeSection />

      {/* Services Section with Image Left */}
      <ServicesSection />

      {/* Products Section */}
      <ProductsSection />

      {/* Booking CTA - Opening Hours */}
      <BookingCTA />

      {/* Customer Testimonials */}
      <Testimonials />

      {/* Featured Services */}
      {/* <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#3D5647' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p
              className="text-3xl md:text-4xl mb-4 uppercase tracking-widest"
              style={{ 
                fontFamily: "'Inter', sans-serif",
                color: '#D4AF37'
              }}
            >
              Our Services
            </p>
            
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-normal mb-4 text-white tracking-wider"
              style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 400 }}
            >
              DỊCH VỤ ĐẶC BIỆT
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Khám phá các dịch vụ signature độc đáo của chúng tôi
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 3).map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <motion.a
              href="/dich-vu"
              className="inline-block px-8 py-3 border-2 border-white text-white rounded-full hover:bg-white hover:text-[#3D5647] transition-all duration-300"
              style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 500 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('services.viewAll')}
            </motion.a>
          </div>
        </div>
      </section> */}
   
    </div>
  );
};
