import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';
import { json } from 'stream/consumers';
import { notFound } from 'next/navigation';



async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
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
        <Link href='/blog/testid' className={styles.container} key={item.id}>
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
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>desc</p>
          </div>
        </Link>
      ))}


    </div>
  );
};

export default Blog;
