import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import CartItem from './component/CartItem'
import CartIsEmpty from './component/CartIsEmpty'
import CartItems from './component/CartItems'
const page = () => {
  return (
    <div className='w-[80%] my-[5vh] mx-auto  '>
        <h1 className='text-white text-5xl font-bold'>Saving to celebrate</h1>
        <h2 className='text-white text-2xl mt-5 '>Enjoy up to 60% off thousands of styles during the End of Year sale - while suppiles last. No code needed.</h2>
        <CartIsEmpty/>
        <CartItems/>
    </div>
  )
}

export default page