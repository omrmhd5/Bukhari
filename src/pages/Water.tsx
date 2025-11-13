import { useLanguage } from "@/contexts/LanguageContext";
import ContactForm from "@/components/ContactForm";
import {
  Droplets,
  Award,
  Truck,
  CheckCircle2,
  Sparkles,
  Factory,
  ArrowRight,
  TrendingUp,
} from "lucide-react";
// Image is in public/assets/ folder
const waterHero = "/assets/water/water-hero.jpg";
const waterImage = "/assets/water/water-image.jpg";

const Water = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Droplets,
      title: t("purity"),
      description: t("purityDesc"),
    },
    {
      icon: Award,
      title: t("quality"),
      description: t("qualityDesc"),
    },
    {
      icon: Truck,
      title: t("reliability"),
      description: t("reliabilityDesc"),
    },
  ];

  const brands = [
    {
      name: t("sidqWater"),
      nameAr: t("sidqWater"),
    },
    {
      name: t("bakkahWater"),
      nameAr: t("bakkahWater"),
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section with Enhanced Design */}
      <section className="relative min-h-[650px] md:min-h-[750px] overflow-hidden">
        <img
          src={waterHero}
          alt="Water Production"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/60 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-800/25 via-transparent to-light-blue-500/25" />
        {/* Decorative Blur Elements */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-navy-800/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-light-blue-500/20 rounded-full blur-3xl" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-4 text-center text-white">
            <div className="mb-8 inline-block animate-fade-in">
              <div className="bg-white/15 backdrop-blur-lg px-6 py-3 rounded-full border border-white/30 shadow-lg inline-flex items-center gap-2 hover:bg-white/20 transition-all duration-300">
                <Sparkles className="h-4 w-4 text-white" />
                <span className="text-sm font-semibold text-white">
                  {t("waterTitle")}
                </span>
                <TrendingUp className="h-4 w-4 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in leading-tight text-white drop-shadow-2xl">
              {t("waterTitle")}
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl max-w-3xl mx-auto animate-fade-in text-white/95 leading-relaxed drop-shadow-lg font-medium">
              {t("waterDesc")}
            </p>
          </div>
        </div>
        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Features Banner */}
      <section className="py-16 bg-gradient-to-r from-navy-50 via-light-blue-50/50 to-navy-50 dark:from-navy-900/30 dark:via-light-blue-900/20 dark:to-navy-900/30 border-b border-navy-200/50 dark:border-navy-700/50 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-navy-200/30 dark:bg-navy-700/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-light-blue-200/30 dark:bg-light-blue-700/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-white/90 dark:bg-navy-800/90 backdrop-blur-lg p-6 rounded-2xl border-2 border-navy-200/50 dark:border-navy-600/50 hover:border-light-blue-400/60 dark:hover:border-light-blue-500/60 hover:shadow-xl transition-all duration-300 group hover:scale-[1.02] hover:bg-white dark:hover:bg-navy-800">
                <div className="bg-gradient-to-br from-light-blue-100 to-light-blue-200 dark:from-light-blue-800/40 dark:to-light-blue-700/40 p-4 rounded-xl group-hover:from-light-blue-200 group-hover:to-light-blue-300 dark:group-hover:from-light-blue-700/50 dark:group-hover:to-light-blue-600/50 group-hover:scale-110 transition-all duration-300 shadow-lg border border-light-blue-200/50 dark:border-light-blue-700/30">
                  <feature.icon className="h-6 w-6 text-navy-700 dark:text-light-blue-400" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1 text-navy-800 dark:text-white group-hover:text-light-blue-600 dark:group-hover:text-light-blue-400 transition-colors">
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
      </section>

      {/* Water Production - Enhanced Split Layout */}
      <section className="py-28 bg-gradient-to-br from-background via-navy-50/50 to-light-blue-50/50 dark:via-navy-900/20 dark:to-light-blue-900/10 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-navy-200/20 dark:bg-navy-700/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-light-blue-200/20 dark:bg-light-blue-700/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="inline-flex items-center gap-2 text-navy-700 dark:text-light-blue-400 mb-4">
                <div className="bg-light-blue-100 dark:bg-light-blue-900/30 p-2 rounded-lg border border-light-blue-200/50 dark:border-light-blue-700/30">
                  <Factory className="h-5 w-5 text-navy-700 dark:text-light-blue-400" />
                </div>
                <span className="font-semibold text-sm uppercase tracking-wide">
                  {t("waterProductionLabel")}
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                {t("waterProductionTitle")}
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                {t("waterProductionDesc")}
              </p>
              <div className="pt-4 space-y-4">
                <div className="flex items-start gap-3 group">
                  <div className="bg-light-blue-100 dark:bg-light-blue-900/30 p-1.5 rounded-lg border border-light-blue-200/50 dark:border-light-blue-700/30 group-hover:bg-light-blue-200 dark:group-hover:bg-light-blue-800/40 transition-colors">
                    <CheckCircle2 className="h-5 w-5 text-navy-700 dark:text-light-blue-400 flex-shrink-0" />
                  </div>
                  <p className="text-navy-700 dark:text-navy-200 leading-relaxed pt-0.5">
                    {t("directDistribution")}
                  </p>
                </div>
                <div className="flex items-start gap-3 group">
                  <div className="bg-light-blue-100 dark:bg-light-blue-900/30 p-1.5 rounded-lg border border-light-blue-200/50 dark:border-light-blue-700/30 group-hover:bg-light-blue-200 dark:group-hover:bg-light-blue-800/40 transition-colors">
                    <CheckCircle2 className="h-5 w-5 text-navy-700 dark:text-light-blue-400 flex-shrink-0" />
                  </div>
                  <p className="text-navy-700 dark:text-navy-200 leading-relaxed pt-0.5">
                    {t("allSizesAvailable")}
                  </p>
                </div>
                <div className="flex items-start gap-3 group">
                  <div className="bg-light-blue-100 dark:bg-light-blue-900/30 p-1.5 rounded-lg border border-light-blue-200/50 dark:border-light-blue-700/30 group-hover:bg-light-blue-200 dark:group-hover:bg-light-blue-800/40 transition-colors">
                    <CheckCircle2 className="h-5 w-5 text-navy-700 dark:text-light-blue-400 flex-shrink-0" />
                  </div>
                  <p className="text-navy-700 dark:text-navy-200 leading-relaxed pt-0.5">
                    {t("fastReliableDelivery")}
                  </p>
                </div>
              </div>
            </div>
            <div className="relative animate-fade-in">
              <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl group border-2 border-navy-200/50 dark:border-navy-600/50 hover:border-light-blue-400/60 dark:hover:border-light-blue-500/60 transition-all duration-300">
                <img
                  src={waterImage}
                  alt="Water Production"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-navy-800/40 via-light-blue-500/20 to-transparent" />
                {/* Floating Badge */}
                <div className="absolute top-6 right-6 bg-white/95 dark:bg-navy-800/95 backdrop-blur-lg px-5 py-2.5 rounded-full shadow-xl border border-navy-200/50 dark:border-navy-600/50 hover:bg-white dark:hover:bg-navy-800 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-light-blue-600 dark:text-light-blue-400" />
                    <span className="text-sm font-semibold text-navy-800 dark:text-white">
                      {t("globalQualityBadge")}
                    </span>
                  </div>
                </div>
                {/* Decorative Corner Element */}
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-light-blue-400/30 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Section - Enhanced Cards */}
      <section className="py-28 bg-gradient-to-br from-navy-50 via-light-blue-50/30 to-navy-50 dark:from-navy-900/40 dark:via-light-blue-900/20 dark:to-navy-900/40 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-navy-200/20 dark:bg-navy-700/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-light-blue-200/20 dark:bg-light-blue-700/20 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              {t("ourBrands")}
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {t("brandsSubtitle")}
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="relative bg-white dark:bg-navy-800 p-10 pb-14 rounded-3xl shadow-luxury hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-light-blue-400/60 dark:hover:border-light-blue-500/60 group overflow-hidden hover:scale-[1.02]">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-300 rounded-3xl">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--light-blue-500)),transparent_70%)] rounded-3xl" />
                </div>
                {/* Decorative Corner Blur */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-light-blue-200/20 dark:bg-light-blue-700/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-light-blue-300/30 dark:group-hover:bg-light-blue-600/30 transition-colors" />

                <div className="relative text-center">
                  <div className="mb-6">
                    <div className="bg-gradient-to-br from-light-blue-100 to-light-blue-200 dark:from-light-blue-800/40 dark:to-light-blue-700/40 p-4 rounded-2xl inline-block border border-light-blue-200/50 dark:border-light-blue-700/30 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Droplets className="h-12 w-12 text-navy-700 dark:text-light-blue-400 mx-auto" />
                    </div>
                  </div>
                  <div className="text-5xl md:text-6xl font-bold group-hover:scale-105 transition-transform duration-300 bg-gradient-to-r from-navy-700 via-light-blue-500 to-navy-700 dark:from-light-blue-400 dark:via-light-blue-500 dark:to-light-blue-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient leading-[1.2] py-2 min-h-[1.2em]">
                    {brand.nameAr}
                  </div>
                  <div className="text-xl text-navy-600 dark:text-navy-300 font-medium mb-6 mt-3">
                    {brand.name}
                  </div>
                  <div className="mt-6 pt-6 border-t border-navy-200/50 dark:border-navy-600/50">
                    <div className="flex items-center justify-center gap-2 text-sm text-navy-600 dark:text-navy-300 group-hover:text-light-blue-600 dark:group-hover:text-light-blue-400 transition-colors">
                      <Award className="h-4 w-4" />
                      <span className="font-semibold">
                        {t("certifiedBrand")}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Water Quality & Delivery - Enhanced Cards */}
      <section className="py-28 bg-gradient-to-br from-background via-navy-50/50 to-light-blue-50/50 dark:via-navy-900/20 dark:to-light-blue-900/10 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-navy-200/20 dark:bg-navy-700/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-light-blue-200/20 dark:bg-light-blue-700/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              {t("qualityAndDelivery")}
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {t("qualitySubtitle")}
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="relative bg-gradient-to-br from-light-blue-50/80 dark:from-navy-800/80 to-white dark:to-navy-900/80 p-10 rounded-3xl shadow-luxury border-2 border-light-blue-200/60 dark:border-light-blue-700/40 hover:border-light-blue-400/80 dark:hover:border-light-blue-500/60 hover:shadow-2xl transition-all duration-300 group hover:scale-[1.02] overflow-hidden">
              {/* Decorative Background */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-light-blue-200/30 dark:bg-light-blue-700/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10">
                <div className="flex justify-center mb-6">
                  <div className="bg-gradient-to-br from-light-blue-100 to-light-blue-200 dark:from-light-blue-800/50 dark:to-light-blue-700/50 p-4 rounded-xl shadow-lg border border-light-blue-200/50 dark:border-light-blue-700/30 group-hover:scale-110 transition-transform duration-300">
                    <Award className="h-10 w-10 text-navy-700 dark:text-light-blue-400" />
                  </div>
                </div>
                <h3 className="text-3xl font-bold mb-4 text-center text-navy-800 dark:text-white">
                  {t("waterQuality")}
                </h3>
                <p className="text-navy-600 dark:text-navy-300 leading-relaxed text-lg mb-6">
                  {t("waterQualityDesc")}
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-4 py-2 bg-light-blue-100 dark:bg-light-blue-900/40 text-navy-700 dark:text-light-blue-300 rounded-full text-sm font-semibold shadow-md hover:shadow-lg transition-shadow border border-light-blue-200/50 dark:border-light-blue-700/30">
                    {t("globalStandards")}
                  </span>
                  <span className="px-4 py-2 bg-light-blue-100 dark:bg-light-blue-900/40 text-navy-700 dark:text-light-blue-300 rounded-full text-sm font-semibold shadow-md hover:shadow-lg transition-shadow border border-light-blue-200/50 dark:border-light-blue-700/30">
                    {t("preciseTests")}
                  </span>
                </div>
              </div>
            </div>
            <div className="relative bg-gradient-to-br from-navy-50/80 dark:from-navy-800/80 to-white dark:to-navy-900/80 p-10 rounded-3xl shadow-luxury border-2 border-navy-200/60 dark:border-navy-600/40 hover:border-light-blue-400/80 dark:hover:border-light-blue-500/60 hover:shadow-2xl transition-all duration-300 group hover:scale-[1.02] overflow-hidden">
              {/* Decorative Background */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-navy-200/30 dark:bg-navy-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10">
                <div className="flex justify-center mb-6">
                  <div className="bg-gradient-to-br from-navy-100 to-navy-200 dark:from-navy-700/50 dark:to-navy-600/50 p-4 rounded-xl shadow-lg border border-navy-200/50 dark:border-navy-600/30 group-hover:scale-110 transition-transform duration-300">
                    <Truck className="h-10 w-10 text-navy-700 dark:text-light-blue-400" />
                  </div>
                </div>
                <h3 className="text-3xl font-bold mb-4 text-center text-navy-800 dark:text-white">
                  {t("waterDelivery")}
                </h3>
                <p className="text-navy-600 dark:text-navy-300 leading-relaxed text-lg mb-6">
                  {t("waterDeliveryDesc")}
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-4 py-2 bg-navy-100 dark:bg-navy-700/40 text-navy-700 dark:text-light-blue-300 rounded-full text-sm font-semibold shadow-md hover:shadow-lg transition-shadow border border-navy-200/50 dark:border-navy-600/30">
                    {t("waterFastDelivery")}
                  </span>
                  <span className="px-4 py-2 bg-navy-100 dark:bg-navy-700/40 text-navy-700 dark:text-light-blue-300 rounded-full text-sm font-semibold shadow-md hover:shadow-lg transition-shadow border border-navy-200/50 dark:border-navy-600/30">
                    {t("waterFullCoverage")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Flow Section */}
      <section className="py-28 bg-gradient-to-br from-navy-50 via-light-blue-50/30 to-navy-50 dark:from-navy-900/40 dark:via-light-blue-900/20 dark:to-navy-900/40 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-navy-200/20 dark:bg-navy-700/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-light-blue-200/20 dark:bg-light-blue-700/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-navy-200/10 dark:bg-navy-700/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-16">
            {t("productionProcess")}
          </h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto relative">
            {[
              {
                icon: Factory,
                number: "01",
                title: t("productionStep"),
                desc: t("productionStepDesc"),
              },
              {
                icon: Award,
                number: "02",
                title: t("inspectionStep"),
                desc: t("inspectionStepDesc"),
              },
              {
                icon: Truck,
                number: "03",
                title: t("distributionStep"),
                desc: t("distributionStepDesc"),
              },
              {
                icon: CheckCircle2,
                number: "04",
                title: t("deliveryStep"),
                desc: t("deliveryStepDesc"),
              },
            ].map((step, index) => (
              <div key={index} className="text-center group relative">
                <div className="bg-white dark:bg-navy-800 p-6 rounded-2xl shadow-luxury border-2 border-transparent hover:border-light-blue-400/60 dark:hover:border-light-blue-500/60 hover:shadow-2xl transition-all duration-300 hover:scale-105 w-full">
                  <div className="bg-gradient-to-br from-light-blue-100 to-light-blue-200 dark:from-light-blue-800/40 dark:to-light-blue-700/40 p-4 rounded-xl mb-4 border border-light-blue-200/50 dark:border-light-blue-700/30 group-hover:from-light-blue-200 group-hover:to-light-blue-300 dark:group-hover:from-light-blue-700/50 dark:group-hover:to-light-blue-600/50 transition-all duration-300 shadow-md">
                    <step.icon className="h-8 w-8 text-navy-700 dark:text-light-blue-400 mx-auto" />
                  </div>
                  <div className="text-3xl font-bold text-navy-700 dark:text-light-blue-400 mb-3 group-hover:scale-110 transition-transform duration-300">
                    {step.number}
                  </div>
                  <h3 className="font-bold text-lg mb-3 text-navy-800 dark:text-white group-hover:text-light-blue-600 dark:group-hover:text-light-blue-400 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm text-navy-600 dark:text-navy-300 leading-relaxed">
                    {step.desc}
                  </p>
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

export default Water;
