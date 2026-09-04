import { useTranslation } from "react-i18next";
import ContactForm from "@/components/ContactForm";
import {
  Monitor,
  Smartphone,
  Video,
  Palette,
  Globe,
  TrendingUp,
  Target,
  Zap,
  CheckCircle2,
  ArrowRight,
  Code,
  Users,
  Megaphone,
} from "lucide-react";

// Image paths - user will change these later
const digitalHero = "/assets/digital/digital-hero.jpg";
const digitalWebsite = "/assets/digital/digital-website.jpg";
const digitalVideo = "/assets/digital/digital-video.jpg";
const digitalSocial = "/assets/digital/digital-social.jpg";
const digitalSEO = "/assets/digital/digital-seo.jpg";

const DigitalMarketing = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: Globe,
      title: t("digitalMarketingWebsites"),
      description: t("digitalMarketingWebsitesDesc"),
      image: digitalWebsite,
    },
    {
      icon: Video,
      title: t("digitalMarketingVideo"),
      description: t("digitalMarketingVideoDesc"),
      image: digitalVideo,
    },
    {
      icon: Megaphone,
      title: t("digitalMarketingSocial"),
      description: t("digitalMarketingSocialDesc"),
      image: digitalSocial,
    },
    {
      icon: Target,
      title: t("digitalMarketingSEO"),
      description: t("digitalMarketingSEODesc"),
      image: digitalSEO,
    },
  ];

  const features = [
    {
      icon: Code,
      title: t("digitalMarketingFeature1"),
      description: t("digitalMarketingFeature1Desc"),
    },
    {
      icon: TrendingUp,
      title: t("digitalMarketingFeature2"),
      description: t("digitalMarketingFeature2Desc"),
    },
    {
      icon: Users,
      title: t("digitalMarketingFeature3"),
      description: t("digitalMarketingFeature3Desc"),
    },
    {
      icon: Zap,
      title: t("digitalMarketingFeature4"),
      description: t("digitalMarketingFeature4Desc"),
    },
  ];

  const benefits = [
    t("digitalMarketingBenefit1"),
    t("digitalMarketingBenefit2"),
    t("digitalMarketingBenefit3"),
    t("digitalMarketingBenefit4"),
  ];

  return (
    <div className="pt-20">
      {/* Hero Section - Full Width with Floating Cards */}
      <section className="relative min-h-[650px] md:min-h-[750px] overflow-hidden bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900">
        <div className="absolute inset-0">
          <img
            src={digitalHero}
            alt="Digital Marketing"
            className="w-full h-full object-cover opacity-25"
          />
        </div>
        {/* Decorative Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col justify-center items-center min-h-[650px] md:min-h-[750px] py-16 text-center">
            <div className="inline-flex items-center gap-2 text-light-blue-400 mb-6">
              <div className="bg-light-blue-500/20 p-2 rounded-lg border border-light-blue-400/30">
                <Monitor className="h-5 w-5 text-light-blue-400" />
              </div>
              <span className="font-semibold text-sm uppercase tracking-wide">
                {t("digitalMarketingTitle")}
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight text-white mb-6">
              {t("digitalMarketingTitle")}
            </h1>

            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto mb-12">
              {t("digitalMarketingDesc")}
            </p>

            {/* Floating Feature Cards */}
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-8">
              <div className="bg-white/10 dark:bg-navy-800/50 backdrop-blur-lg p-6 rounded-2xl border border-white/20 dark:border-navy-600/30 hover:bg-white/15 dark:hover:bg-navy-800/70 transition-all duration-300 group hover:scale-105">
                <div className="flex flex-col items-center gap-3">
                  <div className="bg-gradient-to-br from-light-blue-400/20 to-light-blue-500/20 dark:from-light-blue-500/20 dark:to-light-blue-600/20 p-4 rounded-xl border border-light-blue-300/30 dark:border-light-blue-600/30 group-hover:scale-110 transition-transform">
                    <Globe className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">
                    {t("digitalMarketingModern")}
                  </h3>
                  <p className="text-sm text-white/80 text-center">
                    {t("digitalMarketingFeature1Desc")}
                  </p>
                </div>
              </div>
              <div className="bg-white/10 dark:bg-navy-800/50 backdrop-blur-lg p-6 rounded-2xl border border-white/20 dark:border-navy-600/30 hover:bg-white/15 dark:hover:bg-navy-800/70 transition-all duration-300 group hover:scale-105">
                <div className="flex flex-col items-center gap-3">
                  <div className="bg-gradient-to-br from-light-blue-400/20 to-light-blue-500/20 dark:from-light-blue-500/20 dark:to-light-blue-600/20 p-4 rounded-xl border border-light-blue-300/30 dark:border-light-blue-600/30 group-hover:scale-110 transition-transform">
                    <TrendingUp className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">
                    {t("digitalMarketingResults")}
                  </h3>
                  <p className="text-sm text-white/80 text-center">
                    {t("digitalMarketingFeature2Desc")}
                  </p>
                </div>
              </div>
              <div className="bg-white/10 dark:bg-navy-800/50 backdrop-blur-lg p-6 rounded-2xl border border-white/20 dark:border-navy-600/30 hover:bg-white/15 dark:hover:bg-navy-800/70 transition-all duration-300 group hover:scale-105">
                <div className="flex flex-col items-center gap-3">
                  <div className="bg-gradient-to-br from-light-blue-400/20 to-light-blue-500/20 dark:from-light-blue-500/20 dark:to-light-blue-600/20 p-4 rounded-xl border border-light-blue-300/30 dark:border-light-blue-600/30 group-hover:scale-110 transition-transform">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">
                    {t("digitalMarketingProfessional")}
                  </h3>
                  <p className="text-sm text-white/80 text-center">
                    {t("digitalMarketingFeature3Desc")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Services Section - Staggered Cards Layout */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-white via-light-blue-50/40 to-navy-50/40 dark:from-navy-900/40 dark:via-light-blue-900/20 dark:to-navy-900/40 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-navy-200/20 dark:bg-navy-700/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-light-blue-200/20 dark:bg-light-blue-700/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-navy-800 dark:text-white">
              {t("digitalMarketingServicesTitle")}
            </h2>
            <p className="text-lg text-navy-600 dark:text-navy-300 max-w-2xl mx-auto">
              {t("digitalMarketingServicesSubtitle")}
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-6">
            {services.map((service, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row gap-6 items-center ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}>
                <div className="flex-1 bg-white dark:bg-navy-800 p-8 rounded-3xl shadow-xl border-2 border-navy-100 dark:border-navy-700 hover:border-light-blue-400/60 dark:hover:border-light-blue-500/60 transition-all duration-300 group hover:scale-[1.02]">
                  <h3 className="text-2xl font-bold mb-4 text-navy-800 dark:text-white group-hover:text-light-blue-600 dark:group-hover:text-light-blue-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-navy-600 dark:text-navy-300 leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <div className="flex-1">
                  <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg border-2 border-navy-100 dark:border-navy-700 group-hover:border-light-blue-400/60 dark:group-hover:border-light-blue-500/60 transition-all duration-300">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-navy-800/20 via-light-blue-500/10 to-transparent" />
                    {/* Icon Badge */}
                    <div className="absolute top-4 right-4 bg-white/95 dark:bg-navy-800/95 backdrop-blur-lg p-3 rounded-xl shadow-xl border border-navy-200 dark:border-navy-700">
                      <service.icon className="h-6 w-6 text-navy-700 dark:text-light-blue-400" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - Side by Side Cards */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-navy-100/50 via-white to-light-blue-50/50 dark:from-navy-900/40 dark:via-light-blue-900/20 dark:to-navy-900/40">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-navy-800 dark:text-white">
              {t("digitalMarketingFeaturesTitle")}
            </h2>
            <p className="text-lg text-navy-600 dark:text-navy-300 max-w-2xl mx-auto">
              {t("digitalMarketingFeaturesSubtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white dark:bg-navy-800 p-6 rounded-2xl shadow-lg border-2 border-navy-100 dark:border-navy-700 hover:border-light-blue-400/60 dark:hover:border-light-blue-500/60 transition-all duration-300 group hover:scale-[1.02]">
                <div className="flex items-center gap-4 mb-3">
                  <div className="bg-gradient-to-br from-light-blue-100 to-light-blue-200 dark:from-light-blue-800/50 dark:to-light-blue-700/50 p-3 rounded-xl group-hover:scale-110 transition-transform">
                    <feature.icon className="h-6 w-6 text-navy-700 dark:text-light-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-navy-800 dark:text-white">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-sm text-navy-600 dark:text-navy-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section - Centered List */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-light-blue-50/50 via-white to-light-blue-50/50 dark:from-light-blue-900/30 dark:via-navy-900/40 dark:to-light-blue-900/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 text-light-blue-600 dark:text-light-blue-400 mb-4">
                <div className="bg-light-blue-100 dark:bg-light-blue-900/30 p-2 rounded-lg border border-light-blue-200 dark:border-light-blue-800/30">
                  <Target className="h-5 w-5" />
                </div>
                <span className="font-semibold text-sm uppercase tracking-wide">
                  {t("digitalMarketingBenefitsTitle")}
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-navy-800 dark:text-white mb-4">
                {t("digitalMarketingBenefitsTitle")}
              </h2>
              <p className="text-lg text-navy-600 dark:text-navy-300 leading-relaxed">
                {t("digitalMarketingBenefitsDesc")}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 group bg-white dark:bg-navy-800 p-5 rounded-xl border-2 border-navy-100 dark:border-navy-700 hover:border-light-blue-400/60 dark:hover:border-light-blue-500/60 transition-all duration-300 hover:scale-[1.02]">
                  <div className="bg-light-blue-100 dark:bg-light-blue-900/30 p-1.5 rounded-lg border border-light-blue-200 dark:border-light-blue-800/30 group-hover:bg-light-blue-200 dark:group-hover:bg-light-blue-800/40 transition-colors mt-0.5 flex-shrink-0">
                    <CheckCircle2 className="h-5 w-5 text-light-blue-600 dark:text-light-blue-400" />
                  </div>
                  <p className="text-navy-800 dark:text-white leading-relaxed pt-0.5">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-light-blue-600 via-light-blue-500 to-light-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {t("digitalMarketingCTATitle")}
            </h2>
            <p className="text-xl mb-8 text-white/90">
              {t("digitalMarketingCTADesc")}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="#contact"
                className="bg-white text-light-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-light-blue-50 transition-all duration-300 hover:scale-105 inline-flex items-center gap-2 shadow-xl">
                {t("contactTitle")}
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
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

export default DigitalMarketing;
