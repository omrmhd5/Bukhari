import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Phone, Mail, MessageCircle, MapPin } from 'lucide-react';

const Footer = () => {
  const { t, language } = useLanguage();

  const navLinks = [
    { path: '/', label: t('home') },
    { path: '/water', label: t('water') },
    { path: '/transport', label: t('transport') },
    { path: '/buses', label: t('buses') },
    { path: '/car-rental', label: t('carRental') },
  ];

  const openWhatsApp = () => {
    window.open('https://wa.me/966500000000', '_blank');
  };

  return (
    <footer className="bg-gradient-secondary border-t border-border/50 mt-auto relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-mesh opacity-50" />
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
              {language === 'ar' ? 'بخاري' : 'BUKHARI'}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {language === 'ar'
                ? 'رائدون في تقديم حلول النقل والخدمات اللوجستية المتكاملة في المملكة'
                : 'Leading provider of comprehensive transport and logistics solutions in Saudi Arabia'}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">
              {language === 'ar' ? 'روابط سريعة' : 'Quick Links'}
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-all duration-300 block hover:translate-x-2 rtl:hover:-translate-x-2 group"
                  >
                    <span className="flex items-center gap-2">
                      <span className="w-0 group-hover:w-2 h-0.5 bg-primary transition-all duration-300" />
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">
              {language === 'ar' ? 'خدماتنا' : 'Our Services'}
            </h4>
            <ul className="space-y-2">
              <li>
                <span className="text-muted-foreground hover:text-primary transition-colors duration-300 cursor-default inline-block">
                  {t('water')}
                </span>
              </li>
              <li>
                <span className="text-muted-foreground hover:text-primary transition-colors duration-300 cursor-default inline-block">
                  {t('transport')}
                </span>
              </li>
              <li>
                <span className="text-muted-foreground hover:text-primary transition-colors duration-300 cursor-default inline-block">
                  {t('buses')}
                </span>
              </li>
              <li>
                <span className="text-muted-foreground hover:text-primary transition-colors duration-300 cursor-default inline-block">
                  {t('carRental')}
                </span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">{t('contactTitle')}</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 group">
                <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Phone className="h-4 w-4 text-primary" />
                </div>
                <a
                  href="tel:+966500000000"
                  className="text-muted-foreground hover:text-primary transition-all duration-300 hover:underline"
                >
                  +966 50 000 0000
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Mail className="h-4 w-4 text-primary" />
                </div>
                <a
                  href="mailto:info@bukhari.sa"
                  className="text-muted-foreground hover:text-primary transition-all duration-300 hover:underline"
                >
                  info@bukhari.sa
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <MessageCircle className="h-4 w-4 text-primary" />
                </div>
                <button
                  onClick={openWhatsApp}
                  className="text-muted-foreground hover:text-primary transition-all duration-300 text-left hover:underline"
                >
                  {t('whatsapp')}
                </button>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <MapPin className="h-4 w-4 text-primary" />
                </div>
                <span className="text-muted-foreground">
                  {language === 'ar' ? 'المملكة العربية السعودية' : 'Saudi Arabia'}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border/50 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm text-center md:text-left">
              {language === 'ar'
                ? `© ${new Date().getFullYear()} شركة عبدالله بخاري. جميع الحقوق محفوظة.`
                : `© ${new Date().getFullYear()} Abdullah Bukhari Company. All rights reserved.`}
            </p>
            <p className="text-muted-foreground text-sm text-center md:text-right">
              {language === 'ar'
                ? 'مصمم ومطور بكل فخر'
                : 'Designed & Developed with Pride'}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

