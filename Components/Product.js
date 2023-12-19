import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
function Product(props) {
  const objects = props;
  return (
    <div className="row overflow-hidden shadow-inner shadow-zinc-700 bg-white w-[21vw] p-[2vh] rounded-lg text-center text-black ">
            <div className="p1" id="1">
            
            <Link href="ProductPage" className=' overflow-hidden'>
                <div className='h-[15vw] items-center hover:scale-105 overflow-hidden delay-100 ease-in-out duration-300 translate justify-center my-auto flex'>
                <Image  className='  mx-auto ' src={props.src} alt="" />
                
                </div>
            </Link>
              <h3 id="name" className="text-3xl line-clamp-1 my-[2vh] font-bold">
                {props.name}
              </h3>
              <div className="price flex justify-between font-serif text-2xl mx-[10%] ">
                <s className=" text-red-600">{props.OrPrice}</s>
                <h2 className=" text-green-800">{props.Price}</h2>
                <h4>{props.percent}</h4>
              </div>
            </div>
          </div>
    
  )
}

export default Product