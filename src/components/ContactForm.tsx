import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/contexts/LanguageContext";
import { toast } from "sonner";
import { Phone, Mail, MessageCircle, Send, Sparkles } from "lucide-react";

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
    <section className="py-12 md:py-20 lg:py-28 bg-gradient-to-br from-navy-100/50 via-white to-navy-50/40 dark:from-navy-900/40 dark:via-light-blue-900/20 dark:to-navy-900/40 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-navy-200/20 dark:bg-navy-700/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-light-blue-200/20 dark:bg-light-blue-700/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 text-navy-800 dark:text-white">
            {t("contactTitle")}
          </h2>
          <p className="text-base md:text-lg text-navy-600 dark:text-navy-300 max-w-2xl mx-auto px-4">
            {t("contactSubtitle") || "Get in touch with us for any inquiries"}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-navy-800 p-5 md:p-6 rounded-2xl shadow-xl border-2 border-navy-100 dark:border-navy-700 hover:border-light-blue-400/60 dark:hover:border-light-blue-500/60 transition-all duration-300 hover:scale-[1.02] group">
              <div className="flex items-center gap-4">
                <div className="bg-gradient-to-br from-light-blue-100 to-light-blue-200 dark:from-light-blue-800/50 dark:to-light-blue-700/50 p-4 rounded-xl border border-light-blue-200/50 dark:border-light-blue-700/30 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="h-6 w-6 text-navy-700 dark:text-light-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1 text-navy-800 dark:text-white">
                    {t("phone")}
                  </h3>
                  <a
                    href="tel:+966500000000"
                    className="text-navy-600 dark:text-navy-300 hover:text-light-blue-600 dark:hover:text-light-blue-400 transition-colors duration-300 hover:underline">
                    +966 50 000 0000
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-navy-800 p-5 md:p-6 rounded-2xl shadow-xl border-2 border-navy-100 dark:border-navy-700 hover:border-light-blue-400/60 dark:hover:border-light-blue-500/60 transition-all duration-300 hover:scale-[1.02] group">
              <div className="flex items-center gap-4">
                <div className="bg-gradient-to-br from-light-blue-100 to-light-blue-200 dark:from-light-blue-800/50 dark:to-light-blue-700/50 p-4 rounded-xl border border-light-blue-200/50 dark:border-light-blue-700/30 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="h-6 w-6 text-navy-700 dark:text-light-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1 text-navy-800 dark:text-white">
                    {t("email")}
                  </h3>
                  <a
                    href="mailto:info@bukhari.sa"
                    className="text-navy-600 dark:text-navy-300 hover:text-light-blue-600 dark:hover:text-light-blue-400 transition-colors duration-300 hover:underline">
                    info@bukhari.sa
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-navy-800 p-5 md:p-6 rounded-2xl shadow-xl border-2 border-navy-100 dark:border-navy-700 hover:border-light-blue-400/60 dark:hover:border-light-blue-500/60 transition-all duration-300 hover:scale-[1.02] group">
              <div className="flex items-center gap-4">
                <div className="bg-gradient-to-br from-light-blue-100 to-light-blue-200 dark:from-light-blue-800/50 dark:to-light-blue-700/50 p-4 rounded-xl border border-light-blue-200/50 dark:border-light-blue-700/30 group-hover:scale-110 transition-transform duration-300">
                  <MessageCircle className="h-6 w-6 text-navy-700 dark:text-light-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1 text-navy-800 dark:text-white">
                    {t("whatsapp")}
                  </h3>
                  <button
                    onClick={openWhatsApp}
                    className="text-navy-600 dark:text-navy-300 hover:text-light-blue-600 dark:hover:text-light-blue-400 transition-colors duration-300 hover:underline text-left">
                    {t("whatsapp")}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white dark:bg-navy-800 p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-2xl border-2 border-navy-100 dark:border-navy-700 hover:border-light-blue-400/60 dark:hover:border-light-blue-500/60 transition-all duration-300">
            <div className="space-y-6">
              <div>
                <Input
                  placeholder={t("name")}
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="rounded-xl border-2 border-navy-100 dark:border-navy-700 focus:border-light-blue-400 dark:focus:border-light-blue-500 transition-all duration-300 bg-white dark:bg-navy-900 text-navy-800 dark:text-white placeholder:text-navy-400 dark:placeholder:text-navy-500"
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
                  className="rounded-xl border-2 border-navy-100 dark:border-navy-700 focus:border-light-blue-400 dark:focus:border-light-blue-500 transition-all duration-300 bg-white dark:bg-navy-900 text-navy-800 dark:text-white placeholder:text-navy-400 dark:placeholder:text-navy-500"
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
                  className="rounded-xl border-2 border-navy-100 dark:border-navy-700 focus:border-light-blue-400 dark:focus:border-light-blue-500 transition-all duration-300 bg-white dark:bg-navy-900 text-navy-800 dark:text-white placeholder:text-navy-400 dark:placeholder:text-navy-500 resize-none"
                />
              </div>
              <Button
                type="submit"
                className="w-full rounded-xl bg-gradient-to-r from-light-blue-500 to-light-blue-600 hover:from-light-blue-600 hover:to-light-blue-700 dark:from-light-blue-600 dark:to-light-blue-700 dark:hover:from-light-blue-500 dark:hover:to-light-blue-600 text-white font-semibold py-6 transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                <Send className="h-5 w-5" />
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
