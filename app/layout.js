import {SessionProvider} from "next-auth/react"
import './globals.css'
import Header from '@/Components/Header'
import Nav from "./(components)/Nav"
export default function RootLayout({ children }) {
  return (
    
      
      <html lang="en">
        
        <body className='bg-[#171717]' >
          <Nav/>
        {/* <RecoilRoot> */}
          <Header/>
            {children}
        {/* </RecoilRoot> */}
        </body>
        
      </html>
    
    
  )
}
