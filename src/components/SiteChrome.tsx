// Shared header and footer for every page of the brand site.

import Link from "next/link";
import Image from "next/image";
import { APP_NAME, APP_URL, BRAND_NAME, COPYRIGHT } from "@/lib/site";
import { HaitiBand, PanAfricanBand } from "./HeritageBands";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-edge bg-bg/90 backdrop-blur">
      <HaitiBand />
      <div className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-5">
        <Link href="/" className="flex items-center gap-2.5" aria-label={`${BRAND_NAME} home`}>
          <Image src="/brand/alaso-mark.svg" alt="" width={30} height={30} />
          <span className="text-lg font-bold tracking-tight">
            {APP_NAME} <span className="font-normal text-muted">Health</span>
          </span>
        </Link>
        <nav aria-label="Primary" className="flex items-center gap-5 text-sm font-medium">
          <Link href="/#features" className="hidden py-2 text-muted hover:text-fg sm:block">
            Features
          </Link>
          <Link href="/#privacy" className="hidden py-2 text-muted hover:text-fg sm:block">
            Privacy
          </Link>
          <Link href="/support" className="hidden py-2 text-muted hover:text-fg sm:block">
            Support
          </Link>
          <a
            href={APP_URL}
            className="rounded-full bg-brand-700 px-4 py-2 font-semibold text-white transition-colors hover:bg-brand-800"
          >
            Open {APP_NAME}
          </a>
        </nav>
      </div>
    </header>
  );
}

const FOOTER_LINKS: [string, string][] = [
  ["The app", APP_URL],
  ["Features", "/features"],
  ["About", "/about"],
  ["Blog", "/blog"],
  ["Roadmap", "/roadmap"],
  ["Changelog", "/changelog"],
  ["Support", "/support"],
  ["Contact", "/contact"],
  ["Press", "/press"],
  ["Careers", "/careers"],
  ["Privacy", "/privacy"],
  ["Terms", "/terms"],
  ["Cookie Policy", "/cookies"],
  ["Accessibility", "/accessibility"],
  ["Security", "/security"],
  ["Data Deletion", "/data-deletion"],
  ["Medical Disclaimer", "/medical-disclaimer"],
];

export function SiteFooter() {
  return (
    <footer className="border-t border-edge">
      <PanAfricanBand />
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2.5">
          <Image src="/brand/alaso-mark.svg" alt="" width={24} height={24} />
          <span className="text-sm text-muted">
            {APP_NAME} — by {BRAND_NAME}
          </span>
        </div>
        <nav aria-label="Footer" className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm text-muted sm:grid-cols-3">
          {FOOTER_LINKS.map(([label, href]) =>
            href.startsWith("http") ? (
              <a key={href} href={href} className="inline-block py-1 hover:text-fg">
                {label}
              </a>
            ) : (
              <Link key={href} href={href} className="inline-block py-1 hover:text-fg">
                {label}
              </Link>
            )
          )}
        </nav>
        <p className="text-xs text-faint">{COPYRIGHT}</p>
      </div>
    </footer>
  );
}
