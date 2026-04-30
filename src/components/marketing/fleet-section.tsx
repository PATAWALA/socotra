import { OptimizedImage } from "@/components/shared/optimized-image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const images = [
  {
    src: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80",
    alt: "Camion SOCOTRA"
  },
  {
    src: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=600&q=80",
    alt: "Flotte SOCOTRA"
  },
  {
    src: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&q=80",
    alt: "Transport SOCOTRA"
  },
];

export function FleetSection() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-16 items-end mb-16">
          <div>
            <p className="text-green-600 font-medium text-sm tracking-widest uppercase mb-4">
              Notre Flotte
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Plus de 200 véhicules à votre service
            </h2>
          </div>
          <div className="hidden lg:block">
            <p className="text-lg text-gray-500">
              Une flotte moderne, régulièrement entretenue et équipée de systèmes 
              de géolocalisation pour un suivi en temps réel.
            </p>
          </div>
        </div>

        {/* Images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div key={index} className="relative aspect-[4/3] rounded-2xl overflow-hidden group">
              <OptimizedImage
                src={image.src}
                alt={image.alt}
                fill
                className="group-hover:scale-105 transition-transform duration-700"
                containerClassName="w-full h-full"
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/quote"
            className="inline-flex items-center text-green-700 font-semibold hover:text-green-500 transition-colors"
          >
            Demander un devis pour votre transport
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}