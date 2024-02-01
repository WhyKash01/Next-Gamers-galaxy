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
import { CatrgoryItem, category, data } from "@/Store/atom";
const Drop = () => {
  const [items, setItems] = useRecoilState(CatrgoryItem);
  const [object, setObject] = useRecoilState(data);
  const [Category, setCategory] = useRecoilState(category);
  const categoryHandler = () => {
    setCategory(props.title);
    console.log(items);
  };
  useEffect(() => {
    const CatItems = object.filter((item) => item.category === "Laptop");
    setItems(CatItems);
    // console.log(items)
    console.log(items);
  }, [Category]);
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger
          className=" text-xl"
          asChild
        >
          <button className="text-white flex">{Category===""?"Select Category":Category} <Image className="w-4 relative left-4 top-2" src={down}></Image></button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className=" px-5 py-2">
          <DropdownMenuLabel className="text-black">
            Choose Category
          </DropdownMenuLabel>
          <DropdownMenuSeparator className="bg-black" />
          <DropdownMenuItem onClick={()=>{setCategory("Laptop")}}>
            Laptop
          </DropdownMenuItem>
          <DropdownMenuItem onClick={()=>{setCategory("Monitor")}}>
            Monitor
          </DropdownMenuItem>
          <DropdownMenuItem onClick={()=>{setCategory("GPU")}}>
            GPU
          </DropdownMenuItem>
          <DropdownMenuItem onClick={()=>{setCategory("Processor")}}>
            Processor
          </DropdownMenuItem>
          <DropdownMenuItem onClick={()=>{setCategory("Keyboard")}}>
            Keyboard
          </DropdownMenuItem>
          </DropdownMenuContent>
        
      </DropdownMenu>
    </div>
  );
};

export default Drop;
