import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sun, Moon, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { useTheme } from "next-themes";

const SECTION_IDS = ["about", "services", "contact"] as const;

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const location = useLocation();
  const { t, i18n } = useTranslation();
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

  const isNavItemActive = (link: (typeof navLinks)[number]) => {
    if (location.pathname !== "/") {
      return link.type === "link" && location.pathname === link.path;
    }

    if (link.type === "section") {
      return activeSection === link.section;
    }

    return !activeSection;
  };

  const navItemClassName = (
    link: (typeof navLinks)[number],
    mobile = false,
  ) => {
    const active = isNavItemActive(link);
    const base =
      "relative px-4 py-2 rounded-xl transition-all duration-300 font-medium";
    const mobileBase = mobile
      ? "px-4 py-3 rounded-xl transition-all duration-300 font-medium hover:translate-x-2 rtl:hover:-translate-x-2 text-left rtl:text-right"
      : base;

    return `${mobile ? mobileBase : base} ${
      active
        ? "bg-primary text-primary-foreground"
        : "hover:bg-accent/10 text-foreground hover:text-primary"
    }`;
  };

  useEffect(() => {
    const syncHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (SECTION_IDS.includes(hash as (typeof SECTION_IDS)[number])) {
        setActiveSection(hash);
        return;
      }

      if (location.pathname === "/") {
        setActiveSection(null);
      }
    };

    syncHash();
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, [location.pathname]);

  useEffect(() => {
    if (location.pathname !== "/") {
      return;
    }

    const elements = SECTION_IDS.map((id) =>
      document.getElementById(id),
    ).filter((element): element is HTMLElement => element !== null);

    if (!elements.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) {
          const sectionId = visible[0].target.id;
          setActiveSection(sectionId);
          if (window.location.hash !== `#${sectionId}`) {
            window.history.replaceState(null, "", `/#${sectionId}`);
          }
        }
      },
      {
        rootMargin: "-96px 0px -55% 0px",
        threshold: [0.1, 0.35, 0.6],
      },
    );

    elements.forEach((element) => observer.observe(element));

    const handleScroll = () => {
      if (window.scrollY < 120) {
        setActiveSection(null);
        if (window.location.hash) {
          window.history.replaceState(null, "", "/");
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname, i18n.language]);

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== "/") {
      window.location.href = `/#${sectionId}`;
      return;
    }

    setActiveSection(sectionId);
    window.history.replaceState(null, "", `/#${sectionId}`);

    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 100);

    setIsOpen(false);
  };

  const handleHomeClick = () => {
    setActiveSection(null);
    window.history.replaceState(null, "", "/");
    setIsOpen(false);

    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const toggleLanguage = () => {
    const next = i18n.language === "ar" ? "en" : "ar";
    i18n.changeLanguage(next);
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
            onClick={handleHomeClick}
            className="flex items-center space-x-2 rtl:space-x-reverse group">
            <img
              src="/assets/LogoNavBar.png"
              alt="Logo"
              className="w-16 md:w-20 lg:w-16 h-auto"
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
                    className={navItemClassName(link)}>
                    <span className="relative z-10">{link.label}</span>
                  </button>
                );
              }

              return (
                <Link
                  key={link.path}
                  to={link.path!}
                  onClick={handleHomeClick}
                  className={navItemClassName(link)}>
                  <span className="relative z-10">{link.label}</span>
                </Link>
              );
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
                      className={navItemClassName(link, true)}>
                      {link.label}
                    </button>
                  );
                }

                return (
                  <Link
                    key={link.path}
                    to={link.path!}
                    onClick={handleHomeClick}
                    className={navItemClassName(link, true)}>
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
