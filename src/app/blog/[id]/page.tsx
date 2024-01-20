import React from 'react';
import Image from 'next/image';
import styles from './page.module.css';
import { notFound } from 'next/navigation';

async function getData(_id:string) {
  const res = await fetch(`http://localhost:3000/api/posts/${_id}`)
  if (!res.ok) {
    return notFound()
  }

  return res.json()

}
interface IdProps {
  params: { id: string };
}
// or Dynamic metadata
export async function generateMetadata({ params }:IdProps) {
  const data_meta:any = await getData(params.id)

  return {
    title:data_meta.title,
    description:data_meta.desc
  }
}

const BlogPost: React.FC <IdProps>= async({params}) => { 
const data:any = await getData(params.id)
console.log(data);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>{data.desc}</p>
          <div className={styles.author}>
            <Image
              src={data.img}
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>{data.username}</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={data.img}
            alt=""
            width={800}
            height={400}
            
            
            objectFit="cover"
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>{data.content}</p>
      </div>
    </div>
  );
};

export default BlogPost;
