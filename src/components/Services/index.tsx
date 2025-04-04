import {
  Globe,
  ShoppingBag,
  Smartphone,
  BarChart,
  Palette,
  Search,
  FileText,
  Rocket,
} from 'lucide-react';

import SpotlightCard from '../SpotlightCard/SpotlightCard';

const Services = () => {
  const services = [
    {
      icon: <Smartphone className="h-8 w-8 text-primary" />,
      title: 'Landing Pages',
      description:
        'Landing pages de alta conversão projetadas para suas campanhas',
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: 'Sites',
      description:
        'Sites personalizados que refletem sua marca e geram resultados',
    },
    {
      icon: <ShoppingBag className="h-8 w-8 text-primary" />,
      title: 'E-commerce',
      description:
        'Lojas online poderosas que convertem visitantes em clientes',
    },
    {
      icon: <Rocket className="h-8 w-8 text-primary" />,
      title: 'Transformação Digital',
      description:
        'Ajudo sua empresa a se posicionar no mercado.',
    },
    {
      icon: <BarChart className="h-8 w-8 text-primary" />,
      title: 'Gestão de Tráfego',
      description:
        'Estratégias personalizadas para atrair o público certo para seu negócio',
    },
    {
      icon: <Palette className="h-8 w-8 text-primary" />,
      title: 'Identidade Visual',
      description:
        'Design de marca que comunica seus valores e conecta com seu público',
    },
    {
      icon: <Search className="h-8 w-8 text-primary" />,
      title: 'SEO e Otimização',
      description:
        'Melhore seu ranking nos buscadores e aumente sua visibilidade online',
    },
    {
      icon: <FileText className="h-8 w-8 text-primary" />,
      title: 'Marketing de Conteúdo',
      description:
        'Conteúdo estratégico que engaja seu público e fortalece sua autoridade',
    },
  ];

  return (
    <section
      id="services"
      aria-label="Seção de serviços"
      className=" mx-auto px-4 py-10 lg:py-20 text-center bg-muted/30"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">
          Nossos Serviços
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <SpotlightCard
              key={index}
              className="p-8 rounded-lg hover:shadow-lg transition-shadow flex flex-col items-center"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
