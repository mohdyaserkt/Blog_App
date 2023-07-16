import React from 'react';
import Image from 'next/image';
import styles from './page.module.css';
import { notFound } from 'next/navigation';

async function getData(id:string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  if (!res.ok) {
    return notFound()
  }

  return res.json()

}
interface IdProps {
  params: { id: string };
}


const BlogPost: React.FC <IdProps>= async({params}) => {
const data:any = getData(params.id)
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
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
