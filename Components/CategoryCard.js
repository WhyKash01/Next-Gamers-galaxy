import React, { useEffect, useState } from 'react'
import l1 from "../public/png/laptop5.webp";
import k4 from "../public/png/keyboard5.webp";
import m2 from "../public/png/monitor3.webp";
import p1 from "../public/png/processor3.jpg";
import g1 from "../public/png/graphic1.png";
import { Navigation, Scrollbar, A11y } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './Card.css';
import { useRecoilState } from 'recoil';
import { category } from '@/Store/atom';

const CategoryCard = () => {
  
  const [Category, setCategory]= useRecoilState(category);
  let im= 'h-[15vw]  items-center justify-center my-auto flex'
  let text= "sm:mt-10 mt-1 text-center sm:text-2xl text-xs font-semibold"
  let card = "border bg-white sm:p-5 p-2 overflow-hidden sm:rounded-lg rounded-sm justify-center items-center my-auto";
  return (
    <Swiper
    modules={[Navigation, Scrollbar, A11y]}
    spaceBetween={20}
    slidesPerView={5}
    navigation
    scrollbar={{ draggable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <Link onClick={()=>{
          setCategory("Laptop")}} href="CategoryPage">
        <div className={card}>
                <div className={im}>
                <Image  className='max-h-[15vw] w-auto mx-auto ' src={l1} alt="" />
                
                </div>
            <h3 className={text}>Laptops</h3>
        </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
      <Link onClick={()=>setCategory("Keyboard")} href="CategoryPage">
        <div className={card}>
                <div className={im}>
                <Image  className='max-h-[15vw] w-auto  mx-auto' src={k4} alt="" />
                
                </div>
            <h3 className={text}>Keyboards</h3>
        </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
      <Link onClick={()=>setCategory("Monitor")} href="CategoryPage">
        <div className={card}>
                <div className={im}>
                <Image  className='max-h-[15vw] w-auto  mx-auto' src={m2} alt="" />
                
                </div>
            <h3 className={text}>Monitors</h3>
        </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
      <Link onClick={()=>setCategory("GPU")} href="CategoryPage">
        <div className={card}>
                <div className={im}>
                <Image  className='max-h-[15vw] w-auto mx-auto' src={g1} alt="" />
                
                </div>
            <h3 className={text}>Graphic Card</h3>
        </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
      <Link onClick={()=>setCategory("Processor")} href="CategoryPage">
        <div className={card}>
                <div className={im}>
                <Image  className='max-h-[15vw] w-auto  mx-auto' src={p1} alt="" />
                
                </div>
            <h3 className={text}>Processor</h3>
        </div>
        </Link>
      </SwiperSlide>
      
    </Swiper>
  )
}

export default CategoryCard