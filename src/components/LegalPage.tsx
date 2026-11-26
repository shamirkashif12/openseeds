import PageHero from "./PageHero";
import Reveal from "./Reveal";
import T from "./T";
import { IMG, type L } from "@/lib/data";

export default function LegalPage({ title, sections }: { title: L; sections: { h: L; p: L }[] }) {
  return (
    <>
      <PageHero title={title} image={IMG.soil} />
      <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6">
        <div className="card space-y-8 rounded-3xl p-8 md:p-12">
          <p className="text-sm text-muted"><T en="Last updated: November 2026" ur="آخری تازہ کاری: نومبر 2026" /></p>
          {sections.map((s) => (
            <Reveal key={s.h.en} dir="up">
              <h2 className="text-xl font-bold text-leaf-600 dark:text-leaf"><T {...s.h} /></h2>
              <p className="mt-2 leading-relaxed text-muted"><T {...s.p} /></p>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
