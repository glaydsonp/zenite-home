import React from 'react';
import Header from '../components/Header';
import HeaderNavImages from '../components/HeaderNavImages';
import NossosServicos from '../components/NossosServicos';
import OutrosServicos from '../components/OutrosServicos';
import Footer from '../components/Footer';

import ImagemEmpresarialPrincipal from '../assets/images/hero-empresarial.jpg';
import ImagemEmpresarial1 from '../assets/images/01-empresarial-limpeza.jpg';
import ImagemEmpresarial2 from '../assets/images/02-empresarial-higienizacao.jpg';
import ImagemEmpresarial3 from '../assets/images/03-empresarial-nautica.jpg';
import ImagemEmpresarial4 from '../assets/images/04-residencial-posobra.jpg';

const Empresarial: React.FC = () => {
  const imagensIndustrial = [
    {
      id: 'r-principal',
      image: ImagemEmpresarialPrincipal
    },
    {
      id: 'r4',
      image: ImagemEmpresarial2
    },
    {
      id: 'r5',
      image: ImagemEmpresarial3
    },
    {
      id: 'r6',
      image: ImagemEmpresarial4
    }
  ];

  const imagensIndustrialCarousel = [
    {
      id: 'r-principal',
      image: ImagemEmpresarialPrincipal
    },
    {
      id: 'r3',
      image: ImagemEmpresarial1
    },
    {
      id: 'r4',
      image: ImagemEmpresarial2
    },
    {
      id: 'r5',
      image: ImagemEmpresarial3
    },
    {
      id: 'r6',
      image: ImagemEmpresarial4
    }
  ];

  return (
    <>
      <Header
        type="transparent"
        title="Zenite Clean - Higienização e Limpeza Residencial"
      />
      <HeaderNavImages
        images={imagensIndustrial}
        heroTitle="Serviços de A a Z para seu escritório, industria e empresa"
      />
      <NossosServicos
        images={imagensIndustrial}
        carouselImages={imagensIndustrialCarousel}
      />
      <OutrosServicos />
      <Footer />
    </>
  );
};

export default Empresarial;
