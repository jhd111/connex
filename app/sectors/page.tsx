import type { Metadata } from "next";
import Image from "next/image";
import { SECTORS } from "@/lib/sectors-data";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const description =
  "UK network infrastructure for healthcare, hospitality, education, retail, commercial and industrial sites, and IT & data centres — delivered by AB Technologies.";

export const metadata: Metadata = {
  title: "Sectors We Serve | Healthcare, Hospitality, Education & Commercial",
  description,
  alternates: {
    canonical: "https://www.abtechnologies.co.uk/sectors",
  },
  openGraph: {
    title: "Sectors We Serve | AB Technologies",
    description,
    url: "https://www.abtechnologies.co.uk/sectors",
    images: [{ url: "/images/hero-hub.webp", width: 2048, height: 1849 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sectors We Serve | AB Technologies",
    description,
  },
};

export default function SectorsPage() {
  return (
    <main className="relative page-gradient">
      <Header />

      <div className="container-page pt-10 pb-20 sm:pt-14 sm:pb-28">
        <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/25 bg-cyan-500/[0.06] px-4 py-1.5 text-xs font-medium text-cyan-400">
          Sectors overview
        </span>

        <h1 className="mt-5 max-w-3xl text-balance text-[1.85rem] font-semibold leading-[1.12] sm:text-4xl lg:text-[2.6rem]">
          UK Network Infrastructure for Healthcare, Hospitality, Education,
          Retail and Commercial Sites.
        </h1>

        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-cyan-400 sm:text-base">
          Powering every sector through intelligent, connected infrastructure.
          <br />
          From LAN to AI, we design, install and integrate networks that make
          environments smarter and fully connected.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:mt-16 sm:grid-cols-2">
          {SECTORS.map((sector) => {
            const Icon = sector.icon;
            return (
              <article
                key={sector.slug}
                id={sector.slug}
                className="scroll-mt-24 overflow-hidden rounded-2xl border border-[#2a3d61] bg-white/[0.02] shadow-card"
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden">
                  <Image
                    src={sector.image}
                    alt={sector.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 640px) 50vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-900/60 via-transparent to-transparent" />
                </div>
                <div className="p-5 sm:p-6">
                  <div className="flex items-center gap-2">
                    <Icon size={16} className="text-amber-400" strokeWidth={2.25} />
                    <h2 className="text-[15px] font-semibold text-amber-400 sm:text-base">
                      {sector.title}
                    </h2>
                  </div>
                  <p className="mt-2.5 text-[13.5px] leading-relaxed text-haze-300">
                    {sector.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <Footer />
    </main>
  );
}
