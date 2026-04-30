"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Truck, Send, Loader2, CheckCircle2 } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import { SERVICE_TYPES } from "@/types";

export default function QuotePage() {
  const router = useRouter();
  const supabase = createClient();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    serviceType: "",
    origin: "",
    destination: "",
    cargoType: "",
    cargoWeight: "",
    description: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validateForm() {
    const newErrors: Record<string, string> = {};
    
    if (!formData.companyName.trim()) newErrors.companyName = "Le nom de l'entreprise est requis";
    if (!formData.contactName.trim()) newErrors.contactName = "Le nom du contact est requis";
    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Format d'email invalide";
    }
    if (!formData.phone.trim()) newErrors.phone = "Le téléphone est requis";
    if (!formData.serviceType) newErrors.serviceType = "Veuillez sélectionner un service";
    if (!formData.origin.trim()) newErrors.origin = "Le point de départ est requis";
    if (!formData.destination.trim()) newErrors.destination = "La destination est requise";
    if (!formData.cargoType.trim()) newErrors.cargoType = "Le type de marchandise est requis";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from("quote_requests")
        .insert({
          company_name: formData.companyName,
          contact_name: formData.contactName,
          email: formData.email,
          phone: formData.phone,
          service_type: formData.serviceType,
          origin: formData.origin,
          destination: formData.destination,
          cargo_type: formData.cargoType,
          cargo_weight: formData.cargoWeight ? parseFloat(formData.cargoWeight) : null,
          description: formData.description || null,
          status: "new",
        });

      if (error) throw error;

      setIsSuccess(true);
      
      setTimeout(() => {
        router.push("/");
      }, 3000);
    } catch (error) {
      console.error("Erreur:", error);
      alert("Une erreur est survenue. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Effacer l'erreur quand l'utilisateur modifie le champ
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  }

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-xl p-12 max-w-lg mx-4 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="h-10 w-10 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Demande envoyée avec succès !
          </h2>
          <p className="text-gray-600 mb-6">
            Notre équipe commerciale analysera votre demande et vous recontactera dans les 24 heures.
          </p>
          <p className="text-sm text-gray-500">
            Redirection vers l&apos;accueil...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="p-3 bg-blue-900 rounded-full">
              <Truck className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Demande de Devis Transport
          </h1>
          <p className="text-lg text-gray-600">
            Remplissez ce formulaire pour obtenir un devis personnalisé sous 24 heures
          </p>
        </div>

        {/* Formulaire */}
        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Section 1 : Info entreprise */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
                <span className="w-8 h-8 bg-blue-100 text-blue-900 rounded-full flex items-center justify-center text-sm font-bold">
                  1
                </span>
                Informations de l&apos;entreprise
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nom de l&apos;entreprise *
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.companyName ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                    placeholder="Ex: Société Ivoirienne de Commerce"
                  />
                  {errors.companyName && <p className="text-red-500 text-sm mt-1">{errors.companyName}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nom du contact *
                  </label>
                  <input
                    type="text"
                    name="contactName"
                    value={formData.contactName}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.contactName ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                    placeholder="Ex: Jean Kouassi"
                  />
                  {errors.contactName && <p className="text-red-500 text-sm mt-1">{errors.contactName}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email professionnel *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                    placeholder="contact@entreprise.ci"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.phone ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                    placeholder="+225 XX XX XX XX XX"
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>
              </div>
            </div>

            {/* Section 2 : Détails du transport */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
                <span className="w-8 h-8 bg-blue-100 text-blue-900 rounded-full flex items-center justify-center text-sm font-bold">
                  2
                </span>
                Détails du transport
              </h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Type de service *
                  </label>
                  <select
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.serviceType ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                  >
                    <option value="">Sélectionnez un service</option>
                    {SERVICE_TYPES.map((service) => (
                      <option key={service.value} value={service.value}>
                        {service.label}
                      </option>
                    ))}
                  </select>
                  {errors.serviceType && <p className="text-red-500 text-sm mt-1">{errors.serviceType}</p>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Point de départ *
                    </label>
                    <input
                      type="text"
                      name="origin"
                      value={formData.origin}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.origin ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                      placeholder="Ex: Abidjan"
                    />
                    {errors.origin && <p className="text-red-500 text-sm mt-1">{errors.origin}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Destination *
                    </label>
                    <input
                      type="text"
                      name="destination"
                      value={formData.destination}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.destination ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                      placeholder="Ex: Bamako"
                    />
                    {errors.destination && <p className="text-red-500 text-sm mt-1">{errors.destination}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Type de marchandise *
                    </label>
                    <input
                      type="text"
                      name="cargoType"
                      value={formData.cargoType}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.cargoType ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                      placeholder="Ex: Cacao, ciment..."
                    />
                    {errors.cargoType && <p className="text-red-500 text-sm mt-1">{errors.cargoType}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Poids estimé (tonnes)
                    </label>
                    <input
                      type="number"
                      name="cargoWeight"
                      value={formData.cargoWeight}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Ex: 25"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Précisions complémentaires
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Détails supplémentaires sur vos besoins spécifiques..."
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-orange-500 text-white py-4 px-8 rounded-lg font-semibold text-lg hover:bg-orange-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Envoi en cours...
                </>
              ) : (
                <>
                  <Send className="h-5 w-5" />
                  Envoyer la demande de devis
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}