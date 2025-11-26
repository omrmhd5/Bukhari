import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Phone, Mail, MessageCircle, MapPin } from "lucide-react";

const Footer = () => {
  const { t, language } = useLanguage();

  // Format phone number for RTL
  const formatPhoneNumber = (phone: string) => {
    return phone;
  };

  const navLinks = [
    { path: "/", label: t("home") },
    { path: "/water", label: t("water") },
    { path: "/transport", label: t("transport") },
    { path: "/buses", label: t("buses") },
    { path: "/trailers", label: t("trailers") },
    { path: "/car-rental", label: t("carRental") },
    { path: "/logistics-management", label: t("logisticsManagement") },
    { path: "/digital-marketing", label: t("digitalMarketing") },
  ];

  const openWhatsApp = () => {
    window.open("https://wa.me/966564431326", "_blank");
  };

  return (
    <footer className="bg-gradient-secondary border-t border-border/50 mt-auto relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-mesh opacity-50" />

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link
              to="/"
              className="flex items-center space-x-2 rtl:space-x-reverse group">
              <img
                src="/assets/LogoNavBar.png"
                alt="Logo"
                className="h-16 w-auto group-hover:scale-105 transition-transform duration-300"
              />
            </Link>
            <p className="text-muted-foreground leading-relaxed">
              {language === "ar"
                ? "رائدون في تقديم حلول النقل والخدمات اللوجستية المتكاملة في المملكة"
                : "Leading provider of comprehensive transport and logistics solutions in Saudi Arabia"}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">
              {language === "ar" ? "روابط سريعة" : "Quick Links"}
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-all duration-300 block hover:translate-x-2 rtl:hover:-translate-x-2 group">
                    <span className="flex items-center gap-2">
                      <span className="w-0 group-hover:w-2 h-0.5 bg-primary transition-all duration-300" />
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">
              {t("contactTitle")}
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 group">
                <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Phone className="h-4 w-4 text-primary" />
                </div>
                <a
                  href="tel:+966564431326"
                  dir="ltr"
                  className="text-muted-foreground hover:text-primary transition-all duration-300 hover:underline inline-block">
                  +966 56 443 1326
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Mail className="h-4 w-4 text-primary" />
                </div>
                <a
                  href="mailto:info@logistics-as.com"
                  className="text-muted-foreground hover:text-primary transition-all duration-300 hover:underline">
                  info@logistics-as.com
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <MessageCircle className="h-4 w-4 text-primary" />
                </div>
                <button
                  onClick={openWhatsApp}
                  className="text-muted-foreground hover:text-primary transition-all duration-300 text-left hover:underline">
                  {t("whatsapp")}
                </button>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <MapPin className="h-4 w-4 text-primary" />
                </div>
                <span className="text-muted-foreground">
                  {language === "ar"
                    ? "المملكة العربية السعودية"
                    : "Saudi Arabia"}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border/50 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm text-center md:text-left">
              {language === "ar"
                ? `© ${new Date().getFullYear()} شركة عبدالله بخاري و شركائه. جميع الحقوق محفوظة.`
                : `© ${new Date().getFullYear()} Abdullah Bukhari Company. All rights reserved.`}
            </p>
            <p className="text-muted-foreground text-sm text-center md:text-right">
              {language === "ar"
                ? "مصمم ومطور بكل فخر"
                : "Designed & Developed with Pride"}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
