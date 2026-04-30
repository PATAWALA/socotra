export const COMPANY_INFO = {
  name: "SOCOTRA",
  fullName: "Société de Commerce et de Transport",
  founded: 1999,
  tractors: 200,
  employees: 160,
  capital: "100 millions FCFA",
  location: "Abidjan, Côte d'Ivoire",
  address: "Zone Industrielle, Abidjan",
  phone: "+225 27 21 00 00 00",
  email: "contact@socotra.ci",
  coverage: [
    "Côte d'Ivoire",
    "Burkina Faso",
    "Mali",
    "Guinée",
    "Sénégal",
    "Ghana",
    "Bénin"
  ]
} as const;

export const SERVICES = [
  {
    id: "agricultural",
    title: "Transport Agricole",
    shortDescription: "Transport sécurisé de matières premières agricoles",
    description: "Nous assurons le transport de vos matières premières agricoles (cacao, café, coton, anacarde) vers les ports d'exportation et les usines de transformation. Notre expertise dans ce domaine nous permet de garantir la qualité et l'intégrité de vos produits tout au long de la chaîne logistique.",
    features: [
      "Transport de cacao et café",
      "Transport de coton",
      "Transport d'anacarde",
      "Transport de produits vivriers"
    ],
    icon: "Wheat",
    badge: "Spécialité historique",
    color: "from-green-600 to-emerald-800"
  },
  {
    id: "petroleum",
    title: "Transport Pétrolier",
    shortDescription: "Transport d'hydrocarbures en toute sécurité",
    description: "Notre flotte dédiée au transport pétrolier respecte les normes de sécurité internationales les plus strictes. Nous transportons vos produits pétroliers avec des équipements spécialisés et un personnel hautement qualifié.",
    features: [
      "Transport de carburants",
      "Transport de gaz",
      "Transport de produits dérivés",
      "Respect des normes ADR"
    ],
    icon: "Fuel",
    badge: "Haute sécurité",
    color: "from-red-600 to-red-800"
  },
  {
    id: "cement",
    title: "Transport de Ciment",
    shortDescription: "Solutions logistiques pour la construction",
    description: "Nous proposons des solutions complètes pour le transport de ciment, que ce soit en vrac ou en sacs. Notre capacité de chargement et notre flotte adaptée nous permettent de répondre aux besoins des plus grands chantiers.",
    features: [
      "Transport de ciment en vrac",
      "Transport de ciment en sacs",
      "Chargements complets",
      "Délais optimisés"
    ],
    icon: "Building",
    badge: "Volume important",
    color: "from-gray-600 to-gray-800"
  },
  {
    id: "containers",
    title: "Transport Conteneurs",
    shortDescription: "Acheminement portuaire et régional",
    description: "Depuis le port d'Abidjan, nous acheminons vos conteneurs vers toutes les destinations en Côte d'Ivoire et dans la sous-région. Notre service inclut la gestion des formalités douanières pour une prise en charge complète.",
    features: [
      "Transport depuis le port d'Abidjan",
      "Dédouanement",
      "Livraison porte à porte",
      "Suivi en temps réel"
    ],
    icon: "Ship",
    badge: "Corridor logistique",
    color: "from-sky-600 to-blue-800"
  },
  {
    id: "logistics",
    title: "Logistique & Stockage",
    shortDescription: "Solutions de stockage et gestion",
    description: "Nous mettons à votre disposition des entrepôts sécurisés pour le stockage temporaire de vos marchandises. Notre service de cross-docking optimise vos flux logistiques et réduit vos délais de livraison.",
    features: [
      "Stockage sécurisé",
      "Gestion des stocks",
      "Cross-docking",
      "Préparation de commandes"
    ],
    icon: "Warehouse",
    badge: "Valeur ajoutée",
    color: "from-purple-600 to-purple-800"
  },
  {
    id: "international",
    title: "Transport International",
    shortDescription: "Couverture sous-régionale complète",
    description: "Notre réseau de partenaires et notre présence dans 7 pays de l'Afrique de l'Ouest nous permettent d'offrir des solutions de transport international fiables et compétitives.",
    features: [
      "Burkina Faso",
      "Mali",
      "Guinée",
      "Sénégal",
      "Ghana",
      "Bénin"
    ],
    icon: "Globe",
    badge: "Sous-régional",
    color: "from-amber-500 to-orange-700"
  }
] as const;

export const AWARDS = [
  {
    title: "Grand Prix des Transports d'Afrique de l'Ouest",
    year: "2017",
    description: "Plus haute distinction du secteur du transport régional, récompensant l'excellence opérationnelle et l'innovation.",
    icon: "Trophy"
  },
  {
    title: "Prix d'Excellence Alassane Ouattara",
    year: "2015 & 2017",
    description: "Prestigieuse récompense nationale honorant les entreprises ivoiriennes les plus performantes.",
    icon: "Star"
  },
  {
    title: "Meilleure Entreprise de Transport",
    year: "2016",
    description: "Reconnaissance sectorielle majeure pour la qualité de service et le professionnalisme.",
    icon: "Award"
  }
] as const;

export const STATS = [
  { value: "25+", label: "Années d'expérience", suffix: "depuis 1999" },
  { value: "200+", label: "Tracteurs", suffix: "flotte moderne" },
  { value: "160", label: "Employés", suffix: "équipe qualifiée" },
  { value: "100M", label: "Capital FCFA", suffix: "solidité financière" },
  { value: "24/7", label: "Assistance", suffix: "service continu" },
  { value: "7", label: "Pays couverts", suffix: "Afrique de l'Ouest" }
] as const;

export const SYSTEM_FEATURES = [
  {
    title: "Gestion de Flotte",
    description: "Suivi en temps réel de l'ensemble de notre parc de véhicules",
    icon: "Truck"
  },
  {
    title: "Maintenance",
    description: "Entretien préventif et curatif par notre équipe technique dédiée",
    icon: "Wrench"
  },
  {
    title: "Géolocalisation",
    description: "Localisation GPS de toutes vos marchandises en transit",
    icon: "MapPin"
  },
  {
    title: "Gestion Carburant",
    description: "Optimisation de la consommation et traçabilité complète",
    icon: "Gauge"
  },
  {
    title: "Assistance 24/7",
    description: "Une équipe disponible en permanence pour vos urgences",
    icon: "Headphones"
  },
  {
    title: "Sécurité",
    description: "Protocoles stricts et assurance tous risques",
    icon: "Shield"
  }
] as const;