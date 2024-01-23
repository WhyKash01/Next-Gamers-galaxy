"use client";
import { price, OriginalPrice } from "@/Store/atom";
import React from "react";
import { useRecoilState } from "recoil";


const PriceDetail = () => {
    const [OrderPrice, setOrderPrice] = useRecoilState(price);
    const [originalPrice, setsetOriginalPrice]= useRecoilState(OriginalPrice)
  return (
    <div className=" bg-[#3e3e3e] text-white text-lg font-semibold rounded-xl px-10 py-5 mt-10">
      <h1 className="text-3xl font-bold mb-5">Order Summary</h1>
      <div className="mb-2 flex justify-between">
        <h2>Price</h2>
        <h2>₹{OrderPrice}</h2>
      </div>
      <div className="mb-2 flex justify-between">
        <h2>Discount</h2>
        <h2>- ₹{originalPrice-OrderPrice}</h2>
      </div>
      <div className="mb-5 flex justify-between">
        <h2>Delivery</h2>
        <h2>{(OrderPrice)>= 2000? <h1><s> ₹40</s> Free</h1>: "₹40"}</h2>
      </div>
      <hr/>
      <div className="mt-5 text-xl flex justify-between">
        <h2>Total</h2>
        <h2>₹{(OrderPrice)>= 2000? OrderPrice: OrderPrice+40}</h2>
      </div>
    </div>
  );
};

export default PriceDetail;
