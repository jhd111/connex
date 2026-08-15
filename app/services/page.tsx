import type { Metadata } from "next";
import { SERVICES } from "@/lib/services-data";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const description =
  "UK network infrastructure services: data cabling, WiFi surveys, fibre, CCTV and hardware, delivered discover through optimise by AB Technologies.";

export const metadata: Metadata = {
  title: "Network Infrastructure Services | Cabling, WiFi, Fibre & CCTV",
  description,
  alternates: {
    canonical: "https://www.abtechnologies.co.uk/services",
  },
  openGraph: {
    title: "Network Infrastructure Services | AB Technologies",
    description,
    url: "https://www.abtechnologies.co.uk/services",
    images: [{ url: "/images/hero-hub.webp", width: 2048, height: 1849 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Network Infrastructure Services | AB Technologies",
    description,
  },
};

const servicesJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: SERVICES.map((service, index) => ({
    "@type": "ListItem",
    position: index + 1,
    url: `https://www.abtechnologies.co.uk/services/${service.slug}`,
    name: service.title,
  })),
};

export default function ServicesPage() {
  return (
    <main className="relative page-gradient">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />
      <Header />

      <div className="container-page pt-10 pb-20 sm:pt-14 sm:pb-28">
        <span className="inline-flex items-center gap-2 rounded-full border border-[#2a3d61] bg-cyan-500/[0.06] px-4 py-1.5 text-xs font-medium text-cyan-400">
          Service overview
        </span>

        <h1 className="mt-5 max-w-3xl text-balance text-[1.85rem] font-semibold leading-[1.12] sm:text-4xl lg:text-[2.6rem]">
          UK Network Infrastructure Services: Data Cabling, Wi-Fi Surveys,
          Fibre, CCTV and Hardware.
        </h1>

        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-haze-300 sm:text-base">
        AB Technologies designs, installs and supports UK data cabling, structured
          cabling, fibre optic cabling, Wi-Fi surveys, cellular, CCTV,
          LAN/WAN and connected infrastructure services across healthcare,
          hospitality, education, commercial and industrial spaces.
        </p>

        <p className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-400">
          Discover &bull; Design &bull; Supply &bull; Implement &bull; Manage &bull; Optimise
        </p>

        <div className="mt-12 flex flex-col gap-6 sm:mt-16">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <section
                key={service.slug}
                id={service.slug}
                className="scroll-mt-24 rounded-2xl border border-[#2a3d61] bg-white/[0.02] p-6 shadow-card sm:p-8"
              >
                <div className="flex items-start gap-3.5">
                  <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-core-gradient shadow-glow-amber">
                    <Icon size={18} className="text-ink-950" strokeWidth={2.25} />
                  </span>
                  <div>
                    <h2 className="text-lg font-semibold text-white sm:text-xl">
                      {service.title}
                    </h2>
                    <p className="mt-2 max-w-3xl text-[13.5px] leading-relaxed text-haze-400 sm:text-[14.5px]">
                      {service.description}
                    </p>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
                  <div className="space-y-2.5">
                    {service.leftPoints.map((point, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                        <span className="text-[13.5px] leading-relaxed text-haze-300">
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-2.5">
                    {service.rightPoints.map((point, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                        <span className="text-[13.5px] leading-relaxed text-haze-300">
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11.5px] font-medium text-haze-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </div>

      <Footer />
    </main>
  );
}
