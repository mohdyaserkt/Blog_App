"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import { getProviders, signIn, useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";


const Login: React.FC = () => {
  const session = useSession();
  const router = useRouter();
  const params = useSearchParams();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    setError(params.get("error") as string);
    setSuccess(params.get("success") as string);
  }, [params]);

  useEffect(() => {
    if (session.status === "authenticated") {
      router?.push("/dashboard");
    }
  }, [session.status, router]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const email = (e.currentTarget[0] as HTMLInputElement).value;
    const password = (e.currentTarget[1] as HTMLInputElement).value;

    try {
      await signIn("credentials", {
        email,
        password,
        redirect: false, // Change to true if you want to handle redirection manually
      });

      router?.push("/dashboard");
    } catch (error) {
      setError("Authentication failed. Please check your credentials.");
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{success ? success : "Welcome Back"}</h1>
      <h2 className={styles.subtitle}>Please sign in to see the dashboard.</h2>

      <form onSubmit={handleSubmit} className={styles.form}>
        <input type="text" placeholder="Email" required className={styles.input} />
        <input type="password" placeholder="Password" required className={styles.input} />
        <button type="submit" className={styles.button}>
          Login
        </button>
        {error && <p className={styles.error}>{error}</p>}
      </form>

      <button
        onClick={() => {
          signIn("google");
        }}
        className={styles.button + " " + styles.google}
      >
        Login with Google
      </button>

      <span className={styles.or}>- OR -</span>

      <Link href="/dashboard/register">
        <p className={styles.link}>Create new account</p>
      </Link>
    </div>
  );
};

export default Login;
