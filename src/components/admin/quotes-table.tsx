// src/components/admin/quotes-table.tsx
"use client"

import { useState } from "react"
import { format } from "date-fns"
import { fr } from "date-fns/locale"
import { MoreHorizontal, Eye, CheckCircle2, XCircle, PhoneCall, Truck } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import type { Database } from "@/lib/supabase/database.types"
import { createClient } from "@/lib/supabase/client"
import { quoteStatuses, serviceTypes } from "@/lib/utils/constants"
import { toast } from "sonner"

type QuoteRequest = Database["public"]["Tables"]["quote_requests"]["Row"]

interface QuotesTableProps {
  quotes: QuoteRequest[]
}

export function QuotesTable({ quotes: initialQuotes }: QuotesTableProps) {
  const [quotes, setQuotes] = useState(initialQuotes)
  const [selectedQuote, setSelectedQuote] = useState<QuoteRequest | null>(null)
  const [isDetailsOpen, setIsDetailsOpen] = useState(false)
  const supabase = createClient()

  async function updateQuoteStatus(id: string, newStatus: QuoteRequest["status"]) {
    try {
      const { error } = await supabase
        .from("quote_requests")
        .update({ status: newStatus })
        .eq("id", id)

      if (error) throw error

      // Mise à jour locale
      setQuotes(quotes.map(q => 
        q.id === id ? { ...q, status: newStatus } : q
      ))

      if (selectedQuote?.id === id) {
        setSelectedQuote({ ...selectedQuote, status: newStatus })
      }

      toast.success("Statut mis à jour", {
        description: `La demande est maintenant "${quoteStatuses[newStatus].label}"`
      })
    } catch (error) {
      console.error("Error updating status:", error)
      toast.error("Erreur", {
        description: "Impossible de mettre à jour le statut"
      })
    }
  }

  function getStatusIcon(status: string) {
    switch (status) {
      case "new": return <Truck className="h-4 w-4" />
      case "contacted": return <PhoneCall className="h-4 w-4" />
      case "negotiating": return <Truck className="h-4 w-4" />
      case "won": return <CheckCircle2 className="h-4 w-4" />
      case "lost": return <XCircle className="h-4 w-4" />
      default: return null
    }
  }

  function getServiceLabel(type: string) {
    const service = serviceTypes.find(s => s.value === type)
    return service?.label || type
  }

  return (
    <>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Entreprise</TableHead>
              <TableHead>Contact</TableHead>
              <TableHead>Service</TableHead>
              <TableHead>Trajet</TableHead>
              <TableHead>Statut</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {quotes.length === 0 ? (
              <TableRow>
                <TableCell colSpan={7} className="text-center text-gray-500 py-8">
                  Aucune demande de devis pour le moment
                </TableCell>
              </TableRow>
            ) : (
              quotes.map((quote) => (
                <TableRow key={quote.id}>
                  <TableCell className="font-medium">
                    {format(new Date(quote.created_at), "dd/MM/yyyy", { locale: fr })}
                  </TableCell>
                  <TableCell>{quote.company_name}</TableCell>
                  <TableCell>
                    <div>
                      <div className="font-medium">{quote.contact_name}</div>
                      <div className="text-sm text-gray-500">{quote.email}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className="text-xs">
                      {getServiceLabel(quote.service_type)}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm">
                      <div>{quote.origin}</div>
                      <div className="text-gray-500">→ {quote.destination}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge className={quoteStatuses[quote.status].color}>
                      <span className="flex items-center gap-1.5">
                        {getStatusIcon(quote.status)}
                        {quoteStatuses[quote.status].label}
                      </span>
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem
                          onClick={() => {
                            setSelectedQuote(quote)
                            setIsDetailsOpen(true)
                          }}
                        >
                          <Eye className="mr-2 h-4 w-4" />
                          Voir les détails
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuLabel>Changer le statut</DropdownMenuLabel>
                        {Object.entries(quoteStatuses).map(([status, { label }]) => (
                          <DropdownMenuItem
                            key={status}
                            onClick={() => updateQuoteStatus(quote.id, status as QuoteRequest["status"])}
                            disabled={quote.status === status}
                          >
                            <span className="flex items-center gap-2">
                              {getStatusIcon(status)}
                              {label}
                            </span>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      {/* Modal de détails */}
      <Dialog open={isDetailsOpen} onOpenChange={setIsDetailsOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Détails de la demande de devis</DialogTitle>
            <DialogDescription>
              Reçue le {selectedQuote && format(new Date(selectedQuote.created_at), "dd MMMM yyyy à HH:mm", { locale: fr })}
            </DialogDescription>
          </DialogHeader>
          
          {selectedQuote && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-4">
                <h3 className="font-semibold mb-4">Information client</h3>
                <dl className="space-y-2 text-sm">
                  <div>
                    <dt className="text-gray-500">Entreprise</dt>
                    <dd className="font-medium">{selectedQuote.company_name}</dd>
                  </div>
                  <div>
                    <dt className="text-gray-500">Contact</dt>
                    <dd className="font-medium">{selectedQuote.contact_name}</dd>
                  </div>
                  <div>
                    <dt className="text-gray-500">Email</dt>
                    <dd>{selectedQuote.email}</dd>
                  </div>
                  <div>
                    <dt className="text-gray-500">Téléphone</dt>
                    <dd>{selectedQuote.phone}</dd>
                  </div>
                </dl>
              </Card>

              <Card className="p-4">
                <h3 className="font-semibold mb-4">Détails du transport</h3>
                <dl className="space-y-2 text-sm">
                  <div>
                    <dt className="text-gray-500">Service</dt>
                    <dd className="font-medium">{getServiceLabel(selectedQuote.service_type)}</dd>
                  </div>
                  <div>
                    <dt className="text-gray-500">Départ</dt>
                    <dd>{selectedQuote.origin}</dd>
                  </div>
                  <div>
                    <dt className="text-gray-500">Destination</dt>
                    <dd>{selectedQuote.destination}</dd>
                  </div>
                  <div>
                    <dt className="text-gray-500">Marchandise</dt>
                    <dd>{selectedQuote.cargo_type}</dd>
                  </div>
                  {selectedQuote.cargo_weight && (
                    <div>
                      <dt className="text-gray-500">Poids estimé</dt>
                      <dd>{selectedQuote.cargo_weight} tonnes</dd>
                    </div>
                  )}
                </dl>
              </Card>

              {selectedQuote.description && (
                <Card className="p-4 md:col-span-2">
                  <h3 className="font-semibold mb-2">Précisions complémentaires</h3>
                  <p className="text-sm text-gray-600">{selectedQuote.description}</p>
                </Card>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}