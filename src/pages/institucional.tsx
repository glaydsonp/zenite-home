import React from 'react';
import Header from '../components/Header';

const Institutional: React.FC = () => {
  const text = 'This is my Institutional Component';
  return (
    <>
      <Header
        type="filled"
        title="Zenite Clean &#8211; Higienização e Limpeza &#8211; Institucional"
      />
      <div>{text}</div>
    </>
  );
};

export default Institutional;
