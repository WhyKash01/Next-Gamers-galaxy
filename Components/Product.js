import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
function Product(props) {
  
  return (
    <div className="row overflow-hidden hover:shadow-2xl z-40 hover:z-50 border border-zinc-200 shadow-zinc-900 bg-white p-5  text-center text-black ">
            <Link href={`ProductPage?id=${props.id}`} className=' overflow-hidden'>
            <div className="p1" id="1">
            
                <div className='h-[15vw]  items-center hover:scale-105 overflow-hidden delay-100 ease-in-out duration-300 translate justify-center my-auto flex'>
                <Image  className=' max-h-[14vw] w-auto mx-auto ' src={props.src} alt="" />
                
                </div>
              <h3 id="name" className="text-xl font-semibold line-clamp-1 my-2">
                {props.name}
              </h3>
              <div className="price flex justify-between font-serif text-lg mx-[10%] ">
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
