import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2,Truck} from "lucide-react";

export const metadata: Metadata = {
  title: "Nos Services - SOCOTRA | Transport et Logistique",
  description: "Transport agricole, pétrolier, ciment, conteneurs, logistique et stockage. Des solutions complètes en Afrique de l'Ouest.",
};

const services = [
  {
    id: "agricultural",
    title: "Transport Agricole",
    tagline: "Vos matières premières transportées en toute sécurité",
    image: "/images/hero/cacao.jpg",
    description: "Nous assurons le transport de vos matières premières agricoles (cacao, café, coton, anacarde) depuis les zones de production vers les ports d'exportation et les usines de transformation.",
    procedure: [
      { step: "1", title: "Prise en charge", description: "Nos camions viennent charger directement sur votre site de production ou dans vos entrepôts." },
      { step: "2", title: "Transport sécurisé", description: "Acheminement avec suivi GPS en temps réel et assurance tous risques." },
      { step: "3", title: "Livraison", description: "Déchargement au port d'Abidjan ou dans les usines de transformation selon vos besoins." },
    ],
    features: ["Transport de cacao et café", "Transport de coton", "Transport d'anacarde", "Transport de produits vivriers"],
  },
  {
    id: "petroleum",
    title: "Transport Pétrolier",
    tagline: "Hydrocarbures transportés selon les normes internationales",
    image: "/images/hero/carbure.jpg",
    description: "Notre flotte dédiée au transport pétrolier respecte les normes de sécurité internationales ADR. Nous transportons vos produits pétroliers avec des équipements spécialisés.",
    procedure: [
      { step: "1", title: "Planification", description: "Étude de votre besoin et mise en place d'un plan de transport adapté au type d'hydrocarbure." },
      { step: "2", title: "Chargement", description: "Chargement sécurisé selon les protocoles ADR par notre personnel certifié." },
      { step: "3", title: "Livraison", description: "Acheminement vers vos sites avec traçabilité complète et respect des délais." },
    ],
    features: ["Transport de carburants", "Transport de gaz", "Transport de produits dérivés", "Respect des normes ADR"],
  },
  {
    id: "cement",
    title: "Transport de Ciment",
    tagline: "Solutions logistiques pour l'industrie de la construction",
    image: "/images/hero/ciment.jpg",
    description: "Nous proposons des solutions complètes pour le transport de ciment, en vrac ou en sacs. Notre flotte adaptée répond aux besoins des plus grands chantiers.",
    procedure: [
      { step: "1", title: "Évaluation", description: "Analyse de vos volumes et de la fréquence de livraison souhaitée." },
      { step: "2", title: "Transport", description: "Acheminement par camions spécialisés avec protection contre l'humidité." },
      { step: "3", title: "Déchargement", description: "Livraison directe sur vos chantiers ou dans vos centres de distribution." },
    ],
    features: ["Transport de ciment en vrac", "Transport de ciment en sacs", "Chargements complets", "Délais optimisés"],
  },
  {
    id: "containers",
    title: "Transport Conteneurs",
    tagline: "Acheminement portuaire et régional",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80",
    description: "Depuis le port d'Abidjan, nous acheminons vos conteneurs vers toutes les destinations en Côte d'Ivoire et dans la sous-région. Service incluant la gestion des formalités douanières.",
    procedure: [
      { step: "1", title: "Prise en charge portuaire", description: "Récupération de vos conteneurs directement au port d'Abidjan." },
      { step: "2", title: "Dédouanement", description: "Gestion des formalités douanières par notre équipe dédiée." },
      { step: "3", title: "Livraison finale", description: "Acheminement porte à porte avec suivi en temps réel." },
    ],
    features: ["Transport depuis le port d'Abidjan", "Dédouanement inclus", "Livraison porte à porte", "Suivi en temps réel"],
  },
  {
    id: "logistics",
    title: "Logistique & Stockage",
    tagline: "Solutions de stockage et gestion de votre chaîne logistique",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
    description: "Nous mettons à votre disposition des entrepôts sécurisés pour le stockage temporaire. Notre service de cross-docking optimise vos flux et réduit vos délais de livraison.",
    procedure: [
      { step: "1", title: "Réception", description: "Réception de vos marchandises dans nos entrepôts sécurisés." },
      { step: "2", title: "Stockage", description: "Gestion des stocks avec traçabilité complète et sécurité 24/7." },
      { step: "3", title: "Expédition", description: "Préparation de commandes et expédition selon vos instructions." },
    ],
    features: ["Stockage sécurisé", "Gestion des stocks", "Cross-docking", "Préparation de commandes"],
  },
  {
    id: "international",
    title: "Transport International",
    tagline: "Couverture de toute la sous-région ouest-africaine",
    image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=800&q=80",
    description: "Notre réseau de partenaires et notre présence dans 7 pays nous permettent d'offrir des solutions de transport international fiables pour toute la sous-région.",
    procedure: [
      { step: "1", title: "Planification", description: "Étude de votre itinéraire et des formalités transfrontalières." },
      { step: "2", title: "Transport", description: "Acheminement avec gestion des passages aux frontières." },
      { step: "3", title: "Livraison", description: "Remise de vos marchandises à destination dans les délais convenus." },
    ],
    features: ["Burkina Faso", "Mali", "Guinée", "Sénégal", "Ghana", "Bénin"],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-green-900 text-white py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <p className="text-green-300 font-medium text-sm tracking-widest uppercase mb-4">Nos Services</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Des solutions logistiques complètes
          </h1>
          <p className="text-xl text-green-100 max-w-2xl">
            Du transport agricole à la logistique internationale, SOCOTRA vous accompagne 
            à chaque étape de votre chaîne d&apos;approvisionnement.
          </p>
        </div>
      </section>

      {/* Liste des services avec ancres */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto space-y-24">
            {services.map((service, index) => (
              <div key={index} id={service.id} className="scroll-mt-24">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* Image */}
                  <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden">
                    {service.image.startsWith("/") ? (
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>

                  {/* Contenu */}
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-3">
                      {service.title}
                    </h2>
                    <p className="text-green-600 font-medium mb-4">
                      {service.tagline}
                    </p>
                    <p className="text-gray-500 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Caractéristiques */}
                    <div className="grid grid-cols-2 gap-2 mb-8">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    <Link
                      href="/quote"
                      className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-500 transition-colors"
                    >
                      Demander un devis
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </div>
                </div>

                {/* Procédure */}
                <div className="mt-12 bg-gray-50 rounded-2xl p-8 lg:p-10">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <Truck className="h-5 w-5 text-green-600" />
                    Comment ça marche ?
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {service.procedure.map((step, stepIndex) => (
                      <div key={stepIndex} className="relative">
                        <div className="flex items-center gap-4 mb-3">
                          <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                            {step.step}
                          </div>
                          <div className="h-px bg-green-200 flex-1 hidden md:block" />
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-2">{step.title}</h4>
                        <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-green-900 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold text-white mb-4">
            Un service vous intéresse ?
          </h2>
          <p className="text-green-200 mb-6">
            Demandez un devis gratuit et recevez une réponse sous 24 heures.
          </p>
          <Link
            href="/quote"
            className="inline-flex items-center px-8 py-4 bg-white text-green-900 font-semibold rounded-lg hover:bg-green-50 transition-colors"
          >
            Demander un devis
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  );
}