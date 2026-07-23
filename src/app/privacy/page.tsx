// Privacy commitment — mirrors the in-app privacy page, written for the web.

import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { APP_NAME, APP_URL, BRAND_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Alaso's privacy policy: local-first storage, no analytics, no third-party sharing, and full user control.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto w-full max-w-2xl flex-1 px-5 py-14">
        <h1 className="text-3xl font-bold tracking-tight">Privacy policy</h1>
        <p className="mt-2 text-sm text-faint">
          Applies to the {APP_NAME} app by {BRAND_NAME}. A formal policy document is being
          finalized with legal review; the commitments below describe how the app works
          today and will not weaken.
        </p>

        <div className="mt-8 flex flex-col gap-7 text-[15px] leading-relaxed">
          <p className="rounded-card border border-edge bg-elevated p-4 font-medium">
            Your fitness records stay on your device unless you choose to export or sync
            them.
          </p>

          <section>
            <h2 className="mb-1.5 text-lg font-bold">Where your data lives</h2>
            <p className="text-muted">
              Everything you record in {APP_NAME} — weight, exercises, steps, and goals —
              is saved in a private database on your device. It is not uploaded to any
              server. {BRAND_NAME} cannot see it.
            </p>
          </section>

          <section>
            <h2 className="mb-1.5 text-lg font-bold">What {APP_NAME} never does</h2>
            <ul className="list-disc space-y-1 pl-5 text-muted">
              <li>No account or sign-up required.</li>
              <li>No ads and no advertising trackers.</li>
              <li>No selling of your data — to anyone, ever.</li>
              <li>No transmission of health information without your clear permission.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-1.5 text-lg font-bold">Cloud sync — planned, not here yet</h2>
            <p className="text-muted">
              A future version may offer optional sync between devices. It will be off by
              default, clearly labeled, and protected. Until then, nothing leaves your
              device unless you export it yourself.
            </p>
          </section>

          <section>
            <h2 className="mb-1.5 text-lg font-bold">Health permissions</h2>
            <p className="text-muted">
              When native versions add Apple Health or Health Connect support, {APP_NAME}{" "}
              will request read access to step count only, explain why, and keep working
              fully if you decline. Manual entry always remains available.
            </p>
          </section>

          <section>
            <h2 className="mb-1.5 text-lg font-bold">Your controls</h2>
            <p className="text-muted">
              Inside the app&apos;s Settings you can export all of your data (JSON or CSV),
              restore from a backup, or permanently delete everything.{" "}
              <a href={APP_URL} className="font-semibold text-primary">
                Open {APP_NAME}
              </a>{" "}
              to use them.
            </p>
          </section>

          <section>
            <h2 className="mb-1.5 text-lg font-bold">Analytics and third parties</h2>
            <p className="text-muted">
              The app and this website run no analytics scripts, no advertising SDKs, and
              no third-party trackers. The app is delivered over HTTPS by our hosting
              provider (Vercel), which processes standard, short-lived server logs (such
              as IP addresses) to serve and secure the site — as any web host does. No
              health data is ever part of those requests.
            </p>
          </section>

          <section>
            <h2 className="mb-1.5 text-lg font-bold">Your rights</h2>
            <p className="text-muted">
              Because your records never leave your device, you can exercise every data
              right directly and instantly: access and portability through Export
              (JSON/CSV), correction by editing any entry, and erasure through{" "}
              <a href="/data-deletion" className="font-semibold text-primary">
                Delete all data
              </a>
              . No request forms, no waiting periods.
            </p>
          </section>

          <section>
            <h2 className="mb-1.5 text-lg font-bold">Contact</h2>
            <p className="text-muted">
              Privacy questions are welcome through the channels on our{" "}
              <a href="/contact" className="font-semibold text-primary">
                Contact page
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="mb-1.5 text-lg font-bold">Not medical advice</h2>
            <p className="text-muted">
              {APP_NAME} shows the numbers you record. It does not diagnose, treat, or make
              medical recommendations. Talk to a healthcare professional about exercise or
              weight-loss plans that are right for you.
            </p>
          </section>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
