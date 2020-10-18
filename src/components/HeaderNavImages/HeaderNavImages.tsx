import React, { useState, useEffect } from 'react';

// import Logo from '../../assets/logo-white.svg';

import styles from './header-nav-images.module.scss';

const TIMER_CAROUSEL = 5000;

interface IImages {
  id: string;
  image: string;
  active?: boolean;
}

interface IProps {
  images: IImages[];
  heroTitle: string;
}

const HeaderNavImages: React.FC<IProps> = ({ images, heroTitle }) => {
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

  const slide = () => {
    const imageSelectedIndex = images.findIndex((img) => img.id === image.id);
    if (imageSelectedIndex < images.length - 1) {
      setImage(images[imageSelectedIndex + 1]);
    } else {
      setImage(images[0]);
    }
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      slide();
    }, TIMER_CAROUSEL);
    return () => clearTimeout(timer);
  });

  return (
    <>
      <div className={styles.nav}>
        <div className={styles.nav__container}>
          <img src={image.image} alt="" />
        </div>
        <div className={styles.nav__overlay} />
        <div className={styles.nav__content}>
          <div className={styles.nav__contentText}>
            {/* <Logo /> */}
            <img src="/logo-zenite-principal.svg" alt="Logo Zenite" />
            <h3 className={styles.nav__content__subtitle}>{heroTitle}</h3>
          </div>
          <div className={styles.nav__content__buttons}>
            {images.map((imgButton) => (
              <button
                className={
                  imgButton.id === image.id ? styles.button__active : null
                }
                type="button"
                key={imgButton.id}
                onClick={() => changeImage(imgButton.id)}
              >
                {' '}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderNavImages;
