import { Shield, Clock, MapPin, Gauge, Headphones, Truck } from "lucide-react";

const benefits = [
  { icon: Shield, title: "Sécurité garantie", description: "Flotte assurée tous risques, maintenance préventive et curative en atelier." },
  { icon: Clock, title: "Ponctualité", description: "Géolocalisation en temps réel pour un suivi précis de vos marchandises." },
  { icon: MapPin, title: "Couverture régionale", description: "Présents dans 7 pays d'Afrique de l'Ouest avec des corridors logistiques." },
  { icon: Gauge, title: "Flotte moderne", description: "Véhicules de dernière génération régulièrement renouvelés." },
  { icon: Headphones, title: "Assistance 24/7", description: "Une équipe dédiée disponible à tout moment pour vos urgences." },
  { icon: Truck, title: "Gestion intégrée", description: "Acquisition, maintenance, carburant, géolocalisation : tout est maîtrisé." },
];

export function WhyChooseSection() {
  return (
    <section className="py-24 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-16">
          <p className="text-green-600 font-medium text-sm tracking-widest uppercase mb-4">Pourquoi SOCOTRA</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 max-w-2xl">
            La référence du transport en Afrique de l&apos;Ouest
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <benefit.icon className="h-6 w-6 text-green-700" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}