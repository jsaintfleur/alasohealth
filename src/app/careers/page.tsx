// Careers — intentionally brief while the team is small.

import type { Metadata } from "next";
import Link from "next/link";
import { PageLayout, Section } from "@/components/PageLayout";
import { BRAND_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Careers",
  description: "Careers at Alaso Health.",
  alternates: { canonical: "/careers" },
};

export default function CareersPage() {
  return (
    <PageLayout
      title="Careers"
      lead="We're growing."
      crumbs={[["Careers", "/careers"]]}
    >
      <Section heading="No open roles yet">
        <p>
          {BRAND_NAME} is a small, focused team building calm, privacy-first wellness
          software. There are no open positions right now — when that changes, roles will
          be listed on this page.
        </p>
        <p>
          If our approach resonates — local-first health data, honest software, design
          rooted in Haitian and Pan-African heritage — introduce yourself through the{" "}
          <Link href="/contact" className="font-semibold text-primary">
            contact channels
          </Link>
          . We keep thoughtful notes.
        </p>
      </Section>
    </PageLayout>
  );
}
