import { motion } from 'framer-motion';
import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Lightbox } from '../components/ui/Lightbox';
import type { GalleryImage } from '../types';

const galleryImages: GalleryImage[] = [
  {
    id: '1',
    src: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80',
    alt: 'Spa Interior',
    category: 'space'
  },
  {
    id: '2',
    src: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80',
    alt: 'Massage Service',
    category: 'services'
  },
  {
    id: '3',
    src: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=800&q=80',
    alt: 'Relaxation Area',
    category: 'space'
  },
  {
    id: '4',
    src: 'https://images.unsplash.com/photo-1560343776-97e7d202ff0e?w=800&q=80',
    alt: 'Foot Massage',
    category: 'services'
  },
  {
    id: '5',
    src: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80',
    alt: 'Hair Treatment',
    category: 'services'
  },
  {
    id: '6',
    src: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80',
    alt: 'Facial Treatment',
    category: 'services'
  },
  {
    id: '7',
    src: 'https://images.unsplash.com/photo-1596178060671-7a80dc8059ea?w=800&q=80',
    alt: 'Treatment Room',
    category: 'space'
  },
  {
    id: '8',
    src: 'https://images.unsplash.com/photo-1562088287-f7e6e21c5a30?w=800&q=80',
    alt: 'Reception',
    category: 'space'
  },
  {
    id: '9',
    src: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&q=80',
    alt: 'Therapist at work',
    category: 'staff'
  },
  {
    id: '10',
    src: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&q=80',
    alt: 'Happy Customer',
    category: 'customers'
  },
  {
    id: '11',
    src: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=800&q=80',
    alt: 'Spa Products',
    category: 'space'
  },
  {
    id: '12',
    src: 'https://images.unsplash.com/photo-1610439856688-13f5a6a6c40d?w=800&q=80',
    alt: 'Herbal Treatment',
    category: 'services'
  }
];

export const Gallery = () => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const categories = [
    { id: 'all', label: t('gallery.all') },
    { id: 'space', label: t('gallery.space') },
    { id: 'services', label: t('gallery.services') },
    { id: 'staff', label: t('gallery.staff') },
    { id: 'customers', label: t('gallery.customers') }
  ];

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
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#872D29' }}>
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
                color: '#D4AF37'
              }}
            >
              Gallery
            </p>
            <h1
              className="text-3xl md:text-4xl lg:text-5xl font-normal mb-6 text-white tracking-wider"
              style={{ 
                fontFamily: "'Raleway', sans-serif",
                fontWeight: 400
              }}
            >
              {t('gallery.title')}
            </h1>
            <p className="text-white/80 max-w-2xl mx-auto">
              Hình ảnh không gian, dịch vụ và trải nghiệm tại Maia Imperial Spa
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
                      <p className="text-white text-sm font-medium">{image.alt}</p>
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
