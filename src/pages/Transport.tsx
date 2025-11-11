import { useLanguage } from '@/contexts/LanguageContext';
import ContactForm from '@/components/ContactForm';
import { Truck, Package, Clock, MapPin, ArrowRight, Sparkles, TrendingUp, CheckCircle2, Shield, Zap } from 'lucide-react';
import heroImage from '@/assets/hero-logistics.jpg';

const Transport = () => {
  const { t } = useLanguage();

  const partners = [
    t('partnerAramex'),
    t('partnerAmazon'),
    t('partnerNoon'),
    t('partnerNaqel'),
    t('partnerNoonFood'),
    t('partnerToyou'),
    t('partnerJahez'),
    t('partnerHungerStation'),
    t('partnerMrsool'),
  ];

  const features = [
    {
      icon: Truck,
      title: t('ourFleet'),
      description: t('fleetDesc'),
    },
    {
      icon: Package,
      title: t('quality'),
      description: t('integratedLogisticsServices'),
    },
    {
      icon: Clock,
      title: t('speed'),
      description: t('speedDesc'),
    },
    {
      icon: MapPin,
      title: t('coverage'),
      description: t('coverageDesc'),
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section - Enhanced */}
      <section className="relative h-[550px] md:h-[650px] overflow-hidden">
        <img
          src={heroImage}
          alt="Transport & Logistics"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-4 text-center text-white">
            {/* Badge */}
            <div className="mb-6 inline-block animate-fade-in">
              <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 inline-flex items-center gap-2">
                <Truck className="h-4 w-4 text-white" />
                <span className="text-sm font-medium">{t('transportTitle')}</span>
                <TrendingUp className="h-4 w-4 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in leading-tight">
              {t('transportTitle')}
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl max-w-3xl mx-auto animate-fade-in text-white/90 leading-relaxed">
              {t('transportDesc')}
            </p>
          </div>
        </div>
        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Features Banner */}
      <section className="py-12 bg-gradient-to-r from-primary/15 via-primary/10 to-accent/15 border-b border-primary/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center bg-card/80 backdrop-blur-sm p-6 rounded-2xl border border-primary/20 hover:border-primary/40 transition-all group"
              >
                <div className="bg-primary/10 p-4 rounded-xl mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transport Intro - Enhanced Split Layout */}
      <section className="py-24 bg-gradient-to-br from-background via-primary/3 to-background relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-primary mb-4">
                <Truck className="h-5 w-5" />
                <span className="font-semibold text-sm uppercase tracking-wide">{t('transportIntro')}</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                {t('transportIntro')}
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                {t('transportIntroDesc')}
              </p>
              <div className="pt-4 space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-muted-foreground">{t('fleetModernTech')}</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-muted-foreground">{t('strategicPartnerships')}</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-muted-foreground">{t('integratedLogisticsGlobal')}</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-muted-foreground">{t('fullCoverageKingdom')}</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl group">
                <img
                  src={heroImage}
                  alt="Transport & Logistics"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-primary/20 to-transparent" />
                {/* Floating Badge */}
                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg">
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-primary" />
                    <span className="text-sm font-semibold text-foreground">{t('reliableAndSecure')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Timeline - Enhanced */}
      <section className="py-24 bg-gradient-to-br from-primary/12 via-primary/8 to-accent/12 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/10 rounded-full blur-2xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-primary mb-4">
              <Package className="h-5 w-5" />
              <span className="font-semibold text-sm uppercase tracking-wide">{t('ourLogisticsServices')}</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">{t('ourLogisticsServices')}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('comprehensiveLogisticsSolutions')}
            </p>
          </div>
          <div className="max-w-5xl mx-auto space-y-6">
            {/* Parcel Delivery */}
            <div className="relative group">
              <div className="bg-gradient-to-br from-blue-50/50 dark:from-blue-950/30 to-card p-8 md:p-10 rounded-3xl shadow-2xl border-2 border-blue-200/50 dark:border-blue-800/30 hover:border-blue-300 dark:hover:border-blue-700 transition-all">
                <div className="flex items-start gap-6">
                  <div className="bg-blue-100 dark:bg-blue-900/50 p-4 rounded-2xl flex-shrink-0">
                    <Package className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold mb-4">{t('parcelDelivery')}</h3>
                    <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                      {t('parcelDeliveryDesc')}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                        {t('waterFastDelivery')}
                      </span>
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                        {t('instantTracking')}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Food Delivery */}
            <div className="relative group">
              <div className="bg-gradient-to-br from-green-50/50 dark:from-green-950/30 to-card p-8 md:p-10 rounded-3xl shadow-2xl border-2 border-green-200/50 dark:border-green-800/30 hover:border-green-300 dark:hover:border-green-700 transition-all">
                <div className="flex items-start gap-6">
                  <div className="bg-green-100 dark:bg-green-900/50 p-4 rounded-2xl flex-shrink-0">
                    <Zap className="h-8 w-8 text-green-600 dark:text-green-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold mb-4">{t('foodDelivery')}</h3>
                    <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                      {t('foodDeliveryDesc')}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 rounded-full text-sm font-medium">
                        {t('hotDelivery')}
                      </span>
                      <span className="px-3 py-1 bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 rounded-full text-sm font-medium">
                        24/7
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Logistics Solutions */}
            <div className="relative group">
              <div className="bg-gradient-to-br from-purple-50/50 dark:from-purple-950/30 to-card p-8 md:p-10 rounded-3xl shadow-2xl border-2 border-purple-200/50 dark:border-purple-800/30 hover:border-purple-300 dark:hover:border-purple-700 transition-all">
                <div className="flex items-start gap-6">
                  <div className="bg-purple-100 dark:bg-purple-900/50 p-4 rounded-2xl flex-shrink-0">
                    <Truck className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold mb-4">{t('logisticsSolutions')}</h3>
                    <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                      {t('logisticsSolutionsDesc')}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium">
                        {t('customizedSolutions')}
                      </span>
                      <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium">
                        {t('completeManagement')}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section - Enhanced Grid */}
      <section className="py-24 bg-gradient-to-br from-background via-primary/3 to-background relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-primary mb-4">
              <Sparkles className="h-5 w-5" />
              <span className="font-semibold text-sm uppercase tracking-wide">{t('ourPartners')}</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">{t('ourPartners')}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('partnersSubtitle')}
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="relative bg-card p-8 rounded-3xl shadow-luxury hover:shadow-glow transition-all border-2 border-transparent hover:border-primary/40 text-center group overflow-hidden"
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,var(--primary),transparent_70%)]" />
                </div>
                <div className="relative">
                  <div className="mb-4">
                    <div className="bg-primary/10 p-3 rounded-xl inline-block group-hover:scale-110 transition-transform">
                      <Package className="h-6 w-6 text-primary mx-auto" />
                    </div>
                  </div>
                  <div className="text-base md:text-lg font-bold group-hover:text-primary transition-colors">
                    {partner}
                  </div>
                  <div className="mt-4 pt-4 border-t border-primary/10">
                    <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground">
                      <CheckCircle2 className="h-3 w-3" />
                      <span>{t('trustedPartner')}</span>
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
