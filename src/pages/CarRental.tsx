import { useLanguage } from '@/contexts/LanguageContext';
import ContactForm from '@/components/ContactForm';
import { Car, Truck, Clock, CheckCircle } from 'lucide-react';
import rentalImage from '@/assets/car-rental.jpg';

const CarRental = () => {
  const { t } = useLanguage();

  const vehicleTypes = [
    {
      icon: Car,
      title: t('smallVehicles'),
      description: 'سيارات صغيرة للأفراد والشركات',
    },
    {
      icon: Truck,
      title: t('largeVehicles'),
      description: 'مركبات كبيرة للخدمات اللوجستية',
    },
  ];

  const features = [
    {
      icon: CheckCircle,
      title: t('flexibility'),
      description: t('flexibilityDesc'),
    },
    {
      icon: Clock,
      title: t('availability'),
      description: t('availabilityDesc'),
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden">
        <img
          src={rentalImage}
          alt="Car Rental"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-overlay" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-4 text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              {t('rentalTitle')}
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto animate-fade-in">
              {t('rentalDesc')}
            </p>
          </div>
        </div>
      </section>

      {/* Vehicle Types Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {vehicleTypes.map((type, index) => (
              <div
                key={index}
                className="bg-card p-12 rounded-3xl shadow-luxury hover:shadow-glow transition-smooth animate-fade-in text-center"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="bg-primary/10 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                  <type.icon className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-3xl font-bold mb-4">{type.title}</h3>
                <p className="text-muted-foreground text-xl">{type.description}</p>
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

      {/* Description Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-card p-12 rounded-3xl shadow-luxury animate-fade-in">
            <h3 className="text-3xl font-bold mb-6 text-center">{t('rentalTitle')}</h3>
            <p className="text-lg text-muted-foreground leading-relaxed text-center mb-6">
              نوفر جميع أنواع السيارات والمركبات (صغيرة وكبيرة) لتلبية احتياجات الشركات اللوجستية والعملاء الأفراد.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed text-center">
              تتميز خدماتنا بالمرونة والتوفر على مدار الساعة لضمان راحة عملائنا.
            </p>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-20 gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 animate-fade-in">
            {t('bookNow')}
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto animate-fade-in">
            تواصل معنا الآن للحصول على أفضل العروض
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <ContactForm />
    </div>
  );
};

export default CarRental;
