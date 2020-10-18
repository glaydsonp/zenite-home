import React from 'react';
import GoogleMaps from '../../assets/icons/google-maps.svg';
import Mail from '../../assets/icons/mail.svg';
import YellowPhone from '../../assets/icons/yellow-phone.svg';

import styles from './contact-button.module.scss';

interface IProps {
  id: number;
  link: string;
}

const ContactButton: React.FC<IProps> = ({ id, link }) => {
  const navigateTo = () => {
    const a = document.createElement('a');
    a.href = link;
    a.target = '_blank';
    a.click();
  };

  switch (id) {
    case 1:
      return (
        <>
          <button
            type="button"
            onClick={navigateTo}
            className={styles.container__googleMaps}
          >
            <GoogleMaps />
          </button>
        </>
      );

    case 2:
      return (
        <>
          <button
            type="button"
            onClick={navigateTo}
            className={styles.container__mail}
          >
            <Mail />
          </button>
        </>
      );

    case 3:
      return (
        <>
          <button
            type="button"
            onClick={navigateTo}
            className={styles.container__yellowPhone}
          >
            <YellowPhone />
          </button>
        </>
      );
    default:
      return <></>;
  }
};

export default ContactButton;
