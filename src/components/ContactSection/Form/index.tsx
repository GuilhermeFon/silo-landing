'use client';
import { useState } from 'react';

import { Button } from '../../ui/button';
import { Input } from '../../ui/input';
import { Textarea } from '../../ui/textarea';

const Form = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: null, message: '' });

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({
          type: 'success',
          message:
            'Mensagem enviada com sucesso! Entraremos em contato em breve.',
        });
        form.reset();
        setTimeout(() => {
          setIsVisible(false);
          setStatus({ type: null, message: '' });
        }, 3000);
      } else {
        setStatus({
          type: 'error',
          message: data.error || 'Erro ao enviar mensagem. Tente novamente.',
        });
      }
    } catch {
      setStatus({
        type: 'error',
        message: 'Erro de conexão. Verifique sua internet e tente novamente.',
      });
    } finally {
      setIsLoading(false);
    }
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
        <div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              name="name"
              placeholder="Nome"
              required
              disabled={isLoading}
            />
            <Input
              name="email"
              type="email"
              placeholder="E-mail"
              required
              disabled={isLoading}
            />
            <Textarea
              name="message"
              placeholder="Mensagem"
              required
              className="min-h-[100px]"
              disabled={isLoading}
            />
            <Button
              type="submit"
              className="w-full cursor-pointer"
              disabled={isLoading}
            >
              {isLoading ? 'Enviando...' : 'Enviar Mensagem'}
            </Button>
          </form>

          {status.type && (
            <div
              className={`mt-4 p-4 rounded-lg ${
                status.type === 'success'
                  ? 'bg-green-100 text-green-800 border border-green-300'
                  : 'bg-red-100 text-red-800 border border-red-300'
              }`}
            >
              {status.message}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Form;
