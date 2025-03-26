import Link from "next/link";
import React from "react";
import {Globe, Brush, BarChart, Search, PenTool} from "lucide-react";

const ServicesSection = () => {
  return (
    <section
      id="services"
      aria-label="Seção de serviços"
      className="container mx-auto px-2 py-20 lg:py-20 text-center"
    >
      <h2 className="text-primary-reverse text-4xl font-bold mb-8">
        Tudo o que você precisa, em um só lugar!
      </h2>

      {/* Container da grade */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Criação de Sites */}
        <div className="bg-primary-reverse flex flex-col items-center justify-evenly border p-8 rounded-lg shadow-md h-full">
          <Globe className="w-12 h-12 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Criação de Sites</h3>
          <p className="text-secondary text-center">
            Landing pages, institucionais e e-commerce
          </p>
        </div>

        {/* Identidade Visual */}
        <div className="bg-primary-reverse flex flex-col items-center justify-evenly border p-8 rounded-lg shadow-md h-full">
          <Brush className="w-12 h-12 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Identidade Visual</h3>
          <p className="text-secondary text-center">
            Logos, paleta de cores e design gráfico
          </p>
        </div>

        {/* Gestão de Tráfego Pago */}
        <div className="bg-primary-reverse flex flex-col items-center justify-evenly border p-8 rounded-lg shadow-md h-full">
          <BarChart className="w-12 h-12 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Gestão de Tráfego Pago</h3>
          <p className="text-secondary text-center">
            Anúncios no Google, Meta Ads e mais
          </p>
        </div>

        {/* SEO e Otimização */}
        <div className="bg-primary-reverse flex flex-col items-center justify-evenly border p-8 rounded-lg shadow-md h-full">
          <Search className="w-12 h-12 mb-4" />
          <h3 className="text-xl font-semibold mb-2">SEO e Otimização</h3>
          <p className="text-secondary text-center">
            Melhorando o ranking no Google
          </p>
        </div>

        {/* Marketing de Conteúdo */}
        <div className="bg-primary-reverse flex flex-col items-center justify-evenly border p-8 rounded-lg shadow-md h-full">
          <PenTool className="w-12 h-12 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Marketing de Conteúdo</h3>
          <p className="text-secondary text-center">
            Textos, blogs e e-mail marketing
          </p>
        </div>

        {/* Card Especial */}
        <div className="border p-8 rounded-lg flex flex-col justify-evenly text-white shadow-md h-full">
          <h3 className="text-xl font-semibold mb-4">
            Transforme as ideias da sua empresa em resultados! Trabalhe com especialistas.
          </h3>
          <Link
            href="/"
            className="bg-primary-reverse hover:bg-foreground-light text-foreground py-2 px-6 rounded-lg font-semibold transform transition-colors duration-300"
          >
            Conecte-se com nossos especialistas
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
