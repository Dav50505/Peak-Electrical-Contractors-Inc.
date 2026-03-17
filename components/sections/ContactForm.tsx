"use client";

import { useState } from "react";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SERVICE_OPTIONS } from "@/lib/constants";

export function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    preferredDate: "",
    services: [] as string[],
    message: "",
    newsletterSignup: false,
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    if (type === "checkbox" && name === "newsletterSignup") {
      setFormData((prev) => ({ ...prev, newsletterSignup: checked }));
      return;
    }

    if (type === "checkbox" && name === "services") {
      const serviceValue = (e.target as HTMLInputElement).value;
      setFormData((prev) => ({
        ...prev,
        services: checked
          ? [...prev.services, serviceValue]
          : prev.services.filter((s) => s !== serviceValue),
      }));
      return;
    }

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
        "Unable to send your message. Please call us directly at (916) 584-2124."
      );
      setStatus("error");
    }
  };

  const inputClasses =
    "block w-full rounded-sm border border-gray-300 bg-white px-4 py-2.5 text-sm text-brand-dark placeholder:text-gray-400 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/10";
  const labelClasses = "mb-1.5 block text-sm font-semibold text-brand-blue";

  return (
    <Section background="white" id="contact-form">
      <div className="mx-auto max-w-2xl">
        <div className="mb-10 text-center">
          <SectionLabel>Get in Touch</SectionLabel>
          <h2 className="font-heading text-2xl font-bold text-brand-blue md:text-3xl">
            Request a Free Estimate
          </h2>
          <p className="mt-3 text-base text-brand-gray">
            Tell us about your project and we&apos;ll get back to you within one business day.
          </p>
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
              Thank you! We received your message.
            </h3>
            <p className="mt-2 text-brand-gray">
              We&apos;ll be in touch within one business day. For urgent needs, call us at{" "}
              <a
                href="tel:+19165842124"
                className="font-semibold text-brand-accent hover:underline"
              >
                (916) 584-2124
              </a>
              .
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="firstName" className={labelClasses}>
                  First Name <span className="text-brand-accent" aria-hidden="true">*</span>
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
                  className={inputClasses}
                />
              </div>
              <div>
                <label htmlFor="lastName" className={labelClasses}>
                  Last Name <span className="text-brand-accent" aria-hidden="true">*</span>
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
                  className={inputClasses}
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className={labelClasses}>
                Email Address <span className="text-brand-accent" aria-hidden="true">*</span>
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
                className={inputClasses}
              />
            </div>

            <div>
              <label htmlFor="phone" className={labelClasses}>
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
                className={inputClasses}
              />
            </div>

            <div>
              <label htmlFor="preferredDate" className={labelClasses}>
                Preferred date for estimate (optional)
              </label>
              <input
                id="preferredDate"
                name="preferredDate"
                type="date"
                value={formData.preferredDate}
                onChange={handleChange}
                onFocus={(e) => {
                  e.target.showPicker?.();
                }}
                className={inputClasses}
              />
            </div>

            <div>
              <span className={labelClasses}>Service Interested In</span>
              <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {SERVICE_OPTIONS.map((service) => (
                  <label
                    key={service}
                    className="flex cursor-pointer items-center gap-2 text-sm text-brand-dark"
                  >
                    <input
                      type="checkbox"
                      name="services"
                      value={service}
                      checked={formData.services.includes(service)}
                      onChange={handleChange}
                      className="h-4 w-4 rounded border-gray-300 text-brand-blue focus:ring-brand-blue"
                    />
                    {service}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label htmlFor="message" className={labelClasses}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project..."
                className={`${inputClasses} resize-y`}
              />
            </div>

            <div>
              <label className="flex cursor-pointer items-start gap-2 text-sm text-brand-dark">
                <input
                  type="checkbox"
                  name="newsletterSignup"
                  checked={formData.newsletterSignup}
                  onChange={handleChange}
                  className="mt-1 h-4 w-4 rounded border-gray-300 text-brand-blue focus:ring-brand-blue"
                />
                <span>
                  Keep me updated on tips, rebates, and special offers from Peak Electrical
                  (optional)
                </span>
              </label>
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
              {status === "loading" ? "Sending…" : "Send Message"}
            </button>
          </form>
        )}
      </div>
    </Section>
  );
}
