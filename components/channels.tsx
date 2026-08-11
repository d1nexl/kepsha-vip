"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { CONTACT } from "@/lib/config";
import { useI18n } from "@/lib/i18n-context";

/* ── Brand glyphs (inline SVG, currentColor) ────────────────────────── */
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.548 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function ViberIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M11.4 0C9.473.028 5.333.344 3.02 2.467 1.302 4.187.696 6.7.633 9.816.57 12.928.488 18.76 6.107 20.34h.005l-.005 2.416s-.037.977.61 1.177c.777.242 1.234-.5 1.98-1.302.407-.44.972-1.084 1.397-1.58 3.85.324 6.812-.417 7.148-.526.775-.252 5.166-.816 5.88-6.65.735-6.014-.35-9.815-2.305-11.53l-.006-.003c-.593-.548-2.97-2.28-8.263-2.302 0 0-.39-.025-1.043-.03zM11.457 2c.55-.005.885.015.885.015 4.478.02 6.62 1.362 7.128 1.82 1.652 1.434 2.495 4.86 1.874 9.878v.003c-.6 4.867-4.16 5.173-4.813 5.383-.278.09-2.886.737-6.166.524 0 0-2.44 2.94-3.2 3.7-.12.12-.26.16-.352.14-.13-.03-.166-.185-.165-.41l.02-4.024c-4.756-1.32-4.48-6.284-4.43-8.883.055-2.598.55-4.728 2-6.166C7.196 2.24 10.746 2.02 11.397 2h.06zm.535 3.867a.36.36 0 00-.36.36c0 .2.16.36.36.363 2.784.02 5.077 1.94 5.1 5.302a.36.36 0 00.36.357h.003a.363.363 0 00.36-.363c-.026-3.75-2.615-5.998-5.826-6.02zm.807 1.766a.36.36 0 00-.028.72c1.74.093 2.56.94 2.66 2.75a.363.363 0 00.36.34h.02a.362.362 0 00.34-.382c-.117-2.16-1.29-3.402-3.34-3.512a.36.36 0 00-.012 0zm-3.75.24a.75.75 0 00-.45.11l-.02.012c-.35.205-.665.464-.94.77-.23.258-.354.52-.387.77-.02.15-.007.3.037.446l.017.01c.126.37.39 1.003.98 1.85.34.49.72.955 1.13 1.39.436.408.9.788 1.39 1.13.847.59 1.48.855 1.85.98l.01.018c.147.043.297.056.446.036.25-.033.512-.157.77-.387.306-.275.565-.59.77-.94l.012-.02a.75.75 0 00-.16-.947l-1.04-.87c-.24-.2-.59-.176-.8.054l-.35.39a.454.454 0 01-.482.146c-.34-.104-.79-.353-1.28-.79-.436-.393-.71-.775-.82-1.08a.454.454 0 01.146-.48l.39-.35c.23-.21.253-.56.054-.8l-.87-1.04a.75.75 0 00-.496-.27z" />
    </svg>
  );
}

function TelegramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  );
}

type Variant = "solid" | "glass";

const CHANNELS = [
  {
    key: "whatsapp" as const,
    href: CONTACT.whatsapp,
    Icon: WhatsAppIcon,
    color: "#25D366",
  },
  {
    key: "viber" as const,
    href: CONTACT.viber,
    Icon: ViberIcon,
    color: "#7360F2",
  },
  {
    key: "telegram" as const,
    href: CONTACT.telegram,
    Icon: TelegramIcon,
    color: "#26A5E4",
  },
];

/** Row of messenger buttons (WhatsApp / Viber / Telegram). */
export function ChannelButtons({ variant = "glass" }: { variant?: Variant }) {
  const { t } = useI18n();
  return (
    <div className="flex flex-wrap gap-3">
      {CHANNELS.map(({ key, href, Icon, color }) => (
        <motion.a
          key={key}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t.contact.channels[key]}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.97 }}
          className={
            variant === "solid"
              ? "group flex flex-1 items-center justify-center gap-2.5 rounded-2xl px-4 py-3.5 text-sm font-semibold text-white transition-shadow min-w-[9rem]"
              : "group flex items-center gap-2.5 rounded-full border border-ink-600 bg-ink-850/60 px-5 py-3 text-sm font-semibold text-bone backdrop-blur-sm transition-colors hover:border-ink-600/0"
          }
          style={
            variant === "solid"
              ? { backgroundColor: color, boxShadow: `0 12px 30px -12px ${color}` }
              : undefined
          }
        >
          <span
            className="transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6"
            style={variant === "glass" ? { color } : undefined}
          >
            <Icon className="h-5 w-5" />
          </span>
          {t.contact.channels[key]}
        </motion.a>
      ))}
    </div>
  );
}

/** Prominent call button. */
export function CallButton({ className }: { className?: string }) {
  const { t } = useI18n();
  return (
    <a href={CONTACT.tel} className={className ?? "btn-signal group"}>
      <Phone className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
      <span>{t.contact.callNow}</span>
      <span className="hidden font-medium opacity-80 sm:inline">{CONTACT.phoneDisplay}</span>
    </a>
  );
}
