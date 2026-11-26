import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { SITE } from "@/lib/data";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function Privacy() {
  return (
    <LegalPage title="Privacy Policy" urdu="رازداری کی پالیسی" sections={[
      { h: "Maloomat jo hum jama karte hain", p: "Jab aap contact form bharte hain ya WhatsApp par rabta karte hain to hum aap ka naam, phone number, shehar aur paigham hasil karte hain." },
      { h: "Maloomat ka istemal", p: "Yeh maloomat sirf aap ke sawal ka jawab dene, product ki maloomat dene aur dealership ke silsile mein rabta karne ke liye istemal hoti hai." },
      { h: "Maloomat ka tahaffuz", p: "Hum aap ki zaati maloomat kisi teesre fareeq ko farokht ya share nahi karte, siwaye qanooni taqazon ke." },
      { h: "Cookies", p: "Website sirf aap ki theme (light/dark) ki pasand browser mein mehfooz karti hai. Koi tracking cookies istemal nahi ki jatin." },
      { h: "Rabta", p: `Privacy se mutaliq kisi bhi sawal ke liye ${SITE.email} par email karein.` },
    ]} />
  );
}
