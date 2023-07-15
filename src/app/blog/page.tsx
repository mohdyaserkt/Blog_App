import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';




const Blog: React.FC = () => {
  return (
    <div className={styles.mainContainer}>
      
        <Link href='/blog/testid' className={styles.container} >
          <div className={styles.imageContainer}>
            <Image
              src="https://images.pexels.com/photos/10474144/pexels-photo-10474144.jpeg"
              alt=""
              width={400}
              height={250}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>Test</h1>
            <p className={styles.desc}>desc</p>
          </div>
        </Link>
      
    </div>
  );
};

export default Blog;
