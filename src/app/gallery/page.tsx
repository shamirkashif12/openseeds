import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionTitle from "@/components/SectionTitle";
import GalleryGrid from "@/components/GalleryGrid";
import { IMG } from "@/lib/data";

export const metadata: Metadata = { title: "Gallery" };

export default function Gallery() {
  return (
    <>
      <PageHero title="Gallery" urdu="گیلری" crumb="Gallery" image={IMG.harvest} subtitle="Khet, kisaan aur hamare products — tasveeron ki zubani." />
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
        <SectionTitle eyebrow="Moments" title="Hamari Tasveerein" />
        <GalleryGrid />
      </section>
    </>
  );
}
