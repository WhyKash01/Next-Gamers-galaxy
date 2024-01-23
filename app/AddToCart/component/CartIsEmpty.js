import React from "react";
import Image from "next/image";
import Link from "next/link";
import EmptyImg from "../../../public/png/EmptyImg1.png";
const CartIsEmpty = () => {
  return (
    <div className=" bg-[#3e3e3e] rounded-xl p-0  my-5">
      <Image
        src={EmptyImg}
        className="w-[300px] h-[300px] items-center mx-auto"
      ></Image>
      <h2 className=" text-center text-3xl font-semibold text-white">
        Your cart is empty!
      </h2>
      <h3 className=" text-center text-xl mt-1 mb-5  text-white">
        Add items to it now.
      </h3>
      <div className=" flex justify-center">
        <Link
          href="/"
          className=" bg-red-600 mb-5 text-center hover:bg-black hover:text-white hover:border py-2 px-14 text-xl font-semibold  rounded-md  "
        >
          Shop Now
        </Link>
      </div>
    </div>
  );
};

export default CartIsEmpty;
