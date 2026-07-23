// Alaso Health — brand home. Hero, product story, privacy promise, and an
// honest roadmap. The single call-to-action is opening the Alaso app.

import Image from "next/image";
import {
  Dumbbell,
  Flame,
  Footprints,
  HeartHandshake,
  LineChart,
  Lock,
  Scale,
  Smartphone,
  WifiOff,
} from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { HeritageChips, PanAfricanBand } from "@/components/HeritageBands";
import { JsonLd, organizationSchema, softwareAppSchema } from "@/components/JsonLd";
import { APP_NAME, APP_URL, BRAND_NAME, MISSION_STATEMENT, TAGLINE } from "@/lib/site";

const FEATURES = [
  {
    icon: Dumbbell,
    title: "Log a set in seconds",
    body: "Push-ups, squats, planks, and 15 more home exercises — big controls, quick-add chips, and a built-in timer for holds.",
  },
  {
    icon: Footprints,
    title: "Steps without pretending",
    body: "Daily step goals with honest manual entry. Automatic tracking arrives with the native app — never faked before then.",
  },
  {
    icon: Scale,
    title: "A weight journey that remembers",
    body: "Your starting weight is permanent. Log weigh-ins in pounds or kilograms and see the whole story, never a rewritten one.",
  },
  {
    icon: LineChart,
    title: "Progress you can read",
    body: "Weight, exercise, and step trends from 7 days to all time, with effort tracking that shows workouts getting easier.",
  },
  {
    icon: Flame,
    title: "Streaks without shame",
    body: "Active days, streaks, and a 12-week calendar that reward showing up. No guilt screens. A little progress still counts.",
  },
  {
    icon: WifiOff,
    title: "Works offline",
    body: "Open it on a plane or in a basement gym. Everything loads and logs without a connection.",
  },
] as const;

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <JsonLd data={organizationSchema()} />
      <JsonLd data={softwareAppSchema()} />
      <main className="flex-1">
        {/* Hero */}
        <section className="mx-auto grid w-full max-w-5xl items-center gap-10 px-5 pt-16 pb-20 md:grid-cols-2 md:pt-24">
          <div>
            <p className="mb-3 inline-block rounded-full bg-brand-700/5 px-3 py-1 text-xs font-semibold tracking-wide text-brand-700 uppercase">
              {BRAND_NAME}
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-5xl">
              {TAGLINE}
            </h1>
            <p className="mt-4 max-w-md text-lg leading-relaxed text-muted">
              {APP_NAME} is a calm, beautifully simple fitness tracker for building healthier
              habits at home — no gym, no account, and your data never leaves your device.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href={APP_URL}
                className="rounded-full bg-brand-700 px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-brand-800"
              >
                {`Open ${APP_NAME} — it's free`}
              </a>
              <a href="/features" className="px-2 py-3 text-sm font-semibold text-primary">
                See what it does
              </a>
            </div>
            <p className="mt-4 flex items-center gap-1.5 text-xs text-faint">
              <Lock size={13} aria-hidden />
              Private by default. No account. No ads. No tracking.
            </p>
            <div className="mt-5 flex flex-wrap gap-2" aria-label="App store availability">
              <span className="inline-flex items-center gap-1.5 rounded-lg border border-edge bg-elevated px-3.5 py-2 text-xs text-muted">
                <span className="font-semibold text-fg">App Store</span> coming soon
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-lg border border-edge bg-elevated px-3.5 py-2 text-xs text-muted">
                <span className="font-semibold text-fg">Google Play</span> coming soon
              </span>
            </div>
          </div>
          <div className="relative mx-auto w-64 sm:w-72">
            {/* Phone frame around the real app */}
            <div className="rounded-[2.4rem] border border-edge bg-surface-950 p-2.5 shadow-2xl">
              <Image
                src="/screenshots/today.png"
                alt={`The ${APP_NAME} Today screen: step progress, streak, weight, and quick exercise logging`}
                width={1179}
                height={2556}
                priority
                sizes="(min-width: 640px) 17rem, 15rem"
                className="rounded-[1.9rem]"
              />
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="border-t border-edge bg-elevated">
          <div className="mx-auto w-full max-w-5xl px-5 py-20">
            <h2 className="text-3xl font-bold tracking-tight">
              Everything you need. Nothing watching you.
            </h2>
            <p className="mt-2 max-w-xl text-muted">
              {APP_NAME} focuses on the fundamentals of a home practice — movement, steps,
              and weight — and treats consistency as the win.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {FEATURES.map(({ icon: Icon, title, body }, i) => (
                <div key={title} className="rounded-card border border-edge bg-bg p-5">
                  <Icon
                    size={22}
                    className={
                      ["text-brand-700", "text-green-600", "text-accent-500"][i % 3]
                    }
                    aria-hidden
                  />
                  <h3 className="mt-3 font-bold">{title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Screens */}
        <section className="mx-auto w-full max-w-5xl px-5 py-20">
          <h2 className="text-3xl font-bold tracking-tight">Designed to feel calm</h2>
          <p className="mt-2 max-w-xl text-muted">
            Clean white and light blue, one confident deep blue, and charts you can
            actually read — in light and dark.
          </p>
          <div className="mt-10 grid grid-cols-1 justify-items-center gap-8 sm:grid-cols-3">
            {[
              { src: "/screenshots/log.png", alt: `Logging push-ups in ${APP_NAME} with the quick-entry sheet` },
              { src: "/screenshots/progress.png", alt: `${APP_NAME} weight trend chart with start and target lines` },
              { src: "/screenshots/progress-dark.png", alt: `${APP_NAME} progress screen in dark mode` },
            ].map((shot) => (
              <div key={shot.src} className="w-52 rounded-[2rem] border border-edge bg-surface-950 p-2 shadow-xl">
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  width={1179}
                  height={2556}
                  sizes="12rem"
                  className="rounded-[1.6rem]"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Privacy promise */}
        <section id="privacy" className="bg-brand-700 text-white">
          <PanAfricanBand />
          <div className="mx-auto w-full max-w-5xl px-5 py-20">
            <div className="max-w-2xl">
              <p className="mb-3 flex items-center gap-2 text-sm font-semibold tracking-wide text-brand-200 uppercase">
                <Lock size={15} aria-hidden /> The {BRAND_NAME} promise
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-balance">
                Your health data stays on your device. Full stop.
              </h2>
              <p className="mt-4 leading-relaxed text-brand-100">
                No account. No ads. No analytics that identify you. Nothing sold, ever.
                Export your complete history any time, restore it anywhere, or delete it
                forever with one action. When health integrations arrive, they will read
                step count only — with your explicit permission — and manual entry will
                always remain.
              </p>
              <a
                href="/privacy"
                className="mt-6 inline-block rounded-full border border-brand-300/40 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-800"
              >
                Read the privacy commitment
              </a>
            </div>
          </div>
        </section>

        {/* Mission + roadmap */}
        <section className="mx-auto w-full max-w-5xl px-5 py-20">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="flex items-center gap-2 text-2xl font-bold tracking-tight">
                <HeartHandshake size={22} className="text-accent-500" aria-hidden /> Rooted and rising
              </h2>
              <p className="mt-3 leading-relaxed text-muted">{MISSION_STATEMENT}</p>
              <p className="mt-3 leading-relaxed text-muted">
                Our colors carry that story: the blue, red, and white of the Haitian flag,
                alongside the red, green, and black of the Pan-African tradition —
                resilience, community, and progress in every screen.
              </p>
              <div className="mt-4">
                <HeritageChips />
              </div>
            </div>
            <div>
              <h2 className="flex items-center gap-2 text-2xl font-bold tracking-tight">
                <Smartphone size={22} className="text-brand-700" aria-hidden /> Where {APP_NAME} runs
              </h2>
              <p className="mt-3 leading-relaxed text-muted">
                Today, {APP_NAME} is an installable web app: open it in your browser and add
                it to your home screen on iPhone, Android, or desktop — it works offline
                from day one. Native App Store and Google Play versions with Apple Health
                and Health Connect step syncing are in development.
              </p>
            </div>
          </div>
          <div className="mt-14 rounded-card border border-edge bg-elevated p-8 text-center">
            <h2 className="text-2xl font-bold tracking-tight">Start where you are.</h2>
            <p className="mx-auto mt-2 max-w-md text-muted">
              Every repetition counts. {APP_NAME} is free, private, and ready in your
              browser right now.
            </p>
            <a
              href={APP_URL}
              className="mt-5 inline-block rounded-full bg-brand-700 px-7 py-3.5 font-semibold text-white transition-colors hover:bg-brand-800"
            >
              Open {APP_NAME}
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
