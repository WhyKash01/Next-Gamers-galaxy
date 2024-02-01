"use client";
import CategoryCard from "@/Components/CategoryCard";
import { CatrgoryItem, category, data } from "@/Store/atom";
import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import ItemsCard from "./ItemsCard";
import Filter from "./Filter";

const CategoryItem = () => {
  const [product, setProduct] = useRecoilState(data);
  const [items, setItems] = useRecoilState(CatrgoryItem);
  const [Category, setCategory] = useRecoilState(category);
  useEffect(() => {
    const CatItems = product.filter((item) => item.category === Category);
    setItems(CatItems);
    // console.log(items)
    console.log(CatItems);
  }, [Category]);
  return (
    <div className="flex">
        <div className="w-[20vw] ">
            <Filter/>
        </div>
        <div className="border w-[80vw] border-zinc-600 m-2">
      <h2 className="text-white font-semibold text-2xl ml-10 mt-5">
        Showing result of "{Category}"
      </h2>
      <h2 className="text-white text-xl ml-10 mt-1">
        {items.length} items found
      </h2>

      <div className="grid grid-cols-2 my-5 mx-10">
        {items.map((data, index) => {
          return (
            <div key={index}>
              <ItemsCard {...data} ></ItemsCard>
            </div>
          );
        })}
      </div>
      </div>
    </div>
  );
};

export default CategoryItem;
