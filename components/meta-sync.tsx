"use client";

import { useEffect } from "react";
import { useI18n } from "@/lib/i18n-context";

/** Keeps document title & meta description in sync with the active locale. */
export function MetaSync() {
  const { t } = useI18n();
  useEffect(() => {
    document.title = t.meta.title;
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", t.meta.description);
  }, [t]);
  return null;
}
