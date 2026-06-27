import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type Lang = "en" | "ar" | "hi";

type Dict = Record<string, string>;

const en: Dict = {
  "nav.attar": "Attar",
  "nav.perfume": "Perfume",
  "nav.watch": "Watch",
  "nav.sunglass": "Sunglass",
  "cta.enquire": "Enquire",
  "cta.enquireWa": "Enquire on WhatsApp",
  "cta.explore": "Explore Collection",
  "cta.discover": "Discover",
  "cta.loadMore": "Load More",
  "hero.tag": "New Collection · 2026",
  "hero.title1": "Crafted for the",
  "hero.title2": "bold few.",
  "hero.desc": "Discover an uncompromising selection of attar, perfume, timepieces and eyewear — curated for those who refuse the ordinary.",
  "cat.tag": "The Collections",
  "cat.title": "Shop by category",
  "cat.desc": "Four worlds. One unmistakable standard. Explore the categories that define modern luxury.",
  "products.tag": "Featured",
  "products.title": "The Collection",
  "products.search": "Search products...",
  "products.all": "All",
  "products.noResults": "No products found.",
  "products.showing": "Showing",
  "products.of": "of",
  "sort.label": "Sort by",
  "sort.az": "Name: A → Z",
  "sort.za": "Name: Z → A",
  "sort.popular": "Most Popular",
  "sort.viewed": "Most Viewed",
  "promo.tag": "Limited Edition",
  "promo.title": "The Midnight Collection",
  "promo.desc": "Up to 30% off on signature scents and timepieces. Available for a limited time only.",
  "about.tag": "Our Story",
  "about.title1": "A house built on",
  "about.title2": "heritage",
  "about.title3": "& precision.",
  "about.p1": "Jamal Almari is a curated destination for the discerning. From rare oud distilled in small batches, to mechanical watches engineered for a lifetime — every piece in our house is selected for its craft, character, and quiet confidence.",
  "about.p2": "Founded in Jabal Ali, our boutique brings the spirit of the souk and the rigor of modern luxury into one elegant address.",
  "about.years": "Years",
  "about.brands": "Brands",
  "about.clients": "Clients",
  "footer.shop": "Shop",
  "footer.company": "Company",
  "footer.visit": "Visit Us",
  "footer.about": "About",
  "footer.contact": "Contact",
  "footer.privacy": "Privacy Policy",
  "footer.terms": "Terms",
  "footer.tagline": "A house of curated luxury — attar, perfume, timepieces and eyewear for the bold few.",
  "footer.rights": "All rights reserved.",
  "footer.crafted": "Crafted with precision in Dubai",
  "wa.enquireMsg": "Hello, I'm interested in",
  "wa.priceMsg": "Please share price.",
};

const ar: Dict = {
  "nav.attar": "عطر",
  "nav.perfume": "بارفان",
  "nav.watch": "ساعة",
  "nav.sunglass": "نظارات",
  "cta.enquire": "استفسار",
  "cta.enquireWa": "استفسر عبر واتساب",
  "cta.explore": "استكشف المجموعة",
  "cta.discover": "اكتشف",
  "cta.loadMore": "تحميل المزيد",
  "hero.tag": "مجموعة جديدة · 2026",
  "hero.title1": "صُنع للقلائل",
  "hero.title2": "الجريئين.",
  "hero.desc": "اكتشف مجموعة لا تساوم من العطور والساعات والنظارات — منسقة لمن يرفضون العادي.",
  "cat.tag": "المجموعات",
  "cat.title": "تسوق حسب الفئة",
  "cat.desc": "أربعة عوالم. معيار واحد لا يخطئ. استكشف الفئات التي تحدد الفخامة العصرية.",
  "products.tag": "مميز",
  "products.title": "المجموعة",
  "products.search": "ابحث عن المنتجات...",
  "products.all": "الكل",
  "products.noResults": "لا توجد منتجات.",
  "products.showing": "عرض",
  "products.of": "من",
  "sort.label": "الترتيب",
  "sort.az": "الاسم: أ → ي",
  "sort.za": "الاسم: ي → أ",
  "sort.popular": "الأكثر شعبية",
  "sort.viewed": "الأكثر مشاهدة",
  "promo.tag": "إصدار محدود",
  "promo.title": "مجموعة منتصف الليل",
  "promo.desc": "خصم يصل إلى 30٪ على العطور والساعات المميزة. لفترة محدودة فقط.",
  "about.tag": "قصتنا",
  "about.title1": "بيت مبني على",
  "about.title2": "التراث",
  "about.title3": "والدقة.",
  "about.p1": "جمال الماري وجهة منسقة للذواقة. من العود النادر المقطر بكميات صغيرة، إلى الساعات الميكانيكية المصممة لتدوم — كل قطعة مختارة بعناية.",
  "about.p2": "تأسست في جبل علي، يجمع متجرنا روح السوق ودقة الفخامة العصرية في عنوان أنيق واحد.",
  "about.years": "سنوات",
  "about.brands": "علامة",
  "about.clients": "عميل",
  "footer.shop": "تسوق",
  "footer.company": "الشركة",
  "footer.visit": "زرنا",
  "footer.about": "عنا",
  "footer.contact": "تواصل",
  "footer.privacy": "سياسة الخصوصية",
  "footer.terms": "الشروط",
  "footer.tagline": "بيت الفخامة المنسقة — عطور وساعات ونظارات للجريئين.",
  "footer.rights": "جميع الحقوق محفوظة.",
  "footer.crafted": "صُنع بدقة في دبي",
  "wa.enquireMsg": "مرحباً، أنا مهتم بـ",
  "wa.priceMsg": "يرجى مشاركة السعر.",
};

