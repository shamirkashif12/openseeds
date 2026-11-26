import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { SITE } from "@/lib/data";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function Privacy() {
  return (
    <LegalPage title={{ en: "Privacy Policy", ur: "رازداری کی پالیسی" }} sections={[
      {
        h: { en: "Information we collect", ur: "معلومات جو ہم جمع کرتے ہیں" },
        p: {
          en: "When you fill in the contact form or reach us on WhatsApp, we receive your name, phone number, city and message.",
          ur: "جب آپ رابطہ فارم بھرتے ہیں یا واٹس ایپ پر رابطہ کرتے ہیں تو ہم آپ کا نام، فون نمبر، شہر اور پیغام حاصل کرتے ہیں۔",
        },
      },
      {
        h: { en: "How we use it", ur: "معلومات کا استعمال" },
        p: {
          en: "This information is used only to answer your questions, share product information and contact you about dealerships.",
          ur: "یہ معلومات صرف آپ کے سوال کا جواب دینے، مصنوعات کی معلومات دینے اور ڈیلرشپ کے سلسلے میں رابطہ کرنے کے لیے استعمال ہوتی ہیں۔",
        },
      },
      {
        h: { en: "Protecting your information", ur: "معلومات کا تحفظ" },
        p: {
          en: "We do not sell or share your personal information with any third party, except where required by law.",
          ur: "ہم آپ کی ذاتی معلومات کسی تیسرے فریق کو فروخت یا شیئر نہیں کرتے، سوائے قانونی تقاضوں کے۔",
        },
      },
      {
        h: { en: "Cookies", ur: "کوکیز" },
        p: {
          en: "The website only stores your theme (light/dark) and language preference in your browser. No tracking cookies are used.",
          ur: "ویب سائٹ صرف آپ کی تھیم (لائٹ/ڈارک) اور زبان کی پسند آپ کے براؤزر میں محفوظ کرتی ہے۔ کوئی ٹریکنگ کوکیز استعمال نہیں کی جاتیں۔",
        },
      },
      {
        h: { en: "Contact", ur: "رابطہ" },
        p: {
          en: `For any privacy-related question, email us at ${SITE.email}.`,
          ur: `رازداری سے متعلق کسی بھی سوال کے لیے ${SITE.email} پر ای میل کریں۔`,
        },
      },
    ]} />
  );
}
