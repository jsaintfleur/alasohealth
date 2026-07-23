// Blog index — reads from the post registry (CMS-ready seam).

import type { Metadata } from "next";
import Link from "next/link";
import { PageLayout } from "@/components/PageLayout";
import { CATEGORIES, POSTS } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog",
  description: "Notes from Alaso Health on fitness, health, engineering, and heritage.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndexPage() {
  return (
    <PageLayout
      title="Blog"
      lead="Notes on building calm, privacy-first fitness software."
      crumbs={[["Blog", "/blog"]]}
    >
      <div className="flex flex-wrap gap-1.5" aria-label="Categories">
        {CATEGORIES.map((c) => (
          <span
            key={c}
            className="rounded-full border border-edge bg-elevated px-3 py-1 text-xs font-semibold text-muted"
          >
            {c}
          </span>
        ))}
      </div>

      <ul className="flex flex-col gap-4">
        {POSTS.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="block rounded-card border border-edge bg-elevated p-5 transition-colors hover:border-brand-300"
            >
              <p className="text-xs font-semibold tracking-wide text-brand-700 uppercase">
                {post.category}
              </p>
              <h2 className="mt-1.5 text-lg font-bold tracking-tight">{post.title}</h2>
              <p className="mt-1 text-sm text-muted">{post.description}</p>
              <p className="mt-2 text-xs text-faint">
                {new Date(`${post.date}T12:00:00`).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}{" "}
                · {post.readMinutes} min read
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </PageLayout>
  );
}
