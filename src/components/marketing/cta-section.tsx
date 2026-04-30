import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { COMPANY_INFO } from "@/lib/utils/constants";

export function CtaSection() {
  return (
    <section className="py-24 bg-green-900 text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
          Prêt à travailler avec le leader du transport ?
        </h2>
        <p className="text-lg text-green-200 mb-8 max-w-xl mx-auto">
          Une solution sur mesure en 24 heures.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/quote" className="inline-flex items-center justify-center px-8 py-4 bg-white text-green-900 font-semibold rounded-lg hover:bg-green-50 transition-colors">
            Demander un devis
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
          <Link href={`tel:${COMPANY_INFO.phone}`} className="inline-flex items-center justify-center px-8 py-4 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
            <Phone className="mr-2 h-5 w-5" />
            Nous appeler
          </Link>
        </div>
      </div>
    </section>
  );
}