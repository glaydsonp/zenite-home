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
  const phoneNumber = '+55 19 98718-4149';
  // const phoneNumberTruncated = '+5519987184149';
  const phoneNumberTruncated = 'tel:+5519987184149';
  const email = 'comercialzenite1@gmail.com';

  const navigateTo = (link: string) => {
    const a = document.createElement('a');
    a.href = link;
    a.target = '_blank';
    a.click();
  };

  // header mobile
  if (menuMobile) {
    return (
      <>
        <header
          className={[styles.container, styles.container__mobile].join(' ')}
        >
          <div className={styles.container__wrapper}>
            <div
              className={styles.container__wrapperItem}
              role="button"
              tabIndex={0}
              onKeyPress={() => navigateTo(phoneNumberTruncated)}
              onClick={() => navigateTo(phoneNumberTruncated)}
            >
              <PhoneIcon />
            </div>
            <div
              className={styles.container__wrapperItem}
              role="button"
              tabIndex={0}
              onKeyPress={() => navigateTo('mailto:comercialzenite1@gmail.com')}
              onClick={() => navigateTo('mailto:comercialzenite1@gmail.com')}
            >
              <EmailIcon />
            </div>
            <div className={styles.container__wrapperItem}>
              <a href="https://instagram.com/zeniteaz?igshid=119enrtsesfum">
                <InstagramIcon />
              </a>
            </div>
            <div className={styles.container__wrapperItem}>
              <a href="https://www.facebook.com/zeniteaz/?ref=py_c">
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
          <div
            className={styles.container__wrapperItem}
            style={{ cursor: 'pointer' }}
            role="button"
            tabIndex={0}
            onKeyPress={() => navigateTo('mailto:comercialzenite1@gmail.com')}
            onClick={() => navigateTo('mailto:comercialzenite1@gmail.com')}
          >
            {email}
          </div>
          <div className={styles.container__wrapperItem}>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://instagram.com/zeniteaz?igshid=119enrtsesfum"
            >
              <InstagramIcon />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/zeniteaz/?ref=py_c"
            >
              <FacebookIcon />
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default ContactHeader;
