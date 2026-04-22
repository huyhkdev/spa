import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import servicesImage from '../../assets/services.png';

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
    descriptionVi: 'Tại Lam An Spa, các chuyên viên massage được đào tạo bài bản của chúng tôi chuyên về các kỹ thuật massage chân tinh tế, được thiết kế để hướng dẫn luồng năng lượng nhẹ nhàng, giảm mệt mỏi và khôi phục cảm giác nhẹ nhàng và thư giãn sâu sắc.',
    descriptionEn: 'At Lam An Spa, our expertly trained therapists specialize in refined foot massage techniques designed to gently guide energy flow, ease fatigue, and restore a profound sense of lightness and relaxation.',
    descriptionKo: 'Lam An Spa에서는 전문적으로 훈련된 테라피스트가 에너지 흐름을 부드럽게 유도하고 피로를 완화하며 깊은 가벼움과 휴식을 회복하도록 설계된 세련된 발 마사지 기술을 전문으로 합니다.'
  },
  {
    id: 'five-elements',
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
        <circle cx="12" cy="7" r="2" fill="currentColor"/>
        <circle cx="8" cy="11" r="1.5" fill="currentColor"/>
        <circle cx="16" cy="11" r="1.5" fill="currentColor"/>
        <circle cx="12" cy="15" r="2" fill="currentColor"/>
      </svg>
    ),
    titleVi: 'CHƯƠNG TRÌNH CHĂM SÓC CƠ THỂ NGŨ HÀNH',
    titleEn: 'FIVE ELEMENTS BODY CARE PROGRAMS',
    titleKo: '오행 바디 케어 프로그램',
    descriptionVi: 'Lấy cảm hứng từ sự hài hòa của Ngũ Hành, các liệu trình chăm sóc cơ thể đặc trưng của Lam An Spa kết hợp tinh dầu thơm cao cấp với liệu pháp đá nóng, được chế tác chu đáo để phục hồi cơ thể và khôi phục sự cân bằng từ sự mệt mỏi sâu sắc.',
    descriptionEn: 'Inspired by the harmony of the Five Elements, Lam An Spa\'s signature body treatments blend bespoke aromatic essences with hot stone therapy, thoughtfully crafted to rejuvenate the body and restore balance from deep-seated fatigue.',
    descriptionKo: '오행의 조화에서 영감을 받은 Lam An Spa의 시그니처 바디 트리트먼트는 맞춤형 아로마 에센스와 핫스톤 테라피를 결합하여 신체를 활성화하고 깊은 피로에서 균형을 회복하도록 세심하게 제작되었습니다.'
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
    titleEn: 'HAIR WASHING FOR WELLNESS',
    titleKo: '웰니스를 위한 헤어 워싱',
    descriptionVi: 'Hãy đắm mình trong liệu pháp chăm sóc da đầu đặc trưng của Lam An Spa, nơi các thảo dược thiên nhiên kết hợp với các kỹ thuật bấm huyệt Ngũ Hành - mang đến trải nghiệm êm dịu sâu sắc, thiền định và phục hồi.',
    descriptionEn: 'Indulge in Lam An Spa\'s signature scalp therapy, where natural herbal infusions meet Five Elements acupressure techniques- delivering a deeply soothing, meditative, and restorative experience.',
    descriptionKo: 'Lam An Spa의 시그니처 두피 테라피에 빠져보세요. 천연 허브 인퓨전이 오행 지압 기술과 만나 깊이 진정되고 명상적이며 회복적인 경험을 선사합니다.'
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
    titleVi: 'CHĂM SÓC DA MẶT',
    titleEn: 'FACIAL WELLNESS',
    titleKo: '페이셜 웰니스',
    descriptionVi: 'Các nghi thức chăm sóc da mặt sang trọng của chúng tôi kết hợp bấm huyệt Ngũ Hành với các thành phần thảo dược Huế hoàng gia quý giá, làm sống lại làn da để bộc lộ vẻ rạng rỡ tự nhiên và tươi sáng.',
    descriptionEn: 'Our luxurious facial rituals combine Five Elements acupressure with precious royal Hue herbal ingredients, revitalizing the skin to reveal a naturally radiant, and luminous complexion.',
    descriptionKo: '저희의 고급스러운 페이셜 의식은 오행 지압과 귀중한 후에 왕실 허브 성분을 결합하여 피부를 활성화하고 자연스럽게 빛나고 빛나는 안색을 드러냅니다.'
  },
  {
    id: 'tay-te-bao-chet',
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="8" cy="8" r="1" fill="currentColor"/>
        <circle cx="16" cy="8" r="1" fill="currentColor"/>
        <circle cx="8" cy="16" r="1" fill="currentColor"/>
        <circle cx="16" cy="16" r="1" fill="currentColor"/>
        <circle cx="12" cy="12" r="1.5" fill="currentColor"/>
      </svg>
    ),
    titleVi: 'TẨY TẾ BÀO CHẾT',
    titleEn: 'BODY EXFOLIATION',
    titleKo: '바디 각질 제거',
    descriptionVi: 'Nâng tầm các giác quan của bạn với nghi thức tẩy tế bào chết tinh tế, có các hỗn hợp thảo dược tự nhiên lấy cảm hứng từ truyền thống hoàng gia Huế. Kết hợp với các kỹ thuật massage lâu đời, liệu trình này làm sạch sâu da, tăng cường tuần hoàn và chuẩn bị cho cơ thể hấp thụ đầy đủ các yếu tố dinh dưỡng.',
    descriptionEn: 'Elevate your senses with a refined exfoliation ritual featuring natural herbal blends inspired by Hue\'s royal traditions. Paired with time-honored massage techniques, this treatment deeply purifies the skin, enhances circulation, and prepares the body to fully absorb nourishing elements.',
    descriptionKo: '후에의 왕실 전통에서 영감을 받은 천연 허브 블렌드를 특징으로 하는 세련된 각질 제거 의식으로 감각을 높이세요. 시간을 초월한 마사지 기술과 결합된 이 트리트먼트는 피부를 깊이 정화하고 순환을 향상시키며 영양 요소를 완전히 흡수할 수 있도록 신체를 준비시킵니다.'
  },
  {
    id: 'xong-hoi',
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
        <path d="M10 8 Q 12 6, 14 8" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        <path d="M9 11 Q 12 9, 15 11" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        <path d="M8 14 Q 12 12, 16 14" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      </svg>
    ),
    titleVi: 'LIỆU PHÁP XÔNG HƠI',
    titleEn: 'SAUNA THERAPY',
    titleKo: '사우나 테라피',
    descriptionVi: 'Tận hưởng trải nghiệm xông hơi cao cấp tại Lam An Spa giúp thư giãn cơ bắp, giảm căng thẳng và mở lỗ chân lông, chuẩn bị cho làn da của bạn hấp thụ chất dinh dưỡng hiệu quả hơn.',
    descriptionEn: 'Enjoy a premium sauna experience at Lam An Spa that helps relax muscles, reduce stress, and open pores, preparing your skin to absorb nutrients more effectively.',
    descriptionKo: 'Lam An Spa에서 프리미엄 사우나 경험을 즐기세요. 근육을 이완시키고 스트레스를 줄이며 모공을 열어 피부가 영양소를 더 효과적으로 흡수할 수 있도록 준비합니다.'
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
    <section className="relative py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#3D5647' }}>
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
                src={servicesImage}
                alt="Lam An Spa Services"
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
                className="rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-[#D4AF37]"
                style={{ backgroundColor: '#2d4037' }}
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="flex-shrink-0 w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center text-[#2d4037] shadow-md">
                    {service.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3
                      className="text-xl font-normal mb-3 tracking-wide"
                      style={{ 
                        fontFamily: "'Playfair Display', serif",
                        fontWeight: 400,
                        color: '#FBE39D'
                      }}
                    >
                      {getTitle(service)}
                    </h3>
                    <p
                      className="text-white/90 leading-relaxed text-sm"
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
