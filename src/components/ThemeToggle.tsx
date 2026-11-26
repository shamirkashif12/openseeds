"use client";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
  };

  return (
    <button
      onClick={toggle}
      aria-label={dark ? "Light mode" : "Dark mode"}
      className={`relative grid h-10 w-10 place-items-center rounded-full border border-line bg-card text-fg transition hover:scale-110 ${className}`}
    >
      {dark ? <Sun size={18} className="text-corn" /> : <Moon size={18} className="text-globe" />}
    </button>
  );
}
