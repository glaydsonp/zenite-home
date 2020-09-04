import React from 'react';
import Header from '../components/Header';
import HeaderNavImages from '../components/HeaderNavImages';
import NossosServicos from '../components/NossosServicos';

import ImagemResidencialPrincipal from '../assets/images/hero-residencial.jpg';
import ImagemResidencial1 from '../assets/images/01-residencial-limpeza.jpg';
import ImagemResidencial2 from '../assets/images/02-residencial-higienizacao.jpg';
import ImagemResidencial3 from '../assets/images/03-residencial-nautica.jpg';
import ImagemResidencial4 from '../assets/images/04-residencial-posobra.jpg';
import BackgroundImage from '../assets/images/backgroundImage1.jpg';
import Footer from '../components/Footer';

const Residencial: React.FC = () => {
  const imagensResidencial = [
    {
      id: 'r-principal',
      image: ImagemResidencialPrincipal
    },
    {
      id: 'r3',
      image: ImagemResidencial1
    },
    {
      id: 'r4',
      image: ImagemResidencial2
    },
    {
      id: 'r5',
      image: ImagemResidencial3
    },
    {
      id: 'r6',
      image: ImagemResidencial4
    }
  ];
  return (
    <>
      <Header
        type="transparent"
        title="Zenite Clean - Higienização e Limpeza Residencial"
      />
      <HeaderNavImages images={imagensResidencial} />
      <NossosServicos
        images={imagensResidencial}
        backgroundImage={BackgroundImage}
      />
      <Footer />
    </>
  );
};

export default Residencial;
