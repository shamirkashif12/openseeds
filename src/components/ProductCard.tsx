import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Product } from "@/lib/data";

export default function ProductCard({ p }: { p: Product }) {
  const isBag = p.image.startsWith("/images/");
  return (
    <Link
      href={`/products/${p.slug}`}
      className="card group relative flex h-full flex-col overflow-hidden rounded-3xl transition duration-500 hover:-translate-y-2 hover:border-leaf"
    >
      {p.isNew && (
        <span className="absolute left-4 top-4 z-10 rounded-full bg-ribbon px-3 py-1 text-xs font-bold text-white shadow">
          NEW · <span className="urdu">نیا</span>
        </span>
      )}
      <div className={`relative h-72 overflow-hidden ${isBag ? "bg-gradient-to-br from-leaf/10 via-bg-alt to-sky/10" : ""}`}>
        <Image
          src={p.image}
          alt={`${p.name} ${p.crop}`}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className={`transition duration-700 group-hover:scale-110 ${isBag ? "object-contain p-6" : "object-cover"}`}
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <span className="text-xs font-semibold uppercase tracking-wider text-globe dark:text-sky">{p.crop}</span>
        <h3 className="mt-1 text-2xl font-bold">{p.name}</h3>
        <p className="mt-2 flex-1 text-sm text-muted">{p.short}</p>
        <span className="mt-4 inline-flex items-center gap-2 font-semibold text-leaf-600 dark:text-leaf">
          Tafseel dekhein <ArrowRight size={16} className="transition group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
