"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { SERVICES } from "@/lib/services-data";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function ServicesGrid() {
  return (
    <section id="services-grid" className="relative py-14 sm:py-20 lg:py-24">
      <div className="container-page">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.slug}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-8%" }}
              variants={cardVariants}
            >
              <Link
                href={`/services#${service.slug}`}
                className="group block overflow-hidden rounded-2xl border border-[#2a3d61] bg-white/[0.02] shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/30 hover:bg-white/[0.04]"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-900/40 via-transparent to-transparent" />
                </div>
                <div className="p-5 sm:p-6">
                  <h3 className="text-[15.5px] font-semibold text-white sm:text-base">
                    {service.title}
                  </h3>
                  <p className="mt-1.5 text-[13.5px] leading-relaxed text-haze-400">
                    {service.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
