// Changelog — real version history of the Alaso app.

import type { Metadata } from "next";
import { PageLayout } from "@/components/PageLayout";
import { APP_NAME, APP_VERSION } from "@/lib/site";

export const metadata: Metadata = {
  title: "Changelog",
  description: "Version history for the Alaso app.",
  alternates: { canonical: "/changelog" },
};

const RELEASES = [
  {
    version: "1.1.0",
    date: "July 2026",
    notes: [
      "Exercise categories across cardio, legs, core, chest, back, arms, and full-body — with three new back exercises (supermans, bird-dogs, reverse snow angels)",
      "Perceived-effort chips on every set and context tags on weigh-ins — structured data for future insights",
      "Weekly summary with week-over-week comparison, honoring your week-start preference",
      "Daily strength-goal progress on Today",
      "Weekly chart aggregation for 90-day and all-time ranges",
      "Heritage palette: white and light-blue grounds with Haitian and Pan-African color trios",
      "Branded launch experience, skeleton loading states, and full-width mobile sheets",
    ],
  },
  {
    version: "1.0.0",
    date: "July 2026",
    notes: [
      "Initial release: onboarding, Today dashboard with step arc, quick exercise logging with built-in timer, weight journey, progress charts, history with undo, goals, JSON/CSV backup and restore, installable PWA with offline support, light and dark themes",
    ],
  },
] as const;

export default function ChangelogPage() {
  return (
    <PageLayout
      title="Changelog"
      lead={`What's changed in ${APP_NAME}. Current version: ${APP_VERSION}.`}
      crumbs={[["Changelog", "/changelog"]]}
    >
      {RELEASES.map((r) => (
        <section key={r.version}>
          <div className="flex items-baseline gap-3">
            <h2 className="text-lg font-bold">v{r.version}</h2>
            <span className="text-sm text-faint">{r.date}</span>
          </div>
          <ul className="mt-2 list-disc space-y-1.5 pl-5 text-muted">
            {r.notes.map((n) => (
              <li key={n}>{n}</li>
            ))}
          </ul>
        </section>
      ))}
    </PageLayout>
  );
}
