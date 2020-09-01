import React from 'react';
import Header from '../components/Header';
import HeaderNavImages from '../components/HeaderNavImages';

import { ImagensResidencial } from '../components/ImagesExport/ImagesExporter';

const Residencial: React.FC = () => (
  <>
    <Header
      type="transparent"
      title="Zenite Clean - Higienização e Limpeza Residencial"
    />
    <HeaderNavImages images={ImagensResidencial} />
  </>
);

export default Residencial;
