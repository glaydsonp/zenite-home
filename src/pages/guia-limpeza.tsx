import React, { useState } from 'react';
import Header from '../components/Header';
import styles from '../styles/pages/guia-limpeza.module.scss';
import ArrowIcon from '../assets/icons/info-arrow.svg';

interface Button {
  btnText: string;
  text: string;
  id: number;
}

const CleanessGuide: React.FC = () => {
  const [showInfos, setShowInfos] = useState([])

  const infos: Button[] = [
    {
      btnText: 'Quais serviços nós oferecemos?',
      text: 'Texto teste',
      id: 1
    },
    {
      btnText: 'Como fazer orçamento?',
      text: 'Texto teste',
      id: 2
    },
    {
      btnText: 'Quais cidades atendemos?',
      text: 'Texto teste',
      id: 3
    },
  ]

  const toggleInfos = (index: number) => {
    if (showInfos.includes(index)) {
      setShowInfos(showInfos.filter(i => i !== index));
    } else {
      setShowInfos([...showInfos, index])
    }
  }

  return (
    <>
      <Header
        type="filled"
        title="Zenite Clean &#8211; Higienização e Limpeza &#8211; Guia de Limpeza"
      />
      <div className={styles.main}>
        <div className={styles.container}>
          <div className={styles.container__title}>
            <span className={styles.container__title__main}>Guia de Limpeza</span>
            <span className={styles.container__title__sub}>Sabemos que podem surgir duvidas e por isso deixamos esse espaço</span>
          </div>
          <div className={styles.container__infoButtons}>
            {infos.map((info, index) => {
              return (
                <>
                  <div className={styles.container__infoButtons__button}>
                    <button key={index} onClick={() => toggleInfos(index)}>
                      <span>{info.btnText}</span>
                      <div className={styles.arrow}>
                        <ArrowIcon></ArrowIcon>

                      </div>
                    </button>

                    <div className={`${styles.infoArea} ${showInfos.includes(index) ? styles.display : ''}`}>
                      <p className={styles.infoArea__text}>
                        {info.text}
                      </p>
                    </div>
                  </div>
                </>
              )
            })}
          </div>
        </div>
      </div>
    </>
  );
};


export default CleanessGuide;
