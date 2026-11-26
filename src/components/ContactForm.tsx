"use client";
import { motion } from "framer-motion";
import { CheckCircle2, Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { SITE } from "@/lib/data";
import { useLang } from "@/lib/lang";
import T from "./T";

const field = "w-full rounded-xl border border-line bg-bg px-4 py-3 outline-none transition focus:border-leaf focus:ring-4 focus:ring-leaf/15";

const TXT = {
  en: {
    name: "Your name *", phone: "Phone / WhatsApp *", city: "City / Tehsil", message: "Your message *",
    labels: ["Name", "Phone", "City", "Subject", "Message"],
  },
  ur: {
    name: "آپ کا نام *", phone: "فون / واٹس ایپ *", city: "شہر / تحصیل", message: "آپ کا پیغام *",
    labels: ["نام", "فون", "شہر", "مقصد", "پیغام"],
  },
};

const SUBJECTS = [
  { en: "Product Inquiry", ur: "مصنوعات کے بارے میں معلومات" },
  { en: "Dealership", ur: "ڈیلرشپ" },
  { en: "Field Support", ur: "فیلڈ سپورٹ" },
  { en: "Complaint / Feedback", ur: "شکایت / رائے" },
];

// No backend: the form composes a WhatsApp message with the filled details.
export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const lang = useLang();
  const t = TXT[lang];

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const subject = SUBJECTS.find((s) => s.en === f.get("subject"));
    const values = [f.get("name"), f.get("phone"), f.get("city"), subject?.[lang], f.get("message")];
    const msg = [`*Open Seed International Website Inquiry*`, ...t.labels.map((l, k) => `${l}: ${values[k] ?? ""}`)].join("\n");
    window.open(`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`, "_blank", "noopener");
    setSent(true);
    e.currentTarget.reset();
  };

  return (
    <form onSubmit={submit} className="card rounded-3xl p-6 md:p-10">
      <h3 className="text-2xl font-bold"><T en="Send a Message" ur="پیغام بھیجیں" /></h3>
      <p className="mb-6 mt-1 text-sm text-muted">
        <T en="Fill in the form — your message will reach us via WhatsApp." ur="فارم بھریں — آپ کا پیغام واٹس ایپ کے ذریعے ہم تک پہنچ جائے گا۔" />
      </p>
      <div className="grid gap-4 sm:grid-cols-2">
        <input required name="name" placeholder={t.name} className={field} />
        <input required name="phone" type="tel" placeholder={t.phone} className={field} />
        <input name="city" placeholder={t.city} className={field} />
        <select name="subject" className={field} defaultValue={SUBJECTS[0].en}>
          {SUBJECTS.map((s) => <option key={s.en} value={s.en}>{s[lang]}</option>)}
        </select>
        <textarea required name="message" rows={5} placeholder={t.message} className={`${field} sm:col-span-2`} />
      </div>
      <motion.button whileTap={{ scale: 0.97 }} type="submit" className="btn-primary mt-6 w-full justify-center sm:w-auto">
        <Send size={18} className="rtl:-scale-x-100" /> <T en="Send Message" ur="پیغام بھیجیں" />
      </motion.button>
      {sent && (
        <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-4 flex items-center gap-2 text-leaf-600 dark:text-leaf">
          <CheckCircle2 size={18} /> <T en="Thank you! Our team will contact you soon." ur="شکریہ! ہماری ٹیم جلد آپ سے رابطہ کرے گی۔" />
        </motion.p>
      )}
    </form>
  );
}
