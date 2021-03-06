import React, { FormEvent, useState } from 'react';
import InputMask from 'react-input-mask';
import Modal from 'react-modal';
import axios from 'axios';
import logoZenite from '../../assets/images/logo-zenite-verde.png';

import styles from './footer-contact.module.scss';

// Modal.setAppElement('#modalContatoZenite');

const FooterContact: React.FC = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [loading, setLoading] = useState(false);
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

    setLoading(true);
    axios
      .post(process.env.NEXT_PUBLIC_POST_URL, formData)
      .then(() => {
        openModal();
        setName('');
        setPhoneNumber('');
      })
      .finally(() => setLoading(false));
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
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel="Modal de Contato"
        className={styles.ModalContainer}
      >
        <div className={styles.modal}>
          <div className={styles.modal__wrapper}>
            <h1>
              Seu cadastro foi realizado
              <br />
              com sucesso!
            </h1>
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
      {loading && (
        <div className={styles.loading}>
          <img src={logoZenite} alt="Logo Zenite" /> Aguarde...
        </div>
      )}
    </>
  );
};

export default FooterContact;
