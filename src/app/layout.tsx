import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollTop from "@/components/ScrollTop";
import "./globals.css";

const FONTS =
  "https://fonts.googleapis.com/css2?family=Noto+Nastaliq+Urdu:wght@400;700&family=Poppins:wght@300;400;500;600;700;800&display=swap";

export const metadata: Metadata = {
  title: { default: "Open Seed International | Growing Together", template: "%s | Open Seed International" },
  description:
    "Open Seed International Agro Crop Sciences — hybrid corn (P-3940, P-1881), paddy and sesame seeds for Pakistan's farmers.",
  icons: { icon: "/images/logo.jpg" },
};

// Applies saved / system theme before paint to avoid a flash.
// Also applies the saved language (lang + dir) so Urdu visitors never see English flash first.
const themeScript = `(function(){try{var d=document.documentElement,t=localStorage.getItem('theme');if(t==='dark'||(!t&&matchMedia('(prefers-color-scheme: dark)').matches))d.classList.add('dark');if(localStorage.getItem('lang')==='ur'){d.lang='ur';d.dir='rtl'}}catch(e){}})()`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="stylesheet" href={FONTS} />
      </head>
      <body className="font-sans antialiased">
        <Header />
        <main className="overflow-x-hidden">{children}</main>
        <Footer />
        <WhatsAppButton />
        <ScrollTop />
      </body>
    </html>
  );
}
