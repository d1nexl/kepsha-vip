"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Phone, MessageSquareText, Truck, PackageCheck } from "lucide-react";
import { useRef } from "react";
import { useI18n } from "@/lib/i18n-context";
import { Reveal } from "./primitives";

const ICONS = [Phone, MessageSquareText, Truck, PackageCheck];

export function Process() {
  const { t } = useI18n();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 60%"],
  });
  // Fill the route line as the section scrolls through view
  const lineScaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const lineScaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="process" className="relative scroll-mt-24 border-t border-ink-800 py-20 sm:py-28 lg:py-36">
      <div className="container-x">
        <div className="mb-14 max-w-2xl">
          <Reveal>
            <span className="eyebrow mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-signal" />
              {t.process.label}
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="display text-[clamp(2rem,5vw,3.5rem)] text-bone">{t.process.title}</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-bone-muted">{t.process.subtitle}</p>
          </Reveal>
        </div>

        <div ref={ref}>
          {/* Desktop: horizontal route */}
          <div className="relative hidden md:block">
            {/* base track */}
            <div className="absolute left-0 right-0 top-7 h-px bg-ink-800" />
            {/* animated fill */}
            <motion.div
              style={{ scaleX: lineScaleX }}
              className="absolute left-0 right-0 top-7 h-px origin-left bg-gradient-to-r from-signal via-signal to-signal/40 shadow-[0_0_12px_rgba(205,255,62,0.6)]"
            />
            <div className="grid grid-cols-4 gap-6">
              {t.process.steps.map((step, i) => {
                const Icon = ICONS[i];
                return (
                  <motion.div
                    key={step.num}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                    className="relative"
                  >
                    <div className="relative z-10 mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-signal/40 bg-ink-950 text-signal shadow-[0_0_24px_-6px_rgba(205,255,62,0.6)]">
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </div>
                    <span className="font-display text-sm font-semibold tabular-nums text-signal">{step.num}</span>
                    <h3 className="mt-2 font-display text-xl font-bold text-bone">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-bone-muted">{step.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Mobile: vertical route */}
          <div className="relative md:hidden">
            <div className="absolute bottom-0 left-7 top-0 w-px bg-ink-800" />
            <motion.div
              style={{ scaleY: lineScaleY }}
              className="absolute bottom-0 left-7 top-0 w-px origin-top bg-gradient-to-b from-signal to-signal/30 shadow-[0_0_12px_rgba(205,255,62,0.5)]"
            />
            <div className="space-y-10">
              {t.process.steps.map((step, i) => {
                const Icon = ICONS[i];
                return (
                  <motion.div
                    key={step.num}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className="relative flex gap-5 pl-0"
                  >
                    <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-signal/40 bg-ink-950 text-signal">
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </div>
                    <div className="pt-1">
                      <span className="font-display text-sm font-semibold tabular-nums text-signal">{step.num}</span>
                      <h3 className="mt-1 font-display text-lg font-bold text-bone">{step.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-bone-muted">{step.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
