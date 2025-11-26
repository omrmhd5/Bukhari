import { useLanguage } from "@/contexts/LanguageContext";
import ContactForm from "@/components/ContactForm";
import {
  Bus,
  Shield,
  Heart,
  Star,
  Sparkles,
  TrendingUp,
  CheckCircle2,
  MapPin,
  Clock,
  Users,
  Award,
  Wifi,
  AirVent,
  Luggage,
} from "lucide-react";
// Image is in public/assets/ folder
const busesHero = "/assets/buses/buses-hero.jpg";
const busesImage = "/assets/buses/buses-image.jpg";
const umrah = "/assets/buses/umrah.jpg";
const tourism = "/assets/buses/tourism.jpg";

const Buses = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Star,
      title: t("hajjUmrahServices"),
      description: t("hajjUmrahServicesDesc"),
    },
    {
      icon: Bus,
      title: t("tourism"),
      description: t("tourismDescShort"),
    },
  ];

  const features = [
    {
      icon: Shield,
      title: t("safety"),
      description: t("safetyDesc"),
      details: [
        t("busesSafetyDetail1"),
        t("busesSafetyDetail2"),
        t("busesSafetyDetail3"),
      ],
    },
    {
      icon: Heart,
      title: t("comfort"),
      description: t("comfortDesc"),
      details: [
        t("busesComfortDetail1"),
        t("busesComfortDetail2"),
        t("busesComfortDetail3"),
      ],
    },
    {
      icon: Clock,
      title: t("speed"),
      description: t("speedDesc"),
      details: [
        t("busesSpeedDetail1"),
        t("busesSpeedDetail2"),
        t("busesSpeedDetail3"),
      ],
    },
    {
      icon: MapPin,
      title: t("coverage"),
      description: t("coverageDesc"),
      details: [
        t("busesCoverageDetail1"),
        t("busesCoverageDetail2"),
        t("busesCoverageDetail3"),
      ],
    },
  ];

  const additionalFeatures = [
    {
      icon: Users,
      title: t("busesCapacity"),
      description: t("busesCapacityDesc"),
    },
    {
      icon: Wifi,
      title: t("busesWifi"),
      description: t("busesWifiDesc"),
    },
    {
      icon: AirVent,
      title: t("busesAC"),
      description: t("busesACDesc"),
    },
    {
      icon: Luggage,
      title: t("busesLuggage"),
      description: t("busesLuggageDesc"),
    },
    {
      icon: Award,
      title: t("busesQuality"),
      description: t("busesQualityDesc"),
    },
    {
      icon: Star,
      title: t("busesLuxury"),
      description: t("busesLuxuryDesc"),
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section - Full Width with Side Cards */}
      <section className="relative min-h-[600px] md:min-h-[700px] overflow-hidden bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900">
        <div className="absolute inset-0">
          <img
            src={busesHero}
            alt="Buses"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        {/* Decorative Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:3rem_3rem]" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-12 gap-8 items-center min-h-[600px] md:min-h-[700px] py-16">
            {/* Left Side Card */}
            <div className="lg:col-span-3 space-y-4">
              <div className="bg-white/10 dark:bg-navy-800/50 backdrop-blur-lg p-6 rounded-2xl border border-white/20 dark:border-navy-600/30 hover:bg-white/15 dark:hover:bg-navy-800/70 transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-light-blue-400/20 dark:bg-light-blue-500/20 p-2 rounded-lg">
                    <Shield className="h-5 w-5 text-light-blue-400" />
                  </div>
                  <span className="text-sm font-semibold text-white">
                    {t("safety")}
                  </span>
                </div>
                <p className="text-xs text-white/80 mb-2">{t("safetyDesc")}</p>
                <p className="text-xs text-white/70 leading-relaxed">
                  {t("busesSafetyDetail1")}
                </p>
              </div>
              <div className="bg-white/10 dark:bg-navy-800/50 backdrop-blur-lg p-6 rounded-2xl border border-white/20 dark:border-navy-600/30 hover:bg-white/15 dark:hover:bg-navy-800/70 transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-light-blue-400/20 dark:bg-light-blue-500/20 p-2 rounded-lg">
                    <Heart className="h-5 w-5 text-light-blue-400" />
                  </div>
                  <span className="text-sm font-semibold text-white">
                    {t("comfort")}
                  </span>
                </div>
                <p className="text-xs text-white/80 mb-2">{t("comfortDesc")}</p>
                <p className="text-xs text-white/70 leading-relaxed">
                  {t("busesComfortDetail1")}
                </p>
              </div>
            </div>

            {/* Center Content */}
            <div className="lg:col-span-6 text-center space-y-6">
              <div className="inline-flex items-center gap-2 text-light-blue-400 mb-4">
                <div className="bg-light-blue-500/20 p-2 rounded-lg border border-light-blue-400/30">
                  <Bus className="h-5 w-5 text-light-blue-400" />
                </div>
                <span className="font-semibold text-sm uppercase tracking-wide">
                  {t("busesOnlyTitle")}
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight text-white">
                {t("busesOnlyTitle")}
              </h1>
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-2xl mx-auto">
                {t("busesOnlyDesc")}
              </p>
              <div className="flex flex-wrap gap-3 justify-center pt-4">
                <div className="bg-white/10 backdrop-blur-lg px-6 py-3 rounded-full border border-white/20">
                  <div className="flex items-center gap-2">
                    <Star className="h-5 w-5 text-light-blue-400" />
                    <span className="text-sm font-semibold text-white">
                      {t("busesLuxury")}
                    </span>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-lg px-6 py-3 rounded-full border border-white/20">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-light-blue-400" />
                    <span className="text-sm font-semibold text-white">
                      {t("busesFleetModern")}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side Card */}
            <div className="lg:col-span-3 space-y-4">
              <div className="bg-white/10 dark:bg-navy-800/50 backdrop-blur-lg p-6 rounded-2xl border border-white/20 dark:border-navy-600/30 hover:bg-white/15 dark:hover:bg-navy-800/70 transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-light-blue-400/20 dark:bg-light-blue-500/20 p-2 rounded-lg">
                    <Clock className="h-5 w-5 text-light-blue-400" />
                  </div>
                  <span className="text-sm font-semibold text-white">
                    {t("speed")}
                  </span>
                </div>
                <p className="text-xs text-white/80 mb-2">{t("speedDesc")}</p>
                <p className="text-xs text-white/70 leading-relaxed">
                  {t("busesSpeedDetail1")}
                </p>
              </div>
              <div className="bg-white/10 dark:bg-navy-800/50 backdrop-blur-lg p-6 rounded-2xl border border-white/20 dark:border-navy-600/30 hover:bg-white/15 dark:hover:bg-navy-800/70 transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-light-blue-400/20 dark:bg-light-blue-500/20 p-2 rounded-lg">
                    <MapPin className="h-5 w-5 text-light-blue-400" />
                  </div>
                  <span className="text-sm font-semibold text-white">
                    {t("coverage")}
                  </span>
                </div>
                <p className="text-xs text-white/80 mb-2">{t("coverageDesc")}</p>
                <p className="text-xs text-white/70 leading-relaxed">
                  {t("busesCoverageDetail1")}
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Buses Intro - Card-Based Layout */}
      <section className="py-12 md:py-20 lg:py-28 bg-gradient-to-br from-white via-light-blue-100/40 to-light-blue-50/50 dark:from-navy-900/40 dark:via-light-blue-900/20 dark:to-navy-900/40 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-navy-200/20 dark:bg-navy-700/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-light-blue-200/20 dark:bg-light-blue-700/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8 items-start">
              {/* Left Content Card */}
              <div className="lg:col-span-2 space-y-6">
                <div className="bg-white dark:bg-navy-800 p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-xl border-2 border-navy-100 dark:border-navy-700">
                  <div className="inline-flex items-center gap-2 text-navy-700 dark:text-light-blue-400 mb-4">
                    <Bus className="h-5 w-5" />
                    <span className="font-semibold text-sm uppercase tracking-wide">
                      {t("busesIntro")}
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-navy-800 dark:text-white">
                    {t("busesIntro")}
                  </h2>
                  <p className="text-base md:text-lg text-navy-600 dark:text-navy-300 leading-relaxed mb-6">
                    {t("busesIntroDesc")}
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="bg-light-blue-100 dark:bg-light-blue-900/30 p-1.5 rounded-lg border border-light-blue-200/50 dark:border-light-blue-700/30 mt-0.5">
                        <CheckCircle2 className="h-5 w-5 text-navy-700 dark:text-light-blue-400 flex-shrink-0" />
                      </div>
                      <p className="text-navy-600 dark:text-navy-300 pt-0.5">
                        {t("busesFleetModern")}
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-light-blue-100 dark:bg-light-blue-900/30 p-1.5 rounded-lg border border-light-blue-200/50 dark:border-light-blue-700/30 mt-0.5">
                        <CheckCircle2 className="h-5 w-5 text-navy-700 dark:text-light-blue-400 flex-shrink-0" />
                      </div>
                      <p className="text-navy-600 dark:text-navy-300 pt-0.5">
                        {t("busesComfortable")}
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-light-blue-100 dark:bg-light-blue-900/30 p-1.5 rounded-lg border border-light-blue-200/50 dark:border-light-blue-700/30 mt-0.5">
                        <CheckCircle2 className="h-5 w-5 text-navy-700 dark:text-light-blue-400 flex-shrink-0" />
                      </div>
                      <p className="text-navy-600 dark:text-navy-300 pt-0.5">
                        {t("busesSafeTransport")}
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-light-blue-100 dark:bg-light-blue-900/30 p-1.5 rounded-lg border border-light-blue-200/50 dark:border-light-blue-700/30 mt-0.5">
                        <CheckCircle2 className="h-5 w-5 text-navy-700 dark:text-light-blue-400 flex-shrink-0" />
                      </div>
                      <p className="text-navy-600 dark:text-navy-300 pt-0.5">
                        {t("busesProfessional")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Image Card */}
              <div className="lg:col-span-1">
                <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl border-2 border-navy-200/50 dark:border-navy-600/50 group">
                  <img
                    src={busesImage}
                    alt="Buses"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-navy-800/40 via-light-blue-500/20 to-transparent" />
                  {/* Floating Badge */}
                  <div className="absolute top-6 right-6 bg-white/95 dark:bg-navy-800/95 backdrop-blur-lg px-4 py-2 rounded-full shadow-xl border border-navy-200/50 dark:border-navy-600/50">
                    <div className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-light-blue-600 dark:text-light-blue-400" />
                      <span className="text-sm font-semibold text-navy-800 dark:text-white">
                        {t("busesLuxury")}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services - Staggered Card Layout */}
      <section className="py-12 md:py-20 lg:py-28 bg-gradient-to-br from-navy-100/60 via-navy-50/50 to-white dark:from-navy-900/50 dark:via-navy-800/50 dark:to-navy-900/50 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-navy-200/20 dark:bg-navy-700/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-light-blue-200/20 dark:bg-light-blue-700/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-navy-800 dark:text-white">
              {t("ourServicesHeader")}
            </h2>
            <p className="text-lg text-navy-600 dark:text-navy-300 max-w-2xl mx-auto">
              {t("busesServicesSubtitle")}
            </p>
          </div>

          {/* Staggered Grid Layout */}
          <div className="max-w-7xl mx-auto space-y-8">
            {/* Hajj & Umrah - Left Aligned */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <div className="bg-white dark:bg-navy-800 p-6 md:p-8 lg:p-10 rounded-2xl md:rounded-3xl shadow-2xl border-2 border-navy-100 dark:border-navy-700 hover:border-light-blue-400/60 dark:hover:border-light-blue-500/60 transition-all duration-300 group hover:scale-[1.02]">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-gradient-to-br from-light-blue-100 to-light-blue-200 dark:from-light-blue-800/50 dark:to-light-blue-700/50 p-5 rounded-2xl border border-light-blue-200/50 dark:border-light-blue-700/30 group-hover:scale-110 transition-transform">
                      <Star className="h-10 w-10 text-navy-700 dark:text-light-blue-400" />
                    </div>
                    <h3 className="text-3xl font-bold text-navy-800 dark:text-white">
                      {t("hajjUmrahServices")}
                    </h3>
                  </div>
                  <p className="text-navy-600 dark:text-navy-300 leading-relaxed text-lg mb-6">
                    {t("hajjUmrahServicesDesc")}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-4 py-2 bg-light-blue-100 dark:bg-light-blue-900/40 text-navy-700 dark:text-light-blue-400 rounded-full text-sm font-semibold border border-light-blue-200/50 dark:border-light-blue-700/30">
                      {t("busesComfortable")}
                    </span>
                    <span className="px-4 py-2 bg-light-blue-100 dark:bg-light-blue-900/40 text-navy-700 dark:text-light-blue-400 rounded-full text-sm font-semibold border border-light-blue-200/50 dark:border-light-blue-700/30">
                      {t("busesSafeTransport")}
                    </span>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="relative h-[300px] rounded-3xl overflow-hidden shadow-xl border-2 border-navy-100 dark:border-navy-700">
                  <img
                    src={umrah}
                    alt={t("hajjUmrah")}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-navy-800/30 via-light-blue-500/20 to-transparent" />
                </div>
              </div>
            </div>

            {/* Tourism - Right Aligned */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-1 md:order-2">
                <div className="bg-white dark:bg-navy-800 p-6 md:p-8 lg:p-10 rounded-2xl md:rounded-3xl shadow-2xl border-2 border-navy-100 dark:border-navy-700 hover:border-light-blue-400/60 dark:hover:border-light-blue-500/60 transition-all duration-300 group hover:scale-[1.02]">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-gradient-to-br from-navy-100 to-navy-200 dark:from-navy-700/50 dark:to-navy-600/50 p-5 rounded-2xl border border-navy-200/50 dark:border-navy-600/30 group-hover:scale-110 transition-transform">
                      <Bus className="h-10 w-10 text-navy-700 dark:text-light-blue-400" />
                    </div>
                    <h3 className="text-3xl font-bold text-navy-800 dark:text-white">
                      {t("tourism")}
                    </h3>
                  </div>
                  <p className="text-navy-600 dark:text-navy-300 leading-relaxed text-lg mb-6">
                    {t("domesticTourismDesc")}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-4 py-2 bg-navy-100 dark:bg-navy-700/40 text-navy-700 dark:text-light-blue-400 rounded-full text-sm font-semibold border border-navy-200/50 dark:border-navy-600/30">
                      {t("busesLuxury")}
                    </span>
                    <span className="px-4 py-2 bg-navy-100 dark:bg-navy-700/40 text-navy-700 dark:text-light-blue-400 rounded-full text-sm font-semibold border border-navy-200/50 dark:border-navy-600/30">
                      {t("busesFleetModern")}
                    </span>
                  </div>
                </div>
              </div>
              <div className="order-2 md:order-1">
                <div className="relative h-[300px] rounded-3xl overflow-hidden shadow-xl border-2 border-navy-100 dark:border-navy-700">
                  <img
                    src={tourism}
                    alt={t("tourism")}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-navy-800/30 via-light-blue-500/20 to-transparent" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Features Section with Details */}
      <section className="py-12 md:py-20 lg:py-28 bg-gradient-to-br from-white via-light-blue-100/40 to-light-blue-50/50 dark:from-navy-900/40 dark:via-light-blue-900/20 dark:to-navy-900/40 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-navy-200/20 dark:bg-navy-700/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-light-blue-200/20 dark:bg-light-blue-700/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-navy-800 dark:text-white">
              {t("ourFeatures")}
            </h2>
            <p className="text-lg text-navy-600 dark:text-navy-300 max-w-2xl mx-auto">
              {t("busesFeaturesSubtitle")}
            </p>
          </div>

          {/* Main Features Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white dark:bg-navy-800 p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-xl border-2 border-navy-100 dark:border-navy-700 hover:border-light-blue-400/60 dark:hover:border-light-blue-500/60 transition-all duration-300 group hover:scale-[1.02]">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-gradient-to-br from-light-blue-100 to-light-blue-200 dark:from-light-blue-800/50 dark:to-light-blue-700/50 p-4 rounded-xl border border-light-blue-200/50 dark:border-light-blue-700/30 group-hover:scale-110 transition-transform flex-shrink-0">
                    <feature.icon className="h-8 w-8 text-navy-700 dark:text-light-blue-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2 text-navy-800 dark:text-white">
                      {feature.title}
                    </h3>
                    <p className="text-navy-600 dark:text-navy-300 mb-4">
                      {feature.description}
                    </p>
                    <ul className="space-y-2">
                      {feature.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-light-blue-600 dark:text-light-blue-400 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-navy-600 dark:text-navy-300">
                            {detail}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {additionalFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white dark:bg-navy-800 p-6 rounded-2xl shadow-lg border-2 border-navy-100 dark:border-navy-700 hover:border-light-blue-400/60 dark:hover:border-light-blue-500/60 transition-all duration-300 group hover:scale-[1.02]">
                <div className="bg-gradient-to-br from-light-blue-100 to-light-blue-200 dark:from-light-blue-800/50 dark:to-light-blue-700/50 p-4 rounded-xl mb-4 group-hover:scale-110 transition-transform inline-block">
                  <feature.icon className="h-6 w-6 text-navy-700 dark:text-light-blue-400" />
                </div>
                <h4 className="text-lg font-bold mb-2 text-navy-800 dark:text-white">
                  {feature.title}
                </h4>
                <p className="text-sm text-navy-600 dark:text-navy-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactForm />
    </div>
  );
};

export default Buses;
