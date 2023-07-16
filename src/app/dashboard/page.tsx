"use client"
import React, { useEffect, useState } from 'react'
import styles from './page.module.css'
import useSWR from 'swr'
 


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

  
  
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard