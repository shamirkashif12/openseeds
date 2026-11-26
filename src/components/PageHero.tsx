"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export default function PageHero({
  title,
  urdu,
  subtitle,
  image,
  crumb,
}: {
  title: string;
  urdu?: string;
  subtitle?: string;
  image: string;
  crumb: string;
}) {
  return (
    <section className="relative flex min-h-[420px] items-center overflow-hidden pt-24 md:min-h-[480px]">
      <div
        className="kenburns absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-leaf-800/90 via-leaf-800/70 to-globe/60" />
      <div className="relative mx-auto w-full max-w-7xl px-4 py-16 text-white sm:px-6">
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 flex items-center gap-1 text-sm text-white/80"
        >
          <Link href="/" className="hover:text-corn">Home</Link>
          <ChevronRight size={14} />
          <span className="text-corn">{crumb}</span>
        </motion.nav>
        <motion.h1
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl font-bold md:text-6xl"
        >
          {title}
        </motion.h1>
        {urdu && (
          <motion.p
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="urdu mt-2 text-right text-2xl text-corn md:text-left md:text-3xl"
            style={{ direction: "rtl", textAlign: "inherit" }}
          >
            {urdu}
          </motion.p>
        )}
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-4 max-w-2xl text-lg text-white/90"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
      <svg className="absolute -bottom-px left-0 w-full text-bg" viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden>
        <path fill="currentColor" d="M0,48 C360,96 720,0 1080,32 C1260,48 1380,64 1440,56 L1440,80 L0,80 Z" />
      </svg>
    </section>
  );
}
