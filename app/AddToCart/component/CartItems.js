import React from "react";
import Link from "next/link";
import Image from "next/image";
import CartItem from "./CartItem";
import PriceDetail from "./PriceDetail";
import shild from "../../../public/png/shield.png";
import { useRecoilState, useRecoilValue } from "recoil";
import itemsInCart, { itemAdded } from "@/Store/atom";
const CartItems = () => {
  // const x = useRecoilValue(itemAdded)
  const [itemAdd, setItemAdd] = useRecoilState(itemAdded);
  return (
    <div className=" ">
      <div className="flex gap-10">
        <div className="flex-none w-[65%]">
          {itemAdd.map((t,index)=>{return <CartItem {...t} {...index}  key={index} />})}
          
        </div>
        <div className="w-full">
          <PriceDetail />
          <div className="flex">
            <Link
              href="BuyNow"
              className="mt-5 bg-white w-full text-xl font-semibold mb-5 hover:bg-black text-center hover:text-white hover:border py-2 rounded-md"
            >
              Buy Now
            </Link>
          </div>
          <div className=" flex gap-5">
            <Image className="w-10 h-10" src={shild} alt=""></Image>
            <h3 className="text-white text-sm">
              Safe and Secure Payments.Easy returns.100% Authentic products.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
