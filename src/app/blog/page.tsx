import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';
import { json } from 'stream/consumers';
import { notFound } from 'next/navigation';



async function getData() {
  const res = await fetch('http://localhost:3000/api/posts')
  if (!res.ok) {
    return notFound()
  }

  return res.json()

}



const Blog: React.FC = async () => {
  const data = await getData()
  return (


    <div className={styles.mainContainer}>
      {data.map((item:any) => (
        <Link href='/blog/testid' className={styles.container} key={item._id}>
          <div className={styles.imageContainer}>
            <Image
              src={item.img}
              alt="image of "
              width={400}
              height={250}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>desc</p>
          </div>
        </Link>
      ))}


    </div>
  );
};

export default Blog;
