"use client";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import { useEffect, useState } from "react";
import { GALLERY, GALLERY_TAGS } from "@/lib/data";
import { useLang } from "@/lib/lang";
import T from "./T";

const TAGS = ["All", ...Array.from(new Set(GALLERY.map((g) => g.tag)))];

export default function GalleryGrid() {
  const lang = useLang();
  const [tag, setTag] = useState("All");
  const [open, setOpen] = useState<number | null>(null);
  const items = tag === "All" ? GALLERY : GALLERY.filter((g) => g.tag === tag);

  useEffect(() => {
    if (open === null) return;
    const on = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") setOpen((v) => (v! + 1) % items.length);
      if (e.key === "ArrowLeft") setOpen((v) => (v! - 1 + items.length) % items.length);
    };
    window.addEventListener("keydown", on);
    return () => window.removeEventListener("keydown", on);
  }, [open, items.length]);

  return (
    <>
      <div className="mb-10 flex flex-wrap justify-center gap-3">
        {TAGS.map((t) => (
          <button key={t} onClick={() => setTag(t)}
            className={`relative rounded-full px-5 py-2 text-sm font-semibold transition ${tag === t ? "text-white" : "border border-line bg-card hover:border-leaf"}`}>
            {tag === t && <motion.span layoutId="g-pill" className="absolute inset-0 rounded-full bg-gradient-to-r from-leaf-600 to-globe" />}
            <span className="relative">{t === "All" ? <T en="All" ur="تمام" /> : <T {...GALLERY_TAGS[t]} />}</span>
          </button>
        ))}
      </div>

      <motion.div layout className="grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <AnimatePresence mode="popLayout">
          {items.map((g, k) => (
            <motion.button
              layout
              key={g.src}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: (k % 4) * 0.05 }}
              onClick={() => setOpen(k)}
              className={`group relative overflow-hidden rounded-2xl bg-white shadow-lg ${g.wide ? "sm:col-span-2" : ""} ${k % 5 === 1 ? "lg:row-span-2" : ""}`}
            >
              <Image src={g.src} alt={g.alt[lang]} fill sizes="(max-width:640px) 100vw, 25vw"
                className={`transition duration-700 group-hover:scale-110 ${g.src.startsWith("/images/") ? "object-contain" : "object-cover"}`} />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/80 to-transparent p-4 text-start opacity-0 transition group-hover:opacity-100">
                <div className="flex w-full items-center justify-between text-white">
                  <div><p className="text-xs text-corn"><T {...GALLERY_TAGS[g.tag]} /></p><p className="text-sm font-medium"><T {...g.alt} /></p></div>
                  <ZoomIn size={20} />
                </div>
              </div>
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {open !== null && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] grid place-items-center bg-black/90 p-4" onClick={() => setOpen(null)}>
            <motion.div key={open} initial={{ scale: 0.85, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="relative h-[80vh] w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
              <Image src={items[open].src} alt={items[open].alt[lang]} fill sizes="100vw" className="object-contain" />
              <p className="absolute -bottom-8 left-0 right-0 text-center text-white"><T {...items[open].alt} /></p>
            </motion.div>
            <button aria-label="Close" className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20" onClick={() => setOpen(null)}><X /></button>
            <button aria-label="Previous" className="absolute left-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20"
              onClick={(e) => { e.stopPropagation(); setOpen((open - 1 + items.length) % items.length); }}><ChevronLeft /></button>
            <button aria-label="Next" className="absolute right-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20"
              onClick={(e) => { e.stopPropagation(); setOpen((open + 1) % items.length); }}><ChevronRight /></button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
