export function StatsSection() {
  const stats = [
    { value: "200+", label: "Tracteurs" },
    { value: "160", label: "Collaborateurs" },
    { value: "100M", label: "Capital FCFA" },
    { value: "7", label: "Pays couverts" },
    { value: "25+", label: "Années d'expérience" },
  ];

  return (
    <section className="py-16 bg-green-900">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="text-3xl lg:text-4xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-green-300 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}