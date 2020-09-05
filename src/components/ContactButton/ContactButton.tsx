import React, { useState } from 'react';
import GoogleMaps from '../../assets/icons/google-maps.svg';
import Mail from '../../assets/icons/mail.svg';
import YellowPhone from '../../assets/icons/yellow-phone.svg'

import styles from './contact-button.module.scss';
import { useRouter } from 'next/router';

interface IProps {
  id: number;
  link: string;
}

const ContactButton: React.FC<IProps> = ({ id, link }) => {
  const router = useRouter();

  const navigateTo = (e: Event, link: string) => {
    e.preventDefault();
    router.push(link)
  }



  switch (id) {
    case 1: return (
      <>
        <button onClick={() => navigateTo(event, link)} className={styles.container__googleMaps}>
          <GoogleMaps />

        </button>
      </>
    )

    case 2: return (
      <>
        <button onClick={() => navigateTo(event, link)} className={styles.container__mail}>
          <Mail />

        </button>
      </>
    )

    case 3: return (
      <>
        <button onClick={() => navigateTo(event, link)} className={styles.container__yellowPhone}>
          <YellowPhone />

        </button>
      </>
    )
  }
};

export default ContactButton;
