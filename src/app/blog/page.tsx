import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';
import { json } from 'stream/consumers';



async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
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
