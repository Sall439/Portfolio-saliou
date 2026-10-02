import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  // TODO: replace with the real production domain before deploying.
  metadataBase: new URL("https://saliousall.dev"),
  title: {
    default: "Saliou Sall — Développeur Fullstack à Dakar",
    template: "%s — Saliou Sall",
  },
  description:
    "Saliou Sall, développeur fullstack à Dakar, spécialisé en React, Node.js et Laravel. Je conçois et développe des applications web modernes, rapides et soignées.",
  keywords: [
    "Saliou Sall",
    "développeur fullstack",
    "développeur web Dakar",
    "React",
    "Next.js",
    "Node.js",
    "Laravel",
    "MongoDB",
    "portefeuille",
  ],
  authors: [{ name: "Saliou Sall" }],
  creator: "Saliou Sall",
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    locale: "fr_SN",
    url: "/",
    siteName: "Saliou Sall — Développeur Fullstack",
    title: "Saliou Sall — Développeur Fullstack à Dakar",
    description:
      "Développeur fullstack spécialisé en React, Node.js et Laravel. Applications web modernes, rapides et soignées.",
    // TODO: add a 1200x630 opengraph-image before sharing the link on LinkedIn.
  },
  twitter: {
    // `summary_large_image` was declared with no image attached.
    card: "summary",
    title: "Saliou Sall — Développeur Fullstack à Dakar",
    description:
      "Développeur fullstack spécialisé en React, Node.js et Laravel.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0b0b0c",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${spaceGrotesk.variable} ${instrumentSerif.variable}`}
    >
      <body className="min-h-screen antialiased">
        {/* Film grain + vignette sit above all content but ignore pointer events */}
        <div className="grain" aria-hidden="true" />
        <div className="vignette" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
