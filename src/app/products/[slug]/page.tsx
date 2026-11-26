import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CheckCircle2, MessageCircle, Phone } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionTitle from "@/components/SectionTitle";
import ProductCard from "@/components/ProductCard";
import T from "@/components/T";
import { CATEGORIES, IMG, PRODUCTS, SITE } from "@/lib/data";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = PRODUCTS.find((x) => x.slug === slug);
  return { title: p ? `${p.name.en} ${p.crop.en}` : "Product", description: p?.short.en };
}

export default async function ProductDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = PRODUCTS.find((x) => x.slug === slug);
  if (!p) notFound();
  const cat = CATEGORIES.find((c) => c.slug === p.category);
  const related = PRODUCTS.filter((x) => x.slug !== p.slug).slice(0, 3);
  const wa = (text: string) => `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;
  const waEn = wa(`Hello! I would like information and the price for ${p.name.en} (${p.crop.en}).`);
  const waUr = wa(`السلام علیکم! مجھے ${p.name.ur} (${p.crop.ur}) کے بارے میں معلومات اور قیمت چاہیے۔`);
  const waClass = "btn-primary !bg-none !bg-[#25d366]";
  const waIcon = <MessageCircle size={18} />;

  return (
    <>
      <PageHero title={p.name} image={cat?.image ?? IMG.cropField} subtitle={p.crop} />

      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2">
        <Reveal dir="left">
          <div className="relative h-[460px] overflow-hidden rounded-[2rem] bg-gradient-to-br from-leaf/15 via-bg-alt to-sky/15 shadow-xl md:h-[560px]">
            {p.isNew && <span className="absolute start-5 top-5 z-10 rounded-full bg-ribbon px-4 py-1.5 text-sm font-bold text-white">NEW · <span className="urdu">نیا</span></span>}
            <Image src={p.image} alt={p.name.en} fill sizes="(max-width:1024px) 100vw, 50vw"
              className={`floaty ${p.image.startsWith("/images/") ? "object-contain p-8" : "object-cover"}`} priority />
          </div>
        </Reveal>

        <Reveal dir="right">
          {cat && <span className="rounded-full bg-leaf/15 px-4 py-1 text-sm font-semibold text-leaf-600 dark:text-leaf"><T {...cat.name} /></span>}
          <h2 className="mt-4 text-4xl font-extrabold md:text-5xl"><T {...p.name} /></h2>
          <p className="text-xl font-semibold text-globe dark:text-sky"><T {...p.crop} /></p>
          <p className="mt-4 text-muted"><T {...p.description} /></p>

          <h3 className="mt-8 text-lg font-bold"><T en="Features" ur="خصوصیات" /></h3>
          <ul className="mt-3 space-y-2">
            {p.features.map((f) => (
              <li key={f.en} className="flex gap-2"><CheckCircle2 className="mt-0.5 shrink-0 text-leaf" size={20} /><T {...f} /></li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <T
              en={<a href={waEn} target="_blank" rel="noopener noreferrer" className={waClass}>{waIcon} Order on WhatsApp</a>}
              ur={<a href={waUr} target="_blank" rel="noopener noreferrer" className={waClass}>{waIcon} واٹس ایپ پر آرڈر کریں</a>}
            />
            <a href={`tel:${SITE.phones[0].replace(/-/g, "")}`} className="btn-outline text-leaf-600 hover:bg-leaf hover:text-white dark:text-leaf">
              <Phone size={18} /> <T en="Call Us" ur="کال کریں" />
            </a>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-4xl px-4 sm:px-6">
        <Reveal dir="up">
          <div className="card overflow-hidden rounded-3xl">
            <div className="bg-gradient-to-r from-leaf-600 to-globe px-6 py-4 text-lg font-bold text-white">
              <T en="Technical Specifications" ur="تکنیکی تفصیلات" />
            </div>
            <table className="w-full text-start">
              <tbody>
                {p.specs.map((s, k) => (
                  <tr key={s.label.en} className={k % 2 ? "bg-bg-alt" : ""}>
                    <th className="w-1/2 px-6 py-4 text-start font-semibold"><T {...s.label} /></th>
                    <td className="px-6 py-4 text-muted"><T {...s.value} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-center text-xs text-muted">
            <T
              en="* Results may vary with weather, soil and crop management."
              ur="* نتائج موسم، زمین اور فصل کی دیکھ بھال کے مطابق مختلف ہو سکتے ہیں۔"
            />
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
        <SectionTitle eyebrow={{ en: "More Seeds", ur: "مزید بیج" }} title={{ en: "Other Products", ur: "دیگر مصنوعات" }} />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((r, k) => <Reveal key={r.slug} dir="up" delay={k * 0.1}><ProductCard p={r} /></Reveal>)}
        </div>
        <div className="mt-10 text-center"><Link href="/products" className="btn-primary"><T en="All Products" ur="تمام مصنوعات" /></Link></div>
      </section>
    </>
  );
}
