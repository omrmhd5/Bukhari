import { useLanguage } from '@/contexts/LanguageContext';
import ContactForm from '@/components/ContactForm';
import { Bus, Shield, Heart, Star } from 'lucide-react';
import busesImage from '@/assets/buses.jpg';

const Buses = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Star,
      title: t('hajjUmrah'),
      description: 'خدمات نقل مريحة وآمنة للحجاج والمعتمرين',
    },
    {
      icon: Bus,
      title: t('tourism'),
      description: 'باصات فاخرة للسياحة الداخلية',
    },
    {
      icon: Shield,
      title: t('trailers'),
      description: 'تريلات للمقاولات ونقل البضائع',
    },
  ];

  const features = [
    {
      icon: Shield,
      title: t('safety'),
      description: t('safetyDesc'),
    },
    {
      icon: Heart,
      title: t('comfort'),
      description: t('comfortDesc'),
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden">
        <img
          src={busesImage}
          alt="Buses & Trailers"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-overlay" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-4 text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              {t('busesTitle')}
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto animate-fade-in">
              {t('busesDesc')}
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-2xl shadow-luxury hover:shadow-glow transition-smooth animate-fade-in text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <service.icon className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground text-lg">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-card p-12 rounded-3xl shadow-luxury hover:shadow-glow transition-smooth animate-fade-in text-center"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="bg-primary/10 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-3xl font-bold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground text-xl">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-card p-12 rounded-3xl shadow-luxury animate-fade-in">
            <h3 className="text-3xl font-bold mb-6 text-center">{t('busesTitle')}</h3>
            <p className="text-lg text-muted-foreground leading-relaxed text-center mb-6">
              نوفر باصات فاخرة ومجهزة بأعلى معايير الراحة والأمان لخدمات الحج والعمرة والسياحة الداخلية في المملكة.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed text-center">
              كما نوفر تريلات للمقاولات ونقل البضائع بكفاءة عالية واحترافية متميزة.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactForm />
    </div>
  );
};

export default Buses;
