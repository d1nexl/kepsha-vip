"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { useI18n } from "@/lib/i18n-context";
import { Reveal } from "./primitives";

interface Photo {
  src: string;
  w: number;
  h: number;
}

const PHOTOS: Photo[] = [
  { src: "/img1.jpeg", w: 1200, h: 1600 },
  { src: "/img3.jpeg", w: 1600, h: 1200 },
  { src: "/img2.jpeg", w: 1200, h: 1600 },
  { src: "/img5.jpeg", w: 1600, h: 1200 },
  { src: "/img4.jpeg", w: 1200, h: 1600 },
  { src: "/img7.jpeg", w: 1200, h: 1600 },
  { src: "/img6.jpeg", w: 1600, h: 1200 },
  { src: "/img8.jpeg", w: 1200, h: 1600 },
];

export function Gallery() {
  const { t } = useI18n();
  const reduce = useReducedMotion();
  const [open, setOpen] = useState<number | null>(null);

  const close = useCallback(() => setOpen(null), []);
  const go = useCallback(
    (dir: number) => setOpen((cur) => (cur === null ? cur : (cur + dir + PHOTOS.length) % PHOTOS.length)),
    []
  );

  // Keyboard navigation + body scroll lock while lightbox open
  useEffect(() => {
    if (open === null) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") go(1);
      else if (e.key === "ArrowLeft") go(-1);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [open, close, go]);

  return (
    <section id="gallery" className="relative scroll-mt-24 border-t border-ink-800 py-20 sm:py-28 lg:py-36">
      <div className="container-x">
        <div className="mb-12 flex flex-col justify-between gap-6 md:mb-16 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <Reveal>
              <span className="eyebrow mb-4">
                <span className="h-1.5 w-1.5 rounded-full bg-signal" />
                {t.gallery.label}
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="display text-[clamp(2rem,5vw,3.5rem)] text-bone">{t.gallery.title}</h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="max-w-sm text-bone-muted md:text-right">{t.gallery.subtitle}</p>
          </Reveal>
        </div>

        {/* Masonry grid (CSS columns) */}
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
          {PHOTOS.map((photo, i) => (
            <Reveal key={photo.src} delay={(i % 3) * 0.06} className="break-inside-avoid">
              <button
                type="button"
                onClick={() => setOpen(i)}
                aria-label={`${t.gallery.alt} ${i + 1}`}
                className="group relative block w-full overflow-hidden rounded-3xl border border-ink-700/70 bg-ink-900 focus-visible:outline-offset-4"
              >
                <Image
                  src={photo.src}
                  alt={`${t.gallery.alt} ${i + 1}`}
                  width={photo.w}
                  height={photo.h}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="h-auto w-full transition-transform duration-[600ms] ease-out group-hover:scale-[1.05]"
                />
                {/* overlay */}
                <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="pointer-events-none absolute bottom-4 left-4 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-signal text-ink-950 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <Expand className="h-4 w-4" />
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {open !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-ink-950/95 p-4 backdrop-blur-md sm:p-8"
            role="dialog"
            aria-modal="true"
            aria-label={t.gallery.label}
            onClick={close}
          >
            {/* Close */}
            <button
              type="button"
              onClick={close}
              aria-label={t.gallery.close}
              className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-ink-600 bg-ink-900/70 text-bone transition-colors hover:border-signal/60 hover:text-signal sm:right-6 sm:top-6"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Prev */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                go(-1);
              }}
              aria-label={t.gallery.prev}
              className="absolute left-3 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-ink-600 bg-ink-900/70 text-bone transition-colors hover:border-signal/60 hover:text-signal sm:left-6"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Next */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                go(1);
              }}
              aria-label={t.gallery.next}
              className="absolute right-3 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-ink-600 bg-ink-900/70 text-bone transition-colors hover:border-signal/60 hover:text-signal sm:right-6"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Image */}
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.div
                key={open}
                initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex max-h-full max-w-5xl items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={PHOTOS[open].src}
                  alt={`${t.gallery.alt} ${open + 1}`}
                  className="max-h-[82vh] w-auto rounded-2xl border border-ink-700 object-contain shadow-2xl"
                />
                <span className="absolute -bottom-9 left-1/2 -translate-x-1/2 text-sm tabular-nums text-bone-muted">
                  {open + 1} / {PHOTOS.length}
                </span>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
