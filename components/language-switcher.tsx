"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Check, ChevronDown, Globe } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { LOCALE_META, LOCALES } from "@/lib/i18n";
import { useI18n } from "@/lib/i18n-context";

export function LanguageSwitcher({ align = "right" }: { align?: "left" | "right" }) {
  const { locale, setLocale } = useI18n();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onDown(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const current = LOCALE_META[locale];

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`Language: ${current.native}`}
        className="group flex items-center gap-1.5 rounded-full border border-ink-600/80 bg-ink-850/50 px-3 py-2 text-sm font-medium text-bone backdrop-blur-sm transition-colors hover:border-signal/50"
      >
        <Globe className="h-4 w-4 text-bone-muted transition-colors group-hover:text-signal" />
        <span className="hidden sm:inline">{locale.toUpperCase()}</span>
        <span className="text-base leading-none sm:hidden" aria-hidden>
          {current.flag}
        </span>
        <ChevronDown
          className={`h-3.5 w-3.5 text-bone-muted transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            role="listbox"
            initial={{ opacity: 0, y: 8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.97 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className={`absolute top-full z-50 mt-2 w-48 overflow-hidden rounded-2xl border border-ink-700 bg-ink-900/95 p-1.5 shadow-2xl shadow-black/50 backdrop-blur-xl ${
              align === "right" ? "right-0" : "left-0"
            }`}
          >
            {LOCALES.map((l) => {
              const meta = LOCALE_META[l];
              const active = l === locale;
              return (
                <li key={l} role="option" aria-selected={active}>
                  <button
                    type="button"
                    onClick={() => {
                      setLocale(l);
                      setOpen(false);
                    }}
                    className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm transition-colors ${
                      active ? "bg-ink-800 text-bone" : "text-bone-muted hover:bg-ink-850 hover:text-bone"
                    }`}
                  >
                    <span className="text-lg leading-none" aria-hidden>
                      {meta.flag}
                    </span>
                    <span className="flex-1 font-medium">{meta.native}</span>
                    {active && <Check className="h-4 w-4 text-signal" />}
                  </button>
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
