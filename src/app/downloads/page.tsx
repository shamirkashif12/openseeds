import Image from "next/image";
import type { Metadata } from "next";
import { Download } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionTitle from "@/components/SectionTitle";
import T from "@/components/T";
import { DOWNLOADS, IMG } from "@/lib/data";

export const metadata: Metadata = { title: "Downloads" };

export default function Downloads() {
  return (
    <>
      <PageHero title={{ en: "Downloads", ur: "ڈاؤن لوڈز" }} image={IMG.fieldRows}
        subtitle={{ en: "Brochures, banners and product material — for dealers and farmers.", ur: "بروشرز، بینرز اور مصنوعات کا مواد — ڈیلرز اور کسانوں کے لیے۔" }} />
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
        <SectionTitle
          eyebrow={{ en: "Resources", ur: "وسائل" }}
          title={{ en: "Marketing & Product Material", ur: "مارکیٹنگ اور مصنوعات کا مواد" }}
          text={{ en: "Download the material below and share it.", ur: "نیچے دیا گیا مواد ڈاؤن لوڈ کر کے شیئر کریں۔" }}
        />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {DOWNLOADS.map((d, k) => (
            <Reveal key={d.file} dir="up" delay={(k % 3) * 0.1}>
              <div className="card group overflow-hidden rounded-3xl">
                <div className="relative h-56 overflow-hidden bg-white">
                  <Image src={d.file} alt={d.title.en} fill sizes="33vw" className="object-contain p-4 transition duration-700 group-hover:scale-105" />
                </div>
                <div className="flex items-center justify-between gap-4 p-5">
                  <div>
                    <h3 className="font-semibold"><T {...d.title} /></h3>
                    <p className="text-xs text-muted">{d.type} · <T {...d.size} /></p>
                  </div>
                  <a href={d.file} download className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-leaf text-white transition hover:scale-110 hover:bg-leaf-600" aria-label={`Download ${d.title.en}`}>
                    <Download size={20} />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
