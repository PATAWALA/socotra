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
  description: "Votre partenaire de confiance pour le transport routier de marchandises en Côte d'Ivoire et dans toute l'Afrique de l'Ouest. Flotte de 200+ tracteurs, 25 ans d'expérience.",
  keywords: "transport, logistique, Afrique, Côte d'Ivoire, SOCOTRA, camions, fret",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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