import Image from "next/image";
import type { Metadata } from "next";
import { Eye, Target, Heart } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionTitle from "@/components/SectionTitle";
import Counter from "@/components/Counter";
import { IMG, SITE, STATS, TIMELINE, URDU } from "@/lib/data";

export const metadata: Metadata = { title: "About Us" };

const VMV = [
  { I: Eye, title: "Hamara Vision", text: "Pakistan ke har kisaan tak jadeed, high-yield beej pohanchana aur zarai khud-kafalat mein apna kirdar ada karna.", color: "from-globe to-sky" },
  { I: Target, title: "Hamara Mission", text: "Research, quality control aur field support ke zariye kisaan ki paidawar aur aamdani mein izafa karna.", color: "from-leaf-600 to-leaf" },
  { I: Heart, title: "Hamari Values", text: "Imandari, quality par koi samjhota nahi, aur kisaan ke sath lambi rifaqat — Growing Together.", color: "from-ribbon to-corn" },
];

export default function About() {
  return (
    <>
      <PageHero title="About Us" urdu="ہمارے بارے میں" crumb="About Us" image={IMG.tractor}
        subtitle="Kisaan ka bharosa, hamari pehchaan — Open Seed International Agro Crop Sciences." />

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-24 sm:px-6 lg:grid-cols-2">
        <Reveal dir="left">
          <span className="text-sm font-semibold uppercase tracking-widest text-leaf-600 dark:text-leaf">Who We Are</span>
          <h2 className="mt-2 text-3xl font-bold md:text-5xl">Beej se <span className="text-gradient">Khushhali</span> tak</h2>
          <p className="urdu mt-3 text-xl text-globe dark:text-sky">{SITE.legalNameUrdu}</p>
          <div className="mt-4 space-y-4 text-muted">
            <p>
              {SITE.legalName} ek Pakistani seed company hai jis ki factory Pakpattan Road, Qaboola (Arifwala) mein aur corporate office Bahria Town Lahore mein waqe hai.
              Hum hybrid corn, paddy aur oil seeds ki processing, packing aur marketing karte hain.
            </p>
            <p>
              Hamara flagship hybrid <strong className="text-fg">P-3940</strong> aaj Punjab ke zameendaron ki pehli pasand hai, aur hamari nayi variety <strong className="text-fg">P-1881</strong> paidawar ke naye record qaim kar rahi hai.
              Hamara globe aur hare patton wala logo is baat ki alamat hai ke hum international quality ko Pakistani mitti tak la rahe hain.
            </p>
          </div>
        </Reveal>
        <Reveal dir="right" className="relative grid grid-cols-2 gap-4">
          <div className="relative h-72 overflow-hidden rounded-3xl shadow-xl md:h-80"><Image src={IMG.handsSoil} alt="Mitti mein paude" fill sizes="25vw" className="object-cover" /></div>
          <div className="relative mt-12 h-72 overflow-hidden rounded-3xl shadow-xl md:h-80"><Image src={IMG.cornRows} alt="Corn field" fill sizes="25vw" className="object-cover" /></div>
          <div className="absolute left-1/2 top-1/2 grid h-32 w-32 -translate-x-1/2 -translate-y-1/2 place-items-center overflow-hidden rounded-full border-4 border-bg bg-white shadow-2xl">
            <Image src="/images/logo.jpg" alt="Open Seeds logo" fill sizes="128px" className="scale-110 object-contain" />
          </div>
        </Reveal>
      </section>

      <section className="bg-bg-alt py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 md:grid-cols-3">
          {VMV.map(({ I, title, text, color }, k) => (
            <Reveal key={title} dir={k === 0 ? "left" : k === 2 ? "right" : "up"} delay={k * 0.1}>
              <div className="card group h-full rounded-3xl p-8 transition hover:-translate-y-2">
                <span className={`grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br ${color} text-white shadow-lg transition group-hover:rotate-12`}><I size={28} /></span>
                <h3 className="mt-5 text-2xl font-bold">{title}</h3>
                <p className="mt-2 text-muted">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-24 sm:px-6">
        <SectionTitle eyebrow="Our Journey" title="Hamara Safar" urdu={URDU.slogan2} />
        <div className="relative">
          <div className="absolute left-5 top-0 h-full w-0.5 bg-gradient-to-b from-leaf via-corn to-globe md:left-1/2" />
          {TIMELINE.map((t, k) => (
            <Reveal key={t.title} dir={k % 2 ? "right" : "left"} className={`relative mb-10 pl-14 md:w-1/2 md:pl-0 ${k % 2 ? "md:ml-auto md:pl-12" : "md:pr-12 md:text-right"}`}>
              <span className={`absolute left-2 top-3 h-7 w-7 rounded-full border-4 border-bg bg-leaf shadow ${k % 2 ? "md:-left-3.5" : "md:left-auto md:-right-3.5"}`} />
              <div className="card rounded-2xl p-6">
                <span className="inline-block rounded-full bg-corn/15 px-3 py-1 text-xs font-bold text-corn">{t.year}</span>
                <h3 className="mt-2 text-xl font-bold">{t.title}</h3>
                <p className="mt-1 text-muted">{t.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-cover bg-fixed bg-center py-20" style={{ backgroundImage: `url(${IMG.greenRows})` }}>
        <div className="absolute inset-0 bg-leaf-800/85" />
        <div className="relative mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 text-center text-white sm:px-6 lg:grid-cols-4">
          {STATS.map((s, k) => (
            <Reveal key={s.label} dir="zoom" delay={k * 0.1}>
              <p className="text-4xl font-extrabold text-corn md:text-5xl"><Counter to={s.value} suffix={s.suffix} /></p>
              <p className="mt-1 font-semibold">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
