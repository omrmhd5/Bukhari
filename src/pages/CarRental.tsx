import { useLanguage } from "@/contexts/LanguageContext";
import ContactForm from "@/components/ContactForm";
import {
  Car,
  Truck,
  Clock,
  CheckCircle,
  Sparkles,
  TrendingUp,
  Shield,
  DollarSign,
  Star,
  Zap,
} from "lucide-react";
// Image is in public/assets/ folder
const carHero = "/assets/car/car-hero.jpg";
const carImage = "/assets/car/car-image.jpg";

const CarRental = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: CheckCircle,
      title: t("flexibility"),
      description: t("flexibilityDesc"),
    },
    {
      icon: Clock,
      title: t("availability"),
      description: t("availabilityDesc"),
    },
    {
      icon: DollarSign,
      title: t("competitivePrices"),
      description: t("competitivePricesDesc"),
    },
    {
      icon: Star,
      title: t("quality"),
      description: t("qualityDesc"),
    },
  ];

  const benefits = [
    {
      icon: Shield,
      title: t("safety"),
      description: t("safetyDesc"),
    },
    {
      icon: DollarSign,
      title: t("competitivePrices"),
      description: t("competitivePricesDesc"),
    },
    {
      icon: Star,
      title: t("quality"),
      description: t("qualityDesc"),
    },
    {
      icon: Zap,
      title: t("speed"),
      description: t("speedDesc"),
    },
    {
      icon: CheckCircle,
      title: t("flexibility"),
      description: t("flexibilityDesc"),
    },
    {
      icon: Clock,
      title: t("availability"),
      description: t("availabilityDesc"),
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section - Full Width with Bottom Overlay Cards */}
      <section className="relative min-h-[600px] md:min-h-[700px] overflow-hidden bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900">
        <div className="absolute inset-0">
          <img
            src={carHero}
            alt="Car Rental"
            className="w-full h-full object-cover opacity-35"
          />
        </div>
        {/* Decorative Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col justify-between min-h-[600px] md:min-h-[700px] py-16">
            {/* Top Content */}
            <div className="text-center space-y-6 mt-12">
              <div className="inline-flex items-center gap-2 text-light-blue-400 mb-4">
                <div className="bg-light-blue-500/20 p-2 rounded-lg border border-light-blue-400/30">
                  <Car className="h-5 w-5 text-light-blue-400" />
                </div>
                <span className="font-semibold text-sm uppercase tracking-wide">
                  {t("rentalTitle")}
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight text-white">
                {t("rentalTitle")}
              </h1>
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto">
                {t("rentalDesc")}
              </p>
            </div>

            {/* Bottom Overlay Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mt-12">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/10 dark:bg-navy-800/50 backdrop-blur-lg p-6 rounded-2xl border border-white/20 dark:border-navy-600/30 hover:bg-white/15 dark:hover:bg-navy-800/70 transition-all duration-300 group hover:scale-105">
                  <div className="flex items-center gap-4">
                    <div className="bg-gradient-to-br from-light-blue-400/20 to-light-blue-500/20 dark:from-light-blue-500/20 dark:to-light-blue-600/20 p-4 rounded-xl border border-light-blue-300/30 dark:border-light-blue-600/30 group-hover:scale-110 transition-transform">
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-white/80">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Bottom Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Rental Intro - Image First, Content Second */}
      <section className="py-12 md:py-20 lg:py-28 bg-gradient-to-br from-light-blue-100/50 via-white to-light-blue-50/40 dark:from-navy-900/40 dark:via-light-blue-900/20 dark:to-navy-900/40 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-navy-200/20 dark:bg-navy-700/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-light-blue-200/20 dark:bg-light-blue-700/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            {/* Image First */}
            <div className="order-2 lg:order-1">
              <div className="relative h-[300px] sm:h-[400px] md:h-[500px] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border-2 border-navy-200/50 dark:border-navy-600/50 group">
                <img
                  src={carImage}
                  alt="Car Rental"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-navy-800/40 via-light-blue-500/20 to-transparent" />
                {/* Floating Badge */}
                <div className="absolute top-6 left-6 bg-white/95 dark:bg-navy-800/95 backdrop-blur-lg px-5 py-2.5 rounded-full shadow-xl border border-navy-200/50 dark:border-navy-600/50">
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-light-blue-600 dark:text-light-blue-400" />
                    <span className="text-sm font-semibold text-navy-800 dark:text-white">
                      {t("availableNow")}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Second */}
            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-navy-800 dark:text-white">
                {t("rentalIntro")}
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-navy-600 dark:text-navy-300 leading-relaxed">
                {t("rentalIntroDesc")}
              </p>
              <div className="pt-4 grid grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-navy-800 p-4 rounded-xl border-2 border-navy-100 dark:border-navy-700 hover:border-light-blue-400/60 dark:hover:border-light-blue-500/60 transition-all duration-300 group">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="bg-gradient-to-br from-light-blue-100 to-light-blue-200 dark:from-light-blue-800/50 dark:to-light-blue-700/50 p-2 rounded-lg group-hover:scale-110 transition-transform">
                        <feature.icon className="h-5 w-5 text-navy-700 dark:text-light-blue-400" />
                      </div>
                      <h3 className="font-bold text-sm text-navy-800 dark:text-white">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-xs text-navy-600 dark:text-navy-300">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicle Details - Diagonal Card Layout */}
      <section className="py-12 md:py-20 lg:py-28 bg-gradient-to-br from-navy-100/50 via-navy-50/40 to-white dark:from-light-blue-900/60 dark:via-light-blue-800/50 dark:to-navy-900/60 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-light-blue-200/30 dark:bg-light-blue-700/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-navy-200/20 dark:bg-navy-700/15 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-8 md:mb-12 lg:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 text-navy-800 dark:text-white">
              {t("vehicleDetails")}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white dark:bg-navy-800 p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-2xl border-2 border-navy-100 dark:border-navy-700 hover:border-light-blue-400/60 dark:hover:border-light-blue-500/60 transition-all duration-300 group relative overflow-hidden hover:scale-[1.02]">
              {/* Diagonal Accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-light-blue-400/20 to-transparent rounded-bl-full" />
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-gradient-to-br from-light-blue-100 to-light-blue-200 dark:from-light-blue-800/50 dark:to-light-blue-700/50 p-4 rounded-xl border border-light-blue-200/50 dark:border-light-blue-700/30 group-hover:scale-110 transition-transform">
                    <Car className="h-8 w-8 text-navy-700 dark:text-light-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-navy-800 dark:text-white">
                    {t("smallVehicles")}
                  </h3>
                </div>
                <p className="text-navy-600 dark:text-navy-300 leading-relaxed mb-6">
                  {t("smallVehiclesDesc")}
                </p>
                <div className="flex items-center gap-2 text-light-blue-600 dark:text-light-blue-400">
                  <CheckCircle className="h-5 w-5" />
                  <span className="text-sm font-semibold">
                    {t("availableNow")}
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-navy-800 p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-2xl border-2 border-navy-100 dark:border-navy-700 hover:border-light-blue-400/60 dark:hover:border-light-blue-500/60 transition-all duration-300 group relative overflow-hidden hover:scale-[1.02]">
              {/* Diagonal Accent */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-light-blue-400/20 to-transparent rounded-br-full" />
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-gradient-to-br from-light-blue-100 to-light-blue-200 dark:from-light-blue-800/50 dark:to-light-blue-700/50 p-4 rounded-xl border border-light-blue-200/50 dark:border-light-blue-700/30 group-hover:scale-110 transition-transform">
                    <Truck className="h-8 w-8 text-navy-700 dark:text-light-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-navy-800 dark:text-white">
                    {t("largeVehicles")}
                  </h3>
                </div>
                <p className="text-navy-600 dark:text-navy-300 leading-relaxed mb-6">
                  {t("largeVehiclesDesc")}
                </p>
                <div className="flex items-center gap-2 text-light-blue-600 dark:text-light-blue-400">
                  <CheckCircle className="h-5 w-5" />
                  <span className="text-sm font-semibold">
                    {t("availableNow")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rental Benefits - Grid Layout */}
      <section className="py-12 md:py-20 lg:py-28 bg-gradient-to-br from-light-blue-100/60 via-light-blue-50/50 to-white dark:from-navy-900/40 dark:via-light-blue-900/20 dark:to-navy-900/40 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-navy-200/20 dark:bg-navy-700/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-light-blue-200/20 dark:bg-light-blue-700/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-navy-800 dark:text-white">
              {t("rentalBenefits")}
            </h2>
            <p className="text-lg text-navy-600 dark:text-navy-300 max-w-2xl mx-auto">
              {t("rentalBenefitsDesc")}
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white dark:bg-navy-800 p-6 rounded-2xl shadow-lg border-2 border-navy-100 dark:border-navy-700 hover:border-light-blue-400/60 dark:hover:border-light-blue-500/60 hover:shadow-2xl transition-all duration-300 group hover:scale-[1.02]">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-light-blue-100 to-light-blue-200 dark:from-light-blue-800/50 dark:to-light-blue-700/50 p-3 rounded-xl border border-light-blue-200/50 dark:border-light-blue-700/30 group-hover:scale-110 transition-transform flex-shrink-0">
                    <benefit.icon className="h-6 w-6 text-navy-700 dark:text-light-blue-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2 text-navy-800 dark:text-white">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-navy-600 dark:text-navy-300 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA - Modern Gradient Card */}
      <section className="py-28 bg-white dark:bg-navy-900 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-navy-200/20 dark:bg-navy-700/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-light-blue-200/20 dark:bg-light-blue-700/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-br from-light-blue-50 via-white to-navy-50 dark:from-navy-800/80 dark:via-navy-800/60 dark:to-navy-900/80 p-12 rounded-3xl border-2 border-navy-100 dark:border-navy-700 hover:border-light-blue-400/60 dark:hover:border-light-blue-500/60 shadow-2xl transition-all duration-300">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-800 dark:text-white mb-6">
                {t("bookNow")}
              </h2>
              <p className="text-xl text-navy-600 dark:text-navy-300 mb-8 max-w-2xl mx-auto">
                {t("contactUsForBestOffers")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactForm />
    </div>
  );
};

export default CarRental;
