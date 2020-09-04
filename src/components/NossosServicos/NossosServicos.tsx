import React, { useEffect, useState } from 'react';
import { IImages } from '../../data/interfaces/Images.interface';
import { TIMER_CAROUSEL } from '../../app.config';

import PreviousIcon from '../../assets/icons/previous-icon.svg';
import NextIcon from '../../assets/icons/next-icon.svg';

import styles from './nossos-servicos.module.scss';

interface IProps {
  images: IImages[];
  backgroundImage: string;
}

const NossosServicos: React.FC<IProps> = ({ images, backgroundImage }) => {
  const [image, setImage] = useState<IImages>({
    ...images[0],
    active: true
  });

  const nextImage = () => {
    const imageSelectedIndex = images.findIndex((img) => img.id === image.id);
    if (imageSelectedIndex < images.length - 1) {
      return images[imageSelectedIndex + 1];
    }
    return images[0];
  };

  const prevImage = () => {
    const imageSelectedIndex = images.findIndex((img) => img.id === image.id);
    if (imageSelectedIndex > 0) {
      return images[imageSelectedIndex - 1];
    }
    return images[images.length - 1];
  };

  const slide = () => {
    setImage(nextImage());
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      slide();
    }, TIMER_CAROUSEL);
    return () => clearTimeout(timer);
  });

  return (
    <>
      <div className={styles.services}>
        <div className={styles.first__service}>
          <div className={styles.first__service__text}>
            <div className={styles.first__service__title}>
              <span>Nossos serviços</span> <strong>01 Limpeza</strong>
            </div>
            <div className={styles.first__service__description}>
              Nosso processo de lavagem para pisos externos não agride as
              superfícies, excluindo o uso de materiais à base de solventes e
              ácidos nas limpezas mais profundas. Para cada piso e pedras, são
              aplicados os produtos específicos e respeitando o tempo de ação e
              cura de cada um, todos produtos biodegradáveis, como por exemplo a
              aplicação nos telhados.
            </div>
          </div>
          <div className={styles.first__service__carousel}>
            <div className={styles.first__service__images}>
              <img src={image.image} alt={image.id} />
            </div>
            <div className={styles.first__service__arrows}>
              <button
                className={styles.first__service__arrows_prev}
                type="button"
                aria-label="Imagem anterior"
                onClick={() => {
                  setImage(prevImage());
                }}
              >
                <PreviousIcon />
              </button>
              <button
                className={styles.first__service__arrows_next}
                type="button"
                aria-label="Próxima imagem"
                onClick={() => {
                  setImage(nextImage());
                }}
              >
                <NextIcon />
              </button>
            </div>
          </div>
        </div>

        <div className={styles.other__services}>
          <div className={styles.other__services__overlay} />
          <div className={styles.other__services__wrapper}>
            <div className={styles.other__services__service}>
              <div className={styles.image__card}>
                <img src={images[2].image} alt="Higieniação" />
                <span className={styles.higienizacao}>02 Higienização</span>
              </div>
              <div className={styles.image__description}>
                Utilizamos na nossa formulação um poderoso agente bactericida
                que além de revitalizar o tecido, irá eliminar cerca de 90% dos
                agentes causadores dos processos alérgicos.
              </div>
            </div>
            <div className={styles.other__services__service}>
              <div className={styles.image__card}>
                <img src={images[3].image} alt="Linha Náutica" />
                <span className={styles.middle__span}>03 Linha Náutica</span>
              </div>
              <div className={styles.image__description}>
                Para garantir que os estofados permaneçam sempre novos, é
                importante a realização do nosso processo exclusivo de blindagem
                em tecidos náuticos.
              </div>
            </div>
            <div className={styles.other__services__service}>
              <div className={styles.image__card}>
                <img src={images[4].image} alt="Pós Obra" />
                <span className={styles.posObra}>04 Pós Obra</span>
              </div>
              <div className={styles.image__description}>
                Nosso serviço de limpeza é desenvolvido de forma customizada
                para diversos segmentos do mercado, com soluções comprovadas e
                atestadas.
              </div>
            </div>
          </div>
        </div>
        <div className={styles.dividers}>
          <div className={styles.dividers__left} />
          <div className={styles.dividers__right} />
        </div>
      </div>
    </>
  );
};

export default NossosServicos;
