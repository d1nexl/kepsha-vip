import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { BRAND, CONTACT, PHONE_E164 } from "@/lib/config";
import { I18nProvider } from "@/lib/i18n-context";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext", "cyrillic"],
  variable: "--font-sans",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin", "latin-ext"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(BRAND.url),
  title: "Kepsha.VIP — Stěhování, přeprava nákladu a vyklizení",
  description:
    "Profesionální stěhování, přeprava nákladu a vyklizení prostor po celé ČR i v Evropě. Rychlá domluva, férové jednání, bezpečná přeprava.",
  keywords: [
    "stěhování",
    "přeprava nákladu",
    "vyklizení bytů",
    "vyklizení sklepů",
    "odvoz odpadu",
    "odvoz pozůstalosti",
    "stěhování Praha",
    "moving Czech Republic",
    "Kepsha.VIP",
  ],
  authors: [{ name: BRAND.name }],
  openGraph: {
    type: "website",
    locale: "cs_CZ",
    url: BRAND.url,
    siteName: BRAND.name,
    title: "Kepsha.VIP — Stěhování, přeprava nákladu a vyklizení",
    description:
      "Profesionální stěhování, přeprava nákladu a vyklizení prostor po celé ČR i v Evropě. Rychlá domluva, bezpečná přeprava.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kepsha.VIP — Stěhování, přeprava a vyklizení",
    description: "Profesionální stěhování, přeprava nákladu a vyklizení po celé ČR i v Evropě.",
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0A0A0B",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MovingCompany",
  name: BRAND.name,
  description:
    "Profesionální stěhování, přeprava nákladu a vyklizení prostor po celé ČR i v Evropě.",
  url: BRAND.url,
  telephone: PHONE_E164,
  email: CONTACT.email,
  priceRange: "$$",
  areaServed: [
    { "@type": "Country", name: "Czech Republic" },
    { "@type": "Place", name: "Europe" },
  ],
  address: {
    "@type": "PostalAddress",
    addressCountry: "CZ",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "00:00",
    closes: "23:59",
  },
  sameAs: [CONTACT.whatsapp, CONTACT.telegram],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs" className={`${inter.variable} ${spaceGrotesk.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="grain">
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
