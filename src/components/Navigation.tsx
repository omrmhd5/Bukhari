import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sun, Moon, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "next-themes";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();
  const { theme, setTheme } = useTheme();

  const navLinks: Array<{
    path?: string;
    section?: string;
    label: string;
    type: "link" | "section";
  }> = [
    { path: "/", label: t("home"), type: "link" },
    { section: "about", label: t("aboutCompany"), type: "section" },
    { section: "services", label: t("ourServices"), type: "section" },
    { section: "contact", label: t("contactTitle"), type: "section" },
  ];

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== "/") {
      // If not on home page, navigate first then scroll
      window.location.href = `/#${sectionId}`;
    } else {
      // If on home page, just scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const offset = 80; // Account for fixed navbar
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }, 100);
    }
    setIsOpen(false); // Close mobile menu
  };

  const toggleLanguage = () => {
    setLanguage(language === "ar" ? "en" : "ar");
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect-strong shadow-luxury border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2 rtl:space-x-reverse group">
            <img
              src="/assets/LogoNavBar.png"
              alt="Logo"
              className="w-24 sm:w-26 md:w-20 lg:w-16 h-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 rtl:space-x-reverse">
            {navLinks.map((link, index) => {
              if (link.type === "section") {
                return (
                  <button
                    key={`${link.section}-${index}`}
                    onClick={() => scrollToSection(link.section!)}
                    className="relative px-4 py-2 rounded-xl transition-all duration-300 font-medium hover:bg-accent/10 text-foreground hover:text-primary">
                    <span className="relative z-10">{link.label}</span>
                  </button>
                );
              } else {
                return (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-4 py-2 rounded-xl transition-all duration-300 font-medium group ${
                  location.pathname === link.path
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-accent/10 text-foreground hover:text-primary"
                }`}>
                <span className="relative z-10">{link.label}</span>
              </Link>
                );
              }
            })}
          </div>

          {/* Theme, Language & Mobile Menu Toggle */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full hover:bg-accent/10 hover:scale-110 transition-all duration-300">
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={toggleLanguage}
              className="rounded-full hover:bg-accent/10 hover:scale-110 transition-all duration-300">
              <Globe className="h-5 w-5" />
              <span className="sr-only">Toggle language</span>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden rounded-full hover:bg-accent/10 hover:scale-110 transition-all duration-300"
              onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 animate-fade-in border-t border-border/50 mt-2 pt-4">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link, index) => {
                if (link.type === "section") {
                  return (
                    <button
                      key={`${link.section}-${index}`}
                      onClick={() => scrollToSection(link.section!)}
                      className="px-4 py-3 rounded-xl transition-all duration-300 font-medium hover:translate-x-2 rtl:hover:-translate-x-2 hover:bg-accent/10 text-foreground hover:text-primary text-left rtl:text-right">
                      {link.label}
                    </button>
                  );
                } else {
                  return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-xl transition-all duration-300 font-medium hover:translate-x-2 rtl:hover:-translate-x-2 ${
                    location.pathname === link.path
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-accent/10 text-foreground hover:text-primary"
                  }`}>
                  {link.label}
                </Link>
                  );
                }
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
