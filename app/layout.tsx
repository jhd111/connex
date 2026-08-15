import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const siteUrl = "https://www.abtechnologies.co.uk";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "AB Technologies | UK & Europe Network Infrastructure Specialists",
    template: "%s | AB Technologies",
  },
  description:
    "AB Technologies designs, installs and supports structured cabling, fibre, WiFi and LAN/WAN systems across healthcare, hospitality, education, commercial and industrial spaces. Established 2008.",
  keywords: [
    "structured cabling",
    "fibre installation",
    "WiFi survey and design",
    "network infrastructure UK",
    "CCTV installation",
    "cellular in-building coverage",
    "Starlink installation",
    "building management systems",
  ],
  authors: [{ name: "AB Technologies" }],
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteUrl,
    siteName: "AB Technologies",
    title: "AB Technologies | Modern Connectivity Infrastructure",
    description:
      "Discover, design, supply, implement, manage and optimise structured cabling, fibre, WiFi and LAN/WAN systems for environments where downtime isn't an option.",
    images: [
      {
        url: "/images/hero-hub.webp",
        width: 2048,
        height: 1849,
        alt: "AB Technologies service map",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AB Technologies",
    description:
      "UK & Europe network infrastructure specialists — structured cabling, fibre, WiFi and LAN/WAN systems.",
    images: ["/images/hero-hub.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: "/icon.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${siteUrl}/#organization`,
  name: "AB Technologies",
  url: siteUrl,
  logo: `${siteUrl}/images/logo.png`,
  image: `${siteUrl}/images/logo.png`,
  description:
    "UK & Europe network infrastructure specialists established in 2008, delivering structured cabling, fibre, WiFi and LAN/WAN systems.",
  // foundingDate: "2008",
  telephone: "+447003450037",
  email: "info@abtechnologies.co.uk",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Unit 12, Chiltern Enterprise Centre, Station Road",
    addressLocality: "Theale",
    addressRegion: "Berkshire",
    postalCode: "RG7 4AA",
    addressCountry: "GB",
  },
  areaServed: ["United Kingdom", "Europe"],
  // TODO: replace with your real social profile URLs (currently placeholders in Footer.tsx)
  sameAs: [],
  makesOffer: [
    "Structured cabling",
    "Fibre optic installation",
    "WiFi surveys and design",
    "CCTV installation",
    "Cellular in-building coverage",
    "Building management systems",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB" className={`${display.variable} ${body.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
