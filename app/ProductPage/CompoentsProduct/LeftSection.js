import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const LeftSection = (props) => {
  return (
    <div className='w-[30vw]'>
      <div className='absolute w-[30vw] rounded-xl flex flex-col gap-4'>
      <div className=' my-auto bg-white p-10 rounded-md w-full'>
        <Image src={props.src} className='mx-auto hover:scale-110 delay-100 ease-in-out duration-300 translate w-[90%]' ></Image>
      </div>
      <div className=' flex justify-between'>
        <div>
          <Image className='w-[6vw] p-2 rounded-md hover:border-red-500 hover:border-4 bg-white ' src={props.src}></Image>
        </div>
        <div>
          <Image className='w-[6vw] p-2 rounded-md hover:border-red-500 hover:border-4 bg-white ' src={props.src}></Image>
        </div>
        <div>
          <Image className='w-[6vw] p-2 rounded-md hover:border-red-500 hover:border-4 bg-white ' src={props.src}></Image>
        </div>
        <div>
          <Image className='w-[6vw] p-2 rounded-md hover:border-red-500 hover:border-4 bg-white  ' src={props.src}></Image>
        </div>
        

      </div>
      <div className='flex justify-between gap-10 text-2xl font-bold'>
          <Link href="AddToCart" className=' bg-red-600 text-center hover:bg-black hover:text-white hover:border py-[1.5vh] rounded-md w-[50%]'>
            Add to Cart
          </Link>
          <Link href="BuyNow" className='bg-white hover:bg-black text-center hover:text-white hover:border py-[1.5vh] rounded-md w-[50%]'>
            Buy Now
          </Link>
        </div>
      </div>
      
    </div>
  )
}

export default LeftSection