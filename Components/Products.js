import React, { useEffect, useState } from "react";
import Product from "./Product";
import Pagination from "./Pagination";
import { useRecoilState } from "recoil";
import { data, endIndex, startIndex,  } from "@/Store/atom";
function Products() {
  const [object, setobject]= useRecoilState(data);
  const [items, setItems]= useState([]);
  const [start, setStart]=useRecoilState(startIndex);
  const [end, setEnd]= useRecoilState(endIndex);
  useEffect(() => {
    const item = object.filter(item=>item.id<=end&& item.id>=start)
    setItems(item);
  }, [start,end]);
  
  let displayProduct = items.map((i,t)=>
  {
    console.log(items)
    return (
    <Product key={t} {...i} />
  )}
  );
  
  return (
    <div className="bg-[#1f1f1f] text-white">
      <h2 className=" text-center  sm:py-[5vh] py-3 font-bold font-mono sm:text-4xl text-xl ">
        Recommended Items
      </h2>
      <div className=" grid md:grid-cols-3 grid-cols-2 gap-x-0 gap-y-0 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-0 sm:mx-10 mx-5">
      {displayProduct}
      </div>
      <Pagination></Pagination>
    </div>
  );
}

export default Products;
