"use client";
import { motion } from "framer-motion";
import { SITE } from "@/lib/data";

export function WhatsAppIcon({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="currentColor" aria-hidden>
      <path d="M16.004 3C8.82 3 3 8.82 3 16.004c0 2.29.6 4.53 1.74 6.5L3 29l6.67-1.75a12.95 12.95 0 0 0 6.33 1.62h.004C23.18 28.87 29 23.05 29 15.87 29 8.82 23.18 3 16.004 3Zm0 23.68h-.004a10.7 10.7 0 0 1-5.46-1.5l-.39-.23-3.96 1.04 1.06-3.86-.26-.4a10.67 10.67 0 0 1-1.64-5.73c0-5.9 4.8-10.7 10.7-10.7 5.86 0 10.66 4.8 10.66 10.57 0 5.9-4.8 10.81-10.7 10.81Zm5.87-8.01c-.32-.16-1.9-.94-2.2-1.04-.29-.11-.5-.16-.72.16-.21.32-.83 1.04-1.01 1.25-.19.21-.37.24-.69.08-.32-.16-1.36-.5-2.59-1.6-.96-.85-1.6-1.9-1.79-2.22-.19-.32-.02-.5.14-.66.14-.14.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.72-1.73-.98-2.37-.26-.62-.52-.54-.72-.55h-.61c-.21 0-.56.08-.85.4-.29.32-1.12 1.09-1.12 2.66s1.15 3.09 1.31 3.3c.16.21 2.26 3.45 5.47 4.84.76.33 1.36.53 1.83.68.77.24 1.47.21 2.02.13.62-.09 1.9-.78 2.17-1.53.27-.75.27-1.39.19-1.53-.08-.13-.29-.21-.61-.37Z" />
    </svg>
  );
}

export default function WhatsAppButton() {
  const href = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
    "Assalam o Alaikum! Mujhe Open Seeds ke products ke baare mein maloomat chahiye."
  )}`;
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp par rabta karein"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      className="group fixed bottom-20 right-5 z-50 flex items-center gap-2"
    >
      <span className="pointer-events-none hidden rounded-full bg-card px-4 py-2 text-sm font-semibold text-fg opacity-0 shadow-lg transition group-hover:opacity-100 sm:block">
        WhatsApp par baat karein
      </span>
      <span className="pulse-ring relative z-0 grid h-14 w-14 place-items-center rounded-full bg-[#25d366] text-white shadow-xl">
        <WhatsAppIcon />
      </span>
    </motion.a>
  );
}
