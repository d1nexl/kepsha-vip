"use client";

import { motion } from "framer-motion";
import {
  Clock,
  Handshake,
  BadgeCheck,
  ShieldCheck,
  CalendarClock,
  Wallet,
  PackageOpen,
  MessagesSquare,
  Quote,
} from "lucide-react";
import { useI18n } from "@/lib/i18n-context";
import { Reveal, staggerContainer, staggerItem } from "./primitives";

const ICONS = [Clock, Handshake, BadgeCheck, ShieldCheck, CalendarClock, Wallet, PackageOpen, MessagesSquare];

export function Benefits() {
  const { t } = useI18n();

  return (
    <section id="why" className="relative scroll-mt-24 overflow-hidden border-t border-ink-800 py-20 sm:py-28 lg:py-36">
      <div className="container-x">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* Big statement + trust narrative */}
          <div>
            <Reveal>
              <span className="eyebrow mb-6">
                <span className="h-1.5 w-1.5 rounded-full bg-signal" />
                {t.benefits.label}
              </span>
            </Reveal>
            <h2 className="space-y-1">
              <span className="sr-only">{t.benefits.title}</span>
              {t.benefits.statement.map((line, i) => (
                <span key={i} className="block overflow-hidden" aria-hidden>
                  <motion.span
                    initial={{ y: "110%" }}
                    whileInView={{ y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className={`display block text-[clamp(2.5rem,7vw,5rem)] ${
                      i === t.benefits.statement.length - 1 ? "text-signal text-glow" : "text-bone"
                    }`}
                  >
                    {line}
                  </motion.span>
                </span>
              ))}
            </h2>
            <Reveal delay={0.2}>
              <p className="mt-8 max-w-md leading-relaxed text-bone-muted">{t.benefits.lead}</p>
            </Reveal>
            <Reveal delay={0.28}>
              <p className="mt-4 max-w-md leading-relaxed text-bone-muted">{t.benefits.lead2}</p>
            </Reveal>
          </div>

          {/* Benefits grid */}
          <motion.ul
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 gap-px self-start overflow-hidden rounded-3xl border border-ink-800 bg-ink-800 sm:grid-cols-2"
          >
            {t.benefits.items.map((item, i) => {
              const Icon = ICONS[i];
              return (
                <motion.li
                  key={item}
                  variants={staggerItem}
                  className="group flex items-start gap-4 bg-ink-950 p-6 transition-colors duration-300 hover:bg-ink-900"
                >
                  <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-ink-700 bg-ink-850 text-signal transition-all duration-300 group-hover:border-signal/40 group-hover:shadow-[0_0_20px_-6px_rgba(205,255,62,0.5)]">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <span className="pt-2 font-medium text-bone">{item}</span>
                </motion.li>
              );
            })}
          </motion.ul>
        </div>

        {/* Owner's personal note — trust anchor */}
        <Reveal delay={0.1}>
          <figure className="relative mt-14 overflow-hidden rounded-4xl border border-ink-700/70 bg-ink-900/50 p-8 backdrop-blur-sm sm:mt-16 sm:p-12">
            <div
              className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full opacity-40 blur-[90px]"
              style={{ background: "radial-gradient(circle, rgba(205,255,62,0.28), transparent 70%)" }}
            />
            <Quote className="mb-6 h-10 w-10 text-signal" aria-hidden />
            <blockquote className="relative max-w-3xl font-display text-xl font-medium leading-snug text-bone sm:text-2xl md:text-[1.7rem]">
              &ldquo;{t.benefits.owner.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-8 flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-signal font-display text-lg font-bold text-ink-950">
                {t.benefits.owner.name.charAt(0)}
              </span>
              <span>
                <span className="block font-display font-bold text-bone">{t.benefits.owner.name}</span>
                <span className="block text-sm text-bone-muted">{t.benefits.owner.role}</span>
              </span>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
