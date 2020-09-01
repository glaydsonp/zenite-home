import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import ContactHeader from '../ContactHeader';

import Logo from '../../assets/logo-white.svg';
import CloseIcon from '../../assets/icons/close-icon.svg';

import styles from './header.module.scss';

interface IProps {
  type: 'transparent' | 'filled';
  title: string;
}

const Header: React.FC<IProps> = ({ type, title }) => {
  const [windowWidth, setWidth] = useState(0);
  const [isMenuOpen, setMenuState] = useState(false);
  const router = useRouter();
  const menuList = [
    {
      id: 1,
      link: 'institucional',
      description: 'Institucional'
    },
    {
      id: 2,
      link: 'guia-limpeza',
      description: 'Guia de Limpeza'
    },
    {
      id: 3,
      link: 'contato',
      description: 'Contato'
    },
    {
      id: 4,
      link: 'contato',
      description: 'Fale com a gente'
    }
  ];
  let headerStyle = null;
  let showMenuMobile = false;

  if (type === 'filled') {
    headerStyle = styles.filled;
  } else if (type === 'transparent') {
    headerStyle = styles.transparent;
  }

  useEffect(() => {
    setWidth(window.innerWidth);
  });

  const closeMenu = () => {
    setMenuState(false);
  };

  const openMenu = () => {
    setMenuState(true);
  };

  const navigateTo = (e, link) => {
    closeMenu();
    e.preventDefault();
    setTimeout(() => {
      router.push(link);
    }, 200);
  };

  if (windowWidth < 760) {
    showMenuMobile = true;
  }

  if (showMenuMobile) {
    // menu mobile
    return (
      <>
        <NextSeo
          title={title}
          description="A Zenite Clean é uma empresa que presta serviços de limpeza de ambientes ou estofados para terceiros."
        />
        <ContactHeader menuMobile />
        <button
          onClick={openMenu}
          className={styles.header__openMenu}
          type="button"
        >
          <div />
          <div />
          <div />
        </button>
        <header
          className={[
            headerStyle,
            styles.header,
            styles.header__mobile,
            isMenuOpen ? styles.showMenu : styles.hideMenu
          ].join(' ')}
        >
          <button
            onClick={closeMenu}
            className={styles.menuClose}
            type="button"
          >
            <CloseIcon />
          </button>
          <Logo />
          {menuList.map((menuItem) => (
            <Link href={menuItem.link}>
              <a
                tabIndex={0}
                onKeyPress={closeMenu}
                role="button"
                onClick={(event) => {
                  navigateTo(event, menuItem.link);
                }}
              >
                {menuItem.description}
              </a>
            </Link>
          ))}
        </header>
        <div
          tabIndex={0}
          onKeyPress={closeMenu}
          role="button"
          onClick={() => closeMenu()}
          className={[
            styles.header__overlay,
            isMenuOpen ? styles.showOverlay : styles.hideOverlay
          ].join(' ')}
          aria-label="Close menu"
        />
      </>
    );
  }

  return (
    <>
      <NextSeo
        title={title}
        description="A Zenite Clean é uma empresa que presta serviços de limpeza de ambientes ou estofados para terceiros."
      />
      <ContactHeader menuMobile={false} />
      <header className={[headerStyle, styles.header].join(' ')}>
        {menuList.map((menuItem) => (
          <Link href={menuItem.link}>
            <a>{menuItem.description}</a>
          </Link>
        ))}
      </header>
    </>
  );
};

export default Header;
