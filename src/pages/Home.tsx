import { useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import ContactForm from '@/components/ContactForm';
import { ChevronLeft, ChevronRight, Award, Clock, Star, MapPin } from 'lucide-react';
import heroImage from '@/assets/hero-logistics.jpg';
import waterImage from '@/assets/water-production.jpg';
import busesImage from '@/assets/buses.jpg';
import rentalImage from '@/assets/car-rental.jpg';

const Home = () => {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { image: heroImage, alt: 'Logistics Fleet' },
    { image: waterImage, alt: 'Water Production' },
    { image: busesImage, alt: 'Buses' },
    { image: rentalImage, alt: 'Car Rental' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const values = [
    {
      icon: Award,
      title: t('trust'),
      description: t('trustDesc'),
    },
    {
      icon: Clock,
      title: t('speed'),
      description: t('speedDesc'),
    },
    {
      icon: Star,
      title: t('quality'),
      description: t('qualityDesc'),
    },
    {
      icon: MapPin,
      title: t('coverage'),
      description: t('coverageDesc'),
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section with Carousel */}
      <section className="relative h-[600px] md:h-[700px] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 gradient-overlay" />
          </div>
        ))}

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-4 text-center text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in">
              {t('heroTitle')}
            </h1>
            <p className="text-2xl md:text-3xl mb-6 animate-fade-in font-semibold">
              {t('heroSubtitle')}
            </p>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto animate-fade-in">
              {t('heroDescription')}
            </p>
            <Link to="/transport">
              <Button size="lg" className="rounded-full px-8 shadow-glow animate-fade-in">
                {t('contact')}
              </Button>
            </Link>
          </div>
        </div>

        {/* Carousel Controls */}
        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm p-3 rounded-full transition-smooth"
        >
          <ChevronLeft className="h-6 w-6 text-white" />
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm p-3 rounded-full transition-smooth"
        >
          <ChevronRight className="h-6 w-6 text-white" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-smooth ${
                index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 animate-fade-in">
            {t('ourValues')}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-2xl shadow-luxury hover:shadow-glow transition-smooth animate-fade-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <Link to="/water" className="group">
              <div className="relative h-80 rounded-3xl overflow-hidden shadow-luxury hover:shadow-glow transition-smooth">
                <img
                  src={waterImage}
                  alt="Water Production"
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-80" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-3xl font-bold text-white mb-2">{t('water')}</h3>
                </div>
              </div>
            </Link>

            <Link to="/buses" className="group">
              <div className="relative h-80 rounded-3xl overflow-hidden shadow-luxury hover:shadow-glow transition-smooth">
                <img
                  src={busesImage}
                  alt="Buses"
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-80" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-3xl font-bold text-white mb-2">{t('buses')}</h3>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactForm />
    </div>
  );
};

export default Home;
