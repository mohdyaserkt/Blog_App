"use client"
import React, { Children } from 'react'

import { SessionProvider } from "next-auth/react"

interface ThemeProviderProps {
    children: React.ReactNode;
  }
const AuthProvider:React.FC<ThemeProviderProps> = ({ children }) => {
  return (
    <div>
        
        <SessionProvider>
            {children}
        </SessionProvider>
    </div>
  )
}

export default AuthProvider