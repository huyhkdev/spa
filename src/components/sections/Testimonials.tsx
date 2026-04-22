import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import { Star } from 'lucide-react';
import avatar1 from '../../assets/testimonials/testimonial-avatar-1.jpg';
import avatar2 from '../../assets/testimonials/testimonial-avatar-2.jpg';
import avatar3 from '../../assets/testimonials/testimonial-avatar-3.jpg';

interface Testimonial {
  id: number;
  name: string;
  nameEn: string;
  nameKo: string;
  avatar: string;
  rating: number;
  text: string;
  textEn: string;
  textKo: string;
  date: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Nguyễn Thị Lan',
    nameEn: 'Nguyen Thi Lan',
    nameKo: '응우옌 티 란',
    avatar: avatar1,
    rating: 5,
    text: 'Dịch vụ tuyệt vời! Không gian spa sang trọng và yên tĩnh. Các kỹ thuật viên rất chuyên nghiệp và tận tâm. Tôi cảm thấy thư giãn và tái tạo năng lượng sau liệu trình massage.',
    textEn: 'Excellent service! The spa space is luxurious and peaceful. The technicians are very professional and dedicated. I felt relaxed and rejuvenated after the massage treatment.',
    textKo: '훌륭한 서비스! 스파 공간은 고급스럽고 평화롭습니다. 기술자들은 매우 전문적이고 헌신적입니다. 마사지 치료 후 편안하고 활력을 되찾았습니다.',
    date: '25/03/2024'
  },
  {
    id: 2,
    name: 'Trần Văn Minh',
    nameEn: 'Tran Van Minh',
    nameKo: '트란 반 민',
    avatar: avatar2,
    rating: 5,
    text: 'Trải nghiệm tuyệt vời tại Lam An Spa. Từ không gian, dịch vụ đến thái độ nhân viên đều rất chuyên nghiệp. Tôi sẽ quay lại và giới thiệu cho bạn bè.',
    textEn: 'Wonderful experience at Lam An Spa. From the space, service to staff attitude, everything is very professional. I will come back and recommend to friends.',
    textKo: 'Lam An Spa에서 훌륭한 경험을 했습니다. 공간, 서비스, 직원 태도까지 모두 매우 전문적입니다. 다시 방문하고 친구들에게 추천하겠습니다.',
    date: '18/03/2024'
  },
  {
    id: 3,
    name: 'Lê Thị Hương',
    nameEn: 'Le Thi Huong',
    nameKo: '레 티 흐엉',
    avatar: avatar3,
    rating: 5,
    text: 'Spa có không gian đẹp và sang trọng. Liệu trình massage chăm sóc da rất hiệu quả. Nhân viên tư vấn nhiệt tình và chu đáo. Rất hài lòng với dịch vụ!',
    textEn: 'The spa has a beautiful and luxurious space. The facial massage treatment is very effective. The staff provides enthusiastic and thoughtful consultation. Very satisfied with the service!',
    textKo: '스파는 아름답고 고급스러운 공간을 가지고 있습니다. 페이셜 마사지 트리트먼트는 매우 효과적입니다. 직원들은 열정적이고 사려 깊은 상담을 제공합니다. 서비스에 매우 만족합니다!',
    date: '10/03/2024'
  }
];

export const Testimonials = () => {
  const { language, t } = useLanguage();

  const getName = (testimonial: Testimonial) => {
    switch (language) {
      case 'en':
        return testimonial.nameEn;
      case 'ko':
        return testimonial.nameKo;
      default:
        return testimonial.name;
    }
  };

  const getText = (testimonial: Testimonial) => {
    switch (language) {
      case 'en':
        return testimonial.textEn;
      case 'ko':
        return testimonial.textKo;
      default:
        return testimonial.text;
    }
  };

  const getTitle = () => {
    return t('testimonials.title');
  };

  return (
    <section
      className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{ backgroundColor: '#3D5647' }}
    >
      {/* Decorative Floral Pattern - Top */}
      <div className="absolute top-0 left-0 right-0 w-full h-32 opacity-40">
        <svg
          viewBox="0 0 1200 100"
          className="w-full h-full"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round">
            {/* Repeating floral pattern */}
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <g key={i} transform={`translate(${i * 200}, 0)`}>
                <path d="M50 50 Q80 20, 110 50 Q80 80, 50 50 Z" />
                <path d="M110 50 Q140 30, 170 50 Q140 70, 110 50 Z" />
                <path d="M60 30 Q75 15, 90 30 Q75 45, 60 30 Z" />
                <path d="M60 70 Q75 55, 90 70 Q75 85, 60 70 Z" />
                <path d="M80 50 Q100 20, 120 10" />
                <path d="M80 50 Q100 80, 120 90" />
                <circle cx="75" cy="50" r="3" fill="#D4AF37" />
                <circle cx="100" cy="30" r="2" fill="#D4AF37" />
                <circle cx="100" cy="70" r="2" fill="#D4AF37" />
              </g>
            ))}
          </g>
        </svg>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <p
            className="text-3xl md:text-4xl mb-4"
            style={{
              fontFamily: "'Satisfy', cursive",
              color: '#D4AF37'
            }}
          >
            {t('testimonials.subtitle')}
          </p>

          <h2
            className="text-2xl md:text-3xl lg:text-4xl font-normal text-white tracking-wider px-4"
            style={{
              fontFamily: "'Raleway', sans-serif",
              fontWeight: 400
            }}
          >
            {getTitle()}
          </h2>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-[#F5E6D3] rounded-lg p-6 shadow-lg relative flex flex-col"
            >
              {/* Header Badge */}
              {/* <div className="absolute -top-3 left-6 bg-[#9B4444] px-4 py-1 rounded-full">
                <span
                  className="text-white text-xs uppercase tracking-wide"
                  style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 500 }}
                >
                  {language === 'en' ? 'Customer Reviews' : language === 'ko' ? '고객 리뷰' : 'Tình Hoa Viết Lời Cảm Nghĩ'}
                </span>
              </div> */}

              {/* Card Header with Image */}
              <div className="mt-4 mb-4">
                <div className="aspect-[4/3] rounded-lg overflow-hidden mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={getName(testimonial)}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Rating Stars */}
                <div className="flex items-center justify-center gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#D4AF37] text-[#D4AF37]" />
                  ))}
                </div>
              </div>

              {/* Review Text */}
              <div className="bg-white rounded-lg p-4 mb-4 relative min-h-[168px] flex items-center">
                <p
                  className="text-sm text-gray-700 leading-relaxed"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  "{getText(testimonial)}"
                </p>
                
                {/* Quote decoration */}
                <div className="absolute -bottom-2 right-4">
                  <svg className="w-6 h-6 text-[#D4AF37] opacity-50" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
                  </svg>
                </div>
              </div>

              {/* Author Info */}
              <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#D4AF37]">
                    <img
                      src={testimonial.avatar}
                      alt={getName(testimonial)}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p
                      className="font-medium text-[#1A1A1A] text-sm"
                      style={{ fontFamily: "'Raleway', sans-serif" }}
                    >
                      {getName(testimonial)}
                    </p>
                    {/* <p className="text-xs text-gray-600">{testimonial.date}</p> */}
                  </div>
                </div>

                {/* Google/Facebook icon placeholder */}
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow">
                  <span className="text-xs font-bold text-[#9B4444]">★</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
