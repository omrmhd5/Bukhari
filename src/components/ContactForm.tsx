import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useLanguage } from "@/contexts/LanguageContext";
import { toast } from "sonner";
import { Phone, Mail, MessageCircle, Send, Sparkles, User, MessageSquare, Briefcase, Building2, FileText } from "lucide-react";

type ContactType = "employee" | "company" | "quote";

const ContactForm = () => {
  const { t, language } = useLanguage();
  const [contactType, setContactType] = useState<ContactType>("company");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    position: "",
    message: "",
    registrationNumber: "",
    taxNumber: "",
    selectedService: "",
  });

  const services = [
    t("waterTitle"),
    t("transportTitle"),
    t("busesTitle"),
    t("carRentalTitle"),
    t("logisticsManagementTitle"),
    t("digitalMarketingTitle"),
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend
    const successMessage = 
      contactType === "employee" 
        ? t("contactEmployeeSuccess")
        : contactType === "quote"
        ? t("contactQuoteSuccess")
        : t("contactCompanySuccess");
    toast.success(successMessage + " ✓");
    setFormData({ 
      name: "", 
      email: "", 
      phone: "",
      company: "",
      position: "",
      message: "",
      registrationNumber: "",
      taxNumber: "",
      selectedService: "",
    });
  };

  const openWhatsApp = () => {
    window.open("https://wa.me/966564431326", "_blank");
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
                    href="tel:+966564431326"
                    dir="ltr"
                    className="text-navy-600 dark:text-navy-300 hover:text-light-blue-600 dark:hover:text-light-blue-400 transition-colors duration-300 hover:underline inline-block">
                    +966 56 443 1326
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
                    href="mailto:info@logistics-as.com"
                    className="text-navy-600 dark:text-navy-300 hover:text-light-blue-600 dark:hover:text-light-blue-400 transition-colors duration-300 hover:underline">
                    info@logistics-as.com
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
                  <a
                    href="https://wa.me/966564431326"
                    target="_blank"
                    rel="noopener noreferrer"
                    dir="ltr"
                    className="text-navy-600 dark:text-navy-300 hover:text-light-blue-600 dark:hover:text-light-blue-400 transition-colors duration-300 hover:underline inline-block">
                    +966 56 443 1326
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white dark:bg-navy-800 p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-2xl border-2 border-navy-100 dark:border-navy-700 hover:border-light-blue-400/60 dark:hover:border-light-blue-500/60 transition-all duration-300">
            {/* Contact Type Selector */}
            <div className="mb-6">
              <div className="grid grid-cols-3 gap-3 p-1 bg-navy-100/50 dark:bg-navy-700/30 rounded-xl">
                <button
                  type="button"
                  onClick={() => setContactType("company")}
                  className={`flex items-center justify-center gap-2 px-3 py-3 rounded-lg font-semibold transition-all duration-300 text-sm ${
                    contactType === "company"
                      ? "bg-light-blue-500 text-white shadow-lg"
                      : "text-navy-600 dark:text-navy-300 hover:bg-navy-200/50 dark:hover:bg-navy-600/50"
                  }`}>
                  <Building2 className="h-4 w-4" />
                  <span className="hidden sm:inline">{t("contactCompany")}</span>
                </button>
                <button
                  type="button"
                  onClick={() => setContactType("employee")}
                  className={`flex items-center justify-center gap-2 px-3 py-3 rounded-lg font-semibold transition-all duration-300 text-sm ${
                    contactType === "employee"
                      ? "bg-light-blue-500 text-white shadow-lg"
                      : "text-navy-600 dark:text-navy-300 hover:bg-navy-200/50 dark:hover:bg-navy-600/50"
                  }`}>
                  <Briefcase className="h-4 w-4" />
                  <span className="hidden sm:inline">{t("contactEmployee")}</span>
                </button>
                <button
                  type="button"
                  onClick={() => setContactType("quote")}
                  className={`flex items-center justify-center gap-2 px-3 py-3 rounded-lg font-semibold transition-all duration-300 text-sm ${
                    contactType === "quote"
                      ? "bg-light-blue-500 text-white shadow-lg"
                      : "text-navy-600 dark:text-navy-300 hover:bg-navy-200/50 dark:hover:bg-navy-600/50"
                  }`}>
                  <FileText className="h-4 w-4" />
                  <span className="hidden sm:inline">{t("contactQuote")}</span>
                </button>
              </div>
              <p className="text-sm text-navy-500 dark:text-navy-400 mt-3 text-center">
                {contactType === "company" 
                  ? t("contactCompanyDesc") 
                  : contactType === "quote"
                  ? t("contactQuoteDesc")
                  : t("contactEmployeeDesc")}
              </p>
            </div>

            <div className="space-y-6">
              <div className="relative">
                <div className="absolute right-3 top-1/2 -translate-y-1/2 z-10">
                  <User className="h-5 w-5 text-navy-400 dark:text-navy-500" />
                </div>
                <Input
                  placeholder={t("name")}
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="rounded-xl border-2 border-navy-100 dark:border-navy-700 focus:border-light-blue-400 dark:focus:border-light-blue-500 transition-all duration-300 bg-white dark:bg-navy-900 text-navy-800 dark:text-white placeholder:text-navy-400 dark:placeholder:text-navy-500 pr-10 text-right"
                />
              </div>
              
              <div className="relative">
                <div className="absolute right-3 top-1/2 -translate-y-1/2 z-10">
                  <Mail className="h-5 w-5 text-navy-400 dark:text-navy-500" />
                </div>
                <Input
                  type="email"
                  placeholder={t("email")}
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="rounded-xl border-2 border-navy-100 dark:border-navy-700 focus:border-light-blue-400 dark:focus:border-light-blue-500 transition-all duration-300 bg-white dark:bg-navy-900 text-navy-800 dark:text-white placeholder:text-navy-400 dark:placeholder:text-navy-500 pr-10 text-right"
                />
              </div>

              <div className="relative">
                <div className="absolute right-3 top-1/2 -translate-y-1/2 z-10">
                  <Phone className="h-5 w-5 text-navy-400 dark:text-navy-500" />
                </div>
                <Input
                  type="tel"
                  placeholder={t("phone")}
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  required
                  className="rounded-xl border-2 border-navy-100 dark:border-navy-700 focus:border-light-blue-400 dark:focus:border-light-blue-500 transition-all duration-300 bg-white dark:bg-navy-900 text-navy-800 dark:text-white placeholder:text-navy-400 dark:placeholder:text-navy-500 pr-10 text-right"
                />
              </div>

              {contactType === "company" && (
                <>
                  <div className="relative">
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 z-10">
                      <Building2 className="h-5 w-5 text-navy-400 dark:text-navy-500" />
                    </div>
                    <Input
                      placeholder={t("companyName")}
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      required
                      className="rounded-xl border-2 border-navy-100 dark:border-navy-700 focus:border-light-blue-400 dark:focus:border-light-blue-500 transition-all duration-300 bg-white dark:bg-navy-900 text-navy-800 dark:text-white placeholder:text-navy-400 dark:placeholder:text-navy-500 pr-10 text-right"
                    />
                  </div>
                </>
              )}

              {contactType === "quote" && (
                <>
                  <div className="relative">
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 z-10">
                      <Building2 className="h-5 w-5 text-navy-400 dark:text-navy-500" />
                    </div>
                    <Input
                      placeholder={t("companyName")}
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      required
                      className="rounded-xl border-2 border-navy-100 dark:border-navy-700 focus:border-light-blue-400 dark:focus:border-light-blue-500 transition-all duration-300 bg-white dark:bg-navy-900 text-navy-800 dark:text-white placeholder:text-navy-400 dark:placeholder:text-navy-500 pr-10 text-right"
                    />
                  </div>
                  <div className="relative">
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 z-10">
                      <FileText className="h-5 w-5 text-navy-400 dark:text-navy-500" />
                    </div>
                    <Input
                      placeholder={t("registrationNumber")}
                      value={formData.registrationNumber}
                      onChange={(e) =>
                        setFormData({ ...formData, registrationNumber: e.target.value })
                      }
                      required
                      className="rounded-xl border-2 border-navy-100 dark:border-navy-700 focus:border-light-blue-400 dark:focus:border-light-blue-500 transition-all duration-300 bg-white dark:bg-navy-900 text-navy-800 dark:text-white placeholder:text-navy-400 dark:placeholder:text-navy-500 pr-10 text-right"
                    />
                  </div>
                  <div className="relative">
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 z-10">
                      <FileText className="h-5 w-5 text-navy-400 dark:text-navy-500" />
                    </div>
                    <Input
                      placeholder={t("taxNumber")}
                      value={formData.taxNumber}
                      onChange={(e) =>
                        setFormData({ ...formData, taxNumber: e.target.value })
                      }
                      required
                      className="rounded-xl border-2 border-navy-100 dark:border-navy-700 focus:border-light-blue-400 dark:focus:border-light-blue-500 transition-all duration-300 bg-white dark:bg-navy-900 text-navy-800 dark:text-white placeholder:text-navy-400 dark:placeholder:text-navy-500 pr-10 text-right"
                    />
                  </div>
                  <div className="relative">
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 z-10 pointer-events-none">
                      <FileText className="h-5 w-5 text-navy-400 dark:text-navy-500" />
                    </div>
                    <Select
                      value={formData.selectedService}
                      onValueChange={(value) =>
                        setFormData({ ...formData, selectedService: value })
                      }
                      required>
                      <SelectTrigger className="rounded-xl border-2 border-navy-100 dark:border-navy-700 focus:border-light-blue-400 dark:focus:border-light-blue-500 transition-all duration-300 bg-white dark:bg-navy-900 text-navy-800 dark:text-white pr-10 text-right">
                        <SelectValue placeholder={t("selectService")} />
                      </SelectTrigger>
                      <SelectContent className="bg-white dark:bg-navy-800 border-2 border-navy-100 dark:border-navy-700">
                        {services.map((service, index) => (
                          <SelectItem key={index} value={service} className="text-navy-800 dark:text-white focus:bg-light-blue-100 dark:focus:bg-light-blue-900/30">
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </>
              )}

              {contactType === "employee" && (
                <div className="relative">
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 z-10">
                    <Briefcase className="h-5 w-5 text-navy-400 dark:text-navy-500" />
                  </div>
                  <Input
                    placeholder={t("position")}
                    value={formData.position}
                    onChange={(e) =>
                      setFormData({ ...formData, position: e.target.value })
                    }
                    required
                    className="rounded-xl border-2 border-navy-100 dark:border-navy-700 focus:border-light-blue-400 dark:focus:border-light-blue-500 transition-all duration-300 bg-white dark:bg-navy-900 text-navy-800 dark:text-white placeholder:text-navy-400 dark:placeholder:text-navy-500 pr-10 text-right"
                  />
                </div>
              )}

              <div className="relative">
                <div className="absolute right-3 top-4 z-10">
                  <MessageSquare className="h-5 w-5 text-navy-400 dark:text-navy-500" />
                </div>
                <Textarea
                  placeholder={
                    contactType === "company" 
                      ? t("companyMessage") 
                      : contactType === "quote"
                      ? t("companyMessage")
                      : t("employeeMessage")
                  }
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  rows={6}
                  className="rounded-xl border-2 border-navy-100 dark:border-navy-700 focus:border-light-blue-400 dark:focus:border-light-blue-500 transition-all duration-300 bg-white dark:bg-navy-900 text-navy-800 dark:text-white placeholder:text-navy-400 dark:placeholder:text-navy-500 resize-none pr-10 text-right"
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
