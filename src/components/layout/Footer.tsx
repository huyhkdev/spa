import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

export const Footer = () => {
  const { t } = useLanguage();

  const quickLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.gallery'), path: '/hinh-anh' },
    // { name: t('nav.services'), path: '/dich-vu' },
    { name: t('nav.booking'), path: '/dat-lich' },
    // { name: t('nav.news'), path: '/tin-tuc' },
    { name: t('nav.contact'), path: '/lien-he' }
  ];

  return (
    <footer className="text-white" style={{ backgroundColor: '#4A5D4E' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Column 1: Logo & Tagline */}
          <div>
            <img 
              src="/logo.png" 
              alt="Lam An Spa" 
              className="h-16 w-16 rounded-full object-cover border-2 border-[#D4AF37]/40 shadow-md mb-4"
            />
            <p className="text-sm text-white/80 mb-4">
              {t('footer.tagline')}
            </p>
            <p className="text-xs text-white/70">
              Nuôi Dưỡng Thân - An Dưỡng Tâm
            </p>
          </div>

          {/* Column 2: Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#D4AF37]">
              {t('footer.branches')}
            </h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin size={16} className="mt-1 flex-shrink-0 text-[#D4AF37]" />
                <p className="text-sm text-white/80">
                  28 Vo Thi Sau Street, Thuan Hoa District, Hue City
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-[#D4AF37]" />
                <a href="tel:0915954699" className="text-sm text-white/80 hover:text-[#D4AF37] transition-colors">
                  0915 954 699
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-[#D4AF37]" />
                <a href="mailto:lamanspahue@gmail.com" className="text-sm text-white/80 hover:text-[#D4AF37] transition-colors">
                  lamanspahue@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#D4AF37]">
              {t('footer.quickLinks')}
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-white/80 hover:text-[#D4AF37] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter & Social */}
          <div>
            {/* <h4 className="text-lg font-semibold mb-4 text-[#D4AF37]">
              {t('footer.newsletter')}
            </h4> */}
            {/* <form onSubmit={handleNewsletterSubmit} className="mb-6">
              <div className="flex flex-col space-y-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t('footer.newsletterPlaceholder')}
                  className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-[#D4AF37]"
                  required
                />
                <Button type="submit" variant="primary" size="sm">
                  {t('footer.subscribe')}
                </Button>
              </div>
            </form> */}

            <h5 className="text-sm font-semibold mb-3 text-[#D4AF37]">
              {t('footer.followUs')}
            </h5>
            <div className="flex space-x-3">
              <a
                href="https://www.facebook.com/people/Lam-An-Spa/61580592373465/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#D4AF37] transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/lamanspahue/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#D4AF37] transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
 
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8">
          <div className="text-center">
            <p className="text-sm text-white/70">
              © {new Date().getFullYear()} {t('footer.copyright')}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
