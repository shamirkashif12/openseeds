"use client";
import { Languages } from "lucide-react";
import { setLang, useLang } from "@/lib/lang";

export default function LangToggle({ light = false }: { light?: boolean }) {
  const lang = useLang();
  const next = lang === "ur" ? "en" : "ur";
  return (
    <button
      onClick={() => setLang(next)}
      aria-label={next === "ur" ? "اردو میں دیکھیں" : "View in English"}
      className={`flex h-10 shrink-0 items-center gap-1.5 rounded-full border px-3 text-sm font-semibold transition hover:scale-105 ${
        light ? "border-white/40 text-white" : "border-line bg-card text-fg"
      }`}
    >
      <Languages size={16} className="hidden shrink-0 text-leaf sm:block" />
      {next === "ur" ? <span className="urdu-font leading-none">اردو</span> : <span>English</span>}
    </button>
  );
}
