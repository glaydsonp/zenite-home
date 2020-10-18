import React, { useState } from 'react';
import Link from 'next/link';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import ContactHeader from '../ContactHeader';

// import Logo from '../../assets/logo-white.svg';
// import logoUrl from '../../assets/logo-white.png';
import CloseIcon from '../../assets/icons/close-icon.svg';
// import logoZenite from '../../assets/images/logo-zenite-verde.png';
// import LogoZenite from '../../assets/logo.svg';

import styles from './header.module.scss';
import MenuLink from '../MenuLink';

interface IProps {
  type: 'transparent' | 'filled';
  title: string;
}

const Header: React.FC<IProps> = ({ type, title }) => {
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
    // {
    //   id: 3,
    //   link: 'contato',
    //   description: 'Contato'
    // },
    {
      id: 4,
      link: 'contato',
      description: 'Fale com a gente'
    }
  ];
  let headerStyle = null;

  if (type === 'filled') {
    headerStyle = styles.filled;
  } else if (type === 'transparent') {
    headerStyle = styles.transparent;
  }

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

  return (
    <>
      <NextSeo
        title={title}
        description="A Zenite Clean é uma empresa que presta serviços de limpeza de ambientes ou estofados para terceiros."
        canonical="https://www.canonical.ie/"
        openGraph={{
          url: 'http://zeniteaz.com.br/',
          title: 'Serviços de A a Z.',
          description:
            'Oferecemos serviços para sua casa e empresa de impermeabilização de estofado, higienização de tapetes, pós-obra, sanitização de ambientes e serviços gerais.',
          images: [
            {
              url:
                'https://scontent.fcpq7-1.fna.fbcdn.net/v/t1.0-9/s960x960/120806066_177655277320456_8197589620015384672_o.jpg?_nc_cat=103&_nc_sid=dd9801&_nc_ohc=blUlm_7pYB4AX9GmTQ-&_nc_ht=scontent.fcpq7-1.fna&tp=7&oh=da88146a93edf18d3c9b6489b54f4af3&oe=5FAC30A6'
            }
          ],
          site_name: 'Serviços de A a Z.'
        }}
      />

      {/* header mobile */}
      <div className={styles.menuMobile}>
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
          {/* <Logo /> */}
          {/* <img src={logoUrl} alt="Logo Zenite" /> */}
          <img src="/logo-brancoprincipal.svg" alt="Logo Zenite" />
          {menuList.map((menuItem) => (
            <Link key={menuItem.id} href={menuItem.link}>
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
      </div>

      {/* header desktop */}
      <div className={styles.menuDesktop}>
        <ContactHeader menuMobile={false} />
        <header
          className={[headerStyle, styles.header, styles.header__desktop].join(
            ' '
          )}
        >
          {type === 'filled' && (
            <Link href="/residencial">
              <a>
                {/* <LogoZenite /> */}
                {/* <img src={logoZenite} alt="Logo Zenite Clean" /> */}
                <img src="/logo-azul.svg" alt="Logo Zenite Clean" />
              </a>
            </Link>
          )}
          <div className={styles.header__navLinkWrapper}>
            {menuList.map((menuItem) => (
              <div key={menuItem.id} className={styles.header__navLink}>
                <MenuLink
                  key={menuItem.id}
                  descrition={menuItem.description}
                  link={menuItem.link}
                />
              </div>
            ))}
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
