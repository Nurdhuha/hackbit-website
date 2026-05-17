import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { studioData } from "@/config/studio-data";
import CursorGlow from "@/components/ui/CursorGlow";
import BottomBlur from "@/components/ui/BottomBlur";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${studioData.global.brandName} - Custom Business Automation`,
  description: "Otomatiskan operasional bisnis Anda dengan AI dan integrasi cerdas. Kami membantu mengubah proses manual berulang menjadi sistem 24/7 yang efisien.",
  keywords: ["business automation", "jasa automasi bisnis", "ai automation", "hackbit studio", "integrasi sistem", "otomatisasi operasional"],
  authors: [{ name: "Hackbit Studio" }],
  openGraph: {
    title: `${studioData.global.brandName} - Solusi Business Automation`,
    description: "Otomatiskan operasional bisnis Anda dengan AI dan integrasi cerdas. Kami membantu mengubah proses manual berulang menjadi sistem 24/7 yang efisien.",
    url: "https://hackbitstudio.com/",
    siteName: studioData.global.brandName,
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${studioData.global.brandName} - Custom Business Automation`,
    description: "Otomatiskan operasional bisnis Anda dengan AI dan integrasi cerdas. Kami membantu mengubah proses manual berulang menjadi sistem 24/7 yang efisien.",
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
    url: "https://hackbitstudio.com",
    telephone: studioData.global.whatsappNumber,
    description: "Otomatiskan operasional bisnis Anda dengan AI dan integrasi cerdas.",
  };

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          dangerouslySetInnerHTML={{
            __html: `if('scrollRestoration' in history) history.scrollRestoration = 'manual'; if(location.hash) history.replaceState(null,'',location.pathname); window.scrollTo(0,0);`,
          }}
        />
        <CursorGlow />
        <BottomBlur />
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
