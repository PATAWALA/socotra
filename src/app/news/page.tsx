import { Metadata } from "next";
import Link from "next/link";
import { Calendar, Trophy, Users, Star, Award, Handshake } from "lucide-react";

export const metadata: Metadata = {
  title: "Actualités & Événements - SOCOTRA",
  description: "Toute l'actualité de SOCOTRA : récompenses, événements, distinctions et vie de l'entreprise.",
};

const news = [
  {
    date: "30 Novembre 2022",
    title: "Récompense des chauffeurs du mois de Novembre 2022",
    description: "Dans le cadre de la reconnaissance des mérites de ses chauffeurs poids lourd, SOCOTRA a récompensé 4 chauffeurs des flottes LHCI, SACO et CARGILL.",
    category: "Vie de l'entreprise",
    icon: Users,
    color: "bg-blue-50 text-blue-700",
  },
  {
    date: "8 Mars 2022",
    title: "Célébration de la Journée Internationale des Droits des Femmes",
    description: "SOCOTRA a célébré la JIF 2022 autour du thème : « L'égalité des sexes aujourd'hui pour un avenir durable ».",
    category: "Événement",
    icon: Handshake,
    color: "bg-pink-50 text-pink-700",
  },
  {
    date: "5 Novembre 2019",
    title: "Félicitations du Chef de l'État",
    description: "Le Directeur Général de SOCOTRA reçoit les félicitations officielles du Chef de l'État ivoirien pour sa contribution au développement économique.",
    category: "Distinction",
    icon: Star,
    color: "bg-yellow-50 text-yellow-700",
  },
  {
    date: "5 Novembre 2017",
    title: "Grand Prix des Transports de l'Afrique de l'Ouest 2017",
    description: "SOCOTRA remporte le prestigieux Grand Prix des Transports de l'Afrique de l'Ouest, plus haute distinction du secteur.",
    category: "Récompense",
    icon: Trophy,
    color: "bg-amber-50 text-amber-700",
  },
  {
    date: "5 Novembre 2016",
    title: "Prix d'Excellence de la Meilleure Entreprise 2016",
    description: "SOCOTRA reçoit le Prix d'Excellence de la Meilleure Entreprise de Transport, distinction majeure du secteur privé ivoirien.",
    category: "Récompense",
    icon: Award,
    color: "bg-green-50 text-green-700",
  },
  {
    date: "5 Novembre 2015",
    title: "Prix d'Excellence Alassane Ouattara 2015",
    description: "SOCOTRA distinguée par le prestigieux Prix d'Excellence Alassane Ouattara, récompensant les entreprises ivoiriennes d'exception.",
    category: "Récompense",
    icon: Trophy,
    color: "bg-amber-50 text-amber-700",
  },
  {
    date: "5 Novembre 2010",
    title: "Prix des Transports de Marchandises 2010",
    description: "SOCOTRA remporte le Prix des Transports de Marchandises, confirmant son leadership dans le secteur logistique ivoirien.",
    category: "Récompense",
    icon: Award,
    color: "bg-green-50 text-green-700",
  },
];

export default function NewsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-green-900 text-white py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <p className="text-green-300 font-medium text-sm tracking-widest uppercase mb-4">
            Actualités & Événements
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            La vie de SOCOTRA
          </h1>
          <p className="text-xl text-green-100 max-w-2xl">
            Distinctions, célébrations et moments forts qui font la fierté de notre entreprise.
          </p>
        </div>
      </section>

      {/* Liste des actualités */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto space-y-8">
            {news.map((item, index) => (
              <div
                key={index}
                className="group bg-gray-50 rounded-2xl p-8 hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-start gap-6">
                  {/* Icône */}
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 ${item.color}`}>
                    <item.icon className="h-7 w-7" />
                  </div>

                  {/* Contenu */}
                  <div className="flex-1">
                    {/* Date et catégorie */}
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="flex items-center gap-1.5 text-sm text-gray-500">
                        <Calendar className="h-4 w-4" />
                        {item.date}
                      </span>
                      <span className="text-xs font-medium text-gray-400 bg-white px-3 py-1 rounded-full border border-gray-200">
                        {item.category}
                      </span>
                    </div>

                    {/* Titre */}
                    <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-700 transition-colors">
                      {item.title}
                    </h2>

                    {/* Description */}
                    <p className="text-gray-500 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Envie de collaborer avec nous ?
          </h2>
          <p className="text-gray-500 mb-6">
            Rejoignez les entreprises qui nous font confiance.
          </p>
          <Link
            href="/quote"
            className="inline-flex items-center px-8 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-500 transition-colors"
          >
            Demander un devis
          </Link>
        </div>
      </section>
    </>
  );
}