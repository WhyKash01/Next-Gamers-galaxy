import React from 'react'
import Image from 'next/image'
const DisCard = (props) => {
    const i1= props.src
  return (
    <div className='flex flex-col sm:gap-5 gap- mb-5'><div className=" bg-gradient-to-r from-red-600 to-black flex flex-col sm:flex-row gap-5 p-5 rounded-sm">
    <Image className='p-5 bg-white rounded-md  sm:h-[22vh] ' alt='' src={i1}></Image>
        <div className="">
            <h2 className='text-xl font-semibold sm:mb-5 mb-2'>Life-like Images</h2>
            <h4 className='text-sm'>Thanks to its Full HD 1080p resolution, the Acer KA222Q Desktop Monitor displays realistic and sharp colours that you can enjoy viewing. And with its 1920x1080p resolution and 16:9 aspect ratio, movie scenes and games appear life-like and vibrant. Also, it allows you to clearly read small texts and details in every scene without missing out.</h4>
        </div>
    </div>
    <div className=" bg-gradient-to-r from-black to-red-600 flex flex-col sm:flex-row gap-5 p-5 rounded-sm">
        <div className="">
            <h2 className='text-xl font-semibold sm:mb-5 mb-2'>Life-like Images</h2>
            <h4 className='text-sm'>Thanks to its Full HD 1080p resolution, the Acer KA222Q Desktop Monitor displays realistic and sharp colours that you can enjoy viewing. And with its 1920x1080p resolution and 16:9 aspect ratio, movie scenes and games appear life-like and vibrant. Also, it allows you to clearly read small texts and details in every scene without missing out.</h4>
        </div>
        <Image className='p-5 bg-white rounded-md sm:h-[22vh]' src={i1} alt=''></Image>
    </div></div>
  )
}

export default DisCard