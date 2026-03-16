import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const TO_EMAIL = process.env.CONTACT_EMAIL ?? "peakelectricalsac@gmail.com";
const FROM_EMAIL =
  process.env.FROM_EMAIL ?? "Peak Electrical <onboarding@resend.dev>";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

function buildEmailHtml(body: {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  preferredDate?: string;
  services: string[];
  message?: string;
  newsletterSignup: boolean;
}): string {
  const servicesList =
    body.services.length > 0
      ? body.services.join(", ")
      : "Not specified";
  return `
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> ${body.firstName} ${body.lastName}</p>
    <p><strong>Email:</strong> <a href="mailto:${body.email}">${body.email}</a></p>
    <p><strong>Phone:</strong> ${body.phone || "Not provided"}</p>
    <p><strong>Preferred date:</strong> ${body.preferredDate || "Not specified"}</p>
    <p><strong>Services Interested In:</strong> ${servicesList}</p>
    ${body.message ? `<p><strong>Message:</strong></p><p>${body.message.replace(/\n/g, "<br>")}</p>` : ""}
    <p><strong>Newsletter signup:</strong> ${body.newsletterSignup ? "Yes" : "No"}</p>
  `;
}

function buildAutoReplyHtml(firstName: string): string {
  return `
    <h2>Thanks for Reaching Out!</h2>
    <p>Hi ${firstName || "there"},</p>
    <p>We received your message and will get back to you within one business day.</p>
    <p>For urgent electrical needs, call us directly at <a href="tel:+19165729541">(916) 572-9541</a>.</p>
    <p>— Peak Electrical Contractors Inc.</p>
  `;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const {
      firstName,
      lastName,
      email,
      phone,
      preferredDate,
      services = [],
      message,
      newsletterSignup = false,
    } = body;

    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY || !resend) {
      console.error("RESEND_API_KEY is not configured");
      return NextResponse.json(
        { error: "Email service is not configured" },
        { status: 500 }
      );
    }

    const safeServices = Array.isArray(services)
      ? services.filter((s: unknown) => typeof s === "string")
      : [];

    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      replyTo: email,
      subject: `Contact Form: ${firstName || ""} ${lastName || ""} from ${email}`.trim(),
      html: buildEmailHtml({
        firstName: String(firstName ?? ""),
        lastName: String(lastName ?? ""),
        email,
        phone: phone ? String(phone) : undefined,
        preferredDate: preferredDate ? String(preferredDate) : undefined,
        services: safeServices,
        message: message ? String(message) : undefined,
        newsletterSignup: Boolean(newsletterSignup),
      }),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send message. Please try calling us." },
        { status: 500 }
      );
    }

    // Auto-reply to the person who submitted
    const { error: autoReplyError } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [email],
      subject: "We received your message — Peak Electrical Contractors",
      html: buildAutoReplyHtml(String(firstName ?? "")),
    });

    if (autoReplyError) {
      console.error("Auto-reply error:", autoReplyError);
      // Don't fail the request — the main notification was sent
    }

    return NextResponse.json(
      { success: true, message: "Form submission received" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}
