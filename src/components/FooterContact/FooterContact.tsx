import React, { FormEvent, useState } from 'react';
import InputMask from 'react-input-mask';
import Modal from 'react-modal';
import axios from 'axios';

import styles from './footer-contact.module.scss';

const modalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    width: '50vw',
    height: '50vh',
    transform: 'translate(-50%, -50%)',
    color: 'black',
    padding: '0'
  }
};

const FooterContact: React.FC = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const afterOpenModal = () => {
    // references are now sync'd and can be accessed.
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleSubmitContactForm = (event: FormEvent) => {
    event.preventDefault();
    if (name === '' && name.length <= 3) return;
    if (phoneNumber === '' && phoneNumber.length <= 9) return;

    const formData = { name, phone_number: phoneNumber };
    axios
      .post(process.env.NEXT_PUBLIC_POST_URL, formData)
      .then((res) => {
        openModal();
        setName('');
        setPhoneNumber('');
      })
      .catch((err) => console.log(err));
  };

  const handleKeyPressed = (event) => {
    if (event.key === 'Enter') {
      handleSubmitContactForm(event);
    }
  };

  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footer__container}>
          <span>Prefiro que entrem em contato comigo</span>
        </div>
        <div className={styles.footer__bottom}>
          <input
            className={styles.footer__bottom__input}
            type="text"
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <InputMask
            className={styles.footer__bottom__input}
            placeholder="Telefone"
            mask="(99) 99999-9999"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            onKeyPress={(e) => handleKeyPressed(e)}
          />
          <button
            type="submit"
            onClick={(e) => handleSubmitContactForm(e)}
            className={styles.footer__bottom__button}
          >
            Ok, tudo certo!
          </button>
        </div>
      </footer>
      <Modal
        isOpen={modalIsOpen}
        style={modalStyles}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <div className={styles.modal}>
          <div className={styles.modal__wrapper}>
            <h1>Seu cadastro foi realizado com sucesso!</h1>
            <p>
              Em breve entraremos em contato com você pelo telefone informado no
              passo anterior.
            </p>
          </div>
          <div className={styles.modal__footer}>
            <button
              className={styles.modal__footer__button}
              type="button"
              onClick={closeModal}
            >
              Entendi!
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default FooterContact;
