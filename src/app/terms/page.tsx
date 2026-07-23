// Terms of use — interim summary pending formal legal review.

import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { APP_NAME, BRAND_NAME } from "@/lib/site";

export const metadata: Metadata = { title: "Terms" };

export default function TermsPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto w-full max-w-2xl flex-1 px-5 py-14">
        <h1 className="text-3xl font-bold tracking-tight">Terms of use</h1>
        <p className="mt-2 text-sm text-faint">
          Interim terms for the {APP_NAME} app by {BRAND_NAME}. Complete terms are being
          finalized with legal review and will be published here.
        </p>

        <div className="mt-8 flex flex-col gap-7 text-[15px] leading-relaxed">
          <section>
            <h2 className="mb-1.5 text-lg font-bold">The service</h2>
            <p className="text-muted">
              {APP_NAME} is a personal fitness tracking application. It records the
              information you enter — exercises, steps, weight, and goals — and displays
              your trends. Your data is stored on your device.
            </p>
          </section>

          <section>
            <h2 className="mb-1.5 text-lg font-bold">Not medical advice</h2>
            <p className="text-muted">
              {APP_NAME} does not provide medical advice, diagnosis, or treatment.
              Information in the app reflects only what you record. Consult a qualified
              healthcare professional before beginning any exercise or weight-loss
              program.
            </p>
          </section>

          <section>
            <h2 className="mb-1.5 text-lg font-bold">Your data, your responsibility</h2>
            <p className="text-muted">
              Your records remain on your device and under your control. Export backups
              from the app&apos;s Settings if you wish to preserve data across devices or
              browser resets.
            </p>
          </section>

          <section>
            <h2 className="mb-1.5 text-lg font-bold">Provided as-is</h2>
            <p className="text-muted">
              The app is provided as-is while formal terms are completed. We build
              carefully and test thoroughly, but you use the app at your own discretion.
            </p>
          </section>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
