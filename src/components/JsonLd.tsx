// JSON-LD structured data helpers (Organization, SoftwareApplication, FAQ,
// Breadcrumb). Rendered as a script tag per page.

import { APP_NAME, APP_URL, BRAND_NAME, SITE_DESCRIPTION, siteUrl } from "@/lib/site";

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function organizationSchema() {
  const base = siteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: BRAND_NAME,
    url: base,
    logo: `${base}/brand/icon-512.png`,
    description: SITE_DESCRIPTION,
  };
}

export function softwareAppSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: APP_NAME,
    operatingSystem: "Web",
    applicationCategory: "HealthApplication",
    url: APP_URL,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    publisher: { "@type": "Organization", name: BRAND_NAME },
    description:
      "A privacy-first home fitness tracker for steps, exercises, and weight — data stays on your device.",
  };
}

export function faqSchema(faqs: readonly { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbSchema(crumbs: [string, string][]) {
  const base = siteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: base },
      ...crumbs.map(([name, path], i) => ({
        "@type": "ListItem",
        position: i + 2,
        name,
        item: `${base}${path}`,
      })),
    ],
  };
}
