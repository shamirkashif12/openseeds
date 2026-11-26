// All site content lives here so it can be edited in one place.

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
  name: "Open Seeds",
  legalName: "Open Seed International Agro Crop Sciences (Pvt) Ltd.",
  legalNameUrdu: "اوپن سیڈ انٹرنیشنل ایگرو کراپ سائنسز (پرائیویٹ لمیٹڈ)",
  tagline: "Growing Together",
  email: "openseed145@gmail.com",
  phones: ["0305-1728923", "0300-1594118", "0303-0009145"],
  whatsapp: "923051728923",
  factory: "Factory: 1-KM Pakpattan Road, Qaboola, Arifwala",
  office: "Office: C Sector, Bahria Town, Lahore",
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

export const URDU = {
  slogan1: "واہ کیا بات ہے اوپن سیڈز کی",
  slogan2: "اب ہوں گے ہمارے خواب پورے",
  trust: "اوپن سیڈ انٹرنیشنل پر بھروسہ، بہتر مستقبل کی ضمانت",
  farmers: "سب زمینداروں کا اعتماد صرف اوپن سیڈز",
};

export const NAV = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/products", label: "Products & Services" },
  { href: "/research-development", label: "Research & Development" },
  { href: "/downloads", label: "Downloads" },
  { href: "/gallery", label: "Gallery" },
];

export type Category = {
  slug: string;
  name: string;
  urdu: string;
  desc: string;
  image: string;
  comingSoon?: boolean;
};

export const CATEGORIES: Category[] = [
  {
    slug: "field-crops",
    name: "Field Crops",
    urdu: "فیلڈ کراپس",
    desc: "Hybrid corn aur paddy seeds jo Pakistan ke mausam ke liye tayyar kiye gaye hain.",
    image: IMG.cornRows,
  },
  {
    slug: "oil-seeds",
    name: "Oil Seeds",
    urdu: "آئل سیڈز",
    desc: "Sesame (til) aur doosre oil seeds — kam pani, achi paidawar, behtar munafa.",
    image: IMG.sunflower,
  },
  {
    slug: "vegetables",
    name: "Vegetables",
    urdu: "سبزیاں",
    desc: "Hybrid sabziyon ke beej — tayyari jari hai, jald market mein dastyab.",
    image: IMG.vegetables,
    comingSoon: true,
  },
  {
    slug: "fodder",
    name: "Fodder",
    urdu: "چارہ",
    desc: "Maweshiyon ke liye ziada hara chara dene wali varieties — jald aa rahi hain.",
    image: IMG.greenRows,
    comingSoon: true,
  },
];

export type Product = {
  slug: string;
  name: string;
  crop: string;
  category: string;
  image: string;
  isNew?: boolean;
  short: string;
  description: string;
  features: string[];
  specs: { label: string; value: string }[];
  season: string;
};

