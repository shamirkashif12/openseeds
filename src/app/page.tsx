import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import HeroSlider from "@/components/HeroSlider";
import Reveal from "@/components/Reveal";
import SectionTitle from "@/components/SectionTitle";
import Counter from "@/components/Counter";
import ProductCard from "@/components/ProductCard";
import Testimonials from "@/components/Testimonials";
import MapEmbed from "@/components/MapEmbed";
import Icon from "@/components/Icon";
import T from "@/components/T";
import { CATEGORIES, IMG, PROCESS, PRODUCTS, SITE, STATS, URDU, WHY_US } from "@/lib/data";

const HIGHLIGHTS = [
  { en: "Hybrid corn specialists", ur: "ہائبرڈ مکئی کے ماہر" },
  { en: "Lab-tested germination", ur: "لیبارٹری سے ٹیسٹ شدہ اگاؤ" },
  { en: "Field support team", ur: "فیلڈ سپورٹ ٹیم" },
  { en: "Punjab & Sindh network", ur: "پنجاب و سندھ میں نیٹ ورک" },
];

const arrow = <ArrowRight size={18} className="rtl:-scale-x-100" />;

export default function Home() {
  return (
    <>
      <HeroSlider />

      {/* Intro */}
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-24 sm:px-6 lg:grid-cols-2">
        <Reveal dir="left" className="relative">
          <div className="relative h-[420px] overflow-hidden rounded-[2rem] shadow-2xl md:h-[520px]">
            <Image src={IMG.harvest} alt="Farmers in the field" fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" />
          </div>
          <div className="floaty absolute -bottom-8 -right-2 w-44 overflow-hidden rounded-3xl border-4 border-bg shadow-2xl sm:-right-8 sm:w-56">
            <div className="relative h-56 sm:h-64">
              <Image src="/images/corn-p3940.jpg" alt="P-3940 bag" fill sizes="224px" className="bg-white object-contain p-2" />
            </div>
          </div>
          <div className="absolute -left-3 top-8 rounded-2xl bg-ribbon px-5 py-3 text-white shadow-xl sm:-left-6">
            <p className="text-2xl font-extrabold">100%</p>
            <p className="text-xs"><T en="Lab-Tested Seed" ur="لیب ٹیسٹ شدہ بیج" /></p>
          </div>
        </Reveal>

        <Reveal dir="right">
          <span className="text-sm font-semibold uppercase tracking-widest text-leaf-600 dark:text-leaf">
            <T en="The Farmer's Partner" ur="کسان کا ساتھی" />
          </span>
          <h2 className="mt-2 text-3xl font-bold leading-tight md:text-5xl">
            <T
              en={<>Cultivating the Future, <span className="text-gradient">Growing Together</span></>}
              ur={<>مستقبل کی کاشت، <span className="text-gradient">مل کر ترقی</span></>}
            />
          </h2>
          <p className="urdu mt-3 text-xl text-globe dark:text-sky">{URDU.trust}</p>
          <p className="mt-4 text-muted">
            <T
              en="Open Seed International Agro Crop Sciences supplies Pakistan's farmers with high-quality hybrid corn, paddy and oil seeds. Our aim is simple — better seed, better crops, and prosperous farmers."
              ur="اوپن سیڈ انٹرنیشنل ایگرو کراپ سائنسز پاکستان کے زمینداروں کو اعلیٰ معیار کے ہائبرڈ مکئی، دھان اور تیل دار بیج فراہم کرتی ہے۔ ہمارا مقصد سادہ ہے — بہتر بیج، بہتر فصل، اور کسان کی خوشحالی۔"
            />
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {HIGHLIGHTS.map((t) => (
              <li key={t.en} className="flex items-center gap-2 font-medium"><CheckCircle2 className="shrink-0 text-leaf" size={20} /> <T {...t} /></li>
            ))}
          </ul>
          <Link href="/about" className="btn-primary mt-8"><T en="About Us" ur="ہمارے بارے میں" /> {arrow}</Link>
        </Reveal>
      </section>

      {/* Stats with fixed background */}
      <section className="relative overflow-hidden bg-cover bg-fixed bg-center py-20" style={{ backgroundImage: `url(${IMG.fieldSunset})` }}>
        <div className="absolute inset-0 bg-gradient-to-r from-leaf-800/90 to-globe/85" />
        <div className="relative mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 text-center text-white sm:px-6 lg:grid-cols-4">
          {STATS.map((s, k) => (
            <Reveal key={s.label.en} dir={k % 2 ? "down" : "up"} delay={k * 0.1}>
              <p className="text-4xl font-extrabold text-corn md:text-6xl"><Counter to={s.value} suffix={s.suffix} /></p>
              <p className="mt-2 text-lg font-semibold"><T {...s.label} /></p>
              <p className="text-sm text-white/70"><T {...s.sub} /></p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
        <SectionTitle eyebrow={{ en: "We Deal In", ur: "ہمارا کاروبار" }} title={{ en: "Our Product Categories", ur: "ہماری مصنوعات کی اقسام" }} urdu="ہر موسم، ہر فصل کے لیے بہترین بیج" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CATEGORIES.map((c, k) => (
            <Reveal key={c.slug} dir={k % 2 ? "down" : "up"} delay={k * 0.1}>
              <Link href={`/products?cat=${c.slug}`} className="group relative block h-96 overflow-hidden rounded-3xl shadow-xl">
                <Image src={c.image} alt={c.name.en} fill sizes="(max-width:640px) 100vw, 25vw" className="object-cover transition duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                {c.comingSoon && (
                  <span className="absolute end-4 top-4 rounded-full bg-corn px-3 py-1 text-xs font-bold text-white">
                    <T en="Coming Soon" ur="جلد آ رہا ہے" />
                  </span>
                )}
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <p className="i18n-en-block urdu text-left text-lg text-corn">{c.name.ur}</p>
                  <h3 className="text-2xl font-bold"><T {...c.name} /></h3>
                  <p className="mt-2 max-h-0 overflow-hidden text-sm text-white/85 transition-all duration-500 group-hover:max-h-32"><T {...c.desc} /></p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Featured products */}
      <section className="bg-bg-alt py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionTitle
            eyebrow={{ en: "Featured Seeds", ur: "نمایاں بیج" }}
            title={{ en: "Every Farmer's First Choice", ur: "زمینداروں کی پہلی پسند" }}
            text={{ en: "Quality in every bag, trust in every grain.", ur: "ہر بیگ میں معیار، ہر دانے میں بھروسہ۔" }}
          />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {PRODUCTS.map((p, k) => (
              <Reveal key={p.slug} dir={k < 2 ? "left" : "right"} delay={k * 0.1}><ProductCard p={p} /></Reveal>
            ))}
          </div>
          <Reveal dir="up" className="mt-12 text-center">
            <Link href="/products" className="btn-primary"><T en="View All Products" ur="تمام مصنوعات دیکھیں" /> {arrow}</Link>
          </Reveal>
        </div>
      </section>

      {/* Why us */}
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-24 sm:px-6 lg:grid-cols-2">
        <div>
          <SectionTitle
            center={false}
            eyebrow={{ en: "Why Open Seed International?", ur: "اوپن سیڈ انٹرنیشنل کیوں؟" }}
            title={{ en: "Why Choose Open Seed International?", ur: "اوپن سیڈ انٹرنیشنل کا انتخاب کیوں کریں؟" }}
            text={{ en: "We don't just sell seed — we grow crops alongside the farmer.", ur: "ہم صرف بیج نہیں بیچتے — ہم کسان کے ساتھ مل کر فصل اگاتے ہیں۔" }}
          />
          <div className="grid gap-5 sm:grid-cols-2">
            {WHY_US.map((w, k) => (
              <Reveal key={w.title.en} dir="left" delay={k * 0.1}>
                <div className="card group h-full rounded-2xl p-6 transition hover:-translate-y-1 hover:border-leaf">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-leaf to-leaf-600 text-white transition group-hover:rotate-6 group-hover:scale-110">
                    <Icon name={w.icon} size={22} />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold"><T {...w.title} /></h3>
                  <p className="mt-1 text-sm text-muted"><T {...w.text} /></p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <Reveal dir="right" className="relative h-[560px]">
          <div className="absolute right-0 top-0 h-[70%] w-[75%] overflow-hidden rounded-[2rem] shadow-2xl">
            <Image src={IMG.cornCobs} alt="Corn cobs" fill sizes="40vw" className="object-cover" />
          </div>
          <div className="absolute bottom-0 left-0 h-[55%] w-[60%] overflow-hidden rounded-[2rem] border-8 border-bg shadow-2xl">
            <Image src={IMG.sprayer} alt="Farmer in the field" fill sizes="30vw" className="object-cover" />
          </div>
          <div className="floaty absolute bottom-16 right-4 rounded-2xl bg-card p-4 shadow-xl">
            <p className="urdu text-lg text-leaf-600 dark:text-leaf">{URDU.slogan1}</p>
          </div>
        </Reveal>
      </section>

      {/* Process */}
      <section className="bg-bg-alt py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionTitle
            eyebrow={{ en: "Our Process", ur: "ہمارا طریقہ کار" }}
            title={{ en: "From Lab to Field", ur: "لیب سے کھیت تک" }}
            text={{ en: "Every seed travels a long way before it reaches you.", ur: "ہر بیج ایک لمبا سفر طے کر کے آپ تک پہنچتا ہے۔" }}
          />
          <div className="relative grid gap-8 md:grid-cols-5">
            <div className="absolute left-0 right-0 top-10 hidden h-0.5 bg-gradient-to-r from-leaf via-corn to-globe md:block" />
            {PROCESS.map((p, k) => (
              <Reveal key={p.title.en} dir="up" delay={k * 0.15} className="relative text-center">
                <span className="relative mx-auto grid h-20 w-20 place-items-center rounded-full border-4 border-bg-alt bg-gradient-to-br from-leaf to-globe text-white shadow-lg">
                  <Icon name={p.icon} size={30} />
                  <span className="absolute -end-1 -top-1 grid h-7 w-7 place-items-center rounded-full bg-corn text-xs font-bold">{k + 1}</span>
                </span>
                <h3 className="mt-4 text-lg font-semibold"><T {...p.title} /></h3>
                <p className="text-sm text-muted"><T {...p.text} /></p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Urdu marquee */}
      <div dir="ltr" className="overflow-hidden bg-gradient-to-r from-ribbon to-[#9c0c24] py-4 text-white">
        <div className="marquee flex w-max gap-12 whitespace-nowrap">
          {Array.from({ length: 2 }).flatMap((_, r) =>
            [URDU.slogan1, "P-3940", URDU.farmers, "P-1881 · NEW", URDU.trust, "Growing Together"].map((t, k) => (
              <span key={`${r}-${k}`} className={`flex items-center gap-12 text-xl ${/[a-z0-9]/i.test(t) ? "font-bold" : "urdu"}`}>
                {t} <span className="text-corn">✦</span>
              </span>
            ))
          )}
        </div>
      </div>

      {/* Testimonials */}
      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionTitle eyebrow={{ en: "Farmer Stories", ur: "کسانوں کی کہانیاں" }} title={{ en: "In Our Farmers' Words", ur: "کسانوں کی زبانی" }} urdu={URDU.farmers} />
          <Reveal dir="zoom"><Testimonials /></Reveal>
        </div>
      </section>

      {/* Map + contact quick */}
      <section className="mx-auto grid max-w-7xl gap-10 px-4 pb-16 sm:px-6 lg:grid-cols-5">
        <Reveal dir="left" className="lg:col-span-2">
          <SectionTitle
            center={false}
            eyebrow={{ en: "Visit Us", ur: "ہم سے ملیں" }}
            title={{ en: "Our Factory", ur: "ہماری فیکٹری" }}
            text={{ en: "Visit us or give us a call — our team is here to help.", ur: "تشریف لائیں یا کال کریں — ہماری ٹیم آپ کی خدمت کے لیے حاضر ہے۔" }}
          />
          <div className="space-y-3 text-muted">
            <p><strong className="text-fg">📍 </strong><T en="Factory: " ur="فیکٹری: " /><T {...SITE.factory} /></p>
            <p><strong className="text-fg">🏢 </strong><T en="Office: " ur="دفتر: " /><T {...SITE.office} /></p>
            <p dir="ltr" className="rtl:text-right"><strong className="text-fg">📞 </strong>{SITE.phones.join(" · ")}</p>
          </div>
          <a href={SITE.mapLink} target="_blank" rel="noopener noreferrer" className="btn-primary mt-6"><T en="Get Directions" ur="راستہ معلوم کریں" /> {arrow}</a>
        </Reveal>
        <Reveal dir="right" className="lg:col-span-3"><MapEmbed /></Reveal>
      </section>
    </>
  );
}
