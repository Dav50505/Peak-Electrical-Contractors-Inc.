import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy | Peak Electrical Contractors",
  description:
    "Privacy policy for Peak Electrical Contractors. Learn how we collect, use, and protect your information when you use our website or contact us.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        headline="Privacy Policy"
        subtext="How we collect, use, and protect your information."
      />

      <Section background="white">
        <div className="mx-auto max-w-3xl prose prose-brand">
          <p className="text-sm text-brand-gray">
            Last updated: March 2025
          </p>

          <h2 id="information-we-collect" className="font-heading text-xl font-bold text-brand-blue mt-8">
            Information We Collect
          </h2>
          <p className="text-brand-gray">
            When you use our website or contact us through our forms, we may collect:
          </p>
          <ul className="list-disc pl-6 text-brand-gray space-y-1">
            <li>Name, email address, and phone number</li>
            <li>Service interests and project details you provide in messages</li>
            <li>Newsletter signup preference (if you opt in)</li>
            <li>Automatically collected data such as IP address, browser type, and pages visited (via analytics)</li>
          </ul>

          <h2 id="how-we-use-it" className="font-heading text-xl font-bold text-brand-blue mt-8">
            How We Use Your Information
          </h2>
          <p className="text-brand-gray">
            We use the information you provide to:
          </p>
          <ul className="list-disc pl-6 text-brand-gray space-y-1">
            <li>Respond to your estimate requests and inquiries</li>
            <li>Send you follow-up communications about your project</li>
            <li>Send occasional tips, rebate updates, and offers (only if you opted in to our newsletter)</li>
            <li>Improve our website and services based on how visitors use our site</li>
          </ul>

          <h2 id="cookies" className="font-heading text-xl font-bold text-brand-blue mt-8">
            Cookies
          </h2>
          <p className="text-brand-gray">
            We use cookies and similar technologies for:
          </p>
          <ul className="list-disc pl-6 text-brand-gray space-y-1">
            <li><strong>Analytics:</strong> Google Analytics helps us understand how visitors find and use our site. This may include cookies that track pages visited and session duration.</li>
            <li><strong>Essential functionality:</strong> Some cookies are necessary for the site to function properly.</li>
          </ul>
          <p className="text-brand-gray mt-4">
            You can control cookie preferences through your browser settings or our cookie consent banner. Disabling analytics cookies may affect our ability to improve the site but will not impact core functionality.
          </p>

          <h2 className="font-heading text-xl font-bold text-brand-blue mt-8">
            Third-Party Services
          </h2>
          <p className="text-brand-gray">
            We use the following third-party services that may collect or process your data:
          </p>
          <ul className="list-disc pl-6 text-brand-gray space-y-1">
            <li><strong>Google Analytics:</strong> Tracks site usage and performance. See{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-accent hover:underline"
              >
                Google&apos;s Privacy Policy
              </a>.
            </li>
            <li><strong>Resend:</strong> Delivers contact form submissions and transactional emails. See{" "}
              <a
                href="https://resend.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-accent hover:underline"
              >
                Resend&apos;s Privacy Policy
              </a>.
            </li>
            <li><strong>Google reCAPTCHA:</strong> Helps prevent spam on our contact forms. See{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-accent hover:underline"
              >
                Google&apos;s Privacy Policy
              </a>.
            </li>
          </ul>

          <h2 className="font-heading text-xl font-bold text-brand-blue mt-8">
            Data Sharing
          </h2>
          <p className="text-brand-gray">
            We do not sell, rent, or trade your personal information. We may share information only when necessary to provide services (e.g., with our email provider) or when required by law.
          </p>

          <h2 className="font-heading text-xl font-bold text-brand-blue mt-8">
            Your Rights
          </h2>
          <p className="text-brand-gray">
            Depending on your location, you may have the right to access, correct, or delete your personal information. California residents have additional rights under the CCPA. To exercise these rights, contact us using the information below.
          </p>

          <h2 className="font-heading text-xl font-bold text-brand-blue mt-8">
            Contact Us
          </h2>
          <p className="text-brand-gray">
            If you have questions about this privacy policy or your data, contact us at:
          </p>
          <p className="text-brand-gray mt-2">
            Peak Electrical Contractors Inc.<br />
            Email:{" "}
            <a href="mailto:peakelectricalsac@gmail.com" className="text-brand-accent hover:underline">
              peakelectricalsac@gmail.com
            </a>
            <br />
            Phone:{" "}
            <a href="tel:+19165842124" className="text-brand-accent hover:underline">
              (916) 584-2124
            </a>
          </p>
        </div>
      </Section>
    </>
  );
}
