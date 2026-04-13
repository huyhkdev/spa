import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { newsItems } from '../data/news';
import { Calendar, ArrowLeft, Share2 } from 'lucide-react';

export const NewsDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { language } = useLanguage();

  const newsItem = newsItems.find(item => item.id === id);

  if (!newsItem) {
    return (
      <div className="min-h-screen bg-[#FDF8F4] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-light text-[#1A1A1A] mb-4">Bài viết không tồn tại</h1>
          <button
            onClick={() => navigate('/tin-tuc')}
            className="text-[#D4AF37] hover:underline"
          >
            ← Quay lại trang tin tức
          </button>
        </div>
      </div>
    );
  }

  const getTitle = () => {
    switch (language) {
      case 'en':
        return newsItem.titleEn;
      case 'ko':
        return newsItem.titleKo;
      default:
        return newsItem.title;
    }
  };

  const getExcerpt = () => {
    switch (language) {
      case 'en':
        return newsItem.excerptEn;
      case 'ko':
        return newsItem.excerptKo;
      default:
        return newsItem.excerpt;
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat(language === 'vi' ? 'vi-VN' : language === 'ko' ? 'ko-KR' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  };

  const getContent = () => {
    switch (language) {
      case 'en':
        return {
          intro: 'Maia Imperial Spa offers luxurious treatments inspired by traditional Hue imperial therapies. Our experienced therapists combine ancient techniques with modern wellness practices.',
          section1Title: 'Traditional Heritage',
          section1Content: 'With over 10 years of experience, we bring the essence of Hue imperial medicine to every treatment. Our spa uses premium herbal products sourced from the Imperial City region, ensuring authentic and effective therapies.',
          section2Title: 'Modern Facilities',
          section2Content: 'Our spa features state-of-the-art equipment and private treatment rooms designed for ultimate comfort and relaxation. Each space is carefully crafted to provide a serene atmosphere that enhances your wellness journey.',
          section3Title: 'Expert Care',
          section3Content: 'Our team of certified therapists has extensive training in traditional massage techniques, aromatherapy, and skincare treatments. We are committed to providing personalized service tailored to your specific needs.',
          closing: 'Visit Maia Imperial Spa today and discover the perfect balance of tradition and modern luxury. Book your appointment through Messenger or call us at 0905 686 226.'
        };
      case 'ko':
        return {
          intro: 'Maia Imperial Spa는 전통적인 후에 황실 치료법에서 영감을 받은 고급스러운 트리트먼트를 제공합니다. 숙련된 치료사들이 고대 기술과 현대 웰니스 관행을 결합합니다.',
          section1Title: '전통 유산',
          section1Content: '10년 이상의 경험을 바탕으로 모든 트리트먼트에 후에 황실 의학의 정수를 제공합니다. 우리 스파는 황성 지역에서 공급되는 프리미엄 허브 제품을 사용하여 진정하고 효과적인 치료를 보장합니다.',
          section2Title: '현대적인 시설',
          section2Content: '우리 스파는 최첨단 장비와 최고의 편안함과 휴식을 위해 설계된 개인 트리트먼트 룸을 갖추고 있습니다. 각 공간은 웰니스 여정을 향상시키는 고요한 분위기를 제공하도록 세심하게 제작되었습니다.',
          section3Title: '전문가 케어',
          section3Content: '인증된 치료사 팀은 전통 마사지 기술, 아로마테라피 및 스킨케어 트리트먼트에 대한 광범위한 교육을 받았습니다. 귀하의 특정 요구에 맞춘 맞춤형 서비스를 제공하기 위해 최선을 다하고 있습니다.',
          closing: '오늘 Maia Imperial Spa를 방문하여 전통과 현대 럭셔리의 완벽한 균형을 발견하세요. 메신저를 통해 예약하거나 0905 686 226으로 전화하세요.'
        };
      default:
        return {
          intro: 'Maia Imperial Spa mang đến những liệu trình sang trọng lấy cảm hứng từ y học cung đình Huế truyền thống. Đội ngũ kỹ thuật viên giàu kinh nghiệm của chúng tôi kết hợp kỹ thuật cổ xưa với các phương pháp chăm sóc sức khỏe hiện đại.',
          section1Title: 'Di Sản Truyền Thống',
          section1Content: 'Với hơn 10 năm kinh nghiệm, chúng tôi mang tinh hoa y học cung đình Huế đến từng liệu trình. Spa của chúng tôi sử dụng các sản phẩm thảo dược cao cấp có nguồn gốc từ vùng Cố Đô, đảm bảo các liệu pháp chân thực và hiệu quả.',
          section2Title: 'Cơ Sở Vật Chất Hiện Đại',
          section2Content: 'Spa của chúng tôi trang bị thiết bị hiện đại và các phòng trị liệu riêng tư được thiết kế để mang lại sự thoải mái và thư giãn tối đa. Mỗi không gian được chăm chút cẩn thận để tạo ra bầu không khí thanh bình nâng cao hành trình chăm sóc sức khỏe của bạn.',
          section3Title: 'Chăm Sóc Chuyên Nghiệp',
          section3Content: 'Đội ngũ kỹ thuật viên được chứng nhận của chúng tôi có kiến thức sâu rộng về kỹ thuật massage truyền thống, liệu pháp hương thơm và các liệu trình chăm sóc da. Chúng tôi cam kết cung cấp dịch vụ được cá nhân hóa phù hợp với nhu cầu cụ thể của bạn.',
          closing: 'Ghé thăm Maia Imperial Spa ngay hôm nay và khám phá sự cân bằng hoàn hảo giữa truyền thống và sang trọng hiện đại. Đặt lịch hẹn qua Messenger hoặc gọi cho chúng tôi theo số 0905 686 226.'
        };
    }
  };

  const content = getContent();

  return (
    <div className="min-h-screen bg-[#FDF8F4]">
      {/* Hero Section */}
      <section className="relative  pb-0">
        <div className="relative h-[400px] md:h-[500px] overflow-hidden">
          <img
            src={newsItem.image}
            alt={getTitle()}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
          
          {/* Back Button */}
          {/* <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            onClick={() => navigate('/tin-tuc')}
            className="absolute top-8 left-8 flex items-center gap-2 text-white hover:text-[#D4AF37] transition-colors"
          >
            <ArrowLeft size={20} />
            <span className="text-sm uppercase tracking-wide">Quay lại</span>
          </motion.button> */}

          {/* Title Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-center gap-3 text-white/90 text-sm mb-4">
                  <Calendar size={16} />
                  <span>{formatDate(newsItem.date)}</span>
                </div>
                <h1
                  className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-4"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {getTitle()}
                </h1>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="prose prose-lg max-w-none"
          >
            {/* Excerpt */}
            <div className="bg-[#872D29] text-white p-8 rounded-lg mb-12">
              <p className="text-xl leading-relaxed italic">
                "{getExcerpt()}"
              </p>
            </div>

            {/* Introduction */}
            <div className="mb-12">
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                {content.intro}
              </p>
            </div>

            {/* Section 1 */}
            <div className="mb-12">
              <h2
                className="text-3xl font-light mb-6 text-[#872D29]"
                style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 400 }}
              >
                {content.section1Title}
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                {content.section1Content}
              </p>
              <div className="grid grid-cols-2 gap-4 my-8">
                <img
                  src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&q=80"
                  alt="Spa Treatment"
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
                <img
                  src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&q=80"
                  alt="Spa Interior"
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>

            {/* Section 2 */}
            <div className="mb-12">
              <h2
                className="text-3xl font-light mb-6 text-[#872D29]"
                style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 400 }}
              >
                {content.section2Title}
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                {content.section2Content}
              </p>
            </div>

            {/* Section 3 */}
            <div className="mb-12">
              <h2
                className="text-3xl font-light mb-6 text-[#872D29]"
                style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 400 }}
              >
                {content.section3Title}
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                {content.section3Content}
              </p>
              <div className="bg-[#FDF8F4] border-l-4 border-[#D4AF37] p-6 rounded-r-lg">
                <p className="text-gray-700 italic">
                  "{content.closing}"
                </p>
              </div>
            </div>

            {/* CTA Section */}
            <div className="mt-16 bg-[#872D29] text-white p-8 rounded-lg text-center">
              <h3
                className="text-2xl md:text-3xl font-normal mb-4"
                style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 400 }}
              >
                Sẵn sàng trải nghiệm?
              </h3>
              <p className="text-white/90 mb-6">
                Đặt lịch ngay hôm nay để tận hưởng dịch vụ spa đẳng cấp
              </p>
              <motion.a
                href="https://m.me/YOUR_PAGE_ID"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-3 bg-white text-[#872D29] rounded-full hover:bg-[#D4AF37] hover:text-white transition-all duration-300 font-medium"
                style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 500 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.145 2 11.243c0 2.899 1.438 5.483 3.688 7.171V22l3.486-1.914c.93.257 1.913.393 2.826.393 5.523 0 10-4.145 10-9.243C22 6.145 17.523 2 12 2zm1.032 12.433l-2.558-2.73-4.994 2.73 5.488-5.823 2.623 2.73 4.929-2.73-5.488 5.823z"/>
                </svg>
                Đặt lịch ngay
              </motion.a>
            </div>

            {/* Share Section */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <span className="text-gray-600 font-medium">Chia sẻ bài viết:</span>
                <div className="flex items-center gap-3">
                  <button className="w-10 h-10 rounded-full bg-[#872D29] text-white flex items-center justify-center hover:bg-[#D4AF37] transition-colors">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </button>
                  <button className="w-10 h-10 rounded-full bg-[#872D29] text-white flex items-center justify-center hover:bg-[#D4AF37] transition-colors">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </button>
                  <button className="w-10 h-10 rounded-full bg-[#872D29] text-white flex items-center justify-center hover:bg-[#D4AF37] transition-colors">
                    <Share2 size={18} />
                  </button>
                </div>
              </div>
            </div>
          </motion.article>

          {/* Related Articles */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-16 pt-12 border-t border-gray-200"
          >
            <h3
              className="text-2xl md:text-3xl font-normal mb-8 text-[#872D29]"
              style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 400 }}
            >
              Bài viết liên quan
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {newsItems
                .filter(item => item.id !== id)
                .slice(0, 3)
                .map((item) => (
                  <div
                    key={item.id}
                    onClick={() => navigate(`/tin-tuc/${item.id}`)}
                    className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow group"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-4">
                      <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                        <Calendar size={12} />
                        <span>{formatDate(item.date)}</span>
                      </div>
                      <h4
                        className="text-lg font-light text-[#1A1A1A] line-clamp-2"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        {language === 'en' ? item.titleEn : language === 'ko' ? item.titleKo : item.title}
                      </h4>
                    </div>
                  </div>
                ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
