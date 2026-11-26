import { SITE } from "@/lib/data";

export default function MapEmbed({ className = "h-[420px]" }: { className?: string }) {
  return (
    <div className={`overflow-hidden rounded-3xl border border-line shadow-xl ${className}`}>
      <iframe
        title="Open Seed International Factory Location"
        src={`https://maps.google.com/maps?q=${SITE.mapLat},${SITE.mapLng}&z=15&output=embed`}
        className="h-full w-full dark:[filter:invert(0.9)_hue-rotate(180deg)]"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  );
}
