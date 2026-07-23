// Support — self-serve answers plus an honest note about contact channels.

import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { APP_NAME, APP_URL, SUPPORT_NOTE } from "@/lib/site";

export const metadata: Metadata = { title: "Support" };

const FAQS = [
  {
    q: `How do I install ${APP_NAME} on my phone?`,
    a: `Open the app in your browser, then: on iPhone (Safari) tap Share → "Add to Home Screen"; on Android (Chrome) use the install prompt or menu → "Install app". It launches full-screen and works offline.`,
  },
  {
    q: "Is my data backed up anywhere?",
    a: `No — your data lives only on your device. Use Settings → "Your data" → "Export backup (JSON)" to save a backup file, and "Restore from backup" to load it on another device.`,
  },
  {
    q: "Why can't the app read my steps automatically?",
    a: "Web browsers cannot access a phone's step counter — any website claiming otherwise is pretending. Automatic step syncing arrives with the native app via Apple Health and Health Connect. Manual entry is always available.",
  },
  {
    q: "How do I switch between pounds and kilograms?",
    a: "Settings → Weight unit. Past entries are converted for display only — your history is never rewritten.",
  },
  {
    q: "How do I delete everything?",
    a: `Settings → "Your data" → "Delete all data". You'll be asked to type DELETE to confirm. This is permanent.`,
  },
  {
    q: "I cleared my browser data and my logs are gone.",
    a: "Clearing site data removes the app's local database — that's part of the privacy design. Restore from a JSON backup if you exported one; otherwise the data cannot be recovered (not even by us, because we never had it).",
  },
] as const;

export default function SupportPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto w-full max-w-2xl flex-1 px-5 py-14">
        <h1 className="text-3xl font-bold tracking-tight">Support</h1>
        <p className="mt-2 text-muted">
          Answers to the most common questions about {APP_NAME}.
        </p>

        <div className="mt-8 flex flex-col gap-3">
          {FAQS.map((faq) => (
            <details
              key={faq.q}
              className="group rounded-card border border-edge bg-elevated px-5 py-1"
            >
              <summary className="cursor-pointer list-none py-3.5 font-semibold marker:hidden">
                {faq.q}
              </summary>
              <p className="pb-4 text-[15px] leading-relaxed text-muted">{faq.a}</p>
            </details>
          ))}
        </div>

        <p className="mt-8 rounded-card border border-edge bg-elevated p-4 text-sm text-muted">
          {SUPPORT_NOTE}
        </p>

        <a
          href={APP_URL}
          className="mt-6 inline-block rounded-full bg-brand-700 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-800"
        >
          Open {APP_NAME}
        </a>
      </main>
      <SiteFooter />
    </>
  );
}
