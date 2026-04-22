import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';

const products = [
  {
    id: '1',
    number: '1',
    titleVi: 'DẦU GỘI, XÀ LOTUS:',
    titleEn: 'LOTUS SHAMPOO & SOAP:',
    titleKo: '로투스 샴푸 및 비누:',
    descriptionVi: 'Dành cho tóa dầu nhầy sinh, chăm sóc tốc bóa qua, lành tính',
    descriptionEn: 'For oily hair, shine care, gentle',
    descriptionKo: '지성 모발용, 윤기 관리, 순함'
  },
  {
    id: '2',
    number: '2',
    titleVi: 'DẦU MASSAGE LAM AN:',
    titleEn: 'LAM AN MASSAGE OIL:',
    titleKo: 'LAM AN 마사지 오일:',
    descriptionVi: 'Dầu Massage sóc quyền của Lam An, thần thiện với moi tường và có tác dụng trị liệu cưng với đời ngũ nhân viên tận tâm và có tay nghề cao.',
    descriptionEn: 'Lam An\'s signature massage oil, gentle for all and has therapeutic effects with our dedicated and skilled staff.',
    descriptionKo: 'Lam An의 시그니처 마사지 오일, 모든 사람에게 순하며 우리의 헌신적이고 숙련된 직원과 함께 치료 효과가 있습니다.'
  },
  {
    id: '3',
    number: '3',
    titleVi: 'THẢO MỘC:',
    titleEn: 'HERBS:',
    titleKo: '허브:',
    descriptionVi: 'Ngâm trà chân, có thể vội đức mộc truyền thống Cung Đình Huế',
    descriptionEn: 'Foot bath tea, traditional Hue Imperial herbs',
    descriptionKo: '발 목욕 차, 전통 후에 황실 허브'
  },
  {
    id: '4',
    number: '4',
    titleVi: 'SÁNG TRỌNG:',
    titleEn: 'PREMIUM:',
    titleKo: '프리미엄:',
    descriptionVi: 'Khăn cotton, giường nằm ểm ái',
    descriptionEn: 'Cotton towels, comfortable beds',
    descriptionKo: '면 수건, 편안한 침대'
  }
];

export const ProductsSection = () => {
  const { language } = useLanguage();

  const getTitle = (product: typeof products[0]) => {
    switch (language) {
      case 'en':
        return product.titleEn;
      case 'ko':
        return product.titleKo;
      default:
        return product.titleVi;
    }
  };

  const getDescription = (product: typeof products[0]) => {
    switch (language) {
      case 'en':
        return product.descriptionEn;
      case 'ko':
        return product.descriptionKo;
      default:
        return product.descriptionVi;
    }
  };

  const headingContent = {
    vi: {
      subtitle: 'Sản phẩm hầu cơ',
      title: 'NHỮNG SẢN PHẨM MÀ CHÚNG TÔI SỬ DỤNG',
      description: 'Đối với những khách hàng thân yêu, chúng tôi luôn cam kết cung cấp các sản phẩm tự nhiên, không độc hại, thân thiện với môi trường và có tác dụng trị liệu cùng với đội ngũ nhân viên tận tâm và có tay nghề cao.'
    },
    en: {
      subtitle: 'Our Products',
      title: 'PRODUCTS WE USE',
      description: 'For our dear customers, we always commit to providing natural, non-toxic, eco-friendly products with therapeutic effects, along with our dedicated and highly skilled staff.'
    },
    ko: {
      subtitle: '우리의 제품',
      title: '우리가 사용하는 제품',
      description: '사랑하는 고객 여러분을 위해 저희는 항상 자연적이고 무독성이며 친환경적인 제품을 제공하고 치료 효과와 함께 헌신적이고 고도로 숙련된 직원을 제공하기로 약속합니다.'
    }
  };

  const currentContent = headingContent[language];

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#3D5647' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 text-white"
        >
          <p
            className="text-2xl md:text-3xl mb-4"
            style={{ 
              fontFamily: "'Satisfy', cursive",
              color: '#D4AF37'
            }}
          >
            {currentContent.subtitle}
          </p>
          
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-normal mb-6 tracking-wider"
            style={{ 
              fontFamily: "'Raleway', sans-serif",
              fontWeight: 400
            }}
          >
            {currentContent.title}
          </h2>

          <p
            className="text-base md:text-lg max-w-4xl mx-auto leading-relaxed"
            style={{ 
              fontFamily: "'Inter', sans-serif"
            }}
          >
            {currentContent.description}
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-start gap-6">
                {/* Number Badge */}
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#D4AF37] flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                  {product.number}
                </div>

                {/* Content */}
                <div className="flex-1 text-white">
                  <h3
                    className="text-lg font-normal mb-3 tracking-wide"
                    style={{ 
                      fontFamily: "'Raleway', sans-serif",
                      fontWeight: 400
                    }}
                  >
                    {getTitle(product)}
                  </h3>
                  <p
                    className="text-sm leading-relaxed text-gray-200"
                    style={{ 
                      fontFamily: "'Inter', sans-serif"
                    }}
                  >
                    {getDescription(product)}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
