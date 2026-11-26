"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useSearchParams, useRouter } from "next/navigation";
import { CATEGORIES, PRODUCTS } from "@/lib/data";
import ProductCard from "./ProductCard";
import { Sprout } from "lucide-react";

export default function ProductBrowser() {
  const params = useSearchParams();
  const router = useRouter();
  const cat = params.get("cat") ?? "all";
  const list = cat === "all" ? PRODUCTS : PRODUCTS.filter((p) => p.category === cat);
  const current = CATEGORIES.find((c) => c.slug === cat);

  const set = (c: string) => router.replace(c === "all" ? "/products" : `/products?cat=${c}`, { scroll: false });

  return (
    <div id="list">
      <div className="mb-10 flex flex-wrap justify-center gap-3">
        {[{ slug: "all", name: "All Products" }, ...CATEGORIES].map((c) => (
          <button key={c.slug} onClick={() => set(c.slug)}
            className={`relative rounded-full px-5 py-2.5 text-sm font-semibold transition ${cat === c.slug ? "text-white" : "border border-line bg-card text-fg hover:border-leaf"}`}>
            {cat === c.slug && <motion.span layoutId="cat-pill" className="absolute inset-0 rounded-full bg-gradient-to-r from-leaf-600 to-leaf" />}
            <span className="relative">{c.name}</span>
          </button>
        ))}
      </div>

      <motion.div layout className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <AnimatePresence mode="popLayout">
          {list.map((p) => (
            <motion.div key={p.slug} layout initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }} transition={{ duration: 0.4 }}>
              <ProductCard p={p} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {list.length === 0 && current && (
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="card mx-auto max-w-xl rounded-3xl p-10 text-center">
          <Sprout className="mx-auto text-leaf" size={48} />
          <h3 className="mt-4 text-2xl font-bold">{current.name} — Jald Aa Raha Hai!</h3>
          <p className="mt-2 text-muted">{current.desc}</p>
        </motion.div>
      )}
    </div>
  );
}
