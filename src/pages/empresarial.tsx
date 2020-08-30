import React from 'react';
import Header from '../components/Header';

const Empresarial: React.FC = () => {
  const text = 'This is my Empresarial Component';
  return (
    <>
      <Header
        type="transparent"
        title="Zenite Clean &#8211; Higienização e Limpeza Empresarial"
      />
      <div>{text}</div>
    </>
  );
};

export default Empresarial;
