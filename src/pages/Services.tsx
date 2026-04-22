import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { bestDeals } from '../data/prices';
import footImage from '../assets/services/foot.jfif';
import facialImage from '../assets/services/facial.jfif';
import goiImage from '../assets/services/gội.jfif';
import bodyMassageImage from '../assets/services/bodymassage.jfif';
import bodyImage from '../assets/services/body.jfif';
import ttbcImage from '../assets/services/ttbc.jfif';

// Group services by category with appropriate images
const serviceGroups = [
  {
    id: 'body-massage',
    image: bodyMassageImage,
    categoryVi: 'DƯỠNG SINH NGŨ HÀNH CUNG ĐÌNH',
    categoryEn: 'ROYAL HEALTH AND WELLNESS',
    descriptionVi: 'Liệu pháp dưỡng sinh kết hợp triết lý Ngũ Hành với kỹ thuật massage cung đình',
    descriptionEn: 'Wellness therapy combining Five Elements philosophy with royal massage techniques',
    items: bestDeals.filter(item => ['1', '2', '3', '4', '5', '6', '7'].includes(item.id))
  },
  {
    id: 'foot-massage',
    image: footImage,
    categoryVi: 'MASSAGE CHÂN DƯỠNG SINH',
    categoryEn: 'FOOT REFLEXOLOGY',
    descriptionVi: 'Massage chân chuyên sâu với các huyệt đạo phản xạ',
    descriptionEn: 'Deep foot massage with reflex pressure points',
    items: bestDeals.filter(item => ['9', '10', '11'].includes(item.id))
  },
  {
    id: 'facial',
    image: facialImage,
    categoryVi: 'CHĂM SÓC DA MẶT DƯỠNG SINH',
    categoryEn: 'FACIAL THERAPY',
    descriptionVi: 'Chăm sóc da mặt với kỹ thuật thư giãn chuyên sâu',
    descriptionEn: 'Facial care with deep relaxation techniques',
    items: bestDeals.filter(item => ['12', '13'].includes(item.id))
  },
  {
    id: 'signature',
    image: bodyImage,
    categoryVi: 'LIỆU TRÌNH ĐẶC TRƯNG',
    categoryEn: 'SIGNATURE PACKAGE',
    descriptionVi: 'Liệu trình toàn diện với gội đầu dưỡng sinh, massage toàn thân và đá nóng cung đình',
    descriptionEn: 'Comprehensive treatment with herbal hair massage, full body massage and royal hot stone',
    items: bestDeals.filter(item => ['8', '14'].includes(item.id))
  },
  {
    id: 'sauna',
    image: bodyMassageImage,
    categoryVi: 'XÔNG HƠI DƯỠNG SINH',
    categoryEn: 'SAUNA RELAXATION',
    descriptionVi: 'Xông hơi thư giãn toàn thân với thảo dược tự nhiên',
    descriptionEn: 'Full body sauna relaxation with natural herbs',
    items: bestDeals.filter(item => item.id === '15')
  },
  {
    id: 'hair',
    image: goiImage,
    categoryVi: 'GỘI ĐẦU DƯỠNG SINH',
    categoryEn: 'HERBAL HAIR THERAPY',
    descriptionVi: 'Gội đầu dưỡng sinh với thảo dược cung đình',
    descriptionEn: 'Herbal hair washing with royal herbs',
    items: bestDeals.filter(item => ['16', '17', '18'].includes(item.id))
  },
  {
    id: 'body-scrub',
    image: ttbcImage,
    categoryVi: 'KHAI BÌ - TẨY TẾ BÀO CHẾT',
    categoryEn: 'BODY SCRUB RITUAL',
    descriptionVi: 'Tẩy tế bào chết toàn thân với thảo dược tự nhiên',
    descriptionEn: 'Full body exfoliation with natural herbs',
    items: bestDeals.filter(item => ['19', '20'].includes(item.id))
  }
];

export const Services = () => {
  const { language, t } = useLanguage();

  const getCategory = (group: typeof serviceGroups[0]) => {
    return language === 'en' ? group.categoryEn : group.categoryVi;
  };

  const getDescription = (group: typeof serviceGroups[0]) => {
    return language === 'en' ? group.descriptionEn : group.descriptionVi;
  };

  const getName = (item: typeof bestDeals[0]) => {
    return language === 'en' ? item.nameEn : item.name;
  };

  const getItemDescription = (item: typeof bestDeals[0]) => {
    if (!item.description) return '';
    return language === 'en' ? (item.descriptionEn || '') : item.description;
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN').format(price);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#3D5647' }}>
      {/* Services Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
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
                color: '#FBE39D'
              }}
            >
              {t('pricing.subtitle')}
            </p>
            <h1
              className="text-3xl md:text-4xl lg:text-5xl font-normal mb-6 text-white tracking-wider"
              style={{ 
                fontFamily: "'Raleway', sans-serif",
                fontWeight: 400
              }}
            >
              {t('pricing.sectionTitle')}
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

          {/* Service Groups */}
          <div className="space-y-16">
            {serviceGroups.map((group) => (
              <motion.div
                key={group.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-white/10"
              >
                {/* Category with Image */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  {/* Image */}
                  <div className="md:col-span-1">
                    <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                      <img
                        src={group.image}
                        alt={getCategory(group)}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 border-4 border-[#D4AF37] rounded-lg"></div>
                    </div>
                  </div>

                  {/* Category Info */}
                  <div className="md:col-span-2 flex flex-col justify-center">
                    <h2
                      className="text-2xl md:text-3xl font-normal mb-4 tracking-wider"
                      style={{ 
                        fontFamily: "'Raleway', sans-serif",
                        fontWeight: 400,
                        color: '#FBE39D'
                      }}
                    >
                      {getCategory(group)}
                    </h2>
                    <p
                      className="text-white/90 text-sm md:text-base leading-relaxed"
                      style={{ 
                        fontFamily: "'Inter', sans-serif"
                      }}
                    >
                      {getDescription(group)}
                    </p>
                  </div>
                </div>

                {/* Service Items */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {group.items.map((item, itemIndex) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: itemIndex * 0.05, duration: 0.4 }}
                      viewport={{ once: true }}
                      className="bg-white/5 rounded-lg p-5 border border-[#D4AF37]/30 hover:border-[#D4AF37] transition-colors duration-300"
                    >
                      <h3
                        className="text-white text-base md:text-lg font-normal mb-2"
                        style={{ 
                          fontFamily: "'Raleway', sans-serif",
                          fontWeight: 400
                        }}
                      >
                        {getName(item)}
                      </h3>
                      {getItemDescription(item) && (
                        <p className="text-[#FBE39D]/70 text-xs mb-3 leading-relaxed">
                          {getItemDescription(item)}
                        </p>
                      )}
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[#FBE39D]/80 text-sm">
                          {item.duration}
                        </span>
                        <span className="text-white text-lg font-normal">
                          {formatPrice(item.price)}
                        </span>
                      </div>
                      <div className="text-[#D4AF37]/60 text-xs">VNĐ</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
