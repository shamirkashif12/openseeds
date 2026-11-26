import type { ReactNode } from "react";

/**
 * Renders both languages; CSS shows only the active one (see globals.css).
 * Works in server and client components and needs no JS, so the static
 * export has no flash of the wrong language. Spread a data entry: <T {...item.title} />
 */
export default function T({ en, ur }: { en: ReactNode; ur: ReactNode }) {
  return (
    <>
      <span className="i18n-en">{en}</span>
      <span className="i18n-ur" lang="ur">{ur}</span>
    </>
  );
}
