import React from 'react';
import { NextSeo } from 'next-seo';
import Link from 'next/link';

import styles from '../styles/pages/index.module.scss';

const Home: React.FC = () => (
  <>
    <NextSeo title="Zenite Clean &#8211; Higienização e Limpeza" />

    <main className={styles.homepage}>
      <div className={styles.homepage__overlay} />
      <div className={styles.homepage__title}>
        Para onde seria este serviço?
      </div>
      <div className={styles.homepage__buttons}>
        <Link href="residencial">
          <a>minha casa</a>
        </Link>
        <Link href="empresarial">
          <a>minha empresa</a>
        </Link>
      </div>
    </main>
  </>
);

export default Home;
