import { useLanguage } from '@/contexts/LanguageContext';
import ContactForm from '@/components/ContactForm';
import { Droplets, Award, Truck } from 'lucide-react';
import waterImage from '@/assets/water-production.jpg';

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
      nameAr: 'مياه صدق',
    },
    {
      name: t('bakkahWater'),
      nameAr: 'مياه بكه',
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden">
        <img
          src={waterImage}
          alt="Water Production"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-overlay" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-4 text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              {t('waterTitle')}
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto animate-fade-in">
              {t('waterDesc')}
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-2xl shadow-luxury hover:shadow-glow transition-smooth animate-fade-in text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground text-lg">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-20 bg-gradient-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 animate-fade-in">
            {t('ourBrands')}
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="bg-card p-12 rounded-3xl shadow-luxury hover:shadow-glow transition-smooth animate-fade-in text-center group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-5xl font-bold mb-2 group-hover:scale-110 transition-smooth bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {brand.nameAr}
                </div>
                <div className="text-xl text-muted-foreground">{brand.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-card p-12 rounded-3xl shadow-luxury animate-fade-in">
            <h3 className="text-3xl font-bold mb-6 text-center">{t('waterTitle')}</h3>
            <p className="text-lg text-muted-foreground leading-relaxed text-center mb-6">
              {t('waterDesc')}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed text-center">
              نوفر المياه المحلاة بأعلى معايير الجودة والنقاء مباشرة من المصانع إلى عملائنا في جميع أنحاء المملكة.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactForm />
    </div>
  );
};

export default Water;
