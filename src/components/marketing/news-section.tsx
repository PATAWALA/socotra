import Link from "next/link";
import { Calendar, ArrowRight, Trophy, Users, Star } from "lucide-react";

const latestNews = [
  {
    date: "30 Novembre 2022",
    title: "Récompense des chauffeurs du mois",
    description: "4 chauffeurs des flottes LHCI, SACO et CARGILL récompensés pour leur excellence.",
    icon: Users,
  },
  {
    date: "8 Mars 2022",
    title: "Journée Internationale des Droits des Femmes",
    description: "Célébration autour du thème « L'égalité des sexes pour un avenir durable ».",
    icon: Star,
  },
  {
    date: "Novembre 2017",
    title: "Grand Prix des Transports 2017",
    description: "Plus haute distinction du secteur transport en Afrique de l'Ouest.",
    icon: Trophy,
  },
];

export function NewsSection() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16">
          <div>
            <p className="text-green-600 font-medium text-sm tracking-widest uppercase mb-4">
              Actualités
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
              La vie de l&apos;entreprise
            </h2>
          </div>
          <Link
            href="/news"
            className="inline-flex items-center text-green-700 font-semibold hover:text-green-500 transition-colors mt-4 sm:mt-0 group"
          >
            Toutes les actualités
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Grille */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {latestNews.map((item, index) => (
            <Link
              key={index}
              href="/news"
              className="group bg-gray-50 rounded-2xl p-8 hover:bg-gray-100 transition-colors"
            >
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <item.icon className="h-6 w-6 text-green-700" />
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                <Calendar className="h-4 w-4" />
                {item.date}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-green-700 transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {item.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}