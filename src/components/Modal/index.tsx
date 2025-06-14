import { motion, AnimatePresence } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import { useEffect } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  caseData: {
    title: string;
    description: string;
    image: string | StaticImageData;
    longDescription?: string;
  } | null;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, caseData }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!caseData) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 50 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="bg-background rounded-xl shadow-xl p-6 w-full max-w-3xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-64 md:h-130 mb-6 rounded-xl overflow-hidden">
              <Image
                src={caseData.image}
                alt={caseData.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <h2 className="text-3xl font-bold mb-4">{caseData.title}</h2>
            <p className="text-muted-foreground mb-2">{caseData.description}</p>
            {caseData.longDescription ? (
              <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl max-w-none text-foreground">
                <p>{caseData.longDescription}</p>
              </div>
            ) : (
              <p className="text-foreground">
                Detalhes adicionais sobre este case estarão disponíveis em
                breve.
              </p>
            )}
            <button
              onClick={onClose}
              className="mt-6 bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-lg transition-colors float-end cursor-pointer"
            >
              Fechar
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
