import React from 'react';
import Header from '../components/Header';

const CleanessGuide: React.FC = () => {
  const text = 'This is my CleanessGuide Component';
  return (
    <>
      <Header
        type="filled"
        title="Zenite Clean &#8211; Higienização e Limpeza &#8211; Guia de Limpeza"
      />
      <div>{text}</div>
    </>
  );
};

export default CleanessGuide;
