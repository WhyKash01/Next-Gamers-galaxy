"use client";
import "../../ProductPage/CompoentsProduct/ProPage.css";
import { data } from "@/Store/atom";
import React from "react";
import { useRecoilState } from "recoil";
import Link from "next/link";
import Image from "next/image";
import Review from "@/app/ProductPage/CompoentsProduct/Review";
const ItemsCard = (props) => {
  const [product, setProduct] = useRecoilState(data);
  let object = product[props.id - 1];
  return (
    <Link href={`ProductPage?id=${props.id}`}>
    <div className="flex z-40 hover:scale-100 flex-col bg-zinc-800 border border-zinc-600 hover:shadow-xl hover:shadow-zinc-600 hover:z-50 p-5">
      <div className="h-[15rem] flex items-center p-5 bg-white rounded-lg ">
      <Image
        className="max-h-[13rem] max-w-[17rem] mx-auto"
        src={props.src}
        alt=""
        ></Image>
      </div>
      <div className="flex items-center">
      <div className="text-white ">
        <h1 className="line-clamp-2 mx-10 mt-5 text-lg font-bold">{props.LongName}</h1>
        <div className="price ml-10 flex gap-10 font-serif text-lg my-2">
          <s className=" text-red-600">₹{props.OrPrice}</s>
          <h2 className=" text-green-600">₹{props.Price}</h2>
          <h4>{props.percent}</h4>
        </div>
        <div className="ml-10">
        <Review/>
        <h3 className="text-lg font-semibold mt-1">{(props.Price)>1000? "Free Delivery" : "Delivery ₹40"}</h3>
        </div>
        
      </div>
      </div>
    </div>
        </Link>
  );
};

export default ItemsCard;
