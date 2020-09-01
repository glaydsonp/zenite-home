import React from 'react';
import Header from '../components/Header';
import HeaderNavImages from '../components/HeaderNavImages';

import { ImagensResidencial } from '../components/ImagesExport/ResidencialExporter';

const Residencial: React.FC = () => {
  const text = 'This is my Residencial Component';
  return (
    <>
      <Header
        type="transparent"
        title="Zenite Clean - Higienização e Limpeza Residencial"
      />
      <HeaderNavImages
        title="Zenite Clean - Higienização e Limpeza Residencial"
        images={ImagensResidencial}
      />
    </>
  );
};

export default Residencial;
