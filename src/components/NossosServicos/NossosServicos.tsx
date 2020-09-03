import React, { useEffect, useState } from 'react';
import { IImages } from '../../data/interfaces/Images.interface';
import { TIMER_CAROUSEL } from '../../app.config';

import PreviousIcon from '../../assets/icons/previous-icon.svg';
import NextIcon from '../../assets/icons/next-icon.svg';

import styles from './nossos-servicos.module.scss';

interface IProps {
  images: IImages[];
}

const NossosServicos: React.FC<IProps> = ({ images }) => {
  const [image, setImage] = useState({
    id: images[0].id,
    image: images[0].image,
    active: true
  } as IImages);

  const changeImage = (imageId: string) => {
    const imageSelected = images.find((img) => img.id === imageId);
    imageSelected.active = true;
    setImage(imageSelected);
  };

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
        <div className={styles.services__text}>
          <div className={styles.services__title}>
            <span>Nossos serviços</span> <strong>01 Limpeza</strong>
          </div>
          <div className={styles.services__description}>
            Nosso processo de lavagem para pisos externos não agride as
            superfícies, excluindo o uso de materiais à base de solventes e
            ácidos nas limpezas mais profundas. Para cada piso e pedras, são
            aplicados os produtos específicos e respeitando o tempo de ação e
            cura de cada um, todos produtos biodegradáveis, como por exemplo a
            aplicação nos telhados.
          </div>
        </div>
        <div className={styles.services__carousel}>
          <div className={styles.services__images}>
            <img src={image.image} alt={image.id} />
          </div>
          <div className={styles.services__arrows}>
            <button
              className={styles.services__arrows_prev}
              type="button"
              aria-label="Imagem anterior"
              onClick={() => {
                setImage(prevImage());
              }}
            >
              <PreviousIcon />
            </button>
            <button
              className={styles.services__arrows_next}
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
    </>
  );
};

export default NossosServicos;
