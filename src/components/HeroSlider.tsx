"use client";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { IMG, URDU } from "@/lib/data";
import T from "./T";

const SLIDES = [
  {
    bg: IMG.cornRows,
    urdu: URDU.slogan1,
    title: { en: "P-3940 Hybrid Corn", ur: "P-3940 ہائبرڈ مکئی" },
    text: {
      en: "Long cobs, heavy grain and a strong stalk — more yield, more profit.",
      ur: "لمبی چھلی، بھاری دانہ اور مضبوط تنا — زیادہ پیداوار، زیادہ منافع۔",
    },
    bag: "/images/corn-p3940.jpg",
    href: "/products/p-3940",
  },
  {
    bg: IMG.fieldSunset,
    urdu: URDU.slogan2,
    title: { en: "New! P-1881", ur: "نیا! P-1881" },
    text: {
      en: "Our new hybrid corn with modern genetics — a next-level crop.",
      ur: "جدید جینیات کے ساتھ ہماری نئی ہائبرڈ مکئی — اگلے درجے کی فصل۔",
    },
    bag: "/images/standee.jpg",
    href: "/products/p-1881",
  },
  {
    bg: IMG.greenRows,
    urdu: URDU.trust,
    title: { en: "Paddy Seed", ur: "دھان کا بیج" },
    text: {
      en: "Clean, graded and certified paddy seed — suited to Punjab and Sindh.",
      ur: "صاف، گریڈ شدہ اور تصدیق شدہ دھان کا بیج — پنجاب اور سندھ کے لیے موزوں۔",
    },
    bag: "/images/paddy-seed.jpg",
    href: "/products/paddy-seed",
  },
  {
    bg: IMG.cropField,
    urdu: URDU.farmers,
    title: { en: "Sesame (Til) Seed", ur: "تل کا بیج" },
    text: {
      en: "Less water, lower cost — better income from sesame.",
      ur: "کم پانی، کم خرچ — تل کی فصل سے بہتر آمدنی۔",
    },
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
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/10 rtl:bg-gradient-to-l" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-bg to-transparent" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-10 px-4 pb-24 pt-32 sm:px-6 lg:grid-cols-2">
        <AnimatePresence mode="wait">
          <motion.div key={i} className="text-white" exit={{ opacity: 0, x: -40, transition: { duration: 0.3 } }}>
            <motion.p
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="urdu text-left text-2xl text-corn rtl:text-right md:text-3xl"
            >
              {s.urdu}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="mt-2 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-7xl"
            >
              <T {...s.title} />
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-5 max-w-xl text-lg text-white/90 md:text-xl"
            >
              <T {...s.text} />
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Link href={s.href} className="btn-primary">
                <T en="Explore More" ur="مزید دیکھیں" /> <ArrowRight size={18} className="rtl:-scale-x-100" />
              </Link>
              <Link href="/contact" className="btn-outline text-white hover:bg-white hover:text-leaf-800">
                <T en="Find a Dealer" ur="ڈیلر تلاش کریں" />
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
              <Image src={s.bag} alt={s.title.en} fill sizes="340px" className="rounded-3xl object-contain drop-shadow-2xl" priority />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Controls */}
      <div className="absolute bottom-16 left-1/2 flex -translate-x-1/2 items-center gap-4">
        <button onClick={prev} aria-label="Previous" className="grid h-10 w-10 place-items-center rounded-full border border-white/40 text-white backdrop-blur transition hover:bg-white/20">
          <ChevronLeft size={18} className="rtl:-scale-x-100" />
        </button>
        <div className="flex gap-2">
          {SLIDES.map((_, k) => (
            <button key={k} onClick={() => setI(k)} aria-label={`Slide ${k + 1}`}
              className={`h-2 rounded-full transition-all ${k === i ? "w-10 bg-corn" : "w-2 bg-white/60"}`} />
          ))}
        </div>
        <button onClick={next} aria-label="Next" className="grid h-10 w-10 place-items-center rounded-full border border-white/40 text-white backdrop-blur transition hover:bg-white/20">
          <ChevronRight size={18} className="rtl:-scale-x-100" />
        </button>
      </div>
    </section>
  );
}
