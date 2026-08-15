import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CountUp from "@/components/CountUp";
import AccreditationsMarquee from "@/components/AccreditationsMarquee";

const description =
  " AB Technologies combines practical installation expertise with a quality-first delivery model across the UK and Europe.";

export const metadata: Metadata = {
  title: "About AB Technologies | UK Network Infrastructure Specialists",
  description,
  alternates: {
    canonical: "https://www.abtechnologies.co.uk/about",
  },
  openGraph: {
    title: "About AB Technologies",
    description,
    url: "https://www.abtechnologies.co.uk/about",
    images: [{ url: "/images/hero-hub.webp", width: 2048, height: 1849 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About AB Technologies",
    description,
  },
};

const STATS = [
  { value: 38, suffix: "+", label: "Years installation experience" },
  { value: 744, suffix: "+", label: "WiFi sites surveyed / installed / live" },
  { value: 19368, suffix: "+", label: "Estimated fibre terminations/splices completed" },
  { value: 96840, suffix: "+", label: "Estimated copper terminations, tested and live" },
];

const STANDARDS = [
  "Structured cabling delivered in line with recognised UK and international standards, including BS EN 50173, BS EN 50174 and ISO/IEC 11801.",
  "Copper certification carried out using Fluke DSX testing, with clear pass/fail reporting and documented results.",
  "Fibre testing completed with the appropriate certification method for the installation, including OTDR and OLTS where required.",
  "Wi-Fi surveys, validation and optimisation led by Ekahau methodology, focused on real coverage, capacity and roaming performance on site.",
  "Labelling, test records and handover documentation produced properly, so the installation is not just complete, but supportable.",
];

export default function AboutPage() {
  return (
    <main className="relative page-gradient">
      <Header />

      <div className="container-page pt-10 pb-10 sm:pt-14">
        <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/25 bg-cyan-500/[0.06] px-4 py-1.5 text-xs font-medium text-cyan-400">
          About AB Technologies
        </span>

        <h1 className="mt-5 max-w-3xl text-balance text-[1.85rem] font-semibold leading-[1.12] sm:text-4xl lg:text-[2.6rem]">
          Experienced UK Network Infrastructure Engineers. Professional
          Standards.
        </h1>

        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-haze-300 sm:text-base">
          AB Technologies combines practical installation expertise
          with a quality-first delivery model.
        </p>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-[#2a3d61] bg-white/[0.03] p-4 shadow-card sm:p-5"
            >
              <div className="font-display text-2xl font-semibold text-white sm:text-3xl">
                <CountUp value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="mt-1.5 text-[12.5px] leading-snug text-haze-400 sm:text-[13px]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container-page flex flex-col gap-6 py-10 sm:py-12">
        {/* Our Approach */}
        <section className="overflow-hidden  p-5 rounded-2xl border border-[#2a3d61] bg-white/[0.02] shadow-card">
          <div className=" relative rounded-sm aspect-[16/9] w-full sm:aspect-[21/9]">
            <Image
              src="https://images.pexels.com/photos/28942126/pexels-photo-28942126.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Balanced stack of smooth stones on a beach, symbolising a careful, considered approach"
              fill
              className="object-cover rounded-lg"
              sizes="(min-width: 1024px) 72rem, 100vw"
            />
          </div>
          <div className="p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-amber-400 sm:text-xl">
              Our Approach
            </h2>
            <div className="mt-3 space-y-3 text-[13.5px] leading-relaxed text-haze-300 sm:text-[14.5px]">
              <p>
                We scope properly before a cable is run. We tell clients what
                they need, not what makes us the most money.
              </p>
              <p>
                We start by understanding the customer&rsquo;s needs. We
                often ask what the network needs to support, and confirm what
                the client actually needs from it on completion. That means
                clear scoping, practical surveys, and honest recommendations
                before a cable is run.
              </p>
              <p>
                We assess routes, cabinet locations, containment, Wi-Fi
                coverage, and access constraints before installation starts.
                We know the job properly, the installation goes smoothly, and
                the client knows what they are getting.
              </p>
              <p>
                Every installation is completed to the standard the client
                expects — not just the standard that passes testing. We
                label, test, and document as we go, so the handover is clean
                and the records are right.
              </p>
              <p className="text-white">
                If it can&rsquo;t be done right, we say so. If it can, we make
                sure it is.
              </p>
            </div>
          </div>
        </section>

        {/* Our Standards */}
        <section className="overflow-hidden rounded-2xl border border-[#2a3d61] bg-white/[0.02] shadow-card">
          <div className="relative aspect-[16/9] w-full overflow-hidden sm:aspect-[21/9]">
            <Image
              src="https://images.pexels.com/photos/5443566/pexels-photo-5443566.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Macro shot of precise watch movement, representing exacting standards"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 72rem, 100vw"
            />
            <div className="absolute inset-0 bg-ink-950/70" />
            <div className="absolute inset-0 flex items-center justify-center gap-3">
              <CheckCircle2 size={36} className="text-cyan-400 sm:h-12 sm:w-12" strokeWidth={2} />
              <span className="font-display text-3xl font-bold uppercase tracking-wide text-white sm:text-5xl">
                Standards
              </span>
            </div>
          </div>
          <div className="p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-amber-400 sm:text-xl">
              Our Standards
            </h2>
            <ul className="mt-3 space-y-2.5">
              {STANDARDS.map((point) => (
                <li key={point} className="flex items-start gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                  <span className="text-[13.5px] leading-relaxed text-haze-300 sm:text-[14.5px]">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* The Centre of Your Network */}
        <section className="overflow-hidden rounded-2xl border border-[#2a3d61] bg-white/[0.02] p-6 shadow-card sm:p-8">
          <h2 className="text-lg font-semibold text-amber-400 sm:text-xl">
            The Centre of Your Network. AB Technologies.
          </h2>
          <div className="mt-4 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
            <div className="space-y-3 text-[13.5px] leading-relaxed text-haze-300 sm:text-[14.5px]">
              <p>
              AB Technologies is a team of experienced data
                infrastructure engineers — not generalist contractors. Real
                engineers who understand the work because they&rsquo;ve been
                doing it for years across every sector.
              </p>
              <p>
                We plan properly, work cleanly, and deliver installations
                that perform. RAMS, coordination, test results, as-fitted
                drawings, and proper handover documentation are normal on
                every job.
              </p>
              <p>
                We say yes to everything — the straightforward CAT5 run, the
                hospital ward rollout, the live hotel upgrade, the multi-site
                rollout programme, and the jobs that are too difficult to
                price elsewhere.
              </p>
              <p>
                UK and Europe coverage. Every service. Standard fixed hours
                and out-of-hours where conditions demand it.
              </p>
              <p>
                Health and safety isn&rsquo;t a formality — it&rsquo;s how we
                work. RAMS, risk assessments, PPE, vehicle checks, site
                induction. Non-negotiable on every project.
              </p>
              <p>
                Every AB Technologies engineer is DBS-registered, trained, and
                experienced. Right training, right knowledge, right attitude.
                On time, and without drama.
              </p>
            </div>
            <div className="overflow-hidden rounded-xl border border-white/8">
              <Image
                src="/images/hero-hub.webp"
                alt="AB Technologies service hub diagram connecting structured cabling, WiFi, cellular, CCTV, Starlink and more"
                width={2048}
                height={1849}
                className="h-auto w-full"
                sizes="(min-width: 1024px) 36rem, 100vw"
              />
            </div>
          </div>
        </section>
      </div>

      <AccreditationsMarquee />

      <Footer />
    </main>
  );
}