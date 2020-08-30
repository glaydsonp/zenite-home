import React from 'react';
import { NextSeo } from 'next-seo';
import Header from '../components/Header';

const Contact: React.FC = () => {
  const text = 'This is my Contact Component';
  return (
    <>
      <NextSeo
        title="Zenite Clean &#8211; Higienização e Limpeza &#8211; Contato"
        description="A Zenite Clean é uma empresa que presta serviços de limpeza de ambientes ou estofados para terceiros."
      />
      <Header type="filled" />
      <div>{text}</div>
    </>
  );
};

export default Contact;
