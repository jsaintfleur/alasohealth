// Roadmap — the public plan, honestly staged.

import type { Metadata } from "next";
import { PageLayout, Section } from "@/components/PageLayout";
import { APP_NAME, BRAND_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Roadmap",
  description: "The public Alaso roadmap: native apps, health integrations, cloud sync, and the Alaso Health ecosystem.",
  alternates: { canonical: "/roadmap" },
};

const STAGES = [
  {
    label: "Shipped",
    tone: "text-green-600",
    items: [
      "Installable PWA with full offline support",
      "18 equipment-free exercises with categories, favorites, and custom moves",
      "Steps, weight journey, goals, streaks, and progress charts",
      "Perceived-effort and weigh-in context capture for future insights",
      "JSON/CSV export, validated restore, and permanent deletion",
    ],
  },
  {
    label: "In development",
    tone: "text-brand-700",
    items: [
      "Native iOS app (Capacitor) with Apple Health step syncing",
      "Native Android app with Health Connect step syncing",
      "App Store and Google Play submissions",
    ],
  },
  {
    label: "Planned",
    tone: "text-accent-500",
    items: [
      "Optional encrypted cloud sync across devices — off by default",
      "Alaso Challenges — friendly consistency goals with people you choose",
      "Alaso Insights — deeper trends built on the effort and context data",
      "Wearables support",
      "Alaso Nutrition and the broader ecosystem",
      "Alaso Premium",
    ],
  },
] as const;

export default function RoadmapPage() {
  return (
    <PageLayout
      title="Roadmap"
      lead={`Where ${APP_NAME} is headed. Dates arrive when they're real — we don't announce what we can't stand behind.`}
      crumbs={[["Roadmap", "/roadmap"]]}
    >
      {STAGES.map((stage) => (
        <Section key={stage.label} heading={stage.label}>
          <ul className="flex flex-col gap-2">
            {stage.items.map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <span className={`mt-2 size-1.5 shrink-0 rounded-full bg-current ${stage.tone}`} aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Section>
      ))}
      <p className="text-sm text-faint">
        Every future feature keeps the {BRAND_NAME} promise: private by default, honest
        about what works today, and never selling your data.
      </p>
    </PageLayout>
  );
}
