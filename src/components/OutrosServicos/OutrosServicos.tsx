import React from 'react';
import styles from './outros-servicos.module.scss';

const Footer: React.FC = () => (
  <>
    <div className={styles.container}>
      <div className={styles.content}>
        <h3>Tudo o que você precisa e muito mais!</h3>
        <div className={styles.content__lists}>
          <div className={styles.list}>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://zeniteaz.com.br/blog/index.php/tag/limpeza/"
              className={styles.list__title}
            >
              Limpeza
            </a>
            <ul>
              <li>- Caixa dágua e reservatório</li>
              <li>- Lavagem de pisos, telhas e pedras</li>
              <li>- Blindagem em tecidos náuticos</li>
              <li>- Impermeabilização</li>
              <li>- Tratamento do couro</li>
              <li>- Lavagem de veículos</li>
            </ul>
          </div>
          <div className={styles.list}>
            <a
              href="https://zeniteaz.com.br/blog/index.php/2015/06/12/sanitizacao-de-ambientes/"
              target="_blank"
              rel="noreferrer"
              className={styles.list__title}
            >
              Sanitização
            </a>
            <ul>
              <li>- Serviços em veículos, aeronaves, navios e ambientes</li>
              <li>- Dedetização</li>
              <li>- Desratização</li>
              <li>- Descupinização</li>
              <li>- Desisetização</li>
            </ul>
          </div>
          <div className={styles.list}>
            <a
              href="https://zeniteaz.com.br/blog/index.php/category/servicos-gerais/"
              target="_blank"
              rel="noreferrer"
              className={styles.list__title}
            >
              Serviços Gerais
            </a>
            <ul>
              <li>- Manutenção e cuidados com o sistema de ar condicionado</li>
              <li>- Pós Obra</li>
              <li>- Manutenção de piscina</li>
              <li>- Limpeza de terreno</li>
              <li>- Tratamento do couro</li>
              <li>- Recolhimento de entulho</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Footer;
