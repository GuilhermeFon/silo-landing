// import Image from "next/image";
import {ShieldCheck, Handshake} from "lucide-react";

const Compromisse = () => {
  return (
    <section className="container mx-auto px-4 py-10 lg:py-20 flex flex-col md:flex-row items-center">
      {/* Imagem */}
      <div className="w-full md:w-1/2">
        {/* <Image
          src="/trust-image.jpg"
          alt="Cliente satisfeito utilizando a Silo"
          className="rounded-lg shadow-lg"
        /> */}
      </div>

      {/* Texto */}
      <div className="w-full md:w-1/2 bg-gray-100 p-8 rounded-lg shadow-lg">
        <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
          Nossa Confiança
        </span>
        <h2 className="text-3xl font-bold text-gray-900 mt-4">
          Confiança e compromisso para impulsionar o seu negócio
        </h2>
        <p className="text-gray-700 mt-4">
          Na Silo, acreditamos que a confiança é essencial para o sucesso dos
          nossos clientes. Nosso compromisso é oferecer soluções digitais de
          alta qualidade, garantindo segurança, transparência e suporte contínuo
          para seu crescimento.
        </p>

        {/* Itens de Confiança */}
        <div className="mt-6 space-y-4">
          <div className="flex items-start">
            <ShieldCheck className="w-8 h-8 text-primary mr-3" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Segurança e Qualidade
              </h3>
              <p className="text-gray-600">
                Utilizamos as melhores práticas do mercado para garantir que sua
                experiência digital seja confiável, eficiente e inovadora.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <Handshake className="w-8 h-8 text-primary mr-3" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Parceria de Longo Prazo
              </h3>
              <p className="text-gray-600">
                Mais do que um serviço, somos um parceiro estratégico no seu
                crescimento, ajudando a transformar ideias em resultados
                concretos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Compromisse;
