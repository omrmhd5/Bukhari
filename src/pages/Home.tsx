import { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ContactForm from "@/components/ContactForm";
import {
  ChevronLeft,
  ChevronRight,
  Award,
  Clock,
  Star,
  MapPin,
  Briefcase,
  Users,
  Globe,
  Zap,
  Target,
  Heart,
  Shield,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  TrendingUp,
  Crown,
  UserCircle,
} from "lucide-react";
// Images are in public/assets/ folder
const heroImage = "/assets/home/hero-logistics.jpg";
const waterImage = "/assets/home/water-production.jpg";
const busesImage = "/assets/home/buses.jpg";
const rentalImage = "/assets/home/car-rental.jpg";

const waterLink = "/assets/home/water-link.jpg";
const busesLink = "/assets/home/buses-link.jpg";
const truckLink = "/assets/home/truck-link.jpeg";
const logisticsLink = "/assets/home/logistics-link.jpg";
const companyLink = "/assets/home/companies-link.jpg";
const digitalLink = "/assets/home/digital-link.jpg";
const carLink = "/assets/home/car-link.jpg";

const Home = () => {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { image: heroImage, alt: "Logistics Fleet" },
    { image: waterImage, alt: "Water Production" },
    { image: busesImage, alt: "Buses" },
    { image: rentalImage, alt: "Car Rental" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  // Handle hash navigation
  useEffect(() => {
    const hash = window.location.hash.substring(1);
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          const offset = 80; // Account for fixed navbar
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }, 300);
    }
  }, []);

  const values = [
    {
      icon: Award,
      title: t("trust"),
      description: t("trustDesc"),
    },
    {
      icon: Clock,
      title: t("speed"),
      description: t("speedDesc"),
    },
    {
      icon: Star,
      title: t("quality"),
      description: t("qualityDesc"),
    },
    {
      icon: MapPin,
      title: t("coverage"),
      description: t("coverageDesc"),
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section with Carousel */}
      <section className="relative min-h-[700px] sm:min-h-[750px] md:min-h-[800px] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}>
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full h-full object-cover scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
            <div className="absolute inset-0 bg-gradient-to-r from-navy-800/20 via-transparent to-light-blue-500/20" />
          </div>
        ))}

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center py-12 md:py-0">
          <div className="container mx-auto px-4 text-center text-white mb-4 md:mb-12 relative z-10">
            {/* Badge */}
            <div className="mb-4 md:mb-8 inline-block animate-fade-in">
              <div className="bg-white/15 backdrop-blur-lg px-4 md:px-6 py-2 md:py-3 rounded-full border border-white/30 shadow-lg inline-flex items-center gap-2 hover:bg-white/20 transition-all duration-300">
                <Sparkles className="h-3 w-3 md:h-4 md:w-4 text-white" />
                <span className="text-xs md:text-sm font-semibold text-white">
                  {t("heroBadge")}
                </span>
                <TrendingUp className="h-3 w-3 md:h-4 md:w-4 text-white" />
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-7xl lg:text-8xl font-bold mb-3 md:mb-6 animate-fade-in leading-tight text-white drop-shadow-2xl px-2">
              {t("heroTitle")}
            </h1>
            <p className="text-lg sm:text-xl md:text-3xl lg:text-4xl mb-4 md:mb-6 animate-fade-in font-semibold text-white drop-shadow-lg px-2">
              {t("heroSubtitle")}
            </p>
            <p className="text-sm sm:text-base md:text-xl lg:text-2xl mb-4 md:mb-12 max-w-3xl mx-auto animate-fade-in text-white/95 leading-relaxed drop-shadow-md px-2">
              {t("heroDescription")}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center animate-fade-in px-2 mb-4 md:mb-0">
              <Button
                size="lg"
                onClick={() => {
                  const contactSection = document.getElementById("contact");
                  contactSection?.scrollIntoView({ behavior: "smooth" });
                }}
                className="rounded-full px-6 md:px-8 py-4 md:py-6 text-base md:text-lg transition-all duration-300 hover:scale-105 hover:bg-primary/90 group w-full sm:w-auto">
                {t("contact")}
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => {
                  const servicesSection = document.getElementById("services");
                  servicesSection?.scrollIntoView({ behavior: "smooth" });
                }}
                className="rounded-full px-6 md:px-8 py-4 md:py-6 text-base md:text-lg border-2 border-white/30 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white transition-all duration-300 hover:scale-105 hover:border-white/50 w-full sm:w-auto">
                {t("ourServices")}
              </Button>
            </div>
          </div>

          {/* Stats Cards Overlay */}
          <div className="container mx-auto px-4 mt-4 md:mt-4 relative z-10 w-full">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 max-w-5xl mx-auto">
              <div className="text-center p-4 md:p-5 lg:p-7 bg-white/15 backdrop-blur-lg rounded-2xl md:rounded-3xl border border-white/30 shadow-xl hover:bg-white/25 transition-all duration-300 group hover:scale-105 hover:border-light-blue-400/50">
                <div className="flex justify-center mb-4">
                  <div className="bg-gradient-to-br from-light-blue-400/40 to-light-blue-500/40 p-3 md:p-4 rounded-2xl border border-light-blue-300/20 group-hover:from-light-blue-400/60 group-hover:to-light-blue-500/60 group-hover:scale-110 transition-all duration-300 shadow-lg">
                    <Briefcase className="h-6 w-6 md:h-7 md:w-7 text-white" />
                  </div>
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 md:mb-2 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg">
                  4+
                </div>
                <div className="text-[10px] sm:text-xs md:text-sm text-white/95 font-semibold leading-tight">
                  {t("mainServices")}
                </div>
              </div>
              <div className="text-center p-4 md:p-5 lg:p-7 bg-white/15 backdrop-blur-lg rounded-2xl md:rounded-3xl border border-white/30 shadow-xl hover:bg-white/25 transition-all duration-300 group hover:scale-105 hover:border-light-blue-400/50">
                <div className="flex justify-center mb-4">
                  <div className="bg-gradient-to-br from-light-blue-400/40 to-light-blue-500/40 p-3 md:p-4 rounded-2xl border border-light-blue-300/20 group-hover:from-light-blue-400/60 group-hover:to-light-blue-500/60 group-hover:scale-110 transition-all duration-300 shadow-lg">
                    <Users className="h-6 w-6 md:h-7 md:w-7 text-white" />
                  </div>
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 md:mb-2 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg">
                  100+
                </div>
                <div className="text-[10px] sm:text-xs md:text-sm text-white/95 font-semibold leading-tight">
                  {t("strategicPartner")}
                </div>
              </div>
              <div className="text-center p-4 md:p-5 lg:p-7 bg-white/15 backdrop-blur-lg rounded-2xl md:rounded-3xl border border-white/30 shadow-xl hover:bg-white/25 transition-all duration-300 group hover:scale-105 hover:border-light-blue-400/50">
                <div className="flex justify-center mb-4">
                  <div className="bg-gradient-to-br from-light-blue-400/40 to-light-blue-500/40 p-3 md:p-4 rounded-2xl border border-light-blue-300/20 group-hover:from-light-blue-400/60 group-hover:to-light-blue-500/60 group-hover:scale-110 transition-all duration-300 shadow-lg">
                    <Zap className="h-6 w-6 md:h-7 md:w-7 text-white" />
                  </div>
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 md:mb-2 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg">
                  24/7
                </div>
                <div className="text-[10px] sm:text-xs md:text-sm text-white/95 font-semibold leading-tight">
                  {t("availableService")}
                </div>
              </div>
              <div className="text-center p-4 md:p-5 lg:p-7 bg-white/15 backdrop-blur-lg rounded-2xl md:rounded-3xl border border-white/30 shadow-xl hover:bg-white/25 transition-all duration-300 group hover:scale-105 hover:border-light-blue-400/50">
                <div className="flex justify-center mb-4">
                  <div className="bg-gradient-to-br from-light-blue-400/40 to-light-blue-500/40 p-3 md:p-4 rounded-2xl border border-light-blue-300/20 group-hover:from-light-blue-400/60 group-hover:to-light-blue-500/60 group-hover:scale-110 transition-all duration-300 shadow-lg">
                    <Globe className="h-6 w-6 md:h-7 md:w-7 text-white" />
                  </div>
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 md:mb-2 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg">
                  KSA
                </div>
                <div className="text-[10px] sm:text-xs md:text-sm text-white/95 font-semibold leading-tight">
                  {t("fullCoverage")}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Controls */}
        <button
          onClick={() =>
            setCurrentSlide(
              (prev) => (prev - 1 + slides.length) % slides.length
            )
          }
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm p-2 md:p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg z-20">
          <ChevronLeft className="h-4 w-4 md:h-6 md:w-6 text-white" />
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm p-2 md:p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg z-20">
          <ChevronRight className="h-4 w-4 md:h-6 md:w-6 text-white" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-3 rounded-full transition-all duration-300 hover:bg-white/80 ${
                index === currentSlide ? "bg-white w-8" : "bg-white/50 w-3"
              }`}
            />
          ))}
        </div>
      </section>

      {/* About Company Section */}
      <section
        id="about"
        className="py-12 md:py-20 lg:py-28 bg-gradient-to-br from-navy-100/60 via-navy-50/40 to-white dark:from-navy-900/40 dark:via-light-blue-900/20 dark:to-navy-900/40 relative overflow-hidden">
        {/* Logo Background */}
        <div
          className="absolute inset-0 opacity-10 dark:opacity-15 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(/assets/LogoT.png)",
            backgroundSize: "contain",
            backgroundPosition: "center",
          }}
        />

        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/8 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/8 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/4 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          {/* Main Title and Description */}
          <div className="text-center mb-8 md:mb-12 lg:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 text-foreground">
              {t("aboutCompany")}
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-primary font-semibold mb-4 md:mb-6 max-w-3xl mx-auto px-4">
              {t("aboutCompanySubtitle")}
            </p>
            <p className="text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto px-4">
              {t("aboutCompanyDesc")}
            </p>
          </div>

          {/* Vision and Mission Boxes */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
            {/* Vision Box */}
            <div className="relative bg-gradient-to-br from-light-blue-500/70 via-light-blue-600/70 to-light-blue-700/70 dark:from-light-blue-600/70 dark:via-light-blue-700/70 dark:to-light-blue-800/70 backdrop-blur-sm p-6 md:p-8 lg:p-10 rounded-2xl md:rounded-3xl border-2 border-white/30 dark:border-light-blue-400/30 shadow-2xl hover:border-white/50 dark:hover:border-light-blue-400/50 hover:scale-[1.02] transition-all duration-300 group overflow-hidden">
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/15 dark:bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-white/25 dark:bg-white/15 backdrop-blur-sm p-4 rounded-2xl border border-white/40 dark:border-white/30 group-hover:bg-white/35 dark:group-hover:bg-white/25 group-hover:scale-110 transition-all duration-300 shadow-lg">
                    <Target className="h-10 w-10 text-navy-800 dark:text-navy-900" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">
                    {t("ourVision")}
                  </h3>
                </div>
                <p className="text-white/95 leading-relaxed text-lg md:text-xl">
                  {t("ourVisionDesc")}
                </p>
              </div>
            </div>

            {/* Mission Box */}
            <div className="relative bg-gradient-to-br from-navy-700/70 via-navy-800/70 to-navy-900/70 dark:from-navy-800/70 dark:via-navy-900/70 dark:to-navy-900/70 backdrop-blur-sm p-6 md:p-8 lg:p-10 rounded-2xl md:rounded-3xl border-2 border-light-blue-400/30 dark:border-light-blue-500/30 shadow-2xl hover:border-light-blue-400/50 dark:hover:border-light-blue-500/50 hover:scale-[1.02] transition-all duration-300 group overflow-hidden">
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-light-blue-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-0 left-0 w-32 h-32 bg-light-blue-400/10 dark:bg-light-blue-500/10 rounded-full blur-2xl -translate-y-1/2 -translate-x-1/2" />
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-light-blue-400/20 dark:bg-light-blue-500/20 backdrop-blur-sm p-4 rounded-2xl border border-light-blue-300/30 dark:border-light-blue-600/30 group-hover:bg-light-blue-400/30 dark:group-hover:bg-light-blue-500/30 group-hover:scale-110 transition-all duration-300 shadow-lg">
                    <Heart className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">
                    {t("ourMission")}
                  </h3>
                </div>
                <p className="text-white/95 leading-relaxed text-lg md:text-xl">
                  {t("ourMissionDesc")}
                </p>
              </div>
            </div>
          </div>

          {/* Strategic Objectives Box */}
          <div className="relative bg-gradient-to-br from-white/80 via-navy-50/80 to-light-blue-50/80 dark:from-navy-900/70 dark:via-navy-800/70 dark:to-navy-900/70 backdrop-blur-sm p-6 md:p-8 lg:p-10 xl:p-12 rounded-2xl md:rounded-3xl border-2 border-navy-200/50 dark:border-light-blue-500/30 shadow-2xl overflow-hidden">
            {/* Decorative Pattern */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-light-blue-200/30 dark:bg-light-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-navy-200/30 dark:bg-navy-700/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-light-blue-100/40 dark:bg-light-blue-500/5 rounded-full blur-3xl" />

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-10">
                <div className="bg-gradient-to-br from-navy-700/40 to-navy-800/40 dark:from-light-blue-500/40 dark:to-light-blue-600/40 p-5 rounded-2xl shadow-lg border border-navy-300/30 dark:border-light-blue-600/20">
                  <Shield className="h-10 w-10 text-white dark:text-white" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-navy-800 dark:text-white drop-shadow-lg">
                  {t("ourStrategicObjectives")}
                </h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {values.map((value, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 bg-navy-50/60 dark:bg-white/3 backdrop-blur-sm p-6 rounded-2xl border border-navy-200/50 dark:border-white/10 hover:bg-navy-100/70 dark:hover:bg-white/8 hover:border-navy-400/60 dark:hover:border-light-blue-500/40 transition-all duration-300 group hover:scale-[1.02]">
                    <div className="bg-gradient-to-br from-navy-600/30 to-navy-700/30 dark:from-light-blue-500/30 dark:to-light-blue-600/30 p-3 rounded-xl border border-navy-400/30 dark:border-light-blue-600/20 group-hover:from-navy-600/50 group-hover:to-navy-700/50 dark:group-hover:from-light-blue-500/50 dark:group-hover:to-light-blue-600/50 group-hover:scale-110 transition-all duration-300 shadow-md">
                      <value.icon className="h-6 w-6 text-white flex-shrink-0" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-navy-800 dark:text-white font-bold text-lg mb-3">
                        {value.title}
                      </h4>
                      <p className="text-navy-700 dark:text-white/80 text-base leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Board of Directors Section */}
          <div className="mt-12 md:mt-16">
            <div className="text-center mb-8 md:mb-12">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-foreground">
                {t("boardOfDirectors")}
              </h3>
            </div>
            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              {/* Chairman */}
              <div className="relative bg-gradient-to-br from-amber-500/80 via-amber-600/80 to-amber-700/80 dark:from-amber-600/70 dark:via-amber-700/70 dark:to-amber-800/70 backdrop-blur-sm p-6 md:p-8 rounded-2xl md:rounded-3xl border-2 border-amber-400/30 dark:border-amber-500/30 shadow-2xl hover:border-amber-400/50 dark:hover:border-amber-500/50 hover:scale-[1.02] transition-all duration-300 group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 dark:bg-white/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                <div className="relative z-10 text-center">
                  <div className="flex justify-center mb-6">
                    <div className="bg-white/25 dark:bg-white/15 backdrop-blur-sm p-5 rounded-2xl border border-white/40 dark:border-white/30 group-hover:bg-white/35 dark:group-hover:bg-white/25 group-hover:scale-110 transition-all duration-300 shadow-lg">
                      <Crown className="h-10 w-10 text-white" />
                    </div>
                  </div>
                  <h4 className="text-xl md:text-2xl font-bold text-white mb-3 drop-shadow-lg">
                    {t("chairman")}
                  </h4>
                  <div className="h-px w-16 bg-white/50 mx-auto mb-4"></div>
                  <p className="text-white/95 text-lg md:text-xl font-semibold">
                    {t("chairmanName")}
                  </p>
                </div>
              </div>

              {/* Vice Chairman */}
              <div className="relative bg-gradient-to-br from-light-blue-500/80 via-light-blue-600/80 to-light-blue-700/80 dark:from-light-blue-600/70 dark:via-light-blue-700/70 dark:to-light-blue-800/70 backdrop-blur-sm p-6 md:p-8 rounded-2xl md:rounded-3xl border-2 border-light-blue-400/30 dark:border-light-blue-500/30 shadow-2xl hover:border-light-blue-400/50 dark:hover:border-light-blue-500/50 hover:scale-[1.02] transition-all duration-300 group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 dark:bg-white/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                <div className="relative z-10 text-center">
                  <div className="flex justify-center mb-6">
                    <div className="bg-white/25 dark:bg-white/15 backdrop-blur-sm p-5 rounded-2xl border border-white/40 dark:border-white/30 group-hover:bg-white/35 dark:group-hover:bg-white/25 group-hover:scale-110 transition-all duration-300 shadow-lg">
                      <Briefcase className="h-10 w-10 text-white" />
                    </div>
                  </div>
                  <h4 className="text-xl md:text-2xl font-bold text-white mb-3 drop-shadow-lg">
                    {t("viceChairman")}
                  </h4>
                  <div className="h-px w-16 bg-white/50 mx-auto mb-4"></div>
                  <p className="text-white/95 text-lg md:text-xl font-semibold">
                    {t("viceChairmanName")}
                  </p>
                </div>
              </div>

              {/* HR Manager */}
              <div className="relative bg-gradient-to-br from-navy-600/80 via-navy-700/80 to-navy-800/80 dark:from-navy-700/70 dark:via-navy-800/70 dark:to-navy-900/70 backdrop-blur-sm p-6 md:p-8 rounded-2xl md:rounded-3xl border-2 border-navy-400/30 dark:border-navy-500/30 shadow-2xl hover:border-navy-400/50 dark:hover:border-navy-500/50 hover:scale-[1.02] transition-all duration-300 group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 dark:bg-white/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                <div className="relative z-10 text-center">
                  <div className="flex justify-center mb-6">
                    <div className="bg-white/25 dark:bg-white/15 backdrop-blur-sm p-5 rounded-2xl border border-white/40 dark:border-white/30 group-hover:bg-white/35 dark:group-hover:bg-white/25 group-hover:scale-110 transition-all duration-300 shadow-lg">
                      <UserCircle className="h-10 w-10 text-white" />
                    </div>
                  </div>
                  <h4 className="text-xl md:text-2xl font-bold text-white mb-3 drop-shadow-lg">
                    {t("hrManager")}
                  </h4>
                  <div className="h-px w-16 bg-white/50 mx-auto mb-4"></div>
                  <p className="text-white/95 text-lg md:text-xl font-semibold">
                    {t("hrManagerName")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section - Enhanced Masonry Style */}
      <section
        id="services"
        className="py-12 md:py-20 lg:py-28 bg-gradient-to-br from-light-blue-100/50 via-white to-light-blue-50/40 dark:via-navy-900/15 dark:to-light-blue-900/10 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-48 h-48 bg-navy-200/15 dark:bg-navy-700/15 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-56 h-56 bg-light-blue-200/15 dark:bg-light-blue-700/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-navy-200/10 dark:bg-navy-700/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-8 md:mb-12 lg:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6">
              {t("ourServices")}
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
              {t("ourServicesDesc")}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 max-w-7xl mx-auto">
            <Link to="/water" className="group">
              <div className="relative h-64 sm:h-72 md:h-96 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-light-blue-400/60 dark:hover:border-light-blue-500/60 hover:shadow-2xl hover:scale-[1.02]">
                <img
                  src={waterLink}
                  alt="Water Production"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/20" />
                <div className="absolute inset-0 bg-gradient-to-r from-navy-800/20 via-transparent to-transparent" />
                {/* Badge */}
                <div className="absolute top-6 right-6 bg-white/25 dark:bg-navy-800/25 backdrop-blur-lg px-5 py-2.5 rounded-full border border-white/40 dark:border-light-blue-500/40 shadow-lg hover:bg-white/35 dark:hover:bg-navy-800/35 transition-all duration-300">
                  <span className="text-sm font-bold text-white drop-shadow-md">
                    {t("premiumService")}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:translate-x-2 transition-transform drop-shadow-lg">
                    {t("water")}
                  </h3>
                  <p className="text-white/95 text-sm mb-4 leading-relaxed">
                    {t("waterProductionDescShort")}
                  </p>
                  <div className="flex items-center gap-2 text-white/90 group-hover:text-white transition-colors font-semibold">
                    <span className="text-xs">{t("discoverMore")}</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>

            <Link to="/transport" className="group">
              <div className="relative h-64 sm:h-72 md:h-96 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-light-blue-400/60 dark:hover:border-light-blue-500/60 hover:shadow-2xl hover:scale-[1.02]">
                <img
                  src={logisticsLink}
                  alt="Transport & Logistics"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/20" />
                <div className="absolute inset-0 bg-gradient-to-r from-navy-800/20 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:translate-x-2 transition-transform drop-shadow-lg">
                    {t("transport")}
                  </h3>
                  <p className="text-white/95 text-sm mb-4 leading-relaxed">
                    {t("transportServicesDescShort")}
                  </p>
                  <div className="flex items-center gap-2 text-white/90 group-hover:text-white transition-colors font-semibold">
                    <span className="text-xs">{t("discoverMore")}</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>

            <Link to="/buses" className="group">
              <div className="relative h-64 sm:h-72 md:h-96 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-light-blue-400/60 dark:hover:border-light-blue-500/60 hover:shadow-2xl hover:scale-[1.02]">
                <img
                  src={busesLink}
                  alt="Buses"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/20" />
                <div className="absolute inset-0 bg-gradient-to-r from-navy-800/20 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:translate-x-2 transition-transform drop-shadow-lg">
                    {t("buses")}
                  </h3>
                  <p className="text-white/95 text-sm mb-4 leading-relaxed">
                    {t("busesTrailersDescShort")}
                  </p>
                  <div className="flex items-center gap-2 text-white/90 group-hover:text-white transition-colors font-semibold">
                    <span className="text-xs">{t("discoverMore")}</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>

            <Link to="/trailers" className="group">
              <div className="relative h-64 sm:h-72 md:h-96 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-light-blue-400/60 dark:hover:border-light-blue-500/60 hover:shadow-2xl hover:scale-[1.02]">
                <img
                  src={truckLink}
                  alt="Heavy Transport"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/20" />
                <div className="absolute inset-0 bg-gradient-to-r from-navy-800/20 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:translate-x-2 transition-transform drop-shadow-lg">
                    {t("trailers")}
                  </h3>
                  <p className="text-white/95 text-sm mb-4 leading-relaxed">
                    {t("trailersDescShort")}
                  </p>
                  <div className="flex items-center gap-2 text-white/90 group-hover:text-white transition-colors font-semibold">
                    <span className="text-xs">{t("discoverMore")}</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>

            <Link to="/car-rental" className="group">
              <div className="relative h-72 md:h-96 rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-primary/40 hover:shadow-2xl hover:scale-[1.02]">
                <img
                  src={carLink}
                  alt="Car Rental"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/20" />
                <div className="absolute inset-0 bg-gradient-to-r from-light-blue-500/20 via-transparent to-transparent" />
                {/* Badge */}
                <div className="absolute top-6 right-6 bg-white/25 dark:bg-light-blue-600/25 backdrop-blur-lg px-5 py-2.5 rounded-full border border-white/40 dark:border-light-blue-400/40 shadow-lg hover:bg-white/35 dark:hover:bg-light-blue-600/35 transition-all duration-300">
                  <span className="text-sm font-bold text-white drop-shadow-md">
                    {t("popularService")}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:translate-x-2 transition-transform drop-shadow-lg">
                    {t("carRental")}
                  </h3>
                  <p className="text-white/95 text-sm mb-4 leading-relaxed">
                    {t("carRentalDescShort")}
                  </p>
                  <div className="flex items-center gap-2 text-white/90 group-hover:text-white transition-colors font-semibold">
                    <span className="text-xs">{t("discoverMore")}</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>

            <Link to="/logistics-management" className="group">
              <div className="relative h-64 sm:h-72 md:h-96 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-purple-400/60 dark:hover:border-purple-500/60 hover:shadow-2xl hover:scale-[1.02]">
                <img
                  src={companyLink}
                  alt="Logistics Management"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/20" />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-800/20 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:translate-x-2 transition-transform drop-shadow-lg">
                    {t("logisticsManagement")}
                  </h3>
                  <p className="text-white/95 text-sm mb-4 leading-relaxed">
                    {t("logisticsManagementDescShort")}
                  </p>
                  <div className="flex items-center gap-2 text-white/90 group-hover:text-white transition-colors font-semibold">
                    <span className="text-xs">{t("discoverMore")}</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>

            <Link to="/digital-marketing" className="group">
              <div className="relative h-64 sm:h-72 md:h-96 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-purple-400/60 dark:hover:border-purple-500/60 hover:shadow-2xl hover:scale-[1.02]">
                <img
                  src={digitalLink}
                  alt="Digital Marketing"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/20" />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-800/20 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:translate-x-2 transition-transform drop-shadow-lg">
                    {t("digitalMarketing")}
                  </h3>
                  <p className="text-white/95 text-sm mb-4 leading-relaxed">
                    {t("digitalMarketingDescShort")}
                  </p>
                  <div className="flex items-center gap-2 text-white/90 group-hover:text-white transition-colors font-semibold">
                    <span className="text-xs">{t("discoverMore")}</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <div id="contact">
        <ContactForm />
      </div>
    </div>
  );
};

export default Home;
