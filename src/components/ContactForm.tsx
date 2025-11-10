import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useLanguage } from '@/contexts/LanguageContext';
import { toast } from 'sonner';
import { Phone, Mail, MessageCircle } from 'lucide-react';

const ContactForm = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend
    toast.success(t('send') + ' ✓');
    setFormData({ name: '', email: '', message: '' });
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/966500000000', '_blank');
  };

  return (
    <section className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 animate-fade-in">{t('contactTitle')}</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6 animate-fade-in">
            <div className="bg-card p-6 rounded-2xl shadow-luxury transition-smooth hover:shadow-glow">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-4 rounded-full">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{t('phone')}</h3>
                  <a href="tel:+966500000000" className="text-accent hover:underline">
                    +966 50 000 0000
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-2xl shadow-luxury transition-smooth hover:shadow-glow">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-4 rounded-full">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{t('email')}</h3>
                  <a href="mailto:info@bukhari.sa" className="text-accent hover:underline">
                    info@bukhari.sa
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-2xl shadow-luxury transition-smooth hover:shadow-glow">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-4 rounded-full">
                  <MessageCircle className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{t('whatsapp')}</h3>
                  <Button
                    onClick={openWhatsApp}
                    variant="link"
                    className="p-0 h-auto text-accent hover:underline"
                  >
                    {t('whatsapp')}
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="bg-card p-8 rounded-2xl shadow-luxury animate-fade-in">
            <div className="space-y-6">
              <div>
                <Input
                  placeholder={t('name')}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="rounded-xl"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder={t('email')}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="rounded-xl"
                />
              </div>
              <div>
                <Textarea
                  placeholder={t('message')}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={6}
                  className="rounded-xl"
                />
              </div>
              <Button type="submit" className="w-full rounded-xl shadow-glow">
                {t('send')}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
