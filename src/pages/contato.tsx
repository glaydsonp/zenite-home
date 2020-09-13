import React from 'react';
import Header from '../components/Header';
import styles from '../styles/pages/contato.module.scss';
import GoogleMapsImg from '../assets/icons/google-maps.svg';
import MailImg from '../assets/icons/mail.jpg';
import YellowPhoneImg from '../assets/icons/yellow-phone.jpg';
import ContactButton from '../components/ContactButton';
import FooterContact from '../components/FooterContact/FooterContact';

interface IButton {
  link: string;
  image: string;
  id: number;
}

const Contact: React.FC = () => {
  const buttons: IButton[] = [
    {
      link: '#',
      image: GoogleMapsImg,
      id: 1
    },
    {
      link: '#1',
      image: MailImg,
      id: 2
    },
    {
      link: '#2',
      image: YellowPhoneImg,
      id: 3
    }
  ];

  return (
    <>
      <Header
        type="filled"
        title="Zenite Clean &#8211; Higienização e Limpeza &#8211; Contato"
      />
      <div className={styles.main}>
        <div className={styles.container}>
          <div className={styles.container__title}>
            <h3>Contato</h3>
            <span>
              Selecione qual forma de contato prefere e pronto, cada botão te
              leva para algum lugar
            </span>
          </div>
          <div className={styles.container__buttons}>
            {buttons.map((button) => (
              <ContactButton
                key={button.id}
                id={button.id}
                link={button.link}
              />
            ))}
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <FooterContact />
      </div>
    </>
  );
};

export default Contact;
