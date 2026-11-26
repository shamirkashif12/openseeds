import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollTop from "@/components/ScrollTop";
import "./globals.css";

const FONTS =
  "https://fonts.googleapis.com/css2?family=Noto+Nastaliq+Urdu:wght@400;700&family=Poppins:wght@300;400;500;600;700;800&display=swap";

export const metadata: Metadata = {
  title: { default: "Open Seeds | Growing Together", template: "%s | Open Seeds" },
  description:
    "Open Seed International Agro Crop Sciences — Pakistan ke kisaanon ke liye hybrid corn (P-3940, P-1881), paddy aur sesame seeds.",
  icons: { icon: "/images/logo.jpg" },
};

// Applies saved / system theme before paint to avoid a flash.
const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&matchMedia('(prefers-color-scheme: dark)').matches))document.documentElement.classList.add('dark')}catch(e){}})()`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
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
