// import Image from "next/image";
import Link from "next/link";
import React from "react";

const AllYouNeed = () => {
  return (
    <section
      id="allyouneed"
      aria-label="Seção de captação"
      className="container mx-auto px-2 py-20 lg:py-20 text-center"
    >
      <h2 className="text-primary-reverse text-4xl font-bold mb-8">
        Tudo o que você precisa, em um só lugar!
      </h2>

      {/* Container da grade */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Card de Serviço 1 */}
        <div className="bg-white flex flex-col justify-evenly border p-8 rounded-lg shadow-md h-full">
          <h3 className="text-xl font-semibold mb-4">Serviço de Encanamento</h3>
          <p className="text-foreground-light mb-4">
            Soluções rápidas para vazamentos e instalações
          </p>
          {/* <Image
            src={EncanamentoIcon}
            alt="Icone de Encanamento"
            width={48}
            height={48}
            className="w-12 h-12 mx-auto mb-4"
          /> */}
        </div>

        {/* Card de Serviço 2 */}
        <div className="bg-white flex flex-col justify-evenly border p-8 rounded-lg shadow-md h-full">
          <h3 className="text-xl font-semibold mb-4">Serviços de Limpeza</h3>
          <p className="text-foreground-light mb-4">
            Limpeza detalhada de residências e comércios
          </p>
          {/* <Image
            src={FaxinaIcon}
            alt="Icone de Limpeza"
            width={48}
            height={48}
            className="w-12 h-12 mx-auto mb-4"
          /> */}
        </div>

        {/* Card de Serviço 3 */}
        <div className="bg-white flex flex-col justify-evenly border p-8 rounded-lg shadow-md h-full">
          <h3 className="text-xl font-semibold mb-4">Serviço de Pintura</h3>
          <p className="text-foreground-light mb-4">
            Transforme seu ambiente com pintura profissional
          </p>
          {/* <Image
            src={PinturaIcon}
            alt="Icone de Pintura"
            width={48}
            height={48}
            className="w-12 h-12 mx-auto mb-4"
          /> */}
        </div>

        {/* Card de Serviço 4 */}
        <div className="bg-white flex flex-col justify-evenly border p-8 rounded-lg shadow-md h-full">
          <h3 className="text-xl font-semibold mb-4">Serviço de Eletrecista</h3>
          <p className="text-foreground-light mb-4">
            Instalações e reparos elétricos seguros
          </p>
          {/* <Image
            src={EletricistaIcon}
            alt="Icone de eletrecista"
            width={48}
            height={48}
            className="w-12 h-12 mx-auto mb-4"
          /> */}
        </div>

        {/* Card de Serviço 5 */}
        <div className="bg-white flex flex-col justify-evenly border p-8 rounded-lg shadow-md h-full">
          <h3 className="text-xl font-semibold mb-4">Serviço de Marceneiro</h3>
          <p className="text-foreground-light mb-4">
            Móveis sob medida e reparos em madeira
          </p>
          {/* <Image
            src={MarceneiroIcon}
            alt="Icone de Manutenção"
            width={48}
            height={48}
            className="w-12 h-12 mx-auto mb-4"
          /> */}
        </div>

        {/* Card de Serviço 6 */}
        <div className="bg-white flex flex-col justify-evenly border p-8 rounded-lg shadow-md h-full">
          <h3 className="text-xl font-semibold mb-4">Serviço de Jardinagem</h3>
          <p className="text-foreground-light mb-4">Deixe seu jardim sempre bonito</p>
          {/* <Image
            src={JardinagemIcon}
            alt="Icone de Manutenção"
            width={56}
            height={56}
            className="w-14 h-14 mx-auto mb-4"
          /> */}
        </div>

        {/* Card de Serviço 7 */}
        <div className="bg-white flex flex-col justify-evenly border p-8 rounded-lg shadow-md h-full">
          <h3 className="text-xl font-semibold mb-4">Serviço de Manutenção</h3>
          <p className="text-foreground-light mb-4">
            Reparos gerais e para sua casa ou empresa
          </p>
          {/* <Image
            src={FerramentasIcon}
            alt="Icone de Manutenção"
            width={48}
            height={48}
            className="w-12 h-12 mx-auto mb-4"
          /> */}
        </div>

        {/* Card especial */}
        <div className="border p-8 rounded-lg flex flex-col justify-evenly bg-yellow-500 text-white shadow-md h-full">
          <h3 className="text-xl font-semibold mb-4">
            Não perca tempo! Encontre quem entende do assunto!
          </h3>
          <Link
            href="/servicos"
            className="bg-[#1D69B7] py-2 px-6 rounded-lg hover:bg-[#082D53] transition-colors"
          >
            Encontre um profissional
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AllYouNeed;
