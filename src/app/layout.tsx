import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { Navbar } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SOCOTRA - Leader du Transport Routier en Afrique de l'Ouest",
  description: "Transport routier, logistique et stockage. 200+ tracteurs, 160 collaborateurs, 7 pays. Demandez un devis ou investissez dans le leader du transport africain.",
  keywords: "SOCOTRA, transport, logistique, Côte d'Ivoire, Afrique, camions, fret, investissement",
  openGraph: {
    title: "SOCOTRA - Transport & Logistique",
    description: "Leader du transport routier en Afrique de l'Ouest. Flotte de 200+ tracteurs, 25 ans d'expertise.",
    url: "https://socotra.vercel.app",
    siteName: "SOCOTRA",
    images: [
      {
        url: "/images/hero/logo.jpg",
        width: 400,
        height: 400,
        alt: "Logo SOCOTRA",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "SOCOTRA - Transport & Logistique",
    description: "Leader du transport routier en Afrique de l'Ouest.",
    images: ["/images/hero/logo.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}