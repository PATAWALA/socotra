export interface QuoteRequest {
  id: string
  created_at: string
  company_name: string
  contact_name: string
  email: string
  phone: string
  service_type: string
  origin: string
  destination: string
  cargo_type: string
  cargo_weight: number | null
  description: string | null
  status: 'new' | 'contacted' | 'negotiating' | 'won' | 'lost'
  notes: string | null
}

export const SERVICE_TYPES = [
  { value: "agricultural", label: "Transport de matières premières agricoles" },
  { value: "petroleum", label: "Transport de produits pétroliers" },
  { value: "cement", label: "Transport de ciment" },
  { value: "containers", label: "Transport de conteneurs" },
  { value: "logistics", label: "Logistique et stockage" },
  { value: "other", label: "Autre service" },
] as const

export const QUOTE_STATUSES = {
  new: { label: "Nouveau", color: "bg-blue-100 text-blue-800" },
  contacted: { label: "Contacté", color: "bg-yellow-100 text-yellow-800" },
  negotiating: { label: "En négociation", color: "bg-purple-100 text-purple-800" },
  won: { label: "Gagné", color: "bg-green-100 text-green-800" },
  lost: { label: "Perdu", color: "bg-red-100 text-red-800" },
} as const