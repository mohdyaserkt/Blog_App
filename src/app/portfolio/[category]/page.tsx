import React from 'react';
import Image from 'next/image';

import styles from './page.module.css';
import Button from '@/components/Button/Button';

interface CategoryProps {
  params: { category: string };
}



const Category: React.FC<CategoryProps> = ({ params }) => {
  

  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>


      <div className={styles.item} >
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Desc</p>
          <Button text="See More" url="#" />
        </div>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            fill={true}
            src="https://images.pexels.com/photos/10474131/pexels-photo-10474131.jpeg"
            alt=""
          />
        </div>
      </div>
      <div className={styles.item} >
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Desc</p>
          <Button text="See More" url="#" />
        </div>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            fill={true}
            src="https://images.pexels.com/photos/10474131/pexels-photo-10474131.jpeg"
            alt=""
          />
        </div>
      </div>
      <div className={styles.item} >
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Desc</p>
          <Button text="See More" url="#" />
        </div>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            fill={true}
            src="https://images.pexels.com/photos/10474131/pexels-photo-10474131.jpeg"
            alt=""
          />
        </div>
      </div>

    </div>
  );
};

export default Category;
