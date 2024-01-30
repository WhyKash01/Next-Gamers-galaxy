"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRecoilState } from "recoil";
import { CatrgoryItem, category, data } from "@/Store/atom";
import { Laptop } from "lucide-react";
const Drop = (props) => {
  const [items, setItems] = useRecoilState(CatrgoryItem);
  const [object, setObject] = useRecoilState(data);
  const [Category, setCategory] = useRecoilState(category);
  
  console.log(items)
  const categoryHandler = () => {
    setCategory(props.title);
    console.log(items);
  };
  useEffect(() => {
    const CatItems = object.filter((item) => item.category === props.title);
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
          <button onClick={()=>{
            
          }} className="bg-black">{props.title}</button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className=" px-5 py-2">
          <DropdownMenuLabel className="text-black">
            More in {props.title}
          </DropdownMenuLabel>
          <DropdownMenuSeparator className="bg-black" />
          <DropdownMenuItem asChild>
            <Link onClick={categoryHandler} href="CategoryPage">
              All {props.title}s
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
                <Link href={`ProductPage?id=6`}>ZOTAC NVIDIA RTX 3050</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
                <Link href={`ProductPage?id=21`}>ZOTAC NVIDIA GAMING GEFORCE GTX1650</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
                <Link href={`ProductPage?id=22`}>ZOTAC NVIDIA GeForce RTX 3060</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
                <Link href={`ProductPage?id=23`}>ASUS AMD Radeon DUAL RX560</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
                <Link href={`ProductPage?id=24`}>GIGABYTE AMD Radeon GV-R68XT</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
        
      </DropdownMenu>
    </div>
  );
};

export default Drop;
