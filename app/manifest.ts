import type { MetadataRoute } from "next";
import { BRAND } from "@/lib/config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${BRAND.name} — Stěhování, přeprava a vyklizení`,
    short_name: BRAND.name,
    description:
      "Profesionální stěhování, přeprava nákladu a vyklizení prostor po celé ČR i v Evropě.",
    start_url: "/",
    display: "standalone",
    background_color: "#0A0A0B",
    theme_color: "#0A0A0B",
    lang: "cs",
    categories: ["business", "transportation", "utilities"],
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
  };
}
