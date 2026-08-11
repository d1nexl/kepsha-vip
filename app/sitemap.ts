import type { MetadataRoute } from "next";
import { BRAND } from "@/lib/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    {
      url: BRAND.url,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
