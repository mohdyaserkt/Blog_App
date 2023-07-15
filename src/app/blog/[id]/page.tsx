import React from 'react';
import Image from 'next/image';
import styles from './page.module.css';





const BlogPost: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>data.title</h1>
          <p className={styles.desc}>data.desc</p>
          <div className={styles.author}>
            <Image
              src="https://images.pexels.com/photos/10474144/pexels-photo-10474144.jpeg"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>yaserkt786</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/10474144/pexels-photo-10474144.jpeg"
            alt=""
            layout="fill"
            objectFit="cover"
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>data.content</p>
      </div>
    </div>
  );
};

export default BlogPost;
