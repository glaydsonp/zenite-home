import Link from 'next/link';
import React from 'react';

import FacebookIcon from '../../assets/icons/facebook-icon.svg';
import InstagramIcon from '../../assets/icons/instagram-icon.svg';
import LinkedinIcon from '../../assets/icons/linkedin-icon.svg';

import styles from './footer.module.scss';

const Footer: React.FC = () => {
  const linksSite = [
    {
      id: 1,
      description: 'Institucional',
      link: 'institucional'
    },
    {
      id: 2,
      description: 'Guia de limpeza',
      link: 'guia-limpeza'
    },
    {
      id: 3,
      description: 'Contato',
      link: 'contato'
    }
    // {
    //   id: 4,
    //   description: 'Empresa',
    //   link: ''
    // }
  ];
  const linksZenite = [
    // {
    //   id: 1,
    //   description: 'Vagas',
    //   link: ''
    // },
    // {
    //   id: 2,
    //   description: 'Franquias',
    //   link: ''
    // },
    // {
    //   id: 3,
    //   description: 'Cursos',
    //   link: ''
    // }
    // {
    //   id: 4,
    //   description: 'Blog',
    //   link: ''
    // }
  ];
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footer__container}>
          <div className={styles.footer__limpeza}>
            <div className={styles.footer__limpeza_title}>Site</div>
            <div className={styles.footer__limpeza_container}>
              {linksSite.map((item) => (
                <div key={item.id} className={styles.footer__limpeza_item}>
                  <Link href={item.link}>
                    <a>{item.description}</a>
                  </Link>
                </div>
              ))}
              {/* <div className={styles.footer__limpeza_item}>Institucional</div>
              <div className={styles.footer__limpeza_item}>Guia de limpeza</div>
              <div className={styles.footer__limpeza_item}>Contato</div>
              <div className={styles.footer__limpeza_item}>Empresa</div> */}
            </div>
          </div>
          <div className={styles.footer__zenite}>
            <div className={styles.footer__zenite_title}>Zenite</div>
            <div className={styles.footer__zenite_container}>
              {linksZenite.map((item) => (
                <div key={item.id} className={styles.footer__zenite_item}>
                  <Link href={item.link}>
                    <a>{item.description}</a>
                  </Link>
                </div>
              ))}
              {/* <div className={styles.footer__zenite_item}>Vagas</div>
              <div className={styles.footer__zenite_item}>Franquias</div>
              <div className={styles.footer__zenite_item}>Cursos</div>
              <div className={styles.footer__zenite_item}>Blog</div> */}
            </div>
          </div>
          <div className={styles.footer__contato}>
            <div className={styles.footer__contato_title}>Contato</div>
            <div className={styles.footer__contato_container}>
              <div className={styles.footer__contato_item}>
                (19) 98718 4149 | (19) 97126 0226
              </div>
              <div className={styles.footer__contato_item}>
                (19) 2223-3571 | Horário de funcionamento: Serviços de segunda a
                segunda das 8:00 as 20:00 e Atendimento das 8h as 18h:00
              </div>
              <div className={styles.footer__contato_item}>
                segunda a sábado
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footer__bottom}>
          <div className={styles.footer__text}>
            Acompanhe a gente nas redes sociais
          </div>
          <div className={styles.footer__socials}>
            <div className={styles.footer__socials_item}>
              <FacebookIcon />
            </div>
            <div className={styles.footer__socials_item}>
              <InstagramIcon />
            </div>
            <div className={styles.footer__socials_item}>
              <LinkedinIcon />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
