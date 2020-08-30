import React from 'react';
import Link from 'next/link';
import { NextSeo } from 'next-seo';

import styles from './header.module.scss';
import ContactHeader from '../ContactHeader';

interface IProps {
  type: 'transparent' | 'filled';
  title: string;
}

const Header: React.FC<IProps> = ({ type, title }) => {
  let headerStyle = null;
  if (type === 'filled') {
    headerStyle = styles.filled;
  } else if (type === 'transparent') {
    headerStyle = styles.transparent;
  }

  return (
    <>
      <NextSeo
        title={title}
        description="A Zenite Clean é uma empresa que presta serviços de limpeza de ambientes ou estofados para terceiros."
      />
      <ContactHeader />
      <header className={headerStyle}>
        <Link href="./institucional">
          <a>Institucional</a>
        </Link>
        <Link href="/guia-limpeza">
          <a>Guia de Limpeza</a>
        </Link>
        <Link href="/contato">
          <a>Contato</a>
        </Link>
        <Link href="/contato">
          <a>Fale com a gente</a>
        </Link>
      </header>
    </>
  );
};

export default Header;
