"use client";

import { useState } from "react";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { PHONE_HREF, PHONE_NUMBER } from "@/lib/constants";

interface InlineContactFormProps {
  title?: string;
  subtitle?: string;
  background?: "white" | "light";
}

export function InlineContactForm({
  title = "Request Your Free Estimate",
  subtitle = "Tell us a bit about your project and we'll get back to you within one business day.",
  background = "white",
}: InlineContactFormProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
      } else {
        const data = await res.json();
        setErrorMessage(
          typeof data.error === "string"
            ? data.error
            : "Something went wrong. Please try again."
        );
        setStatus("error");
      }
    } catch {
      setErrorMessage(
        `Unable to send your request. Please call us directly at ${PHONE_NUMBER}.`
      );
      setStatus("error");
    }
  };

  return (
    <Section background={background} id="estimate">
      <div className="mx-auto max-w-2xl">
        <div className="mb-10 text-center">
          <SectionLabel>Free Estimate</SectionLabel>
          <h2 className="font-heading text-2xl font-bold text-brand-blue md:text-3xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-3 text-base text-brand-gray">{subtitle}</p>
          )}
        </div>

        {status === "success" ? (
          <div className="rounded-sm border border-green-200 bg-green-50 p-8 text-center">
            <div className="mb-4 flex justify-center">
              <svg
                className="h-12 w-12 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="font-heading text-lg font-bold text-brand-blue">
              We received your request!
            </h3>
            <p className="mt-2 text-brand-gray">
              We&apos;ll be in touch within one business day. For urgent needs,
              call us at{" "}
              <a
                href={PHONE_HREF}
                className="font-semibold text-brand-accent hover:underline"
              >
                {PHONE_NUMBER}
              </a>
              .
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="firstName"
                  className="mb-1.5 block text-sm font-semibold text-brand-blue"
                >
                  First Name{" "}
                  <span className="text-brand-accent" aria-hidden="true">
                    *
                  </span>
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  required
                  autoComplete="given-name"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Jane"
                  className="block w-full rounded-sm border border-gray-300 bg-white px-4 py-2.5 text-sm text-brand-dark placeholder:text-gray-400 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/10"
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="mb-1.5 block text-sm font-semibold text-brand-blue"
                >
                  Last Name{" "}
                  <span className="text-brand-accent" aria-hidden="true">
                    *
                  </span>
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  required
                  autoComplete="family-name"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Smith"
                  className="block w-full rounded-sm border border-gray-300 bg-white px-4 py-2.5 text-sm text-brand-dark placeholder:text-gray-400 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/10"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-1.5 block text-sm font-semibold text-brand-blue"
              >
                Email Address{" "}
                <span className="text-brand-accent" aria-hidden="true">
                  *
                </span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="jane@example.com"
                className="block w-full rounded-sm border border-gray-300 bg-white px-4 py-2.5 text-sm text-brand-dark placeholder:text-gray-400 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/10"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="mb-1.5 block text-sm font-semibold text-brand-blue"
              >
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="(916) 555-0123"
                className="block w-full rounded-sm border border-gray-300 bg-white px-4 py-2.5 text-sm text-brand-dark placeholder:text-gray-400 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/10"
              />
            </div>

            {status === "error" && (
              <p
                role="alert"
                className="rounded-sm border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
              >
                {errorMessage}
              </p>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full rounded-sm bg-brand-accent px-8 py-3.5 font-heading text-sm font-bold text-brand-dark transition-colors hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "loading" ? "Sending…" : "Request Your Free Estimate"}
            </button>

            <p className="text-center text-xs text-brand-gray">
              No spam. We&apos;ll only use your info to follow up on your
              estimate request.
            </p>
          </form>
        )}
      </div>
    </Section>
  );
}
