import React from 'react';
import Link from 'next/link';

interface IProps {
  link: string;
  descrition: string;
}

const MenuLink: React.FC<IProps> = ({ link, descrition }) => (
  <Link href={link}>
    <a>{descrition}</a>
  </Link>
);

export default MenuLink;
