import React, { useState, useEffect } from 'react';
import { NextSeo } from 'next-seo';

import Logo from '../../assets/logo-white.svg';

import styles from './header-nav-images.module.scss';

interface IProps {
  title: string;
  images: {
    id: string;
    image: string;
  }[];
}

const HeaderNavImages: React.FC<IProps> = ({ title, images }) => {
  const [image, setImage] = useState('');

  useEffect(() => {
    console.log('chamou esse fdp aqui')
    setImage(images.find(img => img.id === 'r-principal').image);
  }, [])

  const changeImage = (imageId: string) => {
    const imageUrl = images.find(img => img.id === imageId);
    console.log(imageUrl)
    setImage(imageUrl.image);
  }

  return (
    <>
      <NextSeo
        title={title}
        description="A Zenite Clean é uma empresa que presta serviços de limpeza de ambientes ou estofados para terceiros."
      />
      <div className={styles.nav} style={{ backgroundImage: `url("${image}")`, backgroundPosition: '0 -450px', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
        <div className={styles.nav__overlay}></div>
        <div className={styles.nav__content}>
          <Logo />
          <h3 className={styles.nav__content__subtitle}>Serviços de A a Z para preservar, limpar, higienizar sua casa e carro</h3>
          <div className={styles.nav__content__buttons}>
            {images.map((imgButton) => {
              return <button key={imgButton.id} onClick={() => changeImage(imgButton.id)}></button>
            })}
          </div>
        </div>

      </div>
    </>
  );
}

export default HeaderNavImages;


