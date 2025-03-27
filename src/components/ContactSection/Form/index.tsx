"use client";
import {useState} from "react";
import {Button} from "../../ui/button";
import {Input} from "../../ui/input";
import {Textarea} from "../../ui/textarea";

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xblgaloy", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
        setTimeout(() => setIsSubmitted(false), 3000);
      } else {
        alert("Erro ao enviar o formulário. Tente novamente.");
      }
    } catch {
      alert("Erro ao enviar o formulário. Tente novamente.");
    }
  };

  return (
    <div className="mt-8">
      {!isVisible ? (
        <Button
          onClick={() => setIsVisible(true)}
          className="w-full cursor-pointer"
        >
          Entre em Contato
        </Button>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input name="name" placeholder="Nome" required />
          <Input name="email" type="email" placeholder="E-mail" required />
          <Textarea
            name="message"
            placeholder="Mensagem"
            required
            className="min-h-[100px]"
          />
          <Button type="submit" className="w-full cursor-pointer">
            {isSubmitted ? "Mensagem enviada com sucesso!" : "Enviar Mensagem"}
          </Button>
        </form>
      )}
    </div>
  );
};

export default Form;
