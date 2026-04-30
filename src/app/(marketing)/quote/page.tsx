"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import { ArrowRight, Truck, TrendingUp, CheckCircle2, Shield, Users, Globe } from "lucide-react";
import Link from "next/link";

export default function QuotePage() {
  const searchParams = useSearchParams();
  const type = searchParams.get("type");
  const isInvest = type === "invest";

  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <section className="py-32 text-center bg-gray-50 min-h-screen flex items-center">
        <div className="container mx-auto px-6 max-w-lg">
          <div className="bg-white rounded-2xl shadow-xl p-10">
            <div className="text-5xl mb-4">✅</div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {isInvest ? "Demande d'investissement envoyée avec succès !" : "Votre demande de devis a bien été reçue !"}
            </h2>
            <p className="text-gray-500 mb-4">
              Notre équipe analysera votre demande avec attention.
            </p>
            <p className="text-gray-400 text-sm mb-8">
              Délai de réponse : 24 à 48 heures ouvrées.
            </p>
            <Link href="/" className="inline-flex items-center text-green-600 font-semibold hover:text-green-700">
              <ArrowRight className="mr-2 h-4 w-4 rotate-180" />
              Retour à l&apos;accueil
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* HERO */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        {/* Image de fond */}
        <div className="absolute inset-0">
          {isInvest ? (
            <>
              <img
                src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=1920&q=80"
                alt="Croissance et investissement"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-amber-950/90 via-amber-900/80 to-amber-800/60" />
            </>
          ) : (
            <>
              <Image
                src="/images/hero/image1.jpg"
                alt="Transport logistique SOCOTRA"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-green-950/90 via-green-900/80 to-green-800/60" />
            </>
          )}
        </div>

        {/* Contenu */}
        <div className="relative z-10 container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <p className={`font-medium text-sm tracking-widest uppercase mb-4 ${isInvest ? "text-amber-200" : "text-green-300"}`}>
              {isInvest ? "Opportunités d'investissement" : "Demande de devis"}
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 flex items-center gap-4">
              {isInvest ? (
                <>
                  <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                    <TrendingUp className="h-8 w-8 text-amber-300" />
                  </div>
                  Investir dans SOCOTRA
                </>
              ) : (
                <>
                  <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                    <Truck className="h-8 w-8 text-green-300" />
                  </div>
                  Demander un devis
                </>
              )}
            </h1>
            
            {isInvest ? (
              <div className="space-y-4">
                <p className="text-xl text-white/90 leading-relaxed">
                  SOCOTRA est le leader du transport routier en Côte d&apos;Ivoire avec 
                  <strong className="text-amber-300"> 25 ans d&apos;expérience</strong>, une flotte de 
                  <strong className="text-amber-300"> 200+ tracteurs</strong> et 
                  <strong className="text-amber-300"> 160 collaborateurs</strong>. 
                  Nous ouvrons notre capital aux investisseurs stratégiques qui souhaitent 
                  participer à la croissance du commerce en Afrique de l&apos;Ouest.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                  <div className="flex items-center gap-2 text-white/80">
                    <CheckCircle2 className="h-5 w-5 text-amber-300 flex-shrink-0" />
                    <span className="text-sm">Rentabilité prouvée</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/80">
                    <CheckCircle2 className="h-5 w-5 text-amber-300 flex-shrink-0" />
                    <span className="text-sm">Marché en croissance</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/80">
                    <CheckCircle2 className="h-5 w-5 text-amber-300 flex-shrink-0" />
                    <span className="text-sm">Expansion régionale</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <p className="text-xl text-white/90 leading-relaxed">
                  Bénéficiez de <strong className="text-green-300">25 ans d&apos;expertise</strong> en transport 
                  routier. Notre flotte de <strong className="text-green-300">200+ tracteurs</strong> et nos 
                  <strong className="text-green-300"> 160 collaborateurs</strong> sont mobilisés pour vous offrir 
                  un service fiable, sécurisé et ponctuel à travers <strong className="text-green-300">7 pays </strong> d&apos;Afrique de l&apos;Ouest.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                  <div className="flex items-center gap-2 text-white/80">
                    <Shield className="h-5 w-5 text-green-300 flex-shrink-0" />
                    <span className="text-sm">Assurance tous risques</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/80">
                    <Globe className="h-5 w-5 text-green-300 flex-shrink-0" />
                    <span className="text-sm">7 pays couverts</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/80">
                    <Users className="h-5 w-5 text-green-300 flex-shrink-0" />
                    <span className="text-sm">Équipe dédiée 24/7</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Formulaire */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-2xl">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 lg:p-10">
            
            {isInvest ? (
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Formulaire de contact investisseur
                </h2>
                <p className="text-gray-500">
                  Remplissez ce formulaire et notre direction vous contactera pour discuter 
                  des opportunités de partenariat et d&apos;investissement. Vos informations 
                  restent strictement confidentielles.
                </p>
              </div>
            ) : (
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Votre devis personnalisé
                </h2>
                <p className="text-gray-500">
                  Décrivez votre besoin de transport et recevez une proposition commerciale 
                  détaillée sous 24 heures. Service gratuit et sans engagement.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {!isInvest && (
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Type de service
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-700 bg-white">
                    <option value="">Sélectionnez un service</option>
                    <option value="agricultural">Transport Agricole</option>
                    <option value="petroleum">Transport Pétrolier</option>
                    <option value="cement">Transport de Ciment</option>
                    <option value="containers">Transport Conteneurs</option>
                    <option value="logistics">Logistique & Stockage</option>
                    <option value="international">Transport International</option>
                  </select>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    {isInvest ? "Entreprise / Investisseur *" : "Nom de l'entreprise *"}
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder={isInvest ? "Nom de votre entreprise ou groupe" : "Ex: Société Ivoirienne de Commerce"}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Nom du contact *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Ex: Jean Kouassi"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Email professionnel *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="contact@entreprise.ci"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="+225 XX XX XX XX XX"
                  />
                </div>
              </div>

              {!isInvest && (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        Point de départ *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="Ex: Abidjan"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        Destination *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="Ex: Bamako"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        Type de marchandise *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="Ex: Cacao, ciment..."
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        Poids estimé (tonnes)
                      </label>
                      <input
                        type="number"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="Ex: 25"
                      />
                    </div>
                  </div>
                </>
              )}

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  {isInvest ? "Votre projet d'investissement" : "Précisions complémentaires"}
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                  placeholder={
                    isInvest
                      ? "Décrivez votre projet : montant envisagé, type de partenariat recherché, objectifs de croissance..."
                      : "Détails supplémentaires sur vos besoins : volumes réguliers, délais, contraintes particulières..."
                  }
                />
              </div>

              <p className="text-xs text-gray-400 text-center">
                En envoyant ce formulaire, vous acceptez que SOCOTRA utilise vos données pour vous recontacter. 
                Consultez notre politique de confidentialité.
              </p>

              <button
                type="submit"
                className={`w-full py-4 text-white font-semibold rounded-xl transition-all text-lg ${
                  isInvest
                    ? "bg-amber-500 hover:bg-amber-600 shadow-lg shadow-amber-500/25"
                    : "bg-green-600 hover:bg-green-500 shadow-lg shadow-green-600/25"
                }`}
              >
                {isInvest ? "Envoyer ma demande d'investissement" : "Recevoir mon devis gratuit"}
                <ArrowRight className="ml-2 h-5 w-5 inline" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}