import React from 'react';

import FacebookIcon from '../../assets/icons/facebook-icon.svg';
import InstagramIcon from '../../assets/icons/instagram-icon.svg';
import LinkedinIcon from '../../assets/icons/linkedin-icon.svg';

import styles from './footer-contact.module.scss';

const FooterContact: React.FC = () => (
  <>
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <span>Prefiro que entrem em contato comigo</span>

      </div>
      <div className={styles.footer__bottom}>
        <input className={styles.footer__bottom__input} type="text" placeholder="Nome" />
        <input className={styles.footer__bottom__input} type="text" placeholder="Telefone" />
        <button className={styles.footer__bottom__button}>Ok tudo certo</button>
      </div>
    </footer>
  </>
);

export default FooterContact;
