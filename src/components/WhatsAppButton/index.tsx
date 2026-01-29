'use client';

import WhatsappIcon from '@/assets/whatsapp.svg';

interface WhatsAppButtonProps {
  message?: string;
}

export default function WhatsAppButton({
  message = 'Olá! Gostaria de saber mais sobre os serviços.',
}: WhatsAppButtonProps) {
  
  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/5553997082816?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleWhatsAppClick}
        className="bg-green-500 hover:bg-green-600 cursor-pointer text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 group"
        aria-label="Entrar em contato via WhatsApp"
      >
        <WhatsappIcon size={24} />
      </button>
    </div>
  );
}
