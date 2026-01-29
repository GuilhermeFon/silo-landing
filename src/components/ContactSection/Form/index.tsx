'use client';
import { useState } from 'react';

import { Button } from '../../ui/button';
import { Input } from '../../ui/input';
import { Textarea } from '../../ui/textarea';

const Form = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    const subject = `Contato via Site - ${name}`;
    const body = `Nome: ${name}\nE-mail: ${email}\n\nMensagem:\n${message}`;

    const mailtoLink = `mailto:contato@studiosilo.com.br?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="mt-8">
      {!isVisible ? (
        <Button
          onClick={() => setIsVisible(true)}
          className="px-6 py-3 min-h-16 rounded-xl text-xl font-semibold cursor-pointer backdrop-blur-md"
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
            Enviar Mensagem
          </Button>
        </form>
      )}
    </div>
  );
};

export default Form;
