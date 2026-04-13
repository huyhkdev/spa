import { motion } from 'framer-motion';
import type { PriceItem } from '../../types';
import { useLanguage } from '../../contexts/LanguageContext';

interface PriceTableProps {
  items: PriceItem[];
}

export const PriceTable = ({ items }: PriceTableProps) => {
  const { language } = useLanguage();

  const getName = (item: PriceItem) => {
    switch (language) {
      case 'en':
        return item.nameEn;
      case 'ko':
        return item.nameKo;
      default:
        return item.name;
    }
  };

  const getDescription = (item: PriceItem) => {
    if (!item.description) return '';
    switch (language) {
      case 'en':
        return item.descriptionEn || '';
      case 'ko':
        return item.descriptionKo || '';
      default:
        return item.description;
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN').format(price);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {items.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05, duration: 0.6 }}
          viewport={{ once: true }}
          className="border-b border-white/20 pb-6"
        >
          {/* Service Name & Duration */}
          <div className="flex items-start justify-between mb-2">
            <div className="flex-1">
              <h3
                className="text-white font-normal text-base md:text-lg uppercase tracking-wide mb-1"
                style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 400 }}
              >
                {getName(item)}
              </h3>
            </div>
            <span className="text-white font-normal text-base md:text-lg ml-4 whitespace-nowrap">
              {formatPrice(item.price)} VNĐ
            </span>
          </div>

          {/* Description */}
          {getDescription(item) && (
            <p
              className="text-[#D4AF37] text-sm uppercase tracking-wide"
              style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 300 }}
            >
              {getDescription(item)}
            </p>
          )}
        </motion.div>
      ))}
    </div>
  );
};
