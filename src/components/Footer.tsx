import Link from "next/link";
import { Facebook, Instagram, Mail, MapPin, Phone, Youtube } from "lucide-react";
import { CATEGORIES, NAV, SITE, URDU } from "@/lib/data";
import Logo from "./Logo";
import Reveal from "./Reveal";

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
                <h3 className="text-2xl font-bold md:text-3xl">Dealer banna chahte hain?</h3>
                <p className="mt-1 text-white/90">Open Seeds network ka hissa banein — apne ilaqe mein kisaanon tak behtareen beej pohanchayein.</p>
              </div>
              <Link href="/contact" className="shrink-0 rounded-full bg-white px-6 py-3 font-semibold text-leaf-800 transition hover:scale-105 hover:bg-corn hover:text-white">
                Abhi Rabta Karein
              </Link>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="mx-auto grid max-w-7xl gap-10 px-4 pb-12 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo light />
          <p className="mt-4 text-sm leading-relaxed">
            {SITE.legalName} — Pakistan ke kisaanon ke liye high-quality hybrid aur certified beej.
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
          <h4 className="mb-4 text-lg font-semibold text-white">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {[...NAV, { href: "/contact", label: "Contact Us" }].map((n) => (
              <li key={n.href}><Link href={n.href} className="transition hover:pl-1 hover:text-corn">› {n.label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-lg font-semibold text-white">Hamare Products</h4>
          <ul className="space-y-2 text-sm">
            {CATEGORIES.map((c) => (
              <li key={c.slug}><Link href={`/products?cat=${c.slug}`} className="transition hover:pl-1 hover:text-corn">› {c.name}</Link></li>
            ))}
            <li><Link href="/products/p-3940" className="transition hover:pl-1 hover:text-corn">› P-3940 Hybrid Corn</Link></li>
            <li><Link href="/products/p-1881" className="transition hover:pl-1 hover:text-corn">› P-1881 Hybrid Corn</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-lg font-semibold text-white">Rabta</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2"><MapPin size={18} className="mt-0.5 shrink-0 text-leaf" /><span>{SITE.factory}<br />{SITE.office}</span></li>
            <li className="flex gap-2"><Phone size={18} className="mt-0.5 shrink-0 text-leaf" />
              <span className="flex flex-col">{SITE.phones.map((p) => <a key={p} href={`tel:${p.replace(/-/g, "")}`} className="hover:text-corn">{p}</a>)}</span>
            </li>
            <li className="flex gap-2"><Mail size={18} className="mt-0.5 shrink-0 text-leaf" /><a href={`mailto:${SITE.email}`} className="break-all hover:text-corn">{SITE.email}</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 pb-24 pt-5 text-xs sm:flex-row sm:px-6 sm:pb-5 sm:pr-24">
          <p>© {new Date().getFullYear()} {SITE.legalName} All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-corn">Privacy Policy</Link>
            <Link href="/terms-conditions" className="hover:text-corn">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
