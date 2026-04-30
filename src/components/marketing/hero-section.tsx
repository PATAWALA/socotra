import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Image de fond */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero/image1.jpg"
          alt="Flotte de camions SOCOTRA"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
      </div>

      {/* Contenu */}
      <div className="relative z-10 w-full">
        <div className="container mx-auto px-6 lg:px-12">
          
          {/* Badge - plus bas */}
          <div className="inline-block bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-8">
            Road Freight & Logistics
          </div>

          {/* Titre */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-none mb-6 max-w-3xl">
            Le transport,
            <br />
            <span className="text-green-400">c&apos;est notre affaire</span>
          </h1>

          {/* Description */}
          <p className="text-lg text-gray-300 max-w-xl mb-10 leading-relaxed">
            Leader du transport routier en Côte d&apos;Ivoire. 
            Une flotte de 200+ tracteurs et 160 collaborateurs 
            dans 7 pays d&apos;Afrique de l&apos;Ouest.
          </p>

          {/* Boutons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link
              href="/quote"
              className="group inline-flex items-center justify-center px-8 py-4 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-500 transition-all text-base"
            >
              Demander un devis
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-8 py-4 text-white font-semibold rounded-xl hover:bg-white/5 transition-colors text-base border border-white/20"
            >
              Nos services
            </Link>
          </div>

          {/* Récompenses */}
          <p className="text-sm text-gray-400">
            Grand Prix des Transports d&apos;Afrique de l&apos;Ouest 2017 • 
            Prix d&apos;Excellence 2015 & 2017
          </p>

        </div>
      </div>
    </section>
  );
}