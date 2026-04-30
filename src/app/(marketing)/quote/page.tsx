"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { ArrowRight, Truck, TrendingUp, CheckCircle2, Shield, Users, Globe, Building2, User, Mail, Phone, MapPin, Package, Weight } from "lucide-react";
import Link from "next/link";

function QuoteForm() {
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
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="h-10 w-10 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {isInvest ? "Demande d'investissement envoyée !" : "Demande de devis envoyée !"}
            </h2>
            <p className="text-gray-500 mb-2">
              Notre équipe analysera votre demande avec attention.
            </p>
            <p className="text-gray-400 text-sm mb-8">
              Délai de réponse : 24 à 48 heures ouvrées.
            </p>
            <Link href="/" className="inline-flex items-center gap-2 text-green-600 font-semibold hover:text-green-700 bg-green-50 px-6 py-3 rounded-xl transition-colors">
              <ArrowRight className="h-4 w-4 rotate-180" />
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

        <div className="relative z-10 container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <p className={`font-medium text-sm tracking-widest uppercase mb-4 ${isInvest ? "text-amber-200" : "text-green-300"}`}>
              {isInvest ? "Opportunités d'investissement" : "Demande de devis"}
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 flex items-center gap-4">
              {isInvest ? (
                <>
                  <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm flex-shrink-0">
                    <TrendingUp className="h-8 w-8 text-amber-300" />
                  </div>
                  Investir dans SOCOTRA
                </>
              ) : (
                <>
                  <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm flex-shrink-0">
                    <Truck className="h-8 w-8 text-green-300" />
                  </div>
                  Demander un devis transport
                </>
              )}
            </h1>
            
            {isInvest ? (
              <div className="space-y-4">
                <p className="text-xl text-white/90 leading-relaxed">
                  SOCOTRA est le leader du transport routier en Côte d&apos;Ivoire avec{" "}
                  <strong className="text-amber-300">25 ans d&apos;expérience</strong>, une flotte de{" "}
                  <strong className="text-amber-300">200+ tracteurs</strong> et{" "}
                  <strong className="text-amber-300">160 collaborateurs</strong>.{" "}
                  Nous ouvrons notre capital aux investisseurs stratégiques.
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
                  routier. Notre flotte de <strong className="text-green-300">200+ tracteurs</strong> et nos{" "}
                  <strong className="text-green-300">160 collaborateurs</strong> sont mobilisés pour vous offrir 
                  un service fiable à travers <strong className="text-green-300">7 pays</strong> d&apos;Afrique de l&apos;Ouest.
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
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 lg:p-12">
            
            {/* En-tête du formulaire */}
            <div className="mb-10 text-center">
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 ${isInvest ? "bg-amber-100" : "bg-green-100"}`}>
                {isInvest ? (
                  <TrendingUp className="h-8 w-8 text-amber-600" />
                ) : (
                  <Truck className="h-8 w-8 text-green-600" />
                )}
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {isInvest ? "Formulaire de contact investisseur" : "Votre devis personnalisé"}
              </h2>
              <p className="text-gray-500">
                {isInvest 
                  ? "Remplissez ce formulaire et notre direction vous contactera pour discuter des opportunités de partenariat." 
                  : "Décrivez votre besoin et recevez une proposition commerciale détaillée sous 24 heures."}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Service (seulement devis) */}
              {!isInvest && (
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    <Package className="h-4 w-4 inline mr-1.5 text-green-600" />
                    Type de service *
                  </label>
                  <select 
                    required
                    className="w-full px-4 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 text-gray-700 bg-white transition-colors"
                  >
                    <option value="">Sélectionnez le type de transport souhaité</option>
                    <option value="agricultural">Transport Agricole (cacao, café, coton, anacarde)</option>
                    <option value="petroleum">Transport Pétrolier (hydrocarbures, carburants)</option>
                    <option value="cement">Transport de Ciment (vrac ou sacs)</option>
                    <option value="containers">Transport Conteneurs (portuaire et régional)</option>
                    <option value="logistics">Logistique & Stockage (entrepôts, cross-docking)</option>
                    <option value="international">Transport International (sous-région)</option>
                  </select>
                </div>
              )}

              {/* Entreprise + Contact */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    <Building2 className="h-4 w-4 inline mr-1.5 text-green-600" />
                    {isInvest ? "Entreprise / Investisseur *" : "Nom de l'entreprise *"}
                  </label>
                  <input 
                    type="text" 
                    required 
                    placeholder={isInvest ? "Nom de votre entreprise ou groupe" : "Ex : Société Ivoirienne de Commerce"}
                    className="w-full px-4 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 placeholder:text-gray-400 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    <User className="h-4 w-4 inline mr-1.5 text-green-600" />
                    Nom du contact *
                  </label>
                  <input 
                    type="text" 
                    required 
                    placeholder="Ex : Jean Kouassi"
                    className="w-full px-4 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 placeholder:text-gray-400 transition-colors"
                  />
                </div>
              </div>

              {/* Email + Téléphone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    <Mail className="h-4 w-4 inline mr-1.5 text-green-600" />
                    Email professionnel *
                  </label>
                  <input 
                    type="email" 
                    required 
                    placeholder="Ex : contact@entreprise.ci"
                    className="w-full px-4 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 placeholder:text-gray-400 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    <Phone className="h-4 w-4 inline mr-1.5 text-green-600" />
                    Téléphone *
                  </label>
                  <input 
                    type="tel" 
                    required 
                    placeholder="Ex : +225 01 02 03 04 05"
                    className="w-full px-4 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 placeholder:text-gray-400 transition-colors"
                  />
                </div>
              </div>

              {/* Champs spécifiques transport */}
              {!isInvest && (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        <MapPin className="h-4 w-4 inline mr-1.5 text-green-600" />
                        Point de départ *
                      </label>
                      <input 
                        type="text" 
                        required 
                        placeholder="Ex : Abidjan, Zone Industrielle"
                        className="w-full px-4 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 placeholder:text-gray-400 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        <MapPin className="h-4 w-4 inline mr-1.5 text-green-600" />
                        Destination *
                      </label>
                      <input 
                        type="text" 
                        required 
                        placeholder="Ex : Bamako, Mali"
                        className="w-full px-4 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 placeholder:text-gray-400 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        <Package className="h-4 w-4 inline mr-1.5 text-green-600" />
                        Type de marchandise *
                      </label>
                      <input 
                        type="text" 
                        required 
                        placeholder="Ex : Cacao en sacs, ciment en vrac..."
                        className="w-full px-4 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 placeholder:text-gray-400 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        <Weight className="h-4 w-4 inline mr-1.5 text-green-600" />
                        Poids estimé (tonnes)
                      </label>
                      <input 
                        type="number" 
                        placeholder="Ex : 25"
                        className="w-full px-4 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 placeholder:text-gray-400 transition-colors"
                      />
                    </div>
                  </div>
                </>
              )}

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  {isInvest ? "Votre projet d'investissement" : "Précisions complémentaires"}
                </label>
                <textarea 
                  rows={5} 
                  placeholder={
                    isInvest 
                      ? "Décrivez votre projet : montant envisagé, type de partenariat recherché, objectifs de croissance, pays ciblés..."
                      : "Détails supplémentaires : volumes réguliers, fréquence des livraisons, contraintes particulières, délais souhaités..."
                  }
                  className="w-full px-4 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 placeholder:text-gray-400 transition-colors resize-none"
                />
              </div>

              {/* Note de confidentialité */}
              <div className="flex items-start gap-2 text-xs text-gray-400 bg-gray-50 rounded-xl p-4">
                <Shield className="h-4 w-4 flex-shrink-0 mt-0.5 text-gray-400" />
                <span>
                  Vos informations sont strictement confidentielles et ne seront jamais partagées. 
                  En soumettant ce formulaire, vous acceptez d&apos;être recontacté par notre équipe.
                </span>
              </div>

              {/* Bouton */}
              <button
                type="submit"
                className={`w-full py-4 text-white font-semibold rounded-xl transition-all text-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 ${
                  isInvest 
                    ? "bg-amber-500 hover:bg-amber-600 shadow-amber-500/25" 
                    : "bg-green-600 hover:bg-green-500 shadow-green-600/25"
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

export default function QuotePage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-green-600 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-500 font-medium">Chargement du formulaire...</p>
        </div>
      </div>
    }>
      <QuoteForm />
    </Suspense>
  );
}