// Security — architecture, practices, and responsible disclosure.

import type { Metadata } from "next";
import Link from "next/link";
import { PageLayout, Section } from "@/components/PageLayout";
import { APP_NAME, CONTACT_CHANNELS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Security",
  description: "How Alaso protects your data: local-first architecture, secure headers, and responsible disclosure.",
  alternates: { canonical: "/security" },
};

export default function SecurityPage() {
  const securityEmail = CONTACT_CHANNELS.find((c) => c.label === "Security reports")?.email;

  return (
    <PageLayout
      title="Security"
      lead="The most secure server is the one that never receives your data."
      crumbs={[["Security", "/security"]]}
    >
      <Section heading="Local-first by architecture">
        <p>
          {APP_NAME} stores your health records in your device&apos;s local database. There
          is no backend holding user data, which removes entire classes of risk: nothing to
          breach centrally, nothing to leak, nothing to subpoena. Your data&apos;s security
          posture is your device&apos;s — protected by your passcode, biometrics, and OS
          sandboxing.
        </p>
      </Section>

      <Section heading="Application practices">
        <ul className="list-disc space-y-1.5 pl-5">
          <li>HTTPS everywhere; the app and site are served with strict security headers.</li>
          <li>No third-party analytics, ad SDKs, or tracking scripts.</li>
          <li>All input is validated before it touches storage; backups are schema-validated before restore.</li>
          <li>Dependencies are kept current and the codebase gates on lint, type, unit, and end-to-end checks before every release.</li>
        </ul>
      </Section>

      <Section heading="Future encryption">
        <p>
          When optional cloud sync ships, it will be encrypted and off by default — the
          local-first model remains the baseline, not a fallback.
        </p>
      </Section>

      <Section heading="Responsible disclosure">
        <p>
          Found a vulnerability? Please report it privately to{" "}
          <code className="text-sm">{securityEmail}</code> (activates with our domain
          launch; use the <Link href="/contact" className="font-semibold text-primary">interim channels</Link>{" "}
          until then). We commit to acknowledging reports promptly, fixing verified issues,
          and crediting reporters who want credit. Please avoid testing against other
          people&apos;s data — with local-first storage, your own device is the whole test
          environment.
        </p>
      </Section>
    </PageLayout>
  );
}
