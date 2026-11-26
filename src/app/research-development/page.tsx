import Image from "next/image";
import type { Metadata } from "next";
import { Dna, FlaskConical, Microscope, Sprout, Sun, Droplets } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionTitle from "@/components/SectionTitle";
import T from "@/components/T";
import { IMG } from "@/lib/data";

export const metadata: Metadata = { title: "Research & Development" };

const AREAS = [
  { I: Dna, title: { en: "Plant Breeding", ur: "پلانٹ بریڈنگ" }, text: { en: "Selecting better parent lines and developing new hybrids.", ur: "بہتر پیرنٹل لائنز کا انتخاب اور نئے ہائبرڈز کی تیاری۔" } },
  { I: Microscope, title: { en: "Seed Testing Lab", ur: "بیج ٹیسٹنگ لیب" }, text: { en: "Tests for germination, vigour, genetic purity and moisture.", ur: "اگاؤ، طاقت، جینیاتی خالصیت اور نمی کے ٹیسٹ۔" } },
  { I: Sprout, title: { en: "Multi-location Trials", ur: "کثیر مقامی تجربات" }, text: { en: "Field performance testing across different regions of Punjab and Sindh.", ur: "پنجاب اور سندھ کے مختلف علاقوں میں کھیت میں کارکردگی کی جانچ۔" } },
  { I: Sun, title: { en: "Climate Resilience", ur: "موسمی لچک" }, text: { en: "Developing varieties that withstand heat, drought and storms.", ur: "گرمی، خشک سالی اور آندھی برداشت کرنے والی اقسام پر کام۔" } },
  { I: Droplets, title: { en: "Water Efficiency", ur: "پانی کی بچت" }, text: { en: "Finding genotypes that give more yield with less water.", ur: "کم پانی میں زیادہ پیداوار دینے والے جینوٹائپس کی تلاش۔" } },
  { I: FlaskConical, title: { en: "Seed Treatment", ur: "بیج کی ٹریٹمنٹ" }, text: { en: "Fungicide and insecticide treatment to protect the seed from the start.", ur: "فنجی سائیڈ اور کیڑے مار ٹریٹمنٹ سے بیج کا ابتدائی تحفظ۔" } },
];

const STEPS = [
  { t: { en: "Germplasm Collection", ur: "جرم پلازم کا ذخیرہ" }, d: { en: "Building a collection of the best local and international germplasm.", ur: "ملکی اور غیر ملکی بہترین جرم پلازم کا ذخیرہ۔" } },
  { t: { en: "Hybrid Development", ur: "ہائبرڈ کی تیاری" }, d: { en: "New hybrid combinations through crossing and selection.", ur: "کراسنگ اور انتخاب سے نئے ہائبرڈ امتزاج۔" } },
  { t: { en: "Station Trials", ur: "اسٹیشن ٹرائلز" }, d: { en: "Initial performance testing at the research station.", ur: "ریسرچ اسٹیشن پر ابتدائی کارکردگی کی جانچ۔" } },
  { t: { en: "Farmer Field Trials", ur: "کسان کے کھیت میں تجربات" }, d: { en: "Tested in real farmers' fields, under real conditions.", ur: "اصل کسان کے کھیت میں — اصل حالات میں ٹیسٹ۔" } },
  { t: { en: "Commercial Launch", ur: "تجارتی لانچ" }, d: { en: "Successful varieties are certified and brought to market.", ur: "کامیاب اقسام تصدیق کے بعد مارکیٹ میں۔" } },
];

export default function RnD() {
  return (
    <>
      <PageHero title={{ en: "Research & Development", ur: "تحقیق و ترقی" }} image={IMG.greenhouseLarge}
        subtitle={{ en: "Science and experience combined — better seed every season.", ur: "سائنس اور تجربے کا ملاپ — ہر موسم بہتر بیج۔" }} />

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-24 sm:px-6 lg:grid-cols-2">
        <Reveal dir="left" className="relative h-[460px]">
          <div className="absolute inset-0 overflow-hidden rounded-[2rem] shadow-2xl"><Image src={IMG.seedlingPots} alt="Seedling trials" fill sizes="50vw" className="object-cover" /></div>
          <div className="floaty absolute -bottom-6 -right-2 h-44 w-44 overflow-hidden rounded-3xl border-8 border-bg shadow-2xl sm:-right-6 sm:h-52 sm:w-52">
            <Image src={IMG.labCells} alt="Lab research" fill sizes="208px" className="object-cover" />
          </div>
        </Reveal>
        <Reveal dir="right">
          <span className="text-sm font-semibold uppercase tracking-widest text-leaf-600 dark:text-leaf"><T en="Innovation" ur="جدت" /></span>
          <h2 className="mt-2 text-3xl font-bold md:text-5xl">
            <T
              en={<>Research You Can See <span className="text-gradient">in the Field</span></>}
              ur={<>تحقیق جو <span className="text-gradient">کھیت میں</span> نظر آئے</>}
            />
          </h2>
          <p className="mt-4 text-muted">
            <T
              en="The Open Seed International R&D team tests hybrids under different weather conditions so that only varieties that perform well in every situation reach the farmer. P-3940 and P-1881 are the fruit of this work."
              ur="اوپن سیڈ انٹرنیشنل کی تحقیقی ٹیم مختلف موسمی حالات میں ہائبرڈز کو ٹیسٹ کرتی ہے تاکہ صرف وہ اقسام کسان تک پہنچیں جو ہر حال میں بہتر نتائج دیں۔ P-3940 اور P-1881 اسی محنت کا پھل ہیں۔"
            />
          </p>
          <p className="mt-3 text-muted">
            <T
              en="Our focus is on higher yield, disease protection, and seed that stays resilient as the climate changes."
              ur="ہماری توجہ زیادہ پیداوار، بیماریوں سے بچاؤ، اور بدلتے موسم کے مطابق مضبوط بیج پر ہے۔"
            />
          </p>
        </Reveal>
      </section>

      <section className="bg-bg-alt py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionTitle eyebrow={{ en: "Focus Areas", ur: "توجہ کے شعبے" }} title={{ en: "Our Research Areas", ur: "ہمارے تحقیقی شعبے" }} />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {AREAS.map(({ I, title, text }, k) => (
              <Reveal key={title.en} dir={["left", "up", "right"][k % 3] as "left" | "up" | "right"} delay={(k % 3) * 0.1}>
                <div className="card group h-full rounded-3xl p-7 transition hover:-translate-y-2 hover:border-globe">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-globe to-sky text-white transition group-hover:scale-110"><I size={26} /></span>
                  <h3 className="mt-4 text-xl font-semibold"><T {...title} /></h3>
                  <p className="mt-2 text-muted"><T {...text} /></p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-24 sm:px-6">
        <SectionTitle
          eyebrow={{ en: "Pipeline", ur: "مراحل" }}
          title={{ en: "The Journey of a Variety", ur: "ایک قسم کا سفر" }}
          text={{ en: "From lab to market, every variety goes through these stages.", ur: "لیب سے مارکیٹ تک ہر قسم ان مراحل سے گزرتی ہے۔" }}
        />
        <ol className="space-y-5">
          {STEPS.map(({ t, d }, k) => (
            <Reveal key={t.en} dir={k % 2 ? "right" : "left"}>
              <li className="card flex items-center gap-5 rounded-2xl p-5">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-gradient-to-br from-leaf to-leaf-600 text-xl font-extrabold text-white">{k + 1}</span>
                <div><h3 className="text-lg font-semibold"><T {...t} /></h3><p className="text-muted"><T {...d} /></p></div>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>
    </>
  );
}
