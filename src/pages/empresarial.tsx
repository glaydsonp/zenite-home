import React from 'react';
import Header from '../components/Header';
import HeaderNavImages from '../components/HeaderNavImages';
import NossosServicos from '../components/NossosServicos';
import Footer from '../components/Footer';

import ImagemEmpresarialPrincial from '../assets/images/hero-empresarial.jpg';
import ImagemEmpresarial1 from '../assets/images/01-empresarial-limpeza.jpg';
import ImagemEmpresarial2 from '../assets/images/02-empresarial-higienizacao.jpg';
import ImagemEmpresarial3 from '../assets/images/03-empresarial-nautica.jpg';
import BackgroundImage from '../assets/images/backgroundImage1.jpg';

const Empresarial: React.FC = () => {
  const imagensIndustrial = [
    {
      id: 'e1',
      image: ImagemEmpresarialPrincial
    },
    {
      id: 'e2',
      image: ImagemEmpresarial1
    },
    {
      id: 'e3',
      image: ImagemEmpresarial2
    },
    {
      id: 'e4',
      image: ImagemEmpresarial3
    }
  ];
  return (
    <>
      <Header
        type="transparent"
        title="Zenite Clean &#8211; Higienização e Limpeza Empresarial"
      />
      <HeaderNavImages images={imagensIndustrial} />
      <NossosServicos
        images={imagensIndustrial}
        backgroundImage={BackgroundImage}
      />
      <Footer />
    </>
  );
};

export default Empresarial;
