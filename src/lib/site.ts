// Alaso Health brand-site configuration.
// Both URLs are centralized here: the site's own canonical URL and the link
// to the Alaso app. When alasohealth.com is registered, set
// NEXT_PUBLIC_SITE_URL (and optionally move the app to a subdomain) — no
// other file references a hostname.

export function siteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;
  if (process.env.NEXT_PUBLIC_VERCEL_URL) return `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return "http://localhost:3000";
}

/** The Alaso app (PWA) — the primary call-to-action destination. */
export const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "https://alaso.vercel.app";

export const BRAND_NAME = "Alaso Health";
export const APP_NAME = "Alaso";
export const COPYRIGHT = `© 2026 ${BRAND_NAME}`;
export const TAGLINE = "Build strength at home. Track progress every day.";
export const SITE_DESCRIPTION =
  "Alaso Health builds calm, privacy-first wellness software. Alaso, our home fitness tracker, keeps your steps, workouts, and weight journey on your device.";

export const MISSION_STATEMENT =
  "Alaso empowers people to build healthier lives through consistent movement, mindful habits, and culturally inspired design rooted in resilience, community, and progress.";

/** Support contact shown until the brand domain and mailbox exist. */
export const SUPPORT_NOTE =
  "A dedicated support inbox (support@alasohealth.com) activates with our domain launch. Until then, support is available through the app's built-in privacy and data tools and the channels on our Contact page.";

/** Planned mailboxes — live once alasohealth.com is registered. */
export const CONTACT_CHANNELS = [
  { label: "General inquiries", email: "hello@alasohealth.com" },
  { label: "Support", email: "support@alasohealth.com" },
  { label: "Business & partnerships", email: "partners@alasohealth.com" },
  { label: "Press", email: "press@alasohealth.com" },
  { label: "Security reports", email: "security@alasohealth.com" },
] as const;

/** Current app version, mirrored from the app repo. */
export const APP_VERSION = "1.1.0";
