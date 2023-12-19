import React from "react";
import Link from "next/link";
import Image from "next/image";
import CartItem from "./CartItem";
import PriceDetail from "./PriceDetail";
import shild from "../../../public/png/shield.png";
const CartItems = () => {
  return (
    <div className=" ">
      <div className="flex gap-10">
        <div className="flex-none w-[65%]">
          <CartItem />
          <CartItem />
          <CartItem />
        </div>
        <div className="w-full">
          <PriceDetail />
          <div className="flex justify-center">
          <Link href="BuyNow" className='bg-white w-full text-2xl font-semibold mb-7 hover:bg-black text-center hover:text-white hover:border py-[1.5vh] rounded-md'>
            Buy Now
          </Link>
          </div>
          <div className=" flex gap-5">
            <Image src={shild}></Image>
            <h3 className="text-white text-xl">Safe and Secure Payments.Easy returns.100% Authentic products.</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
