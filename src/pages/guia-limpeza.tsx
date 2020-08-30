import React from 'react';
import { NextSeo } from 'next-seo';
import Header from '../components/Header';

const CleanessGuide: React.FC = () => {
  const text = 'This is my CleanessGuide Component';
  return (
    <>
      <NextSeo
        title="Zenite Clean &#8211; Higienização e Limpeza &#8211; Guia de Limpeza"
        description="A Zenite Clean é uma empresa que presta serviços de limpeza de ambientes ou estofados para terceiros."
      />
      <Header type="filled" />
      <div>{text}</div>
    </>
  );
};

export default CleanessGuide;
