import React from 'react';
import styles from './page.module.css';
import Link from 'next/link';

type ButtonProps = {
  url: string;
  text: string;
};

const Button: React.FC<ButtonProps> = ({ url, text }) => {
  return (
    <Link href={url}>
      <button className={styles.container}>{text}</button>
    </Link>
  );
};

export default Button;
