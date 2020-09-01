import React, { useState, useEffect } from 'react';

import Logo from '../../assets/logo-white.svg';

import styles from './header-nav-images.module.scss';

interface IProps {
  images: {
    id: string;
    image: string;
  }[];
}

const HeaderNavImages: React.FC<IProps> = ({ images }) => {
  const [image, setImage] = useState('');
  // const [width, setWidth] = useState(0);

  useEffect(() => {
    setImage(images.find((img) => img.id === 'r-principal').image);
  }, []);

  // useEffect(() => {
  //   setWidth(window.innerWidth);
  // });

  const changeImage = (imageId: string) => {
    const imageUrl = images.find((img) => img.id === imageId);
    setImage(imageUrl.image);
  };

  // const imagePosition = width > 1080 ? '0 -620px' : '0 -230px';

  return (
    <>
      <div
        className={styles.nav}
        // style={{
        //   backgroundImage: `url("${image}")`,
        //   backgroundPosition: imagePosition,
        //   backgroundRepeat: 'no-repeat',
        //   backgroundSize: 'cover'
        // }}
      >
        <div className={styles.nav__container}>
          <img src={image} alt="" />
        </div>
        <div className={styles.nav__overlay} />
        <div className={styles.nav__content}>
          <div className={styles.nav__contentText}>
            <Logo />
            <h3 className={styles.nav__content__subtitle}>
              Serviços de A a Z para preservar, limpar, higienizar sua casa e
              carro
            </h3>
          </div>
          <div className={styles.nav__content__buttons}>
            {images.map((imgButton) => (
              <button
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
