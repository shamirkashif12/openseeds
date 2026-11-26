"use client";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { IMG, URDU } from "@/lib/data";

const SLIDES = [
  {
    bg: IMG.cornRows,
    urdu: URDU.slogan1,
    title: "P-3940 Hybrid Corn",
    text: "Lambi challi, bhari daana aur mazboot tanna — zyada paidawar, zyada munafa.",
    bag: "/images/corn-p3940.jpg",
    href: "/products/p-3940",
  },
  {
    bg: IMG.fieldSunset,
    urdu: URDU.slogan2,
    title: "Naya! P-1881",
    text: "Jadeed genetics ke sath hamari nayi hybrid corn — agle darje ki fasal.",
    bag: "/images/standee.jpg",
    href: "/products/p-1881",
  },
  {
    bg: IMG.greenRows,
    urdu: URDU.trust,
    title: "Paddy Seed",
    text: "Saaf, graded aur certified paddy beej — Punjab aur Sindh ke liye mozoon.",
    bag: "/images/paddy-seed.jpg",
    href: "/products/paddy-seed",
  },
  {
    bg: IMG.cropField,
    urdu: URDU.farmers,
    title: "Sesame (Til) Seed",
    text: "Kam pani, kam kharcha — til ki fasal se behtar aamdani.",
    bag: "/images/sesame-seed.jpg",
    href: "/products/sesame-seed",
  },
];

export default function HeroSlider() {
  const [i, setI] = useState(0);
  const next = useCallback(() => setI((v) => (v + 1) % SLIDES.length), []);
  const prev = () => setI((v) => (v - 1 + SLIDES.length) % SLIDES.length);

  useEffect(() => {
    const t = setInterval(next, 7000);
    return () => clearInterval(t);
  }, [i, next]);

  const s = SLIDES[i];

  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-leaf-800">
      <AnimatePresence mode="sync">
        <motion.div
          key={s.bg}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
        >
          <div className="kenburns absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${s.bg})` }} />
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/10" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-bg to-transparent" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-10 px-4 pb-24 pt-32 sm:px-6 lg:grid-cols-2">
        <AnimatePresence mode="wait">
          <motion.div key={i} className="text-white" exit={{ opacity: 0, x: -40, transition: { duration: 0.3 } }}>
            <motion.p
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="urdu text-2xl text-corn md:text-3xl"
              style={{ textAlign: "left" }}
            >
              {s.urdu}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="mt-2 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-7xl"
            >
              {s.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-5 max-w-xl text-lg text-white/90 md:text-xl"
            >
              {s.text}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Link href={s.href} className="btn-primary">
                Explore More <ArrowRight size={18} />
              </Link>
              <Link href="/contact" className="btn-outline text-white hover:bg-white hover:text-leaf-800">
                Dealer Talaash Karein
              </Link>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        <div className="relative hidden h-[480px] lg:block">
          <AnimatePresence mode="wait">
            <motion.div
              key={s.bag}
              initial={{ opacity: 0, x: 120, rotate: 8 }}
              animate={{ opacity: 1, x: 0, rotate: 0 }}
              exit={{ opacity: 0, x: 120, rotate: -8 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="floaty absolute inset-0 mx-auto w-[340px]"
            >
              <div className="absolute inset-6 rounded-full bg-corn/30 blur-3xl" />
              <Image src={s.bag} alt={s.title} fill sizes="340px" className="rounded-3xl object-contain drop-shadow-2xl" priority />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Controls */}
      <div className="absolute bottom-16 left-1/2 flex -translate-x-1/2 items-center gap-4">
        <button onClick={prev} aria-label="Previous" className="grid h-10 w-10 place-items-center rounded-full border border-white/40 text-white backdrop-blur transition hover:bg-white/20">
          <ChevronLeft size={18} />
        </button>
        <div className="flex gap-2">
          {SLIDES.map((_, k) => (
            <button key={k} onClick={() => setI(k)} aria-label={`Slide ${k + 1}`}
              className={`h-2 rounded-full transition-all ${k === i ? "w-10 bg-corn" : "w-2 bg-white/60"}`} />
          ))}
        </div>
        <button onClick={next} aria-label="Next" className="grid h-10 w-10 place-items-center rounded-full border border-white/40 text-white backdrop-blur transition hover:bg-white/20">
          <ChevronRight size={18} />
        </button>
      </div>
    </section>
  );
}
