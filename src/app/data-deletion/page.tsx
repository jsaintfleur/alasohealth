// Data deletion policy — required by store listings; genuinely simple here.

import type { Metadata } from "next";
import { PageLayout, Section } from "@/components/PageLayout";
import { APP_NAME, APP_URL, BRAND_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Data Deletion",
  description: "How to permanently delete all data from Alaso — instantly, on your device, no request required.",
  alternates: { canonical: "/data-deletion" },
};

export default function DataDeletionPage() {
  return (
    <PageLayout
      title="Data deletion"
      lead="You never need to ask us to delete your data, because we never have it."
      crumbs={[["Data Deletion", "/data-deletion"]]}
    >
      <Section heading="Delete everything, instantly">
        <p>
          All {APP_NAME} data lives on your device. To erase it permanently, open{" "}
          <a href={APP_URL} className="font-semibold text-primary">
            the app
          </a>{" "}
          and go to <strong className="text-fg">Settings → Your data → Delete all data</strong>,
          then type DELETE to confirm. This removes your profile, weight history, exercise
          logs, steps, and goals immediately and irreversibly.
        </p>
      </Section>

      <Section heading="Alternative">
        <p>
          Clearing this site&apos;s data in your browser settings (or uninstalling the
          installed app) removes everything {APP_NAME} has stored on that device.
        </p>
      </Section>

      <Section heading="What we delete on our side">
        <p>
          Nothing — because nothing exists. {BRAND_NAME} operates no server that stores
          user accounts or health records, so there is no server-side copy to request
          deletion of. If optional cloud sync ships in the future, this page will document
          its deletion process before launch.
        </p>
      </Section>

      <Section heading="Backups you exported">
        <p>
          Backup files you exported are ordinary files under your control — delete them
          from wherever you saved them to complete a full erasure.
        </p>
      </Section>
    </PageLayout>
  );
}
