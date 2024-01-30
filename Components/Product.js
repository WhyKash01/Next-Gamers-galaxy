import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
function Product(props) {
  
  return (
    <div className="row overflow-hidden hover:shadow-2xl z-40 hover:z-50 border border-zinc-200 shadow-zinc-900 bg-white sm:p-5 p-3 text-center text-black ">
            <Link href={`ProductPage?id=${props.id}`} className=' overflow-hidden'>
            <div className="p1" id="1">
            
                <div className='sm:h-[15vw] h-24  items-center hover:scale-105 overflow-hidden delay-100 ease-in-out duration-300 translate justify-center my-auto flex'>
                <Image  className=' sm:max-h-[14vw] max-h-20 w-auto mx-auto ' src={props.src} alt="" />
                
                </div>
              <h3 id="name" className="sm:text-xl text-xs font-semibold line-clamp-1 sm:my-2 my-1 ">
                {props.name}
              </h3>
              <div className="price flex justify-between  font-serif sm:text-lg text-[11px] sm:mx-[10%] ">
                <s className=" text-red-600">{props.OrPrice}</s>
                <h2 className=" text-green-800">{props.Price}</h2>
                <h4>{props.percent}</h4>
              </div>
            </div>
            </Link>
          </div>
    
  )
}

export default Product
