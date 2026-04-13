import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { services } from '../data/services';

export const Services = () => {
  const { language } = useLanguage();

  const getServiceName = (service: typeof services[0]) => {
    switch (language) {
      case 'en':
        return service.nameEn;
      case 'ko':
        return service.nameKo;
      default:
        return service.name;
    }
  };

  const getServiceDescription = (service: typeof services[0]) => {
    switch (language) {
      case 'en':
        return service.descriptionEn;
      case 'ko':
        return service.descriptionKo;
      default:
        return service.description;
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN').format(price);
  };

  return (
    <div className="min-h-screen bg-[#FDF8F4]">
      {/* Services Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#872D29' }}>
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p
              className="text-3xl md:text-4xl mb-4"
              style={{ 
                fontFamily: "'Satisfy', cursive",
                color: '#D4AF37'
              }}
            >
              Best Deals
            </p>
            <h1
              className="text-3xl md:text-4xl lg:text-5xl font-normal mb-6 text-white tracking-wider"
              style={{ 
                fontFamily: "'Raleway', sans-serif",
                fontWeight: 400
              }}
            >
              OUR TREATMENTS
            </h1>

            {/* Decorative ornament */}
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-px bg-[#D4AF37]" />
              <svg className="w-6 h-6 text-[#D4AF37]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L9 9H2l6 5-2 7 6-4 6 4-2-7 6-5h-7z"/>
              </svg>
              <div className="w-16 h-px bg-[#D4AF37]" />
            </div>
          </motion.div>

          {/* Services List */}
          <div className="space-y-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start"
              >
                {/* Service Image - Left */}
                <div className="md:col-span-1">
                  <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                    <img
                      src={service.image || `https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&q=80`}
                      alt={getServiceName(service)}
                      className="w-full h-full object-cover"
                    />
                    {/* Gold border frame */}
                    <div className="absolute inset-0 border-4 border-[#D4AF37] rounded-lg"></div>
                  </div>
                </div>

                {/* Service Info - Right */}
                <div className="md:col-span-2 flex flex-col justify-between">
                  {/* Title & Duration/Price */}
                  <div className="mb-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h3
                          className="text-white text-lg md:text-xl uppercase tracking-wide mb-2"
                          style={{ 
                            fontFamily: "'Raleway', sans-serif",
                            fontWeight: 400
                          }}
                        >
                          {getServiceName(service)}
                          {service.duration && (
                            <span className="text-base">
                              {' '}({service.duration}')
                            </span>
                          )}
                        </h3>
                      </div>
                      <div className="text-right ml-4">
                        <p className="text-white text-lg md:text-xl font-normal whitespace-nowrap">
                          {formatPrice(service.price)} VNĐ
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <p
                      className="text-[#D4AF37] text-sm uppercase tracking-wide leading-relaxed"
                      style={{ 
                        fontFamily: "'Raleway', sans-serif",
                        fontWeight: 300
                      }}
                    >
                      {getServiceDescription(service)}
                    </p>
                  </div>

                  {/* Variants (if any) */}
                  {service.variants && service.variants.length > 1 && (
                    <div className="mt-4 pt-4 border-t border-white/20">
                      <div className="space-y-2">
                        {service.variants.map((variant, vIndex) => (
                          <div 
                            key={vIndex}
                            className="flex items-center justify-between text-sm"
                          >
                            <span className="text-white/80">
                              {getServiceName(service)} ({variant.duration}')
                            </span>
                            <span className="text-white font-normal">
                              {formatPrice(variant.price)} VNĐ
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
