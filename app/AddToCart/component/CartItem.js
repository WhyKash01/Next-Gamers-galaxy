'use client'
import '../../ProductPage/CompoentsProduct/ProPage.css'
import React, {useState} from 'react'
import Image from 'next/image'
import i1 from "../../../public/png/laptop1.webp"
import Review from '@/app/ProductPage/CompoentsProduct/Review'
const CartItem = () => {
    const [Quantity, setQuantity] = useState(1)
    let AddQuantity =()=>{
        setQuantity(Quantity+1)
    }
    let SubQuantity =()=>{
        if(Quantity==1){
            
        }
        else{
            setQuantity(Quantity-1)
        }
    }
    let removeItem = ()=>{

    }
    let object= {
          name: "Asus Tuf Gaming F15",
          src: i1,
          largeName: "ASUS TUF Gaming F15 Core i5 12th Gen - (16 GB/512 GB SSD/Windows 11Pro/4 GB Graphics/NVIDIA GeForce RTX 3050)",
          OrPrice:"₹1,03,990",
          Price: "₹85,990",
          percent:"17% off"
        }
  return (

    <div className='flex gap-20 bg-[#3e3e3e] rounded-xl p-5  my-10'>
            <Image className='w-[25%] p-5 bg-white rounded-lg' src={object.src}></Image>
            <div className='text-white'>
                <h1 className='text-2xl font-bold'>{object.largeName}</h1>
                <div className="price flex gap-10 font-serif text-2xl my-5">
                    <s className=" text-red-600">{object.OrPrice}</s>
                    <h2 className=" text-green-800">{object.Price}</h2>
                    <h4>{object.percent}</h4>
                </div>
                <Review/>
                <div className='flex mt-5 gap-5'>
                    <h3 onClick={SubQuantity} className= ' block select-none text-black hover:cursor-pointer py-[0.2%] hover:bg-black hover:text-white hover:border bg-white w-10 h-10 rounded-full text-center text-2xl '>-</h3>
                    <h3 className='text-black rounded-md bg-white w-32 h-10 text-2xl text-center  py-1'>{Quantity}</h3>
                    <h3 onClick={AddQuantity} className='text-black select-none hover:cursor-pointer py-[0.2%] hover:bg-black hover:text-white hover:border  bg-white w-10 h-10 rounded-full text-center text-2xl '>+</h3>
                    <h3 className=' text-2xl ml-10 hover:text-red-600 hover:cursor-pointer font-semibold'>Remove</h3>               
                </div>
            </div>
            
    </div>
  )
}

export default CartItem