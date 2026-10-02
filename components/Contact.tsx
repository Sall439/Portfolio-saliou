"use client";

import emailjs from "@emailjs/browser";
import { motion, useReducedMotion } from "motion/react";
import { useId, useRef, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { profile } from "@/data/profile";
import { GitHub, LinkedIn, Mail, WhatsApp } from "@/components/ui/Icons";
import { Section, SectionHeading } from "@/components/ui/Section";

const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_PUBLIC_KEY;

/* ------------------------------------------------------------------ */
/* Contact methods                                                     */
/* ------------------------------------------------------------------ */

const METHODS = [
  {
    key: "email" as const,
    label: "Email",
    value: profile.contact.email,
    href: `mailto:${profile.contact.email}`,
    Icon: Mail,
  },
  {
    key: "linkedin" as const,
    label: "LinkedIn",
    value: profile.contact.linkedinLabel,
    href: profile.contact.linkedin,
    Icon: LinkedIn,
  },
  {
    key: "github" as const,
    label: "GitHub",
    value: profile.contact.githubLabel,
    href: profile.contact.github,
    Icon: GitHub,
  },
  {
    key: "whatsapp" as const,
    label: "WhatsApp",
    value: profile.contact.whatsappLabel,
    href: profile.contact.whatsapp,
    Icon: WhatsApp,
  },
];

function MethodRow({ method }: { method: (typeof METHODS)[number] }) {
  const external = method.key !== "email";
  const { Icon } = method;

  return (
    <li>
      <a
        href={method.href}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : null)}
        className="group flex items-center justify-between gap-6 border-b border-hair py-5"
      >
        <span className="flex min-w-0 items-center gap-4">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-hair text-ash transition-colors duration-300 group-hover:border-hair-strong group-hover:text-bone">
            <Icon className="h-4 w-4" />
          </span>
          <span className="min-w-0">
            <span className="block text-[0.6875rem] tracking-[0.16em] uppercase text-ash-dim">
              {method.label}
            </span>
            <span className="mt-0.5 block truncate text-sm text-bone transition-colors duration-300 group-hover:text-white">
              {method.value}
            </span>
          </span>
        </span>

        <svg
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
          className="h-3.5 w-3.5 shrink-0 text-ash-dim transition-transform duration-300 group-hover:translate-x-0.5 group-hover:text-bone"
        >
          <path
            d="M4 12L12 4M6 4h6v6"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </li>
  );
}

/* ------------------------------------------------------------------ */
/* Form                                                                */
/* ------------------------------------------------------------------ */

const FIELD =
  "w-full border-b bg-transparent py-3.5 text-bone outline-none transition-colors duration-300 placeholder:text-ash-dim focus:border-bone";

type FieldName = "name" | "email" | "message";

type Errors = Partial<Record<FieldName, string>>;

function validate(values: Record<FieldName, string>): Errors {
  const errors: Errors = {};

  if (values.name.trim().length < 2) {
    errors.name = "Indiquez votre nom.";
  }

  // Deliberately permissive: the only thing that matters is that it is an
  // address shape a mail server would accept.
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim())) {
    errors.email = "Adresse email invalide.";
  }

  if (values.message.trim().length < 10) {
    errors.message = "Décrivez votre besoin en quelques mots.";
  }

  return errors;
}

