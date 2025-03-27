import {Lightbulb, Target, Trophy} from "lucide-react";

const AboutSection = () => {
  return (
    <section className="container mx-auto px-4 pt-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Sobre Nós</h1>
        <p className="text-lg text-muted-foreground mb-12">
          Somos uma agência digital apaixonada por criar experiências digitais
          excepcionais. Nossa equipe combina criatividade e tecnologia para
          entregar soluções que impulsionam o crescimento dos nossos clientes.
        </p>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Nossa Missão</h2>
          <p className="text-muted-foreground">
            Transformar ideias em experiências digitais memoráveis que geram
            resultados reais para nossos clientes.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-6">Nossos Valores</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-lg">
              <Lightbulb className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Inovação</h3>
            </div>
            <div className="bg-card p-6 rounded-lg">
              <Trophy className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Qualidade</h3>
            </div>
            <div className="bg-card p-6 rounded-lg">
              <Target className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Resultados</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
