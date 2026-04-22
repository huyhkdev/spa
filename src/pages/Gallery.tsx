import { motion } from 'framer-motion';
import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Lightbox } from '../components/ui/Lightbox';
import type { GalleryImage } from '../types';

// Import images from khonggian folder
import nt1 from '../assets/khonggian/nt1.png';
import nt2 from '../assets/khonggian/nt2.png';
import nt21 from '../assets/khonggian/nt2-1.png';
import nt22 from '../assets/khonggian/nt2-2.png';
import nt3 from '../assets/khonggian/nt3.png';
import nt4 from '../assets/khonggian/nt4.png';
import nt44 from '../assets/khonggian/nt4-4.png';
import nt5 from '../assets/khonggian/nt5.png';
import nt6 from '../assets/khonggian/nt6.png';
import nt7 from '../assets/khonggian/nt7.png';
import nt8 from '../assets/khonggian/nt8.png';
import nt12 from '../assets/khonggian/nt12.png';

// Import service images
import bodyMassage from '../assets/services/bodymassage.jfif';
import footMassage from '../assets/services/foot.jfif';
import facialService from '../assets/services/facial.jfif';
import hairService from '../assets/services/gội.jfif';
import bodyService from '../assets/services/body.jfif';
import bodyScrub from '../assets/services/ttbc.jfif';

const galleryImages: GalleryImage[] = [
  // Không Gian - Space Images
  {
    id: '1',
    src: nt1,
    alt: 'Lam An Spa - Không gian 1',
    category: 'space'
  },
  {
    id: '2',
    src: nt2,
    alt: 'Lam An Spa - Không gian 2',
    category: 'space'
  },
  {
    id: '3',
    src: nt21,
    alt: 'Lam An Spa - Không gian 2-1',
    category: 'space'
  },
  {
    id: '4',
    src: nt22,
    alt: 'Lam An Spa - Không gian 2-2',
    category: 'space'
  },
  {
    id: '5',
    src: nt3,
    alt: 'Lam An Spa - Không gian 3',
    category: 'space'
  },
  {
    id: '6',
    src: nt4,
    alt: 'Lam An Spa - Không gian 4',
    category: 'space'
  },
  {
    id: '7',
    src: nt44,
    alt: 'Lam An Spa - Không gian 4-4',
    category: 'space'
  },
  {
    id: '8',
    src: nt5,
    alt: 'Lam An Spa - Không gian 5',
    category: 'space'
  },
  {
    id: '9',
    src: nt6,
    alt: 'Lam An Spa - Không gian 6',
    category: 'space'
  },
  {
    id: '10',
    src: nt7,
    alt: 'Lam An Spa - Không gian 7',
    category: 'space'
  },
  {
    id: '11',
    src: nt8,
    alt: 'Lam An Spa - Không gian 8',
    category: 'space'
  },
  {
    id: '12',
    src: nt12,
    alt: 'Lam An Spa - Không gian 12',
    category: 'space'
  },
  // Dịch Vụ - Services Images
  {
    id: '13',
    src: bodyMassage,
    alt: 'Massage Toàn Thân - Full Body Massage',
    category: 'services'
  },
  {
    id: '14',
    src: footMassage,
    alt: 'Massage Chân - Foot Massage',
    category: 'services'
  },
  {
    id: '15',
    src: facialService,
    alt: 'Chăm Sóc Da Mặt - Facial Care',
    category: 'services'
  },
  {
    id: '16',
    src: hairService,
    alt: 'Gội Đầu Dưỡng Sinh - Hair Therapy',
    category: 'services'
  },
  {
    id: '17',
    src: bodyService,
    alt: 'Liệu Trình Đặc Trưng - Signature Treatment',
    category: 'services'
  },
  {
    id: '18',
    src: bodyScrub,
    alt: 'Tẩy Tế Bào Chết - Body Scrub',
    category: 'services'
  }
];

export const Gallery = () => {
  const { t, language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const categories = [
    { id: 'all', label: t('gallery.all') },
    { id: 'space', label: t('gallery.space') },
    { id: 'services', label: t('gallery.services') }
  ];

  const getImageCaption = (alt: string) => {
    // If alt contains both Vietnamese and English (separated by ' - '), split it
    if (alt.includes(' - ') && !alt.startsWith('Lam An Spa')) {
      const [viText, enText] = alt.split(' - ');
      return language === 'en' ? enText : viText;
    }
    
    // For space images with pattern "Lam An Spa - Không gian X"
    if (alt.includes('Không gian')) {
      const spaceNumber = alt.match(/\d+(-\d+)?/)?.[0] || '';
      return language === 'en' 
        ? `Lam An Spa - Space ${spaceNumber}`
        : alt;
    }
    
    return alt;
  };

  const filteredImages = selectedCategory === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory);

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FDF8F4]">
      {/* Gallery Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#3D5647' }}>
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p
              className="text-3xl md:text-4xl mb-4"
              style={{ 
                fontFamily: "'Satisfy', cursive",
                color: '#FBE39D'
              }}
            >
              {t('gallery.subtitle')}
            </p>
            {/* <h1
              className="text-3xl md:text-4xl lg:text-5xl font-normal mb-6 tracking-wider"
              style={{ 
                fontFamily: "'Raleway', sans-serif",
                fontWeight: 400,
                color: '#FBE39D'
              }}
            >
              {t('gallery.title')}
            </h1> */}
            <p className="text-white/80 max-w-2xl mx-auto">
              {language === 'vi' ? 'Hình ảnh không gian, dịch vụ và trải nghiệm tại Lam An Spa' : 
               language === 'en' ? 'Images of space, services and experiences at Lam An Spa' :
               'Lam An Spa의 공간, 서비스 및 경험 이미지'}
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-[#D4AF37] text-white shadow-lg'
                    : 'bg-white/10 text-white hover:bg-white/20 border border-white/30'
                }`}
              >
                {category.label}
              </button>
            ))}
          </motion.div>

          {/* Masonry Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                className="break-inside-avoid cursor-pointer group"
                onClick={() => handleImageClick(index)}
              >
                <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white text-sm font-medium">{getImageCaption(image.alt)}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <Lightbox
        images={filteredImages}
        currentIndex={selectedImageIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </div>
  );
};
