import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSetRecoilState } from "recoil";
import { itemAdded } from "@/Store/atom";
const LeftSection = (props) => {
  const [goToCart, setgoToCart] = useState(false);
  const OnClickAdd = () => {
    setgoToCart(true);
    !goToCart
      ? setItemInCart((itemAdded) => [...itemAdded, { id: props.id }])
      : {};
  };
  const setItemInCart = useSetRecoilState(itemAdded);
  return (
    <div className="sm:w-[30vw]">
      <div className="sm:absolute sm:w-[30vw] rounded-xl flex flex-col sm:gap-5 gap-2">
        <div className="flex sm:flex-col gap-2 ">
          <div className=" bg-white p-10 rounded-md  w-[80%] sm:w-full">
            <Image
              alt=""
              src={props.src}
              className="mx-auto hover:scale-110 delay-100 ease-in-out duration-500 translate w-[90%]"
            ></Image>
          </div>
          <div className=" flex gap-1 w-[20%] sm:w-full flex-col sm:flex-row justify-between">
            <button className="focus:outline-none focus:border-2 focus:border-red-500 sm:w-[6.5vw] p-2 rounded-md hover:border-red-500 hover:border-2 bg-white ">
              <Image alt="" className="" src={props.src}></Image>
            </button>
            <button className="   focus:outline-none focus:border-2 focus:border-red-500 sm:w-[6.5vw] p-2 rounded-md hover:border-red-500 hover:border-2 bg-white ">
              <Image alt="" className="" src={props.src}></Image>
            </button>
            <button className="   focus:outline-none focus:border-2 focus:border-red-500 sm:w-[6.5vw] p-2 rounded-md hover:border-red-500 hover:border-2 bg-white ">
              <Image alt="" className="" src={props.src}></Image>
            </button>
            <button className="   focus:outline-none focus:border-2 focus:border-red-500 sm:w-[6.5vw] p-2 rounded-md hover:border-red-500 hover:border-2 bg-white ">
              <Image alt="" className="" src={props.src}></Image>
            </button>
          </div>
        </div>
        <div className="flex justify-between sm:gap-5 gap-2 text-sm sm:text-lg font-semibold">
          <Link
            onClick={OnClickAdd}
            href="AddToCart"
            className=" bg-red-600 text-center hover:bg-black hover:text-white hover:border py-2 my-auto rounded-md w-[50%]"
          >
            {goToCart ? "Go to Cart" : "Add to Cart"}
          </Link>
          <Link
            href="BuyNow"
            className="bg-white hover:bg-black text-center hover:text-white hover:border py-2 my-auto rounded-md w-[50%]"
          >
            Buy Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LeftSection;
