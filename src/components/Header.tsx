"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight, Mail, Menu, Phone, X } from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppButton";
import { useEffect, useState } from "react";
import { NAV, SITE } from "@/lib/data";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const path = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => setOpen(false), [path]);

  const solid = scrolled || open;
  const isActive = (href: string) => (href === "/" ? path === "/" : path.startsWith(href));

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Top info bar */}
      <motion.div
        animate={{ height: scrolled ? 0 : "auto", opacity: scrolled ? 0 : 1 }}
        className="hidden overflow-hidden bg-leaf-800 text-white lg:block"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-xs">
          <div className="flex items-center gap-5">
            <a href={`tel:${SITE.phones[0].replace(/-/g, "")}`} className="flex items-center gap-1.5 hover:text-corn">
              <Phone size={13} /> {SITE.phones[0]}
            </a>
            <a href={`mailto:${SITE.email}`} className="flex items-center gap-1.5 hover:text-corn">
              <Mail size={13} /> {SITE.email}
            </a>
          </div>
          <p className="urdu text-sm leading-none">اوپن سیڈ انٹرنیشنل پر بھروسہ، بہتر مستقبل کی ضمانت</p>
        </div>
      </motion.div>

      <div
        className={`transition-all duration-500 ${
          solid ? "border-b border-line bg-bg/85 shadow-lg backdrop-blur-xl" : "bg-gradient-to-b from-black/50 to-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-3 py-3 sm:px-6">
          <Logo light={!solid} />

          <nav className="hidden items-center gap-1 xl:flex">
            {NAV.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className={`relative rounded-full px-3 py-2 text-sm font-medium transition ${
                  solid ? "text-fg hover:text-leaf-600" : "text-white hover:text-corn"
                }`}
              >
                {n.label}
                {isActive(n.href) && (
                  <motion.span layoutId="nav-dot" className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-corn" />
                )}
              </Link>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <ThemeToggle />
            <Link href="/contact" className="btn-primary hidden !px-5 !py-2.5 text-sm md:inline-flex">
              Contact Us
            </Link>
            <button
              onClick={() => setOpen((o) => !o)}
              aria-label="Menu"
              aria-expanded={open}
              className={`grid h-10 w-10 place-items-center rounded-full border xl:hidden ${
                solid ? "border-line text-fg" : "border-white/40 text-white"
              }`}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden border-t border-line bg-bg xl:hidden"
            >
              <div className="mx-auto flex max-h-[calc(100svh-72px)] max-w-7xl flex-col overflow-y-auto px-4 py-4">
                {[...NAV, { href: "/contact", label: "Contact Us" }].map((n, i) => (
                  <motion.div key={n.href} initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: i * 0.05 }}>
                    <Link
                      href={n.href}
                      className={`flex items-center justify-between rounded-xl border-b border-line/60 px-4 py-3.5 font-medium ${
                        isActive(n.href) ? "bg-leaf/15 text-leaf-600 dark:text-leaf" : "text-fg hover:bg-bg-alt"
                      }`}
                    >
                      {n.label}
                      <ChevronRight size={18} className="opacity-50" />
                    </Link>
                  </motion.div>
                ))}
                <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }} className="mt-4 grid grid-cols-2 gap-3">
                  <a href={`tel:${SITE.phones[0].replace(/-/g, "")}`} className="flex items-center justify-center gap-2 rounded-xl bg-leaf py-3 font-semibold text-white">
                    <Phone size={18} /> Call
                  </a>
                  <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 rounded-xl bg-[#25d366] py-3 font-semibold text-white">
                    <WhatsAppIcon size={18} /> WhatsApp
                  </a>
                </motion.div>
                <p className="urdu mt-4 text-center text-lg text-leaf-600 dark:text-leaf">اوپن سیڈ انٹرنیشنل پر بھروسہ، بہتر مستقبل کی ضمانت</p>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
