// Cookie policy — short, because the honest answer is short.

import type { Metadata } from "next";
import { PageLayout, Section } from "@/components/PageLayout";
import { APP_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Alaso uses no tracking cookies. Here's exactly what is stored and why.",
  alternates: { canonical: "/cookies" },
};

export default function CookiesPage() {
  return (
    <PageLayout
      title="Cookie policy"
      lead="The short version: no tracking cookies, no advertising cookies, no analytics cookies."
      crumbs={[["Cookie Policy", "/cookies"]]}
    >
      <Section heading="This website">
        <p>
          This site sets no cookies. There is no analytics script, no advertising pixel,
          and no third-party embed that tracks you.
        </p>
      </Section>

      <Section heading="The app">
        <p>
          {APP_NAME} uses your browser&apos;s local storage technologies — IndexedDB for
          your fitness records and local storage for small preferences like your theme.
          These are not cookies, they are never transmitted to a server, and they exist
          solely so the app works offline and remembers your settings. Clearing the
          app&apos;s site data in your browser removes them entirely.
        </p>
      </Section>

      <Section heading="If this changes">
        <p>
          If a future feature ever requires a cookie (for example, optional cloud sync
          sessions), this policy will describe it specifically before it ships, and
          anything non-essential will be opt-in.
        </p>
      </Section>
    </PageLayout>
  );
}
