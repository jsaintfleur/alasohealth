// Contact — every channel, honestly labeled while the domain mailboxes are
// being provisioned.

import type { Metadata } from "next";
import Link from "next/link";
import { PageLayout, Section } from "@/components/PageLayout";
import { APP_NAME, BRAND_NAME, CONTACT_CHANNELS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "How to reach Alaso Health — support, press, partnerships, and security.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <PageLayout
      title="Contact"
      lead={`How to reach ${BRAND_NAME}.`}
      crumbs={[["Contact", "/contact"]]}
    >
      <Section heading="Channels">
        <p>
          Our email addresses go live together with the alasohealth.com domain launch.
          They are listed now so store listings, documentation, and this site stay
          consistent from day one:
        </p>
        <ul className="mt-1 flex flex-col divide-y divide-edge rounded-card border border-edge bg-elevated">
          {CONTACT_CHANNELS.map((c) => (
            <li key={c.email} className="flex items-center justify-between gap-3 px-4 py-3">
              <span className="font-medium text-fg">{c.label}</span>
              <code className="text-sm text-muted">{c.email}</code>
            </li>
          ))}
        </ul>
        <p className="text-sm">
          Until the mailboxes activate, the fastest channels are below — both are monitored.
        </p>
      </Section>

      <Section heading="Reach us today">
        <ul className="flex flex-col gap-2.5">
          <li>
            <a
              href="https://github.com/jsaintfleur/alaso/issues"
              className="font-semibold text-primary"
            >
              GitHub issues
            </a>{" "}
            — bug reports and feature requests for the {APP_NAME} app. We read every one.
          </li>
          <li>
            <strong className="text-fg">In-app tools</strong> — data export, restore, and
            deletion never require contacting anyone; they are built into{" "}
            {APP_NAME}&apos;s Settings.
          </li>
        </ul>
      </Section>

      <Section heading="Support">
        <p>
          Start with the <Link href="/support" className="font-semibold text-primary">Support page</Link>{" "}
          — it answers the most common questions about installing, backing up, and step
          tracking. We aim to respond to reports within two business days once mailboxes
          are live.
        </p>
      </Section>
    </PageLayout>
  );
}
