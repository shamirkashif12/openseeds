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
import { CATEGORIES, IMG, PROCESS, PRODUCTS, SITE, STATS, URDU, WHY_US } from "@/lib/data";

export default function Home() {
  return (
    <>
      <HeroSlider />

      {/* Intro */}
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-24 sm:px-6 lg:grid-cols-2">
        <Reveal dir="left" className="relative">
          <div className="relative h-[420px] overflow-hidden rounded-[2rem] shadow-2xl md:h-[520px]">
            <Image src={IMG.harvest} alt="Kisaan khet mein" fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" />
          </div>
          <div className="floaty absolute -bottom-8 -right-2 w-44 overflow-hidden rounded-3xl border-4 border-bg shadow-2xl sm:-right-8 sm:w-56">
            <div className="relative h-56 sm:h-64">
              <Image src="/images/corn-p3940.jpg" alt="P-3940 bag" fill sizes="224px" className="bg-white object-contain p-2" />
            </div>
          </div>
          <div className="absolute -left-3 top-8 rounded-2xl bg-ribbon px-5 py-3 text-white shadow-xl sm:-left-6">
            <p className="text-2xl font-extrabold">100%</p>
            <p className="text-xs">Lab-Tested Beej</p>
          </div>
        </Reveal>

        <Reveal dir="right">
          <span className="text-sm font-semibold uppercase tracking-widest text-leaf-600 dark:text-leaf">Kisaan ka Saathi</span>
          <h2 className="mt-2 text-3xl font-bold leading-tight md:text-5xl">
            Cultivating the Future, <span className="text-gradient">Growing Together</span>
          </h2>
          <p className="urdu mt-3 text-xl text-globe dark:text-sky">{URDU.trust}</p>
          <p className="mt-4 text-muted">
            Open Seed International Agro Crop Sciences Pakistan ke zameendaron ko high-quality hybrid corn, paddy aur oil seeds faraham karti hai.
            Hamara maqsad simple hai — behtar beej, behtar fasal, aur kisaan ki khushhali.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {["Hybrid Corn Specialists", "Lab-tested germination", "Field support team", "Punjab & Sindh network"].map((t) => (
              <li key={t} className="flex items-center gap-2 font-medium"><CheckCircle2 className="text-leaf" size={20} /> {t}</li>
            ))}
          </ul>
          <Link href="/about" className="btn-primary mt-8">Hamare Baare Mein <ArrowRight size={18} /></Link>
        </Reveal>
      </section>

      {/* Stats with fixed background */}
      <section className="relative overflow-hidden bg-cover bg-fixed bg-center py-20" style={{ backgroundImage: `url(${IMG.fieldSunset})` }}>
        <div className="absolute inset-0 bg-gradient-to-r from-leaf-800/90 to-globe/85" />
        <div className="relative mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 text-center text-white sm:px-6 lg:grid-cols-4">
          {STATS.map((s, k) => (
            <Reveal key={s.label} dir={k % 2 ? "down" : "up"} delay={k * 0.1}>
              <p className="text-4xl font-extrabold text-corn md:text-6xl"><Counter to={s.value} suffix={s.suffix} /></p>
              <p className="mt-2 text-lg font-semibold">{s.label}</p>
              <p className="text-sm text-white/70">{s.sub}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
        <SectionTitle eyebrow="We Deal In" title="Hamari Product Categories" urdu="ہر موسم، ہر فصل کے لیے بہترین بیج" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CATEGORIES.map((c, k) => (
            <Reveal key={c.slug} dir={k % 2 ? "down" : "up"} delay={k * 0.1}>
              <Link href={`/products?cat=${c.slug}`} className="group relative block h-96 overflow-hidden rounded-3xl shadow-xl">
                <Image src={c.image} alt={c.name} fill sizes="(max-width:640px) 100vw, 25vw" className="object-cover transition duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                {c.comingSoon && <span className="absolute right-4 top-4 rounded-full bg-corn px-3 py-1 text-xs font-bold text-white">Coming Soon</span>}
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <p className="urdu text-lg text-corn" style={{ textAlign: "left" }}>{c.urdu}</p>
                  <h3 className="text-2xl font-bold">{c.name}</h3>
                  <p className="mt-2 max-h-0 overflow-hidden text-sm text-white/85 transition-all duration-500 group-hover:max-h-32">{c.desc}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Featured products */}
      <section className="bg-bg-alt py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionTitle eyebrow="Featured Seeds" title="Zameendaron ki Pehli Pasand" text="Har bag mein quality, har daane mein bharosa." />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {PRODUCTS.map((p, k) => (
              <Reveal key={p.slug} dir={k < 2 ? "left" : "right"} delay={k * 0.1}><ProductCard p={p} /></Reveal>
            ))}
          </div>
          <Reveal dir="up" className="mt-12 text-center">
            <Link href="/products" className="btn-primary">Tamam Products Dekhein <ArrowRight size={18} /></Link>
          </Reveal>
        </div>
      </section>

      {/* Why us */}
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-24 sm:px-6 lg:grid-cols-2">
        <div>
          <SectionTitle center={false} eyebrow="Why Open Seeds?" title="Kyun Chunein Open Seeds?" text="Hum sirf beej nahi bechte — hum kisaan ke saath fasal ugaate hain." />
          <div className="grid gap-5 sm:grid-cols-2">
            {WHY_US.map((w, k) => (
              <Reveal key={w.title} dir="left" delay={k * 0.1}>
                <div className="card group h-full rounded-2xl p-6 transition hover:-translate-y-1 hover:border-leaf">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-leaf to-leaf-600 text-white transition group-hover:rotate-6 group-hover:scale-110">
                    <Icon name={w.icon} size={22} />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold">{w.title}</h3>
                  <p className="mt-1 text-sm text-muted">{w.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <Reveal dir="right" className="relative h-[560px]">
          <div className="absolute right-0 top-0 h-[70%] w-[75%] overflow-hidden rounded-[2rem] shadow-2xl">
            <Image src={IMG.cornCobs} alt="Corn challiyan" fill sizes="40vw" className="object-cover" />
          </div>
          <div className="absolute bottom-0 left-0 h-[55%] w-[60%] overflow-hidden rounded-[2rem] border-8 border-bg shadow-2xl">
            <Image src={IMG.sprayer} alt="Field mein kisaan" fill sizes="30vw" className="object-cover" />
          </div>
          <div className="floaty absolute bottom-16 right-4 rounded-2xl bg-card p-4 shadow-xl">
            <p className="urdu text-lg text-leaf-600 dark:text-leaf">{URDU.slogan1}</p>
          </div>
        </Reveal>
      </section>

      {/* Process */}
      <section className="bg-bg-alt py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionTitle eyebrow="Our Process" title="Lab se Khet Tak" text="Har beej ek lamba safar tay kar ke aap tak pohanchta hai." />
          <div className="relative grid gap-8 md:grid-cols-5">
            <div className="absolute left-0 right-0 top-10 hidden h-0.5 bg-gradient-to-r from-leaf via-corn to-globe md:block" />
            {PROCESS.map((p, k) => (
              <Reveal key={p.title} dir="up" delay={k * 0.15} className="relative text-center">
                <span className="relative mx-auto grid h-20 w-20 place-items-center rounded-full border-4 border-bg-alt bg-gradient-to-br from-leaf to-globe text-white shadow-lg">
                  <Icon name={p.icon} size={30} />
                  <span className="absolute -right-1 -top-1 grid h-7 w-7 place-items-center rounded-full bg-corn text-xs font-bold">{k + 1}</span>
                </span>
                <h3 className="mt-4 text-lg font-semibold">{p.title}</h3>
                <p className="text-sm text-muted">{p.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Urdu marquee */}
      <div className="overflow-hidden bg-gradient-to-r from-ribbon to-[#9c0c24] py-4 text-white">
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
          <SectionTitle eyebrow="Farmer Stories" title="Kisaanon ki Zubani" urdu={URDU.farmers} />
          <Reveal dir="zoom"><Testimonials /></Reveal>
        </div>
      </section>

      {/* Map + contact quick */}
      <section className="mx-auto grid max-w-7xl gap-10 px-4 pb-16 sm:px-6 lg:grid-cols-5">
        <Reveal dir="left" className="lg:col-span-2">
          <SectionTitle center={false} eyebrow="Visit Us" title="Hamari Factory" text="Tashreef layein ya call karein — hamari team aap ki khidmat ke liye haazir hai." />
          <div className="space-y-3 text-muted">
            <p><strong className="text-fg">📍 </strong>{SITE.factory}</p>
            <p><strong className="text-fg">🏢 </strong>{SITE.office}</p>
            <p><strong className="text-fg">📞 </strong>{SITE.phones.join(" · ")}</p>
          </div>
          <a href={SITE.mapLink} target="_blank" rel="noopener noreferrer" className="btn-primary mt-6">Directions Hasil Karein <ArrowRight size={18} /></a>
        </Reveal>
        <Reveal dir="right" className="lg:col-span-3"><MapEmbed /></Reveal>
      </section>
    </>
  );
}
