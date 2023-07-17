"use client"
import React, { useState } from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const register = () => {

  const [error, setError] = useState(false)
  const router= useRouter()


  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const nameInput = form[0] as HTMLInputElement;
    const emailInput = form[1] as HTMLInputElement;
    const passwordInput = form[2] as HTMLInputElement;

    const name: string = nameInput.value;
    const email: string = emailInput.value;
    const password: string = passwordInput.value;


    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      res.status===201&&router.push("/dashboard/login?success=Accout has been created")

      // Rest of your code
    } catch (error) {
      // Error handling
    }

  };



  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Create an Account</h1>
      <h2 className={styles.subtitle}>Please sign up to see the dashboard.</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          required
          className={styles.input}
        />
        <input
          type="text"
          placeholder="Email"
          required
          className={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          required
          className={styles.input}
        />
        <button type="submit" className={styles.button}>Register</button>
        {error && "Something went wrong!"}

      </form>
      <span className={styles.or}>- OR -</span>
      <Link href="/dashboard/login" passHref legacyBehavior>
        <a className={styles.link}>Login with an existing account</a>
      </Link>m
    </div>
  )
}

export default register