"use client";

import { Phone } from "lucide-react";
import { BRAND, CONTACT } from "@/lib/config";
import { useI18n } from "@/lib/i18n-context";
import { LanguageSwitcher } from "./language-switcher";

const NAV = [
  { id: "home", href: "#home" },
  { id: "services", href: "#services" },
  { id: "process", href: "#process" },
  { id: "contact", href: "#contact" },
] as const;

export function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-ink-800 bg-ink-950">
      <div className="container-x py-16">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr] lg:gap-16">
          {/* Brand */}
          <div>
            <a href="#home" className="flex items-center gap-2 font-display text-xl font-bold text-bone">
              <span className="h-2.5 w-2.5 rounded-full bg-signal" />
              Kepsha<span className="text-signal">.VIP</span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-bone-muted">{t.footer.tagline}</p>
            <a
              href={CONTACT.tel}
              className="mt-5 inline-flex items-center gap-2 font-display text-lg font-bold text-bone transition-colors hover:text-signal"
            >
              <Phone className="h-4 w-4 text-signal" />
              {CONTACT.phoneDisplay}
            </a>
          </div>

          {/* Nav */}
          <div>
            <h3 className="mb-4 text-xs uppercase tracking-widest text-bone-dim">{t.footer.linksLabel}</h3>
            <ul className="space-y-3">
              {NAV.map((item) => (
                <li key={item.id}>
                  <a href={item.href} className="group inline-flex items-center gap-1.5 text-sm text-bone-muted transition-colors hover:text-bone">
                    <span className="h-px w-0 bg-signal transition-all duration-300 group-hover:w-4" />
                    {t.nav[item.id]}
                  </a>
                </li>
              ))}
              <li>
                <a href="#" className="group inline-flex items-center gap-1.5 text-sm text-bone-muted transition-colors hover:text-bone">
                  <span className="h-px w-0 bg-signal transition-all duration-300 group-hover:w-4" />
                  {t.footer.privacy}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact + language */}
          <div>
            <h3 className="mb-4 text-xs uppercase tracking-widest text-bone-dim">{t.footer.contactLabel}</h3>
            <ul className="space-y-3 text-sm text-bone-muted">
              <li>
                <a href={CONTACT.tel} className="transition-colors hover:text-bone">
                  {CONTACT.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT.email}`} className="transition-colors hover:text-bone">
                  {CONTACT.email}
                </a>
              </li>
              <li className="text-bone-dim">{t.footer.coverage}</li>
            </ul>
            <div className="mt-5">
              <p className="mb-2 text-xs uppercase tracking-widest text-bone-dim">{t.footer.langLabel}</p>
              <LanguageSwitcher align="left" />
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-ink-800 pt-8 text-sm text-bone-dim sm:flex-row">
          <p>
            © {year} {BRAND.name}. {t.footer.rights}
          </p>
          <p className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-signal" />
            {t.footer.coverage}
          </p>
        </div>
      </div>
    </footer>
  );
}
