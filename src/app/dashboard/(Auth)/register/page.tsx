"use client"
import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'

const register = () => {

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const nameInput = form[0] as HTMLInputElement;
    const emailInput = form[1] as HTMLInputElement;
    const passwordInput = form[2] as HTMLInputElement;

    const name: string = nameInput.value;
    const email: string = emailInput.value;
    const password: string = passwordInput.value;

    // Rest of your code
  };

  return (
    <div className={styles.container}>
    <h1 className={styles.title}>Create an Account</h1>
    <h2 className={styles.subtitle}>Please sign up to see the dashboard.</h2>
    <form  className={styles.form} onSubmit={handleSubmit}>
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
      
    </form>
    <span className={styles.or}>- OR -</span>
    <Link href="/dashboard/login" passHref legacyBehavior>
      <a className={styles.link}>Login with an existing account</a>
    </Link>m  
  </div>
  )
}

export default register