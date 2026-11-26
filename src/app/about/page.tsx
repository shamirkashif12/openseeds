import Image from "next/image";
import type { Metadata } from "next";
import { Eye, Target, Heart } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionTitle from "@/components/SectionTitle";
import Counter from "@/components/Counter";
import T from "@/components/T";
import { IMG, SITE, STATS, TIMELINE, URDU } from "@/lib/data";

export const metadata: Metadata = { title: "About Us" };

const VMV = [
  {
    I: Eye,
    title: { en: "Our Vision", ur: "ہمارا وژن" },
    text: {
      en: "To bring modern, high-yield seed to every farmer in Pakistan and play our part in the country's agricultural self-sufficiency.",
      ur: "پاکستان کے ہر کسان تک جدید، زیادہ پیداوار والے بیج پہنچانا اور زرعی خود کفالت میں اپنا کردار ادا کرنا۔",
    },
    color: "from-globe to-sky",
  },
  {
    I: Target,
    title: { en: "Our Mission", ur: "ہمارا مشن" },
    text: {
      en: "To raise farmers' yields and incomes through research, quality control and field support.",
      ur: "تحقیق، کوالٹی کنٹرول اور فیلڈ سپورٹ کے ذریعے کسان کی پیداوار اور آمدنی میں اضافہ کرنا۔",
    },
    color: "from-leaf-600 to-leaf",
  },
  {
    I: Heart,
    title: { en: "Our Values", ur: "ہماری اقدار" },
    text: {
      en: "Honesty, no compromise on quality, and a long partnership with the farmer — Growing Together.",
      ur: "ایمانداری، معیار پر کوئی سمجھوتہ نہیں، اور کسان کے ساتھ لمبی رفاقت — مل کر ترقی۔",
    },
    color: "from-ribbon to-corn",
  },
];

