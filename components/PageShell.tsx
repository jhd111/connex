import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PageShell({ title }: { title: string }) {
  return (
    <main className="relative page-gradient flex min-h-screen flex-col">
      <Header />
      <div className="container-page flex flex-1 items-center justify-center py-24">
        <h1 className="text-3xl font-semibold text-white sm:text-4xl">{title}</h1>
      </div>
      <Footer />
    </main>
  );
}
