import Reveal from "./Reveal";
import T from "./T";
import type { L } from "@/lib/data";

export default function SectionTitle({
  eyebrow,
  title,
  urdu,
  text,
  center = true,
}: {
  eyebrow?: L;
  title: L;
  /** Decorative Urdu slogan, shown in both languages. */
  urdu?: string;
  text?: L;
  center?: boolean;
}) {
  return (
    <Reveal dir="up" className={`mb-12 max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-leaf/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-leaf-600 dark:text-leaf">
          <span className="h-1.5 w-1.5 rounded-full bg-leaf" />
          <T {...eyebrow} />
        </span>
      )}
      <h2 className="text-3xl font-bold leading-tight md:text-4xl lg:text-5xl"><T {...title} /></h2>
      {urdu && <p className="urdu mt-2 text-xl text-globe dark:text-sky md:text-2xl">{urdu}</p>}
      {text && <p className="mt-4 text-base text-muted md:text-lg"><T {...text} /></p>}
    </Reveal>
  );
}
