// Press — media kit downloads and boilerplate.

import type { Metadata } from "next";
import Image from "next/image";
import { Download } from "lucide-react";
import { PageLayout, Section } from "@/components/PageLayout";
import { APP_NAME, APP_URL, BRAND_NAME, CONTACT_CHANNELS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Press",
  description: "Alaso Health press kit — logos, screenshots, brand colors, and company boilerplate.",
  alternates: { canonical: "/press" },
};

const COLORS = [
  ["Haitian blue", "#142d73"],
  ["Accent red", "#c22743"],
  ["Pan-African green", "#1d6f4a"],
  ["Ink", "#171817"],
  ["Light blue ground", "#f5f8ff"],
] as const;

export default function PressPage() {
  return (
    <PageLayout
      title="Press"
      lead={`Media resources for covering ${APP_NAME} and ${BRAND_NAME}.`}
      crumbs={[["Press", "/press"]]}
    >
      <Section heading="Press kit">
        <p>
          Logos (SVG and PNG), the full app icon set, staged product screenshots, brand
          colors, and the brand guidelines PDF — everything in one download.
        </p>
        <a
          href="/press/alaso-press-kit.zip"
          className="inline-flex w-fit items-center gap-2 rounded-full bg-brand-700 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-800"
        >
          <Download size={16} aria-hidden /> Download press kit (.zip)
        </a>
      </Section>

      <Section heading="Boilerplate">
        <p>
          <strong className="text-fg">{APP_NAME}</strong> is a privacy-first fitness tracker
          for building strength at home. It logs steps, equipment-free exercises, and weight
          journeys entirely on the user&apos;s device — no account, no ads, no data sold.
          {" "}{APP_NAME} is built by <strong className="text-fg">{BRAND_NAME}</strong>, a
          wellness software company whose design language draws on Haitian heritage and the
          Pan-African tradition. The app is free and installable from{" "}
          <a href={APP_URL} className="font-semibold text-primary">
            {APP_URL.replace("https://", "")}
          </a>
          .
        </p>
      </Section>

      <Section heading="Brand colors">
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {COLORS.map(([name, hex]) => (
            <li key={hex} className="overflow-hidden rounded-card border border-edge">
              <div className="h-14" style={{ backgroundColor: hex }} />
              <div className="bg-elevated px-3 py-2">
                <p className="text-sm font-semibold">{name}</p>
                <code className="text-xs text-muted">{hex}</code>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <Section heading="Product imagery">
        <div className="grid grid-cols-3 gap-4">
          {["/screenshots/today.png", "/screenshots/progress.png", "/screenshots/progress-dark.png"].map(
            (src) => (
              <div key={src} className="overflow-hidden rounded-2xl border border-edge">
                <Image src={src} alt="Alaso app screenshot" width={1179} height={2556} sizes="13rem" />
              </div>
            )
          )}
        </div>
      </Section>

      <Section heading="Founder">
        <p>
          Founder interviews and bio are available on request through the press channel
          below once mailboxes launch, or via GitHub in the meantime.
        </p>
      </Section>

      <Section heading="Press contact">
        <p>
          <code className="text-sm">{CONTACT_CHANNELS.find((c) => c.label === "Press")?.email}</code>{" "}
          (activates with the domain launch — see{" "}
          <a href="/contact" className="font-semibold text-primary">
            Contact
          </a>{" "}
          for interim channels).
        </p>
      </Section>
    </PageLayout>
  );
}
