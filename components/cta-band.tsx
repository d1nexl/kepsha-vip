"use client";

import { ArrowUpRight, Phone } from "lucide-react";
import { CONTACT } from "@/lib/config";
import { useI18n } from "@/lib/i18n-context";
import { Reveal } from "./primitives";

export function CtaBand() {
  const { t } = useI18n();
  return (
    <section className="relative overflow-hidden border-t border-ink-800 py-20 sm:py-28">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-60" />
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-25 blur-[120px]"
        style={{ background: "radial-gradient(circle, rgba(205,255,62,0.35), transparent 70%)" }}
      />
      <div className="container-x relative text-center">
        <Reveal>
          <h2 className="display mx-auto max-w-4xl text-[clamp(2.25rem,6vw,4.5rem)] text-bone">
            {t.cta.title}
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mx-auto mt-5 max-w-xl text-bone-muted sm:text-lg">{t.cta.subtitle}</p>
        </Reveal>
        <Reveal delay={0.16}>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="#request" className="btn-signal group text-base">
              {t.cta.button}
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a href={CONTACT.tel} className="btn-ghost group text-base">
              <Phone className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
              {t.cta.call} {CONTACT.phoneDisplay}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
