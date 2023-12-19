import React from 'react'
import Image from 'next/image'
const DisCard = (props) => {
    const i1= props.src
  return (
    <div className='flex flex-col gap-10 mb-10'><div className=" bg-gradient-to-r from-red-600 to-black flex gap-10 p-10 rounded-md">
    <Image className='p-5 bg-white rounded-md h-[22vh]' src={i1}></Image>
        <div className="">
            <h2 className='text-3xl font-semibold mb-5'>Life-like Images</h2>
            <h4 className='text-xl'>Thanks to its Full HD 1080p resolution, the Acer KA222Q Desktop Monitor displays realistic and sharp colours that you can enjoy viewing. And with its 1920x1080p resolution and 16:9 aspect ratio, movie scenes and games appear life-like and vibrant. Also, it allows you to clearly read small texts and details in every scene without missing out.</h4>
        </div>
        
    </div>
    <div className=" bg-gradient-to-r from-black to-red-600 flex gap-10 p-10 rounded-md">
        <div className="">
            <h2 className='text-3xl font-semibold mb-5'>Life-like Images</h2>
            <h4 className='text-xl'>Thanks to its Full HD 1080p resolution, the Acer KA222Q Desktop Monitor displays realistic and sharp colours that you can enjoy viewing. And with its 1920x1080p resolution and 16:9 aspect ratio, movie scenes and games appear life-like and vibrant. Also, it allows you to clearly read small texts and details in every scene without missing out.</h4>
        </div>
        <Image className='p-5 bg-white rounded-md h-[22vh]' src={i1}></Image>
    </div></div>
  )
}

export default DisCard