'use client';

import { motion } from 'framer-motion';
import { MoveRight, MoveLeft } from 'lucide-react';
import Image, { StaticImageData } from 'next/image';
import { useState, useRef, useEffect, useMemo } from 'react';

import BurguerCaseImage from '@/assets/images/burguer-case.png';
import FinanceDashCaseImage from '@/assets/images/finance-dash-case.png';
import GrowSolarCaseImage from '@/assets/images/grow-solar-case.png';
import LkSneakersCaseImage from '@/assets/images/lk-sneakers-case.png';
import MaoNaRodaCaseImage from '@/assets/images/mao-na-roda-case.png';
import Modal from '@/components/Modal';

interface CaseItem {
  title: string;
  description: string;
  image: string | StaticImageData;
  longDescription?: string;
  link?: string;
}

const Cases = () => {
  const caseData = useMemo(
    () => [
      {
        title: 'LK Sneakers',
        description:
          'Landing page para uma loja de tênis com design moderno e atrativo.',
        image: LkSneakersCaseImage,
        longDescription:
          'Landing page desenvolvida para a loja de tênis LK Sneakers, focada em um design moderno e atrativo que impulsiona a experiência do usuário e aumenta as vendas.',
        link: 'https://page.lksneakers.com/',
      },
      {
        title: 'Finance Dash',
        description:
          'Sistema de controle financeiro para gerenciar suas finanças com eficiência.',
        image: FinanceDashCaseImage,
        longDescription:
          'Sistema de controle financeiro desenvolvido para facilitar o gerenciamento de finanças pessoais e empresariais, com foco em usabilidade e relatórios detalhados.',
        link: '/cases/finance-dash',
      },
      {
        title: 'Mão na Roda',
        description:
          'Site de serviços que conecta clientes a profissionais qualificados.',
        image: MaoNaRodaCaseImage,
        longDescription:
          'Plataforma online que conecta clientes a profissionais qualificados em diversas áreas de serviços, com interface intuitiva e sistema de avaliação.',
        link: '/cases/mao-na-roda',
      },
      {
        title: 'Burguer Pro',
        description: 'Landing page para um curso de hambúrguer artesanal.',
        image: BurguerCaseImage,
        longDescription:
          'Landing page criada para promover um curso de hambúrguer artesanal, destacando os diferenciais do curso e atraindo alunos interessados em gastronomia.',
        link: '/cases/burguer-pro',
      },
      {
        title: 'Grow Solar',
        description:
          'Landing page de alta conversão para geração de leads em energia solar.',
        image: GrowSolarCaseImage,
        longDescription:
          'Landing page otimizada para conversão, focada em atrair leads qualificados para soluções de energia solar, com design limpo e informações estratégicas.',
        link: '/cases/grow-solar',
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
              <MoveLeft />
            </button>
            <button
              onClick={scrollRight}
              disabled={!canScrollRight}
              className="bg-primary text-primary-foreground hover:bg-primary/90 p-2 rounded-full shadow-md transition-colors disabled:opacity-50 cursor-pointer disabled:cursor-default"
            >
              <MoveRight />
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
