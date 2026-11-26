import Image from "next/image";
import type { Metadata } from "next";
import { Dna, FlaskConical, Microscope, Sprout, Sun, Droplets } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionTitle from "@/components/SectionTitle";
import { IMG } from "@/lib/data";

export const metadata: Metadata = { title: "Research & Development" };

const AREAS = [
  { I: Dna, title: "Plant Breeding", text: "Behtar parental lines ka intikhab aur naye hybrids ki tayyari." },
  { I: Microscope, title: "Seed Testing Lab", text: "Germination, vigor, genetic purity aur moisture ke tests." },
  { I: Sprout, title: "Multi-location Trials", text: "Punjab aur Sindh ke mukhtalif ilaqon mein field performance testing." },
  { I: Sun, title: "Climate Resilience", text: "Garmi, khushk-saali aur aandhi bardasht karne wali varieties par kaam." },
  { I: Droplets, title: "Water Efficiency", text: "Kam pani mein zyada paidawar dene wale genotypes ki talaash." },
  { I: FlaskConical, title: "Seed Treatment", text: "Fungicide aur insecticide treatment se beej ka shuruaati tahaffuz." },
];

const STEPS = [
  ["Germplasm Collection", "Mulki aur ghair-mulki behtareen germplasm ka zakheera."],
  ["Hybrid Development", "Crossing aur selection se naye hybrid combinations."],
  ["Station Trials", "Research station par ibtidai performance jaanch."],
  ["Farmer Field Trials", "Asal kisaan ke khet mein — asal halaat mein test."],
  ["Commercial Launch", "Kamyab varieties certified ho kar market mein."],
];

export default function RnD() {
  return (
    <>
      <PageHero title="Research & Development" urdu="تحقیق و ترقی" crumb="Research & Development" image={IMG.greenhouseLarge}
        subtitle="Science aur tajurbe ka milaap — har season behtar beej." />

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-24 sm:px-6 lg:grid-cols-2">
        <Reveal dir="left" className="relative h-[460px]">
          <div className="absolute inset-0 overflow-hidden rounded-[2rem] shadow-2xl"><Image src={IMG.seedlingPots} alt="Seedling trials" fill sizes="50vw" className="object-cover" /></div>
          <div className="floaty absolute -bottom-6 -right-2 h-44 w-44 overflow-hidden rounded-3xl border-8 border-bg shadow-2xl sm:-right-6 sm:h-52 sm:w-52">
            <Image src={IMG.labCells} alt="Lab research" fill sizes="208px" className="object-cover" />
          </div>
        </Reveal>
        <Reveal dir="right">
          <span className="text-sm font-semibold uppercase tracking-widest text-leaf-600 dark:text-leaf">Innovation</span>
          <h2 className="mt-2 text-3xl font-bold md:text-5xl">Research jo <span className="text-gradient">Khet mein</span> Nazar Aaye</h2>
          <p className="mt-4 text-muted">
            Open Seeds ki R&D team mukhtalif mausami halaat mein hybrids ko test karti hai taake sirf woh varieties kisaan tak pohanchein jo
            har haal mein behtar nataij dein. P-3940 aur P-1881 isi mehnat ka phal hain.
          </p>
          <p className="mt-3 text-muted">
            Hamari tawajjoh zyada paidawar, bimariyon se bachao, aur badalte mausam (climate change) ke mutabiq resilient beej par hai.
          </p>
        </Reveal>
      </section>

      <section className="bg-bg-alt py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionTitle eyebrow="Focus Areas" title="Hamare Research Shobay" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {AREAS.map(({ I, title, text }, k) => (
              <Reveal key={title} dir={["left", "up", "right"][k % 3] as "left" | "up" | "right"} delay={(k % 3) * 0.1}>
                <div className="card group h-full rounded-3xl p-7 transition hover:-translate-y-2 hover:border-globe">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-globe to-sky text-white transition group-hover:scale-110"><I size={26} /></span>
                  <h3 className="mt-4 text-xl font-semibold">{title}</h3>
                  <p className="mt-2 text-muted">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-24 sm:px-6">
        <SectionTitle eyebrow="Pipeline" title="Ek Variety ka Safar" text="Lab se market tak har variety in marahil se guzarti hai." />
        <ol className="space-y-5">
          {STEPS.map(([t, d], k) => (
            <Reveal key={t} dir={k % 2 ? "right" : "left"}>
              <li className="card flex items-center gap-5 rounded-2xl p-5">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-gradient-to-br from-leaf to-leaf-600 text-xl font-extrabold text-white">{k + 1}</span>
                <div><h3 className="text-lg font-semibold">{t}</h3><p className="text-muted">{d}</p></div>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>
    </>
  );
}
