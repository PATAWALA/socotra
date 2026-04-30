import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { 
  Target, 
  Eye, 
  Trophy, 
  TrendingUp, 
  Globe, 
  Users, 
  Shield, 
  Truck,
  ArrowRight,
  Award,
  Star,
  MapPin,
  Phone,
  Mail
} from "lucide-react";
import { COMPANY_INFO } from "@/lib/utils/constants";

export const metadata: Metadata = {
  title: "À propos - SOCOTRA | Leader du Transport en Afrique de l'Ouest",
  description: "Découvrez SOCOTRA : 25 ans d'excellence, 200+ tracteurs, 160 collaborateurs, 7 pays. Investissez dans le leader du transport ouest-africain.",
};

const awards = [
  { icon: Trophy, year: "2017", title: "Grand Prix des Transports d'Afrique de l'Ouest" },
  { icon: Award, year: "2016", title: "Prix d'Excellence de la Meilleure Entreprise de Transport" },
  { icon: Star, year: "2015 & 2017", title: "Prix d'Excellence Alassane Ouattara" },
  { icon: Trophy, year: "2010", title: "Prix des Transports de Marchandises" },
];

const values = [
  {
    icon: Shield,
    title: "Sécurité",
    description: "La sécurité de vos marchandises est notre priorité absolue. Flotte assurée tous risques, maintenance préventive et curative en atelier, personnel formé aux normes internationales."
  },
  {
    icon: Target,
    title: "Excellence",
    description: "Nous visons l'excellence dans chaque mission. Nos multiples distinctions nationales et internationales témoignent de notre engagement envers la qualité."
  },
  {
    icon: Users,
    title: "Engagement",
    description: "160 collaborateurs passionnés par leur métier, des chauffeurs primés, une équipe dirigeante visionnaire. SOCOTRA est une grande famille au service de vos transports."
  },
  {
    icon: Globe,
    title: "Innovation",
    description: "Géolocalisation en temps réel, gestion de flotte intégrée, maintenance prédictive. Nous investissons dans la technologie pour optimiser votre logistique."
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero avec logo */}
      <section className="relative bg-gradient-to-br from-green-950 via-green-900 to-emerald-900 text-white py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-10 w-96 h-96 border-2 border-white rounded-full" />
          <div className="absolute bottom-10 left-10 w-72 h-72 border-2 border-white rounded-full" />
        </div>
        
        <div className="relative container mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 mb-8">
            {/* Logo */}
            <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-2xl overflow-hidden bg-white p-2 flex-shrink-0 shadow-2xl">
              <Image
                src="/images/hero/logo.jpg"
                alt="Logo SOCOTRA"
                width={128}
                height={128}
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <p className="text-green-300 font-medium text-sm tracking-widest uppercase mb-2">
                Société de Commerce et de Transport
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
                À propos de SOCOTRA
              </h1>
              <p className="text-xl text-green-100 max-w-2xl">
                Leader du transport routier en Afrique de l&apos;Ouest depuis 1999.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Histoire et présentation */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Fondée en <strong className="text-green-700">1999</strong>,{" "}
              <strong className="text-green-700">SOCOTRA</strong> (Société de Commerce et de Transport) 
              s&apos;est imposée comme l&apos;une des entreprises de référence du transport routier de 
              marchandises en Côte d&apos;Ivoire et dans la sous-région ouest-africaine.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Avec un capital de <strong className="text-green-700">100 millions FCFA</strong>, un parc 
              de <strong className="text-green-700">plus de 200 tracteurs</strong> de dernière génération 
              et <strong className="text-green-700">160 collaborateurs</strong> qualifiés, nous assurons 
              le transport de matières premières agricoles, de produits pétroliers, de ciment, de conteneurs 
              et de marchandises diverses sur l&apos;ensemble du territoire ivoirien et dans 7 pays d&apos;Afrique 
              de l&apos;Ouest.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Notre cycle d&apos;exploitation intégré couvre l&apos;acquisition de véhicules, la gestion de 
              flotte, la maintenance préventive et curative, la géolocalisation en temps réel, la gestion 
              du carburant, l&apos;assurance tous risques et une <strong className="text-green-700">assistance 24h/24 et 7j/7</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Mission et Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-sm">
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <Target className="h-7 w-7 text-green-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Notre Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                Fournir des solutions de transport et de logistique fiables, sécurisées et innovantes 
                pour connecter les économies africaines et favoriser leur développement. Nous nous 
                engageons à offrir un service d&apos;excellence qui dépasse les attentes de nos clients.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-sm">
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <Eye className="h-7 w-7 text-green-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Notre Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                Devenir le leader incontesté du transport routier en Côte d&apos;Ivoire et ouvrir 
                de nouvelles filiales en Afrique de l&apos;Ouest d&apos;ici 2027. Nous visons à être 
                le partenaire logistique de référence pour toutes les entreprises opérant dans la région.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nos valeurs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Nos valeurs</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Les principes qui guident chacune de nos actions.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:bg-green-50 transition-colors text-center">
                <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-7 w-7 text-green-700" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Distinctions */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              L&apos;excellence récompensée
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Notre engagement envers la qualité nous a valu les plus hautes distinctions.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {awards.map((award, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                <award.icon className="h-10 w-10 text-green-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-green-700 mb-2">{award.year}</div>
                <h3 className="text-sm font-semibold text-gray-900">{award.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Opportunités d'investissement */}
      <section className="py-20 bg-gradient-to-br from-amber-500 to-amber-600 text-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <TrendingUp className="h-12 w-12 text-amber-200 mx-auto mb-6" />
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              SOCOTRA est ouvert aux investisseurs du monde entier
            </h2>
            <p className="text-xl text-amber-100 mb-4 leading-relaxed">
              Leader du transport en Afrique de l&apos;Ouest avec 25 ans d&apos;expérience, SOCOTRA 
              offre des opportunités d&apos;investissement uniques dans un marché en pleine croissance.
            </p>
            <p className="text-lg text-amber-100/80 mb-8 leading-relaxed">
              Que vous soyez un investisseur institutionnel, un fonds d&apos;investissement, un 
              partenaire stratégique ou un entrepreneur souhaitant diversifier vos actifs, 
              nous sommes à votre écoute pour construire ensemble l&apos;avenir du transport africain.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-bold mb-2">100M FCFA</div>
                <div className="text-amber-100 text-sm">Capital social</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-bold mb-2">200+</div>
                <div className="text-amber-100 text-sm">Tracteurs</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-bold mb-2">7</div>
                <div className="text-amber-100 text-sm">Pays couverts</div>
              </div>
            </div>
            <Link
              href="/quote?type=invest"
              className="inline-flex items-center px-8 py-4 bg-white text-amber-600 font-bold rounded-xl hover:bg-amber-50 transition-colors shadow-xl text-lg"
            >
              Nous contacter pour investir
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact rapide */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Nous contacter</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <MapPin className="h-8 w-8 text-green-600 mx-auto mb-3" />
                <div className="font-semibold text-gray-900 mb-1">Adresse</div>
                <div className="text-gray-500 text-sm">{COMPANY_INFO.address}</div>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <Phone className="h-8 w-8 text-green-600 mx-auto mb-3" />
                <div className="font-semibold text-gray-900 mb-1">Téléphone</div>
                <a href={`tel:${COMPANY_INFO.phone}`} className="text-green-600 text-sm hover:underline">
                  {COMPANY_INFO.phone}
                </a>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <Mail className="h-8 w-8 text-green-600 mx-auto mb-3" />
                <div className="font-semibold text-gray-900 mb-1">Email</div>
                <a href={`mailto:${COMPANY_INFO.email}`} className="text-green-600 text-sm hover:underline">
                  {COMPANY_INFO.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}