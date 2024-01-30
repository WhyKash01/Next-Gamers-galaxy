"use client";
import React, { useEffect } from "react";
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
import { CatrgoryItem, SelectPrice, category, data, maxPrice, minPrice } from "@/Store/atom";
const Drop = () => {
  const [items, setItems] = useRecoilState(CatrgoryItem);
  const [object, setObject] = useRecoilState(data);
  const [Category, setCategory] = useRecoilState(category);
  const [Maxprice, setMaxprice]= useRecoilState(maxPrice)
  const [Minprice, setMinprice]= useRecoilState(minPrice)
  const [selectPrice,setSelectPrice]= useRecoilState(SelectPrice);  
//   const categoryHandler = () => {
//     setCategory(props.title);
//     console.log(items);
//   };
  
useEffect(() => {
    const SelectPr = selectPrice.filter((item) => item > Maxprice);
    setSelectPrice(SelectPr)
}, [Minprice.Maxprice])
  useEffect(() => {
    const CatItems = object.filter((item) => item.category === "Laptop");
    setItems(CatItems);
    // console.log(items)
    console.log(items);
  }, [Category]);
  useEffect(() => {
    const CatItems = object.filter((item) => item.Price <= Maxprice && item.category === Category && item.Price>=Minprice);
    setItems(CatItems);
    // console.log(items)
    console.log(items);
  }, [Maxprice]);
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
        {selectPrice.map((t,i)=>{
            return <DropdownMenuItem className="py-1" onClick={()=>{setMinprice(t)}}>
            {t}
          </DropdownMenuItem>
          })}
          
          </DropdownMenuContent>
        
      </DropdownMenu>
    </div>
  );
};

export default Drop;