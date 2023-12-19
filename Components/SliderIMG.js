import React from 'react'
import img1 from "../public/png/fwebp (1).webp";
import img2 from "../public/png/fwebp.webp";
import img3 from "../public/png/fwebp (2).webp";
import img4 from "../public/png/fwebp (3).webp";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/autoplay';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './slider.css';

const SliderIMG = () => {
  return (
    <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
    spaceBetween={0}
    slidesPerView={1}
    autoplay={{delay: 3000}}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><Image className="w-screen h-auto" src={img1} alt="" /></SwiperSlide>
      <SwiperSlide><Image className="w-[100vw] h-auto" src={img2} alt="" /></SwiperSlide>
      <SwiperSlide><Image className="w-[100vw] h-auto" src={img3} alt="" /></SwiperSlide>
      <SwiperSlide><Image className="w-[100vw] h-auto" src={img4} alt="" /></SwiperSlide>
      
    </Swiper>
  )
}

export default SliderIMG