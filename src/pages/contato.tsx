import React from 'react';
import Header from '../components/Header';

const Contact: React.FC = () => {
  const text = 'This is my Contact Component';
  return (
    <>
      <Header
        type="filled"
        title="Zenite Clean &#8211; Higienização e Limpeza &#8211; Contato"
      />
      <div>{text}</div>
    </>
  );
};

export default Contact;
