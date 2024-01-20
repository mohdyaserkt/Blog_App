"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Dashboard = () => {
  // const [data, setdata] = useState([])
  // const [loading, setloading] = useState(false)
  // const [error, seterror] = useState(false)
  //   useEffect(() => {

  //     async function getData() {
  //       setloading(true)
  //       const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`)

  //       if (!res.ok) {
  //         seterror(true)
  //       }
  //       const data=await res.json()

  //       setdata(data)
  //       setloading(false)

  //     }
  //     getData()

  //   }, [])
  //   console.log(data);

  const session = useSession();
  console.log(session);
  const router = useRouter();

  const fetcher = (...args: Parameters<typeof fetch>) =>
    fetch(...args).then((res) => res.json());

  const { data, mutate, error, isLoading } = useSWR(
    `/api/posts?username=${session?.data?.user?.name}`,
    fetcher
  );
  console.log(data,"this is my data...");
  if (session.status === "loading") {
    return <p>Loading</p>;
  }

  if (session.status === "unauthenticated") {
    router?.push("/dashboard/login");
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const titleInput = form[0] as HTMLInputElement;
    const descInput = form[1] as HTMLInputElement;
    const imgInput = form[2] as HTMLInputElement;
    const contentInput = form[3] as HTMLInputElement;

    const title: string = titleInput.value;
    const desc: string = descInput.value;
    const img: string = imgInput.value;
    const content = contentInput.value;
    try {
      await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify({
          title,
          desc,
          img,
          content,
          username: session?.data?.user?.name,
        }),
      });
      mutate();
      const form = e.target as HTMLFormElement;
      form.reset();
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await fetch(`/api/posts/${id}`, {
        method: "DELETE",
      });
      mutate();
     
    } catch (err) {
      console.log(err);
    }
  };

  if (session?.status === "authenticated") {
    return (
      <div className={styles.container}>
        <div className={styles.posts}>
          {isLoading
            ? "loading"
            : data?.map((post: any) => (
                <div className={styles.post} key={post._id}>
                  <div className={styles.imgContainer}>
                    <Image src={post.img} alt="" width={200} height={100} />
                  </div>
                  <h2 className={styles.postTitle}>{post.title}</h2>
                  <span
                    className={styles.delete}
                    onClick={() => handleDelete(post._id)}
                  >
                    X
                  </span>
                </div>
              ))}
        </div>
        <form className={styles.new} onSubmit={handleSubmit}>
          <h1>Add New Post</h1>
          <input type="text" placeholder="Title" className={styles.input} />
          <input type="text" placeholder="Desc" className={styles.input} />
          <input type="text" placeholder="Image" className={styles.input} />
          <textarea
            placeholder="Content"
            className={styles.textArea}
            cols={30}
            rows={10}
          ></textarea>
          <button type="submit" className={styles.button}>
            Send
          </button>
        </form>
      </div>
    );
  }
};

export default Dashboard;
