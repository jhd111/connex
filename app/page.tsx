import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServiceHub from "@/components/ServiceHub";
import ServicesGrid from "@/components/ServicesGrid";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <div
        className="top-glow pointer-events-none absolute inset-x-0 top-0 -z-10 h-[900px]"
        aria-hidden
      />
      <Header />
      <Hero />
      <ServiceHub />
      <ServicesGrid />
      <Footer />
    </main>
  );
}