// NOTE: spec values are indicative placeholders — confirm with the agronomy team.
export const PRODUCTS: Product[] = [
  {
    slug: "p-3940",
    name: "P-3940",
    crop: "Hybrid Corn Seed",
    category: "field-crops",
    image: "/images/corn-p3940.jpg",
    short: "Lambi challi, bhari daana — har zameendar ki pehli pasand.",
    description:
      "P-3940 Open Seeds ki flagship hybrid corn variety hai. Mazboot tanna, lambi aur poori bhari hui challi, aur chamakdar orange-yellow daana. Spring aur autumn dono seasons ke liye mozoon.",
    features: [
      "High yield potential — zyada paidawar",
      "Mazboot tanna, girne (lodging) ka kam khatra",
      "Bimariyon ke khilaf behtar qoowat-e-mudafiat",
      "Orange-yellow, bhari aur chamakdar daana",
      "Garmi aur pani ki kami bardasht karne ki salahiyat",
    ],
    specs: [
      { label: "Crop", value: "Maize / Corn (Hybrid)" },
      { label: "Season", value: "Spring & Autumn" },
      { label: "Maturity", value: "110 – 120 din" },
      { label: "Grain Colour", value: "Orange-Yellow" },
      { label: "Seed Rate", value: "8 – 10 kg / acre" },
      { label: "Germination", value: "90%+ (min.)" },
    ],
    season: "Spring & Autumn",
  },
  {
    slug: "p-1881",
    name: "P-1881",
    crop: "Hybrid Corn Seed",
    category: "field-crops",
    image: IMG.cornCobs,
    isNew: true,
    short: "Naya! Jadeed genetics ke sath agle darje ki paidawar.",
    description:
      "P-1881 hamari nayi hybrid corn variety hai jo jadeed research ke baad market mein laayi gayi hai. Yaksan (uniform) fasal, lambi challi aur behtar daana bharai — zameendar ke khwab poore karne ke liye.",
    features: [
      "Nayi genetics — next-level yield",
      "Uniform plant height aur challi placement",
      "Achi daana bharai (grain filling)",
      "Stay-green — akhir tak hara tanna",
      "Silage aur grain dono ke liye mozoon",
    ],
    specs: [
      { label: "Crop", value: "Maize / Corn (Hybrid)" },
      { label: "Season", value: "Spring & Autumn" },
      { label: "Maturity", value: "115 – 125 din" },
      { label: "Grain Colour", value: "Yellow-Orange" },
      { label: "Seed Rate", value: "8 – 10 kg / acre" },
      { label: "Germination", value: "90%+ (min.)" },
    ],
    season: "Spring & Autumn",
  },
  {
    slug: "paddy-seed",
    name: "Paddy Seed",
    crop: "Rice / Paddy",
    category: "field-crops",
    image: "/images/paddy-seed.jpg",
    short: "Saaf suthra, certified paddy beej — behtar munafa.",
    description:
      "Open Seeds ka paddy seed chuna hua, saaf aur graded beej hai jo Punjab aur Sindh ke chawal ke ilaqon ke liye mozoon hai. Lamba daana, achi milling aur market mein behtar qeemat.",
    features: [
      "Graded aur saaf beej",
      "Lamba aur patla daana",
      "Achi milling recovery",
      "Nursery mein yaksan ugaao",
    ],
    specs: [
      { label: "Crop", value: "Rice / Paddy" },
      { label: "Season", value: "Kharif" },
      { label: "Nursery", value: "May – June" },
      { label: "Transplanting", value: "June – July" },
      { label: "Germination", value: "85%+ (min.)" },
    ],
    season: "Kharif",
  },
  {
    slug: "sesame-seed",
    name: "Sesame Seed",
    crop: "Til / Sesame",
    category: "oil-seeds",
    image: "/images/sesame-seed.jpg",
    short: "Kam kharcha, kam pani — til ki fasal se behtar aamdani.",
    description:
      "Sesame (til) ek naqd-aawar oil seed fasal hai. Open Seeds ka sesame beej zyada phalliyan, behtar oil content aur kam pani mein achi paidawar deta hai.",
    features: [
      "Zyada phalliyan (capsules) per plant",
      "Behtar oil content",
      "Kam pani mein bhi achi paidawar",
      "Export quality daana",
    ],
    specs: [
      { label: "Crop", value: "Sesame / Til" },
      { label: "Season", value: "Kharif" },
      { label: "Sowing", value: "June – July" },
      { label: "Seed Rate", value: "1.5 – 2 kg / acre" },
      { label: "Germination", value: "85%+ (min.)" },
    ],
    season: "Kharif",
  },
];

export const STATS = [
  { value: 10000, suffix: "+", label: "Khush Kisaan", sub: "Happy Farmers" },
  { value: 300, suffix: "+", label: "Dealers Network", sub: "Across Pakistan" },
  { value: 25, suffix: "+", label: "Districts", sub: "Punjab & Sindh" },
  { value: 4, suffix: "", label: "Seed Products", sub: "Aur barhte hue" },
];

export const WHY_US = [
  {
    icon: "ShieldCheck",
    title: "Quality Assurance",
    text: "Har bag lab-tested — germination, purity aur moisture check ke baad hi market mein.",
  },
  {
    icon: "Sprout",
    title: "High Yield Varieties",
    text: "Pakistan ke mausam aur zameen ke mutabiq chuni gayi zyada paidawar wali varieties.",
  },
  {
    icon: "FlaskConical",
    title: "Research Based",
    text: "Field trials aur R&D ke zariye har season behtar genetics ka intikhab.",
  },
  {
    icon: "Handshake",
    title: "Farmer Support",
    text: "Bowai se kataai tak — hamari field team aap ke sath, har qadam par rehnumai.",
  },
];

export const PROCESS = [
  { title: "Research", text: "Germplasm selection aur breeding", icon: "Microscope" },
  { title: "Field Trials", text: "Mukhtalif ilaqon mein testing", icon: "Tractor" },
  { title: "Processing", text: "Cleaning, grading aur treatment", icon: "Factory" },
  { title: "Quality Lab", text: "Germination & purity tests", icon: "FlaskConical" },
  { title: "Aap Tak", text: "Dealers ke zariye har gaon tak", icon: "Truck" },
];

