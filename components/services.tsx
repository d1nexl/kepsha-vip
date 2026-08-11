"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Plus, Truck, Package, Home, Warehouse, HeartHandshake, Recycle } from "lucide-react";
import { useState } from "react";
import { useI18n } from "@/lib/i18n-context";
import { Reveal } from "./primitives";

const ICONS = [Home, Truck, Package, Warehouse, HeartHandshake, Recycle];

export function Services() {
  const { t } = useI18n();
  const [active, setActive] = useState(0);
  const [openMobile, setOpenMobile] = useState<number | null>(0);

  return (
    <section id="services" className="relative scroll-mt-24 border-t border-ink-800 py-20 sm:py-28 lg:py-36">
      <div className="container-x">
        {/* Header */}
        <div className="mb-12 flex flex-col justify-between gap-6 md:mb-16 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <Reveal>
              <span className="eyebrow mb-4">
                <span className="h-1.5 w-1.5 rounded-full bg-signal" />
                {t.services.label}
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="display text-[clamp(2rem,5vw,3.5rem)] text-bone">{t.services.title}</h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="max-w-sm text-bone-muted md:text-right">{t.services.subtitle}</p>
          </Reveal>
        </div>

        {/* Desktop: interactive split list */}
        <div className="hidden gap-10 lg:grid lg:grid-cols-[1.1fr_0.9fr]">
          <ul className="divide-y divide-ink-800 border-y border-ink-800">
            {t.services.items.map((item, i) => {
              const isActive = active === i;
              return (
                <li key={item.num}>
                  <button
                    type="button"
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    className="group relative flex w-full items-center gap-6 py-7 text-left transition-colors"
                    aria-label={item.title}
                  >
                    {/* signal bar */}
                    <span
                      className={`absolute left-0 top-1/2 h-0 w-[3px] -translate-y-1/2 rounded-full bg-signal transition-all duration-300 ${
                        isActive ? "h-2/3" : "h-0"
                      }`}
                    />
                    <span
                      className={`w-12 shrink-0 font-display text-sm font-semibold tabular-nums transition-colors duration-300 ${
                        isActive ? "text-signal" : "text-bone-dim"
                      }`}
                    >
                      {item.num}
                    </span>
                    <span
                      className={`flex-1 font-display text-2xl font-bold tracking-tight transition-all duration-300 xl:text-3xl ${
                        isActive ? "translate-x-1 text-bone" : "text-bone-muted"
                      }`}
                    >
                      {item.title}
                    </span>
                    <ArrowUpRight
                      className={`h-6 w-6 shrink-0 transition-all duration-300 ${
                        isActive ? "translate-x-0 translate-y-0 text-signal opacity-100" : "translate-x-2 opacity-0"
                      }`}
                    />
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Preview panel */}
          <div className="relative">
            <div className="sticky top-28 overflow-hidden rounded-4xl border border-ink-700/70 bg-ink-900/60 bg-grid p-8 backdrop-blur-sm">
              <div
                className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full opacity-40 blur-[80px]"
                style={{ background: "radial-gradient(circle, rgba(205,255,62,0.3), transparent 70%)" }}
              />
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="relative"
                >
                  <div className="mb-8 flex items-center justify-between">
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-ink-700 bg-ink-850 text-signal">
                      {(() => {
                        const Icon = ICONS[active];
                        return <Icon className="h-6 w-6" strokeWidth={1.75} />;
                      })()}
                    </span>
                    <span className="font-display text-6xl font-bold text-ink-700">{t.services.items[active].num}</span>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-bone">{t.services.items[active].title}</h3>
                  <p className="mt-3 leading-relaxed text-bone-muted">{t.services.items[active].desc}</p>
                  <a href="#request" className="btn-signal group mt-8">
                    {t.services.cta}
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Mobile / tablet: accordion */}
        <div className="divide-y divide-ink-800 border-y border-ink-800 lg:hidden">
          {t.services.items.map((item, i) => {
            const Icon = ICONS[i];
            const isOpen = openMobile === i;
            return (
              <div key={item.num}>
                <button
                  type="button"
                  onClick={() => setOpenMobile(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center gap-4 py-5 text-left"
                >
                  <span className="font-display text-xs font-semibold tabular-nums text-bone-dim">{item.num}</span>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-ink-700 bg-ink-850 text-signal">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <span className="flex-1 font-display text-lg font-bold text-bone">{item.title}</span>
                  <Plus className={`h-5 w-5 shrink-0 text-bone-muted transition-transform duration-300 ${isOpen ? "rotate-45 text-signal" : ""}`} />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 pl-[4.5rem] pr-2 leading-relaxed text-bone-muted">{item.desc}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
