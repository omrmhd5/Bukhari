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
import heroImage from "@/assets/hero-logistics.jpg";
import waterImage from "@/assets/water-production.jpg";
import busesImage from "@/assets/buses.jpg";
import rentalImage from "@/assets/car-rental.jpg";

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
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 gradient-overlay" />
          </div>
        ))}

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="container mx-auto px-4 text-center text-white mb-12">
            {/* Badge */}
            <div className="mb-6 inline-block animate-fade-in">
              <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 inline-flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-white" />
                <span className="text-sm font-medium">{t("heroBadge")}</span>
                <TrendingUp className="h-4 w-4 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in leading-tight">
              {t("heroTitle")}
            </h1>
            <p className="text-2xl md:text-3xl lg:text-4xl mb-6 animate-fade-in font-semibold text-white/95">
              {t("heroSubtitle")}
            </p>
            <p className="text-lg md:text-xl lg:text-2xl mb-10 max-w-3xl mx-auto animate-fade-in text-white/90 leading-relaxed">
              {t("heroDescription")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
              <Link to="/transport">
                <Button
                  size="lg"
                  className="rounded-full px-8 py-6 text-lg shadow-glow hover:shadow-glow-lg transition-all group">
                  {t("contact")}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/water">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8 py-6 text-lg border-2 border-white/30 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white">
                  {t("ourServices")}
                </Button>
              </Link>
            </div>
          </div>

          {/* Stats Cards Overlay */}
          <div className="container mx-auto px-4 mt-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
              <div className="text-center p-4 md:p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-luxury hover:bg-white/15 transition-all group">
                <div className="flex justify-center mb-3">
                  <div className="bg-white/20 p-2 md:p-3 rounded-xl group-hover:bg-white/30 transition-colors">
                    <Briefcase className="h-6 w-6 md:h-7 md:w-7 text-white" />
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  4+
                </div>
                <div className="text-xs md:text-sm text-white/90 font-medium">
                  {t("mainServices")}
                </div>
              </div>
              <div className="text-center p-4 md:p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-luxury hover:bg-white/15 transition-all group">
                <div className="flex justify-center mb-3">
                  <div className="bg-white/20 p-2 md:p-3 rounded-xl group-hover:bg-white/30 transition-colors">
                    <Users className="h-6 w-6 md:h-7 md:w-7 text-white" />
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  100+
                </div>
                <div className="text-xs md:text-sm text-white/90 font-medium">
                  {t("strategicPartner")}
                </div>
              </div>
              <div className="text-center p-4 md:p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-luxury hover:bg-white/15 transition-all group">
                <div className="flex justify-center mb-3">
                  <div className="bg-white/20 p-2 md:p-3 rounded-xl group-hover:bg-white/30 transition-colors">
                    <Zap className="h-6 w-6 md:h-7 md:w-7 text-white" />
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  24/7
                </div>
                <div className="text-xs md:text-sm text-white/90 font-medium">
                  {t("availableService")}
                </div>
              </div>
              <div className="text-center p-4 md:p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-luxury hover:bg-white/15 transition-all group">
                <div className="flex justify-center mb-3">
                  <div className="bg-white/20 p-2 md:p-3 rounded-xl group-hover:bg-white/30 transition-colors">
                    <Globe className="h-6 w-6 md:h-7 md:w-7 text-white" />
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  KSA
                </div>
                <div className="text-xs md:text-sm text-white/90 font-medium">
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
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm p-3 rounded-full transition-smooth">
          <ChevronLeft className="h-6 w-6 text-white" />
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm p-3 rounded-full transition-smooth">
          <ChevronRight className="h-6 w-6 text-white" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-smooth ${
                index === currentSlide ? "bg-white w-8" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </section>

      {/* About Company Section */}
      <section className="py-24 bg-gradient-to-br from-background via-primary/3 to-background relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          {/* Main Title and Description */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-primary mb-4">
              <Star className="h-5 w-5" />
              <span className="font-semibold text-sm uppercase tracking-wide">
                من نحن
              </span>
            </div>
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
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            {/* Vision Box */}
            <div className="relative bg-gradient-to-br from-green-600/95 to-green-700/95 p-10 rounded-3xl border-2 border-green-400/40 shadow-2xl hover:shadow-green-500/20 hover:scale-[1.02] transition-all group overflow-hidden">
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-green-400/30 p-4 rounded-2xl group-hover:scale-110 transition-transform">
                    <Target className="h-10 w-10 text-green-100" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white">
                    {t("ourVision")}
                  </h3>
                </div>
                <p className="text-white/95 leading-relaxed text-lg md:text-xl">
                  {t("ourVisionDesc")}
                </p>
              </div>
            </div>

            {/* Mission Box */}
            <div className="relative bg-gradient-to-br from-blue-600/95 to-blue-700/95 p-10 rounded-3xl border-2 border-blue-400/40 shadow-2xl hover:shadow-blue-500/20 hover:scale-[1.02] transition-all group overflow-hidden">
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-blue-400/30 p-4 rounded-2xl group-hover:scale-110 transition-transform">
                    <Heart className="h-10 w-10 text-blue-100" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white">
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
          <div className="relative bg-gradient-to-br from-emerald-700/95 to-emerald-800/95 p-10 md:p-12 rounded-3xl border-2 border-emerald-400/40 shadow-2xl overflow-hidden">
            {/* Decorative Pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-400/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-yellow-400/30 p-4 rounded-2xl">
                  <Shield className="h-10 w-10 text-yellow-200" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white">
                  {t("ourStrategicObjectives")}
                </h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {values.map((value, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 bg-white/5 backdrop-blur-sm p-5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all group">
                    <div className="bg-yellow-400/20 p-2 rounded-lg group-hover:scale-110 transition-transform">
                      <CheckCircle2 className="h-6 w-6 text-yellow-300 flex-shrink-0" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <value.icon className="h-5 w-5 text-white/60" />
                        <h4 className="text-white font-bold text-lg">
                          {value.title}
                        </h4>
                      </div>
                      <p className="text-white/85 text-base leading-relaxed">
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
      <section className="py-24 bg-gradient-to-br from-primary/15 via-primary/8 to-accent/15 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/10 rounded-full blur-2xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-primary mb-4">
              <Sparkles className="h-5 w-5" />
              <span className="font-semibold text-sm uppercase tracking-wide">
                {t("ourServices")}
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {t("ourServices")}
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t("ourServicesDesc")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            <Link to="/water" className="group md:col-span-2">
              <div className="relative h-72 md:h-96 rounded-3xl overflow-hidden shadow-2xl hover:shadow-primary/20 transition-all duration-500 border-2 border-transparent hover:border-primary/30">
                <img
                  src={waterImage}
                  alt="Water Production"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                {/* Badge */}
                <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/30">
                  <span className="text-sm font-semibold text-white">
                    {t("premiumService")}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-3 group-hover:translate-x-2 transition-transform">
                    {t("water")}
                  </h3>
                  <p className="text-white/90 text-base mb-4">
                    {t("waterProductionDescShort")}
                  </p>
                  <div className="flex items-center gap-2 text-white/80 group-hover:text-white transition-colors">
                    <span className="text-sm font-medium">
                      {t("discoverMore")}
                    </span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>

            <Link to="/transport" className="group">
              <div className="relative h-72 md:h-96 rounded-3xl overflow-hidden shadow-2xl hover:shadow-primary/20 transition-all duration-500 border-2 border-transparent hover:border-primary/30">
                <img
                  src={heroImage}
                  alt="Transport & Logistics"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:translate-x-2 transition-transform">
                    {t("transport")}
                  </h3>
                  <p className="text-white/90 text-sm mb-4">
                    {t("transportServicesDescShort")}
                  </p>
                  <div className="flex items-center gap-2 text-white/80 group-hover:text-white transition-colors">
                    <span className="text-xs font-medium">
                      {t("discoverMore")}
                    </span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>

            <Link to="/buses" className="group">
              <div className="relative h-72 md:h-96 rounded-3xl overflow-hidden shadow-2xl hover:shadow-primary/20 transition-all duration-500 border-2 border-transparent hover:border-primary/30">
                <img
                  src={busesImage}
                  alt="Buses"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:translate-x-2 transition-transform">
                    {t("buses")}
                  </h3>
                  <p className="text-white/90 text-sm mb-4">
                    {t("busesTrailersDescShort")}
                  </p>
                  <div className="flex items-center gap-2 text-white/80 group-hover:text-white transition-colors">
                    <span className="text-xs font-medium">
                      {t("discoverMore")}
                    </span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>

            <Link to="/car-rental" className="group md:col-span-2">
              <div className="relative h-72 md:h-96 rounded-3xl overflow-hidden shadow-2xl hover:shadow-primary/20 transition-all duration-500 border-2 border-transparent hover:border-primary/30">
                <img
                  src={rentalImage}
                  alt="Car Rental"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                {/* Badge */}
                <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/30">
                  <span className="text-sm font-semibold text-white">
                    {t("popularService")}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-3 group-hover:translate-x-2 transition-transform">
                    {t("carRental")}
                  </h3>
                  <p className="text-white/90 text-base mb-4">
                    {t("carRentalDescShort")}
                  </p>
                  <div className="flex items-center gap-2 text-white/80 group-hover:text-white transition-colors">
                    <span className="text-sm font-medium">
                      {t("discoverMore")}
                    </span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactForm />
    </div>
  );
};

export default Home;
