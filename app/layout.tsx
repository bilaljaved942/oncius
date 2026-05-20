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
  title: "Oncius — AI-Powered Emergent Tech & Custom Solutions",
  description: "Oncius specializes in AI, ML, emerging technologies, and elite custom software development. We build partnerships that drive real outcomes and transform intelligent ideas into scalable business solutions.",
  metadataBase: new URL("https://devdaa.com"), // Use appropriate base
  openGraph: {
    title: "Oncius — AI-Powered Emergent Tech & Custom Solutions",
    description: "Oncius specializes in AI, ML, emerging technologies, and elite custom software development. We build partnerships that drive real outcomes and transform intelligent ideas into scalable business solutions.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Oncius — AI-Powered Emergent Tech & Custom Solutions",
    description: "Oncius specializes in AI, ML, emerging technologies, and elite custom software development. We build partnerships that drive real outcomes and transform intelligent ideas into scalable business solutions.",
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
