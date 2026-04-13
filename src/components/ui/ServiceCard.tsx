import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import type { Service } from '../../types';
import { useLanguage } from '../../contexts/LanguageContext';

interface ServiceCardProps {
  service: Service;
}

export const ServiceCard = ({ service }: ServiceCardProps) => {
  const { language } = useLanguage();

  const getName = () => {
    switch (language) {
      case 'en':
        return service.nameEn;
      case 'ko':
        return service.nameKo;
      default:
        return service.name;
    }
  };

  const getDescription = () => {
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
    <motion.div
      className={`bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ${
        service.featured ? 'ring-2 ring-[#D4AF37]' : ''
      }`}
      whileHover={{ y: -5 }}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={service.image}
          alt={getName()}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          onError={(e) => {
            e.currentTarget.src = 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800';
          }}
        />
        {service.featured && (
          <div className="absolute top-4 right-4 bg-[#D4AF37] text-white px-3 py-1 rounded-full text-xs font-semibold">
            Signature
          </div>
        )}
      </div>
      <div className="p-6">
        <h3
          className="text-xl font-bold mb-2 text-[#1A1A1A]"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {getName()}
        </h3>
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
          {getDescription()}
        </p>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-[#D4AF37]">
              {formatPrice(service.price)}
            </span>
            <span className="text-sm text-gray-500 ml-1">VNĐ</span>
          </div>
          <span className="text-sm text-gray-500">{service.duration}'</span>
        </div>
        {service.variants && service.variants.length > 0 && (
          <div className="mt-3 pt-3 border-t border-gray-200">
            <p className="text-xs text-gray-500 mb-2">Các gói khác:</p>
            <div className="flex gap-2">
              {service.variants.map((variant, index) => (
                <span key={index} className="text-xs bg-gray-100 px-2 py-1 rounded">
                  {variant.duration}' - {formatPrice(variant.price)} VNĐ
                </span>
              ))}
            </div>
          </div>
        )}
        <Link
          to="/dat-lich"
          className="mt-4 block w-full text-center py-2 bg-[#D4AF37] text-white rounded-full hover:bg-[#b8962f] transition-colors duration-300"
        >
          Đặt lịch
        </Link>
      </div>
    </motion.div>
  );
};
