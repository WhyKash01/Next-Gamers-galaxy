import { getServerSession } from 'next-auth';
import React from 'react'
import {options} from '../api/auth/[...nextauth]/options'
import Link from "next/link"
const Nav = async () => {
  const session = await getServerSession(options);
  return (
    <header className='bg-zinc-900 text-gray-100'>
      <nav className='flex justify-between items-center w-full px-10 py-4'>
        <div>My site</div>
        {session?(<Link href={'/api/auth/signout?callbackUrl=/'}>Logout</Link>):
         (<Link href={'/api/auth/signin'}>Login</Link>)
        }
      </nav>
    </header>
  )
}

export default Nav