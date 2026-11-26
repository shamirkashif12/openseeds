import type { Metadata } from "next";
import { Building2, Clock, Factory, Mail, Phone } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionTitle from "@/components/SectionTitle";
import ContactForm from "@/components/ContactForm";
import MapEmbed from "@/components/MapEmbed";
import { WhatsAppIcon } from "@/components/WhatsAppButton";
import { FAQS, IMG, SITE } from "@/lib/data";

export const metadata: Metadata = { title: "Contact Us" };

export default function Contact() {
  const cards = [
    { I: Factory, title: "Factory", lines: [SITE.factory.replace("Factory: ", "")] },
    { I: Building2, title: "Head Office", lines: [SITE.office.replace("Office: ", "")] },
    { I: Phone, title: "Phone", lines: SITE.phones, tel: true },
    { I: Mail, title: "Email", lines: [SITE.email], mail: true },
  ];
  return (
    <>
      <PageHero title="Contact Us" urdu="ہم سے رابطہ کریں" crumb="Contact Us" image={IMG.farmerWorking}
        subtitle="Sawal, order ya dealership — hum aap ki baat sunne ke liye haazir hain." />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map(({ I, title, lines, tel, mail }, k) => (
            <Reveal key={title} dir={k % 2 ? "down" : "up"} delay={k * 0.1}>
              <div className="card group h-full rounded-3xl p-7 text-center transition hover:-translate-y-2 hover:border-leaf">
                <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br from-leaf to-globe text-white transition group-hover:rotate-12"><I size={26} /></span>
                <h3 className="mt-4 text-lg font-semibold">{title}</h3>
                <div className="mt-2 space-y-1 text-sm text-muted">
                  {lines.map((l) =>
                    tel ? <a key={l} href={`tel:${l.replace(/-/g, "")}`} className="block hover:text-leaf">{l}</a>
                    : mail ? <a key={l} href={`mailto:${l}`} className="block break-all hover:text-leaf">{l}</a>
                    : <p key={l}>{l}</p>
                  )}
                </div>
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
            <div><p className="text-xl font-bold">WhatsApp par Rabta</p><p className="text-white/90">Foran jawab — {SITE.phones[0]}</p></div>
          </a>
          <div className="card rounded-3xl p-6">
            <h3 className="flex items-center gap-2 text-lg font-semibold"><Clock size={20} className="text-leaf" /> Office Timings</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              <li className="flex justify-between"><span>Monday – Saturday</span><span>9:00 AM – 6:00 PM</span></li>
              <li className="flex justify-between"><span>Sunday</span><span className="text-ribbon">Band (Closed)</span></li>
            </ul>
          </div>
          <MapEmbed className="h-64" />
        </Reveal>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-24 sm:px-6">
        <SectionTitle eyebrow="FAQs" title="Aksar Pooche Jane Wale Sawal" />
        <div className="space-y-4">
          {FAQS.map((f, k) => (
            <Reveal key={f.q} dir={k % 2 ? "right" : "left"}>
              <details className="card group rounded-2xl p-5 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-4 font-semibold">
                  {f.q}
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-leaf/15 text-leaf-600 transition group-open:rotate-45 dark:text-leaf">+</span>
                </summary>
                <p className="mt-3 text-muted">{f.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
