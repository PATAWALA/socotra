import { Truck, Target, Eye, Users, Award } from "lucide-react";
import { COMPANY_INFO } from "@/lib/utils/constants";

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 to-slate-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              À propos de SOCOTRA
            </h1>
            <p className="text-xl text-gray-300">
              {COMPANY_INFO.fullName} - Leader du transport routier en Afrique de l&apos;Ouest
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 leading-relaxed">
              Fondée en {COMPANY_INFO.founded}, {COMPANY_INFO.fullName} s&apos;est imposée comme 
              un acteur majeur du transport routier de marchandises en Afrique de l&apos;Ouest. 
              Avec une flotte de plus de {COMPANY_INFO.tractors} tracteurs et une équipe de 
              {COMPANY_INFO.employees} employés qualifiés, nous offrons des solutions logistiques 
              complètes à nos clients.
            </p>

            <div className="grid md:grid-cols-2 gap-8 my-12">
              <div className="bg-gray-50 rounded-xl p-8">
                <Target className="h-10 w-10 text-blue-900 mb-4" />
                <h3 className="text-xl font-bold mb-3">Notre Mission</h3>
                <p className="text-gray-600">
                  Fournir des solutions de transport et de logistique fiables, sécurisées 
                  et innovantes pour connecter les économies africaines et favoriser leur développement.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8">
                <Eye className="h-10 w-10 text-blue-900 mb-4" />
                <h3 className="text-xl font-bold mb-3">Notre Vision</h3>
                <p className="text-gray-600">
                  Devenir le partenaire logistique de référence en Afrique de l&apos;Ouest, 
                  reconnu pour l&apos;excellence de nos services et notre capacité d&apos;innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}