"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import down from '@/public/png/drop1.png'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { useRecoilState } from "recoil";
import { CatrgoryItem, SelectPrice, StarAbove, category, data, maxPrice, minPrice } from "@/Store/atom";
const Drop1 = () => {
  const [items, setItems] = useRecoilState(CatrgoryItem);
  const [object, setObject] = useRecoilState(data);
  const [Category, setCategory] = useRecoilState(category);
  const [Maxprice, setMaxprice]= useRecoilState(maxPrice)
  const [Minprice, setMinprice]= useRecoilState(minPrice)
  const [selectPrice,setSelectPrice]= useRecoilState(SelectPrice);  
  const [selArr, setselArr]= useState(selectPrice)
  const [starAbove, setstarAbove]=useRecoilState(StarAbove);
useEffect(() => {
    const SelectPr = selectPrice.filter((item) => item < Maxprice);
    setselArr(SelectPr)
}, [Minprice,Maxprice])
  useEffect(() => {
    const CatItems = object.filter((item) => item.Price <= Maxprice && item.rating>=starAbove&& item.category === Category && item.Price>=Minprice);
    setItems(CatItems);
    console.log(items);
  }, [Minprice,Maxprice]);
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger
          className=" text-xl"
          asChild
        >
          <button className="text-white flex">{Minprice?Minprice:"Min"}<Image alt="" className="w-4 relative left-4 top-2" src={down}></Image></button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className=" px-5 py-2">
        {selArr.map((t,i)=>{
            return <DropdownMenuItem className="py-1" onClick={()=>{setMinprice(t)}}>
            {t===0?"Min":t}
          </DropdownMenuItem>
          })}
          
          </DropdownMenuContent>
        
      </DropdownMenu>
    </div>
  );
};

export default Drop1;
