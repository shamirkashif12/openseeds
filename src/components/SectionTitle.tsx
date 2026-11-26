import Reveal from "./Reveal";

export default function SectionTitle({
  eyebrow,
  title,
  urdu,
  text,
  center = true,
}: {
  eyebrow?: string;
  title: string;
  urdu?: string;
  text?: string;
  center?: boolean;
}) {
  return (
    <Reveal dir="up" className={`mb-12 max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-leaf/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-leaf-600 dark:text-leaf">
          <span className="h-1.5 w-1.5 rounded-full bg-leaf" />
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">{title}</h2>
      {urdu && <p className="urdu mt-2 text-xl text-globe dark:text-sky md:text-2xl">{urdu}</p>}
      {text && <p className="mt-4 text-base text-muted md:text-lg">{text}</p>}
    </Reveal>
  );
}
