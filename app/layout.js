'use client'
import './globals.css'
import Header from '@/Components/Header'
import { RecoilRoot } from 'recoil';
export default function RootLayout({ children }) {
  return (
    
      
      <html lang="en">
        <RecoilRoot>
        <body className='bg-[#171717]' >
        <Header/>
          {children}</body>
        </RecoilRoot>
      </html>
    
    
  )
}
