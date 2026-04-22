import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.gallery'), path: '/hinh-anh' },
    { name: t('nav.services'), path: '/dich-vu' },
    // { name: t('nav.booking'), path: '/dat-lich' },
    // { name: t('nav.news'), path: '/tin-tuc' },
    { name: t('nav.contact'), path: '/lien-he' }
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
      initial={{ y: 0 }}
      animate={{ y: 0 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-20">
          {/* Logo - Left */}
          <Link to="/" className="flex items-center gap-3 z-10">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3"
            >
              {/* Logo Image */}
              <img 
                src="/logo.png" 
                alt="Lam An Spa" 
                className="h-14 w-14 rounded-full object-cover border-2 border-[#D4AF37]/40 shadow-md"
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation - Absolute Center */}
          <nav className="hidden lg:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors duration-300 hover:text-[#D4AF37] ${
                  scrolled ? 'text-[#1A1A1A]' : 'text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Language Dropdown & Booking Button - Right */}
          <div className="hidden md:flex items-center gap-4 z-10">
            {/* Language Dropdown */}
            <div className="relative">
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value as 'vi' | 'en' | 'ko')}
                className={`pl-4 pr-10 py-2 rounded-full font-medium text-sm cursor-pointer transition-all duration-300 appearance-none ${
                  scrolled
                    ? 'bg-gray-100 hover:bg-gray-200 text-[#1A1A1A]'
                    : 'bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white'
                }`}
                style={{
                  backgroundImage: scrolled 
                    ? 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'%231A1A1A\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M19 9l-7 7-7-7\'%3E%3C/path%3E%3C/svg%3E")'
                    : 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'white\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M19 9l-7 7-7-7\'%3E%3C/path%3E%3C/svg%3E")',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 0.5rem center',
                  backgroundSize: '1.5em 1.5em'
                }}
              >
                <option value="vi">🇻🇳 Tiếng Việt</option>
                <option value="en">🇬🇧 English</option>
                {/* <option value="ko">🇰🇷 한국어</option> */}
              </select>
            </div>

            {/* Booking CTA Button */}
            <a
              href="https://www.facebook.com/people/Lam-An-Spa/61580592373465/"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-6 py-2 rounded-full font-semibold text-sm uppercase tracking-wide transition-all duration-300 ${
                scrolled
                  ? 'bg-[#D4AF37] text-white hover:bg-[#b8962f] shadow-md hover:shadow-lg'
                  : 'bg-white text-[#1A1A1A] hover:bg-white/90 shadow-lg'
              }`}
            >
              {t('nav.bookNow')}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 ${scrolled ? 'text-[#1A1A1A]' : 'text-white'}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="block text-[#1A1A1A] hover:text-[#D4AF37] font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Language Dropdown - Mobile */}
              <div className="pt-4 border-t border-gray-200">
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value as 'vi' | 'en' | 'ko')}
                  className="w-full px-4 py-3 rounded-lg bg-gray-100 text-[#1A1A1A] font-medium cursor-pointer"
                >
                  <option value="vi">🇻🇳 Tiếng Việt</option>
                  <option value="en">🇬🇧 English</option>
                  <option value="ko">🇰🇷 한국어</option>
                </select>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};
