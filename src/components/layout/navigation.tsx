"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { 
  Phone, 
  Mail, 
  MapPin, 
  ChevronDown,
  Menu,
  X,
  Clock,
  TrendingUp
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
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fermer le menu mobile quand le pathname change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    if (href.startsWith("/services")) return pathname.startsWith("/services");
    if (href.startsWith("/news")) return pathname.startsWith("/news");
    if (href.startsWith("/about")) return pathname.startsWith("/about");
    if (href.startsWith("/quote")) return pathname.startsWith("/quote");
    return pathname === href;
  }

  // Fonction pour naviguer et fermer le menu
  function handleMobileClick(href: string) {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
    router.push(href);
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
              <a href={`tel:${COMPANY_INFO.phone}`} className="flex items-center gap-2 hover:text-green-300">
                <Phone className="h-4 w-4 text-green-300" />
                {COMPANY_INFO.phone}
              </a>
              <a href={`mailto:${COMPANY_INFO.email}`} className="flex items-center gap-2 hover:text-green-300">
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
      <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-lg" : "bg-white/95 backdrop-blur"}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3" onClick={() => setIsMobileMenuOpen(false)}>
              <div className="relative w-10 h-10 rounded-lg overflow-hidden">
                <Image src="/images/hero/logo.jpg" alt="SOCOTRA" width={40} height={40} className="object-cover" />
              </div>
              <div>
                <span className="text-xl font-bold text-green-800">SOCOTRA</span>
                <span className="block text-[10px] text-gray-500 uppercase tracking-wider">Transport & Logistique</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navigation.map((item) => (
                <div key={item.name} className="relative" onMouseEnter={() => item.children && setActiveDropdown(item.name)} onMouseLeave={() => setActiveDropdown(null)}>
                  <Link
                    href={item.href}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-1 ${isActive(item.href) ? "text-green-700 bg-green-50" : "text-gray-700 hover:text-green-700 hover:bg-green-50"}`}
                  >
                    {item.name}
                    {item.children && <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === item.name ? "rotate-180" : ""}`} />}
                  </Link>
                  {item.children && activeDropdown === item.name && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 py-3 z-50">
                      {item.children.map((child) => (
                        <Link key={child.name} href={child.href} className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700" onClick={() => setActiveDropdown(null)}>
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Boutons Desktop */}
            <div className="hidden lg:flex items-center gap-3">
              <Link href="/quote?type=invest" className="flex items-center gap-1.5 px-4 py-2.5 bg-amber-500 text-white font-semibold rounded-lg hover:bg-amber-600 transition-all text-sm">
                <TrendingUp className="h-4 w-4" />
                Investir
              </Link>
              <Link href="/quote" className="px-5 py-2.5 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-all text-sm">
                Devis gratuit
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6 text-gray-700" /> : <Menu className="h-6 w-6 text-gray-700" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <>
            {/* Overlay pour fermer le menu en cliquant dehors */}
            <div className="lg:hidden fixed inset-0 bg-black/50 z-40" onClick={() => setIsMobileMenuOpen(false)} />
            
            <div className="lg:hidden fixed top-20 left-0 right-0 bg-white shadow-xl z-50 max-h-[calc(100vh-5rem)] overflow-y-auto">
              <div className="container mx-auto px-4 py-4 space-y-1">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <button
                      onClick={() => handleMobileClick(item.href)}
                      className={`block w-full text-left px-4 py-3 rounded-lg font-medium ${isActive(item.href) ? "text-green-700 bg-green-50" : "text-gray-700 hover:bg-green-50"}`}
                    >
                      {item.name}
                    </button>
                    {item.children && (
                      <div className="ml-4 space-y-1 border-l-2 border-green-200 pl-4">
                        {item.children.map((child) => (
                          <button
                            key={child.name}
                            onClick={() => handleMobileClick(child.href)}
                            className="block w-full text-left px-4 py-2 text-sm text-gray-600 hover:bg-green-50 rounded-lg"
                          >
                            {child.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                
                <div className="pt-4 space-y-2">
                  <button
                    onClick={() => handleMobileClick("/quote?type=invest")}
                    className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-amber-500 text-white font-semibold rounded-lg"
                  >
                    <TrendingUp className="h-4 w-4" />
                    Investir
                  </button>
                  <button
                    onClick={() => handleMobileClick("/quote")}
                    className="block w-full text-center px-6 py-3 bg-green-600 text-white font-semibold rounded-lg"
                  >
                    Devis gratuit
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </header>
    </>
  );
}