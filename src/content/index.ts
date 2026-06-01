import type { Chapter } from "./types";
import westonHigh from "./chapters/weston-high";

// Add one import above and one entry below per chapter. The locator (/chapters)
// and the dynamic /chapters/[slug] page (via generateStaticParams) both read
// this array. (chapters/example-school.ts stays as a copy-me template and is
// intentionally not listed here.)
export const chapters: Chapter[] = [
  westonHigh,
];

export const getChapter = (slug: string): Chapter | undefined =>
  chapters.find((c) => c.slug === slug);