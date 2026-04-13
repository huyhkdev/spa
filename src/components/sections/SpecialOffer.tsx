import { motion } from 'framer-motion';
import { Clock, Tag } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Button } from '../ui/Button';
import { Link } from 'react-router-dom';

export const SpecialOffer = () => {
  const { t } = useLanguage();

  return (
    <section className="py-12 bg-gradient-to-r from-[#D4AF37] to-[#b8962f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          {/* Left Side - Offer Info */}
          <div className="flex-1 text-white">
            <div className="flex items-center gap-3 mb-4">
              <Tag size={32} />
              <h2
                className="text-3xl md:text-4xl font-bold"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {t('specialOffer.title')}
              </h2>
            </div>
            <div className="space-y-2">
              <p className="text-5xl md:text-6xl font-bold">
                {t('specialOffer.discount')}
              </p>
              <div className="flex items-center gap-2 text-lg">
                <Clock size={20} />
                <span>{t('specialOffer.time')}</span>
              </div>
              <p className="text-white/90 mt-2">{t('specialOffer.description')}</p>
            </div>
          </div>

          {/* Right Side - CTA */}
          <div className="flex-shrink-0">
            <Link to="/dat-lich">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-white !text-[#D4AF37] border-white hover:!bg-[#FDF8F4] hover:!text-[#D4AF37] !border-2"
                >
                  {t('specialOffer.cta')}
                </Button>
              </motion.div>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
