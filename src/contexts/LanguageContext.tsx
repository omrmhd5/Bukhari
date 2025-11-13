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
    water: "تحلية وبيع المياه",
    transport: "النقل واللوجستيات",
    buses: "الباصات والتريلات",
    carRental: "تأجير السيارات",
    contact: "اتصل بنا",

    // Home Page
    heroTitle: "شركة عبدالله  بخاري",
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
      "نقدم مجموعة شاملة من الخدمات تشمل إنتاج وتوريد المياه المحلاة، النقل والخدمات اللوجستية، توفير الباصات للحج والعمرة والسياحة، التريلات للمقاولات، وتأجير السيارات بجميع أنواعها.",
    ourStats: "إحصائياتنا",
    mainServices: "خدمات رئيسية",
    strategicPartner: "شريك استراتيجي",
    availableService: "خدمة متاحة",
    fullCoverage: "تغطية شاملة",
    waterProductionDescShort: "إنتاج وتوريد المياه المحلاة",
    transportServicesDescShort: "خدمات النقل واللوجستيات",
    busesTrailersDescShort: "الباصات والتريلات",
    carRentalDescShort: "تأجير السيارات",
    qualityAndDelivery: "الجودة والتوصيل",
    integratedLogisticsServices: "خدمات لوجستية متكاملة",
    ourLogisticsServices: "خدماتنا اللوجستية",
    hajjUmrahDescShort: "خدمات نقل مريحة وآمنة للحجاج والمعتمرين",
    tourismDescShort: "باصات فاخرة للسياحة الداخلية",
    trailersDescShort: "تريلات للمقاولات ونقل البضائع",
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
    phone: "الهاتف",
    email: "البريد الإلكتروني",
    whatsapp: "واتساب",
    name: "الاسم",
    message: "الرسالة",
    send: "إرسال",

    // Water Page
    waterTitle: "تحلية وبيع المياه",
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

    // Buses Page
    busesTitle: "الباصات والتريلات",
    busesDesc:
      "نوفر باصات فاخرة للحج والعمرة والسياحة الداخلية، وتريلات متطورة للمقاولات ونقل البضائع - الخيار الأمثل في المملكة",
    hajjUmrah: "خدمات الحج والعمرة",
    tourism: "السياحة الداخلية",
    trailers: "التريلات",
    safety: "السلامة",
    safetyDesc: "أعلى معايير السلامة والأمان العالمية",
    comfort: "الراحة",
    comfortDesc: "راحة تامة للركاب بأعلى المعايير",
    busesIntro: "خدمات الباصات المتميزة",
    busesIntroDesc:
      "نقدم خدمات متميزة في مجال توفير الباصات لشركات الحج والعمرة والسياحة الداخلية في المملكة العربية السعودية. باصاتنا فاخرة ومجهزة بأحدث التقنيات لضمان رحلة مريحة وآمنة.",
    hajjUmrahServices: "خدمات الحج والعمرة",
    hajjUmrahServicesDesc:
      "نعمل مع كبرى شركات الحج والعمرة في المملكة لتوفير باصات فاخرة ومريحة للحجاج والمعتمرين. نضمن رحلات آمنة ومريحة مع أعلى معايير الخدمة والراحة.",
    domesticTourism: "السياحة الداخلية",
    domesticTourismDesc:
      "نوفر باصات فاخرة ومجهزة لشركات السياحة الداخلية في المملكة. باصاتنا مصممة لتوفير رحلة مريحة وممتعة لجميع الركاب في رحلاتهم السياحية الداخلية.",
    trailersServices: "خدمات التريلات",
    trailersServicesDesc:
      "نقدم خدمات متخصصة في توفير التريلات لشركات المقاولات ونقل البضائع. تريلاتنا متطورة ومجهزة بأحدث المعدات لضمان نقل آمن وفعال للبضائع والمعدات.",
    busesFleetModern: "أسطول حديث ومتطور من الباصات والتريلات",
    busesComfortable: "مريح ومريح",
    busesSafeTransport: "نقل آمن وموثوق",
    busesProfessional: "خدمة احترافية",
    busesLuxury: "فاخر",
    busesServicesSubtitle: "خدمات شاملة للباصات والتريلات في المملكة",
    busesFeaturesSubtitle: "مميزاتنا التي تجعلنا الخيار الأمثل",

    // Car Rental Page
    rentalTitle: "تأجير السيارات",
    rentalDesc:
      "نوفر جميع أنواع السيارات والمركبات (صغيرة وكبيرة) للشركات اللوجستية والشركات الأخرى - الخيار الأمثل في المملكة",
    smallVehicles: "مركبات صغيرة",
    largeVehicles: "مركبات كبيرة",
    flexibility: "المرونة",
    flexibilityDesc: "حلول مرنة تناسب احتياجاتك",
    availability: "التوفر",
    availabilityDesc: "مركبات متاحة على مدار الساعة",
    bookNow: "احجز الآن",
    rentalIntro: "خدمات تأجير السيارات المتميزة",
    rentalIntroDesc:
      "بفضل الله، تستطيع شركتنا توفير أي أنواع سيارات (صغيرة وكبيرة) لشركات اللوجستية وغيرها من الشركات الأخرى. نحن نقدم حلولاً مرنة ومتنوعة تلبي جميع احتياجات عملائنا.",
    smallVehiclesDesc:
      "نوفر مجموعة واسعة من السيارات الصغيرة للأفراد والشركات. جميع سياراتنا حديثة ومجهزة بأحدث التقنيات لضمان رحلة آمنة ومريحة.",
    largeVehiclesDesc:
      "نقدم مركبات كبيرة ومتطورة لشركات اللوجستية والشركات الأخرى. مركباتنا مجهزة بأحدث المعدات والتقنيات لضمان أداء عالي وكفاءة ممتازة.",
    rentalBenefits: "مميزات تأجير السيارات معنا",
    rentalBenefitsDesc:
      "نوفر مرونة كاملة في التأجير مع أسعار تنافسية وخدمة عملاء متميزة. جميع مركباتنا حديثة ومجهزة بأحدث التقنيات، ونضمن توفرها على مدار الساعة.",
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
    heroTitle: "Abdullah  Bukhari Company",
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
      "We provide a comprehensive range of services including desalinated water production and supply, transport and logistics services, bus provision for Hajj, Umrah and tourism, trailers for contracting, and car rental of all types.",
    ourStats: "Our Statistics",
    mainServices: "Main Services",
    strategicPartner: "Strategic Partner",
    availableService: "Available Service",
    fullCoverage: "Full Coverage",
    waterProductionDescShort: "Desalinated Water Production & Supply",
    transportServicesDescShort: "Transport & Logistics Services",
    busesTrailersDescShort: "Buses & Trailers",
    carRentalDescShort: "Car Rental",
    qualityAndDelivery: "Quality & Delivery",
    integratedLogisticsServices: "Integrated Logistics Services",
    ourLogisticsServices: "Our Logistics Services",
    hajjUmrahDescShort:
      "Comfortable and safe transport services for pilgrims and Umrah performers",
    tourismDescShort: "Luxury buses for domestic tourism",
    trailersDescShort: "Trailers for contracting and cargo transport",
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

    // Buses Page
    busesTitle: "Buses & Trailers",
    busesDesc:
      "We provide luxury buses for Hajj, Umrah and domestic tourism, and advanced trailers for construction and cargo transport - the optimal choice in the Kingdom",
    hajjUmrah: "Hajj & Umrah Services",
    tourism: "Domestic Tourism",
    trailers: "Trailers",
    safety: "Safety",
    safetyDesc: "Highest global safety and security standards",
    comfort: "Comfort",
    comfortDesc: "Complete comfort for passengers with the highest standards",
    busesIntro: "Distinguished Bus Services",
    busesIntroDesc:
      "We provide distinguished services in providing buses for Hajj, Umrah and domestic tourism companies in Saudi Arabia. Our buses are luxurious and equipped with the latest technologies to ensure a comfortable and safe journey.",
    hajjUmrahServices: "Hajj & Umrah Services",
    hajjUmrahServicesDesc:
      "We work with major Hajj and Umrah companies in the Kingdom to provide luxurious and comfortable buses for pilgrims and Umrah performers. We ensure safe and comfortable trips with the highest service and comfort standards.",
    domesticTourism: "Domestic Tourism",
    domesticTourismDesc:
      "We provide luxurious and equipped buses for domestic tourism companies in the Kingdom. Our buses are designed to provide a comfortable and enjoyable journey for all passengers on their domestic tourism trips.",
    trailersServices: "Trailer Services",
    trailersServicesDesc:
      "We provide specialized services in providing trailers for contracting companies and cargo transport. Our trailers are advanced and equipped with the latest equipment to ensure safe and efficient transport of goods and equipment.",
    busesFleetModern: "Modern and advanced fleet of buses and trailers",
    busesComfortable: "Comfortable and Cozy",
    busesSafeTransport: "Safe and Reliable Transport",
    busesProfessional: "Professional Service",
    busesLuxury: "Luxury",
    busesServicesSubtitle:
      "Comprehensive bus and trailer services in the Kingdom",
    busesFeaturesSubtitle: "Our features that make us the optimal choice",

    // Car Rental Page
    rentalTitle: "Car Rental Services",
    rentalDesc:
      "We provide all types of vehicles and cars (small and large) for logistics companies and other companies - the optimal choice in the Kingdom",
    smallVehicles: "Small Vehicles",
    largeVehicles: "Large Vehicles",
    flexibility: "Flexibility",
    flexibilityDesc: "Flexible solutions for your needs",
    availability: "Availability",
    availabilityDesc: "Vehicles available 24/7",
    bookNow: "Book Now",
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
