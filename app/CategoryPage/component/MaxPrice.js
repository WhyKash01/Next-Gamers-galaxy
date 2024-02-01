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
import { CatrgoryItem, SelectPrice1, category, data, maxPrice, minPrice } from "@/Store/atom";
const Drop = () => {
  const [items, setItems] = useRecoilState(CatrgoryItem);
  const [object, setObject] = useRecoilState(data);
  const [Category, setCategory] = useRecoilState(category);
  const [Maxprice, setMaxprice]= useRecoilState(maxPrice)
  const [Minprice, setMinprice]= useRecoilState(minPrice)
  const [selectPrice1,setSelectPrice1]= useRecoilState(SelectPrice1);  
  const [selarr,setselarr]= useState(selectPrice1)
useEffect(() => {
    const SelectPr = selectPrice1.filter((item) => item >Minprice);
    // setSelectPrice1(SelectPr)
    setselarr(SelectPr)
}, [Minprice])
  useEffect(() => {
    const CatItems = object.filter((item) => item.Price <= Maxprice && item.category === Category && item.Price>=Minprice);
    setItems(CatItems);
  }, [Minprice,Maxprice]);
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger
          className=" text-xl"
          asChild
        >
          <button className="text-white flex">{Maxprice===200000?"Max":Maxprice}<Image alt="" className="w-4 relative left-4 top-2" src={down}></Image></button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className=" px-5 py-2">
        {selarr.map((t,i)=>{
            return <DropdownMenuItem className="py-1" onClick={()=>{setMaxprice(t)}}>
            {t}
          </DropdownMenuItem>
          })}
          
          </DropdownMenuContent>
        
      </DropdownMenu>
    </div>
  );
};

export default Drop;
