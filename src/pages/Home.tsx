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
} from "lucide-react";
// Images are in public/assets/ folder
const heroImage = "/assets/hero-logistics.jpg";
const waterImage = "/assets/water-production.jpg";
const busesImage = "/assets/buses.jpg";
const rentalImage = "/assets/car-rental.jpg";

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
      <section className="relative min-h-[700px] md:min-h-[800px] overflow-hidden">
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
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-accent/20" />
          </div>
        ))}

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="container mx-auto px-4 text-center text-white mb-12">
            {/* Badge */}
            <div className="mb-8 inline-block animate-fade-in">
              <div className="bg-white/15 backdrop-blur-lg px-6 py-3 rounded-full border border-white/30 shadow-lg inline-flex items-center gap-2 hover:bg-white/20 transition-all duration-300">
                <Sparkles className="h-4 w-4 text-white" />
                <span className="text-sm font-semibold text-white">
                  {t("heroBadge")}
                </span>
                <TrendingUp className="h-4 w-4 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in leading-tight text-white drop-shadow-2xl">
              {t("heroTitle")}
            </h1>
            <p className="text-2xl md:text-3xl lg:text-4xl mb-6 animate-fade-in font-semibold text-white drop-shadow-lg">
              {t("heroSubtitle")}
            </p>
            <p className="text-lg md:text-xl lg:text-2xl mb-12 max-w-3xl mx-auto animate-fade-in text-white/95 leading-relaxed drop-shadow-md">
              {t("heroDescription")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
              <Button
                size="lg"
                onClick={() => {
                  const contactSection = document.getElementById("contact");
                  contactSection?.scrollIntoView({ behavior: "smooth" });
                }}
                className="rounded-full px-8 py-6 text-lg transition-all duration-300 hover:scale-105 hover:bg-primary/90 group">
                {t("contact")}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => {
                  const servicesSection = document.getElementById("services");
                  servicesSection?.scrollIntoView({ behavior: "smooth" });
                }}
                className="rounded-full px-8 py-6 text-lg border-2 border-white/30 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white transition-all duration-300 hover:scale-105 hover:border-white/50">
                {t("ourServices")}
              </Button>
            </div>
          </div>

          {/* Stats Cards Overlay */}
          <div className="container mx-auto px-4 mt-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
              <div className="text-center p-5 md:p-7 bg-white/15 backdrop-blur-lg rounded-3xl border border-white/30 shadow-xl hover:bg-white/25 transition-all duration-300 group hover:scale-105 hover:border-white/50">
                <div className="flex justify-center mb-4">
                  <div className="bg-gradient-to-br from-primary/40 to-accent/40 p-3 md:p-4 rounded-2xl group-hover:from-primary/60 group-hover:to-accent/60 group-hover:scale-110 transition-all duration-300 shadow-lg">
                    <Briefcase className="h-6 w-6 md:h-7 md:w-7 text-white" />
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg">
                  4+
                </div>
                <div className="text-xs md:text-sm text-white/95 font-semibold">
                  {t("mainServices")}
                </div>
              </div>
              <div className="text-center p-5 md:p-7 bg-white/15 backdrop-blur-lg rounded-3xl border border-white/30 shadow-xl hover:bg-white/25 transition-all duration-300 group hover:scale-105 hover:border-white/50">
                <div className="flex justify-center mb-4">
                  <div className="bg-gradient-to-br from-primary/40 to-accent/40 p-3 md:p-4 rounded-2xl group-hover:from-primary/60 group-hover:to-accent/60 group-hover:scale-110 transition-all duration-300 shadow-lg">
                    <Users className="h-6 w-6 md:h-7 md:w-7 text-white" />
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg">
                  100+
                </div>
                <div className="text-xs md:text-sm text-white/95 font-semibold">
                  {t("strategicPartner")}
                </div>
              </div>
              <div className="text-center p-5 md:p-7 bg-white/15 backdrop-blur-lg rounded-3xl border border-white/30 shadow-xl hover:bg-white/25 transition-all duration-300 group hover:scale-105 hover:border-white/50">
                <div className="flex justify-center mb-4">
                  <div className="bg-gradient-to-br from-primary/40 to-accent/40 p-3 md:p-4 rounded-2xl group-hover:from-primary/60 group-hover:to-accent/60 group-hover:scale-110 transition-all duration-300 shadow-lg">
                    <Zap className="h-6 w-6 md:h-7 md:w-7 text-white" />
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg">
                  24/7
                </div>
                <div className="text-xs md:text-sm text-white/95 font-semibold">
                  {t("availableService")}
                </div>
              </div>
              <div className="text-center p-5 md:p-7 bg-white/15 backdrop-blur-lg rounded-3xl border border-white/30 shadow-xl hover:bg-white/25 transition-all duration-300 group hover:scale-105 hover:border-white/50">
                <div className="flex justify-center mb-4">
                  <div className="bg-gradient-to-br from-primary/40 to-accent/40 p-3 md:p-4 rounded-2xl group-hover:from-primary/60 group-hover:to-accent/60 group-hover:scale-110 transition-all duration-300 shadow-lg">
                    <Globe className="h-6 w-6 md:h-7 md:w-7 text-white" />
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg">
                  KSA
                </div>
                <div className="text-xs md:text-sm text-white/95 font-semibold">
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
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg">
          <ChevronLeft className="h-6 w-6 text-white" />
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg">
          <ChevronRight className="h-6 w-6 text-white" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
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
      <section className="py-28 bg-gradient-to-br from-background via-primary/5 to-accent/5 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/8 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/8 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/4 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          {/* Main Title and Description */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              {t("aboutCompany")}
            </h2>
            <p className="text-lg md:text-xl text-primary font-semibold mb-6 max-w-3xl mx-auto">
              {t("aboutCompanySubtitle")}
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              {t("aboutCompanyDesc")}
            </p>
          </div>

          {/* Vision and Mission Boxes */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Vision Box */}
            <div className="relative bg-gradient-to-br from-emerald-500/90 via-emerald-600/90 to-teal-600/90 p-10 rounded-3xl border-2 border-emerald-300/30 shadow-2xl hover:border-emerald-300/50 hover:scale-[1.02] transition-all duration-300 group overflow-hidden">
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300 shadow-lg">
                    <Target className="h-10 w-10 text-white" />
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
            <div className="relative bg-gradient-to-br from-blue-500/90 via-blue-600/90 to-cyan-600/90 p-10 rounded-3xl border-2 border-blue-300/30 shadow-2xl hover:border-blue-300/50 hover:scale-[1.02] transition-all duration-300 group overflow-hidden">
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-0 left-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -translate-y-1/2 -translate-x-1/2" />
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300 shadow-lg">
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
          <div className="relative bg-gradient-to-br from-slate-700/95 via-slate-800/95 to-slate-900/95 dark:from-slate-800/95 dark:via-slate-900/95 dark:to-slate-950/95 p-10 md:p-12 rounded-3xl border-2 border-primary/30 shadow-2xl overflow-hidden">
            {/* Decorative Pattern */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-primary/5 rounded-full blur-3xl" />

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-10">
                <div className="bg-gradient-to-br from-primary/40 to-accent/40 p-5 rounded-2xl shadow-lg">
                  <Shield className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">
                  {t("ourStrategicObjectives")}
                </h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {values.map((value, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 bg-white/10 backdrop-blur-sm dark:bg-white/5 p-6 rounded-2xl border border-white/20 dark:border-white/10 hover:bg-white/15 dark:hover:bg-white/10 hover:border-primary/30 transition-all duration-300 group hover:scale-[1.02]">
                    <div className="bg-gradient-to-br from-primary/30 to-accent/30 p-3 rounded-xl group-hover:from-primary/50 group-hover:to-accent/50 group-hover:scale-110 transition-all duration-300 shadow-md">
                      <value.icon className="h-6 w-6 text-white flex-shrink-0" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white dark:text-white font-bold text-lg mb-3">
                        {value.title}
                      </h4>
                      <p className="text-white/90 dark:text-white/80 text-base leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section - Enhanced Masonry Style */}
      <section
        id="services"
        className="py-28 bg-gradient-to-br from-background via-primary/8 to-accent/8 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-48 h-48 bg-primary/12 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-56 h-56 bg-accent/12 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/6 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {t("ourServices")}
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t("ourServicesDesc")}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            <Link to="/water" className="group">
              <div className="relative h-72 md:h-96 rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-primary/40 hover:shadow-2xl hover:scale-[1.02]">
                <img
                  src={waterImage}
                  alt="Water Production"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/20" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-transparent" />
                {/* Badge */}
                <div className="absolute top-6 right-6 bg-white/25 backdrop-blur-lg px-5 py-2.5 rounded-full border border-white/40 shadow-lg hover:bg-white/35 transition-all duration-300">
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
              <div className="relative h-72 md:h-96 rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-primary/40 hover:shadow-2xl hover:scale-[1.02]">
                <img
                  src={heroImage}
                  alt="Transport & Logistics"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/20" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-transparent" />
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
              <div className="relative h-72 md:h-96 rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-primary/40 hover:shadow-2xl hover:scale-[1.02]">
                <img
                  src={busesImage}
                  alt="Buses"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/20" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-transparent" />
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

            <Link to="/car-rental" className="group">
              <div className="relative h-72 md:h-96 rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-primary/40 hover:shadow-2xl hover:scale-[1.02]">
                <img
                  src={rentalImage}
                  alt="Car Rental"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/20" />
                <div className="absolute inset-0 bg-gradient-to-r from-accent/20 via-transparent to-transparent" />
                {/* Badge */}
                <div className="absolute top-6 right-6 bg-white/25 backdrop-blur-lg px-5 py-2.5 rounded-full border border-white/40 shadow-lg hover:bg-white/35 transition-all duration-300">
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
