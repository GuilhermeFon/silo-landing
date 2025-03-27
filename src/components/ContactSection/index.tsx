import Form from "./Form";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Pronto para Começar?</h2>
          <p className="text-muted-foreground mb-8">
            Vamos discutir como podemos transformar sua presença digital e
            alcançar seus objetivos de negócio
          </p>
          <Form />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
