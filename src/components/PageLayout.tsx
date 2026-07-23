// PageLayout — standard subpage frame: chrome, title block, breadcrumb
// structured data, and consistent prose width.

import type { ReactNode } from "react";
import { SiteFooter, SiteHeader } from "./SiteChrome";
import { JsonLd, breadcrumbSchema } from "./JsonLd";

interface PageLayoutProps {
  title: string;
  lead?: string;
  /** Breadcrumb trail entries after Home, e.g. [["Support", "/support"]]. */
  crumbs: [string, string][];
  wide?: boolean;
  children: ReactNode;
}

export function PageLayout({ title, lead, crumbs, wide = false, children }: PageLayoutProps) {
  return (
    <>
      <SiteHeader />
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <main className={`mx-auto w-full ${wide ? "max-w-5xl" : "max-w-2xl"} flex-1 px-5 py-14`}>
        <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
        {lead && <p className="mt-2 text-muted">{lead}</p>}
        <div className="mt-8 flex flex-col gap-7 text-[15px] leading-relaxed">{children}</div>
      </main>
      <SiteFooter />
    </>
  );
}

/** Standard prose section with a bold heading. */
export function Section({ heading, children }: { heading: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="mb-1.5 text-lg font-bold">{heading}</h2>
      <div className="flex flex-col gap-2.5 text-muted">{children}</div>
    </section>
  );
}
