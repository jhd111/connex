"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ServiceHub() {
  return (
    <section id="services" className="relative py-14 sm:py-20 lg:py-24">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <h2 className="text-2xl font-semibold sm:text-3xl lg:text-[2.15rem]">
            Service lines built for real-world delivery
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-cyan-400">
            Our core model across services: discover &bull; design &bull; supply &bull;
            implement &bull; manage &bull; optimise{" "}
            <span className="text-haze-400">(with service-specific variations where needed).</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-10 sm:mt-14"
        >
          <div className="overflow-hidden ">
            <Image
              src="/images/hero-hub.webp"
              alt="AB Technologies service hub diagram showing structured cabling, WiFi and WLAN, cellular 4G/5G, CCTV camera systems, Starlink, satellite and DTT installation, building management cabling, AV monitors and projectors, network hardware, and AI-assisted design and delivery connected around a central hub"
              width={2048}
              height={1849}
              className="mx-auto h-auto w-3/4 rounded-[1.75rem] border border-[#2a3d61] bg-white/[0.02]"
              sizes="(min-width: 1436px) 90rem, 100vw"
              priority={false}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
