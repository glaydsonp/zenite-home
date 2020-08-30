import React from 'react';
import { NextSeo } from 'next-seo';
import Header from '../components/Header';

const Residencial: React.FC = () => {
  const text = 'This is my Residencial Component';
  return (
    <>
      <NextSeo
        title="Zenite Clean - Higienização e Limpeza Residencial"
        description="A Zenite Clean é uma empresa que presta serviços de limpeza de ambientes ou estofados para terceiros."
      />
      <Header type="transparent" />
      <div>{text}</div>
    </>
  );
};

export default Residencial;
