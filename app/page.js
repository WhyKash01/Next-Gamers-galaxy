"use client"
import axios from 'axios'
import Header from "../Components/Header";
import SliderIMG from "../Components/SliderIMG";
import Products from "../Components/Products";
import React, {useState} from 'react'
const page = () => {
  
  return (
    <>
      <Header/>
      <SliderIMG/>
      <Products/>
    </>
    )
}

export default page