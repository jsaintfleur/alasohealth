// Features — dedicated deep-dive on every capability, with real screenshots.

import type { Metadata } from "next";
import Image from "next/image";
import { PageLayout } from "@/components/PageLayout";
import { APP_NAME, APP_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Everything Alaso does: exercise logging, steps, weight journey, goals, progress charts, offline support, and privacy-first design.",
  alternates: { canonical: "/features" },
};

const FEATURES = [
  {
    title: "Daily steps",
    body: "Set a daily goal and log steps in seconds with quick-add amounts. Alaso shows today's arc, your 7-day average, goal-hit frequency, and your best day. Step entries are honestly labeled as manual until native health integrations arrive — Alaso never fakes a sync.",
    shot: "/screenshots/today.png",
    alt: "Today screen with the step arc at 74% of a 7,000-step goal",
  },
  {
    title: "Exercise tracking",
    body: "Eighteen built-in home exercises across cardio, legs, core, chest, back, arms, and full-body — plus your own custom moves. Rep exercises use a fast stepper with +1/+5/+10 chips; timed holds like planks get a built-in start/pause/resume timer. Optional perceived-effort chips (easy to max) turn every set into data you can trend.",
    shot: "/screenshots/log.png",
    alt: "Quick-log sheet for push-ups with numeric stepper and effort chips",
  },
  {
    title: "Weight journey",
    body: "Your starting weight is permanent — the journey always shows where you began. Log weigh-ins in pounds or kilograms with optional context (fasted, after a meal, after a workout) so trends compare like with like. Unit switching converts display only; history is never rewritten.",
    shot: "/screenshots/progress.png",
    alt: "Weight trend chart with starting weight and target reference lines",
  },
  {
    title: "Goals and consistency",
    body: "Daily step and strength goals, a weekly active-days target, streaks, and a 12-week activity calendar. Encouragement without shame: a missed day is information, not failure.",
    shot: "/screenshots/05-goals.png",
    alt: "Goals settings with daily steps and strength targets",
  },
  {
    title: "Progress charts",
    body: "Weight, exercise, and step trends across 7-day, 30-day, 90-day, and all-time ranges — with weekly aggregation on long ranges so charts stay readable. Every chart has accessible text summaries, tooltips, and honest empty states.",
    shot: "/screenshots/progress-dark.png",
    alt: "Progress screen in dark mode",
  },
] as const;

const PILLARS = [
  {
    title: "Offline support",
    body: "The app shell and your data live on your device, so Alaso opens, logs, and charts with no connection at all.",
  },
  {
    title: "Privacy-first",
    body: "No account, no ads, no trackers. Export everything as JSON or CSV, restore anywhere, or delete permanently — your call, always.",
  },
  {
    title: "Built for home fitness",
    body: "Every exercise is equipment-free. No gym memberships, no barbells, no excuses culture — just movement you can do where you are.",
  },
  {
    title: "Installable PWA",
    body: "Add Alaso to your home screen on iPhone, Android, or desktop and it launches full-screen like a native app.",
  },
  {
    title: "Apple Health — planned",
    body: "The native iOS app will read your step count from Apple Health, with your explicit permission, so steps flow in automatically.",
  },
  {
    title: "Health Connect — planned",
    body: "The native Android app will do the same through Health Connect. Until both ship, manual entry keeps everything working today.",
  },
] as const;

export default function FeaturesPage() {
  return (
    <PageLayout
      title="Features"
      lead={`Everything ${APP_NAME} does — and the principles behind it.`}
      crumbs={[["Features", "/features"]]}
      wide
    >
      <div className="flex flex-col gap-14">
        {FEATURES.map((f, i) => (
          <section
            key={f.title}
            className="grid items-center gap-8 md:grid-cols-2"
          >
            <div className={i % 2 === 1 ? "md:order-2" : ""}>
              <h2 className="text-2xl font-bold tracking-tight">{f.title}</h2>
              <p className="mt-3 leading-relaxed text-muted">{f.body}</p>
            </div>
            <div className={`mx-auto w-48 sm:w-56 ${i % 2 === 1 ? "md:order-1" : ""}`}>
              <div className="rounded-[2rem] border border-edge bg-surface-950 p-2 shadow-xl">
                <Image
                  src={f.shot}
                  alt={f.alt}
                  width={1179}
                  height={2556}
                  sizes="(min-width: 640px) 13rem, 11rem"
                  className="rounded-[1.6rem]"
                />
              </div>
            </div>
          </section>
        ))}

        <section>
          <h2 className="text-2xl font-bold tracking-tight">And throughout</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PILLARS.map((p) => (
              <div key={p.title} className="rounded-card border border-edge bg-bg p-5">
                <h3 className="font-bold">{p.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{p.body}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="rounded-card border border-edge bg-elevated p-8 text-center">
          <p className="text-lg font-bold">Try everything above in the next minute.</p>
          <a
            href={APP_URL}
            className="mt-4 inline-block rounded-full bg-brand-700 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-800"
          >
            Open {APP_NAME} — it&apos;s free
          </a>
        </div>
      </div>
    </PageLayout>
  );
}
