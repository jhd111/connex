"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import CountUp from "./CountUp";

const STATS = [
  { value: 38, suffix: "+", label: "Years installation experience" },
  { value: 744, suffix: "+", label: "WiFi sites surveyed / installed / live" },
  { value: 19367, suffix: "+", label: "Estimated fibre terminations / splices completed" },
  { value: 96836, suffix: "+", label: "Estimated copper terminations tested and live" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="container-page relative pt-14 pb-16 sm:pt-20 sm:pb-20 lg:pt-24 lg:pb-24 after:absolute after:left-1/2 after:bottom-0 after:w-screen after:-translate-x-1/2 after:border-b after:border-b-[#2a3d61]">
        <motion.div
          initial="hidden"
          animate="show"
          custom={0}
          variants={fadeUp}
          className="inline-flex items-center gap-2 rounded-full border border-[#2a3d61] bg-white/[0.03] px-4 py-1.5 text-xs font-medium text-haze-300"
        >
          UK &amp; Europe network infrastructure specialists &bull
        </motion.div>

        <motion.h1
          initial="hidden"
          animate="show"
          custom={1}
          variants={fadeUp}
          className="mt-6 max-w-4xl text-balance text-[2.1rem] font-semibold leading-[1.08] sm:text-5xl lg:text-[3.4rem]"
        >
          Modern Connectivity Infrastructure for Environments Where{" "}
          <span className="bg-core-gradient bg-clip-text text-transparent">
            Downtime Isn&rsquo;t an Option.
          </span>
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="show"
          custom={2}
          variants={fadeUp}
          className="mt-5 max-w-2xl text-balance text-[15px] leading-relaxed text-haze-300 sm:text-base"
        >
          AB Technologies designs, installs and supports structured cabling, fibre, WiFi and
          LAN/WAN systems across healthcare, hospitality, education, commercial and
          industrial spaces.
        </motion.p>

        <motion.p
          initial="hidden"
          animate="show"
          custom={3}
          variants={fadeUp}
          className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-400"
        >
          Discover &bull; Design &bull; Supply &bull; Implement &bull; Manage &bull; Optimise
        </motion.p>

        <motion.div
          initial="hidden"
          animate="show"
          custom={4}
          variants={fadeUp}
          className="mt-8 flex flex-col gap-3 sm:flex-row"
        >
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-ink-900 transition-transform hover:-translate-y-0.5 active:translate-y-0"
          >
            Request a Survey
          </Link>
          <Link
            href="/projects"
            className="inline-flex items-center justify-center rounded-xl border border-[#2a3d61] bg-white/[0.03] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            See Project Outcomes
          </Link>
        </motion.div>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:mt-14 sm:gap-4 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-10%" }}
              custom={i}
              variants={fadeUp}
              className="rounded-2xl border border-[#2a3d61] bg-white/[0.03] p-4 shadow-card sm:p-5"
            >
              <div className="font-display text-2xl font-semibold text-white sm:text-3xl">
                <CountUp value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="mt-1.5 text-[12.5px] leading-snug text-haze-400 sm:text-[13px]">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
