import { useLanguage } from "@/contexts/LanguageContext";
import ContactForm from "@/components/ContactForm";
import {
  Truck,
  Shield,
  Package,
  Clock,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Wrench,
  Building2,
  Loader,
} from "lucide-react";

// Image paths - adjust based on your assets
const trailersHero = "/assets/trailers/trailers-hero.jpg";
const trailersImage = "/assets/trailers/trailers-image.jpg";

const Trailers = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Shield,
      title: t("safety"),
      description: t("safetyDesc"),
    },
    {
      icon: Package,
      title: t("reliability"),
      description: t("reliabilityDesc"),
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

  const services = [
    {
      icon: Building2,
      title: t("trailersConstruction"),
      description: t("trailersConstructionDesc"),
    },
    {
      icon: Package,
      title: t("trailersCargo"),
      description: t("trailersCargoDesc"),
    },
    {
      icon: Loader,
      title: t("trailersEquipment"),
      description: t("trailersEquipmentDesc"),
    },
  ];

  const benefits = [
    t("trailersBenefit1"),
    t("trailersBenefit2"),
    t("trailersBenefit3"),
    t("trailersBenefit4"),
  ];

  return (
    <div className="pt-20">
      {/* Hero Section - Modern Industrial Design */}
      <section className="relative min-h-[700px] md:min-h-[800px] overflow-hidden bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900">
        <div className="absolute inset-0">
          <img
            src={trailersHero}
            alt="Heavy Transport"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        {/* Decorative Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:3rem_3rem]" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center justify-center min-h-[700px] md:min-h-[800px] py-20 text-center">
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="inline-flex items-center gap-3 text-light-blue-400 mb-6">
                <div className="bg-light-blue-500/20 p-3 rounded-xl border border-light-blue-400/30">
                  <Truck className="h-6 w-6 text-light-blue-400" />
                </div>
                <span className="font-bold text-sm uppercase tracking-wider">
                  {t("trailersTitle")}
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight text-white drop-shadow-2xl">
                {t("trailersTitle")}
              </h1>

              <p className="text-xl md:text-2xl lg:text-3xl text-white/90 leading-relaxed max-w-3xl mx-auto font-medium">
                {t("trailersDesc")}
              </p>

              <div className="flex flex-wrap gap-4 justify-center pt-6">
                <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-lg border border-white/20 hover:bg-white/15 transition-all">
                  <div className="flex items-center gap-2">
                    <Wrench className="h-5 w-5 text-light-blue-400" />
                    <span className="text-sm font-semibold text-white">
                      {t("trailersProfessional")}
                    </span>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-lg border border-white/20 hover:bg-white/15 transition-all">
                  <div className="flex items-center gap-2">
                    <Package className="h-5 w-5 text-light-blue-400" />
                    <span className="text-sm font-semibold text-white">
                      {t("trailersReliable")}
                    </span>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-lg border border-white/20 hover:bg-white/15 transition-all">
                  <div className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-light-blue-400" />
                    <span className="text-sm font-semibold text-white">
                      {t("trailersSafe")}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Intro Section - Split Layout */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-white via-light-blue-100/40 to-light-blue-50/50 dark:from-navy-900/40 dark:via-light-blue-900/20 dark:to-navy-900/40">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-navy-700 dark:text-light-blue-400 mb-4">
                <div className="bg-light-blue-100 dark:bg-light-blue-900/30 p-2 rounded-lg border border-light-blue-200/50 dark:border-light-blue-700/30">
                  <Truck className="h-5 w-5" />
                </div>
                <span className="font-semibold text-sm uppercase tracking-wide">
                  {t("trailersIntro")}
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                {t("trailersIntroTitle")}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t("trailersServicesDesc")}
              </p>

              <div className="space-y-4 pt-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3 group">
                    <div className="bg-light-blue-100 dark:bg-light-blue-900/30 p-1.5 rounded-lg border border-light-blue-200/50 dark:border-light-blue-700/30 group-hover:bg-light-blue-200 dark:group-hover:bg-light-blue-800/40 transition-colors mt-0.5">
                      <CheckCircle2 className="h-5 w-5 text-navy-700 dark:text-light-blue-400 flex-shrink-0" />
                    </div>
                    <p className="text-foreground leading-relaxed pt-0.5">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl border-2 border-navy-200/50 dark:border-navy-600/50 group">
                <img
                  src={trailersImage}
                  alt="Heavy Transport"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-navy-800/40 via-light-blue-500/20 to-transparent" />
                <div className="absolute top-6 right-6 bg-white/95 dark:bg-navy-800/95 backdrop-blur-lg px-4 py-2 rounded-full shadow-xl border border-navy-200/50 dark:border-navy-600/50">
                  <div className="flex items-center gap-2">
                    <Truck className="h-4 w-4 text-light-blue-600 dark:text-light-blue-400" />
                    <span className="text-sm font-semibold text-navy-800 dark:text-white">
                      {t("trailersProfessional")}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Card Layout */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-navy-100/60 via-navy-50/50 to-white dark:from-navy-900/50 dark:via-navy-800/50 dark:to-navy-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                {t("trailersServicesTitle")}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t("trailersServicesSubtitle")}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-navy-800 p-8 rounded-3xl shadow-xl border-2 border-navy-100 dark:border-navy-700 hover:border-light-blue-400 dark:hover:border-light-blue-500 transition-all duration-300 group hover:shadow-2xl hover:scale-[1.02]">
                  <div className="bg-gradient-to-br from-light-blue-100 to-light-blue-200 dark:from-light-blue-800/50 dark:to-light-blue-700/50 p-6 rounded-2xl mb-6 group-hover:scale-110 transition-transform">
                    <service.icon className="h-10 w-10 text-navy-700 dark:text-light-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-light-blue-600 dark:group-hover:text-light-blue-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid - Industrial Style */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-background via-navy-50/50 dark:via-navy-900/40 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              {t("trailersFeaturesTitle")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("trailersFeaturesSubtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white dark:bg-navy-800 p-8 rounded-2xl border-2 border-navy-200 dark:border-navy-700 hover:border-light-blue-400 dark:hover:border-light-blue-500 transition-all duration-300 group hover:shadow-2xl hover:-translate-y-2">
                <div className="bg-gradient-to-br from-light-blue-100 to-light-blue-200 dark:from-light-blue-900/30 dark:to-light-blue-800/30 p-4 rounded-xl mb-4 group-hover:scale-110 transition-transform inline-block">
                  <feature.icon className="h-8 w-8 text-navy-700 dark:text-light-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-light-blue-600 dark:group-hover:text-light-blue-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
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
              {t("trailersCTATitle")}
            </h2>
            <p className="text-xl mb-8 text-white/90">{t("trailersCTADesc")}</p>
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

export default Trailers;
