"use client";
import "../../ProductPage/CompoentsProduct/ProPage.css";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import i1 from "../../../public/png/laptop1.webp";
import Review from "@/app/ProductPage/CompoentsProduct/Review";
import { itemAdded, data, price, OriginalPrice } from "@/Store/atom";
import {  useRecoilState } from "recoil";
const CartItem = (props) => {
  const [Quantity, setQuantity] = useState(1);
  const [OrderPrice, setOrderPrice]= useRecoilState(price);
  const [item, setitem] = useRecoilState(itemAdded);
  const [originalPrice, setOriginalPrice]= useRecoilState(OriginalPrice);
  const [object, setobject] = useRecoilState(data);
  // let AddQuantity = () => {
  //   setQuantity(Quantity + 1);
  // };
  // let SubQuantity = () => {
  //   if (Quantity == 1) {
  //   } else {
  //     setQuantity(Quantity - 1);
  //   }
  // };
  
  const deleteHandler=()=> {
    const items=item.filter(item =>item.id !==parseInt(props.id))
      setitem(items)
      
        item.map((data,index)=>{ 
          sumPrice = sumPrice - object[data.id-1].Price 
          setOrderPrice(sumPrice )
        })
      
      
    
        item.map((data,index)=>{ 
          OriginalsumPrice = OriginalsumPrice - object[data.id-1].OrPrice 
          console.log("Original: "+OriginalsumPrice)
          setOriginalPrice(OriginalsumPrice )
        })
        
      
  }

  let sumPrice=0;
  useEffect(() => {
    item.map((data,index)=>{ 
      sumPrice = sumPrice + object[data.id-1].Price 
      console.log("Total: "+sumPrice)
      setOrderPrice(sumPrice )
    })
  }, [OrderPrice])
  
  let OriginalsumPrice=0;
  useEffect(() => {
    
    item.map((data,index)=>{ 
      OriginalsumPrice = OriginalsumPrice + object[data.id-1].OrPrice 
      console.log("Original: "+OriginalsumPrice)
      setOriginalPrice(OriginalsumPrice )
    })
    
  }, [originalPrice])
  
  

  return (
    <div className="flex gap-10 bg-[#3e3e3e] rounded-xl p-5  my-10">
      <div className="flex items-center p-5 bg-white rounded-lg ">
      <Image
      alt="Main Image"
        className=" max-w-[16rem] max-h-[13rem] mx-auto"
        src={object[props.id-1].src}
      ></Image>
      </div>
      <div className="flex items-center">
      <div className="text-white ">
        <h1 className="line-clamp-3  text-lg font-bold">{object[props.id-1].LongName}</h1>
        <div className="price flex gap-10 font-serif text-lg my-2">
          <s className=" text-red-600">₹{object[props.id-1].OrPrice}</s>
          <h2 className=" text-green-600">₹{object[props.id-1].Price}</h2>
          <h4>{object[props.id-1].percent}</h4>
        </div>
        <Review />
        <div className="flex  justify-between mr-10">
          <div className="flex  mt-5 gap-2">
            <div
              // onClick={SubQuantity}
              className=" flex justify-center select-none text-black hover:cursor-pointer hover:bg-black hover:text-white hover:border h-8 w-8 bg-white rounded-full text-lg "
            >
              <h1 className="my-auto relative -top-[5%]">-</h1>
            </div>
            <div className="text-black rounded-md bg-white flex justify-center w-24 h-8 text-lg text-center">
              <h1 className="my-auto">{Quantity}</h1>
            </div>
            <h3
              // onClick={AddQuantity}
              className="flex justify-center select-none text-black hover:cursor-pointer hover:bg-black hover:text-white hover:border h-8 w-8 bg-white rounded-full text-lg "
            >
              +
            </h3>
          </div>
          <button onClick={()=>deleteHandler()} className=" text-lg hover:text-red-600 hover:cursor-pointer font-semibold">
            Remove 
          </button>
        </div>
      </div>
      </div>
    </div>
  );
};
export default CartItem;
