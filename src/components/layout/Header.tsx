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
    // { name: t('nav.services'), path: '/dich-vu' },
    { name: t('nav.booking'), path: '/dat-lich' },
    // { name: t('nav.news'), path: '/tin-tuc' },
    { name: t('nav.contact'), path: '/lien-he' }
  ];

  const languages: Array<{ code: 'vi' | 'en' | 'ko'; flag: string }> = [
    { code: 'vi', flag: '🇻🇳' },
    { code: 'en', flag: '🇬🇧' },
    { code: 'ko', flag: '🇰🇷' }
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
        <div className="flex items-center justify-between h-20">
          {/* Logo - Left */}
          <Link to="/" className="flex items-center gap-3">
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

          {/* Desktop Navigation - Center */}
          <nav className="hidden lg:flex items-center space-x-8">
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

          {/* Language Flags - Right */}
          <div className="hidden md:flex items-center gap-2">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => setLanguage(lang.code)}
                className={`w-10 h-10 rounded-full flex items-center justify-center text-2xl transition-all duration-300 ${
                  language === lang.code
                    ? scrolled
                      ? 'bg-[#D4AF37] scale-110'
                      : 'bg-white/20 backdrop-blur-sm scale-110'
                    : scrolled
                    ? 'bg-gray-100 hover:bg-gray-200'
                    : 'bg-white/10 backdrop-blur-sm hover:bg-white/20'
                }`}
              >
                {lang.flag}
              </button>
            ))}
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
              <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl transition-all ${
                      language === lang.code
                        ? 'bg-[#D4AF37] scale-110'
                        : 'bg-gray-100'
                    }`}
                  >
                    {lang.flag}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};
