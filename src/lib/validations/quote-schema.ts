// src/lib/validations/quote-schema.ts
import * as z from "zod"

export const quoteFormSchema = z.object({
  companyName: z.string()
    .min(2, "Le nom de l'entreprise doit contenir au moins 2 caractères")
    .max(100, "Le nom de l'entreprise est trop long"),
  contactName: z.string()
    .min(2, "Le nom du contact doit contenir au moins 2 caractères"),
  email: z.string()
    .email("Veuillez entrer un email valide"),
  phone: z.string()
    .min(8, "Le numéro de téléphone doit contenir au moins 8 chiffres")
    .regex(/^[0-9+\-\s()]*$/, "Format de téléphone invalide"),
  serviceType: z.enum([
    "agricultural",
    "petroleum",
    "cement",
    "containers",
    "logistics",
    "other"
  ], {
    required_error: "Veuillez sélectionner un type de service",
  }),
  origin: z.string()
    .min(2, "Veuillez préciser le point de départ"),
  destination: z.string()
    .min(2, "Veuillez préciser la destination"),
  cargoType: z.string()
    .min(2, "Veuillez décrire le type de marchandise"),
  cargoWeight: z.number()
    .min(1, "Le poids doit être supérieur à 0")
    .max(100000, "Poids maximum 100,000 tonnes")
    .optional()
    .or(z.literal(0)),
  description: z.string()
    .max(1000, "La description ne doit pas dépasser 1000 caractères")
    .optional(),
})

export type QuoteFormData = z.infer<typeof quoteFormSchema>