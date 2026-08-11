"use client";

import { AnimatePresence, motion } from "framer-motion";
import { AlertCircle, ArrowUpRight, Check, CheckCircle2, Loader2 } from "lucide-react";
import { useState } from "react";
import { WEB3FORMS_KEY } from "@/lib/config";
import { useI18n } from "@/lib/i18n-context";
import { Reveal } from "./primitives";

interface FormState {
  name: string;
  phone: string;
  email: string;
  service: string;
  from: string;
  to: string;
  date: string;
  message: string;
  consent: boolean;
}

const EMPTY: FormState = {
  name: "",
  phone: "",
  email: "",
  service: "",
  from: "",
  to: "",
  date: "",
  message: "",
  consent: false,
};

type Errors = Partial<Record<keyof FormState, string>>;

export function RequestForm() {
  const { t } = useI18n();
  const [data, setData] = useState<FormState>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setData((d) => ({ ...d, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  }

  function validate(): Errors {
    const e: Errors = {};
    if (!data.name.trim()) e.name = t.form.errors.name;
    if (!/^[+()\d\s-]{6,}$/.test(data.phone.trim())) e.phone = t.form.errors.phone;
    if (data.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) e.email = t.form.errors.email;
    if (!data.service) e.service = t.form.errors.service;
    if (!data.consent) e.consent = t.form.errors.consent;
    return e;
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const found = validate();
    if (Object.keys(found).length) {
      setErrors(found);
      // focus first invalid field
      const first = Object.keys(found)[0];
      document.getElementById(`field-${first}`)?.focus();
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Nová poptávka z webu — ${data.service}`,
          from_name: "Kepsha.VIP",
          name: data.name,
          phone: data.phone,
          email: data.email || "—",
          service: data.service,
          from: data.from || "—",
          to: data.to || "—",
          date: data.date || "—",
          message: data.message || "—",
        }),
      });
      const json = await res.json();
      if (json.success) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  function reset() {
    setData(EMPTY);
    setErrors({});
    setStatus("idle");
  }

  const inputBase =
    "peer w-full rounded-2xl border bg-ink-900/60 px-4 py-3.5 text-bone placeholder-transparent outline-none transition-colors focus:border-signal/70";

  return (
    <section id="request" className="relative scroll-mt-24 border-t border-ink-800 py-20 sm:py-28 lg:py-32">
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-80 w-[80%] -translate-x-1/2 rounded-full opacity-20 blur-[120px]"
        style={{ background: "radial-gradient(circle, rgba(205,255,62,0.3), transparent 70%)" }}
      />
      <div className="container-x relative">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 text-center">
            <Reveal>
              <span className="eyebrow mb-4 justify-center">
                <span className="h-1.5 w-1.5 rounded-full bg-signal" />
                {t.form.label}
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="display text-[clamp(2rem,5vw,3.25rem)] text-bone">{t.form.title}</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mx-auto mt-4 max-w-lg text-bone-muted">{t.form.subtitle}</p>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <div className="relative overflow-hidden rounded-4xl border border-ink-700/70 bg-ink-900/50 p-6 backdrop-blur-md sm:p-9">
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-col items-center py-10 text-center"
                    role="status"
                    aria-live="polite"
                  >
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.1, type: "spring", stiffness: 200, damping: 15 }}
                      className="mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-signal/40 bg-signal/10 text-signal"
                    >
                      <CheckCircle2 className="h-10 w-10" />
                    </motion.span>
                    <h3 className="font-display text-3xl font-bold text-bone">{t.form.success.title}</h3>
                    <p className="mt-3 max-w-sm text-bone-muted">{t.form.success.text}</p>
                    <button type="button" onClick={reset} className="btn-ghost mt-8">
                      {t.form.success.again}
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={onSubmit}
                    noValidate
                    className="grid grid-cols-1 gap-5 sm:grid-cols-2"
                  >
                    <Field id="name" label={t.form.fields.name} required error={errors.name}>
                      <input
                        id="field-name"
                        type="text"
                        autoComplete="name"
                        placeholder={t.form.placeholders.name}
                        value={data.name}
                        onChange={(e) => update("name", e.target.value)}
                        className={`${inputBase} ${errors.name ? "border-red-500/70" : "border-ink-700"}`}
                        aria-invalid={!!errors.name}
                      />
                    </Field>

                    <Field id="phone" label={t.form.fields.phone} required error={errors.phone}>
                      <input
                        id="field-phone"
                        type="tel"
                        autoComplete="tel"
                        placeholder={t.form.placeholders.phone}
                        value={data.phone}
                        onChange={(e) => update("phone", e.target.value)}
                        className={`${inputBase} ${errors.phone ? "border-red-500/70" : "border-ink-700"}`}
                        aria-invalid={!!errors.phone}
                      />
                    </Field>

                    <Field id="email" label={t.form.fields.email} optional={t.form.optional} error={errors.email}>
                      <input
                        id="field-email"
                        type="email"
                        autoComplete="email"
                        placeholder={t.form.placeholders.email}
                        value={data.email}
                        onChange={(e) => update("email", e.target.value)}
                        className={`${inputBase} ${errors.email ? "border-red-500/70" : "border-ink-700"}`}
                        aria-invalid={!!errors.email}
                      />
                    </Field>

                    <Field id="service" label={t.form.fields.service} required error={errors.service}>
                      <select
                        id="field-service"
                        value={data.service}
                        onChange={(e) => update("service", e.target.value)}
                        className={`w-full rounded-2xl border bg-ink-900/60 px-4 py-3.5 outline-none transition-colors focus:border-signal/70 ${
                          errors.service ? "border-red-500/70" : "border-ink-700"
                        } ${data.service ? "text-bone" : "text-bone-dim"}`}
                        aria-invalid={!!errors.service}
                      >
                        <option value="" disabled>
                          {t.form.placeholders.selectService}
                        </option>
                        {t.form.serviceOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </Field>

                    <Field id="from" label={t.form.fields.from} optional={t.form.optional}>
                      <input
                        id="field-from"
                        type="text"
                        placeholder={t.form.placeholders.from}
                        value={data.from}
                        onChange={(e) => update("from", e.target.value)}
                        className={`${inputBase} border-ink-700`}
                      />
                    </Field>

                    <Field id="to" label={t.form.fields.to} optional={t.form.optional}>
                      <input
                        id="field-to"
                        type="text"
                        placeholder={t.form.placeholders.to}
                        value={data.to}
                        onChange={(e) => update("to", e.target.value)}
                        className={`${inputBase} border-ink-700`}
                      />
                    </Field>

                    <Field id="date" label={t.form.fields.date} optional={t.form.optional} className="sm:col-span-2">
                      <input
                        id="field-date"
                        type="date"
                        value={data.date}
                        onChange={(e) => update("date", e.target.value)}
                        className={`${inputBase} border-ink-700 [color-scheme:dark]`}
                      />
                    </Field>

                    <Field id="message" label={t.form.fields.message} optional={t.form.optional} className="sm:col-span-2">
                      <textarea
                        id="field-message"
                        rows={4}
                        placeholder={t.form.placeholders.message}
                        value={data.message}
                        onChange={(e) => update("message", e.target.value)}
                        className={`${inputBase} resize-none border-ink-700`}
                      />
                    </Field>

                    {/* Consent */}
                    <div className="sm:col-span-2">
                      <label className="flex cursor-pointer items-start gap-3 text-sm text-bone-muted">
                        <button
                          type="button"
                          id="field-consent"
                          role="checkbox"
                          aria-checked={data.consent}
                          onClick={() => update("consent", !data.consent)}
                          className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border transition-colors ${
                            data.consent ? "border-signal bg-signal text-ink-950" : errors.consent ? "border-red-500/70" : "border-ink-600"
                          }`}
                        >
                          {data.consent && <Check className="h-3.5 w-3.5" strokeWidth={3} />}
                        </button>
                        <span onClick={() => update("consent", !data.consent)}>{t.form.consent}</span>
                      </label>
                      {errors.consent && (
                        <p className="mt-1.5 pl-8 text-xs text-red-400" role="alert">
                          {errors.consent}
                        </p>
                      )}
                    </div>

                    <div className="sm:col-span-2">
                      {status === "error" && (
                        <p className="mb-3 flex items-center gap-2 rounded-xl border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-300" role="alert">
                          <AlertCircle className="h-4 w-4 shrink-0" />
                          {t.form.submitError}
                        </p>
                      )}
                      <button type="submit" disabled={status === "sending"} className="btn-signal group w-full text-base disabled:opacity-70">
                        {status === "sending" ? (
                          <>
                            <Loader2 className="h-4 w-4 animate-spin" />
                            {t.form.sending}
                          </>
                        ) : (
                          <>
                            {t.form.submit}
                            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          </>
                        )}
                      </button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  required,
  optional,
  error,
  className,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  optional?: string;
  error?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <label htmlFor={`field-${id}`} className="mb-1.5 flex items-center gap-1.5 text-sm font-medium text-bone">
        {label}
        {required && <span className="text-signal">*</span>}
        {optional && <span className="text-xs font-normal text-bone-dim">({optional})</span>}
      </label>
      {children}
      {error && (
        <p className="mt-1.5 text-xs text-red-400" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
