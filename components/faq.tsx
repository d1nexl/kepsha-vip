"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";
import { useI18n } from "@/lib/i18n-context";
import { Reveal } from "./primitives";

export function Faq() {
  const { t } = useI18n();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative border-t border-ink-800 py-20 sm:py-28 lg:py-32">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <Reveal>
              <span className="eyebrow mb-4">
                <span className="h-1.5 w-1.5 rounded-full bg-signal" />
                {t.faq.label}
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="display text-[clamp(1.9rem,4.5vw,3rem)] text-bone">{t.faq.title}</h2>
            </Reveal>
          </div>

          <div className="divide-y divide-ink-800 border-y border-ink-800">
            {t.faq.items.map((item, i) => {
              const isOpen = open === i;
              return (
                <div key={i}>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="group flex w-full items-center gap-4 py-5 text-left"
                  >
                    <span className="flex-1 font-display text-lg font-semibold text-bone transition-colors group-hover:text-signal">
                      {item.q}
                    </span>
                    <Plus
                      className={`h-5 w-5 shrink-0 text-bone-muted transition-transform duration-300 ${
                        isOpen ? "rotate-45 text-signal" : ""
                      }`}
                    />
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
                        <p className="pb-5 pr-8 leading-relaxed text-bone-muted">{item.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
