// src/components/forms/quote-form.tsx
"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"
import { Loader2, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { quoteFormSchema, type QuoteFormData } from "@/lib/validations/quote-schema"
import { createClient } from "@/lib/supabase/client"
import { serviceTypes } from "@/lib/utils/constants"

export function QuoteForm() {
  const supabase = createClient()
  
  const form = useForm<QuoteFormData>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: {
      companyName: "",
      contactName: "",
      email: "",
      phone: "",
      serviceType: undefined,
      origin: "",
      destination: "",
      cargoType: "",
      cargoWeight: undefined,
      description: "",
    },
  })

  const { isSubmitting } = form.formState

  async function onSubmit(data: QuoteFormData) {
    try {
      const { error } = await supabase
        .from("quote_requests")
        .insert({
          company_name: data.companyName,
          contact_name: data.contactName,
          email: data.email,
          phone: data.phone,
          service_type: data.serviceType,
          origin: data.origin,
          destination: data.destination,
          cargo_type: data.cargoType,
          cargo_weight: data.cargoWeight || null,
          description: data.description || null,
          status: "new",
        })

      if (error) throw error

      toast.success("Votre demande de devis a été envoyée avec succès !", {
        description: "Notre équipe commerciale vous contactera dans les 24 heures.",
      })
      
      form.reset()
    } catch (error) {
      console.error("Error submitting quote:", error)
      toast.error("Erreur lors de l'envoi", {
        description: "Veuillez réessayer ou nous contacter directement par téléphone.",
      })
    }
  }

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-socotra-blue">
          Demande de Devis Transport
        </CardTitle>
        <CardDescription>
          Remplissez ce formulaire pour obtenir un devis personnalisé sous 24 heures.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Section Informations Entreprise */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-socotra-dark">
                Informations de l&apos;entreprise
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="companyName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nom de l&apos;entreprise</FormLabel>
                      <FormControl>
                        <Input placeholder="Ex: Société Ivoirienne de Commerce" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="contactName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nom du contact</FormLabel>
                      <FormControl>
                        <Input placeholder="Ex: Jean Kouassi" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email professionnel</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="contact@entreprise.ci" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Téléphone</FormLabel>
                      <FormControl>
                        <Input placeholder="+225 XX XXXXXX" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Section Détails du Transport */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-socotra-dark">
                Détails du transport
              </h3>
              <FormField
                control={form.control}
                name="serviceType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Type de service</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Sélectionnez le type de service" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {serviceTypes.map((service) => (
                          <SelectItem key={service.value} value={service.value}>
                            {service.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="origin"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Point de départ</FormLabel>
                      <FormControl>
                        <Input placeholder="Ex: Abidjan" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="destination"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Destination</FormLabel>
                      <FormControl>
                        <Input placeholder="Ex: Bamako" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="cargoType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Type de marchandise</FormLabel>
                      <FormControl>
                        <Input placeholder="Ex: Cacao, ciment..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="cargoWeight"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Poids estimé (tonnes)</FormLabel>
                      <FormControl>
                        <Input 
                          type="number" 
                          placeholder="Ex: 25" 
                          {...field}
                          onChange={(e) => field.onChange(e.target.value ? Number(e.target.value) : undefined)}
                        />
                      </FormControl>
                      <FormDescription>
                        Optionnel - nous aide à estimer les ressources nécessaires
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Précisions complémentaires</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Détails supplémentaires sur vos besoins spécifiques..."
                        className="min-h-[100px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button 
              type="submit" 
              className="w-full bg-socotra-orange hover:bg-orange-600"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Envoi en cours...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  Envoyer la demande de devis
                </>
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}