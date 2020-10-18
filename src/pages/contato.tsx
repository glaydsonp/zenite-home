import React from 'react';
import Header from '../components/Header';
import styles from '../styles/pages/contato.module.scss';
import GoogleMapsImg from '../assets/icons/google-maps.svg';
import MailImg from '../assets/icons/mail.svg';
import YellowPhoneImg from '../assets/icons/yellow-phone.svg';
import ContactButton from '../components/ContactButton';
import FooterContact from '../components/FooterContact/FooterContact';

interface IButton {
  link: string;
  image: string;
  id: number;
}

const Contact: React.FC = () => {
  const baseUrl = 'https://api.whatsapp.com/send?';
  const phoneNumber = 'phone=5519987184149';
  const queryParams = '&text=Quero%20saber%20mais%20sobre%20a%20Zenite%20';
  const buttons: IButton[] = [
    // {
    //   link: '#',
    //   image: GoogleMapsImg,
    //   id: 1
    // },
    {
      link: 'mailto:comercialzenite1@gmail.com',
      image: MailImg,
      id: 2
    },
    {
      link: `${baseUrl}${phoneNumber}${queryParams}`,
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
