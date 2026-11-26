import Link from "next/link";
import { Facebook, Instagram, Mail, MapPin, Phone, Youtube } from "lucide-react";
import { CATEGORIES, CONTACT_LINK, NAV, SITE, URDU } from "@/lib/data";
import Logo from "./Logo";
import Reveal from "./Reveal";
import T from "./T";

export default function Footer() {
  return (
    <footer className="relative mt-24 bg-[#071a10] text-white/80">
      {/* CTA band */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal dir="zoom">
          <div className="relative -translate-y-1/2 overflow-hidden rounded-3xl bg-gradient-to-r from-leaf-600 via-leaf to-globe p-8 text-white shadow-2xl md:p-10">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10" />
            <div className="absolute -bottom-16 right-32 h-40 w-40 rounded-full bg-corn/30" />
            <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              <div>
                <h3 className="text-2xl font-bold md:text-3xl"><T en="Want to become a dealer?" ur="ڈیلر بننا چاہتے ہیں؟" /></h3>
                <p className="mt-1 text-white/90"><T en="Join the Open Seeds network and bring the best seed to farmers in your area." ur="اوپن سیڈز نیٹ ورک کا حصہ بنیں — اپنے علاقے کے کسانوں تک بہترین بیج پہنچائیں۔" /></p>
              </div>
              <Link href="/contact" className="shrink-0 rounded-full bg-white px-6 py-3 font-semibold text-leaf-800 transition hover:scale-105 hover:bg-corn hover:text-white">
                <T en="Contact Us Now" ur="ابھی رابطہ کریں" />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="mx-auto grid max-w-7xl gap-10 px-4 pb-12 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo light />
          <p className="mt-4 text-sm leading-relaxed">
            <T en={`${SITE.legalName} — high-quality hybrid and certified seed for Pakistan's farmers.`}
              ur={`${SITE.legalNameUrdu} — پاکستان کے کسانوں کے لیے اعلیٰ معیار کے ہائبرڈ اور تصدیق شدہ بیج۔`} />
          </p>
          <p className="urdu mt-3 text-lg text-corn">{URDU.farmers}</p>
          <div className="mt-4 flex gap-3">
            {[
              { href: SITE.social.facebook, I: Facebook, l: "Facebook" },
              { href: SITE.social.instagram, I: Instagram, l: "Instagram" },
              { href: SITE.social.youtube, I: Youtube, l: "YouTube" },
            ].map(({ href, I, l }) => (
              <a key={l} href={href} target="_blank" rel="noopener noreferrer" aria-label={l}
                className="grid h-10 w-10 place-items-center rounded-full bg-white/10 transition hover:-translate-y-1 hover:bg-leaf">
                <I size={18} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-lg font-semibold text-white"><T en="Quick Links" ur="فوری لنکس" /></h4>
          <ul className="space-y-2 text-sm">
            {[...NAV, CONTACT_LINK].map((n) => (
              <li key={n.href}><Link href={n.href} className="transition hover:ps-1 hover:text-corn">› <T {...n.label} /></Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-lg font-semibold text-white"><T en="Our Products" ur="ہماری مصنوعات" /></h4>
          <ul className="space-y-2 text-sm">
            {CATEGORIES.map((c) => (
              <li key={c.slug}><Link href={`/products?cat=${c.slug}`} className="transition hover:ps-1 hover:text-corn">› <T {...c.name} /></Link></li>
            ))}
            <li><Link href="/products/p-3940" className="transition hover:ps-1 hover:text-corn">› <T en="P-3940 Hybrid Corn" ur="P-3940 ہائبرڈ مکئی" /></Link></li>
            <li><Link href="/products/p-1881" className="transition hover:ps-1 hover:text-corn">› <T en="P-1881 Hybrid Corn" ur="P-1881 ہائبرڈ مکئی" /></Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-lg font-semibold text-white"><T en="Contact" ur="رابطہ" /></h4>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2"><MapPin size={18} className="mt-0.5 shrink-0 text-leaf" /><span><T en="Factory: " ur="فیکٹری: " /><T {...SITE.factory} /><br /><T en="Office: " ur="دفتر: " /><T {...SITE.office} /></span></li>
            <li className="flex gap-2"><Phone size={18} className="mt-0.5 shrink-0 text-leaf" />
              <span className="flex flex-col">{SITE.phones.map((p) => <a key={p} href={`tel:${p.replace(/-/g, "")}`} className="hover:text-corn">{p}</a>)}</span>
            </li>
            <li className="flex gap-2"><Mail size={18} className="mt-0.5 shrink-0 text-leaf" /><a href={`mailto:${SITE.email}`} className="break-all hover:text-corn">{SITE.email}</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 pb-24 pt-5 text-xs sm:flex-row sm:px-6 sm:pb-5 sm:pe-24">
          <p>© {new Date().getFullYear()} <T en={`${SITE.legalName} All rights reserved.`} ur={`${SITE.legalNameUrdu} — جملہ حقوق محفوظ ہیں۔`} /></p>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-corn"><T en="Privacy Policy" ur="رازداری کی پالیسی" /></Link>
            <Link href="/terms-conditions" className="hover:text-corn"><T en="Terms & Conditions" ur="شرائط و ضوابط" /></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
