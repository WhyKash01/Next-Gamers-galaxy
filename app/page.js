"use client";
import SliderIMG from "../Components/SliderIMG";
import Products from "../Components/Products";
import React, { useState } from "react";
import Categories from "@/Components/Categories";

const page = () => {
  return (
    <>
      <SliderIMG />
      <Categories />
      <Products />
    </>
  );
};

export default page;
