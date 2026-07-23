// Accessibility statement — goals, current support, and how to report gaps.

import type { Metadata } from "next";
import Link from "next/link";
import { PageLayout, Section } from "@/components/PageLayout";
import { APP_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Accessibility",
  description: "Alaso's accessibility commitment: WCAG 2.2 AA targets, screen reader support, keyboard navigation, and reduced motion.",
  alternates: { canonical: "/accessibility" },
};

export default function AccessibilityPage() {
  return (
    <PageLayout
      title="Accessibility"
      lead={`${APP_NAME} is built to be usable by everyone. This page describes what that means in practice.`}
      crumbs={[["Accessibility", "/accessibility"]]}
    >
      <Section heading="Our standard">
        <p>
          We target <strong className="text-fg">WCAG 2.2 Level AA</strong> across the app
          and this website, and we treat accessibility findings as bugs, not enhancements.
        </p>
      </Section>

      <Section heading="What's implemented">
        <ul className="list-disc space-y-1.5 pl-5">
          <li>
            <strong className="text-fg">Screen readers:</strong> semantic HTML, labeled
            controls, and text alternatives for every chart — trends are summarized in
            words, not just pixels.
          </li>
          <li>
            <strong className="text-fg">Keyboard:</strong> full keyboard navigation with
            visible focus rings; dialogs trap focus and close on Escape.
          </li>
          <li>
            <strong className="text-fg">Contrast:</strong> AA contrast in both light and
            dark themes; nothing is communicated by color alone.
          </li>
          <li>
            <strong className="text-fg">Reduced motion:</strong> every animation, including
            the launch sequence, collapses to static under your system&apos;s
            reduced-motion setting.
          </li>
          <li>
            <strong className="text-fg">Font scaling:</strong> layouts are built in
            relative units and tested at 200% zoom and 320px-wide screens.
          </li>
          <li>
            <strong className="text-fg">Touch:</strong> tap targets are at least 44×44px
            and primary actions sit in the thumb zone.
          </li>
        </ul>
      </Section>

      <Section heading="Known limitations">
        <p>
          Chart tooltips are pointer-driven; the same values are always available in the
          accompanying text summaries. We continue to test with VoiceOver and TalkBack as
          the native apps approach release.
        </p>
      </Section>

      <Section heading="Tell us what's broken">
        <p>
          If anything in {APP_NAME} is hard to use with assistive technology, please reach
          out through the <Link href="/contact" className="font-semibold text-primary">contact channels</Link>{" "}
          — accessibility reports get priority.
        </p>
      </Section>
    </PageLayout>
  );
}
