"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { CONTACT } from "@/lib/config";
import { useI18n } from "@/lib/i18n-context";

/* Brand glyphs (compact) */
function WA() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
      <path d="M12.05 0C5.5 0 .16 5.335.157 11.892c0 2.096.548 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893C23.945 5.335 18.61.003 12.05 0zm6.958 16.71c-.297.83-1.735 1.588-2.42 1.69-.618.09-1.4.128-2.26-.142-.52-.165-1.19-.386-2.045-.755-3.6-1.554-5.95-5.18-6.13-5.42-.18-.24-1.462-1.942-1.462-3.703 0-1.76.925-2.626 1.253-2.984.297-.324.669-.4.892-.4l.643.011c.206.008.483-.078.756.577.297.72 1.01 2.47 1.098 2.647.09.18.15.39.03.63-.11.24-.16.39-.32.6-.16.21-.34.47-.485.63-.16.18-.328.376-.14.7.18.324.802 1.325 1.72 2.145 1.18 1.052 2.176 1.377 2.5 1.526.323.15.51.126.7-.075.18-.198.802-.937.99-1.26.19-.322.38-.27.643-.16.263.108 1.673.79 1.96.935.288.148.48.223.552.347.075.126.075.72-.223 1.55z" />
    </svg>
  );
}

export function MobileCallBar() {
  const { t } = useI18n();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-0 bottom-0 z-40 border-t border-ink-700 bg-ink-950/90 p-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] backdrop-blur-xl lg:hidden"
        >
          <div className="flex items-center gap-3">
            <a
              href={CONTACT.tel}
              className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-signal py-3.5 text-sm font-bold text-ink-950"
              aria-label={`${t.contact.callNow} ${CONTACT.phoneDisplay}`}
            >
              <Phone className="h-5 w-5" />
              {t.contact.callNow}
            </a>
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex h-[52px] w-[52px] items-center justify-center rounded-2xl text-white"
              style={{ backgroundColor: "#25D366" }}
            >
              <WA />
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
