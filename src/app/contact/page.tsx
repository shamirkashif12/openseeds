import type { Metadata } from "next";
import { Building2, Clock, Factory, Mail, Phone } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionTitle from "@/components/SectionTitle";
import ContactForm from "@/components/ContactForm";
import MapEmbed from "@/components/MapEmbed";
import T from "@/components/T";
import { WhatsAppIcon } from "@/components/WhatsAppButton";
import { FAQS, IMG, SITE } from "@/lib/data";

export const metadata: Metadata = { title: "Contact Us" };

export default function Contact() {
  const cards = [
    { I: Factory, title: { en: "Factory", ur: "فیکٹری" }, body: <p><T {...SITE.factory} /></p> },
    { I: Building2, title: { en: "Head Office", ur: "ہیڈ آفس" }, body: <p><T {...SITE.office} /></p> },
    {
      I: Phone,
      title: { en: "Phone", ur: "فون" },
      body: SITE.phones.map((l) => <a key={l} dir="ltr" href={`tel:${l.replace(/-/g, "")}`} className="block hover:text-leaf">{l}</a>),
    },
    {
      I: Mail,
      title: { en: "Email", ur: "ای میل" },
      body: <a href={`mailto:${SITE.email}`} className="block break-all hover:text-leaf">{SITE.email}</a>,
    },
  ];
  return (
    <>
      <PageHero title={{ en: "Contact Us", ur: "ہم سے رابطہ کریں" }} image={IMG.farmerWorking}
        subtitle={{ en: "Questions, orders or dealership — we're here to listen.", ur: "سوال، آرڈر یا ڈیلرشپ — ہم آپ کی بات سننے کے لیے حاضر ہیں۔" }} />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map(({ I, title, body }, k) => (
            <Reveal key={title.en} dir={k % 2 ? "down" : "up"} delay={k * 0.1}>
              <div className="card group h-full rounded-3xl p-7 text-center transition hover:-translate-y-2 hover:border-leaf">
                <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br from-leaf to-globe text-white transition group-hover:rotate-12"><I size={26} /></span>
                <h3 className="mt-4 text-lg font-semibold"><T {...title} /></h3>
                <div className="mt-2 space-y-1 text-sm text-muted">{body}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-5">
        <Reveal dir="left" className="lg:col-span-3"><ContactForm /></Reveal>
        <Reveal dir="right" className="space-y-6 lg:col-span-2">
          <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-3xl bg-[#25d366] p-6 text-white shadow-xl transition hover:-translate-y-1">
            <WhatsAppIcon size={44} />
            <div>
              <p className="text-xl font-bold"><T en="Chat on WhatsApp" ur="واٹس ایپ پر رابطہ" /></p>
              <p className="text-white/90"><T en="Quick reply — " ur="فوری جواب — " /><span dir="ltr">{SITE.phones[0]}</span></p>
            </div>
          </a>
          <div className="card rounded-3xl p-6">
            <h3 className="flex items-center gap-2 text-lg font-semibold"><Clock size={20} className="text-leaf" /> <T en="Office Hours" ur="دفتری اوقات" /></h3>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              <li className="flex justify-between gap-4"><T en="Monday – Saturday" ur="پیر تا ہفتہ" /><span dir="ltr">9:00 AM – 6:00 PM</span></li>
              <li className="flex justify-between gap-4"><T en="Sunday" ur="اتوار" /><span className="text-ribbon"><T en="Closed" ur="بند" /></span></li>
            </ul>
          </div>
          <MapEmbed className="h-64" />
        </Reveal>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-24 sm:px-6">
        <SectionTitle eyebrow={{ en: "FAQs", ur: "سوالات" }} title={{ en: "Frequently Asked Questions", ur: "اکثر پوچھے جانے والے سوالات" }} />
        <div className="space-y-4">
          {FAQS.map((f, k) => (
            <Reveal key={f.q.en} dir={k % 2 ? "right" : "left"}>
              <details className="card group rounded-2xl p-5 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-4 font-semibold">
                  <span><T {...f.q} /></span>
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-leaf/15 text-leaf-600 transition group-open:rotate-45 dark:text-leaf">+</span>
                </summary>
                <p className="mt-3 text-muted"><T {...f.a} /></p>
              </details>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