// Placeholder testimonials — replace with real farmer feedback.
export const TESTIMONIALS = [
  {
    name: "Ch. Muhammad Aslam",
    place: "Arifwala, Pakpattan",
    crop: "P-3940",
    text: "P-3940 lagaya to challi itni lambi aur bhari thi ke poore gaon ne dekha. Waah kya baat hai Open Seeds ki!",
  },
  {
    name: "Rana Imran",
    place: "Sahiwal",
    crop: "P-3940",
    text: "Tanna mazboot tha, aandhi mein bhi fasal kharri rahi. Agle saal bhi yehi beej lagaunga.",
  },
  {
    name: "Malik Tariq",
    place: "Okara",
    crop: "Paddy Seed",
    text: "Nursery bilkul yaksan nikli aur daana lamba tha. Mandi mein achi qeemat mili.",
  },
  {
    name: "Haji Abdul Ghafoor",
    place: "Vehari",
    crop: "Sesame",
    text: "Til ki fasal kam pani mein bhi achi rahi. Open Seeds ki team ne poori rehnumai ki.",
  },
];

export const TIMELINE = [
  { year: "Shuruaat", title: "Bunyaad", text: "Arifwala mein kisaanon ki khidmat ke jazbe ke sath Open Seeds ki bunyaad rakhi gayi." },
  { year: "Factory", title: "Processing Plant", text: "Pakpattan Road, Qaboola par jadeed seed processing aur packing unit qaim kiya gaya." },
  { year: "P-3940", title: "Flagship Launch", text: "P-3940 hybrid corn launch hua aur zameendaron ka bharosa jeeta." },
  { year: "Lahore", title: "Corporate Office", text: "Bahria Town Lahore mein corporate office — marketing aur international business." },
  { year: "P-1881", title: "Nayi Variety", text: "Naya hybrid P-1881 market mein — agle darje ki paidawar." },
];

export const FAQS = [
  {
    q: "Open Seeds ke products kahan se milenge?",
    a: "Hamare authorized dealers Punjab aur Sindh ke mukhtalif districts mein maujood hain. Apne qareebi dealer ke liye WhatsApp ya phone par rabta karein.",
  },
  {
    q: "Corn ki bowai ka sahi waqt kya hai?",
    a: "Spring corn ke liye January ke akhir se February, aur autumn corn ke liye July ke akhir se August behtareen waqt hai. Apne ilaqe ke mutabiq hamari field team se mashwara karein.",
  },
  {
    q: "Kya main Open Seeds ka dealer ban sakta hoon?",
    a: "Ji haan! Contact page par form bharein ya WhatsApp par 'Dealership' likh kar bhejein, hamari team aap se rabta karegi.",
  },
  {
    q: "Beej ki quality ki guarantee kya hai?",
    a: "Har lot ka germination, genetic purity aur moisture test hota hai. Bag par lot number aur QR code maujood hai jis se aap verify kar sakte hain.",
  },
];

export const DOWNLOADS = [
  { title: "Open Seeds Product Banner", type: "JPG", size: "Banner", file: "/images/banner.jpg" },
  { title: "P-3940 / P-1881 Standee", type: "JPG", size: "Standee", file: "/images/standee.jpg" },
  { title: "P-3940 Hybrid Corn — Bag", type: "JPG", size: "Packaging", file: "/images/corn-p3940.jpg" },
  { title: "Paddy Seed — Bag", type: "JPG", size: "Packaging", file: "/images/paddy-seed.jpg" },
  { title: "Sesame Seed — Bag", type: "JPG", size: "Packaging", file: "/images/sesame-seed.jpg" },
  { title: "Open Seeds Logo", type: "JPG", size: "Brand", file: "/images/logo.jpg" },
];

export const GALLERY = [
  { src: "/images/banner.jpg", alt: "Open Seeds P-3940 aur P-1881 banner", tag: "Products", wide: true },
  { src: IMG.cornRows, alt: "Corn ki hari bhari fasal", tag: "Fields" },
  { src: "/images/corn-p3940.jpg", alt: "P-3940 hybrid corn bag", tag: "Products" },
  { src: IMG.harvest, alt: "Kisaan fasal ki kataai karte hue", tag: "Farmers" },
  { src: IMG.cornCobs, alt: "Taaza corn challiyan", tag: "Fields" },
  { src: "/images/standee.jpg", alt: "Open Seeds standee", tag: "Events" },
  { src: IMG.greenhouseLarge, alt: "Research greenhouse", tag: "R&D" },
  { src: "/images/paddy-seed.jpg", alt: "Paddy seed bag", tag: "Products" },
  { src: IMG.sprayer, alt: "Field mein spray karte hue", tag: "Farmers" },
  { src: IMG.seedlingPots, alt: "Seedling trials", tag: "R&D" },
  { src: "/images/sesame-seed.jpg", alt: "Sesame seed bag", tag: "Products" },
  { src: IMG.tractor, alt: "Tractor field mein", tag: "Fields" },
  { src: IMG.handSeedling, alt: "Nursery mein paude lagate hue", tag: "R&D" },
  { src: IMG.fieldSunset, alt: "Shaam ke waqt hari fasal", tag: "Fields" },
  { src: IMG.farmerWorking, alt: "Kisaan khet mein kaam karte hue", tag: "Farmers" },
];
