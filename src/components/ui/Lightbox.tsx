import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

interface LightboxProps {
  images: Array<{ src: string; alt: string }>;
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
}

export const Lightbox = ({ images, currentIndex, isOpen, onClose }: LightboxProps) => {
  const [index, setIndex] = useState(currentIndex);

  const goToPrevious = () => {
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') goToPrevious();
    if (e.key === 'ArrowRight') goToNext();
    if (e.key === 'Escape') onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/95 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Lightbox */}
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white hover:text-[#D4AF37] transition-colors z-10"
            >
              <X size={32} />
            </button>

            {/* Previous Button */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 text-white hover:text-[#D4AF37] transition-colors z-10"
            >
              <ChevronLeft size={48} />
            </button>

            {/* Image */}
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="max-w-7xl max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={images[index].src}
                alt={images[index].alt}
                className="max-w-full max-h-[90vh] object-contain"
              />
              <p className="text-white text-center mt-4">
                {index + 1} / {images.length}
              </p>
            </motion.div>

            {/* Next Button */}
            <button
              onClick={goToNext}
              className="absolute right-4 text-white hover:text-[#D4AF37] transition-colors z-10"
            >
              <ChevronRight size={48} />
            </button>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};
