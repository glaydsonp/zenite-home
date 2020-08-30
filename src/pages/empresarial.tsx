import React from 'react';
import { NextSeo } from 'next-seo';
import Header from '../components/Header';

const Empresarial: React.FC = () => {
  const text = 'This is my Empresarial Component';
  return (
    <>
      <NextSeo
        title="Zenite Clean &#8211; Higienização e Limpeza Empresarial"
        description="A Zenite Clean é uma empresa que presta serviços de limpeza de ambientes ou estofados para terceiros."
      />
      <Header type="transparent" />
      <div>{text}</div>
    </>
  );
};

export default Empresarial;
