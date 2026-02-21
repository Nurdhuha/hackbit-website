import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { studioData } from "@/config/studio-data";
import CursorGlow from "@/components/ui/CursorGlow";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${studioData.global.brandName} - Landing Page Super Cepat`,
  description: studioData.hero.subheadline,
  keywords: ["landing page", "website cepat", "web developer", "hackbit studio", "jasa pembuatan website"],
  authors: [{ name: "Hackbit Studio" }],
  openGraph: {
    title: `${studioData.global.brandName} - Bikin Website Loading < 1 Detik`,
    description: studioData.hero.subheadline,
    url: "https://hackbit.studio",
    siteName: studioData.global.brandName,
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${studioData.global.brandName} - Landing Page Super Cepat`,
    description: studioData.hero.subheadline,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: studioData.global.brandName,
    url: typeof window !== "undefined" ? window.location.origin : "",
    telephone: studioData.global.whatsappNumber,
    description: studioData.hero.subheadline,
  };

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CursorGlow />
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
