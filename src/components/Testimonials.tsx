"use client";
import { AnimatePresence, motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { useEffect, useState } from "react";
import { TESTIMONIALS } from "@/lib/data";

export default function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % TESTIMONIALS.length), 6000);
    return () => clearInterval(t);
  }, []);
  const t = TESTIMONIALS[i];
  return (
    <div className="card relative mx-auto max-w-3xl overflow-hidden rounded-3xl p-8 md:p-12">
      <Quote className="absolute right-6 top-6 text-leaf/20" size={90} />
      <AnimatePresence mode="wait">
        <motion.div key={i} initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -60 }} transition={{ duration: 0.5 }}>
          <div className="mb-4 flex gap-1 text-corn">{Array.from({ length: 5 }).map((_, k) => <Star key={k} size={18} fill="currentColor" />)}</div>
          <p className="text-lg leading-relaxed md:text-2xl">&ldquo;{t.text}&rdquo;</p>
          <div className="mt-6 flex items-center gap-4">
            <span className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-leaf to-globe text-lg font-bold text-white">
              {t.name.split(" ").slice(-1)[0][0]}
            </span>
            <div>
              <p className="font-semibold">{t.name}</p>
              <p className="text-sm text-muted">{t.place} · <span className="text-leaf-600 dark:text-leaf">{t.crop}</span></p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="mt-8 flex gap-2">
        {TESTIMONIALS.map((_, k) => (
          <button key={k} onClick={() => setI(k)} aria-label={`Review ${k + 1}`}
            className={`h-2 rounded-full transition-all ${k === i ? "w-8 bg-leaf" : "w-2 bg-line"}`} />
        ))}
      </div>
    </div>
  );
}
