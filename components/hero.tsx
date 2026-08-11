"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Check, Phone } from "lucide-react";
import { CONTACT } from "@/lib/config";
import { useI18n } from "@/lib/i18n-context";

/* ── Europe route map: Praha hub → European destinations ─────────────── */
const HUB = { x: 300, y: 262, label: "Praha" };

const DESTINATIONS = [
  { x: 148, y: 138, label: "Amsterdam", d: "M300,262 Q188,168 148,138" },
  { x: 322, y: 108, label: "Berlin", d: "M300,262 Q298,178 322,108" },
  { x: 452, y: 150, label: "Warszawa", d: "M300,262 Q404,182 452,150" },
  { x: 104, y: 286, label: "Paris", d: "M300,262 Q196,246 104,286" },
  { x: 214, y: 372, label: "München", d: "M300,262 Q236,326 214,372" },
  { x: 356, y: 388, label: "Wien", d: "M300,262 Q348,318 356,388" },
  { x: 196, y: 436, label: "Milano", d: "M300,262 Q214,360 196,436" },
];

function RouteMap() {
  const reduce = useReducedMotion();
  return (
    <svg
      viewBox="0 0 600 500"
      className="h-full w-full"
      fill="none"
      aria-hidden
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <radialGradient id="mapGlow" cx="50%" cy="52%" r="55%">
          <stop offset="0%" stopColor="#CDFF3E" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#CDFF3E" stopOpacity="0" />
        </radialGradient>
        <pattern id="mapDots" width="22" height="22" patternUnits="userSpaceOnUse">
          <circle cx="1.4" cy="1.4" r="1.4" fill="#2A2C30" />
        </pattern>
        <filter id="nodeGlow" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="4" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Map-textured backdrop (dotted grid + soft glow around hub) */}
      <rect width="600" height="500" fill="url(#mapDots)" />
      <rect width="600" height="500" fill="url(#mapGlow)" />

      {/* Routes */}
      {DESTINATIONS.map((dst, i) => (
        <g key={dst.label}>
          {/* faint base track */}
          <path d={dst.d} stroke="#33363B" strokeWidth="1.25" strokeDasharray="2 7" strokeLinecap="round" />
          {/* animated draw */}
          <motion.path
            d={dst.d}
            stroke="#CDFF3E"
            strokeWidth="1.75"
            strokeLinecap="round"
            style={{ filter: "drop-shadow(0 0 3px rgba(205,255,62,0.5))" }}
            initial={reduce ? { pathLength: 1, opacity: 0.9 } : { pathLength: 0, opacity: 0.9 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.3, delay: 0.5 + i * 0.22, ease: "easeInOut" }}
          />
          {/* travelling parcel pulse */}
          {!reduce && (
            <circle r="2.6" fill="#fff" style={{ filter: "drop-shadow(0 0 4px #CDFF3E)" }}>
              <animateMotion dur="3.6s" begin={`${0.5 + i * 0.22}s`} repeatCount="indefinite" path={dst.d} />
            </circle>
          )}
        </g>
      ))}

      {/* Destination nodes + labels */}
      {DESTINATIONS.map((dst, i) => (
        <motion.g
          key={`n-${dst.label}`}
          initial={reduce ? { opacity: 1 } : { opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9 + i * 0.22, duration: 0.4, ease: "backOut" }}
          style={{ transformOrigin: `${dst.x}px ${dst.y}px` }}
        >
          <circle cx={dst.x} cy={dst.y} r="3.4" fill="#CDFF3E" filter="url(#nodeGlow)" />
          <circle cx={dst.x} cy={dst.y} r="7" stroke="#CDFF3E" strokeWidth="1" opacity="0.25" />
          <text
            x={dst.x}
            y={dst.y - 12}
            textAnchor="middle"
            fill="#A3A39B"
            style={{ font: "600 12px var(--font-sans), sans-serif", letterSpacing: "0.02em" }}
          >
            {dst.label}
          </text>
        </motion.g>
      ))}

      {/* Hub: Praha */}
      <g>
        {!reduce && (
          <motion.circle
            cx={HUB.x}
            cy={HUB.y}
            r="10"
            stroke="#CDFF3E"
            strokeWidth="1.5"
            initial={{ scale: 0.6, opacity: 0.5 }}
            animate={{ scale: [0.6, 2.4], opacity: [0.5, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut" }}
            style={{ transformOrigin: `${HUB.x}px ${HUB.y}px` }}
          />
        )}
        <circle cx={HUB.x} cy={HUB.y} r="6.5" fill="#CDFF3E" filter="url(#nodeGlow)" />
        <circle cx={HUB.x} cy={HUB.y} r="2.5" fill="#0A0A0B" />
        <text
          x={HUB.x}
          y={HUB.y + 26}
          textAnchor="middle"
          fill="#F4F3EE"
          style={{ font: "700 14px var(--font-display), sans-serif", letterSpacing: "0.01em" }}
        >
          {HUB.label}
        </text>
      </g>
    </svg>
  );
}

export function Hero() {
  const { t } = useI18n();
  const reduce = useReducedMotion();

  return (
    <section id="home" className="relative overflow-hidden pt-32 sm:pt-36 lg:pt-44">
      {/* Ambient glows */}
      <div
        className="pointer-events-none absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full opacity-40 blur-[120px]"
        style={{ background: "radial-gradient(circle, rgba(205,255,62,0.28), transparent 70%)" }}
      />
      <div
        className="pointer-events-none absolute left-[-15%] top-40 h-[420px] w-[420px] rounded-full opacity-20 blur-[130px]"
        style={{ background: "radial-gradient(circle, rgba(120,140,255,0.25), transparent 70%)" }}
      />

      <div className="container-x relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Copy */}
          <div className="relative z-10">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="eyebrow mb-6"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-signal" />
              {t.hero.badge}
            </motion.span>

            <h1 className="display text-[clamp(2.75rem,9vw,6.5rem)] text-bone">
              {t.hero.titleLines.map((line, i) => (
                <span key={i} className="block overflow-hidden">
                  <motion.span
                    className="block"
                    initial={reduce ? { opacity: 0 } : { y: "110%" }}
                    animate={reduce ? { opacity: 1 } : { y: 0 }}
                    transition={{ duration: 0.8, delay: 0.15 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {i === t.hero.titleLines.length - 1 ? (
                      <span className="text-glow text-signal">{line}</span>
                    ) : (
                      line
                    )}
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-7 max-w-xl text-base leading-relaxed text-bone-muted sm:text-lg"
            >
              {t.hero.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.62 }}
              className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <a href="#request" className="btn-signal group text-base">
                {t.hero.ctaPrimary}
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a href={CONTACT.tel} className="btn-ghost group text-base">
                <Phone className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
                {t.hero.ctaSecondary}
                <span className="font-semibold text-bone group-hover:text-signal">{CONTACT.phoneDisplay}</span>
              </a>
            </motion.div>

            {/* Trust indicators */}
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-9 flex flex-wrap gap-x-6 gap-y-2.5"
            >
              {t.hero.trust.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-bone-muted">
                  <Check className="h-4 w-4 text-signal" />
                  {item}
                </li>
              ))}
            </motion.ul>
          </div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative aspect-[4/3] w-full">
              {/* Animated Europe route map — Praha → EU destinations */}
              <div className="absolute inset-0 overflow-hidden rounded-4xl border border-ink-700/60 bg-ink-900/40 backdrop-blur-sm">
                <RouteMap />
                {/* corner fade for depth */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-ink-950/50" />
              </div>
              {/* Floating stat chips */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.5 }}
                className="absolute left-5 top-5 rounded-2xl border border-ink-700 bg-ink-900/80 px-4 py-3 backdrop-blur-md"
              >
                <p className="font-display text-2xl font-bold text-bone">7/7</p>
                <p className="text-xs text-bone-muted">{t.contact.availability}</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.25, duration: 0.5 }}
                className="absolute bottom-5 right-5 rounded-2xl border border-ink-700 bg-ink-900/80 px-4 py-3 backdrop-blur-md"
              >
                <p className="font-display text-2xl font-bold text-signal">ČR + EU</p>
                <p className="text-xs text-bone-muted">{t.contact.coverageLabel}</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Marquee */}
      <Marquee items={t.marquee} />
    </section>
  );
}

function Marquee({ items }: { items: string[] }) {
  const doubled = [...items, ...items];
  return (
    <div className="mask-fade-x relative mt-16 overflow-hidden border-y border-ink-800 py-5 sm:mt-24">
      <div className="flex w-max animate-marquee gap-10 pr-10 motion-reduce:animate-none">
        {doubled.map((item, i) => (
          <span key={i} className="flex shrink-0 items-center gap-10 text-sm font-medium uppercase tracking-widest text-bone-dim">
            {item}
            <span className="h-1 w-1 rounded-full bg-signal/60" />
          </span>
        ))}
      </div>
    </div>
  );
}
