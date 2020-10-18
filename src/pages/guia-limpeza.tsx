import React from 'react';
import Header from '../components/Header';
import styles from '../styles/pages/guia-limpeza.module.scss';
import Accordion from '../components/Accordion';

interface AccordionData {
  id: number;
  description: string;
  text: string;
}

const CleanessGuide: React.FC = () => {
  const infos: AccordionData[] = [
    {
      id: 1,
      description: 'Quais serviços nós oferecemos?',
      text:
        'Nós da Zenite prestamos serviços de A a Z por isso atendemos tanto empresa quanto residência de: higienização de sofás, colchões e estofados, limpeza de surperficies como telhados, pisos e pedras, sanitização de ambientes desde veículos, aronaves, salas em geral e navios, impermebilização de estofados e tecidos, dedetização e descupinização para uma limpeza profunda para controle de pragas, manutenção de piscina, serviços gerais como pós obra e recolhimento de entulho e manutenção simples como limpeza de caixa dágua, podagem de árvores e capinação química.'
    },
    {
      id: 2,
      description: 'Como fazer orçamento?',
      text:
        'Basta clicar no botão "fale conosco" e selecionar qual melhor forma de contato ou em qualquer uma das páginas selecionar ícone do whatsapp para ser redirecionado ao nosso comercial. Qualquer duvida nos colocamos a disposição!'
    },
    {
      id: 3,
      description: 'Quais cidades atendemos?',
      text:
        'Hoje atuamos especificamente na região metropolitana de Campinas incluindo cidades um pouco mais afastadas como Nova odessa, Americana e Monter mor. Não fique com duvida, entre em contato com a gente!'
    }
  ];

  return (
    <>
      <Header
        type="filled"
        title="Zenite Clean &#8211; Higienização e Limpeza &#8211; Guia de Limpeza"
      />
      <div className={styles.main}>
        <div className={styles.container}>
          <div className={styles.container__title}>
            <span className={styles.container__title__main}>
              Guia de Limpeza
            </span>
            <span className={styles.container__title__sub}>
              Sabemos que podem surgir duvidas e por isso deixamos esse espaço
            </span>
          </div>
          <div className={styles.container__infoButtons}>
            {infos.map((info) => (
              <Accordion
                key={info.id}
                id={info.id}
                description={info.description}
                text={info.text}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

/*
<>
  <div className={styles.container__infoButtons__button}>
    <button
      type="button"
      key={info.id}
      onClick={() => toggleInfos(index)}
    >
      <span>{info.description}</span>
      <div className={styles.arrow}>
        <ArrowIcon />
      </div>
    </button>

    <div
      className={`${styles.infoArea} ${
        showInfos.includes(index) ? styles.display : ''
      }`}
    >
      <p className={styles.infoArea__text}>{info.text}</p>
    </div>
  </div>
</>
*/

export default CleanessGuide;
