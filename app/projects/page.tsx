import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SECTORS } from "@/lib/sectors-data";

const description =
  "How AB Technologies delivers network infrastructure projects: survey, design, install, test and handover for cabling, WiFi, fibre, CCTV and connected systems across the UK and Europe.";

export const metadata: Metadata = {
  title: "Projects | How We Deliver Network Infrastructure Installs",
  description,
  alternates: {
    canonical: "https://www.abtechnologies.co.uk/projects",
  },
  openGraph: {
    title: "Projects | AB Technologies",
    description,
    url: "https://www.abtechnologies.co.uk/projects",
    images: [{ url: "/images/hero-hub.webp", width: 2048, height: 1849 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | AB Technologies",
    description,
  },
};

const STAGES = [
  {
    title: "Discover",
    detail: "Site walk, stakeholder input and requirement gathering before any design work begins.",
  },
  {
    title: "Design & specification",
    detail: "Cabling, WiFi, fibre and connected-infrastructure designs specified against relevant standards.",
  },
  {
    title: "Supply & install",
    detail: "Containment, cabling, hardware and equipment installed with minimal disruption to live sites.",
  },
  {
    title: "Test & certify",
    detail: "Copper and fibre certification, WiFi validation and full test documentation on handover.",
  },
  {
    title: "Manage & optimise",
    detail: "Ongoing support, fault response and optimisation once systems are live.",
  },
];

export default function ProjectsPage() {
  return (
    <main className="relative page-gradient">
      <Header />

      <div className="container-page pt-10 pb-20 sm:pt-14 sm:pb-28">
        <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/25 bg-cyan-500/[0.06] px-4 py-1.5 text-xs font-medium text-cyan-400">
          Project delivery
        </span>

        <h1 className="mt-5 max-w-3xl text-balance text-[1.85rem] font-semibold leading-[1.12] sm:text-4xl lg:text-[2.6rem]">
          How AB Technologies Delivers Network Infrastructure Projects.
        </h1>

        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-haze-300 sm:text-base">
          Every project runs through the same disciplined process, whatever
          the sector or scale: discover, design, supply, implement, manage
          and optimise. It&rsquo;s how we keep structured cabling, fibre,
          WiFi and connected-infrastructure installs predictable, well
          documented and ready to support the site long after handover.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {STAGES.map((stage) => (
            <div
              key={stage.title}
              className="rounded-2xl border border-[#2a3d61] bg-white/[0.02] p-6 shadow-card"
            >
              <h2 className="text-[15px] font-semibold text-white sm:text-base">
                {stage.title}
              </h2>
              <p className="mt-2.5 text-[13.5px] leading-relaxed text-haze-300">
                {stage.detail}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 border-t border-white/8 pt-10 sm:mt-16">
          <h2 className="text-lg font-semibold text-white sm:text-xl">
            Sectors we deliver projects for
          </h2>
          <p className="mt-2.5 max-w-2xl text-[13.5px] leading-relaxed text-haze-300">
            From live clinical environments to trading hospitality venues,
            our project teams plan around the way each site actually
            operates.
          </p>
          <div className="mt-5 flex flex-wrap gap-2.5">
            {SECTORS.map((sector) => (
              <Link
                key={sector.slug}
                href={`/sectors#${sector.slug}`}
                className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[13px] font-medium text-haze-300 transition-colors hover:border-cyan-500/40 hover:text-white"
              >
                {sector.title}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-ink-900 transition-transform hover:-translate-y-0.5"
          >
            Request a Survey
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            See all services
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  );
}
