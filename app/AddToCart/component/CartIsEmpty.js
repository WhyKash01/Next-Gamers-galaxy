import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import EmptyImg from "../../../public/png/EmptyImg1.png"
const CartIsEmpty = () => {
  return (
    <div className='hidden bg-[#3e3e3e] rounded-xl p-5  my-10'>
            <Image src={EmptyImg} className='w-[400px] h-[400px] items-center mx-auto'></Image>
            <h2 className=' text-center text-4xl font-semibold text-white'>Your cart is empty!</h2>
            <h3 className=' text-center text-2xl mt-5 mb-10  text-white'>Add items to it now.</h3>
            <div className=' flex justify-center'>
            <Link href='/' className=' bg-red-600 mb-5 text-center hover:bg-black hover:text-white hover:border py-4 px-24 text-2xl font-semibold  rounded-md  '>Shop Now</Link>
            </div>
        </div >
  )
}

export default CartIsEmpty