import { useLanguage } from '@/contexts/LanguageContext';
import ContactForm from '@/components/ContactForm';
import { Droplets, Award, Truck, CheckCircle2, Sparkles, Factory } from 'lucide-react';
// Image is in public/assets/ folder
const waterImage = '/assets/water-production.jpg';

const Water = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Droplets,
      title: t('purity'),
      description: t('purityDesc'),
    },
    {
      icon: Award,
      title: t('quality'),
      description: t('qualityDesc'),
    },
    {
      icon: Truck,
      title: t('reliability'),
      description: t('reliabilityDesc'),
    },
  ];

  const brands = [
    {
      name: t('sidqWater'),
      nameAr: t('sidqWater'),
    },
    {
      name: t('bakkahWater'),
      nameAr: t('bakkahWater'),
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section with Enhanced Design */}
      <section className="relative h-[550px] md:h-[650px] overflow-hidden">
        <img
          src={waterImage}
          alt="Water Production"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-4 text-center text-white">
            <div className="mb-6 inline-block">
              <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 inline-flex items-center gap-2">
                <Droplets className="h-5 w-5 text-white" />
                <span className="text-sm font-medium">{t('waterTitle')}</span>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              {t('waterTitle')}
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto animate-fade-in text-white/90 leading-relaxed">
              {t('waterDesc')}
            </p>
          </div>
        </div>
        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Features Banner */}
      <section className="py-12 bg-gradient-to-r from-primary/15 via-primary/10 to-accent/15 border-b border-primary/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-card/80 backdrop-blur-sm p-6 rounded-2xl border border-primary/20 hover:border-primary/40 transition-all group"
              >
                <div className="bg-primary/10 p-4 rounded-xl group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Water Production - Enhanced Split Layout */}
      <section className="py-24 bg-gradient-to-br from-background via-primary/3 to-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-primary mb-4">
                <Factory className="h-5 w-5" />
                <span className="font-semibold text-sm uppercase tracking-wide">{t('waterProductionLabel')}</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                {t('waterProductionTitle')}
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                {t('waterProductionDesc')}
              </p>
              <div className="pt-4 space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-muted-foreground">{t('directDistribution')}</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-muted-foreground">{t('allSizesAvailable')}</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-muted-foreground">{t('fastReliableDelivery')}</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl group">
                <img
                  src={waterImage}
                  alt="Water Production"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-primary/20 to-transparent" />
                {/* Floating Badge */}
                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg">
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-primary" />
                    <span className="text-sm font-semibold text-foreground">{t('globalQualityBadge')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Section - Enhanced Cards */}
      <section className="py-24 bg-gradient-to-br from-primary/12 via-primary/8 to-accent/12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{t('ourBrands')}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('brandsSubtitle')}
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="relative bg-card p-10 rounded-3xl shadow-luxury hover:bg-card/80 transition-all border-2 border-transparent hover:border-primary/40 group overflow-hidden"
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,var(--primary),transparent_70%)]" />
                </div>
                <div className="relative text-center">
                  <div className="mb-6">
                    <Droplets className="h-16 w-16 text-primary mx-auto opacity-20 group-hover:opacity-30 transition-opacity" />
                  </div>
                  <div className="text-5xl md:text-6xl font-bold mb-4 group-hover:scale-110 transition-transform bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                    {brand.nameAr}
                  </div>
                  <div className="text-xl text-muted-foreground font-medium">{brand.name}</div>
                  <div className="mt-6 pt-6 border-t border-primary/10">
                    <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                      <Award className="h-4 w-4" />
                      <span>{t('certifiedBrand')}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Water Quality & Delivery - Enhanced Cards */}
      <section className="py-24 bg-gradient-to-br from-background via-primary/3 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{t('qualityAndDelivery')}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('qualitySubtitle')}
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="relative bg-gradient-to-br from-blue-50/50 dark:from-blue-950/30 to-card p-10 rounded-3xl shadow-luxury border-2 border-blue-200/50 dark:border-blue-800/30 hover:border-blue-300 dark:hover:border-blue-700 transition-all group">
              <div className="absolute top-6 right-6">
                <div className="bg-blue-100 dark:bg-blue-900/50 p-3 rounded-xl">
                  <Award className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
              </div>
              <h3 className="text-3xl font-bold mb-4 mt-4">{t('waterQuality')}</h3>
              <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                {t('waterQualityDesc')}
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                  {t('globalStandards')}
                </span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                  {t('preciseTests')}
                </span>
              </div>
            </div>
            <div className="relative bg-gradient-to-br from-green-50/50 dark:from-green-950/30 to-card p-10 rounded-3xl shadow-luxury border-2 border-green-200/50 dark:border-green-800/30 hover:border-green-300 dark:hover:border-green-700 transition-all group">
              <div className="absolute top-6 right-6">
                <div className="bg-green-100 dark:bg-green-900/50 p-3 rounded-xl">
                  <Truck className="h-8 w-8 text-green-600 dark:text-green-400" />
                </div>
              </div>
              <h3 className="text-3xl font-bold mb-4 mt-4">{t('waterDelivery')}</h3>
              <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                {t('waterDeliveryDesc')}
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 rounded-full text-sm font-medium">
                  {t('waterFastDelivery')}
                </span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 rounded-full text-sm font-medium">
                  {t('waterFullCoverage')}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Flow Section */}
      <section className="py-24 bg-gradient-to-br from-primary/12 via-primary/8 to-accent/12">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">{t('productionProcess')}</h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="bg-card p-6 rounded-2xl shadow-luxury mb-4 inline-block">
                <div className="bg-primary/10 p-4 rounded-xl mb-4">
                  <Factory className="h-8 w-8 text-primary mx-auto" />
                </div>
                <div className="text-2xl font-bold text-primary mb-2">01</div>
                <h3 className="font-semibold mb-2">{t('productionStep')}</h3>
                <p className="text-sm text-muted-foreground">{t('productionStepDesc')}</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-card p-6 rounded-2xl shadow-luxury mb-4 inline-block">
                <div className="bg-primary/10 p-4 rounded-xl mb-4">
                  <Award className="h-8 w-8 text-primary mx-auto" />
                </div>
                <div className="text-2xl font-bold text-primary mb-2">02</div>
                <h3 className="font-semibold mb-2">{t('inspectionStep')}</h3>
                <p className="text-sm text-muted-foreground">{t('inspectionStepDesc')}</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-card p-6 rounded-2xl shadow-luxury mb-4 inline-block">
                <div className="bg-primary/10 p-4 rounded-xl mb-4">
                  <Truck className="h-8 w-8 text-primary mx-auto" />
                </div>
                <div className="text-2xl font-bold text-primary mb-2">03</div>
                <h3 className="font-semibold mb-2">{t('distributionStep')}</h3>
                <p className="text-sm text-muted-foreground">{t('distributionStepDesc')}</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-card p-6 rounded-2xl shadow-luxury mb-4 inline-block">
                <div className="bg-primary/10 p-4 rounded-xl mb-4">
                  <CheckCircle2 className="h-8 w-8 text-primary mx-auto" />
                </div>
                <div className="text-2xl font-bold text-primary mb-2">04</div>
                <h3 className="font-semibold mb-2">{t('deliveryStep')}</h3>
                <p className="text-sm text-muted-foreground">{t('deliveryStepDesc')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactForm />
    </div>
  );
};

export default Water;
