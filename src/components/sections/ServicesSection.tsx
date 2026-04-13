import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';

const services = [
  {
    id: 'massage-chan',
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
        <circle cx="12" cy="8" r="1.5" fill="currentColor"/>
        <circle cx="9" cy="10" r="1" fill="currentColor"/>
        <circle cx="15" cy="10" r="1" fill="currentColor"/>
        <circle cx="12" cy="12" r="1.5" fill="currentColor"/>
        <circle cx="9" cy="14" r="1" fill="currentColor"/>
        <circle cx="15" cy="14" r="1" fill="currentColor"/>
      </svg>
    ),
    titleVi: 'MASSAGE CHÂN',
    titleEn: 'FOOT MASSAGE',
    titleKo: '발 마사지',
    descriptionVi: 'Tại Maia Imperial Spa, nhân viên của chúng tôi được đào tạo bài bản về các phương pháp massage chân. Các phương pháp này mang lại hiệu quả tốt nhất trong việc điều trị chứng mất ngủ và trầm cảm bằng cách làm giảm mệt mỏi và căng thẳng.',
    descriptionEn: 'At Maia Imperial Spa, our staff are professionally trained in foot massage methods. These methods are most effective in treating insomnia and depression by reducing fatigue and stress.',
    descriptionKo: 'Maia Imperial Spa에서 직원들은 발 마사지 방법에 대해 전문적으로 교육받습니다. 이러한 방법은 피로와 스트레스를 줄여 불면증과 우울증 치료에 가장 효과적입니다.'
  },
  {
    id: 'massage-body',
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
        <circle cx="12" cy="7" r="2" fill="currentColor"/>
        <circle cx="8" cy="11" r="1.5" fill="currentColor"/>
        <circle cx="16" cy="11" r="1.5" fill="currentColor"/>
        <circle cx="12" cy="15" r="2" fill="currentColor"/>
      </svg>
    ),
    titleVi: 'MASSAGE BODY',
    titleEn: 'BODY MASSAGE',
    titleKo: '바디 마사지',
    descriptionVi: 'Phương pháp massage đặc trưng của Maia Imperial Spa là liệu pháp hướng thơm và massage đá nóng giúp hạn phục hồi sau những cơn mệt mỏi dài.',
    descriptionEn: 'The signature massage method of Maia Imperial Spa is aromatherapy and hot stone massage that helps recover from prolonged fatigue.',
    descriptionKo: 'Maia Imperial Spa의 시그니처 마사지 방법은 장기간의 피로 회복에 도움이 되는 아로마테라피와 핫스톤 마사지입니다.'
  },
  {
    id: 'goi-dau',
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="12" cy="9" r="1.5" fill="currentColor"/>
        <circle cx="9" cy="12" r="1.5" fill="currentColor"/>
        <circle cx="15" cy="12" r="1.5" fill="currentColor"/>
        <circle cx="12" cy="15" r="1.5" fill="currentColor"/>
        <path d="M12 6 L12 4 M12 20 L12 18 M6 12 L4 12 M20 12 L18 12" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    titleVi: 'GỘI ĐẦU DƯỠNG SINH',
    titleEn: 'WELLNESS HAIR WASH',
    titleKo: '웰니스 헤어 워시',
    descriptionVi: 'Phương pháp gội đầu dưỡng sinh độc đáo tại Maia Imperial Spa là sự kết hợp giữa liệu pháp thảo dược thiên nhiên và các kỹ thuật bí huyệt truyền thống mang đến sự thư giãn tối đa để chặn công chặng càng giúp giảm hoàn toàn, làm sạch sâu da ốm và nuôi dưỡng mái tóc.',
    descriptionEn: 'The unique wellness hair wash method at Maia Imperial Spa combines natural herbal therapy and traditional acupressure techniques for maximum relaxation, deep cleansing and hair nourishment.',
    descriptionKo: 'Maia Imperial Spa의 독특한 웰니스 헤어 워시 방법은 천연 허브 요법과 전통 지압 기술을 결합하여 최대한의 휴식, 깊은 클렌징 및 모발 영양을 제공합니다.'
  },
  {
    id: 'cham-soc-da',
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="12" cy="12" r="5" fill="none" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="12" cy="8" r="1" fill="currentColor"/>
        <circle cx="9" cy="11" r="1" fill="currentColor"/>
        <circle cx="15" cy="11" r="1" fill="currentColor"/>
        <circle cx="12" cy="14" r="1" fill="currentColor"/>
      </svg>
    ),
    titleVi: 'CHĂM SÓC DA CHUYÊN SÂU',
    titleEn: 'INTENSIVE SKIN CARE',
    titleKo: '집중 스킨 케어',
    descriptionVi: 'Phương pháp chăm sóc da chuyên sâu tại Maia Imperial Spa là dụng các kỹ thuật bấm huyệt truyền thống cùng với các dược liệu thiên nhiên giúp làm da trắn nên khỏe mạnh, cũng hồng.',
    descriptionEn: 'The intensive skin care method at Maia Imperial Spa uses traditional acupressure techniques with natural herbs to help make skin healthy, bright and rosy.',
    descriptionKo: 'Maia Imperial Spa의 집중 스킨 케어 방법은 전통적인 지압 기술과 천연 허브를 사용하여 피부를 건강하고 밝고 장밋빛으로 만들어줍니다.'
  }
];

export const ServicesSection = () => {
  const { language } = useLanguage();

  const getTitle = (service: typeof services[0]) => {
    switch (language) {
      case 'en':
        return service.titleEn;
      case 'ko':
        return service.titleKo;
      default:
        return service.titleVi;
    }
  };

  const getDescription = (service: typeof services[0]) => {
    switch (language) {
      case 'en':
        return service.descriptionEn;
      case 'ko':
        return service.descriptionKo;
      default:
        return service.descriptionVi;
    }
  };

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#872D29' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="sticky top-24 h-[600px] rounded-lg overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80"
                alt="Maia Imperial Spa Services"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Right - Service Cards */}
          <div className="space-y-8 order-1 lg:order-2">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-[#9B4444]"
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#9B4444] to-[#7d3636] rounded-full flex items-center justify-center text-[#D4AF37] shadow-md">
                    {service.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3
                      className="text-xl font-normal mb-3 text-[#9B4444] tracking-wide"
                      style={{ 
                        fontFamily: "'Raleway', sans-serif",
                        fontWeight: 400
                      }}
                    >
                      {getTitle(service)}
                    </h3>
                    <p
                      className="text-gray-700 leading-relaxed text-sm"
                      style={{ 
                        fontFamily: "'Inter', sans-serif"
                      }}
                    >
                      {getDescription(service)}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
