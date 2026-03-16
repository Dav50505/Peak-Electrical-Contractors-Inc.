import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import { Analytics } from "@/components/Analytics";
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${inter.variable} font-body antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
