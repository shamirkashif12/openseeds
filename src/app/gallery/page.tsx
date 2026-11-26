import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionTitle from "@/components/SectionTitle";
import GalleryGrid from "@/components/GalleryGrid";
import { IMG } from "@/lib/data";

export const metadata: Metadata = { title: "Gallery" };

export default function Gallery() {
  return (
    <>
      <PageHero title={{ en: "Gallery", ur: "گیلری" }} image={IMG.harvest}
        subtitle={{ en: "Fields, farmers and our products — told through pictures.", ur: "کھیت، کسان اور ہماری مصنوعات — تصویروں کی زبانی۔" }} />
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
        <SectionTitle eyebrow={{ en: "Moments", ur: "لمحات" }} title={{ en: "Our Photos", ur: "ہماری تصویریں" }} />
        <GalleryGrid />
      </section>
    </>
  );
}
