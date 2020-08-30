import React, { useEffect } from 'react';

import FacebookIcon from '../../assets/icons/facebook-icon.svg';
import InstagramIcon from '../../assets/icons/instagram-icon.svg';
import EmailIcon from '../../assets/icons/email-icon.svg';
import PhoneIcon from '../../assets/icons/phone-icon.svg';

import styles from './contact-header.module.scss';

const ContactHeader: React.FC = () => {
  const [windowWidth, setWidth] = React.useState(0);
  const phoneNumber = '+55 19 2223-3571';
  const email = 'comercialzenite1@gmail.com';
  let showMenuMobile = false;

  useEffect(() => {
    setWidth(window.innerWidth);
  });

  if (windowWidth < 760) {
    showMenuMobile = true;
  }

  // header mobile
  if (showMenuMobile) {
    return (
      <>
        <header className={styles.container}>
          <div className={styles.container__wrapper}>
            <div className={styles.container__wrapperItem}>
              <PhoneIcon />
            </div>
            <div className={styles.container__wrapperItem}>
              <EmailIcon />
            </div>
            <div className={styles.container__wrapperItem}>
              <a href="#">
                <InstagramIcon />
              </a>
              <a href="#">
                <FacebookIcon />
              </a>
            </div>
          </div>
        </header>
      </>
    );
  }

  // header desktop
  return (
    <>
      <header className={styles.container}>
        <div className={styles.container__wrapper}>
          <div className={styles.container__wrapperItem}>{phoneNumber}</div>
          <div className={styles.container__wrapperItem}>{email}</div>
          <div className={styles.container__wrapperItem}>
            <a href="#">
              <InstagramIcon />
            </a>
            <a href="#">
              <FacebookIcon />
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default ContactHeader;
