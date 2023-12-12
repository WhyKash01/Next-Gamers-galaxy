import React from 'react'
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

const CategoryCard = () => {
  return (
    <Swiper
    modules={[Navigation, Scrollbar, A11y]}
    spaceBetween={20}
    slidesPerView={4}
    navigation
    scrollbar={{ draggable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <Link href="/">
        <div className='border bg-white p-5 rounded-lg '>
                <div className='h-[15vw] items-center justify-center my-auto flex'>
                <Image  className='  mx-auto' src={l1} alt="" />
                
                </div>
            <h3 className=' mt-10 text-center text-4xl font-mono font-semibold'>Laptops</h3>
        </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
      <Link href="/">
        <div className='border bg-white p-5 rounded-lg justify-center items-center my-auto '>
                <div className='h-[15vw] items-center justify-center my-auto flex'>
                <Image  className='  mx-auto' src={k4} alt="" />
                
                </div>
            <h3 className=' mt-10 text-center text-4xl font-mono font-semibold'>Keyboards</h3>
        </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
      <Link href="/">
        <div className='border bg-white p-5 rounded-lg justify-center items-center my-auto '>
                <div className='h-[15vw] items-center justify-center my-auto flex'>
                <Image  className='  mx-auto' src={m2} alt="" />
                
                </div>
            <h3 className=' mt-10 text-center text-4xl font-mono font-semibold'>Monitors</h3>
        </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
      <Link href="/">
        <div className='border bg-white p-5 rounded-lg justify-center items-center my-auto '>
                <div className='h-[15vw] items-center justify-center my-auto flex'>
                <Image  className='  mx-auto' src={g1} alt="" />
                
                </div>
            <h3 className=' mt-10 text-center text-4xl font-mono font-semibold'>Graphic Card</h3>
        </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
      <Link href="/">
        <div className='border bg-white p-5 rounded-lg justify-center items-center my-auto '>
                <div className='h-[15vw] items-center justify-center my-auto flex'>
                <Image  className='  mx-auto' src={p1} alt="" />
                
                </div>
            <h3 className=' mt-10 text-center text-4xl font-mono font-semibold'>Processor</h3>
        </div>
        </Link>
      </SwiperSlide>
      
    </Swiper>
  )
}

export default CategoryCard