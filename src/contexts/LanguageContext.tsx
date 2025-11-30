import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
  useCallback,
} from "react";

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
    water: "إنتاج و توريد المياة المحلاه",
    transport: "النقل واللوجستيات",
    buses: "خدمة ضيوف الرحمن",
    carRental: "تأجير السيارات",
    logisticsManagement: "ادارة و تشغيل الشركات اللوجيستية",
    digitalMarketing: "التسويق و الانتاج المرئي",
    contact: "اتصل بنا",

    // Home Page
    heroTitle: "شركة عبدالله بخاري ",
    heroSubtitle: "للنقل والخدمات اللوجستية",
    heroDescription:
      "الشركة الرائدة في المملكة العربية السعودية والعالم في مجال النقل والخدمات اللوجستية - نقدم حلولاً متكاملة بمعايير عالمية",
    heroBadge: "الرائد في النقل واللوجستيات",
    premiumService: "خدمة مميزة",
    popularService: "خدمة شائعة",
    discoverMore: "اكتشف المزيد",
    ourValues: "قيمنا",
    trust: "الثقة",
    trustDesc: "نبني علاقات طويلة الأمد مع عملائنا",
    speed: "السرعة",
    speedDesc: "نلتزم بمواعيد التسليم بدقة عالية",
    quality: "الجودة",
    qualityDesc: "نقدم أعلى معايير الجودة في خدماتنا",
    coverage: "التغطية",
    coverageDesc: "نغطي جميع مناطق المملكة",
    aboutCompany: "من نحن",
    aboutCompanyDesc:
      "شركة عبدالله  بخاري للنقل والخدمات اللوجستية هي إحدى أبرز الشركات الرائدة في المملكة العربية السعودية والعالم. نحن نفتخر بكوننا الشريك الموثوق للعديد من كبرى الشركات المحلية والعالمية، ونقدم خدماتنا بمعايير عالمية تجعلنا الخيار الأول في مجال النقل والخدمات اللوجستية.",
    aboutCompanySubtitle:
      "شركة رائدة في مجال النقل واللوجستيات في المملكة العربية السعودية",
    ourVision: "رؤيتنا",
    ourVisionDesc:
      "أن نكون الشركة الرائدة في مجال النقل والخدمات اللوجستية في المملكة العربية السعودية والعالم، ونحقق أعلى معايير جودة الحياة لعملائنا وشركائنا، ونُسهم في تحقيق رؤية السعودية 2030.",
    ourMission: "مهمتنا",
    ourMissionDesc:
      "تطوير وتنفيذ حلول نقل ولوجستيات مبتكرة ومستدامة تعزز كفاءة الأعمال ورفاهية العملاء من خلال شراكة فعالة مع كبرى الشركات المحلية والعالمية، وتميزنا في تقديم خدمات عالية الجودة تلبي جميع احتياجات السوق.",
    ourStrategicObjectives: "أهدافنا الاستراتيجية",
    whyChooseUs: "لماذا نحن الأفضل",
    whyChooseUsDesc:
      "نتميز بأسطول حديث ومتطور، وشراكات استراتيجية مع كبرى الشركات، وخبرة واسعة في مختلف المجالات. نحن نضع رضا العملاء في مقدمة أولوياتنا ونعمل بلا كلل لتحقيق التميز في كل ما نقدمه.",
    ourServices: "خدماتنا المتميزة",
    ourServicesDesc:
      "نقدم مجموعة شاملة من الخدمات تشمل إنتاج وتوريد المياه المحلاة، النقل والخدمات اللوجستية، توفير الباصات للحج والعمرة والسياحة، النقل الثقيل للمقاولات، وتأجير السيارات بجميع أنواعها.",
    ourStats: "إحصائياتنا",
    mainServices: "خدمات رئيسية",
    strategicPartner: "شريك استراتيجي",
    availableService: "خدمة متاحة",
    fullCoverage: "تغطية شاملة",
    waterProductionDescShort: "إنتاج وتوريد المياه المحلاة",
    transportServicesDescShort: "خدمات النقل واللوجستيات",
    busesTrailersDescShort: "خدمة نقل متميزة لضيوف الرحمن والسياحة الداخلية",
    carRentalDescShort: "تأجير جميع أنواع السيارات للشركات والأفراد",
    qualityAndDelivery: "الجودة والتوصيل",
    integratedLogisticsServices: "خدمات لوجستية متكاملة",
    ourLogisticsServices: "خدماتنا اللوجستية",
    hajjUmrahDescShort: "خدمات نقل مريحة وآمنة للحجاج والمعتمرين",
    tourismDescShort: "باصات فاخرة للسياحة الداخلية",
    trailersDescShort: "النقل الثقيل للمقاولات ونقل البضائع",
    ourServicesHeader: "خدماتنا",
    ourFeatures: "مميزاتنا",
    vehicleTypes: "أنواع المركبات",
    vehicleDetails: "تفاصيل المركبات",
    availableNow: "متوفر الآن",
    contactUsForBestOffers: "تواصل معنا الآن للحصول على أفضل العروض",
    partnerAramex: "أرامكس / Aramex",
    partnerAmazon: "أمازون / Amazon",
    partnerNoon: "نون / Noon",
    partnerNaqel: "ناقل / Naqel",
    partnerNoonFood: "نون فود / Noon Food",
    partnerToyou: "تويو / ToYou",
    partnerJahez: "جاهز / Jahez",
    partnerHungerStation: "هنقرستيشن / HungerStation",
    partnerMrsool: "مرسول / Mrsool",

    // Contact
    contactTitle: "تواصل معنا",
    contactSubtitle: "نحن هنا لمساعدتك - تواصل معنا لأي استفسارات أو طلبات",
    contactCompany: "شركة / عميل",
    contactEmployee: "موظف / وظيفة",
    contactQuote: "طلب عرض السعر",
    contactCompanyDesc: "للشركات الراغبة في خدماتنا واستشاراتنا",
    contactEmployeeDesc: "للمتقدمين للوظائف والراغبين في العمل معنا",
    contactQuoteDesc: "للحصول على عرض سعر لخدماتنا",
    companyName: "اسم الشركة",
    registrationNumber: "رقم السجل",
    taxNumber: "الرقم الضريبي",
    selectService: "اختر الخدمة",
    position: "المنصب / المسمى الوظيفي",
    companyMessage: "اكتب رسالتك أو استفسارك عن خدماتنا...",
    employeeMessage: "اكتب رسالتك أو سيرتك الذاتية...",
    contactCompanySuccess: "تم إرسال طلبك بنجاح",
    contactEmployeeSuccess: "تم إرسال طلب التوظيف بنجاح",
    contactQuoteSuccess: "تم إرسال طلب عرض السعر بنجاح",
    phone: "الهاتف",
    email: "البريد الإلكتروني",
    whatsapp: "واتساب",
    name: "الاسم",
    message: "الرسالة",
    send: "إرسال",

    // Water Page
    waterTitle: "إنتاج و توريد المياة المحلاه",
    waterDesc:
      "ننتج ونوفر ونوزع المياه المحلاة بجميع أحجامها مباشرة من المصانع إلى عملائنا أو مستودعاتهم بأعلى معايير الجودة العالمية",
    ourBrands: "علاماتنا التجارية المتميزة",
    sidqWater: "مياه صدق",
    bakkahWater: "مياه بكه",
    purity: "النقاء",
    purityDesc: "أعلى معايير النقاء والجودة العالمية",
    reliability: "الموثوقية",
    reliabilityDesc: "توصيل دقيق وسريع في جميع أنحاء المملكة",
    waterProductionTitle: "إنتاج وتوريد المياه المحلاة",
    waterProductionDesc:
      "نفتخر بأننا من أبرز الشركات المتخصصة في إنتاج وبيع وتوريد المياه المحلاة بكافة أحجامها في المملكة العربية السعودية. نعمل مباشرة من المصانع إلى يد العميل أو مستودعاته، مما يضمن أعلى مستويات الجودة والنقاء.",
    waterQuality: "جودة المياه",
    waterQualityDesc:
      "نلتزم بأعلى معايير الجودة العالمية في إنتاج وتوزيع المياه المحلاة. جميع منتجاتنا تخضع لفحوصات دقيقة ومستمرة لضمان نقاء وجودة المياه التي نقدمها لعملائنا.",
    importantAdvantage: "ميزة مهمة",
    lowSodiumTitle: "صوديوم أقل من 5%",
    lowSodiumDesc:
      "مياهنا المحلاة تحتوي على نسبة صوديوم أقل من 5%، مما يجعلها صحية وآمنة للاستهلاك اليومي",
    waterDelivery: "التوصيل السريع",
    waterDeliveryDesc:
      "نوفر خدمة توصيل سريعة وموثوقة لجميع عملائنا في جميع أنحاء المملكة. سواء كنت بحاجة إلى توصيل مباشر من المصنع أو إلى مستودعاتك، نحن هنا لخدمتك.",
    productionProcess: "عملية الإنتاج والتوزيع",
    directDistribution: "توزيع مباشر من المصانع إلى العملاء",
    allSizesAvailable: "جميع الأحجام متاحة حسب الطلب",
    fastReliableDelivery: "توصيل سريع وموثوق في جميع أنحاء المملكة",
    globalQualityBadge: "جودة عالمية",
    brandsSubtitle:
      "علاماتنا التجارية الرائدة في مجال إنتاج وتوزيع المياه المحلاة",
    qualitySubtitle: "التزامنا بالجودة والموثوقية في كل خطوة",
    certifiedBrand: "علامة تجارية معتمدة",
    globalStandards: "معايير عالمية",
    preciseTests: "فحوصات دقيقة",
    waterFastDelivery: "توصيل سريع",
    waterFullCoverage: "تغطية شاملة",
    productionStep: "الإنتاج",
    productionStepDesc: "إنتاج المياه المحلاة بأعلى المعايير",
    inspectionStep: "الفحص",
    inspectionStepDesc: "فحوصات جودة مستمرة ودقيقة",
    distributionStep: "التوزيع",
    distributionStepDesc: "توزيع سريع وموثوق",
    deliveryStep: "التسليم",
    deliveryStepDesc: "تسليم آمن إلى العميل",
    waterCTA2Title: "احصل على مياه نقية بجودة عالمية",
    waterCTA2Desc: "تواصل معنا الآن لتلبية احتياجاتك من المياه المحلاة",
    waterProductionLabel: "إنتاج المياه",

    // Transport Page
    transportTitle: "النقل والخدمات اللوجستية",
    transportDesc:
      "نمتلك أسطولاً متطوراً من المركبات ونتعاقد مع كبرى الشركات المحلية والعالمية - نحن الخيار الأول في المملكة",
    ourPartners: "شركاؤنا الاستراتيجيون",
    ourFleet: "أسطولنا المتطور",
    fleetDesc: "مركبات حديثة ومجهزة بأحدث التقنيات العالمية",
    transportIntro: "خدمات النقل واللوجستيات المتميزة",
    transportIntroDesc:
      "نفتخر بأننا من أبرز الشركات المتخصصة في مجال النقل والخدمات اللوجستية في المملكة العربية السعودية. نمتلك أسطولاً متطوراً من السيارات والمعدات الحديثة، ونعمل مع كبرى الشركات المحلية والعالمية لتقديم خدمات لوجستية متكاملة بمعايير عالمية.",
    parcelDelivery: "نقل الطرود",
    parcelDeliveryDesc:
      "نعمل مع كبرى شركات التوصيل العالمية والمحلية مثل أرامكس، أمازون، نون، ناقل وغيرها من الشركات الرائدة. نضمن توصيل الطرود بسرعة ودقة عالية في جميع أنحاء المملكة.",
    foodDelivery: "توصيل طلبات المطاعم",
    foodDeliveryDesc:
      "نقدم خدمات توصيل طلبات المطاعم مع أبرز المنصات في المملكة مثل نون فود، تويو، جاهز، هنقرستيشن، مرسول وغيرها. نضمن وصول طلباتكم في الوقت المحدد وبأعلى معايير الجودة.",
    logisticsSolutions: "حلول لوجستية متكاملة",
    logisticsSolutionsDesc:
      "نقدم حلولاً لوجستية شاملة ومتكاملة تلبي جميع احتياجات عملائنا. من النقل والتخزين إلى إدارة سلسلة التوريد، نحن هنا لتقديم الحلول المثالية.",
    fleetModernTech: "أسطول حديث ومتطور بأحدث التقنيات",
    strategicPartnerships: "شراكات استراتيجية مع كبرى الشركات العالمية",
    integratedLogisticsGlobal: "خدمات لوجستية متكاملة بمعايير عالمية",
    fullCoverageKingdom: "تغطية شاملة لجميع مناطق المملكة",
    reliableAndSecure: "موثوق وآمن",
    comprehensiveLogisticsSolutions: "حلول لوجستية شاملة لجميع احتياجاتك",
    instantTracking: "تتبع فوري",
    hotDelivery: "توصيل ساخن",
    customizedSolutions: "حلول مخصصة",
    completeManagement: "إدارة كاملة",
    partnersSubtitle: "شركاؤنا الاستراتيجيون من كبرى الشركات المحلية والعالمية",
    trustedPartner: "شريك موثوق",
    transportCTA2Title: "نحن شريكك الموثوق في النقل واللوجستيات",
    transportCTA2Desc: "تواصل معنا الآن لخدمات نقل ولوجستية متميزة",

    // Buses Page
    busesTitle: "الباصات والنقل الثقيل",
    busesDesc:
      "نوفر باصات فاخرة للحج والعمرة والسياحة الداخلية، وتريلات متطورة للمقاولات ونقل البضائع - الخيار الأمثل في المملكة",
    busesOnlyTitle: "خدمة و نقل المعتمرين و الحجاج إلى بيت الله الحرام",
    busesOnlyDesc:
      "نوفر خدمة نقل متميزة وآمنة للمعتمرين والحجاج إلى بيت الله الحرام، بالإضافة إلى خدمات السياحة الداخلية - الخيار الأمثل في المملكة",
    hajjUmrah: "خدمات الحج والعمرة",
    tourism: "السياحة الداخلية",
    trailers: "النقل الثقيل",
    safety: "السلامة",
    safetyDesc: "أعلى معايير السلامة والأمان العالمية",
    comfort: "الراحة",
    comfortDesc: "راحة تامة للركاب بأعلى المعايير",
    busesIntro: "خدمة و نقل المعتمرين و الحجاج إلى بيت الله الحرام",
    busesIntroDesc:
      "نفتخر بتقديم خدمة نقل متميزة وآمنة للمعتمرين والحجاج إلى بيت الله الحرام. نعمل مع كبرى شركات الحج والعمرة في المملكة العربية السعودية لتوفير باصات فاخرة ومريحة مجهزة بأحدث التقنيات لضمان رحلة مريحة وآمنة ومباركة. كما نوفر خدمات نقل للسياحة الداخلية بمعايير عالية من الجودة والراحة.",
    hajjUmrahServices: "خدمة و نقل المعتمرين و الحجاج إلى بيت الله الحرام",
    hajjUmrahServicesDesc:
      "نعمل مع كبرى شركات الحج والعمرة في المملكة لتوفير باصات فاخرة ومريحة وآمنة لنقل المعتمرين والحجاج إلى بيت الله الحرام. نضمن رحلات مباركة وآمنة ومريحة مع أعلى معايير الخدمة والراحة، مع الالتزام التام بجميع متطلبات السلامة والجودة لخدمة ضيوف الرحمن.",
    domesticTourism: "السياحة الداخلية",
    domesticTourismDesc:
      "نوفر باصات فاخرة ومجهزة لشركات السياحة الداخلية في المملكة. باصاتنا مصممة لتوفير رحلة مريحة وممتعة لجميع الركاب في رحلاتهم السياحية الداخلية.",
    trailersServices: "خدمات النقل الثقيل",
    trailersServicesDesc:
      "نقدم خدمات متخصصة في النقل الثقيل لشركات المقاولات ونقل البضائع. أسطولنا متطور ومجهز بأحدث المعدات لضمان نقل آمن وفعال للبضائع والمعدات.",
    busesFleetModern: "أسطول حديث ومتطور من الباصات",
    busesComfortable: "مريح ومريح",
    busesSafeTransport: "نقل آمن وموثوق",
    busesProfessional: "خدمة احترافية",
    busesLuxury: "فاخر",
    busesServicesSubtitle: "خدمة نقل متميزة لضيوف الرحمن والسياحة الداخلية",
    busesFeaturesSubtitle: "مميزاتنا التي تجعلنا الخيار الأمثل",
    busesSafetyDetail1: "أسطول مجهز بأحدث أنظمة السلامة والأمان",
    busesSafetyDetail2: "سائقون محترفون ومدربون على أعلى المستويات",
    busesSafetyDetail3: "صيانة دورية وفحوصات مستمرة للمركبات",
    busesComfortDetail1: "مقاعد فاخرة ومريحة مع مساحات واسعة",
    busesComfortDetail2: "تكييف هواء متطور وتهوية ممتازة",
    busesComfortDetail3: "خدمات ترفيهية وWiFi مجاني",
    busesSpeedDetail1: "التزام تام بمواعيد الوصول المحددة",
    busesSpeedDetail2: "مسارات محسّنة للوصول السريع",
    busesSpeedDetail3: "تنسيق دقيق مع شركات الحج والعمرة",
    busesCoverageDetail1: "تغطية شاملة لجميع مناطق المملكة",
    busesCoverageDetail2: "خدمة متاحة على مدار الساعة",
    busesCoverageDetail3: "شبكة واسعة من النقاط والمسارات",
    busesCapacity: "سعة كبيرة",
    busesCapacityDesc: "باصات بسعات مختلفة تناسب جميع الاحتياجات",
    busesWifi: "WiFi مجاني",
    busesWifiDesc: "اتصال إنترنت مجاني عالي السرعة للركاب",
    busesAC: "تكييف متطور",
    busesACDesc: "نظام تكييف هواء متقدم لراحة مثالية",
    busesLuggage: "مساحة للأمتعة",
    busesLuggageDesc: "مساحات واسعة ومخصصة لحفظ الأمتعة بأمان",
    busesQuality: "جودة عالية",
    busesQualityDesc: "معايير جودة عالمية في جميع خدماتنا",
    busesLuxuryDesc: "باصات فاخرة مجهزة بأحدث التقنيات والخدمات",
    busesCTA2Title: "استعد لرحلة مباركة معنا",
    busesCTA2Desc: "نضمن لك رحلة آمنة ومريحة لضيوف الرحمن",

    // Trailers Page
    trailersTitle: "النقل الثقيل",
    trailersDesc:
      "نوفر خدمات نقل ثقيل متطورة ومتخصصة للمقاولات ونقل البضائع والمعدات - الخيار الأمثل في المملكة",
    trailersIntro: "خدمات النقل الثقيل المتميزة",
    trailersIntroTitle: "خدمات النقل الثقيل المتخصصة",
    trailersFeaturesTitle: "مميزاتنا",
    trailersFeaturesSubtitle: "لماذا نحن الخيار الأمثل لخدمات النقل الثقيل",
    trailersServicesTitle: "خدماتنا",
    trailersServicesSubtitle: "خدمات شاملة للنقل الثقيل في المملكة",
    trailersConstruction: "النقل الثقيل للمقاولات",
    trailersConstructionDesc:
      "خدمات نقل ثقيل متخصصة لشركات المقاولات لنقل المعدات والمواد",
    trailersCargo: "نقل البضائع",
    trailersCargoDesc: "خدمات نقل البضائع بجميع الأحجام بأمان وكفاءة عالية",
    trailersEquipment: "نقل المعدات",
    trailersEquipmentDesc: "نقل المعدات الثقيلة والخاصة بأعلى معايير السلامة",
    trailersProfessional: "احترافية",
    trailersReliable: "موثوقة",
    trailersSafe: "آمنة",
    trailersBenefit1: "أسطول حديث ومتطور للنقل الثقيل",
    trailersBenefit2: "معدات متخصصة لجميع أنواع النقل",
    trailersBenefit3: "خدمة موثوقة وسريعة",
    trailersBenefit4: "تغطية شاملة لجميع مناطق المملكة",
    trailersCTATitle: "هل تحتاج إلى خدمات النقل الثقيل؟",
    trailersCTADesc: "تواصل معنا الآن للحصول على أفضل العروض والخدمات",
    trailersCTA2Title: "جاهزون لخدمتك في أي وقت",
    trailersCTA2Desc: "فريقنا متاح على مدار الساعة لتلبية احتياجاتك",

    // Car Rental Page
    carRentalTitle: "تأجير السيارات",
    rentalTitle: "تأجير السيارات",
    rentalDesc:
      "نوفر جميع أنواع السيارات والمركبات (صغيرة وكبيرة) للشركات اللوجستية والشركات الأخرى. نتميز بأسطول واسع ومتنوع، أسعار تنافسية مع عروض وخصومات مميزة، خدمة متاحة على مدار الساعة (24/7)، صيانة دورية وفحوصات مستمرة لضمان السلامة، وإجراءات تأجير بسيطة وسريعة مع دعم فني متواصل - الخيار الأمثل في المملكة",
    smallVehicles: "مركبات صغيرة",
    largeVehicles: "مركبات كبيرة",
    flexibility: "المرونة",
    flexibilityDesc: "حلول مرنة تناسب احتياجاتك",
    availability: "التوفر",
    availabilityDesc: "مركبات متاحة على مدار الساعة",
    competitivePrices: "أسعار تنافسية",
    competitivePricesDesc: "أفضل الأسعار في السوق مع عروض وخصومات مميزة",
    bookNow: "احجز الآن",
    rentalCTA2Title: "احصل على أفضل العروض الآن",
    rentalCTA2Desc: "تواصل معنا للحصول على أسعار مميزة وخدمة استثنائية",
    rentalIntro: "خدمات تأجير السيارات المتميزة",
    rentalIntroDesc:
      "بفضل الله، تستطيع شركتنا توفير أي أنواع سيارات (صغيرة وكبيرة) لشركات اللوجستية وغيرها من الشركات الأخرى. نحن نقدم حلولاً مرنة ومتنوعة تلبي جميع احتياجات عملائنا.",
    smallVehiclesDesc:
      "نوفر مجموعة واسعة من السيارات الصغيرة للأفراد والشركات. جميع سياراتنا حديثة ومجهزة بأحدث التقنيات لضمان رحلة آمنة ومريحة.",
    largeVehiclesDesc:
      "نقدم مركبات كبيرة ومتطورة لشركات اللوجستية والشركات الأخرى. مركباتنا مجهزة بأحدث المعدات والتقنيات لضمان أداء عالي وكفاءة ممتازة.",
    rentalBenefits: "مميزات تأجير السيارات معنا",
    rentalBenefitsDesc:
      "نوفر مرونة كاملة في التأجير مع أسعار تنافسية وخدمة عملاء متميزة. جميع مركباتنا حديثة ومجهزة بأحدث التقنيات، ونضمن توفرها على مدار الساعة",

    // Logistics Management Page
    logisticsManagementTitle: "ادارة و تشغيل الشركات اللوجيستية",
    logisticsManagementDesc:
      "نوفر خدمات إدارة وتشغيل متكاملة للشركات اللوجيستية الأخرى. نقدم مناديب محترفين، سيارات مجهزة، وعقود تشغيل شاملة لضمان نجاح عملياتك اللوجيستية.",
    logisticsManagementDescShort:
      "إدارة وتشغيل متكامل للشركات اللوجيستية - مناديب، سيارات، وعقود تشغيل",
    logisticsManagementPartnership: "شراكة استراتيجية",
    logisticsManagementProfessional: "خدمة احترافية",
    logisticsManagementExpert: "خبرة متخصصة",
    logisticsManagementServicesTitle: "خدماتنا",
    logisticsManagementServicesSubtitle:
      "نقدم حلولاً شاملة لإدارة وتشغيل الشركات اللوجيستية",
    logisticsManagementReps: "توفير المناديب",
    logisticsManagementRepsDesc:
      "نوفر مناديب محترفين ومدربين على أعلى المستويات لضمان خدمة متميزة لعملائك",
    logisticsManagementCars: "توفير السيارات",
    logisticsManagementCarsDesc:
      "أسطول واسع من السيارات المجهزة بأحدث التقنيات لخدمة عملياتك اللوجيستية",
    logisticsManagementContracts: "العقود التشغيلية",
    logisticsManagementContractsDesc:
      "عقود تشغيل شاملة ومتكاملة تضمن نجاح عملياتك اللوجيستية بكفاءة عالية",
    logisticsManagementManagement: "ادارة وتشغيل الشركات اللوجستية",
    logisticsManagementManagementDesc:
      "خدمة متكاملة لإدارة وتشغيل الشركات اللوجستية تشمل التخطيط الاستراتيجي، الإدارة اليومية، والتحسين المستمر للعمليات",
    logisticsManagementFeaturesTitle: "مميزاتنا",
    logisticsManagementFeaturesSubtitle:
      "ما يميزنا في إدارة وتشغيل الشركات اللوجيستية",
    logisticsManagementFeature1: "خبرة واسعة",
    logisticsManagementFeature1Desc:
      "سنوات من الخبرة في إدارة وتشغيل الشركات اللوجيستية مع كبرى الشركات المحلية والعالمية",
    logisticsManagementFeature2: "كفاءة عالية",
    logisticsManagementFeature2Desc:
      "نظم إدارة متطورة وموارد بشرية محترفة تضمن أعلى مستويات الكفاءة والإنتاجية",
    logisticsManagementFeature3: "جودة مضمونة",
    logisticsManagementFeature3Desc:
      "معايير جودة عالمية في جميع خدماتنا مع متابعة مستمرة وضمان الأداء المتميز",
    logisticsManagementFeature4: "دعم مستمر",
    logisticsManagementFeature4Desc:
      "فريق دعم فني وإداري متاح على مدار الساعة لضمان استمرارية عملياتك بسلاسة",
    logisticsManagementBenefitsTitle: "فوائد التعامل معنا",
    logisticsManagementBenefitsDesc:
      "نوفر لك حلولاً متكاملة وشاملة تضمن نجاح عملياتك اللوجيستية",
    logisticsManagementBenefit1:
      "توفير مناديب محترفين ومدربين على أعلى المستويات",
    logisticsManagementBenefit2:
      "أسطول واسع من السيارات المجهزة بأحدث التقنيات",
    logisticsManagementBenefit3: "عقود تشغيل شاملة ومتكاملة مع متابعة مستمرة",
    logisticsManagementBenefit4: "دعم فني وإداري متاح على مدار الساعة",
    logisticsManagementBenefit5:
      "ادارة وتشغيل متكامل للشركات اللوجستية مع تخطيط استراتيجي وتحسين مستمر",
    logisticsManagementCTATitle: "ابدأ شراكتك معنا اليوم",
    logisticsManagementCTADesc:
      "تواصل معنا الآن لمعرفة كيف يمكننا مساعدتك في إدارة وتشغيل شركتك اللوجيستية",
    logisticsManagementCTA2Title: "نحن هنا لدعمك دائماً",
    logisticsManagementCTA2Desc:
      "فريقنا جاهز لتقديم الحلول المناسبة لاحتياجاتك",

    // Digital Marketing Page
    digitalMarketingTitle: "التسويق و الانتاج المرئي",
    digitalMarketingDesc:
      "نقدم خدمات متكاملة في التسويق الرقمي والإنتاج المرئي لمساعدة شركتك على النمو والوصول إلى جمهورك المستهدف بفعالية",
    digitalMarketingDescShort:
      "خدمات متكاملة في التسويق الرقمي والإنتاج المرئي والمواقع الإلكترونية",
    digitalMarketingModern: "حلول حديثة",
    digitalMarketingResults: "نتائج مضمونة",
    digitalMarketingProfessional: "خدمة احترافية",
    digitalMarketingServicesTitle: "خدماتنا",
    digitalMarketingServicesSubtitle:
      "نقدم مجموعة شاملة من خدمات التسويق الرقمي والإنتاج المرئي",
    digitalMarketingWebsites: "تصميم المواقع الإلكترونية",
    digitalMarketingWebsitesDesc:
      "تصميم وتطوير مواقع إلكترونية احترافية متجاوبة مع جميع الأجهزة",
    digitalMarketingVideo: "الإنتاج المرئي والفيديو",
    digitalMarketingVideoDesc:
      "إنتاج فيديوهات احترافية للإعلانات والتسويق والمحتوى الرقمي",
    digitalMarketingPhotography: "التصوير الفوتوغرافي",
    digitalMarketingPhotographyDesc:
      "خدمات تصوير احترافية للمنتجات والفعاليات والمحتوى التسويقي",
    digitalMarketingSocial: "التسويق عبر وسائل التواصل",
    digitalMarketingSocialDesc:
      "إدارة وتنفيذ حملات تسويقية فعالة على جميع منصات التواصل الاجتماعي",
    digitalMarketingAnalytics: "تحليل البيانات والتقارير",
    digitalMarketingAnalyticsDesc:
      "تحليل أداء الحملات التسويقية وتقديم تقارير مفصلة لتحسين النتائج",
    digitalMarketingSEO: "تحسين محركات البحث",
    digitalMarketingSEODesc:
      "تحسين ظهور موقعك في نتائج محركات البحث لزيادة الزيارات والتحويلات",
    digitalMarketingFeaturesTitle: "مميزاتنا",
    digitalMarketingFeaturesSubtitle:
      "ما يميز خدماتنا في التسويق الرقمي والإنتاج المرئي",
    digitalMarketingFeature1: "تصميم احترافي",
    digitalMarketingFeature1Desc:
      "فريق محترف من المصممين والمطورين يقدمون حلولاً مبتكرة وعصرية",
    digitalMarketingFeature2: "استراتيجيات فعالة",
    digitalMarketingFeature2Desc:
      "استراتيجيات تسويقية مدروسة ومثبتة لتحقيق أفضل النتائج لعملائنا",
    digitalMarketingFeature3: "متابعة مستمرة",
    digitalMarketingFeature3Desc:
      "متابعة مستمرة لأداء الحملات والتعديلات اللازمة لضمان النجاح",
    digitalMarketingFeature4: "نتائج سريعة",
    digitalMarketingFeature4Desc:
      "حلول سريعة وفعالة تساعدك على تحقيق أهدافك التسويقية في أقصر وقت",
    digitalMarketingBenefitsTitle: "فوائد التعامل معنا",
    digitalMarketingBenefitsDesc:
      "نوفر لك حلولاً متكاملة وشاملة تضمن نجاح حملاتك التسويقية",
    digitalMarketingBenefit1: "تصميم وتطوير مواقع إلكترونية احترافية ومتجاوبة",
    digitalMarketingBenefit2: "إنتاج محتوى مرئي وفيديو احترافي عالي الجودة",
    digitalMarketingBenefit3: "إدارة حملات تسويقية فعالة على جميع المنصات",
    digitalMarketingBenefit4: "تحليل ومراقبة الأداء لتحسين النتائج باستمرار",
    digitalMarketingCTATitle: "ابدأ مشروعك الرقمي معنا اليوم",
    digitalMarketingCTADesc:
      "تواصل معنا الآن لمعرفة كيف يمكننا مساعدتك في تطوير وجودك الرقمي وتحقيق أهدافك التسويقية",
    digitalMarketingCTA2Title: "لنبدأ رحلتك الرقمية معاً",
    digitalMarketingCTA2Desc: "نحن متخصصون في تحويل أفكارك إلى واقع رقمي ناجح",
  },
  en: {
    // Navigation
    home: "Home",
    water: "Water Production",
    transport: "Transport & Logistics",
    buses: "Guests of the Most Merciful Service",
    carRental: "Car Rental",
    logisticsManagement: "Logistics Management & Operations",
    contact: "Contact Us",

    // Home Page
    heroTitle: "Abdullah Bukhari and Partners Company",
    heroSubtitle: "Transport & Logistics Services",
    heroDescription:
      "Leading company in Saudi Arabia and the world in transport and logistics services - we provide integrated solutions with global standards",
    heroBadge: "Leading in Transport & Logistics",
    premiumService: "Premium Service",
    popularService: "Popular Service",
    discoverMore: "Discover More",
    ourValues: "Our Values",
    trust: "Trust",
    trustDesc: "Building long-term relationships with our clients",
    speed: "Speed",
    speedDesc: "Committed to punctual delivery with high precision",
    quality: "Quality",
    qualityDesc: "Delivering the highest quality standards",
    coverage: "Coverage",
    coverageDesc: "Nationwide coverage across Saudi Arabia",
    aboutCompany: "About Us",
    aboutCompanyDesc:
      "Abdullah  Bukhari Transport and Logistics Services Company is one of the leading companies in Saudi Arabia and the world. We are proud to be the trusted partner of many major local and international companies, and we provide our services with global standards that make us the first choice in transport and logistics.",
    aboutCompanySubtitle:
      "Leading company in transport and logistics in the Kingdom of Saudi Arabia",
    ourVision: "Our Vision",
    ourVisionDesc:
      "To be the leading company in transport and logistics services in Saudi Arabia and the world, achieving the highest standards of quality of life for our clients and partners, and contributing to achieving Saudi Vision 2030.",
    ourMission: "Our Mission",
    ourMissionDesc:
      "To develop and implement innovative and sustainable transport and logistics solutions that enhance business efficiency and customer well-being through effective partnerships with major local and international companies, and excellence in providing high-quality services that meet all market needs.",
    ourStrategicObjectives: "Our Strategic Objectives",
    whyChooseUs: "Why We Are The Best",
    whyChooseUsDesc:
      "We are distinguished by a modern and advanced fleet, strategic partnerships with major companies, and extensive experience in various fields. We put customer satisfaction at the forefront of our priorities and work tirelessly to achieve excellence in everything we offer.",
    ourServices: "Our Distinguished Services",
    ourServicesDesc:
      "We provide a comprehensive range of services including desalinated water production and supply, transport and logistics services, bus provision for Hajj, Umrah and tourism, heavy transport for contracting, and car rental of all types.",
    ourStats: "Our Statistics",
    mainServices: "Main Services",
    strategicPartner: "Strategic Partner",
    availableService: "Available Service",
    fullCoverage: "Full Coverage",
    waterProductionDescShort: "Desalinated Water Production & Supply",
    transportServicesDescShort: "Transport & Logistics Services",
    busesTrailersDescShort:
      "Distinguished transport service for the Guests of the Most Merciful and domestic tourism",
    carRentalDescShort:
      "Rental of all types of vehicles for companies and individuals",
    qualityAndDelivery: "Quality & Delivery",
    integratedLogisticsServices: "Integrated Logistics Services",
    ourLogisticsServices: "Our Logistics Services",
    hajjUmrahDescShort:
      "Comfortable and safe transport services for pilgrims and Umrah performers",
    tourismDescShort: "Luxury buses for domestic tourism",
    trailersDescShort: "Heavy transport for contracting and cargo transport",
    ourServicesHeader: "Our Services",
    ourFeatures: "Our Features",
    vehicleTypes: "Vehicle Types",
    vehicleDetails: "Vehicle Details",
    availableNow: "Available Now",
    contactUsForBestOffers: "Contact us now to get the best offers",
    partnerAramex: "Aramex",
    partnerAmazon: "Amazon",
    partnerNoon: "Noon",
    partnerNaqel: "Naqel",
    partnerNoonFood: "Noon Food",
    partnerToyou: "Toyou",
    partnerJahez: "Jahez",
    partnerHungerStation: "HungerStation",
    partnerMrsool: "Mrsool",

    // Contact
    contactTitle: "Contact Us",
    contactSubtitle:
      "We're here to help - Get in touch with us for any inquiries or requests",
    contactCompany: "Company / Client",
    contactEmployee: "Employee / Job",
    contactQuote: "Request Quote",
    contactCompanyDesc: "For companies wanting our services and consultations",
    contactEmployeeDesc: "For job applicants and those wanting to work with us",
    contactQuoteDesc: "Get a quote for our services",
    companyName: "Company Name",
    registrationNumber: "Registration Number",
    taxNumber: "Tax Number",
    selectService: "Select Service",
    position: "Position / Job Title",
    companyMessage: "Write your message or inquiry about our services...",
    employeeMessage: "Write your message or resume...",
    contactCompanySuccess: "Your request has been sent successfully",
    contactEmployeeSuccess: "Your job application has been sent successfully",
    contactQuoteSuccess: "Your quote request has been sent successfully",
    phone: "Phone",
    email: "Email",
    whatsapp: "WhatsApp",
    name: "Name",
    message: "Message",
    send: "Send",

    // Water Page
    waterTitle: "Water Production & Supply",
    waterDesc:
      "We produce, supply and deliver desalinated water of all sizes directly from factories to our clients or their warehouses with the highest global quality standards",
    ourBrands: "Our Distinguished Brands",
    sidqWater: "Sidq Water",
    bakkahWater: "Bakkah Water",
    purity: "Purity",
    purityDesc: "Highest global standards of purity and quality",
    reliability: "Reliability",
    reliabilityDesc: "Accurate and fast delivery throughout the Kingdom",
    waterProductionTitle: "Desalinated Water Production & Supply",
    waterProductionDesc:
      "We are proud to be one of the leading companies specialized in producing, selling and supplying desalinated water of all sizes in Saudi Arabia. We work directly from factories to the customer's hand or warehouses, ensuring the highest levels of quality and purity.",
    waterQuality: "Water Quality",
    waterQualityDesc:
      "We are committed to the highest global quality standards in producing and distributing desalinated water. All our products undergo rigorous and continuous testing to ensure the purity and quality of the water we provide to our customers.",
    importantAdvantage: "Important Advantage",
    lowSodiumTitle: "Sodium Less Than 5%",
    lowSodiumDesc:
      "Our desalinated water contains less than 5% sodium, making it healthy and safe for daily consumption",
    waterDelivery: "Fast Delivery",
    waterDeliveryDesc:
      "We provide fast and reliable delivery service to all our customers throughout the Kingdom. Whether you need direct delivery from the factory or to your warehouses, we are here to serve you.",
    productionProcess: "Production & Distribution Process",
    directDistribution: "Direct distribution from factories to customers",
    allSizesAvailable: "All sizes available on demand",
    fastReliableDelivery: "Fast and reliable delivery throughout the Kingdom",
    globalQualityBadge: "Global Quality",
    brandsSubtitle:
      "Our leading brands in desalinated water production and distribution",
    qualitySubtitle: "Our commitment to quality and reliability at every step",
    certifiedBrand: "Certified Brand",
    globalStandards: "Global Standards",
    preciseTests: "Precise Tests",
    waterFastDelivery: "Fast Delivery",
    waterFullCoverage: "Full Coverage",
    productionStep: "Production",
    productionStepDesc:
      "Producing desalinated water with the highest standards",
    inspectionStep: "Inspection",
    inspectionStepDesc: "Continuous and precise quality inspections",
    distributionStep: "Distribution",
    distributionStepDesc: "Fast and reliable distribution",
    deliveryStep: "Delivery",
    deliveryStepDesc: "Safe delivery to the customer",
    waterCTA2Title: "Get Pure Water with Global Quality",
    waterCTA2Desc: "Contact us now to meet your desalinated water needs",
    waterProductionLabel: "Water Production",

    // Transport Page
    transportTitle: "Transport & Logistics",
    transportDesc:
      "We own an advanced fleet of vehicles and partner with major local and international companies - we are the first choice in the Kingdom",
    ourPartners: "Our Strategic Partners",
    ourFleet: "Our Advanced Fleet",
    fleetDesc: "Modern vehicles equipped with latest global technology",
    transportIntro: "Distinguished Transport & Logistics Services",
    transportIntroDesc:
      "We are proud to be one of the leading companies specialized in transport and logistics services in Saudi Arabia. We own an advanced fleet of modern vehicles and equipment, and work with major local and international companies to provide integrated logistics services with global standards.",
    parcelDelivery: "Parcel Delivery",
    parcelDeliveryDesc:
      "We work with major global and local delivery companies such as Aramex, Amazon, Noon, Naqel and other leading companies. We ensure fast and accurate parcel delivery throughout the Kingdom.",
    foodDelivery: "Restaurant Order Delivery",
    foodDeliveryDesc:
      "We provide restaurant order delivery services with the leading platforms in the Kingdom such as Noon Food, Toyou, Jahez, HungerStation, Mrsool and others. We ensure your orders arrive on time with the highest quality standards.",
    logisticsSolutions: "Integrated Logistics Solutions",
    logisticsSolutionsDesc:
      "We provide comprehensive and integrated logistics solutions that meet all our customers' needs. From transport and storage to supply chain management, we are here to provide the perfect solutions.",
    fleetModernTech: "Modern and advanced fleet with latest technologies",
    strategicPartnerships: "Strategic partnerships with major global companies",
    integratedLogisticsGlobal:
      "Integrated logistics services with global standards",
    fullCoverageKingdom: "Full coverage of all regions of the Kingdom",
    reliableAndSecure: "Reliable and Secure",
    comprehensiveLogisticsSolutions:
      "Comprehensive logistics solutions for all your needs",
    instantTracking: "Instant Tracking",
    hotDelivery: "Hot Delivery",
    customizedSolutions: "Customized Solutions",
    completeManagement: "Complete Management",
    partnersSubtitle:
      "Our strategic partners from major local and international companies",
    trustedPartner: "Trusted Partner",
    transportCTA2Title: "We Are Your Trusted Partner in Transport & Logistics",
    transportCTA2Desc:
      "Contact us now for distinguished transport and logistics services",

    // Buses Page
    busesTitle: "Buses & Heavy Transport",
    busesDesc:
      "We provide luxury buses for Hajj, Umrah and domestic tourism, and advanced heavy transport for construction and cargo transport - the optimal choice in the Kingdom",
    busesOnlyTitle:
      "Service & Transport of Umrah Performers and Pilgrims to the Sacred House of Allah",
    busesOnlyDesc:
      "We provide distinguished and safe transport services for Umrah performers and pilgrims to the Sacred House of Allah, in addition to domestic tourism services - the optimal choice in the Kingdom",
    hajjUmrah: "Hajj & Umrah Services",
    tourism: "Domestic Tourism",
    trailers: "Heavy Transport",
    safety: "Safety",
    safetyDesc: "Highest global safety and security standards",
    comfort: "Comfort",
    comfortDesc: "Complete comfort for passengers with the highest standards",
    busesIntro:
      "Service & Transport of Umrah Performers and Pilgrims to the Sacred House of Allah",
    busesIntroDesc:
      "We are proud to provide distinguished and safe transport services for Umrah performers and pilgrims to the Sacred House of Allah. We work with major Hajj and Umrah companies in Saudi Arabia to provide luxurious and comfortable buses equipped with the latest technologies to ensure a comfortable, safe and blessed journey. We also provide transport services for domestic tourism with high standards of quality and comfort.",
    hajjUmrahServices:
      "Service & Transport of Umrah Performers and Pilgrims to the Sacred House of Allah",
    hajjUmrahServicesDesc:
      "We work with major Hajj and Umrah companies in the Kingdom to provide luxurious, comfortable and safe buses for transporting Umrah performers and pilgrims to the Sacred House of Allah. We ensure blessed, safe and comfortable trips with the highest service and comfort standards, with full commitment to all safety and quality requirements for serving the Guests of the Most Merciful.",
    domesticTourism: "Domestic Tourism",
    domesticTourismDesc:
      "We provide luxurious and equipped buses for domestic tourism companies in the Kingdom. Our buses are designed to provide a comfortable and enjoyable journey for all passengers on their domestic tourism trips.",
    trailersServices: "Heavy Transport Services",
    trailersServicesDesc:
      "We provide specialized services in heavy transport for contracting companies and cargo transport. Our fleet is advanced and equipped with the latest equipment to ensure safe and efficient transport of goods and equipment.",
    busesFleetModern: "Modern and advanced fleet of buses",
    busesComfortable: "Comfortable and Cozy",
    busesSafeTransport: "Safe and Reliable Transport",
    busesProfessional: "Professional Service",
    busesLuxury: "Luxury",
    busesServicesSubtitle:
      "Distinguished transport service for the Guests of the Most Merciful and domestic tourism",
    busesFeaturesSubtitle: "Our features that make us the optimal choice",
    busesSafetyDetail1:
      "Fleet equipped with latest safety and security systems",
    busesSafetyDetail2: "Professional and highly trained drivers",
    busesSafetyDetail3:
      "Regular maintenance and continuous vehicle inspections",
    busesComfortDetail1: "Luxurious and comfortable seats with spacious areas",
    busesComfortDetail2: "Advanced air conditioning and excellent ventilation",
    busesComfortDetail3: "Entertainment services and free WiFi",
    busesSpeedDetail1: "Full commitment to scheduled arrival times",
    busesSpeedDetail2: "Optimized routes for fast arrival",
    busesSpeedDetail3: "Precise coordination with Hajj and Umrah companies",
    busesCoverageDetail1: "Full coverage of all regions of the Kingdom",
    busesCoverageDetail2: "Service available 24/7",
    busesCoverageDetail3: "Wide network of points and routes",
    busesCapacity: "Large Capacity",
    busesCapacityDesc: "Buses with different capacities to suit all needs",
    busesWifi: "Free WiFi",
    busesWifiDesc: "Free high-speed internet connection for passengers",
    busesAC: "Advanced AC",
    busesACDesc: "Advanced air conditioning system for perfect comfort",
    busesLuggage: "Luggage Space",
    busesLuggageDesc: "Wide and dedicated spaces for safe luggage storage",
    busesQuality: "High Quality",
    busesQualityDesc: "Global quality standards in all our services",
    busesLuxuryDesc:
      "Luxury buses equipped with latest technologies and services",
    busesCTA2Title: "Get Ready for a Blessed Journey With Us",
    busesCTA2Desc:
      "We guarantee you a safe and comfortable journey for the Guests of the Most Merciful",

    // Trailers Page
    trailersTitle: "Heavy Transport",
    trailersDesc:
      "We provide advanced and specialized heavy transport services for construction, cargo and equipment transport - the optimal choice in the Kingdom",
    trailersIntro: "Distinguished Heavy Transport Services",
    trailersIntroTitle: "Specialized Heavy Transport Services",
    trailersFeaturesTitle: "Our Features",
    trailersFeaturesSubtitle:
      "Why we are the optimal choice for heavy transport services",
    trailersServicesTitle: "Our Services",
    trailersServicesSubtitle:
      "Comprehensive heavy transport services in the Kingdom",
    trailersConstruction: "Heavy Transport for Construction",
    trailersConstructionDesc:
      "Specialized heavy transport services for construction companies to transport equipment and materials",
    trailersCargo: "Cargo Transport",
    trailersCargoDesc:
      "Cargo transport services of all sizes with high safety and efficiency",
    trailersEquipment: "Equipment Transport",
    trailersEquipmentDesc:
      "Heavy and special equipment transport with the highest safety standards",
    trailersProfessional: "Professional",
    trailersReliable: "Reliable",
    trailersSafe: "Safe",
    trailersBenefit1: "Modern and advanced heavy transport fleet",
    trailersBenefit2: "Specialized equipment for all types of transport",
    trailersBenefit3: "Reliable and fast service",
    trailersBenefit4: "Full coverage of all regions of the Kingdom",
    trailersCTATitle: "Need Heavy Transport Services?",
    trailersCTADesc: "Contact us now to get the best offers and services",
    trailersCTA2Title: "Ready to Serve You Anytime",
    trailersCTA2Desc: "Our team is available 24/7 to meet your needs",

    // Car Rental Page
    carRentalTitle: "Car Rental",
    rentalTitle: "Car Rental Services",
    rentalDesc:
      "We provide all types of vehicles and cars (small and large) for logistics companies and other companies. We are distinguished by a wide and diverse fleet, competitive prices with special offers and discounts, service available 24/7, regular maintenance and continuous inspections to ensure safety, and simple and fast rental procedures with continuous technical support - the optimal choice in the Kingdom",
    smallVehicles: "Small Vehicles",
    largeVehicles: "Large Vehicles",
    flexibility: "Flexibility",
    flexibilityDesc: "Flexible solutions for your needs",
    availability: "Availability",
    availabilityDesc: "Vehicles available 24/7",
    competitivePrices: "Competitive Prices",
    competitivePricesDesc:
      "Best prices in the market with special offers and discounts",
    bookNow: "Book Now",
    rentalCTA2Title: "Get the Best Offers Now",
    rentalCTA2Desc: "Contact us for special prices and exceptional service",
    rentalIntro: "Distinguished Car Rental Services",
    rentalIntroDesc:
      "Thanks to God, our company can provide any types of cars (small and large) for logistics companies and other companies. We provide flexible and diverse solutions that meet all our customers' needs.",
    smallVehiclesDesc:
      "We provide a wide range of small cars for individuals and companies. All our cars are modern and equipped with the latest technologies to ensure a safe and comfortable journey.",
    largeVehiclesDesc:
      "We provide large and advanced vehicles for logistics companies and other companies. Our vehicles are equipped with the latest equipment and technologies to ensure high performance and excellent efficiency.",
    rentalBenefits: "Car Rental Benefits With Us",
    rentalBenefitsDesc:
      "We provide complete flexibility in rental with competitive prices and distinguished customer service. All our vehicles are modern and equipped with the latest technologies, and we ensure their availability 24/7.",

    // Logistics Management Page
    logisticsManagementTitle: "Logistics Management & Operations",
    logisticsManagementDesc:
      "We provide integrated management and operations services for other logistics companies. We offer professional representatives, equipped vehicles, and comprehensive operational contracts to ensure the success of your logistics operations.",
    logisticsManagementDescShort:
      "Integrated management and operations for logistics companies - representatives, cars, and operational contracts",
    logisticsManagementPartnership: "Strategic Partnership",
    logisticsManagementProfessional: "Professional Service",
    logisticsManagementExpert: "Specialized Expertise",
    logisticsManagementServicesTitle: "Our Services",
    logisticsManagementServicesSubtitle:
      "We provide comprehensive solutions for logistics company management and operations",
    logisticsManagementReps: "Representatives Provision",
    logisticsManagementRepsDesc:
      "We provide professional and highly trained representatives to ensure distinguished service for your customers",
    logisticsManagementCars: "Vehicles Provision",
    logisticsManagementCarsDesc:
      "Wide fleet of vehicles equipped with latest technologies to serve your logistics operations",
    logisticsManagementContracts: "Operational Contracts",
    logisticsManagementContractsDesc:
      "Comprehensive and integrated operational contracts that ensure the success of your logistics operations with high efficiency",
    logisticsManagementManagement:
      "Logistics Companies Management & Operations Service",
    logisticsManagementManagementDesc:
      "Comprehensive service for managing and operating logistics companies including strategic planning, daily management, and continuous process improvement",
    logisticsManagementFeaturesTitle: "Our Features",
    logisticsManagementFeaturesSubtitle:
      "What distinguishes us in logistics company management and operations",
    logisticsManagementFeature1: "Extensive Experience",
    logisticsManagementFeature1Desc:
      "Years of experience in managing and operating logistics companies with major local and international companies",
    logisticsManagementFeature2: "High Efficiency",
    logisticsManagementFeature2Desc:
      "Advanced management systems and professional human resources that ensure the highest levels of efficiency and productivity",
    logisticsManagementFeature3: "Guaranteed Quality",
    logisticsManagementFeature3Desc:
      "Global quality standards in all our services with continuous monitoring and guaranteed excellent performance",
    logisticsManagementFeature4: "Continuous Support",
    logisticsManagementFeature4Desc:
      "Technical and administrative support team available 24/7 to ensure smooth continuity of your operations",
    logisticsManagementBenefitsTitle: "Benefits of Working With Us",
    logisticsManagementBenefitsDesc:
      "We provide you with integrated and comprehensive solutions that ensure the success of your logistics operations",
    logisticsManagementBenefit1:
      "Providing professional and highly trained representatives",
    logisticsManagementBenefit2:
      "Wide fleet of vehicles equipped with latest technologies",
    logisticsManagementBenefit3:
      "Comprehensive and integrated operational contracts with continuous monitoring",
    logisticsManagementBenefit4:
      "Technical and administrative support available 24/7",
    logisticsManagementBenefit5:
      "Integrated management and operations for logistics companies with strategic planning and continuous improvement",
    logisticsManagementCTATitle: "Start Your Partnership With Us Today",
    logisticsManagementCTADesc:
      "Contact us now to learn how we can help you manage and operate your logistics company",
    logisticsManagementCTA2Title: "We're Here to Support You Always",
    logisticsManagementCTA2Desc:
      "Our team is ready to provide solutions tailored to your needs",

    // Digital Marketing Page
    digitalMarketingTitle: "Digital Marketing & Visual Production",
    digitalMarketingDesc:
      "We provide integrated digital marketing and visual production services to help your company grow and reach your target audience effectively",
    digitalMarketingDescShort:
      "Integrated services in digital marketing, visual production, and websites",
    digitalMarketingModern: "Modern Solutions",
    digitalMarketingResults: "Guaranteed Results",
    digitalMarketingProfessional: "Professional Service",
    digitalMarketingServicesTitle: "Our Services",
    digitalMarketingServicesSubtitle:
      "We provide a comprehensive range of digital marketing and visual production services",
    digitalMarketingWebsites: "Website Design",
    digitalMarketingWebsitesDesc:
      "Professional responsive website design and development for all devices",
    digitalMarketingVideo: "Video & Visual Production",
    digitalMarketingVideoDesc:
      "Professional video production for advertisements, marketing, and digital content",
    digitalMarketingPhotography: "Photography",
    digitalMarketingPhotographyDesc:
      "Professional photography services for products, events, and marketing content",
    digitalMarketingSocial: "Social Media Marketing",
    digitalMarketingSocialDesc:
      "Management and execution of effective marketing campaigns on all social media platforms",
    digitalMarketingAnalytics: "Data Analysis & Reports",
    digitalMarketingAnalyticsDesc:
      "Analysis of marketing campaign performance and detailed reports to improve results",
    digitalMarketingSEO: "Search Engine Optimization",
    digitalMarketingSEODesc:
      "Optimizing your website's appearance in search engine results to increase visits and conversions",
    digitalMarketingFeaturesTitle: "Our Features",
    digitalMarketingFeaturesSubtitle:
      "What distinguishes our digital marketing and visual production services",
    digitalMarketingFeature1: "Professional Design",
    digitalMarketingFeature1Desc:
      "Professional team of designers and developers providing innovative and modern solutions",
    digitalMarketingFeature2: "Effective Strategies",
    digitalMarketingFeature2Desc:
      "Well-studied and proven marketing strategies to achieve the best results for our clients",
    digitalMarketingFeature3: "Continuous Monitoring",
    digitalMarketingFeature3Desc:
      "Continuous monitoring of campaign performance and necessary adjustments to ensure success",
    digitalMarketingFeature4: "Fast Results",
    digitalMarketingFeature4Desc:
      "Fast and effective solutions to help you achieve your marketing goals in the shortest time",
    digitalMarketingBenefitsTitle: "Benefits of Working With Us",
    digitalMarketingBenefitsDesc:
      "We provide you with integrated and comprehensive solutions that ensure the success of your marketing campaigns",
    digitalMarketingBenefit1:
      "Professional responsive website design and development",
    digitalMarketingBenefit2:
      "High-quality professional visual content and video production",
    digitalMarketingBenefit3:
      "Effective marketing campaign management on all platforms",
    digitalMarketingBenefit4:
      "Performance analysis and monitoring to continuously improve results",
    digitalMarketingCTATitle: "Start Your Digital Project With Us Today",
    digitalMarketingCTADesc:
      "Contact us now to learn how we can help you develop your digital presence and achieve your marketing goals",
    digitalMarketingCTA2Title: "Let's Start Your Digital Journey Together",
    digitalMarketingCTA2Desc:
      "We specialize in turning your ideas into successful digital reality",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const updateHTMLLang = (lang: Language) => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
      document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    }
  };

  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      const savedLang = localStorage.getItem("language") as Language;
      if (savedLang && (savedLang === "ar" || savedLang === "en")) {
        updateHTMLLang(savedLang);
        return savedLang;
      }
    }
    updateHTMLLang("ar");
    return "ar";
  });

  useEffect(() => {
    updateHTMLLang(language);
  }, [language]);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== "undefined") {
      localStorage.setItem("language", lang);
    }
    updateHTMLLang(lang);
  }, []);

  const t = useCallback(
    (key: string): string => {
      return (
        translations[language][key as keyof (typeof translations)["ar"]] || key
      );
    },
    [language]
  );

  const value = useMemo(
    () => ({ language, setLanguage, t }),
    [language, setLanguage, t]
  );

  return (
    <LanguageContext.Provider value={value}>
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