export default function About() {
  return (
    <>
      <PageHero title={{ en: "About Us", ur: "ہمارے بارے میں" }} image={IMG.tractor}
        subtitle={{
          en: "The farmer's trust is our identity — Open Seed International Agro Crop Sciences.",
          ur: "کسان کا بھروسہ، ہماری پہچان — اوپن سیڈ انٹرنیشنل ایگرو کراپ سائنسز۔",
        }} />

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-24 sm:px-6 lg:grid-cols-2">
        <Reveal dir="left">
          <span className="text-sm font-semibold uppercase tracking-widest text-leaf-600 dark:text-leaf"><T en="Who We Are" ur="ہم کون ہیں" /></span>
          <h2 className="mt-2 text-3xl font-bold md:text-5xl">
            <T
              en={<>From Seed to <span className="text-gradient">Prosperity</span></>}
              ur={<>بیج سے <span className="text-gradient">خوشحالی</span> تک</>}
            />
          </h2>
          <p className="i18n-en-block urdu mt-3 text-xl text-globe dark:text-sky">{SITE.legalNameUrdu}</p>
          <div className="mt-4 space-y-4 text-muted">
            <p>
              <T
                en={`${SITE.legalName} is a Pakistani seed company with its factory on Pakpattan Road, Qaboola (Arifwala) and its corporate office in Bahria Town, Lahore. We process, pack and market hybrid corn, paddy and oil seeds.`}
                ur={`${SITE.legalNameUrdu} ایک پاکستانی بیج کمپنی ہے جس کی فیکٹری پاکپتن روڈ، قبولہ (عارف والا) میں اور کارپوریٹ آفس بحریہ ٹاؤن لاہور میں واقع ہے۔ ہم ہائبرڈ مکئی، دھان اور تیل دار بیجوں کی پروسیسنگ، پیکنگ اور مارکیٹنگ کرتے ہیں۔`}
              />
            </p>
            <p>
              <T
                en={<>Our flagship hybrid <strong className="text-fg">P-3940</strong> is today the first choice of farmers across Punjab, and our new variety <strong className="text-fg">P-1881</strong> is setting new yield records. Our logo of a globe and green leaves stands for bringing international quality to Pakistani soil.</>}
                ur={<>ہماری فلیگ شپ ہائبرڈ <strong className="text-fg">P-3940</strong> آج پنجاب کے زمینداروں کی پہلی پسند ہے، اور ہماری نئی قسم <strong className="text-fg">P-1881</strong> پیداوار کے نئے ریکارڈ قائم کر رہی ہے۔ ہمارا گلوب اور ہرے پتوں والا لوگو اس بات کی علامت ہے کہ ہم بین الاقوامی معیار کو پاکستانی مٹی تک لا رہے ہیں۔</>}
              />
            </p>
          </div>
        </Reveal>
        <Reveal dir="right" className="relative grid grid-cols-2 gap-4">
          <div className="relative h-72 overflow-hidden rounded-3xl shadow-xl md:h-80"><Image src={IMG.handsSoil} alt="Seedlings in soil" fill sizes="25vw" className="object-cover" /></div>
          <div className="relative mt-12 h-72 overflow-hidden rounded-3xl shadow-xl md:h-80"><Image src={IMG.cornRows} alt="Corn field" fill sizes="25vw" className="object-cover" /></div>
          <div className="absolute left-1/2 top-1/2 grid h-32 w-32 -translate-x-1/2 -translate-y-1/2 place-items-center overflow-hidden rounded-full border-4 border-bg bg-white shadow-2xl">
            <Image src="/images/logo.jpg" alt="Open Seeds logo" fill sizes="128px" className="scale-110 object-contain" />
          </div>
        </Reveal>
      </section>

      <section className="bg-bg-alt py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 md:grid-cols-3">
          {VMV.map(({ I, title, text, color }, k) => (
            <Reveal key={title.en} dir={k === 0 ? "left" : k === 2 ? "right" : "up"} delay={k * 0.1}>
              <div className="card group h-full rounded-3xl p-8 transition hover:-translate-y-2">
                <span className={`grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br ${color} text-white shadow-lg transition group-hover:rotate-12`}><I size={28} /></span>
                <h3 className="mt-5 text-2xl font-bold"><T {...title} /></h3>
                <p className="mt-2 text-muted"><T {...text} /></p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-24 sm:px-6">
        <SectionTitle eyebrow={{ en: "Our Journey", ur: "ہمارا سفر" }} title={{ en: "How We Grew", ur: "ہمارا سفر" }} urdu={URDU.slogan2} />
        <div className="relative">
          <div className="absolute start-5 top-0 h-full w-0.5 bg-gradient-to-b from-leaf via-corn to-globe md:start-1/2" />
          {TIMELINE.map((t, k) => (
            <Reveal key={t.title.en} dir={k % 2 ? "right" : "left"} className={`relative mb-10 ps-14 md:w-1/2 md:ps-0 ${k % 2 ? "md:ms-auto md:ps-12" : "md:pe-12 md:text-end"}`}>
              <span className={`absolute start-2 top-3 h-7 w-7 rounded-full border-4 border-bg bg-leaf shadow ${k % 2 ? "md:-start-3.5" : "md:start-auto md:-end-3.5"}`} />
              <div className="card rounded-2xl p-6">
                <span className="inline-block rounded-full bg-corn/15 px-3 py-1 text-xs font-bold text-corn"><T {...t.year} /></span>
                <h3 className="mt-2 text-xl font-bold"><T {...t.title} /></h3>
                <p className="mt-1 text-muted"><T {...t.text} /></p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-cover bg-fixed bg-center py-20" style={{ backgroundImage: `url(${IMG.greenRows})` }}>
        <div className="absolute inset-0 bg-leaf-800/85" />
        <div className="relative mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 text-center text-white sm:px-6 lg:grid-cols-4">
          {STATS.map((s, k) => (
            <Reveal key={s.label.en} dir="zoom" delay={k * 0.1}>
              <p className="text-4xl font-extrabold text-corn md:text-5xl"><Counter to={s.value} suffix={s.suffix} /></p>
              <p className="mt-1 font-semibold"><T {...s.label} /></p>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
