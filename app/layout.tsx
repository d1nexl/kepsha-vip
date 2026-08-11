import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { BRAND, CONTACT, GOOGLE_SITE_VERIFICATION, PHONE_E164 } from "@/lib/config";
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

const TITLE = "Kepsha.VIP — Stěhování, přeprava nákladu a vyklizení | ČR a Evropa";
const DESCRIPTION =
  "Profesionální stěhování bytů a domů, přeprava nákladu a vyklizení prostor po celé ČR i v Evropě. Rychlá domluva, férové jednání, bezpečná přeprava. Volejte +420 775 929 681.";

export const metadata: Metadata = {
  metadataBase: new URL(BRAND.url),
  title: {
    default: TITLE,
    template: "%s | Kepsha.VIP",
  },
  description: DESCRIPTION,
  applicationName: BRAND.name,
  authors: [{ name: BRAND.name, url: BRAND.url }],
  creator: BRAND.name,
  publisher: BRAND.name,
  category: "Transportation & Moving Services",
  keywords: [
    // Czech (primary market)
    "stěhování",
    "stěhování Praha",
    "stěhování bytů",
    "stěhování domů",
    "stěhovací služby",
    "přeprava nákladu",
    "nákladní doprava",
    "autodoprava",
    "dodávková doprava",
    "vyklízení bytů",
    "vyklízení sklepů",
    "vyklízení pozůstalosti",
    "odvoz odpadu",
    "odvoz nábytku",
    "stěhování Česká republika",
    "stěhování po Evropě",
    "mezinárodní stěhování",
    // Multilingual intent
    "вантажні перевезення Чехія",
    "переїзди Прага",
    "грузоперевозки Чехия",
    "переезды Прага",
    "moving company Czech Republic",
    "cargo transport Europe",
    "Kepsha.VIP",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "cs_CZ",
    alternateLocale: ["en_GB", "uk_UA", "ru_RU"],
    url: BRAND.url,
    siteName: BRAND.name,
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: "Kepsha.VIP — Stěhování, přeprava a vyklizení",
    description: "Profesionální stěhování, přeprava nákladu a vyklizení po celé ČR i v Evropě.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  ...(GOOGLE_SITE_VERIFICATION
    ? { verification: { google: GOOGLE_SITE_VERIFICATION } }
    : {}),
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/favicon.svg" }],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0A0A0B",
};

const SERVICES = [
  "Stěhování bytů a domů",
  "Přeprava nákladu",
  "Vyklízení bytů",
  "Vyklízení sklepů a garáží",
  "Odvoz pozůstalosti",
  "Odvoz a likvidace odpadu",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MovingCompany",
  "@id": `${BRAND.url}/#business`,
  name: BRAND.name,
  legalName: BRAND.name,
  slogan: "Převezeme. Vyřešíme. Zařídíme.",
  description:
    "Profesionální stěhování bytů a domů, přeprava nákladu a vyklizení prostor po celé ČR i v Evropě.",
  url: BRAND.url,
  telephone: PHONE_E164,
  email: CONTACT.email,
  image: `${BRAND.url}/opengraph-image`,
  logo: `${BRAND.url}/favicon.svg`,
  priceRange: "$$",
  currenciesAccepted: "CZK, EUR",
  knowsLanguage: ["cs", "en", "uk", "ru"],
  founder: { "@type": "Person", name: BRAND.owner },
  areaServed: [
    { "@type": "Country", name: "Czech Republic" },
    { "@type": "Country", name: "Germany" },
    { "@type": "Country", name: "Austria" },
    { "@type": "Country", name: "Poland" },
    { "@type": "Country", name: "Slovakia" },
    { "@type": "Place", name: "Europe" },
  ],
  address: {
    "@type": "PostalAddress",
    addressCountry: "CZ",
    addressRegion: "Praha",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: PHONE_E164,
    email: CONTACT.email,
    contactType: "customer service",
    areaServed: ["CZ", "EU"],
    availableLanguage: ["Czech", "English", "Ukrainian", "Russian"],
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "00:00",
    closes: "23:59",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Služby Kepsha.VIP",
    itemListElement: SERVICES.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s },
    })),
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
