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
    categoryEn: 'ROYAL FIVE ELEMENTS WELLNESS',
    categoryKo: '왕실 오행 웰니스',
    descriptionVi: 'Thư giãn cổ, vai và lưng trên • Đá nóng thư giãn lưng, chân và cơ sâu • Chăm sóc vùng bụng và lưng dưới • Thư giãn sâu lưng, chân và da đầu',
    descriptionEn: 'Neck, shoulder & upper back relaxation • Hot stone therapy for back, legs & deep tissue • Abdominal & lower back care • Deep relaxation for back, legs & scalp',
    descriptionKo: '목, 어깨 및 상부 등 이완 • 등, 다리 및 심부 조직을 위한 핫스톤 테라피 • 복부 및 하부 등 관리 • 등, 다리 및 두피를 위한 깊은 이완',
    items: bestDeals.filter(item => ['1', '2', '3', '4', '5', '6', '7'].includes(item.id))
  },
  {
    id: 'foot-massage',
    image: footImage,
    categoryVi: 'MASSAGE CHÂN DƯỠNG SINH',
    categoryEn: 'WELLNESS FOOT MASSAGE',
    categoryKo: '웰니스 발 마사지',
    descriptionVi: 'Giải tỏa mệt mỏi ở bàn chân, bắp chân và các huyệt phản xạ cơ thể',
    descriptionEn: 'Relieve fatigue in feet, calves & body reflex points',
    descriptionKo: '발, 종아리 및 신체 반사점의 피로 완화',
    items: bestDeals.filter(item => ['8', '9', '10'].includes(item.id))
  },
  {
    id: 'facial',
    image: facialImage,
    categoryVi: 'CHĂM SÓC DA MẶT DƯỠNG SINH',
    categoryEn: 'WELLNESS FACIAL THERAPY',
    categoryKo: '웰니스 페이셜 테라피',
    descriptionVi: 'Thư giãn da mặt, vùng trán, thái dương và cổ',
    descriptionEn: 'Facial relaxation for face, forehead, temples & neck',
    descriptionKo: '얼굴, 이마, 관자놀이 및 목을 위한 페이셜 이완',
    items: bestDeals.filter(item => ['11', '12'].includes(item.id))
  },
  {
    id: 'signature',
    image: bodyImage,
    categoryVi: 'LIỆU TRÌNH ĐẶC TRƯNG',
    categoryEn: 'SIGNATURE TREATMENT',
    categoryKo: '시그니처 트리트먼트',
    descriptionVi: 'Tập trung thư giãn da đầu, lưng, vai, chân và toàn thân. Bao gồm: Gội đầu dưỡng sinh • Massage toàn thân • Đá nóng cung đình. Lợi ích: Thư giãn sâu • Cải thiện giấc ngủ • Cân bằng năng lượng cơ thể',
    descriptionEn: 'Focus on scalp, back, shoulder, leg & full body relaxation. Includes: Wellness hair ritual • Full body massage • Royal hot stone. Benefits: Deep relaxation • Better sleep • Energy balance',
    descriptionKo: '두피, 등, 어깨, 다리 및 전신 이완에 집중. 포함 사항: 웰니스 헤어 의식 • 전신 마사지 • 왕실 핫스톤. 이점: 깊은 이완 • 수면 개선 • 에너지 균형',
    items: bestDeals.filter(item => item.id === '13')
  },
  {
    id: 'hair',
    image: goiImage,
    categoryVi: 'GỘI ĐẦU DƯỠNG SINH',
    categoryEn: 'WELLNESS HAIR THERAPY',
    categoryKo: '웰니스 헤어 테라피',
    descriptionVi: 'Thư giãn da đầu, trán, thái dương, cổ và vai',
    descriptionEn: 'Relaxation for scalp, forehead, temples, neck & shoulders',
    descriptionKo: '두피, 이마, 관자놀이, 목 및 어깨를 위한 이완',
    items: bestDeals.filter(item => ['14', '15', '16'].includes(item.id))
  },
  {
    id: 'body-scrub',
    image: ttbcImage,
    categoryVi: 'KHAI BỈ - TẨY TẾ BÀO CHẾT',
    categoryEn: 'BODY SCRUB RITUAL',
    categoryKo: '바디 스크럽 의식',
    descriptionVi: 'Làm sạch và thư giãn lưng, tay, chân và toàn thân',
    descriptionEn: 'Cleanse & relax back, arms, legs & full body',
    descriptionKo: '등, 팔, 다리 및 전신 클렌징 및 이완',
    items: bestDeals.filter(item => ['17', '18'].includes(item.id))
  },
  {
    id: 'sauna',
    image: bodyMassageImage,
    categoryVi: 'XÔNG HƠI DƯỠNG SINH',
    categoryEn: 'WELLNESS SAUNA',
    categoryKo: '웰니스 사우나',
    descriptionVi: 'Làm ấm và thư giãn toàn thân, cơ bắp và hệ tuần hoàn',
    descriptionEn: 'Warm & relax full body, muscles & circulation',
    descriptionKo: '전신, 근육 및 순환을 따뜻하게 하고 이완',
    items: bestDeals.filter(item => item.id === '19')
  }
];

export const Services = () => {
  const { language, t } = useLanguage();

  const getCategory = (group: typeof serviceGroups[0]) => {
    switch (language) {
      case 'en':
        return group.categoryEn;
      case 'ko':
        return group.categoryKo;
      default:
        return group.categoryVi;
    }
  };

  const getDescription = (group: typeof serviceGroups[0]) => {
    switch (language) {
      case 'en':
        return group.descriptionEn;
      case 'ko':
        return group.descriptionKo;
      default:
        return group.descriptionVi;
    }
  };

  const getName = (item: typeof bestDeals[0]) => {
    switch (language) {
      case 'en':
        return item.nameEn;
      case 'ko':
        return item.nameKo;
      default:
        return item.name;
    }
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
