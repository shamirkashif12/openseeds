"use client";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import { useLang } from "@/lib/lang";

export default function ScrollTop() {
  const [show, setShow] = useState(false);
  const lang = useLang();
  useEffect(() => {
    const on = () => setShow(window.scrollY > 600);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label={lang === "ur" ? "اوپر جائیں" : "Back to top"}
          className="fixed bottom-40 right-6 z-40 grid h-11 w-11 place-items-center rounded-full bg-globe text-white shadow-lg transition hover:bg-leaf-600"
        >
          <ArrowUp size={20} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
