import { Trophy, Award, Star } from "lucide-react";

const awards = [
  { icon: Trophy, year: "2017", title: "Grand Prix des Transports d'Afrique de l'Ouest" },
  { icon: Award, year: "2016", title: "Prix d'Excellence de la Meilleure Entreprise" },
  { icon: Star, year: "2015", title: "Prix d'Excellence Alassane Ouattara" },
  { icon: Trophy, year: "2010", title: "Prix des Transports de Marchandises" },
];

export function AwardsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-16">
          <p className="text-green-600 font-medium text-sm tracking-widest uppercase mb-4">Distinctions</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 max-w-2xl">
            L&apos;excellence reconnue
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {awards.map((award, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 text-center hover:bg-green-50 transition-colors">
              <award.icon className="h-10 w-10 text-green-600 mx-auto mb-4" />
              <div className="text-2xl font-bold text-green-600 mb-2">{award.year}</div>
              <h3 className="text-sm font-semibold text-gray-900">{award.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}