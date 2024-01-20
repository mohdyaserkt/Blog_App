import React from 'react';
import Image from 'next/image';

import styles from './page.module.css';
import Button from '@/components/Button/Button';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Lamamia Blogs contact',
  description: 'contacts information ',
}
const ContactForm: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let&apos;s Keep in Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src="/contact.png"
            alt="contact img"
            fill={true}
            className={styles.image}
          />
        </div>
        <form className={styles.form}>
          <input type="text" placeholder="name" className={styles.input} />
          <input type="text" placeholder="email" className={styles.input} />
          <textarea
            className={styles.textArea}
            placeholder="message"
            cols={30}
            rows={10}
          ></textarea>
          <Button url="#" text="Send" />
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
