import React from 'react';
import { NextSeo } from 'next-seo';
import Header from '../components/Header';

const Institutional: React.FC = () => {
  const text = 'This is my Institutional Component';
  return (
    <>
      <NextSeo
        title="Zenite Clean &#8211; Higienização e Limpeza &#8211; Institucional"
        description="A Zenite Clean é uma empresa que presta serviços de limpeza de ambientes ou estofados para terceiros."
      />
      <Header type="filled" />
      <div>{text}</div>
    </>
  );
};

export default Institutional;
