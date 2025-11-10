import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "ar" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  ar: {
    // Navigation
    home: "الرئيسية",
    water: "تحلية وبيع المياه",
    transport: "النقل واللوجستيات",
    buses: "الباصات والتريلات",
    carRental: "تأجير السيارات",
    contact: "اتصل بنا",

    // Home Page
    heroTitle: "شركة عبدالله بخاري",
    heroSubtitle: "للنقل والخدمات اللوجستية",
    heroDescription:
      "رائدون في تقديم حلول النقل والخدمات اللوجستية المتكاملة في المملكة",
    ourValues: "قيمنا",
    trust: "الثقة",
    trustDesc: "نبني علاقات طويلة الأمد مع عملائنا",
    speed: "السرعة",
    speedDesc: "نلتزم بمواعيد التسليم بدقة عالية",
    quality: "الجودة",
    qualityDesc: "نقدم أعلى معايير الجودة في خدماتنا",
    coverage: "التغطية",
    coverageDesc: "نغطي جميع مناطق المملكة",

    // Contact
    contactTitle: "تواصل معنا",
    phone: "الهاتف",
    email: "البريد الإلكتروني",
    whatsapp: "واتساب",
    name: "الاسم",
    message: "الرسالة",
    send: "إرسال",

    // Water Page
    waterTitle: "تحلية وبيع المياه",
    waterDesc:
      "ننتج ونوفر ونوزع المياه المحلاة بجميع أحجامها مباشرة من المصانع إلى عملائنا",
    ourBrands: "علاماتنا التجارية",
    sidqWater: "مياه صدق",
    bakkahWater: "مياه بكه",
    purity: "النقاء",
    purityDesc: "أعلى معايير النقاء والجودة",
    reliability: "الموثوقية",
    reliabilityDesc: "توصيل دقيق وسريع",

    // Transport Page
    transportTitle: "النقل والخدمات اللوجستية",
    transportDesc: "نمتلك أسطولاً من المركبات ونتعاقد مع كبرى الشركات",
    ourPartners: "شركاؤنا",
    ourFleet: "أسطولنا",
    fleetDesc: "مركبات حديثة ومجهزة بأحدث التقنيات",

    // Buses Page
    busesTitle: "الباصات والتريلات",
    busesDesc:
      "نوفر باصات للحج والعمرة والسياحة الداخلية، وتريلات للمقاولات ونقل البضائع",
    hajjUmrah: "خدمات الحج والعمرة",
    tourism: "السياحة الداخلية",
    trailers: "التريلات",
    safety: "السلامة",
    safetyDesc: "أعلى معايير السلامة والأمان",
    comfort: "الراحة",
    comfortDesc: "راحة تامة للركاب",

    // Car Rental Page
    rentalTitle: "تأجير السيارات",
    rentalDesc: "نوفر جميع أنواع السيارات للشركات والأفراد",
    smallVehicles: "مركبات صغيرة",
    largeVehicles: "مركبات كبيرة",
    flexibility: "المرونة",
    flexibilityDesc: "حلول مرنة تناسب احتياجاتك",
    availability: "التوفر",
    availabilityDesc: "مركبات متاحة على مدار الساعة",
    bookNow: "احجز الآن",
  },
  en: {
    // Navigation
    home: "Home",
    water: "Water Production",
    transport: "Transport & Logistics",
    buses: "Buses & Trailers",
    carRental: "Car Rental",
    contact: "Contact Us",

    // Home Page
    heroTitle: "Abdullah Bukhari Company",
    heroSubtitle: "Transport & Logistics Services",
    heroDescription:
      "Leading provider of comprehensive transport and logistics solutions in Saudi Arabia",
    ourValues: "Our Values",
    trust: "Trust",
    trustDesc: "Building long-term relationships with our clients",
    speed: "Speed",
    speedDesc: "Committed to punctual delivery with high precision",
    quality: "Quality",
    qualityDesc: "Delivering the highest quality standards",
    coverage: "Coverage",
    coverageDesc: "Nationwide coverage across Saudi Arabia",

    // Contact
    contactTitle: "Contact Us",
    phone: "Phone",
    email: "Email",
    whatsapp: "WhatsApp",
    name: "Name",
    message: "Message",
    send: "Send",

    // Water Page
    waterTitle: "Water Production & Supply",
    waterDesc:
      "We produce, supply and deliver desalinated water of all sizes directly from factories to our clients",
    ourBrands: "Our Brands",
    sidqWater: "Sidq Water",
    bakkahWater: "Bakkah Water",
    purity: "Purity",
    purityDesc: "Highest standards of purity and quality",
    reliability: "Reliability",
    reliabilityDesc: "Accurate and fast delivery",

    // Transport Page
    transportTitle: "Transport & Logistics",
    transportDesc:
      "We own a fleet of vehicles and partner with major companies",
    ourPartners: "Our Partners",
    ourFleet: "Our Fleet",
    fleetDesc: "Modern vehicles equipped with latest technology",

    // Buses Page
    busesTitle: "Buses & Trailers",
    busesDesc:
      "We provide buses for Hajj, Umrah and domestic tourism, and trailers for construction and cargo transport",
    hajjUmrah: "Hajj & Umrah Services",
    tourism: "Domestic Tourism",
    trailers: "Trailers",
    safety: "Safety",
    safetyDesc: "Highest safety and security standards",
    comfort: "Comfort",
    comfortDesc: "Complete comfort for passengers",

    // Car Rental Page
    rentalTitle: "Car Rental Services",
    rentalDesc:
      "We provide all types of vehicles for companies and individuals",
    smallVehicles: "Small Vehicles",
    largeVehicles: "Large Vehicles",
    flexibility: "Flexibility",
    flexibilityDesc: "Flexible solutions for your needs",
    availability: "Availability",
    availabilityDesc: "Vehicles available 24/7",
    bookNow: "Book Now",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguageState] = useState<Language>("ar");

  useEffect(() => {
    const savedLang = localStorage.getItem("language") as Language;
    if (savedLang) {
      setLanguageState(savedLang);
      updateHTMLLang(savedLang);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
    updateHTMLLang(lang);
  };

  const updateHTMLLang = (lang: Language) => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  };

  const t = (key: string): string => {
    return (
      translations[language][key as keyof (typeof translations)["ar"]] || key
    );
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
