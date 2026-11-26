"use client";
import { motion } from "framer-motion";
import { CheckCircle2, Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { SITE } from "@/lib/data";

const field = "w-full rounded-xl border border-line bg-bg px-4 py-3 outline-none transition focus:border-leaf focus:ring-4 focus:ring-leaf/15";

// No backend: the form composes a WhatsApp message with the filled details.
export default function ContactForm() {
  const [sent, setSent] = useState(false);

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const msg = [
      `*Open Seeds Website Inquiry*`,
      `Naam: ${f.get("name")}`,
      `Phone: ${f.get("phone")}`,
      `Shehar: ${f.get("city")}`,
      `Maqsad: ${f.get("subject")}`,
      `Paigham: ${f.get("message")}`,
    ].join("\n");
    window.open(`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`, "_blank", "noopener");
    setSent(true);
    e.currentTarget.reset();
  };

  return (
    <form onSubmit={submit} className="card rounded-3xl p-6 md:p-10">
      <h3 className="text-2xl font-bold">Paigham Bhejein</h3>
      <p className="mb-6 mt-1 text-sm text-muted">Form bharein — aap ka paigham WhatsApp ke zariye hum tak pohanch jayega.</p>
      <div className="grid gap-4 sm:grid-cols-2">
        <input required name="name" placeholder="Aap ka naam *" className={field} />
        <input required name="phone" type="tel" placeholder="Phone / WhatsApp *" className={field} />
        <input name="city" placeholder="Shehar / Tehsil" className={field} />
        <select name="subject" className={field} defaultValue="Product Inquiry">
          <option>Product Inquiry</option>
          <option>Dealership</option>
          <option>Field Support</option>
          <option>Complaint / Feedback</option>
        </select>
        <textarea required name="message" rows={5} placeholder="Aap ka paigham *" className={`${field} sm:col-span-2`} />
      </div>
      <motion.button whileTap={{ scale: 0.97 }} type="submit" className="btn-primary mt-6 w-full justify-center sm:w-auto">
        <Send size={18} /> Send Message
      </motion.button>
      {sent && (
        <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-4 flex items-center gap-2 text-leaf-600 dark:text-leaf">
          <CheckCircle2 size={18} /> Shukriya! Hamari team jald aap se rabta karegi.
        </motion.p>
      )}
    </form>
  );
}
