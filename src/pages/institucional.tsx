import React from 'react';
import Header from '../components/Header';

import image from '../assets/images/institucional.jpg';
import whatsappImage from '../assets/images/whatsapp-button-image.png';

import styles from '../styles/pages/institucional.module.scss';

const Institutional: React.FC = () => (
  <>
    <Header
      type="filled"
      title="Zenite Clean &#8211; Higienização e Limpeza &#8211; Institucional"
    />
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.container__image}>
          <img src={image} alt="Institucional" />
        </div>
        <div className={styles.container__content}>
          <div className={styles.container__title}>Institucional</div>
          <div className={styles.container__text}>
            <p>
              A ideia da Zenite Clean iniciamente surgiu a 3 anos atrás em 2017
              quando o fundador da empresa, Valmir Ferraz, identificou a
              necessidade de uma empresa que tivesse profissionais técnicos
              especializados em limpeza e higienização na área da Saúde como
              clinicas e Asilos Orfanatos, em residências como Home CARE e na
              industria química, laboratórios e mercado farmacêutico.
            </p>
            <p>
              Após ampliar sua formação como auxiliar de laboratório e
              instrumentado cirúrgico notou ainda mais a necessidade de um
              ambiente 100% limpo oferecendo um serviço que pudesse atender
              tanto mercado residencial quanto industrial. Mas foi ajudando a
              criar várias unidades de quimioterápicos, nutrição enteral,
              parenteral, mesclas intravenosas e manipulações que conseguiu se
              aprofundar nesse conceito de limpeza e como seria feito de novo no
              mercado.
            </p>
            <p>
              Atuou além do laboratório no segmento da saúde como atendente e
              auxiliar de enfermagem, onde aplicou sua experiência para unir
              técnica a um ótimo resultado criando assim a Zenite em 2020.
              Sentindo a necessidade de incluir mais experiência surge a
              oportunidade da participação de seu sócio Doutor Rodrigo Ortega,
              médico anestesista nesse projeto completando com sua visão na área
              clínica e tecnologia na hora de executar uma limpeza profunda.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.floatingButton}>
        <button type="button">
          <img src={whatsappImage} alt="Whatsapp" />
        </button>
      </div>
    </main>
  </>
);

export default Institutional;
