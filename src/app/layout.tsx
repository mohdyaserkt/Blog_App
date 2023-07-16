import Navbar from '@/components/navbar/navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import Footer from '@/components/footer/footer'
import ThemeProvider from '../context/themeContext'


const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({
  subsets: ['latin'],
  weight: '400'
});

export const metadata: Metadata = {
  title: 'Lamamia Blogs',
  description: 'Lamamia Blogs description',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ThemeProvider>
          <div className='container'>
            <Navbar />
            {children}
            <Footer /> </div>
            </ThemeProvider>
      </body>
    </html>
  )
}
