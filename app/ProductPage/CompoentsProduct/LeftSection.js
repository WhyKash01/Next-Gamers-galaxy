import React from 'react'
import Image from 'next/image'
const LeftSection = (props) => {
  return (
    <div className='w-[30vw] bg-slate-200 flex gap-4'>
      <div className=' flex flex-col gap-3 '>
        <div>
          <Image className='w-[5vw] p-2 rounded-md bg-slate-600 ' src={props.src}></Image>
        </div>
        <div>
          <Image className='w-[5vw] p-2 rounded-md bg-slate-600 ' src={props.src}></Image>
        </div>
        <div>
          <Image className='w-[5vw] p-2 rounded-md bg-slate-600 ' src={props.src}></Image>
        </div>
        <div>
          <Image className='w-[5vw] p-2 rounded-md bg-slate-600 ' src={props.src}></Image>
        </div>

      </div>
      <div className=' my-auto'>
        <Image src={props.src} className=' bg-red-400 p-2 rounded-md w-full' ></Image>
      </div>
      
      
    </div>
  )
}

export default LeftSection