import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { SITE } from "@/lib/data";

export const metadata: Metadata = { title: "Terms & Conditions" };

export default function Terms() {
  return (
    <LegalPage title={{ en: "Terms & Conditions", ur: "شرائط و ضوابط" }} sections={[
      {
        h: { en: "Use of the website", ur: "ویب سائٹ کا استعمال" },
        p: {
          en: `This website is owned by ${SITE.legalName}. By using the website you accept these terms.`,
          ur: `یہ ویب سائٹ ${SITE.legalNameUrdu} کی ملکیت ہے۔ ویب سائٹ استعمال کر کے آپ ان شرائط کو قبول کرتے ہیں۔`,
        },
      },
      {
        h: { en: "Product information", ur: "مصنوعات کی معلومات" },
        p: {
          en: "Product specifications on this website are for guidance. Actual results may vary with weather, soil, water and crop management.",
          ur: "ویب سائٹ پر دی گئی مصنوعات کی تفصیلات رہنمائی کے لیے ہیں۔ اصل نتائج موسم، زمین، پانی اور فصل کی دیکھ بھال کے مطابق مختلف ہو سکتے ہیں۔",
        },
      },
      {
        h: { en: "Prices and availability", ur: "قیمتیں اور دستیابی" },
        p: {
          en: "Product prices and availability may change by region and season. Contact your nearest dealer for current prices.",
          ur: "مصنوعات کی قیمتیں اور دستیابی علاقے اور موسم کے مطابق تبدیل ہو سکتی ہیں۔ تازہ قیمت کے لیے اپنے قریبی ڈیلر سے رابطہ کریں۔",
        },
      },
      {
        h: { en: "Intellectual property", ur: "دانشورانہ ملکیت" },
        p: {
          en: "The Open Seed International name, logo, packaging designs and all content may not be used without our permission.",
          ur: "اوپن سیڈ انٹرنیشنل کا نام، لوگو، پیکجنگ ڈیزائن اور تمام مواد ہماری اجازت کے بغیر استعمال نہیں کیا جا سکتا۔",
        },
      },
      {
        h: { en: "Changes", ur: "تبدیلی" },
        p: {
          en: "The company reserves the right to change these terms at any time.",
          ur: "کمپنی کسی بھی وقت ان شرائط میں تبدیلی کا حق محفوظ رکھتی ہے۔",
        },
      },
    ]} />
  );
}
