import Link from "next/link";
import { TrendingUp, Users, Globe, Building2, ArrowRight } from "lucide-react";

const opportunities = [
  {
    icon: TrendingUp,
    title: "Un marché en pleine croissance",
    description: "Le transport routier est le pilier des échanges en Afrique de l'Ouest. SOCOTRA est positionné sur les corridors stratégiques reliant les pays de la sous-région.",
  },
  {
    icon: Globe,
    title: "Expansion régionale",
    description: "Avec 7 pays déjà couverts, SOCOTRA prévoit l'ouverture de nouvelles filiales en Afrique de l'Ouest d'ici 2027.",
  },
  {
    icon: Users,
    title: "Une équipe qualifiée",
    description: "160 collaborateurs formés aux standards internationaux du transport et de la logistique.",
  },
  {
    icon: Building2,
    title: "Infrastructure solide",
    description: "Un capital de 100 millions FCFA, une flotte de 200+ tracteurs, un atelier de maintenance intégré.",
  },
];

const benefits = [
  "Accès à un réseau logistique couvrant 7 pays",
  "Partenariat avec une entreprise primée et reconnue",
  "Rentabilité portée par la croissance du commerce régional",
  "Transparence grâce au système de géolocalisation",
  "Équipe dirigeante expérimentée (25+ ans d'expertise)",
  "Flotte moderne régulièrement renouvelée",
];

export function InvestSection() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Colonne gauche */}
          <div>
            <p className="text-green-600 font-medium text-sm tracking-widest uppercase mb-4">Opportunités</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Investir dans SOCOTRA
            </h2>
            <p className="text-lg text-gray-500 mb-10 leading-relaxed">
              Leader du transport routier en Côte d&apos;Ivoire, SOCOTRA offre des opportunités 
              d&apos;investissement et de partenariat stratégique pour les acteurs qui souhaitent 
              participer à la croissance du commerce en Afrique de l&apos;Ouest.
            </p>

            <div className="space-y-6">
              {opportunities.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <item.icon className="h-5 w-5 text-green-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Colonne droite - Avantages */}
          <div className="bg-green-50 rounded-2xl p-8 lg:p-10">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Avantages d&apos;un partenariat
            </h3>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm">{benefit}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-6 border-t border-green-200">
              <p className="text-sm text-gray-600 mb-4">
                Vous souhaitez en savoir plus sur les opportunités d&apos;investissement ?
              </p>
              <Link
                href="/quote"
                className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-500 transition-colors text-sm"
              >
                Nous contacter
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}