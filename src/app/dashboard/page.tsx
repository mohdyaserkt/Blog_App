"use client"
import React, { useEffect, useState } from 'react'
import styles from './page.module.css'
import useSWR from 'swr'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

 


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




  const session = useSession() 
  console.log(session);
  const router = useRouter()

const fetcher = (...args: Parameters<typeof fetch>) => fetch(...args).then((res) => res.json());

const { data, mutate, error, isLoading } = useSWR(
  `/api/posts?username=${session?.data?.user?.name}`,
  fetcher
);
console.log(data)
  if(session.status==="loading"){
    return <p>Loading</p>
  }

  if(session.status==="unauthenticated"){
    router?.push("/dashboard/login")
  }

  if(session.status==="authenticated"){
    return (
    <div>Dashboard</div>
  )
  }
  
  
  
}

export default Dashboard