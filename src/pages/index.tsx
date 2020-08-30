import React from 'react';
import Head from 'next/head';
import { Main, Button, Buttons, H1 } from '../styles/main';

const Home: React.FC = () => (
  <>
    <Head>
      <title>Zenite Clean &#8211; Higienização e Limpeza</title>
    </Head>

    <Main>
      <H1>Para onde seria este serviço?</H1>
      <Buttons>
        <Button>
          Minha casa
        </Button>
        <Button>
          Minha empresa
        </Button>
      </Buttons>
    </Main>
  </>
);

// const styles = {
//   main: {
//   },

//   button: {
//     backgroundColor: 'red',
//   }
// }

export default Home;
