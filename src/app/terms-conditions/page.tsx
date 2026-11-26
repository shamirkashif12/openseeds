import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { SITE } from "@/lib/data";

export const metadata: Metadata = { title: "Terms & Conditions" };

export default function Terms() {
  return (
    <LegalPage title="Terms & Conditions" urdu="شرائط و ضوابط" sections={[
      { h: "Website ka istemal", p: `Yeh website ${SITE.legalName} ki milkiyat hai. Website ka istemal kar ke aap in sharait ko qabool karte hain.` },
      { h: "Product maloomat", p: "Website par di gayi product specifications rehnumai ke liye hain. Asal nataij mausam, zameen, pani aur fasal ki dekh bhaal ke mutabiq mukhtalif ho sakte hain." },
      { h: "Qeematein aur dastyabi", p: "Products ki qeematein aur dastyabi ilaqe aur season ke mutabiq tabdeel ho sakti hain. Taaza qeemat ke liye apne qareebi dealer se rabta karein." },
      { h: "Intellectual property", p: "Open Seeds ka naam, logo, packaging designs aur tamam content hamari ijazat ke baghair istemal nahi kiya ja sakta." },
      { h: "Tabdeeli", p: "Company kisi bhi waqt in sharait mein tabdeeli ka haq mehfooz rakhti hai." },
    ]} />
  );
}
