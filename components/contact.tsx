"use client";

import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { CONTACT } from "@/lib/config";
import { useI18n } from "@/lib/i18n-context";
import { ChannelButtons } from "./channels";
import { Reveal } from "./primitives";

export function Contact() {
  const { t } = useI18n();

  return (
    <section id="contact" className="relative scroll-mt-24 border-t border-ink-800 py-20 sm:py-28 lg:py-36">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-4xl border border-ink-700/70 bg-ink-900/50 bg-grid p-8 backdrop-blur-sm sm:p-12 lg:p-16">
          <div
            className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full opacity-40 blur-[100px]"
            style={{ background: "radial-gradient(circle, rgba(205,255,62,0.3), transparent 70%)" }}
          />

          <div className="relative grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left: headline + phone */}
            <div>
              <Reveal>
                <span className="eyebrow mb-5">
                  <span className="h-1.5 w-1.5 rounded-full bg-signal" />
                  {t.contact.label}
                </span>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="display text-[clamp(2rem,5.5vw,4rem)] uppercase text-bone">{t.contact.title}</h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-5 max-w-md leading-relaxed text-bone-muted">{t.contact.subtitle}</p>
              </Reveal>

              <Reveal delay={0.15}>
                <a
                  href={CONTACT.tel}
                  className="group mt-8 inline-flex items-center gap-4 rounded-2xl border border-ink-700 bg-ink-950/60 p-2 pr-6 transition-colors hover:border-signal/50"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-signal text-ink-950 transition-transform duration-300 group-hover:scale-105">
                    <Phone className="h-6 w-6" />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-widest text-bone-dim">{t.contact.callNow}</span>
                    <span className="font-display text-2xl font-bold text-bone group-hover:text-signal">
                      {CONTACT.phoneDisplay}
                    </span>
                  </span>
                </a>
              </Reveal>
            </div>

            {/* Right: channels + info */}
            <div className="flex flex-col justify-center gap-8">
              <div>
                <p className="mb-4 text-sm uppercase tracking-widest text-bone-dim">{t.contact.orWrite}</p>
                <ChannelButtons variant="solid" />
              </div>

              <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-ink-800 bg-ink-800 sm:grid-cols-3">
                <InfoItem icon={<Clock className="h-4 w-4" />} label={t.contact.availabilityLabel} value={t.contact.availability} />
                <InfoItem icon={<MapPin className="h-4 w-4" />} label={t.contact.coverageLabel} value={t.contact.coverage} />
                <InfoItem
                  icon={<Mail className="h-4 w-4" />}
                  label={t.contact.emailLabel}
                  value={CONTACT.email}
                  href={`mailto:${CONTACT.email}`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoItem({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="flex h-full flex-col gap-2 bg-ink-950 p-5 transition-colors hover:bg-ink-900">
      <span className="flex items-center gap-2 text-bone-dim">
        <span className="text-signal">{icon}</span>
        <span className="text-xs uppercase tracking-widest">{label}</span>
      </span>
      <span className="font-medium text-bone">{value}</span>
    </div>
  );
  return href ? (
    <a href={href} className="block">
      {inner}
    </a>
  ) : (
    inner
  );
}
