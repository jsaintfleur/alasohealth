// Blog post registry — CMS-ready: the index and category pages read from
// this list, so swapping in a headless CMS later only changes this module.

export interface PostMeta {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO date
  category: (typeof CATEGORIES)[number];
  readMinutes: number;
}

export const CATEGORIES = [
  "Product Updates",
  "Fitness",
  "Health",
  "Engineering",
  "Haitian Heritage",
  "Community",
] as const;

export const POSTS: PostMeta[] = [
  {
    slug: "introducing-alaso",
    title: "Introducing Alaso: home fitness that stays yours",
    description:
      "Why we built a fitness tracker with no account, no ads, and no server — and what Haitian heritage has to do with it.",
    date: "2026-07-23",
    category: "Product Updates",
    readMinutes: 4,
  },
];
