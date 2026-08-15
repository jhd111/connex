import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SERVICES } from "@/lib/services-data";

export function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const service = SERVICES.find((s) => s.slug === params.slug);
  if (!service) return {};
  const url = `https://www.abtechnologies.co.uk/services/${service.slug}`;
  return {
    title: service.title,
    description: service.detail,
    keywords: service.tags,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      title: `${service.title} | AB Technologies`,
      description: service.detail,
      url,
      images: [{ url: service.image, alt: service.imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} | AB Technologies`,
      description: service.detail,
      images: [service.image],
    },
  };
}

export default function ServiceDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const service = SERVICES.find((s) => s.slug === params.slug);
  if (!service) notFound();

  const Icon = service.icon;
  const otherServices = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 3);
  const siteUrl = "https://www.abtechnologies.co.uk";

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.detail,
    image: service.image,
    provider: {
      "@type": "ProfessionalService",
      name: "AB Technologies",
      url: siteUrl,
    },
    areaServed: ["United Kingdom", "Europe"],
    url: `${siteUrl}/services/${service.slug}`,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Services", item: `${siteUrl}/services` },
      {
        "@type": "ListItem",
        position: 3,
        name: service.title,
        item: `${siteUrl}/services/${service.slug}`,
      },
    ],
  };

  return (
    <main className="relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <div
        className="top-glow pointer-events-none absolute inset-x-0 top-0 -z-10 h-[700px]"
        aria-hidden
      />
      <Header />

      <article className="container-page pt-10 pb-16 sm:pt-14 sm:pb-20">
        <Link
          href="/services"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-haze-300 transition-colors hover:text-white"
        >
          <ArrowLeft size={15} />
          All services
        </Link>

        <div className="mt-6 flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-core-gradient shadow-glow-amber">
            <Icon size={20} className="text-ink-950" strokeWidth={2.25} />
          </span>
          <h1 className="text-2xl font-semibold sm:text-3xl">{service.title}</h1>
        </div>

        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-haze-300 sm:text-base">
          {service.detail}
        </p>

        <div className="mt-8 overflow-hidden rounded-2xl border border-white/8 sm:mt-10">
          <div className="relative aspect-[16/9] w-full">
            <Image
              src={service.image}
              alt={service.imageAlt}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 56rem, 100vw"
              priority
            />
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:mt-10">
          <Link
            href="/#contact"
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

        <div className="mt-14 border-t border-white/8 pt-10 sm:mt-16">
          <h2 className="text-lg font-semibold text-white sm:text-xl">
            Other service lines
          </h2>
          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {otherServices.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group block overflow-hidden rounded-2xl border border-white/8 bg-white/[0.02] transition-colors hover:border-cyan-500/30"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src={s.image}
                    alt={s.imageAlt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(min-width: 1024px) 20rem, 100vw"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-white">{s.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
