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
      text: 'Texto teste'
    },
    {
      id: 2,
      description: 'Como fazer orçamento?',
      text: 'Texto teste'
    },
    {
      id: 3,
      description: 'Quais cidades atendemos?',
      text: 'Texto teste'
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