function Field({
  name,
  label,
  type = "text",
  placeholder,
  error,
  autoComplete,
  as = "input",
  rows,
}: {
  name: FieldName;
  label: string;
  type?: string;
  placeholder: string;
  error?: string;
  autoComplete?: string;
  as?: "input" | "textarea";
  rows?: number;
}) {
  const id = useId();
  const errorId = `${id}-error`;
  const shared = {
    id,
    name,
    placeholder,
    "aria-invalid": error ? true : undefined,
    "aria-describedby": error ? errorId : undefined,
    className: `${FIELD} ${
      error ? "border-[#c4756a]" : "border-hair-strong"
    }`,
  };

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="eyebrow">
        {label}
      </label>

      {as === "textarea" ? (
        <textarea {...shared} rows={rows ?? 6} required className={`${shared.className} resize-none`} />
      ) : (
        <input {...shared} type={type} autoComplete={autoComplete} required />
      )}

      {/* Reserved row so the layout does not jump when an error appears. */}
      <p
        id={errorId}
        role={error ? "alert" : undefined}
        className={`min-h-4 text-xs text-[#c4756a] ${error ? "" : "invisible"}`}
      >
        {error ?? "placeholder"}
      </p>
    </div>
  );
}

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [errors, setErrors] = useState<Errors>({});
  const reduce = useReducedMotion();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);
    const values = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      message: String(data.get("message") ?? ""),
    };

    const found = validate(values);
    setErrors(found);

    if (Object.keys(found).length > 0) {
      // Move focus to the first invalid field for keyboard and screen-reader users.
      const first = (Object.keys(found) as FieldName[])[0];
      form.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      toast.error(
        "Le formulaire n’est pas encore configuré. Écrivez-moi directement par email.",
      );
      return;
    }

    setStatus("sending");

    try {
      await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current!,
        PUBLIC_KEY,
      );
      formRef.current?.reset();
      toast.success("Message envoyé. Je vous réponds sous 48 h.");
      setStatus("sent");
    } catch (error) {
      console.error("EmailJS:", error);
      toast.error("L'envoi a échoué. Réessayez ou écrivez-moi par email.");
      setStatus("idle");
    }
  }

  const sending = status === "sending";

  return (
    <Section id="contact">
      <SectionHeading
        index="05"
        label="Contact"
        title={
          <>
            Parlons de votre <span className="italic">projet.</span>
          </>
        }
        description="Vous recrutez un développeur fullstack à Dakar ou en remote ? Écrivez-moi : je réponds sous 48 h."
      />

      <div className="mt-14 grid grid-cols-1 gap-12 lg:mt-16 lg:grid-cols-12 lg:gap-16">
        {/* ---- Form ---- */}
        <div className="lg:col-span-7">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            /* Native bubbles are replaced by the inline messages below. */
            noValidate
            className="surface p-6 sm:p-9"
          >
            <div className="grid gap-x-8 sm:grid-cols-2">
              <Field
                name="name"
                label="Nom complet"
                placeholder="Votre nom"
                autoComplete="name"
                error={errors.name}
              />
              <Field
                name="email"
                label="Email"
                type="email"
                placeholder="vous@exemple.com"
                autoComplete="email"
                error={errors.email}
              />
            </div>

            <div className="mt-4">
              <Field
                name="message"
                label="Message"
                as="textarea"
                placeholder="Le poste, le projet, les délais…"
                error={errors.message}
              />
            </div>

            <div className="mt-2">
              <button
                type="submit"
                disabled={sending}
                className="group flex w-full items-center justify-center gap-3 border border-bone bg-bone px-8 py-4 text-sm font-medium tracking-tight text-ink transition-colors duration-300 hover:border-white hover:bg-white disabled:cursor-not-allowed disabled:opacity-70"
              >
                {sending ? (
                  <>
                    <span
                      aria-hidden="true"
                      className="h-3.5 w-3.5 animate-spin rounded-full border border-ink/30 border-t-ink"
                    />
                    Envoi en cours…
                  </>
                ) : (
                  <>
                    Envoyer le message
                    <svg
                      viewBox="0 0 16 16"
                      fill="none"
                      aria-hidden="true"
                      className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
                    >
                      <path
                        d="M3 8h10M9 4l4 4-4 4"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </>
                )}
              </button>
            </div>

            {/* Confirmation lives in the DOM permanently so screen readers
                announce the transition instead of only showing it visually. */}
            <p role="status" aria-live="polite" className="mt-5 text-sm">
              {status === "sent" ? (
                <motion.span
                  initial={reduce ? false : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  className="inline-flex items-center gap-2 text-bone"
                >
                  <span aria-hidden="true" className="h-px w-4 bg-warm" />
                  Merci — votre message est bien parti.
                </motion.span>
              ) : null}
            </p>
          </form>
        </div>

        {/* ---- Methods ---- */}
        <div className="lg:col-span-5">
          <p className="eyebrow mb-6">Ou directement</p>

          <ul className="border-t border-hair">
            {METHODS.map((method) => (
              <MethodRow key={method.key} method={method} />
            ))}
          </ul>

          <div className="mt-10 border border-hair p-6">
            <p className="text-sm leading-relaxed text-ash">
              Basé à {profile.location}, je travaille en remote avec des équipes
              partout dans le monde. Réponse sous 48 h, toujours.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}