"use client"
import { RecoilRoot } from 'recoil';
import axios from 'axios'
import Header from "../Components/Header";
import SliderIMG from "../Components/SliderIMG";
import Products from "../Components/Products";
import React, {useState} from 'react'
import Categories from '@/Components/Categories';

const page = () => {
  
  return (
    <>
      <RecoilRoot>
      <SliderIMG/>
      <Categories/>
      <Products/>
      </RecoilRoot>
    </>
    )
}

export default page