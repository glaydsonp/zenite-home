import React from 'react';

import FacebookIcon from '../../assets/icons/facebook-icon.svg';
import InstagramIcon from '../../assets/icons/instagram-icon.svg';
import EmailIcon from '../../assets/icons/email-icon.svg';
import PhoneIcon from '../../assets/icons/phone-icon.svg';

import styles from './contact-header.module.scss';

interface IProps {
  menuMobile: boolean;
}

const ContactHeader: React.FC<IProps> = ({ menuMobile }) => {
  const phoneNumber = '+55 19 2223-3571';
  const email = 'comercialzenite1@gmail.com';

  // header mobile
  if (menuMobile) {
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
