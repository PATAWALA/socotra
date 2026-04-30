"use client";

import Link from "next/link";
import { 
  Truck, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ArrowRight,
} from "lucide-react";
import { FaFacebookF,FaTwitter,FaLinkedin,FaInstagram} from 'react-icons/fa';
import { COMPANY_INFO, SERVICES } from "@/lib/utils/constants";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="bg-green-600 p-2 rounded-lg">
                <Truck className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold">SOCOTRA</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Leader du transport routier en Afrique de l&apos;Ouest depuis 1999.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-green-600 transition-colors">
                <FaFacebookF className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-green-600 transition-colors">
                <FaTwitter className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-green-600 transition-colors">
                <FaLinkedin className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-green-600 transition-colors">
                <FaInstagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Nos Services</h3>
            <ul className="space-y-3">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <Link 
                    href={`/services#${service.id}`}
                    className="text-gray-400 hover:text-green-400 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-all" />
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a href={`tel:${COMPANY_INFO.phone}`} className="flex items-start gap-3 text-gray-400 hover:text-green-400 transition-colors group">
                  <Phone className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-sm font-medium text-white">Téléphone</span>
                    <span className="text-sm">{COMPANY_INFO.phone}</span>
                  </div>
                </a>
              </li>
              <li>
                <a href={`mailto:${COMPANY_INFO.email}`} className="flex items-start gap-3 text-gray-400 hover:text-green-400 transition-colors group">
                  <Mail className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-sm font-medium text-white">Email</span>
                    <span className="text-sm">{COMPANY_INFO.email}</span>
                  </div>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-gray-400">
                  <MapPin className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-sm font-medium text-white">Adresse</span>
                    <span className="text-sm">{COMPANY_INFO.address}</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-3 text-gray-400">
                  <Clock className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-sm font-medium text-white">Disponibilité</span>
                    <span className="text-sm">24h/24 et 7j/7</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Newsletter</h3>
            <p className="text-gray-400 text-sm mb-4">
              Recevez nos actualités et offres spéciales directement par email.
            </p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Votre email"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition-colors"
              />
              <button
                onClick={() => alert("Merci de votre inscription !")}
                className="w-full px-4 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-500 transition-colors flex items-center justify-center gap-2"
              >
                S&apos;abonner
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} {COMPANY_INFO.fullName}. Tous droits réservés.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="text-gray-500 hover:text-green-400 text-sm transition-colors">Mentions légales</Link>
              <Link href="#" className="text-gray-500 hover:text-green-400 text-sm transition-colors">Politique de confidentialité</Link>
              <Link href="#" className="text-gray-500 hover:text-green-400 text-sm transition-colors">CGV</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}