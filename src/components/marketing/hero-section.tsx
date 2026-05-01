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
  "Autre",
];

export function HeroSection() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [depart, setDepart] = useState("");
  const [arrivee, setArrivee] = useState("");
  const [marchandise, setMarchandise] = useState("");
  const [tonnes, setTonnes] = useState("");
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
            Demande envoyée !
          </h2>
          <p className="text-xl text-green-200 mb-8">
            On vous appelle dans les 24 heures.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="inline-flex items-center px-6 py-3 bg-white text-green-900 font-semibold rounded-xl hover:bg-green-50 transition-colors"
          >
            Nouvelle demande
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

      <div className="relative z-10 w-full py-20 lg:py-0">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
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

            {/* DROITE - Formulaire avec labels */}
            <div>
              <div className="bg-white rounded-2xl shadow-2xl p-6 lg:p-8">
                <h3 className="text-lg font-bold text-gray-900 mb-5">
                  Devis gratuit en 24h
                </h3>

                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Ligne 1 : Nom & Téléphone */}
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                        Nom / Entreprise
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Votre nom ou le nom de votre entreprise"
                        className="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm bg-gray-50 focus:bg-white focus:ring-2 focus:ring-green-500 focus:border-green-500 placeholder:text-gray-400 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+225 01 02 03 04 05"
                        className="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm bg-gray-50 focus:bg-white focus:ring-2 focus:ring-green-500 focus:border-green-500 placeholder:text-gray-400 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Type de transport */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                      Type de transport
                    </label>
                    <select
                      required
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm bg-gray-50 focus:bg-white focus:ring-2 focus:ring-green-500 focus:border-green-500 text-gray-700 transition-colors"
                    >
                      <option value="">Sélectionnez un type de transport</option>
                      {services.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  {/* Ligne 2 : Départ & Destination */}
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                        Départ
                      </label>
                      <input
                        type="text"
                        required
                        value={depart}
                        onChange={(e) => setDepart(e.target.value)}
                        placeholder="Ex : Abidjan"
                        className="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm bg-gray-50 focus:bg-white focus:ring-2 focus:ring-green-500 focus:border-green-500 placeholder:text-gray-400 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                        Destination
                      </label>
                      <input
                        type="text"
                        required
                        value={arrivee}
                        onChange={(e) => setArrivee(e.target.value)}
                        placeholder="Ex : Bamako"
                        className="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm bg-gray-50 focus:bg-white focus:ring-2 focus:ring-green-500 focus:border-green-500 placeholder:text-gray-400 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Ligne 3 : Marchandise & Tonnes */}
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                        Marchandise
                      </label>
                      <input
                        type="text"
                        required
                        value={marchandise}
                        onChange={(e) => setMarchandise(e.target.value)}
                        placeholder="Ex : Cacao, ciment..."
                        className="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm bg-gray-50 focus:bg-white focus:ring-2 focus:ring-green-500 focus:border-green-500 placeholder:text-gray-400 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                        Tonnes estimées
                      </label>
                      <input
                        type="number"
                        value={tonnes}
                        onChange={(e) => setTonnes(e.target.value)}
                        placeholder="Ex : 25"
                        className="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm bg-gray-50 focus:bg-white focus:ring-2 focus:ring-green-500 focus:border-green-500 placeholder:text-gray-400 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Bouton */}
                  <button
                    type="submit"
                    className="w-full py-3 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-500 transition-all text-sm shadow-lg shadow-green-600/20 flex items-center justify-center gap-2 mt-1"
                  >
                    <Send className="h-4 w-4" />
                    Recevoir mon devis gratuit
                  </button>

                  <p className="text-[11px] text-gray-400 text-center">
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