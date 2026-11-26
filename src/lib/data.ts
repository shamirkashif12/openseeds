// All site content lives here so it can be edited in one place.
// Every visible string is an L: { en: English, ur: Urdu (in Urdu script) }.

export type L = { en: string; ur: string };

export const img = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=75`;

export const IMG = {
  sunsetField: img("1500382017468-9049fed747ef"),
  wheatGrain: img("1574323347407-f5e1ad6d020b"),
  cornRows: img("1625246333195-78d9c38ad449"),
  vegetables: img("1464226184884-fa280b87c399"),
  cornCobs: img("1551754655-cd27e38d2076"),
  seedlingPots: img("1523348837708-15d4a09cfac2"),
  handSeedling: img("1530836369250-ef72a3f5cda8"),
  soil: img("1416879595882-3373a0480b5b"),
  cropField: img("1592982537447-7440770cbfc9"),
  riceGrain: img("1586201375761-83865001e31c"),
  fieldRows: img("1560493676-04071c5f467b"),
  labCells: img("1576086213369-97a306d36557"),
  vegMarket: img("1471193945509-9ad0617afabf"),
  sunflower: img("1597848212624-a19eb35e2651"),
  sprout: img("1501004318641-b39e6451bec6"),
  farmerWorking: img("1589923188900-85dae523342b"),
  greenhouse: img("1516253593875-bd7ba052fbc5"),
  harvest: img("1605000797499-95a51c5269ae"),
  tractor: img("1594771804886-a933bb2d609b"),
  greenRows: img("1563514227147-6d2ff665a6a0"),
  handsSoil: img("1590682680695-43b964a3ae17"),
  greenhouseLarge: img("1524486361537-8ad15938e1a3"),
  sprayer: img("1628352081506-83c43123ed6d"),
  fieldSunset: img("1620200423727-8127f75d7f53"),
};

export const SITE = {
  name: "Open Seed International",
  legalName: "Open Seed International Agro Crop Sciences (Pvt) Ltd.",
  legalNameUrdu: "اوپن سیڈ انٹرنیشنل ایگرو کراپ سائنسز (پرائیویٹ لمیٹڈ)",
  tagline: "Growing Together",
  email: "openseed145@gmail.com",
  phones: ["0305-1728923", "0300-1594118", "0303-0009145"],
  whatsapp: "923051728923",
  factory: { en: "1-KM Pakpattan Road, Qaboola, Arifwala", ur: "ایک کلومیٹر پاکپتن روڈ، قبولہ، عارف والا" },
  office: { en: "C Sector, Bahria Town, Lahore", ur: "سی سیکٹر، بحریہ ٹاؤن، لاہور" },
  mapLat: 30.1965325,
  mapLng: 73.0944825,
  mapLink:
    "https://www.google.com/maps/place/30%C2%B011'47.5%22N+73%C2%B005'40.1%22E/@30.1965325,73.0919076,17z",
  social: {
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
    youtube: "https://youtube.com/",
    tiktok: "https://tiktok.com/",
  },
};

// Brand slogans — always shown in Urdu, in both languages.
export const URDU = {
  slogan1: "واہ کیا بات ہے اوپن سیڈز کی",
  slogan2: "اب ہوں گے ہمارے خواب پورے",
  trust: "اوپن سیڈ انٹرنیشنل پر بھروسہ، بہتر مستقبل کی ضمانت",
  farmers: "سب زمینداروں کا اعتماد صرف اوپن سیڈ انٹرنیشنل کمپنی",
};

export const NAV: { href: string; label: L }[] = [
  { href: "/", label: { en: "Home", ur: "ہوم" } },
  { href: "/about", label: { en: "About Us", ur: "ہمارے بارے میں" } },
  { href: "/products", label: { en: "Products & Services", ur: "مصنوعات و خدمات" } },
  { href: "/research-development", label: { en: "Research & Development", ur: "تحقیق و ترقی" } },
  { href: "/downloads", label: { en: "Downloads", ur: "ڈاؤن لوڈز" } },
  { href: "/gallery", label: { en: "Gallery", ur: "گیلری" } },
];

export const CONTACT_LINK = { href: "/contact", label: { en: "Contact Us", ur: "رابطہ کریں" } };

export type Category = {
  slug: string;
  name: L;
  desc: L;
  image: string;
  comingSoon?: boolean;
};

export const CATEGORIES: Category[] = [
  {
    slug: "field-crops",
    name: { en: "Field Crops", ur: "فیلڈ کراپس" },
    desc: {
      en: "Hybrid corn and paddy seeds bred for Pakistan's climate.",
      ur: "ہائبرڈ مکئی اور دھان کے بیج جو پاکستان کے موسم کے لیے تیار کیے گئے ہیں۔",
    },
    image: IMG.cornRows,
  },
  {
    slug: "oil-seeds",
    name: { en: "Oil Seeds", ur: "آئل سیڈز" },
    desc: {
      en: "Sesame and other oil seeds — less water, good yield, better profit.",
      ur: "تل اور دیگر تیل دار بیج — کم پانی، اچھی پیداوار، بہتر منافع۔",
    },
    image: IMG.sunflower,
  },
  {
    slug: "vegetables",
    name: { en: "Vegetables", ur: "سبزیاں" },
    desc: {
      en: "Hybrid vegetable seeds — in preparation and coming to market soon.",
      ur: "ہائبرڈ سبزیوں کے بیج — تیاری جاری ہے، جلد مارکیٹ میں دستیاب۔",
    },
    image: IMG.vegetables,
    comingSoon: true,
  },
  {
    slug: "fodder",
    name: { en: "Fodder", ur: "چارہ" },
    desc: {
      en: "High-yield green fodder varieties for livestock — coming soon.",
      ur: "مویشیوں کے لیے زیادہ سبز چارہ دینے والی اقسام — جلد آ رہی ہیں۔",
    },
    image: IMG.greenRows,
    comingSoon: true,
  },
];

export type Product = {
  slug: string;
  name: L;
  crop: L;
  category: string;
  image: string;
  isNew?: boolean;
  short: L;
  description: L;
  features: L[];
  specs: { label: L; value: L }[];
};

const same = (s: string): L => ({ en: s, ur: s });

const SPEC = {
  crop: { en: "Crop", ur: "فصل" },
  season: { en: "Season", ur: "موسم" },
  maturity: { en: "Maturity", ur: "پکنے کا دورانیہ" },
  grain: { en: "Grain Colour", ur: "دانے کا رنگ" },
  seedRate: { en: "Seed Rate", ur: "شرحِ بیج" },
  germination: { en: "Germination", ur: "اگاؤ" },
  nursery: { en: "Nursery", ur: "پنیری" },
  transplanting: { en: "Transplanting", ur: "منتقلی" },
  sowing: { en: "Sowing", ur: "بوائی" },
};
const CORN: L = { en: "Maize / Corn (Hybrid)", ur: "مکئی (ہائبرڈ)" };
const SPRING_AUTUMN: L = { en: "Spring & Autumn", ur: "بہار و خزاں" };
const KHARIF: L = { en: "Kharif", ur: "خریف" };
const JUNE_JULY: L = { en: "June – July", ur: "جون – جولائی" };
const HYBRID_CORN: L = { en: "Hybrid Corn Seed", ur: "ہائبرڈ مکئی کا بیج" };

// NOTE: spec values are indicative placeholders — confirm with the agronomy team.
export const PRODUCTS: Product[] = [
  {
    slug: "p-3940",
    name: same("P-3940"),
    crop: HYBRID_CORN,
    category: "field-crops",
    image: "/images/corn-p3940.jpg",
    short: {
      en: "Long cobs, heavy grain — every farmer's first choice.",
      ur: "لمبی چھلی، بھاری دانہ — ہر زمیندار کی پہلی پسند۔",
    },
    description: {
      en: "P-3940 is Open Seed International's flagship hybrid corn variety: a strong stalk, long and fully filled cobs, and bright orange-yellow grain. Suited to both the spring and autumn seasons.",
      ur: "P-3940 اوپن سیڈ انٹرنیشنل کی فلیگ شپ ہائبرڈ مکئی کی قسم ہے۔ مضبوط تنا، لمبی اور مکمل بھری ہوئی چھلی، اور چمکدار نارنجی پیلا دانہ۔ بہار اور خزاں دونوں موسموں کے لیے موزوں۔",
    },
    features: [
      { en: "High yield potential", ur: "زیادہ پیداوار کی صلاحیت" },
      { en: "Strong stalk with low risk of lodging", ur: "مضبوط تنا، گرنے کا کم خطرہ" },
      { en: "Better resistance to disease", ur: "بیماریوں کے خلاف بہتر قوتِ مدافعت" },
      { en: "Heavy, bright orange-yellow grain", ur: "نارنجی پیلا، بھاری اور چمکدار دانہ" },
      { en: "Tolerates heat and water shortage", ur: "گرمی اور پانی کی کمی برداشت کرنے کی صلاحیت" },
    ],
    specs: [
      { label: SPEC.crop, value: CORN },
      { label: SPEC.season, value: SPRING_AUTUMN },
      { label: SPEC.maturity, value: { en: "110 – 120 days", ur: "110 – 120 دن" } },
      { label: SPEC.grain, value: { en: "Orange-Yellow", ur: "نارنجی پیلا" } },
      { label: SPEC.seedRate, value: { en: "8 – 10 kg / acre", ur: "8 – 10 کلو فی ایکڑ" } },
      { label: SPEC.germination, value: { en: "90%+ (min.)", ur: "کم از کم 90%" } },
    ],
  },
  {
    slug: "p-1881",
    name: same("P-1881"),
    crop: HYBRID_CORN,
    category: "field-crops",
    image: IMG.cornCobs,
    isNew: true,
    short: {
      en: "New! Next-level yield with modern genetics.",
      ur: "نیا! جدید جینیات کے ساتھ اگلے درجے کی پیداوار۔",
    },
    description: {
      en: "P-1881 is our new hybrid corn variety, brought to market after extensive research. A uniform crop, long cobs and better grain filling — made to fulfil every farmer's dreams.",
      ur: "P-1881 ہماری نئی ہائبرڈ مکئی کی قسم ہے جو جدید تحقیق کے بعد مارکیٹ میں لائی گئی ہے۔ یکساں فصل، لمبی چھلی اور بہتر دانہ بھرائی — زمیندار کے خواب پورے کرنے کے لیے۔",
    },
    features: [
      { en: "New genetics — next-level yield", ur: "نئی جینیات — اگلے درجے کی پیداوار" },
      { en: "Uniform plant height and cob placement", ur: "پودے کی یکساں اونچائی اور چھلی کی ترتیب" },
      { en: "Excellent grain filling", ur: "بہترین دانہ بھرائی" },
      { en: "Stay-green — the stalk stays green until harvest", ur: "اسٹے گرین — آخر تک ہرا تنا" },
      { en: "Suited to both silage and grain", ur: "سائلج اور دانے دونوں کے لیے موزوں" },
    ],
    specs: [
      { label: SPEC.crop, value: CORN },
      { label: SPEC.season, value: SPRING_AUTUMN },
      { label: SPEC.maturity, value: { en: "115 – 125 days", ur: "115 – 125 دن" } },
      { label: SPEC.grain, value: { en: "Yellow-Orange", ur: "پیلا نارنجی" } },
      { label: SPEC.seedRate, value: { en: "8 – 10 kg / acre", ur: "8 – 10 کلو فی ایکڑ" } },
      { label: SPEC.germination, value: { en: "90%+ (min.)", ur: "کم از کم 90%" } },
    ],
  },
  {
    slug: "paddy-seed",
    name: { en: "Paddy Seed", ur: "دھان کا بیج" },
    crop: { en: "Rice / Paddy", ur: "چاول / دھان" },
    category: "field-crops",
    image: "/images/paddy-seed.jpg",
    short: {
      en: "Clean, certified paddy seed — better returns.",
      ur: "صاف ستھرا، تصدیق شدہ دھان کا بیج — بہتر منافع۔",
    },
    description: {
      en: "Paddy seed from Open Seed International is selected, cleaned and graded for the rice-growing areas of Punjab and Sindh. Long grain, good milling and a better price in the market.",
      ur: "اوپن سیڈ انٹرنیشنل کا دھان کا بیج چنا ہوا، صاف اور گریڈ شدہ ہے جو پنجاب اور سندھ کے چاول کے علاقوں کے لیے موزوں ہے۔ لمبا دانہ، اچھی ملنگ اور مارکیٹ میں بہتر قیمت۔",
    },
    features: [
      { en: "Graded and clean seed", ur: "گریڈ شدہ اور صاف بیج" },
      { en: "Long, slender grain", ur: "لمبا اور پتلا دانہ" },
      { en: "Good milling recovery", ur: "اچھی ملنگ ریکوری" },
      { en: "Uniform germination in the nursery", ur: "پنیری میں یکساں اگاؤ" },
    ],
    specs: [
      { label: SPEC.crop, value: { en: "Rice / Paddy", ur: "چاول / دھان" } },
      { label: SPEC.season, value: KHARIF },
      { label: SPEC.nursery, value: { en: "May – June", ur: "مئی – جون" } },
      { label: SPEC.transplanting, value: JUNE_JULY },
      { label: SPEC.germination, value: { en: "85%+ (min.)", ur: "کم از کم 85%" } },
    ],
  },
  {
    slug: "sesame-seed",
    name: { en: "Sesame Seed", ur: "تل کا بیج" },
    crop: { en: "Sesame (Til)", ur: "تل" },
    category: "oil-seeds",
    image: "/images/sesame-seed.jpg",
    short: {
      en: "Low cost, less water — better income from sesame.",
      ur: "کم خرچ، کم پانی — تل کی فصل سے بہتر آمدنی۔",
    },
    description: {
      en: "Sesame is a cash oil-seed crop. Sesame seed from Open Seed International gives more capsules, a higher oil content and a good yield with less water.",
      ur: "تل ایک نقد آور تیل دار فصل ہے۔ اوپن سیڈ انٹرنیشنل کا تل کا بیج زیادہ پھلیاں، تیل کی بہتر مقدار اور کم پانی میں اچھی پیداوار دیتا ہے۔",
    },
    features: [
      { en: "More capsules per plant", ur: "فی پودا زیادہ پھلیاں" },
      { en: "Higher oil content", ur: "تیل کی بہتر مقدار" },
      { en: "Good yield even with less water", ur: "کم پانی میں بھی اچھی پیداوار" },
      { en: "Export-quality grain", ur: "ایکسپورٹ کوالٹی دانہ" },
    ],
    specs: [
      { label: SPEC.crop, value: { en: "Sesame (Til)", ur: "تل" } },
      { label: SPEC.season, value: KHARIF },
      { label: SPEC.sowing, value: JUNE_JULY },
      { label: SPEC.seedRate, value: { en: "1.5 – 2 kg / acre", ur: "1.5 – 2 کلو فی ایکڑ" } },
      { label: SPEC.germination, value: { en: "85%+ (min.)", ur: "کم از کم 85%" } },
    ],
  },
];

export const STATS: { value: number; suffix: string; label: L; sub: L }[] = [
  { value: 10000, suffix: "+", label: { en: "Happy Farmers", ur: "خوش کسان" }, sub: { en: "Who trust our seed", ur: "جو ہمارے بیج پر بھروسہ کرتے ہیں" } },
  { value: 300, suffix: "+", label: { en: "Dealer Network", ur: "ڈیلر نیٹ ورک" }, sub: { en: "Across Pakistan", ur: "پورے پاکستان میں" } },
  { value: 25, suffix: "+", label: { en: "Districts", ur: "اضلاع" }, sub: { en: "Punjab & Sindh", ur: "پنجاب و سندھ" } },
  { value: 4, suffix: "", label: { en: "Seed Products", ur: "بیج کی مصنوعات" }, sub: { en: "And growing", ur: "اور بڑھ رہی ہیں" } },
];

export const WHY_US: { icon: string; title: L; text: L }[] = [
  {
    icon: "ShieldCheck",
    title: { en: "Quality Assurance", ur: "معیار کی ضمانت" },
    text: {
      en: "Every bag is lab-tested — it reaches the market only after germination, purity and moisture checks.",
      ur: "ہر بیگ لیبارٹری سے ٹیسٹ شدہ — اگاؤ، خالصیت اور نمی کی جانچ کے بعد ہی مارکیٹ میں۔",
    },
  },
  {
    icon: "Sprout",
    title: { en: "High-Yield Varieties", ur: "زیادہ پیداوار والی اقسام" },
    text: {
      en: "High-yield varieties selected to suit Pakistan's climate and soil.",
      ur: "پاکستان کے موسم اور زمین کے مطابق چنی گئی زیادہ پیداوار والی اقسام۔",
    },
  },
  {
    icon: "FlaskConical",
    title: { en: "Research Based", ur: "تحقیق پر مبنی" },
    text: {
      en: "Better genetics selected every season through field trials and R&D.",
      ur: "فیلڈ ٹرائلز اور تحقیق کے ذریعے ہر موسم بہتر جینیات کا انتخاب۔",
    },
  },
  {
    icon: "Handshake",
    title: { en: "Farmer Support", ur: "کسان کی معاونت" },
    text: {
      en: "From sowing to harvest — our field team is with you, guiding every step.",
      ur: "بوائی سے کٹائی تک — ہماری فیلڈ ٹیم ہر قدم پر آپ کے ساتھ اور آپ کی رہنمائی کے لیے۔",
    },
  },
];

export const PROCESS: { title: L; text: L; icon: string }[] = [
  { title: { en: "Research", ur: "تحقیق" }, text: { en: "Germplasm selection and breeding", ur: "جرم پلازم کا انتخاب اور بریڈنگ" }, icon: "Microscope" },
  { title: { en: "Field Trials", ur: "فیلڈ ٹرائلز" }, text: { en: "Testing across different regions", ur: "مختلف علاقوں میں جانچ" }, icon: "Tractor" },
  { title: { en: "Processing", ur: "پروسیسنگ" }, text: { en: "Cleaning, grading and treatment", ur: "صفائی، گریڈنگ اور ٹریٹمنٹ" }, icon: "Factory" },
  { title: { en: "Quality Lab", ur: "کوالٹی لیب" }, text: { en: "Germination & purity tests", ur: "اگاؤ اور خالصیت کے ٹیسٹ" }, icon: "FlaskConical" },
  { title: { en: "To You", ur: "آپ تک" }, text: { en: "Through dealers to every village", ur: "ڈیلرز کے ذریعے ہر گاؤں تک" }, icon: "Truck" },
];

// Placeholder testimonials — replace with real farmer feedback.
export const TESTIMONIALS: { name: L; place: L; crop: L; text: L }[] = [
  {
    name: { en: "Ch. Muhammad Aslam", ur: "چوہدری محمد اسلم" },
    place: { en: "Arifwala, Pakpattan", ur: "عارف والا، پاکپتن" },
    crop: same("P-3940"),
    text: {
      en: "I planted P-3940 and the cobs were so long and heavy that the whole village came to see. What a seed, Open Seed International!",
      ur: "P-3940 لگایا تو چھلی اتنی لمبی اور بھاری تھی کہ پورے گاؤں نے دیکھی۔ واہ کیا بات ہے اوپن سیڈز کی!",
    },
  },
  {
    name: { en: "Rana Imran", ur: "رانا عمران" },
    place: { en: "Sahiwal", ur: "ساہیوال" },
    crop: same("P-3940"),
    text: {
      en: "The stalk was strong — the crop stayed standing even in a storm. I'll plant the same seed again next year.",
      ur: "تنا مضبوط تھا، آندھی میں بھی فصل کھڑی رہی۔ اگلے سال بھی یہی بیج لگاؤں گا۔",
    },
  },
  {
    name: { en: "Malik Tariq", ur: "ملک طارق" },
    place: { en: "Okara", ur: "اوکاڑہ" },
    crop: { en: "Paddy Seed", ur: "دھان کا بیج" },
    text: {
      en: "The nursery came up perfectly even and the grain was long. I got a good price at the mandi.",
      ur: "پنیری بالکل یکساں نکلی اور دانہ لمبا تھا۔ منڈی میں اچھی قیمت ملی۔",
    },
  },
  {
    name: { en: "Haji Abdul Ghafoor", ur: "حاجی عبدالغفور" },
    place: { en: "Vehari", ur: "وہاڑی" },
    crop: { en: "Sesame", ur: "تل" },
    text: {
      en: "The sesame crop did well even with little water. The Open Seed International team guided us all the way.",
      ur: "تل کی فصل کم پانی میں بھی اچھی رہی۔ اوپن سیڈ انٹرنیشنل کی ٹیم نے پوری رہنمائی کی۔",
    },
  },
];

export const TIMELINE: { year: L; title: L; text: L }[] = [
  {
    year: { en: "The Beginning", ur: "آغاز" },
    title: { en: "Foundation", ur: "بنیاد" },
    text: { en: "Open Seed International was founded in Arifwala with a passion for serving farmers.", ur: "عارف والا میں کسانوں کی خدمت کے جذبے کے ساتھ اوپن سیڈ انٹرنیشنل کی بنیاد رکھی گئی۔" },
  },
  {
    year: { en: "Factory", ur: "فیکٹری" },
    title: { en: "Processing Plant", ur: "پروسیسنگ پلانٹ" },
    text: { en: "A modern seed processing and packing unit was set up on Pakpattan Road, Qaboola.", ur: "پاکپتن روڈ، قبولہ پر جدید سیڈ پروسیسنگ اور پیکنگ یونٹ قائم کیا گیا۔" },
  },
  {
    year: same("P-3940"),
    title: { en: "Flagship Launch", ur: "فلیگ شپ لانچ" },
    text: { en: "P-3940 hybrid corn launched and won farmers' trust.", ur: "P-3940 ہائبرڈ مکئی لانچ ہوئی اور زمینداروں کا بھروسہ جیتا۔" },
  },
  {
    year: { en: "Lahore", ur: "لاہور" },
    title: { en: "Corporate Office", ur: "کارپوریٹ آفس" },
    text: { en: "Corporate office in Bahria Town, Lahore — marketing and international business.", ur: "بحریہ ٹاؤن لاہور میں کارپوریٹ آفس — مارکیٹنگ اور بین الاقوامی کاروبار۔" },
  },
  {
    year: same("P-1881"),
    title: { en: "New Variety", ur: "نئی قسم" },
    text: { en: "The new hybrid P-1881 reaches the market — next-level yield.", ur: "نئی ہائبرڈ P-1881 مارکیٹ میں — اگلے درجے کی پیداوار۔" },
  },
];

export const FAQS: { q: L; a: L }[] = [
  {
    q: { en: "Where can I buy Open Seed International products?", ur: "اوپن سیڈ انٹرنیشنل کی مصنوعات کہاں سے ملیں گی؟" },
    a: {
      en: "Our authorized dealers are present in districts across Punjab and Sindh. Contact us on WhatsApp or by phone to find your nearest dealer.",
      ur: "ہمارے مجاز ڈیلرز پنجاب اور سندھ کے مختلف اضلاع میں موجود ہیں۔ اپنے قریبی ڈیلر کے لیے واٹس ایپ یا فون پر رابطہ کریں۔",
    },
  },
  {
    q: { en: "When is the right time to sow corn?", ur: "مکئی کی بوائی کا صحیح وقت کیا ہے؟" },
    a: {
      en: "For spring corn, late January to February is best; for autumn corn, late July to August. Ask our field team for advice specific to your area.",
      ur: "بہاریہ مکئی کے لیے جنوری کے آخر سے فروری، اور خزاں کی مکئی کے لیے جولائی کے آخر سے اگست بہترین وقت ہے۔ اپنے علاقے کے مطابق ہماری فیلڈ ٹیم سے مشورہ کریں۔",
    },
  },
  {
    q: { en: "Can I become an Open Seed International dealer?", ur: "کیا میں اوپن سیڈ انٹرنیشنل کا ڈیلر بن سکتا ہوں؟" },
    a: {
      en: "Yes! Fill in the form on the Contact page or send 'Dealership' on WhatsApp, and our team will get in touch with you.",
      ur: "جی ہاں! رابطہ کے صفحے پر فارم بھریں یا واٹس ایپ پر 'ڈیلرشپ' لکھ کر بھیجیں، ہماری ٹیم آپ سے رابطہ کرے گی۔",
    },
  },
  {
    q: { en: "How is seed quality guaranteed?", ur: "بیج کے معیار کی ضمانت کیا ہے؟" },
    a: {
      en: "Every lot is tested for germination, genetic purity and moisture. Each bag carries a lot number and a QR code you can use to verify it.",
      ur: "ہر لاٹ کا اگاؤ، جینیاتی خالصیت اور نمی کا ٹیسٹ ہوتا ہے۔ بیگ پر لاٹ نمبر اور QR کوڈ موجود ہے جس سے آپ تصدیق کر سکتے ہیں۔",
    },
  },
];

export const DOWNLOADS: { title: L; type: string; size: L; file: string }[] = [
  { title: { en: "Open Seed International Product Banner", ur: "اوپن سیڈ انٹرنیشنل پروڈکٹ بینر" }, type: "JPG", size: { en: "Banner", ur: "بینر" }, file: "/images/banner.jpg" },
  { title: { en: "P-3940 / P-1881 Standee", ur: "P-3940 / P-1881 اسٹینڈی" }, type: "JPG", size: { en: "Standee", ur: "اسٹینڈی" }, file: "/images/standee.jpg" },
  { title: { en: "P-3940 Hybrid Corn — Bag", ur: "P-3940 ہائبرڈ مکئی — بیگ" }, type: "JPG", size: { en: "Packaging", ur: "پیکجنگ" }, file: "/images/corn-p3940.jpg" },
  { title: { en: "Paddy Seed — Bag", ur: "دھان کا بیج — بیگ" }, type: "JPG", size: { en: "Packaging", ur: "پیکجنگ" }, file: "/images/paddy-seed.jpg" },
  { title: { en: "Sesame Seed — Bag", ur: "تل کا بیج — بیگ" }, type: "JPG", size: { en: "Packaging", ur: "پیکجنگ" }, file: "/images/sesame-seed.jpg" },
  { title: { en: "Open Seed International Logo", ur: "اوپن سیڈ انٹرنیشنل لوگو" }, type: "JPG", size: { en: "Brand", ur: "برانڈ" }, file: "/images/logo.jpg" },
];

export const GALLERY_TAGS: Record<string, L> = {
  Products: { en: "Products", ur: "مصنوعات" },
  Fields: { en: "Fields", ur: "کھیت" },
  Farmers: { en: "Farmers", ur: "کسان" },
  Events: { en: "Events", ur: "تقریبات" },
  "R&D": { en: "R&D", ur: "تحقیق" },
};

export const GALLERY: { src: string; alt: L; tag: keyof typeof GALLERY_TAGS; wide?: boolean }[] = [
  { src: "/images/banner.jpg", alt: { en: "Open Seed International P-3940 and P-1881 banner", ur: "اوپن سیڈ انٹرنیشنل P-3940 اور P-1881 بینر" }, tag: "Products", wide: true },
  { src: IMG.cornRows, alt: { en: "A lush green corn crop", ur: "مکئی کی ہری بھری فصل" }, tag: "Fields" },
  { src: "/images/corn-p3940.jpg", alt: { en: "P-3940 hybrid corn bag", ur: "P-3940 ہائبرڈ مکئی کا بیگ" }, tag: "Products" },
  { src: IMG.harvest, alt: { en: "Farmers harvesting the crop", ur: "کسان فصل کی کٹائی کرتے ہوئے" }, tag: "Farmers" },
  { src: IMG.cornCobs, alt: { en: "Fresh corn cobs", ur: "تازہ مکئی کی چھلیاں" }, tag: "Fields" },
  { src: "/images/standee.jpg", alt: { en: "Open Seed International standee", ur: "اوپن سیڈ انٹرنیشنل اسٹینڈی" }, tag: "Events" },
  { src: IMG.greenhouseLarge, alt: { en: "Research greenhouse", ur: "تحقیقی گرین ہاؤس" }, tag: "R&D" },
  { src: "/images/paddy-seed.jpg", alt: { en: "Paddy seed bag", ur: "دھان کے بیج کا بیگ" }, tag: "Products" },
  { src: IMG.sprayer, alt: { en: "Spraying in the field", ur: "کھیت میں اسپرے کرتے ہوئے" }, tag: "Farmers" },
  { src: IMG.seedlingPots, alt: { en: "Seedling trials", ur: "پنیری کے تجربات" }, tag: "R&D" },
  { src: "/images/sesame-seed.jpg", alt: { en: "Sesame seed bag", ur: "تل کے بیج کا بیگ" }, tag: "Products" },
  { src: IMG.tractor, alt: { en: "Tractor in the field", ur: "کھیت میں ٹریکٹر" }, tag: "Fields" },
  { src: IMG.handSeedling, alt: { en: "Planting seedlings in the nursery", ur: "نرسری میں پودے لگاتے ہوئے" }, tag: "R&D" },
  { src: IMG.fieldSunset, alt: { en: "Green crop at dusk", ur: "شام کے وقت ہری فصل" }, tag: "Fields" },
  { src: IMG.farmerWorking, alt: { en: "Farmer working in the field", ur: "کسان کھیت میں کام کرتے ہوئے" }, tag: "Farmers" },
];
