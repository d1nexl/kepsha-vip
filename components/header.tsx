"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { CONTACT } from "@/lib/config";
import { useI18n } from "@/lib/i18n-context";
import { LanguageSwitcher } from "./language-switcher";

const NAV = [
  { id: "home", href: "#home" },
  { id: "services", href: "#services" },
  { id: "process", href: "#process" },
  { id: "why", href: "#why" },
  { id: "gallery", href: "#gallery" },
  { id: "contact", href: "#contact" },
] as const;

export function Header() {
  const { t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while mobile menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <motion.div
          initial={false}
          animate={{
            paddingTop: scrolled ? 10 : 18,
            paddingBottom: scrolled ? 10 : 18,
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className={`border-b transition-colors duration-300 ${
            scrolled
              ? "border-ink-700/70 bg-ink-950/70 backdrop-blur-xl"
              : "border-transparent bg-transparent"
          }`}
        >
          <div className="container-x flex items-center justify-between gap-4">
            {/* Logo */}
            <a
              href="#home"
              className="group flex items-center gap-2 text-lg font-bold tracking-tight text-bone"
              aria-label="Kepsha.VIP — home"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-pulse-dot rounded-full bg-signal" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-signal" />
              </span>
              <span className="font-display">
                Kepsha<span className="text-signal">.VIP</span>
              </span>
            </a>

            {/* Desktop nav */}
            <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
              {NAV.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  className="group relative rounded-full px-4 py-2 text-sm font-medium text-bone-muted transition-colors hover:text-bone"
                >
                  {t.nav[item.id]}
                  <span className="absolute inset-x-4 bottom-1 h-px origin-left scale-x-0 bg-signal transition-transform duration-300 group-hover:scale-x-100" />
                </a>
              ))}
            </nav>

            {/* Right cluster */}
            <div className="flex items-center gap-2.5">
              <LanguageSwitcher />
              <a
                href="#request"
                className="btn-signal group hidden md:inline-flex"
              >
                {t.nav.cta}
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <button
                type="button"
                onClick={() => setMenuOpen(true)}
                aria-label={t.nav.menu}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink-600 text-bone lg:hidden"
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </motion.div>
      </header>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[70] flex flex-col bg-ink-950/98 backdrop-blur-2xl lg:hidden"
          >
            <div className="container-x flex items-center justify-between py-[18px]">
              <span className="font-display text-lg font-bold text-bone">
                Kepsha<span className="text-signal">.VIP</span>
              </span>
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                aria-label={t.nav.close}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink-600 text-bone"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="container-x flex flex-1 flex-col justify-center gap-1" aria-label="Mobile">
              {NAV.map((item, i) => (
                <motion.a
                  key={item.id}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  initial={reduce ? { opacity: 0 } : { opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + i * 0.06, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="group flex items-center justify-between border-b border-ink-800 py-5"
                >
                  <span className="font-display text-3xl font-bold tracking-tight text-bone transition-colors group-hover:text-signal sm:text-4xl">
                    {t.nav[item.id]}
                  </span>
                  <ArrowUpRight className="h-6 w-6 text-bone-dim transition-all group-hover:translate-x-1 group-hover:text-signal" />
                </motion.a>
              ))}
            </nav>

            <div className="container-x flex flex-col gap-3 pb-10">
              <a href="#request" onClick={() => setMenuOpen(false)} className="btn-signal w-full">
                {t.nav.cta}
              </a>
              <a href={CONTACT.tel} className="btn-ghost w-full">
                <Phone className="h-4 w-4" />
                {CONTACT.phoneDisplay}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
