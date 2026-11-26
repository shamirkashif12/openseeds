"use client";
import { useSyncExternalStore } from "react";
import type { L } from "./data";

export type Lang = "en" | "ur";

const listeners = new Set<() => void>();

const read = (): Lang => (document.documentElement.lang === "ur" ? "ur" : "en");

export function setLang(lang: Lang) {
  const html = document.documentElement;
  html.lang = lang;
  html.dir = lang === "ur" ? "rtl" : "ltr";
  try {
    localStorage.setItem("lang", lang);
  } catch {}
  listeners.forEach((f) => f());
}

/** Current language, for attributes (alt, placeholder) that <T> can't cover. */
export function useLang(): Lang {
  return useSyncExternalStore(
    (f) => {
      listeners.add(f);
      return () => listeners.delete(f);
    },
    read,
    () => "en"
  );
}

export const pick = (l: L, lang: Lang) => l[lang];
