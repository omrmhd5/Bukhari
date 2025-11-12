import { useLanguage } from '@/contexts/LanguageContext';
import ContactForm from '@/components/ContactForm';
import { Car, Truck, Clock, CheckCircle } from 'lucide-react';
// Image is in public/assets/ folder
const rentalImage = '/assets/car-rental.jpg';

const CarRental = () => {
  const { t } = useLanguage();

  const vehicleTypes = [
    {
      icon: Car,
      title: t('smallVehicles'),
      description: t('smallVehiclesDesc'),
    },
    {
      icon: Truck,
      title: t('largeVehicles'),
      description: t('largeVehiclesDesc'),
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

      {/* Rental Intro - Split Layout */}
      <section className="py-20 bg-gradient-to-br from-background via-primary/3 to-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">{t('rentalIntro')}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {t('rentalIntroDesc')}
              </p>
              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-card/50 p-4 rounded-xl border border-primary/20"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="bg-primary/10 p-2 rounded-lg">
                        <feature.icon className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="font-bold text-sm">{feature.title}</h3>
                    </div>
                    <p className="text-xs text-muted-foreground">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-luxury">
                <img
                  src={rentalImage}
                  alt="Car Rental"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicle Types - Showcase Cards */}
      <section className="py-20 bg-gradient-to-br from-primary/12 via-primary/8 to-accent/12">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">{t('vehicleTypes')}</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {vehicleTypes.map((type, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-2xl shadow-luxury hover:bg-card/80 transition-all border-2 border-transparent hover:border-primary/30 group"
              >
                <div className="flex items-start gap-6">
                  <div className="bg-primary/10 p-4 rounded-xl group-hover:scale-110 transition-transform">
                    <type.icon className="h-12 w-12 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3">{type.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {type.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vehicle Details - Side by Side */}
      <section className="py-20 bg-gradient-to-br from-background via-primary/3 to-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">{t('vehicleDetails')}</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-card to-card/80 p-8 rounded-2xl shadow-luxury border-l-4 border-primary">
              <h3 className="text-2xl font-bold mb-4">{t('smallVehicles')}</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {t('smallVehiclesDesc')}
              </p>
              <div className="flex items-center gap-2 text-primary">
                <Car className="h-5 w-5" />
                <span className="text-sm font-semibold">{t('availableNow')}</span>
              </div>
            </div>
            <div className="bg-gradient-to-br from-card to-card/80 p-8 rounded-2xl shadow-luxury border-l-4 border-accent">
              <h3 className="text-2xl font-bold mb-4">{t('largeVehicles')}</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {t('largeVehiclesDesc')}
              </p>
              <div className="flex items-center gap-2 text-accent">
                <Truck className="h-5 w-5" />
                <span className="text-sm font-semibold">{t('availableNow')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rental Benefits - Compact Grid */}
      <section className="py-20 bg-gradient-to-br from-primary/12 via-primary/8 to-accent/12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">{t('rentalBenefits')}</h2>
            <div className="bg-card p-8 rounded-2xl shadow-luxury">
              <p className="text-lg text-muted-foreground leading-relaxed text-center">
                {t('rentalBenefitsDesc')}
              </p>
            </div>
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
            {t('contactUsForBestOffers')}
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <ContactForm />
    </div>
  );
};

export default CarRental;
