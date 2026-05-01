"use client";

import { useState } from "react";
import Image from "next/image";
import { Shield, Clock, Globe, Send } from "lucide-react";

const services = [
  "Transport Agricole",
  "Transport Pétrolier",
  "Transport de Ciment",
  "Transport Conteneurs",
  "Logistique & Stockage",
  "Transport International",
];

export function HeroSection() {
  const [service, setService] = useState("");
  const [depart, setDepart] = useState("");
  const [arrivee, setArrivee] = useState("");
  const [marchandise, setMarchandise] = useState("");
  const [poids, setPoids] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-green-950 via-green-900 to-emerald-900">
        <div className="absolute inset-0 opacity-20">
          <Image src="/images/hero/image1.jpg" alt="SOCOTRA" fill className="object-cover" />
        </div>
        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <Send className="h-10 w-10 text-white" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Demande envoyée avec succès !
          </h2>
          <p className="text-xl text-green-200 mb-8">
            Notre équipe vous contactera dans les 24 heures.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="inline-flex items-center px-6 py-3 bg-white text-green-900 font-semibold rounded-xl hover:bg-green-50 transition-colors"
          >
            Faire une autre demande
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="relative min-h-screen flex items-center">
      {/* Image de fond */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/image1.jpg"
          alt="Flotte de camions SOCOTRA"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
      </div>

      {/* Contenu */}
      <div className="relative z-10 w-full py-20 lg:py-0">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* GAUCHE - Texte */}
            <div>
              <div className="inline-block bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                Road Freight & Logistics
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Le transport,
                <br />
                <span className="text-green-400">c&apos;est notre affaire</span>
              </h1>

              <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-md">
                Leader du transport routier en Côte d&apos;Ivoire et dans 7 pays 
                d&apos;Afrique de l&apos;Ouest. Flotte de 200+ tracteurs.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-white/80">
                  <Shield className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span className="text-sm">Assurance tous risques</span>
                </div>
                <div className="flex items-center gap-3 text-white/80">
                  <Clock className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span className="text-sm">Assistance 24h/24 et 7j/7</span>
                </div>
                <div className="flex items-center gap-3 text-white/80">
                  <Globe className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span className="text-sm">Géolocalisation en temps réel</span>
                </div>
              </div>

              <p className="text-sm text-gray-400">
                🏆 Grand Prix des Transports d&apos;Afrique de l&apos;Ouest 2017 • 
                Prix d&apos;Excellence 2015 & 2017
              </p>
            </div>

            {/* DROITE - Formulaire */}
            <div>
              <div className="bg-white rounded-2xl shadow-2xl p-6 lg:p-8">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    Demandez votre devis gratuit
                  </h3>
                  <p className="text-sm text-gray-500">
                    Réponse sous 24 heures
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                      Type de service *
                    </label>
                    <select
                      required
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 text-gray-700 text-sm bg-gray-50 focus:bg-white transition-colors"
                    >
                      <option value="">Sélectionnez un service</option>
                      {services.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                        Départ *
                      </label>
                      <input
                        type="text"
                        required
                        value={depart}
                        onChange={(e) => setDepart(e.target.value)}
                        placeholder="Ex: Abidjan"
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 text-sm bg-gray-50 focus:bg-white transition-colors placeholder:text-gray-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                        Arrivée *
                      </label>
                      <input
                        type="text"
                        required
                        value={arrivee}
                        onChange={(e) => setArrivee(e.target.value)}
                        placeholder="Ex: Bamako"
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 text-sm bg-gray-50 focus:bg-white transition-colors placeholder:text-gray-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                        Marchandise *
                      </label>
                      <input
                        type="text"
                        required
                        value={marchandise}
                        onChange={(e) => setMarchandise(e.target.value)}
                        placeholder="Ex: Cacao, ciment..."
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 text-sm bg-gray-50 focus:bg-white transition-colors placeholder:text-gray-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                        Poids (tonnes)
                      </label>
                      <input
                        type="number"
                        value={poids}
                        onChange={(e) => setPoids(e.target.value)}
                        placeholder="Ex: 25"
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 text-sm bg-gray-50 focus:bg-white transition-colors placeholder:text-gray-400"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-500 transition-all text-base shadow-lg shadow-green-600/20 hover:shadow-green-600/30 flex items-center justify-center gap-2"
                  >
                    <Send className="h-4 w-4" />
                    Recevoir mon devis gratuit
                  </button>

                  <p className="text-xs text-gray-400 text-center">
                    Gratuit et sans engagement • Réponse sous 24h
                  </p>
                </form>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}