import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteUrl();
  return ["", "/privacy", "/terms", "/support"].map((p) => ({
    url: `${base}${p || "/"}`,
    changeFrequency: "monthly",
    priority: p === "" ? 1 : 0.5,
  }));
}
