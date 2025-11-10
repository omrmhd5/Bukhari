import { useLanguage } from '@/contexts/LanguageContext';
import ContactForm from '@/components/ContactForm';
import { Truck, Package, Clock, MapPin } from 'lucide-react';
import heroImage from '@/assets/hero-logistics.jpg';

const Transport = () => {
  const { t } = useLanguage();

  const partners = [
    'أرامكس / Aramex',
    'أمازون / Amazon',
    'نون / Noon',
    'ناقل / Naqel',
    'نون فود / Noon Food',
    'تويو / Toyou',
    'جاهز / Jahez',
    'هنقرستيشن / HungerStation',
    'مرسول / Mrsool',
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
      description: 'خدمات لوجستية متكاملة',
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
      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden">
        <img
          src={heroImage}
          alt="Transport & Logistics"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-overlay" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-4 text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              {t('transportTitle')}
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto animate-fade-in">
              {t('transportDesc')}
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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

      {/* Partners Section */}
      <section className="py-20 bg-gradient-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 animate-fade-in">
            {t('ourPartners')}
          </h2>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-2xl shadow-luxury hover:shadow-glow transition-smooth animate-fade-in text-center group"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="text-xl font-semibold group-hover:text-primary transition-smooth">
                  {partner}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-card p-12 rounded-3xl shadow-luxury animate-fade-in">
            <h3 className="text-3xl font-bold mb-6 text-center">{t('transportTitle')}</h3>
            <p className="text-lg text-muted-foreground leading-relaxed text-center mb-6">
              نمتلك أسطولاً حديثاً من المركبات المجهزة بأحدث التقنيات لتلبية احتياجات النقل والخدمات اللوجستية.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed text-center">
              نتعاون مع كبرى الشركات في المملكة لتوفير حلول لوجستية متكاملة تتميز بالسرعة والدقة والاحترافية.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactForm />
    </div>
  );
};

export default Transport;
