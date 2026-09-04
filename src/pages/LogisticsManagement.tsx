import { useTranslation } from "react-i18next";
import ContactForm from "@/components/ContactForm";
import {
  Building2,
  Users,
  Car,
  FileText,
  Shield,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Briefcase,
  Handshake,
  Target,
  Zap,
} from "lucide-react";

// Image paths - user will change these later
const logisticsHero = "/assets/company/company-hero.jpg";
const logisticsImage = "/assets/company/company-image.jpg";

const LogisticsManagement = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: Building2,
      title: t("logisticsManagementManagement"),
      description: t("logisticsManagementManagementDesc"),
    },
    {
      icon: Users,
      title: t("logisticsManagementReps"),
      description: t("logisticsManagementRepsDesc"),
    },
    {
      icon: Car,
      title: t("logisticsManagementCars"),
      description: t("logisticsManagementCarsDesc"),
    },
    {
      icon: FileText,
      title: t("logisticsManagementContracts"),
      description: t("logisticsManagementContractsDesc"),
    },
  ];

  const features = [
    {
      icon: Shield,
      title: t("logisticsManagementFeature1"),
      description: t("logisticsManagementFeature1Desc"),
    },
    {
      icon: TrendingUp,
      title: t("logisticsManagementFeature2"),
      description: t("logisticsManagementFeature2Desc"),
    },
    {
      icon: Target,
      title: t("logisticsManagementFeature3"),
      description: t("logisticsManagementFeature3Desc"),
    },
    {
      icon: Zap,
      title: t("logisticsManagementFeature4"),
      description: t("logisticsManagementFeature4Desc"),
    },
  ];

  const benefits = [
    t("logisticsManagementBenefit5"),
    t("logisticsManagementBenefit1"),
    t("logisticsManagementBenefit2"),
    t("logisticsManagementBenefit3"),
    t("logisticsManagementBenefit4"),
  ];

  return (
    <div className="pt-20">
      {/* Hero Section - Centered with Image Below */}
      <section className="relative min-h-[600px] md:min-h-[700px] overflow-hidden bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900">
        <div className="absolute inset-0">
          <img
            src={logisticsHero}
            alt="Logistics Management"
            className="w-full h-full object-cover opacity-35"
          />
        </div>
        {/* Decorative Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col justify-center items-center min-h-[600px] md:min-h-[700px] py-16 text-center">
            <div className="inline-flex items-center gap-2 text-light-blue-400 mb-6">
              <div className="bg-light-blue-500/20 p-2 rounded-lg border border-light-blue-400/30">
                <Building2 className="h-5 w-5 text-light-blue-400" />
              </div>
              <span className="font-semibold text-sm uppercase tracking-wide">
                {t("logisticsManagementTitle")}
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight text-white mb-6">
              {t("logisticsManagementTitle")}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto mb-8">
              {t("logisticsManagementDesc")}
            </p>

            {/* Feature Badges */}
            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <div className="bg-white/10 dark:bg-navy-800/50 backdrop-blur-lg px-6 py-3 rounded-xl border border-white/20 dark:border-navy-600/30 hover:bg-white/15 dark:hover:bg-navy-800/70 transition-all duration-300">
                <div className="flex items-center gap-2">
                  <Handshake className="h-5 w-5 text-light-blue-400" />
                  <span className="text-sm font-semibold text-white">
                    {t("logisticsManagementPartnership")}
                  </span>
                </div>
              </div>
              <div className="bg-white/10 dark:bg-navy-800/50 backdrop-blur-lg px-6 py-3 rounded-xl border border-white/20 dark:border-navy-600/30 hover:bg-white/15 dark:hover:bg-navy-800/70 transition-all duration-300">
                <div className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-light-blue-400" />
                  <span className="text-sm font-semibold text-white">
                    {t("logisticsManagementProfessional")}
                  </span>
                </div>
              </div>
              <div className="bg-white/10 dark:bg-navy-800/50 backdrop-blur-lg px-6 py-3 rounded-xl border border-white/20 dark:border-navy-600/30 hover:bg-white/15 dark:hover:bg-navy-800/70 transition-all duration-300">
                <div className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-light-blue-400" />
                  <span className="text-sm font-semibold text-white">
                    {t("logisticsManagementExpert")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Services Section - Card Grid */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-background via-light-blue-50/30 dark:via-light-blue-900/20 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              {t("logisticsManagementServicesTitle")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("logisticsManagementServicesSubtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white dark:bg-navy-800 p-8 rounded-3xl shadow-xl border-2 border-navy-100 dark:border-navy-700 hover:border-light-blue-400/60 dark:hover:border-light-blue-500/60 transition-all duration-300 group hover:shadow-2xl hover:scale-[1.02]">
                <div className="bg-gradient-to-br from-light-blue-100 to-light-blue-200 dark:from-light-blue-800/50 dark:to-light-blue-700/50 p-4 rounded-2xl mb-6 group-hover:scale-110 transition-transform inline-flex items-center justify-center">
                  <service.icon className="h-8 w-8 text-navy-700 dark:text-light-blue-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-navy-800 dark:text-white group-hover:text-light-blue-600 dark:group-hover:text-light-blue-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section - Split Layout */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-light-blue-50/50 via-white to-light-blue-50/50 dark:from-light-blue-900/30 dark:via-navy-900/40 dark:to-light-blue-900/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-light-blue-600 dark:text-light-blue-400 mb-4">
                <div className="bg-light-blue-100 dark:bg-light-blue-900/30 p-2 rounded-lg border border-light-blue-200 dark:border-light-blue-800/30">
                  <Target className="h-5 w-5" />
                </div>
                <span className="font-semibold text-sm uppercase tracking-wide">
                  {t("logisticsManagementBenefitsTitle")}
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-navy-800 dark:text-white">
                {t("logisticsManagementBenefitsTitle")}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t("logisticsManagementBenefitsDesc")}
              </p>

              <div className="space-y-4 pt-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3 group">
                    <div className="bg-light-blue-100 dark:bg-light-blue-900/30 p-1.5 rounded-lg border border-light-blue-200 dark:border-light-blue-800/30 group-hover:bg-light-blue-200 dark:group-hover:bg-light-blue-800/40 transition-colors mt-0.5">
                      <CheckCircle2 className="h-5 w-5 text-light-blue-600 dark:text-light-blue-400 flex-shrink-0" />
                    </div>
                    <p className="text-navy-800 dark:text-white leading-relaxed pt-0.5">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-navy-200 dark:border-navy-700 group">
                <img
                  src={logisticsImage}
                  alt="Logistics Management"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-navy-800/40 via-light-blue-500/20 to-transparent" />
                <div className="absolute top-6 right-6 bg-white/95 dark:bg-navy-800/95 backdrop-blur-lg px-4 py-2 rounded-lg shadow-xl border border-navy-200 dark:border-navy-700">
                  <div className="flex items-center gap-2">
                    <Handshake className="h-4 w-4 text-light-blue-600 dark:text-light-blue-400" />
                    <span className="text-sm font-semibold text-navy-800 dark:text-white">
                      {t("logisticsManagementPartnership")}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Alternating Layout */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-white to-light-blue-50/50 dark:from-navy-900/40 dark:to-light-blue-900/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              {t("logisticsManagementFeaturesTitle")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("logisticsManagementFeaturesSubtitle")}
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white dark:bg-navy-800 p-6 rounded-3xl shadow-lg border-2 border-navy-100 dark:border-navy-700 hover:border-light-blue-400/60 dark:hover:border-light-blue-500/60 transition-all duration-300 group">
                <div className="flex items-center gap-4 mb-3">
                  <div className="bg-gradient-to-br from-light-blue-100 to-light-blue-200 dark:from-light-blue-800/50 dark:to-light-blue-700/50 p-3 rounded-xl group-hover:scale-110 transition-transform">
                    <feature.icon className="h-6 w-6 text-navy-700 dark:text-light-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-navy-800 dark:text-white">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-light-blue-600 via-light-blue-500 to-light-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {t("logisticsManagementCTATitle")}
            </h2>
            <p className="text-xl mb-8 text-white/90">
              {t("logisticsManagementCTADesc")}
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

export default LogisticsManagement;
