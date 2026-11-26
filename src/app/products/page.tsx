import type { Metadata } from "next";
import { Suspense } from "react";
import { FlaskConical, Headset, Leaf, Package } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionTitle from "@/components/SectionTitle";
import Reveal from "@/components/Reveal";
import ProductBrowser from "@/components/ProductBrowser";
import T from "@/components/T";
import { IMG } from "@/lib/data";

export const metadata: Metadata = { title: "Products & Services" };

const SERVICES = [
  {
    I: Package,
    title: { en: "Quality Seed Supply", ur: "معیاری بیج کی فراہمی" },
    text: { en: "Graded, treated and sealed bags — delivered to your village through our dealers.", ur: "گریڈ شدہ، ٹریٹ شدہ اور سیل بند بیگ — ڈیلرز کے ذریعے آپ کے گاؤں تک۔" },
  },
  {
    I: Headset,
    title: { en: "Farmer Helpline", ur: "کسان ہیلپ لائن" },
    text: { en: "Free advice by phone or WhatsApp on sowing, fertiliser and spraying.", ur: "بوائی، کھاد اور اسپرے کے بارے میں فون یا واٹس ایپ پر مفت مشورہ۔" },
  },
  {
    I: Leaf,
    title: { en: "Field Visits", ur: "فیلڈ وزٹس" },
    text: { en: "Our agronomy team inspects your crop and gives practical guidance.", ur: "ہماری ایگرونومی ٹیم فصل کا معائنہ کر کے بہتر رہنمائی کرتی ہے۔" },
  },
  {
    I: FlaskConical,
    title: { en: "Demo Plots", ur: "ڈیمو پلاٹس" },
    text: { en: "Demo plots and farmer field days in different regions.", ur: "مختلف علاقوں میں ڈیمو پلاٹس اور فارمر فیلڈ ڈے۔" },
  },
];

export default function Products() {
  return (
    <>
      <PageHero title={{ en: "Products & Services", ur: "مصنوعات و خدمات" }} image={IMG.cornCobs}
        subtitle={{ en: "Hybrid corn, paddy and oil seeds — the best choice for every crop.", ur: "ہائبرڈ مکئی، دھان اور تیل دار بیج — ہر فصل کے لیے بہترین انتخاب۔" }} />

      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
        <SectionTitle
          eyebrow={{ en: "Our Seeds", ur: "ہمارے بیج" }}
          title={{ en: "Find the Right Seed", ur: "اپنا بیج منتخب کریں" }}
          text={{ en: "Choose a category and find the right seed for your crop.", ur: "قسم منتخب کریں اور اپنی فصل کے لیے صحیح بیج تلاش کریں۔" }}
        />
        <Suspense fallback={null}><ProductBrowser /></Suspense>
      </section>

      <section className="bg-bg-alt py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionTitle
            eyebrow={{ en: "Services", ur: "خدمات" }}
            title={{ en: "More Than Just Seed", ur: "بیج کے ساتھ ساتھ" }}
            text={{ en: "We stand with the farmer at every stage of the crop.", ur: "ہم فصل کے ہر مرحلے میں کسان کے ساتھ ہیں۔" }}
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map(({ I, title, text }, k) => (
              <Reveal key={title.en} dir={k % 2 ? "down" : "up"} delay={k * 0.1}>
                <div className="card group h-full rounded-3xl p-7 text-center transition hover:-translate-y-2 hover:border-leaf">
                  <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-leaf/15 text-leaf-600 transition group-hover:bg-leaf group-hover:text-white dark:text-leaf"><I size={28} /></span>
                  <h3 className="mt-4 text-lg font-semibold"><T {...title} /></h3>
                  <p className="mt-2 text-sm text-muted"><T {...text} /></p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
