import React from 'react'
import Image from 'next/image';
function Product(props) {
  return (
    <div className="row bg-white w-[21vw] p-[2vh] rounded-lg text-center text-black ">
            <div className="p1" id="1">
            
            <a href="./gg.html" className=' '>
                <div className='h-[15vw] items-center justify-center my-auto flex'>
                <Image className='  mx-auto' src={props.src} alt="" />
                </div>
                
              
            </a>
              <h3 id="name" className="text-3xl my-[2vh] font-bold font-serif">
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