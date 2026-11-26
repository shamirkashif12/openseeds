import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CheckCircle2, MessageCircle, Phone } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionTitle from "@/components/SectionTitle";
import ProductCard from "@/components/ProductCard";
import { CATEGORIES, IMG, PRODUCTS, SITE } from "@/lib/data";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = PRODUCTS.find((x) => x.slug === slug);
  return { title: p ? `${p.name} ${p.crop}` : "Product", description: p?.short };
}

export default async function ProductDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = PRODUCTS.find((x) => x.slug === slug);
  if (!p) notFound();
  const cat = CATEGORIES.find((c) => c.slug === p.category);
  const related = PRODUCTS.filter((x) => x.slug !== p.slug).slice(0, 3);
  const wa = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(`Assalam o Alaikum! Mujhe ${p.name} (${p.crop}) ke baare mein maloomat aur qeemat chahiye.`)}`;

  return (
    <>
      <PageHero title={p.name} crumb={p.name} image={cat?.image ?? IMG.cropField} subtitle={p.crop} />

      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2">
        <Reveal dir="left">
          <div className="relative h-[460px] overflow-hidden rounded-[2rem] bg-gradient-to-br from-leaf/15 via-bg-alt to-sky/15 shadow-xl md:h-[560px]">
            {p.isNew && <span className="absolute left-5 top-5 z-10 rounded-full bg-ribbon px-4 py-1.5 text-sm font-bold text-white">NEW · <span className="urdu">نیا</span></span>}
            <Image src={p.image} alt={p.name} fill sizes="(max-width:1024px) 100vw, 50vw"
              className={`floaty ${p.image.startsWith("/images/") ? "object-contain p-8" : "object-cover"}`} priority />
          </div>
        </Reveal>

        <Reveal dir="right">
          <span className="rounded-full bg-leaf/15 px-4 py-1 text-sm font-semibold text-leaf-600 dark:text-leaf">{cat?.name}</span>
          <h2 className="mt-4 text-4xl font-extrabold md:text-5xl">{p.name}</h2>
          <p className="text-xl font-semibold text-globe dark:text-sky">{p.crop}</p>
          <p className="mt-4 text-muted">{p.description}</p>

          <h3 className="mt-8 text-lg font-bold">Khasusiyaat (Features)</h3>
          <ul className="mt-3 space-y-2">
            {p.features.map((f) => (
              <li key={f} className="flex gap-2"><CheckCircle2 className="mt-0.5 shrink-0 text-leaf" size={20} />{f}</li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-primary !bg-none !bg-[#25d366]"><MessageCircle size={18} /> WhatsApp par Order</a>
            <a href={`tel:${SITE.phones[0].replace(/-/g, "")}`} className="btn-outline text-leaf-600 hover:bg-leaf hover:text-white dark:text-leaf"><Phone size={18} /> Call Karein</a>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-4xl px-4 sm:px-6">
        <Reveal dir="up">
          <div className="card overflow-hidden rounded-3xl">
            <div className="bg-gradient-to-r from-leaf-600 to-globe px-6 py-4 text-lg font-bold text-white">Technical Specifications</div>
            <table className="w-full text-left">
              <tbody>
                {p.specs.map((s, k) => (
                  <tr key={s.label} className={k % 2 ? "bg-bg-alt" : ""}>
                    <th className="w-1/2 px-6 py-4 font-semibold">{s.label}</th>
                    <td className="px-6 py-4 text-muted">{s.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-center text-xs text-muted">* Nataij mausam, zameen aur fasal ki dekh bhaal ke mutabiq mukhtalif ho sakte hain.</p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
        <SectionTitle eyebrow="More Seeds" title="Doosre Products" />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((r, k) => <Reveal key={r.slug} dir="up" delay={k * 0.1}><ProductCard p={r} /></Reveal>)}
        </div>
        <div className="mt-10 text-center"><Link href="/products" className="btn-primary">Tamam Products</Link></div>
      </section>
    </>
  );
}
