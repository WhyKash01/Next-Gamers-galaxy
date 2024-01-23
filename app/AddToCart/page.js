'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import CartItem from './component/CartItem'
import CartIsEmpty from './component/CartIsEmpty'
import CartItems from './component/CartItems'
import { useRecoilState,useRecoilValue } from 'recoil'
import itemsInCart, { itemAdded } from '@/Store/atom'
const page = () => {
  
  const [item, setitem] = useRecoilState(itemAdded)
  const length = item.length
  return (
    <div className='w-[90%] my-5 mx-auto  '>
        <h1 className='text-white text-3xl font-bold'>Saving to celebrate</h1>
        <h2 className='text-white text-xl mt-2 '>Enjoy up to 60% off thousands of styles during the End of Year sale - while suppiles last. No code needed.</h2>
        {(!length) ? <CartIsEmpty/>:<CartItems/>}
        
        
    </div>
  )
}

export default page