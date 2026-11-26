import type { Metadata } from "next";
import { Suspense } from "react";
import { FlaskConical, Headset, Leaf, Package } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionTitle from "@/components/SectionTitle";
import Reveal from "@/components/Reveal";
import ProductBrowser from "@/components/ProductBrowser";
import { IMG } from "@/lib/data";

export const metadata: Metadata = { title: "Products & Services" };

const SERVICES = [
  { I: Package, title: "Quality Seed Supply", text: "Graded, treated aur sealed bags — dealers ke zariye aap ke gaon tak." },
  { I: Headset, title: "Kisaan Helpline", text: "Bowai, khaad aur spray ke baare mein phone/WhatsApp par muft mashwara." },
  { I: Leaf, title: "Field Visits", text: "Hamari agronomy team fasal ka mua'ina kar ke behtar rehnumai karti hai." },
  { I: FlaskConical, title: "Demo Plots", text: "Mukhtalif ilaqon mein demo plots aur farmer field days." },
];

export default function Products() {
  return (
    <>
      <PageHero title="Products & Services" urdu="ہماری مصنوعات" crumb="Products & Services" image={IMG.cornCobs}
        subtitle="Hybrid corn, paddy aur oil seeds — har fasal ke liye behtareen intikhab." />

      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
        <SectionTitle eyebrow="Our Seeds" title="Hamare Beej" text="Category chunein aur apni fasal ke liye sahi beej talaash karein." />
        <Suspense fallback={null}><ProductBrowser /></Suspense>
      </section>

      <section className="bg-bg-alt py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionTitle eyebrow="Services" title="Beej ke Sath Sath" text="Hum fasal ke har marhale mein kisaan ke sath hain." />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map(({ I, title, text }, k) => (
              <Reveal key={title} dir={k % 2 ? "down" : "up"} delay={k * 0.1}>
                <div className="card group h-full rounded-3xl p-7 text-center transition hover:-translate-y-2 hover:border-leaf">
                  <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-leaf/15 text-leaf-600 transition group-hover:bg-leaf group-hover:text-white dark:text-leaf"><I size={28} /></span>
                  <h3 className="mt-4 text-lg font-semibold">{title}</h3>
                  <p className="mt-2 text-sm text-muted">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
