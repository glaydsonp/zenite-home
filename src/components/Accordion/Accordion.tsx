import React, { useState } from 'react';

import ArrowIcon from '../../assets/icons/info-arrow.svg';

import styles from './accordion.module.scss';

interface IProps {
  id: number;
  description: string;
  text: string;
}

const Accordion: React.FC<IProps> = ({ id, description, text }) => {
  const [isOpen, toggleOpen] = useState(false);

  return (
    <>
      <div className={styles.container__infoButtons__button}>
        <button type="button" key={id} onClick={() => toggleOpen(!isOpen)}>
          <span>{description}</span>
          <div className={[styles.arrow, isOpen ? styles.open : ''].join(' ')}>
            <ArrowIcon />
          </div>
        </button>

        <div className={`${styles.infoArea} ${isOpen ? styles.display : ''}`}>
          <p className={styles.infoArea__text}>{text}</p>
        </div>
      </div>
    </>
  );
};

export default Accordion;
