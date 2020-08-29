import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

import OnConstructionIcon from '../assets/on-construction-undraw.svg';

const Home: React.FC = () => (
  <>
    <Head>
      <title>Zenite Clean &#8211; Higienização e Limpeza</title>
    </Head>

    <main id="main__construction">
      <OnConstructionIcon />
      <h3>Site currently on construction.</h3>
      <Link href="about">About</Link>
    </main>
  </>
);

export default Home;
