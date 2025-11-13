import { useLanguage } from "@/contexts/LanguageContext";
import ContactForm from "@/components/ContactForm";
import {
  Truck,
  Package,
  Clock,
  MapPin,
  ArrowRight,
  Sparkles,
  TrendingUp,
  CheckCircle2,
  Shield,
  Zap,
  Factory,
} from "lucide-react";
// Image is in public/assets/ folder
const transportHero = "/assets/transport/transport-hero.jpg";
const transportPlane = "/assets/transport/transport-plane.jpg";
const aramexLogo = "/assets/transport/aramex.png";
const amazonLogo = "/assets/transport/amazon.png";
const noonLogo = "/assets/transport/noon.png";
const naqelLogo = "/assets/transport/naqel.png";
const noonFoodLogo = "/assets/transport/noon-food.png";
const toyouLogo = "/assets/transport/toyou.png";
const jahezLogo = "/assets/transport/jahez.png";
const hungerStationLogo = "/assets/transport/hungerstation.png";
const mrsoolLogo = "/assets/transport/mrsool.png";

const Transport = () => {
  const { t } = useLanguage();

  const partners = [
    { name: t("partnerAramex"), logo: aramexLogo },
    { name: t("partnerAmazon"), logo: amazonLogo },
    { name: t("partnerNoon"), logo: noonLogo },
    { name: t("partnerNaqel"), logo: naqelLogo },
    { name: t("partnerNoonFood"), logo: noonFoodLogo },
    { name: t("partnerToyou"), logo: toyouLogo },
    { name: t("partnerJahez"), logo: jahezLogo },
    { name: t("partnerHungerStation"), logo: hungerStationLogo },
    { name: t("partnerMrsool"), logo: mrsoolLogo },
  ];

  const features = [
    {
      icon: Truck,
      title: t("ourFleet"),
      description: t("fleetDesc"),
    },
    {
      icon: Package,
      title: t("quality"),
      description: t("integratedLogisticsServices"),
    },
    {
      icon: Clock,
      title: t("speed"),
      description: t("speedDesc"),
    },
    {
      icon: MapPin,
      title: t("coverage"),
      description: t("coverageDesc"),
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section - Modern Split Design */}
      <section className="relative min-h-[700px] md:min-h-[800px] overflow-hidden bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900">
        <div className="absolute inset-0">
          <img
            src={transportHero}
            alt="Transport & Logistics"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        {/* Decorative Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[700px] md:min-h-[800px] py-20">
            {/* Left Content */}
            <div className="space-y-8 animate-fade-in">
              <div className="inline-flex items-center gap-2 text-light-blue-400 mb-6">
                <div className="bg-light-blue-500/20 p-2 rounded-lg border border-light-blue-400/30">
                  <Truck className="h-5 w-5 text-light-blue-400" />
                </div>
                <span className="font-semibold text-sm uppercase tracking-wide">
                  {t("transportTitle")}
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight text-white">
                {t("transportTitle")}
              </h1>
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-xl">
                {t("transportDesc")}
              </p>
              <div className="flex flex-wrap gap-3 pt-4">
                <div className="bg-white/10 backdrop-blur-lg px-6 py-3 rounded-full border border-white/20">
                  <div className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-light-blue-400" />
                    <span className="text-sm font-semibold text-white">
                      {t("reliableAndSecure")}
                    </span>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-lg px-6 py-3 rounded-full border border-white/20">
                  <div className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-light-blue-400" />
                    <span className="text-sm font-semibold text-white">
                      {t("speed")}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative animate-fade-in">
              <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl border-2 border-light-blue-400/20">
                <img
                  src={transportPlane}
                  alt="Transport & Logistics"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 dark:bg-navy-800/95 backdrop-blur-lg p-4 rounded-2xl border border-white/30">
                    <div className="flex items-center gap-3">
                      <div className="bg-light-blue-100 dark:bg-light-blue-900/50 p-2 rounded-lg">
                        <Package className="h-6 w-6 text-navy-700 dark:text-light-blue-400" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-navy-800 dark:text-white">
                          {t("integratedLogisticsServices")}
                        </p>
                        <p className="text-xs text-navy-600 dark:text-navy-300">
                          {t("comprehensiveLogisticsSolutions")}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Features Banner - Horizontal Cards */}
      <section className="py-20 bg-white dark:bg-navy-900 relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-navy-50/50 via-light-blue-50/30 to-navy-50/50 dark:from-navy-900/50 dark:via-light-blue-900/20 dark:to-navy-900/50" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="relative bg-white dark:bg-navy-800 p-8 rounded-3xl shadow-lg border-2 border-navy-100 dark:border-navy-700 hover:border-light-blue-400/60 dark:hover:border-light-blue-500/60 hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2">
                  {/* Decorative Corner */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-light-blue-100/50 to-transparent dark:from-light-blue-900/20 dark:to-transparent rounded-bl-3xl" />

                  <div className="relative">
                    <div className="mb-6">
                      <div className="bg-gradient-to-br from-navy-100 to-navy-200 dark:from-navy-700/50 dark:to-navy-600/50 p-5 rounded-2xl inline-block border border-navy-200/50 dark:border-navy-600/30 group-hover:scale-110 transition-transform duration-300">
                        <feature.icon className="h-10 w-10 text-navy-700 dark:text-light-blue-400" />
                      </div>
                    </div>
                    <h3 className="font-bold text-xl mb-3 text-navy-800 dark:text-white group-hover:text-light-blue-600 dark:group-hover:text-light-blue-400 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-navy-600 dark:text-navy-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Logistics Services - Combined Section */}
      <section className="py-28 bg-gradient-to-br from-navy-50 via-light-blue-50/30 to-navy-50 dark:from-navy-900/40 dark:via-light-blue-900/20 dark:to-navy-900/40 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-navy-200/20 dark:bg-navy-700/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-light-blue-200/20 dark:bg-light-blue-700/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-navy-700 dark:text-light-blue-400 mb-6"></div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-navy-800 dark:text-white">
              {t("ourLogisticsServices")}
            </h2>
            <p className="text-lg text-navy-600 dark:text-navy-300 max-w-2xl mx-auto">
              {t("comprehensiveLogisticsSolutions")}
            </p>
          </div>

          {/* Service Cards Grid */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {/* Parcel Delivery */}
            <div className="relative group">
              <div className="bg-white dark:bg-navy-800 p-8 rounded-3xl shadow-2xl border-2 border-transparent hover:border-light-blue-400/60 dark:hover:border-light-blue-500/60 transition-all duration-300 hover:scale-105 h-full">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6">
                    <div className="bg-gradient-to-br from-light-blue-100 to-light-blue-200 dark:from-light-blue-800/50 dark:to-light-blue-700/50 p-6 rounded-3xl border border-light-blue-200/50 dark:border-light-blue-700/30 group-hover:scale-110 transition-transform duration-300">
                      <Package className="h-12 w-12 text-navy-700 dark:text-light-blue-400" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-navy-800 dark:text-white">
                    {t("parcelDelivery")}
                  </h3>
                  <p className="text-navy-600 dark:text-navy-300 leading-relaxed mb-6">
                    {t("parcelDeliveryDesc")}
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <span className="px-4 py-2 bg-light-blue-100 dark:bg-light-blue-900/40 text-navy-700 dark:text-light-blue-300 rounded-full text-sm font-semibold border border-light-blue-200/50 dark:border-light-blue-700/30">
                      {t("waterFastDelivery")}
                    </span>
                    <span className="px-4 py-2 bg-light-blue-100 dark:bg-light-blue-900/40 text-navy-700 dark:text-light-blue-300 rounded-full text-sm font-semibold border border-light-blue-200/50 dark:border-light-blue-700/30">
                      {t("instantTracking")}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Food Delivery */}
            <div className="relative group">
              <div className="bg-white dark:bg-navy-800 p-8 rounded-3xl shadow-2xl border-2 border-transparent hover:border-light-blue-400/60 dark:hover:border-light-blue-500/60 transition-all duration-300 hover:scale-105 h-full">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6">
                    <div className="bg-gradient-to-br from-navy-100 to-navy-200 dark:from-navy-700/50 dark:to-navy-600/50 p-6 rounded-3xl border border-navy-200/50 dark:border-navy-600/30 group-hover:scale-110 transition-transform duration-300">
                      <Zap className="h-12 w-12 text-navy-700 dark:text-light-blue-400" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-navy-800 dark:text-white">
                    {t("foodDelivery")}
                  </h3>
                  <p className="text-navy-600 dark:text-navy-300 leading-relaxed mb-6">
                    {t("foodDeliveryDesc")}
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <span className="px-4 py-2 bg-navy-100 dark:bg-navy-700/40 text-navy-700 dark:text-light-blue-300 rounded-full text-sm font-semibold border border-navy-200/50 dark:border-navy-600/30">
                      {t("hotDelivery")}
                    </span>
                    <span className="px-4 py-2 bg-navy-100 dark:bg-navy-700/40 text-navy-700 dark:text-light-blue-300 rounded-full text-sm font-semibold border border-navy-200/50 dark:border-navy-600/30">
                      24/7
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Logistics Solutions */}
            <div className="relative group">
              <div className="bg-white dark:bg-navy-800 p-8 rounded-3xl shadow-2xl border-2 border-transparent hover:border-light-blue-400/60 dark:hover:border-light-blue-500/60 transition-all duration-300 hover:scale-105 h-full">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6">
                    <div className="bg-gradient-to-br from-light-blue-100 to-light-blue-200 dark:from-light-blue-800/50 dark:to-light-blue-700/50 p-6 rounded-3xl border border-light-blue-200/50 dark:border-light-blue-700/30 group-hover:scale-110 transition-transform duration-300">
                      <Truck className="h-12 w-12 text-navy-700 dark:text-light-blue-400" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-navy-800 dark:text-white">
                    {t("logisticsSolutions")}
                  </h3>
                  <p className="text-navy-600 dark:text-navy-300 leading-relaxed mb-6">
                    {t("logisticsSolutionsDesc")}
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <span className="px-4 py-2 bg-light-blue-100 dark:bg-light-blue-900/40 text-navy-700 dark:text-light-blue-300 rounded-full text-sm font-semibold border border-light-blue-200/50 dark:border-light-blue-700/30">
                      {t("customizedSolutions")}
                    </span>
                    <span className="px-4 py-2 bg-light-blue-100 dark:bg-light-blue-900/40 text-navy-700 dark:text-light-blue-300 rounded-full text-sm font-semibold border border-light-blue-200/50 dark:border-light-blue-700/30">
                      {t("completeManagement")}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid - Below Services */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mt-16">
            <div className="bg-white dark:bg-navy-800 p-6 rounded-2xl shadow-lg border-2 border-navy-100 dark:border-navy-700 hover:border-light-blue-400/60 dark:hover:border-light-blue-500/60 hover:shadow-2xl transition-all duration-300 group hover:scale-105">
              <div className="flex flex-col items-center text-center">
                <div className="bg-gradient-to-br from-light-blue-100 to-light-blue-200 dark:from-light-blue-800/50 dark:to-light-blue-700/50 p-4 rounded-xl mb-4 border border-light-blue-200/50 dark:border-light-blue-700/30 group-hover:scale-110 transition-transform">
                  <CheckCircle2 className="h-8 w-8 text-navy-700 dark:text-light-blue-400" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-navy-800 dark:text-white">
                  {t("fleetModernTech")}
                </h3>
                <p className="text-sm text-navy-600 dark:text-navy-300">
                  {t("fleetDesc")}
                </p>
              </div>
            </div>
            <div className="bg-white dark:bg-navy-800 p-6 rounded-2xl shadow-lg border-2 border-navy-100 dark:border-navy-700 hover:border-light-blue-400/60 dark:hover:border-light-blue-500/60 hover:shadow-2xl transition-all duration-300 group hover:scale-105">
              <div className="flex flex-col items-center text-center">
                <div className="bg-gradient-to-br from-light-blue-100 to-light-blue-200 dark:from-light-blue-800/50 dark:to-light-blue-700/50 p-4 rounded-xl mb-4 border border-light-blue-200/50 dark:border-light-blue-700/30 group-hover:scale-110 transition-transform">
                  <CheckCircle2 className="h-8 w-8 text-navy-700 dark:text-light-blue-400" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-navy-800 dark:text-white">
                  {t("strategicPartnerships")}
                </h3>
                <p className="text-sm text-navy-600 dark:text-navy-300">
                  {t("coverageDesc")}
                </p>
              </div>
            </div>
            <div className="bg-white dark:bg-navy-800 p-6 rounded-2xl shadow-lg border-2 border-navy-100 dark:border-navy-700 hover:border-light-blue-400/60 dark:hover:border-light-blue-500/60 hover:shadow-2xl transition-all duration-300 group hover:scale-105">
              <div className="flex flex-col items-center text-center">
                <div className="bg-gradient-to-br from-light-blue-100 to-light-blue-200 dark:from-light-blue-800/50 dark:to-light-blue-700/50 p-4 rounded-xl mb-4 border border-light-blue-200/50 dark:border-light-blue-700/30 group-hover:scale-110 transition-transform">
                  <CheckCircle2 className="h-8 w-8 text-navy-700 dark:text-light-blue-400" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-navy-800 dark:text-white">
                  {t("integratedLogisticsGlobal")}
                </h3>
                <p className="text-sm text-navy-600 dark:text-navy-300">
                  {t("integratedLogisticsServices")}
                </p>
              </div>
            </div>
            <div className="bg-white dark:bg-navy-800 p-6 rounded-2xl shadow-lg border-2 border-navy-100 dark:border-navy-700 hover:border-light-blue-400/60 dark:hover:border-light-blue-500/60 hover:shadow-2xl transition-all duration-300 group hover:scale-105">
              <div className="flex flex-col items-center text-center">
                <div className="bg-gradient-to-br from-light-blue-100 to-light-blue-200 dark:from-light-blue-800/50 dark:to-light-blue-700/50 p-4 rounded-xl mb-4 border border-light-blue-200/50 dark:border-light-blue-700/30 group-hover:scale-110 transition-transform">
                  <CheckCircle2 className="h-8 w-8 text-navy-700 dark:text-light-blue-400" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-navy-800 dark:text-white">
                  {t("fullCoverageKingdom")}
                </h3>
                <p className="text-sm text-navy-600 dark:text-navy-300">
                  {t("coverageDesc")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section - Modern Grid */}
      <section className="py-28 bg-gradient-to-br from-white via-navy-50/50 to-light-blue-50/50 dark:from-navy-900/50 dark:via-navy-800/50 dark:to-navy-900/50 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-navy-200/20 dark:bg-navy-700/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-light-blue-200/20 dark:bg-light-blue-700/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-navy-800 dark:text-white">
              {t("ourPartners")}
            </h2>
            <p className="text-lg text-navy-600 dark:text-navy-300 max-w-2xl mx-auto">
              {t("partnersSubtitle")}
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="relative bg-white dark:bg-navy-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-navy-100 dark:border-navy-700 hover:border-light-blue-400/60 dark:hover:border-light-blue-500/60 text-center group overflow-hidden hover:scale-105">
                {/* Decorative Top Border */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-light-blue-400 via-navy-600 to-light-blue-400" />

                <div className="relative">
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="h-12 w-auto object-contain"
                      />
                    </div>
                  </div>
                  <div className="text-base md:text-lg font-bold text-navy-800 dark:text-white group-hover:text-light-blue-600 dark:group-hover:text-light-blue-400 transition-colors mb-4">
                    {partner.name}
                  </div>
                  <div className="pt-4 border-t border-navy-200/50 dark:border-navy-600/50">
                    <div className="flex items-center justify-center gap-1 text-xs text-navy-600 dark:text-navy-300">
                      <CheckCircle2 className="h-3 w-3" />
                      <span>{t("trustedPartner")}</span>
                    </div>
                  </div>
                </div>
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

export default Transport;
