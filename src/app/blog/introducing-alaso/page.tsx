// Inaugural post — the product story, told honestly.

import type { Metadata } from "next";
import Link from "next/link";
import { PageLayout } from "@/components/PageLayout";
import { APP_NAME, APP_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Introducing Alaso: home fitness that stays yours",
  description:
    "Why we built a fitness tracker with no account, no ads, and no server — and what Haitian heritage has to do with it.",
  alternates: { canonical: "/blog/introducing-alaso" },
};

export default function IntroducingAlasoPost() {
  return (
    <PageLayout
      title="Introducing Alaso: home fitness that stays yours"
      lead="Product Updates · July 23, 2026 · 4 min read"
      crumbs={[
        ["Blog", "/blog"],
        ["Introducing Alaso", "/blog/introducing-alaso"],
      ]}
    >
      <div className="flex flex-col gap-5 text-muted">
        <p>
          Most fitness apps want two things from you: your attention and your data. They
          gamify your anxiety, sell your patterns, and lock your own history behind an
          account. We wanted the opposite — a tracker that treats working out at home as a
          quiet, sustainable practice, and treats your health data as yours.
        </p>
        <p>
          So {APP_NAME} works like this: everything you log — push-ups, planks, steps,
          weigh-ins — is stored in a database on your device. There is no server. There is
          no account. If you want your data somewhere else, you export it yourself; if you
          want it gone, you delete it and it is actually gone, because we never had it.
        </p>
        <h2 className="text-xl font-bold text-fg">Honesty as a feature</h2>
        <p>
          One early decision shaped everything: a web app cannot read your phone&apos;s step
          counter, so {APP_NAME} doesn&apos;t pretend it can. Steps are entered manually
          and labeled that way, until our native apps connect Apple Health and Health
          Connect for real. It turns out honesty simplifies design — when nothing is faked,
          nothing needs explaining away.
        </p>
        <h2 className="text-xl font-bold text-fg">The colors mean something</h2>
        <p>
          The palette carries two traditions: the blue, red, and white of the Haitian flag,
          and the red, green, and black of the Pan-African tradition. The mark — two rising
          paths meeting over a morning sun — is about resilience and progress: start where
          you are, every repetition counts. It is heritage as design language, built to
          welcome everyone.
        </p>
        <h2 className="text-xl font-bold text-fg">What&apos;s next</h2>
        <p>
          Native iOS and Android apps with automatic step syncing are in development, and
          our <Link href="/roadmap" className="font-semibold text-primary">public roadmap</Link>{" "}
          shows the path from there. Until then, {APP_NAME} is free, installable, and
          working today —{" "}
          <a href={APP_URL} className="font-semibold text-primary">
            open it in your browser
          </a>{" "}
          and add it to your home screen.
        </p>
      </div>
    </PageLayout>
  );
}
