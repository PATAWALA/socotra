import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Transport Agricole",
    description: "Cacao, café, coton, anacarde vers les ports et usines de transformation.",
    image: "/images/hero/cacao.jpg",
    local: true,
    href: "/quote",
  },
  {
    title: "Transport Pétrolier",
    description: "Hydrocarbures avec équipements spécialisés et normes de sécurité strictes.",
    image: "/images/hero/carbure.jpg",
    local: true,
    href: "/quote",
  },
  {
    title: "Transport de Ciment",
    description: "Solutions pour l'industrie de la construction, vrac et sacs.",
    image: "/images/hero/ciment.jpg",
    local: true,
    href: "/quote",
  },
  {
    title: "Transport Conteneurs",
    description: "Acheminement portuaire et livraison dans toute la sous-région.",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&q=80",
    local: false,
    href: "/quote",
  },
  {
    title: "Logistique & Stockage",
    description: "Entrepôts sécurisés, cross-docking et gestion des stocks.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80",
    local: false,
    href: "/quote",
  },
  {
    title: "Transport International",
    description: "Couverture de 7 pays d'Afrique de l'Ouest.",
    image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=600&q=80",
    local: false,
    href: "/quote",
  },
];

export function ServicesSection() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16">
          <p className="text-green-600 font-medium text-sm tracking-widest uppercase mb-4">
            Nos Services
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 max-w-2xl">
            Des solutions logistiques pour chaque besoin
          </h2>
          <p className="text-lg text-gray-500 max-w-xl">
            25 ans d&apos;expertise au service des entreprises africaines.
          </p>
        </div>

        {/* Grille */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.href}
              className="group relative h-80 rounded-2xl overflow-hidden"
            >
              {/* Image */}
              {service.local ? (
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              )}

              {/* Dégradé pour lisibilité */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              {/* Texte sur l'image */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-lg font-semibold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-200 leading-relaxed mb-3">
                  {service.description}
                </p>
                <span className="inline-flex items-center text-green-400 font-medium text-sm group-hover:gap-2 transition-all">
                  En savoir plus
                  <ArrowRight className="ml-1 h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}