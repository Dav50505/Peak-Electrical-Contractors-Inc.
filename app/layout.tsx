import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import { Analytics } from "@/components/Analytics";
import { RecaptchaProvider } from "@/components/RecaptchaProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyBar } from "@/components/sections/MobileStickyBar";
import { localBusinessSchema } from "@/lib/schema";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://peakelectricalsac.com"
  ),
  title: "Peak Electrical Contractors | Sacramento Electricians",
  description:
    "Licensed, bonded Sacramento electricians. Panel upgrades, EV chargers, rewiring, SMUD rebates. Free estimates.",
  openGraph: {
    type: "website",
    siteName: "Peak Electrical Contractors",
  },
  twitter: {
    card: "summary_large_image",
    site: "@peakelectricalsac",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema()),
          }}
        />
      </head>
      <body
        className={`${montserrat.variable} ${inter.variable} font-body antialiased`}
      >
        <RecaptchaProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <MobileStickyBar />
          <Analytics />
        </RecaptchaProvider>
      </body>
    </html>
  );
}
