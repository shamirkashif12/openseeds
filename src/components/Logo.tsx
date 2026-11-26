import Image from "next/image";
import Link from "next/link";

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="flex items-center min-w-0 gap-2 sm:gap-3" aria-label="Open Seeds Home">
      <span className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full bg-white ring-2 ring-leaf/40 md:h-14 md:w-14">
        <Image src="/images/logo.jpg" alt="Open Seeds logo" fill sizes="56px" className="scale-[1.15] object-contain" priority />
      </span>
      <span className="whitespace-nowrap leading-tight">
        <span className={`block text-base font-extrabold sm:text-lg tracking-wide md:text-xl ${light ? "text-white" : "text-fg"}`}>
          OPEN <span className="text-ribbon">SEEDS</span>
        </span>
        <span className={`block text-[9px] font-semibold uppercase tracking-[0.15em] sm:text-[10px] sm:tracking-[0.2em] ${light ? "text-corn" : "text-leaf-600 dark:text-leaf"}`}>
          Growing Together
        </span>
      </span>
    </Link>
  );
}