const hi: Dict = {
  "nav.attar": "अत्तर",
  "nav.perfume": "परफ्यूम",
  "nav.watch": "घड़ी",
  "nav.sunglass": "सनग्लास",
  "cta.enquire": "पूछताछ",
  "cta.enquireWa": "व्हाट्सएप पर पूछताछ करें",
  "cta.explore": "संग्रह देखें",
  "cta.discover": "खोजें",
  "cta.loadMore": "और दिखाएं",
  "hero.tag": "नया संग्रह · 2026",
  "hero.title1": "साहसी कुछ के",
  "hero.title2": "लिए बना.",
  "hero.desc": "अत्तर, परफ्यूम, घड़ियाँ और चश्मों का बेहतरीन चयन — उनके लिए जो साधारण को नकारते हैं।",
  "cat.tag": "संग्रह",
  "cat.title": "श्रेणी के अनुसार खरीदें",
  "cat.desc": "चार दुनियाएँ। एक अचूक मानक। आधुनिक विलासिता को परिभाषित करने वाली श्रेणियों का अन्वेषण करें।",
  "products.tag": "विशेष",
  "products.title": "संग्रह",
  "products.search": "उत्पाद खोजें...",
  "products.all": "सभी",
  "products.noResults": "कोई उत्पाद नहीं मिला।",
  "products.showing": "दिखा रहे हैं",
  "products.of": "में से",
  "sort.label": "क्रमबद्ध करें",
  "sort.az": "नाम: A → Z",
  "sort.za": "नाम: Z → A",
  "sort.popular": "सबसे लोकप्रिय",
  "sort.viewed": "सबसे ज़्यादा देखा गया",
  "promo.tag": "सीमित संस्करण",
  "promo.title": "मिडनाइट कलेक्शन",
  "promo.desc": "सिग्नेचर खुशबू और घड़ियों पर 30% तक की छूट। सीमित समय के लिए।",
  "about.tag": "हमारी कहानी",
  "about.title1": "विरासत और",
  "about.title2": "सटीकता",
  "about.title3": "पर बना घर।",
  "about.p1": "जमाल अलमारी पारखियों के लिए एक क्यूरेटेड गंतव्य है। दुर्लभ ऊद से लेकर जीवन भर के लिए बनी मैकेनिकल घड़ियों तक — हर टुकड़ा सावधानी से चुना गया है।",
  "about.p2": "जबल अली में स्थापित, हमारा बुटीक सूक की भावना और आधुनिक विलासिता की कठोरता को एक सुरुचिपूर्ण पते में लाता है।",
  "about.years": "वर्ष",
  "about.brands": "ब्रांड",
  "about.clients": "ग्राहक",
  "footer.shop": "दुकान",
  "footer.company": "कंपनी",
  "footer.visit": "हमसे मिलें",
  "footer.about": "हमारे बारे में",
  "footer.contact": "संपर्क",
  "footer.privacy": "गोपनीयता नीति",
  "footer.terms": "शर्तें",
  "footer.tagline": "क्यूरेटेड लग्ज़री का घर — अत्तर, परफ्यूम, घड़ियाँ और चश्मे।",
  "footer.rights": "सर्वाधिकार सुरक्षित।",
  "footer.crafted": "दुबई में सटीकता से तैयार",
  "wa.enquireMsg": "नमस्ते, मुझे रुचि है",
  "wa.priceMsg": "कृपया कीमत साझा करें।",
};

const DICTS: Record<Lang, Dict> = { en, ar, hi };

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
  dir: "ltr" | "rtl";
};

const I18nContext = createContext<Ctx | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const stored = (typeof window !== "undefined" && localStorage.getItem("lang")) as Lang | null;
    if (stored && DICTS[stored]) setLangState(stored);
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    const dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.setAttribute("lang", lang);
    document.documentElement.setAttribute("dir", dir);
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    try { localStorage.setItem("lang", l); } catch {}
  };

  const t = (key: string) => DICTS[lang][key] ?? DICTS.en[key] ?? key;
  const dir: "ltr" | "rtl" = lang === "ar" ? "rtl" : "ltr";

  return <I18nContext.Provider value={{ lang, setLang, t, dir }}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
