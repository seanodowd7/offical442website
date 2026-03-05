"use client";

import { FormEvent, useState } from "react";

// ─────────────────────────────────────────────────────────────────────────────
// TO ACTIVATE THE FORM:
//   1. Go to https://web3forms.com/#start
//   2. Enter fourfourtwo.sales@gmail.com and click "Create Access Key"
//   3. Check your Gmail inbox and copy the access key
//   4. Replace YOUR_WEB3FORMS_ACCESS_KEY below with that key
// ─────────────────────────────────────────────────────────────────────────────
const WEB3FORMS_ACCESS_KEY = "2aac087d-2e89-4630-9372-cb7dc1f4928f";

const fields = [
  { id: "first_name", label: "First Name", type: "text", placeholder: "John", half: true, required: true },
  { id: "last_name", label: "Last Name", type: "text", placeholder: "Smith", half: true, required: true },
  { id: "email", label: "Email Address", type: "email", placeholder: "john@yourbar.com", half: false, required: true },
  { id: "bar_name", label: "Bar / Restaurant Name", type: "text", placeholder: "The Anchor Bar", half: false, required: false },
  { id: "city", label: "City", type: "text", placeholder: "Chicago, IL", half: false, required: false },
] as const;

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("subject", "New Inquiry — 4-4-2 Marketing Website");
    formData.append("from_name", "4-4-2 Marketing Contact Form");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="border border-white/[0.08] bg-white/[0.02] p-10 text-center">
        <p className="mb-3 font-display text-2xl font-bold uppercase text-[#F2F2EE]">
          Message Sent!
        </p>
        <p className="text-sm leading-relaxed text-[#8896B0]">
          We&apos;ll be in touch within 24 hours to schedule your free strategy call.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* Honeypot */}
      <input type="checkbox" name="botcheck" className="hidden" aria-hidden="true" />

      <div className="space-y-6">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {fields
            .filter((f) => f.half)
            .map(({ id, label, type, placeholder, required }) => (
              <div key={id}>
                <label htmlFor={id} className="mb-2 block text-xs uppercase tracking-[0.2em] text-[#8896B0]">
                  {label}
                </label>
                <input
                  type={type}
                  id={id}
                  name={id}
                  placeholder={placeholder}
                  required={required}
                  className="form-field"
                />
              </div>
            ))}
        </div>

        {fields
          .filter((f) => !f.half)
          .map(({ id, label, type, placeholder, required }) => (
            <div key={id}>
              <label htmlFor={id} className="mb-2 block text-xs uppercase tracking-[0.2em] text-[#8896B0]">
                {label}
              </label>
              <input
                type={type}
                id={id}
                name={id}
                placeholder={placeholder}
                required={required}
                className="form-field"
              />
            </div>
          ))}

        <div>
          <label htmlFor="message" className="mb-2 block text-xs uppercase tracking-[0.2em] text-[#8896B0]">
            Tell Us About Your Bar
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className="form-field resize-none"
            placeholder="How many screens do you have? Are you already showing soccer? What's your biggest challenge?"
          />
        </div>

        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full bg-brand-blue py-4 text-sm uppercase tracking-[0.15em] text-white transition-colors hover:bg-[#3a74b0] disabled:opacity-60"
        >
          {status === "sending" ? "Sending..." : "Send Message →"}
        </button>

        {status === "error" && (
          <p className="text-center text-sm text-red-400">
            Something went wrong. Please email us directly at{" "}
            <a href="mailto:fourfourtwo.sales@gmail.com" className="underline">
              fourfourtwo.sales@gmail.com
            </a>
          </p>
        )}
      </div>
    </form>
  );
}
