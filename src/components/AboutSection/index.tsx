import { Lightbulb, Target, Trophy } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="container mx-auto px-4 pt-24 text-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Sobre Nós</h1>
        <p className="text-lg text-muted-foreground mb-12">
          Na Silo, somos movidos pelo propósito de criar experiências digitais que conectam, inspiram e geram valor. 
          Nossa equipe une criatividade, tecnologia e estratégia para desenvolver soluções que impulsionam o crescimento e a transformação dos nossos clientes.
        </p>

        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">Nossa Missão</h2>
          <p className="text-muted-foreground text-base">
            Transformar ideias em experiências digitais memoráveis, combinando design inteligente, inovação e foco em resultados reais.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-10">Nossos Valores</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card flex flex-col items-center justify-center gap-4 p-8 rounded-xl shadow-md">
              <Lightbulb className="h-10 w-10 text-primary" />
              <h3 className="text-xl font-semibold">Inovação</h3>
              <p className="text-sm text-muted-foreground">
                Buscamos sempre o novo para criar soluções relevantes e atualizadas.
              </p>
            </div>
            <div className="bg-card flex flex-col items-center justify-center gap-4 p-8 rounded-xl shadow-md">
              <Trophy className="h-10 w-10 text-primary" />
              <h3 className="text-xl font-semibold">Qualidade</h3>
              <p className="text-sm text-muted-foreground">
                Entregamos com excelência, atenção aos detalhes e compromisso com o impacto.
              </p>
            </div>
            <div className="bg-card flex flex-col items-center justify-center gap-4 p-8 rounded-xl shadow-md">
              <Target className="h-10 w-10 text-primary" />
              <h3 className="text-xl font-semibold">Resultados</h3>
              <p className="text-sm text-muted-foreground">
                Focamos no que importa: gerar valor e alcançar objetivos concretos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
