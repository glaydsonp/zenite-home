import React from 'react';
import Link from 'next/link';

import styles from './header.module.scss';

interface IProps {
  type: 'transparent' | 'filled';
}

const Header: React.FC<IProps> = ({ type }) => {
  let headerStyle = null;
  if (type === 'filled') {
    headerStyle = styles.filled;
  } else if (type === 'transparent') {
    headerStyle = styles.transparent;
  }

  return (
    <>
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
