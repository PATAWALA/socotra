"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Truck, 
  Phone, 
  Mail, 
  MapPin, 
  ChevronDown,
  Menu,
  X,
  Clock
} from "lucide-react";
import { COMPANY_INFO } from "@/lib/utils/constants";

const navigation = [
  { name: "Accueil", href: "/" },
  { 
    name: "Services", 
    href: "/services",
    children: [
      { name: "Transport Agricole", href: "/services#agricultural" },
      { name: "Transport Pétrolier", href: "/services#petroleum" },
      { name: "Transport de Ciment", href: "/services#cement" },
      { name: "Transport Conteneurs", href: "/services#containers" },
      { name: "Logistique & Stockage", href: "/services#logistics" },
      { name: "Transport International", href: "/services#international" },
    ]
  },
  { name: "Actualités", href: "/news" },
  { name: "À propos", href: "/about" },
  { name: "Contact", href: "/quote" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  // Fonction pour vérifier si le lien est actif
  function isActive(href: string) {
    if (href === "/") {
      return pathname === "/";
    }
    // Pour /services et toutes ses ancres
    if (href.startsWith("/services")) {
      return pathname.startsWith("/services");
    }
    // Pour les autres pages
    return pathname === href || pathname.startsWith(href);
  }

  return (
    <>
      {/* Top Bar */}
      <div className="hidden lg:block bg-green-900 text-white text-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-10">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-green-300" />
                Assistance 24/7
              </span>
              <a href={`tel:${COMPANY_INFO.phone}`} className="flex items-center gap-2 hover:text-green-300 transition-colors">
                <Phone className="h-4 w-4 text-green-300" />
                {COMPANY_INFO.phone}
              </a>
              <a href={`mailto:${COMPANY_INFO.email}`} className="flex items-center gap-2 hover:text-green-300 transition-colors">
                <Mail className="h-4 w-4 text-green-300" />
                {COMPANY_INFO.email}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-green-300" />
              {COMPANY_INFO.location}
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-white shadow-lg" 
            : "bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-green-600 rounded-lg rotate-6 transition-transform group-hover:rotate-12" />
                <div className="relative bg-green-700 p-2.5 rounded-lg z-10">
                  <Truck className="h-7 w-7 text-white" />
                </div>
              </div>
              <div>
                <span className="text-2xl font-bold text-green-800 tracking-tight">SOCOTRA</span>
                <span className="block text-[10px] text-gray-500 font-medium uppercase tracking-wider">
                  Transport & Logistique
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navigation.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.children && setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-1 ${
                      isActive(item.href)
                        ? "text-green-700 bg-green-50"
                        : "text-gray-700 hover:text-green-700 hover:bg-green-50"
                    }`}
                  >
                    {item.name}
                    {item.children && (
                      <ChevronDown className={`h-4 w-4 transition-transform ${
                        activeDropdown === item.name ? "rotate-180" : ""
                      }`} />
                    )}
                  </Link>

                  {/* Dropdown */}
                  {item.children && activeDropdown === item.name && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 py-3 z-50">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700 transition-colors"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <Link
                href="/quote"
                className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-all shadow-lg shadow-green-600/25 hover:shadow-green-600/40 hover:-translate-y-0.5"
              >
                Devis gratuit
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-gray-700" />
              ) : (
                <Menu className="h-6 w-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t bg-white shadow-xl">
            <div className="container mx-auto px-4 py-4 space-y-1">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className={`block px-4 py-3 rounded-lg font-medium ${
                      isActive(item.href)
                        ? "text-green-700 bg-green-50"
                        : "text-gray-700 hover:bg-green-50 hover:text-green-700"
                    }`}
                  >
                    {item.name}
                  </Link>
                  {item.children && (
                    <div className="ml-4 space-y-1 border-l-2 border-green-200 pl-4">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-gray-600 hover:bg-green-50 rounded-lg"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4">
                <Link
                  href="/quote"
                  className="block w-full text-center px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
                >
                  Devis gratuit
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}