'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useRef, useEffect, useMemo } from 'react'; // Adicionado useMemo

import Modal from '@/components/Modal';

// Defina o tipo para um case
interface CaseItem {
  title: string;
  description: string;
  image: string;
  longDescription?: string;
}

const Cases = () => {
  const caseData = useMemo(
    () => [
      {
        title: 'Plataforma E-commerce',
        description: 'Varejista de moda viu aumento de 150% nas vendas online',
        image:
          'https://images.unsplash.com/photo-1491897554428-130a60dd4757?auto=format&fit=crop&w=800&q=80',
        longDescription:
          'Uma descrição muito mais detalhada sobre o case da plataforma de e-commerce, explicando os desafios, a solução implementada e os resultados alcançados em detalhes. Este texto pode ser bem longo e formatado com parágrafos.',
      },
      {
        title: 'Site Corporativo',
        description: 'Empresa de tecnologia alcançou 200% mais leads',
        image:
          'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
        longDescription:
          'Detalhes sobre o desenvolvimento do site corporativo, as tecnologias utilizadas, o processo de design e como isso impactou a geração de leads da empresa de tecnologia.',
      },
      {
        title: 'Landing Page',
        description: 'Startup SaaS aumentou taxa de conversão em 75%',
        image:
          'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=800&q=80',
        longDescription:
          'Explicação completa sobre a criação da landing page, incluindo a estratégia de copywriting, o design focado em conversão e as métricas que demonstram o aumento da taxa de conversão para a startup SaaS.',
      },
      {
        title: 'Aplicativo Mobile',
        description: 'Fintech melhorou engajamento em 120% com novo app',
        image:
          'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80',
        longDescription:
          'Discussão aprofundada sobre o desenvolvimento do aplicativo mobile, desde a concepção da UX/UI até a implementação e o impacto nos KPIs da fintech.',
      },
      {
        title: 'Sistema de Gestão',
        description:
          'Indústria otimizou processos em 60% com software customizado',
        image:
          'https://images.unsplash.com/photo-1580894732444-8ec53b89d8ef?auto=format&fit=crop&w=800&q=80',
        longDescription:
          'Análise do sistema de gestão desenvolvido sob medida para a indústria, focando nos ganhos de eficiência e na otimização de processos internos.',
      },
    ],
    [],
  );

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCase, setSelectedCase] = useState<CaseItem | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const openModal = (caseItem: CaseItem) => {
    setSelectedCase(caseItem);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCase(null);
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        type: 'spring' as const,
        stiffness: 100,
        damping: 10,
      },
    }),
  };

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 1);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      checkScrollButtons();

      let debounceTimeout: NodeJS.Timeout;
      const debouncedCheck = () => {
        clearTimeout(debounceTimeout);
        debounceTimeout = setTimeout(checkScrollButtons, 150);
      };

      container.addEventListener('scroll', debouncedCheck);
      window.addEventListener('resize', debouncedCheck);

      const images = Array.from(container.querySelectorAll('img'));
      let loadedImagesCount = 0;

      const handleImageLoadOrError = () => {
        loadedImagesCount++;
        if (loadedImagesCount >= images.length) {
          debouncedCheck();
        }
      };

      if (images.length === 0) {
        debouncedCheck();
      } else {
        images.forEach((img) => {
          if (img.complete) {
            handleImageLoadOrError();
          } else {
            img.addEventListener('load', handleImageLoadOrError);
            img.addEventListener('error', handleImageLoadOrError);
          }
        });
      }

      return () => {
        container.removeEventListener('scroll', debouncedCheck);
        window.removeEventListener('resize', debouncedCheck);
        images.forEach((img) => {
          img.removeEventListener('load', handleImageLoadOrError);
          img.removeEventListener('error', handleImageLoadOrError);
        });
        clearTimeout(debounceTimeout);
      };
    }
  }, [caseData]);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 disable-text-selection">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Cases de Sucesso
        </h2>
        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto space-x-8 pb-8 no-scrollbar"
          >
            {caseData.map((caseItem, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                className="group relative flex-shrink-0 w-80 h-110 lg:w-100 lg:h-120 rounded-lg overflow-hidden shadow-lg cursor-pointer transform transition-all duration-800 hover:scale-105"
                onClick={() => openModal(caseItem)}
              >
                <Image
                  src={caseItem.image}
                  alt={caseItem.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-800 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    {caseItem.title}
                  </h3>
                  <p className="text-gray-200 text-sm">
                    {caseItem.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-end space-x-4">
            <button
              onClick={scrollLeft}
              disabled={!canScrollLeft}
              className="bg-primary text-primary-foreground hover:bg-primary/90 p-2 rounded-full shadow-md transition-colors disabled:opacity-50 cursor-pointer disabled:cursor-default"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>
            <button
              onClick={scrollRight}
              disabled={!canScrollRight}
              className="bg-primary text-primary-foreground hover:bg-primary/90 p-2 rounded-full shadow-md transition-colors disabled:opacity-50 cursor-pointer disabled:cursor-default"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        caseData={selectedCase}
      />
    </section>
  );
};

export default Cases;
