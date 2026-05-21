import type { Metadata } from "next";
import { Space_Grotesk, Instrument_Serif } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Oncius — Elite Computer Vision & Visual AI Engineering Studio",
  description: "Oncius specializes in high-performance computer vision, custom model training, real-time video analytics, and edge AI optimization for deep tech startups and enterprise teams.",
  metadataBase: new URL("https://oncius.com"), // Updated base domain
  openGraph: {
    title: "Oncius — Elite Computer Vision & Visual AI Engineering Studio",
    description: "Oncius specializes in high-performance computer vision, custom model training, real-time video analytics, and edge AI optimization for deep tech startups and enterprise teams.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Oncius — Elite Computer Vision & Visual AI Engineering Studio",
    description: "Oncius specializes in high-performance computer vision, custom model training, real-time video analytics, and edge AI optimization for deep tech startups and enterprise teams.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${instrumentSerif.variable}`}>
      <body style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
