import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/contexts/LanguageContext";
import { toast } from "sonner";
import { Phone, Mail, MessageCircle } from "lucide-react";

const ContactForm = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend
    toast.success(t("send") + " ✓");
    setFormData({ name: "", email: "", message: "" });
  };

  const openWhatsApp = () => {
    window.open("https://wa.me/966500000000", "_blank");
  };

  return (
    <section className="py-20 bg-gradient-secondary relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-mesh opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            {t("contactTitle")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("contactSubtitle") || "Get in touch with us for any inquiries"}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6 animate-fade-in">
            <div className="bg-card p-6 rounded-2xl shadow-luxury transition-all duration-300 hover:bg-card/80 hover:scale-[1.02] border border-transparent hover:border-primary/20 group">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-4 rounded-full group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{t("phone")}</h3>
                  <a
                    href="tel:+966500000000"
                    className="text-accent hover:text-primary transition-colors duration-300 hover:underline">
                    +966 50 000 0000
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-2xl shadow-luxury transition-all duration-300 hover:bg-card/80 hover:scale-[1.02] border border-transparent hover:border-primary/20 group">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-4 rounded-full group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{t("email")}</h3>
                  <a
                    href="mailto:info@bukhari.sa"
                    className="text-accent hover:text-primary transition-colors duration-300 hover:underline">
                    info@bukhari.sa
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-2xl shadow-luxury transition-all duration-300 hover:bg-card/80 hover:scale-[1.02] border border-transparent hover:border-primary/20 group">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-4 rounded-full group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <MessageCircle className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">
                    {t("whatsapp")}
                  </h3>
                  <Button
                    onClick={openWhatsApp}
                    variant="link"
                    className="p-0 h-auto text-accent hover:text-primary transition-colors duration-300 hover:underline">
                    {t("whatsapp")}
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-card p-8 rounded-2xl shadow-luxury animate-fade-in border border-transparent hover:border-primary/20 transition-all duration-300">
            <div className="space-y-6">
              <div>
                <Input
                  placeholder={t("name")}
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="rounded-xl transition-all duration-300 focus:ring-2 focus:ring-primary/50"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder={t("email")}
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="rounded-xl transition-all duration-300 focus:ring-2 focus:ring-primary/50"
                />
              </div>
              <div>
                <Textarea
                  placeholder={t("message")}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  rows={6}
                  className="rounded-xl transition-all duration-300 focus:ring-2 focus:ring-primary/50"
                />
              </div>
              <Button
                type="submit"
                className="w-full rounded-xl transition-all duration-300 hover:scale-[1.02] hover:bg-primary/90">
                {t("send")}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
