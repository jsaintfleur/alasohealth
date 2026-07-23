import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteUrl();
  const routes = [
    "",
    "/features",
    "/about",
    "/blog",
    "/blog/introducing-alaso",
    "/roadmap",
    "/changelog",
    "/support",
    "/contact",
    "/press",
    "/careers",
    "/privacy",
    "/terms",
    "/cookies",
    "/accessibility",
    "/security",
    "/data-deletion",
    "/medical-disclaimer",
  ];
  return routes.map((p) => ({
    url: `${base}${p || "/"}`,
    changeFrequency: "monthly",
    priority: p === "" ? 1 : 0.5,
  }));
}
