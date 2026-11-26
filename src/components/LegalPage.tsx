import PageHero from "./PageHero";
import Reveal from "./Reveal";
import { IMG } from "@/lib/data";

export default function LegalPage({ title, urdu, sections }: { title: string; urdu: string; sections: { h: string; p: string }[] }) {
  return (
    <>
      <PageHero title={title} urdu={urdu} crumb={title} image={IMG.soil} />
      <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6">
        <div className="card space-y-8 rounded-3xl p-8 md:p-12">
          <p className="text-sm text-muted">Last updated: November 2026</p>
          {sections.map((s) => (
            <Reveal key={s.h} dir="up">
              <h2 className="text-xl font-bold text-leaf-600 dark:text-leaf">{s.h}</h2>
              <p className="mt-2 leading-relaxed text-muted">{s.p}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
