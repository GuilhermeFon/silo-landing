import Image from "next/image";

const Cases = () => {
  const cases = [
    {
      title: "Plataforma E-commerce",
      description: "Varejista de moda viu aumento de 150% nas vendas online",
      image:
        "https://images.unsplash.com/photo-1491897554428-130a60dd4757?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Site Corporativo",
      description: "Empresa de tecnologia alcançou 200% mais leads",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Landing Page",
      description: "Startup SaaS aumentou taxa de conversão em 75%",
      image:
        "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">
          Cases de Sucesso
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((case_, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg"
            >
              <Image
                src={case_.image}
                alt={case_.title}
                width={256}
                height={300}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{case_.title}</h3>
                  <p className="text-muted-foreground">{case_.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cases;
