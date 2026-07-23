// About Alaso Health — mission, vision, values, design philosophy, roadmap.

import type { Metadata } from "next";
import Link from "next/link";
import { PageLayout, Section } from "@/components/PageLayout";
import { HeritageChips } from "@/components/HeritageBands";
import { APP_NAME, BRAND_NAME, MISSION_STATEMENT } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Alaso Health builds calm, privacy-first wellness software rooted in Haitian heritage and Pan-African tradition.",
  alternates: { canonical: "/about" },
};

const VALUES = [
  ["Consistency over intensity", "Habits beat heroics. The product rewards showing up, not punishing absence."],
  ["Privacy is the default", "Health data belongs to the person it describes. Local-first isn't a feature — it's the architecture."],
  ["Honesty in software", "No fake syncs, no dark patterns, no inflated claims. If the browser can't read steps, we say so."],
  ["Culture as strength", "Design rooted in Haitian resilience and Pan-African tradition — made to welcome everyone."],
  ["Accessible by design", "WCAG 2.2 AA targets, reduced-motion support, and screen-reader-friendly charts from day one."],
] as const;

export default function AboutPage() {
  return (
    <PageLayout
      title={`About ${BRAND_NAME}`}
      lead="A small, focused wellness software company. Alaso is our first product."
      crumbs={[["About", "/about"]]}
    >
      <Section heading="Mission">
        <p>{MISSION_STATEMENT}</p>
      </Section>

      <Section heading="Vision">
        <p>
          A world where the tools people trust with their health respect them back — software
          that is calm instead of addictive, private instead of extractive, and culturally
          rooted instead of generic. {BRAND_NAME} wants to be the company people point to
          when they ask what respectful health technology looks like.
        </p>
      </Section>

      <Section heading="Values">
        <ul className="flex flex-col gap-3">
          {VALUES.map(([title, body]) => (
            <li key={title}>
              <strong className="text-fg">{title}.</strong> {body}
            </li>
          ))}
        </ul>
      </Section>

      <Section heading="Design philosophy">
        <p>
          <strong className="text-fg">Color.</strong> Two heritage trios anchor the palette —
          the blue, red, and white of the Haitian flag and the red, green, and black of the
          Pan-African tradition — on clean white and light-blue grounds. Blue leads; red
          punctuates; green and ink carry the heritage accents.
        </p>
        <div className="py-1">
          <HeritageChips />
        </div>
        <p>
          <strong className="text-fg">Typography and motion.</strong> Large confident numerals,
          quiet labels, and 150–250ms transitions that respect reduced-motion settings.
          Nothing bounces, nothing nags.
        </p>
        <p>
          <strong className="text-fg">Privacy.</strong> The design system treats honesty as a
          visual element: manual data is labeled manual, and unavailable features say so
          instead of pretending.
        </p>
      </Section>

      <Section heading="Roadmap">
        <p>
          Native iOS and Android apps with Apple Health and Health Connect step syncing,
          optional encrypted cloud sync, and the broader {BRAND_NAME} ecosystem — see the
          full <Link href="/roadmap" className="font-semibold text-primary">public roadmap</Link>.
        </p>
      </Section>

      <Section heading="The name">
        <p>
          &ldquo;Alaso&rdquo; echoes the Haitian Creole spirit of pressing forward — the mark
          shows two rising paths meeting like mountain ridges over a small morning sun.
          Start where you are. Every repetition counts.
        </p>
      </Section>
    </PageLayout>
  );
}
