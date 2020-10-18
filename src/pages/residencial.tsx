import React from 'react';
import Header from '../components/Header';
import HeaderNavImages from '../components/HeaderNavImages';
import NossosServicos from '../components/NossosServicos';
import OutrosServicos from '../components/OutrosServicos';
import Footer from '../components/Footer';

import ImagemResidencialPrincipal from '../assets/images/hero-residencial.jpg';
import ImagemResidencial1 from '../assets/images/01-residencial-limpeza.jpg';
import ImagemResidencial2 from '../assets/images/02-residencial-higienizacao.jpg';
import ImagemResidencial3 from '../assets/images/03-residencial-nautica.jpg';
import ImagemResidencial4 from '../assets/images/04-residencial-posobra.jpg';

const Residencial: React.FC = () => {
  const imagensResidencial = [
    {
      id: 'r-principal',
      image: ImagemResidencialPrincipal
    },
    {
      id: 'r4',
      image: ImagemResidencial2
    },
    {
      id: 'r5',
      image: '/nautico.jpg'
    },
    {
      id: 'r6',
      image: '/mesa.jpg'
    }
  ];

  const imagensResidencialCarousel = [
    {
      id: 'r-principal',
      image: '/banner-residencial-1.jpg'
    },
    {
      id: 'r-2',
      image: ImagemResidencial1
    },
    {
      id: 'r3',
      image: '/banner-residencial-2.jpg'
    },
    {
      id: 'r4',
      image: '/banner-residencial-3.jpg'
    },
    {
      id: 'r5',
      image: '/banner-residencial-4.jpg'
    }
  ];

  return (
    <>
      <Header
        type="transparent"
        title="Zenite Clean - Higienização e Limpeza Residencial"
      />
      <HeaderNavImages
        images={imagensResidencial}
        heroTitle="Serviços de A a Z para preservar, limpar, higienizar sua casa e
              carro"
      />
      <NossosServicos
        images={imagensResidencial}
        carouselImages={imagensResidencialCarousel}
      />
      <OutrosServicos />
      <Footer />
    </>
  );
};

export default Residencial;
