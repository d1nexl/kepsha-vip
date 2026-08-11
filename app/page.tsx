import { Benefits } from "@/components/benefits";
import { Contact } from "@/components/contact";
import { CtaBand } from "@/components/cta-band";
import { Faq } from "@/components/faq";
import { Footer } from "@/components/footer";
import { Gallery } from "@/components/gallery";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { MetaSync } from "@/components/meta-sync";
import { MobileCallBar } from "@/components/mobile-call-bar";
import { Process } from "@/components/process";
import { RequestForm } from "@/components/request-form";
import { Services } from "@/components/services";

export default function Home() {
  return (
    <>
      <MetaSync />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-signal focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-ink-950"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Services />
        <Benefits />
        <Process />
        <Gallery />
        <CtaBand />
        <RequestForm />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <MobileCallBar />
    </>
  );
}
