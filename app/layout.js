import './globals.css'
import Header from '@/Components/Header'

export default function RootLayout({ children }) {
  return (
    
      
      <html lang="en">
        
        <body className='bg-[#1f1f1f]' >
        <Header/>
          {children}</body>
      </html>
    
    
  )
}
