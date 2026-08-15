import type { Metadata } from "next";

const description =
  "Request a data cabling, WiFi survey or network infrastructure quote from AB Technologies. Based in Theale, Berkshire, serving the UK and Europe.";

export const metadata: Metadata = {
  title: "Contact Us | Request a Network Infrastructure Survey",
  description,
  alternates: {
    canonical: "https://www.abtechnologies.co.uk/contact",
  },
  openGraph: {
    title: "Contact AB Technologies",
    description,
    url: "https://www.abtechnologies.co.uk/contact",
    images: [{ url: "/images/hero-hub.webp", width: 2048, height: 1849 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact AB Technologies",
    description,
  },
};

const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact AB Technologies",
  url: "https://www.abtechnologies.co.uk/contact",
  about: {
    "@type": "ProfessionalService",
    name: "AB Technologies",
    telephone: "+92 327 6517258",
    email: "info@abtechnologies.co.uk",
    address: {
      "@type": "PostalAddress",
      // streetAddress: "Unit 12, Chiltern Enterprise Centre, Station Road",
      addressLocality: "Theale",
      addressRegion: "Berkshire",
      postalCode: "RG7 4AA",
      addressCountry: "GB",
    },
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      {children}
    </>
  );
}
