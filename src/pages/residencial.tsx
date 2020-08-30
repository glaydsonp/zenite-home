import React from 'react';
import Header from '../components/Header';

const Residencial: React.FC = () => {
  const text = 'This is my Residencial Component';
  return (
    <>
      <Header
        type="transparent"
        title="Zenite Clean - Higienização e Limpeza Residencial"
      />
      <div>{text}</div>
    </>
  );
};

export default Residencial;
