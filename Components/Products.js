import React, { useState } from "react";
import Product from "./Product";
import Pagination from "./Pagination";
import l1 from "../public/png/laptop1.webp";
import l2 from "../public/png/laptop2.webp";
import l3 from "../public/png/laptop3.webp";
import l4 from "../public/png/laptop4.webp";
import l5 from "../public/png/laptop5.webp";
import k1 from "../public/png/keyboard1.jpg";
import k3 from "../public/png/keyboard3.webp";
import k4 from "../public/png/keyboard4.webp";
import k5 from "../public/png/keyboard5.webp";
import m1 from "../public/png/monitor1.webp";
import m2 from "../public/png/monitor2.webp";
import m3 from "../public/png/monitor3.webp";
import m4 from "../public/png/monitor4.webp";
import m5 from "../public/png/monitor5.webp";
import p1 from "../public/png/processor1.jpg";
import p2 from "../public/png/processor2.jpg";
import p3 from "../public/png/processor3.jpg";
import p4 from "../public/png/processor4.jpg";
import p5 from "../public/png/processor5.jpg";
import g1 from "../public/png/graphic1.png";
import g2 from "../public/png/graphic2.jpg";
import g3 from "../public/png/graphic3.webp";
import g4 from "../public/png/graphic6.jpg";
import g5 from "../public/png/graphic7.webp";
function Products() {
  
  const [object, setobject] = useState([
    {
      id:"1",
      name: "Asus Tuf Gaming F15",
      src: l1,
      OrPrice:"₹1,03,990",
      Price: "₹85,990",
      percent:"17% off"
    },
    {
      id:"2",
      name: "Acer 23.8 inch Full HD LED",
      src: m1,
      OrPrice:"₹11,800",
      Price: "₹7,999",
      percent:"32% off"
    },
    {
      id:"3",
      name:"DELL G15",
      src: l2,
      OrPrice: "₹99,786",
      Price: "₹72,500",
      percent: "27% off"
    },
    {
      id:"4",
      name:"ZEBRONICS 24 inch Full HD ",
      src: m2,
      OrPrice: "₹24,999",
      Price: "₹7,999",
      percent: "68% off"
    },
    {
      id:"5",
      name:"RPM Euro Games Gaming Keyboard",
      src: k1,
      OrPrice: "₹1,490",
      Price: "₹702",
      percent: "52% off"
    },
    {
      id:"6",
      name:"ZOTAC NVIDIA RTX 3050",
      src: g1,
      OrPrice: "₹41,070",
      Price: "₹23,500",
      percent: "42% off"
    },
    {
      id:"7",
      name:"Acer Nitro 5",
      src: l3,
      OrPrice: "₹1,23,999",
      Price: "₹89,990",
      percent: "27% off"
    },
    {
    id:"8",
      name:"Lenovo LOQ",
      src: l4,
      OrPrice: "₹1,33,790",
      Price: "₹99,990",
      percent: "25% off"
    },
    {
    id:"9",
      name:"Acer Predator Neo (2023)",
      src: l5,
      OrPrice: "₹1,04,990",
      Price: "₹1,29,999",
      percent: "19% off"
    },
    {
    id:"10",
      name:"ZEBRONICS 32 inch Curved",
      src: m3,
      OrPrice: "₹44,999",
      Price: "₹14,999",
      percent: "66% off"
    },
    {
    id:"11",
      name:"MarQ by Flipkart 27 inch",
      src: m4,
      OrPrice: "₹21,999",
      Price: "₹11,999",
      percent: "45% off"
    },
    {
    id:"12",
      name:"MSI 23.8 inch Full HD ",
      src: m5,
      OrPrice: "₹22,200",
      Price: "₹9,999",
      percent: "54% off"
    },
    {
    id:"13",
      name:"EVOFOX Warhammer",
      src: k3,
      OrPrice: "₹1,499",
      Price: "₹1,099",
      percent: "26% off"
    },
    {
    id:"14",
      name:"Ant Esports MK 1500 Mini",
      src: k4,
      OrPrice: "₹3,999",
      Price: "₹1,312",
      percent: "67% off"
    },
    {
    id:"15",
      name:"Aula F3287 Mechanical ",
      src: k5,
      OrPrice: "₹6,999",
      Price: "₹2,199",
      percent: "68% off"
    },
    {
    id:"16",
      name:"amd Ryzen 5 5600G ",
      src: p3,
      OrPrice: "₹34,500",
      Price: "₹13,755",
      percent: "60% off"
    },
    {
    id:"17",
      name:"Intel i3-10105F 3.7 GHz",
      src: p4,
      OrPrice: "₹12,000",
      Price: "₹7,241",
      percent: "39% off"
    },
    {
    id:"18",
      name:"amd Ryzen 9 5900X",
      src: p1,
      OrPrice: "₹75,000",
      Price: "₹32,159",
      percent: "57% off"
    },
    {
    id:"19",
      name:"Intel i5-11400F 4.4 GHz",
      src: p2,
      OrPrice: "₹22,000",
      Price: "₹11,970",
      percent: "45% off"
    },
    {
    id:"20",
      name:"Intel i7-12700F 4.9 GHz ",
      src: p5,
      OrPrice: "₹48,000",
      Price: "₹27,536",
      percent: "42% off"
    },
    {
    id:"21",
      name:"ZOTAC NVIDIA GAMING GEFORCE GTX1650",
      src: g2,
      OrPrice: "₹22,385",
      Price: "₹11,973",
      percent: "46% off"
    },
    {
    id:"22",
      name:"ZOTAC NVIDIA GeForce RTX 3060 ",
      src: g3,
      OrPrice: "₹44,400",
      Price: "₹27,950",
      percent: "37% off"
    },
    {
    id:"23",
      name:"ASUS AMD Radeon DUAL RX560",
      src: g4,
      OrPrice: "₹19,999",
      Price: "₹9,999",
      percent: "49% off"
    },
    {
      id:"24",
      name:"GIGABYTE AMD Radeon GV-R68XT",
      src: g5,
      OrPrice: "₹1,14,423",
      Price: "₹94,489",
      percent: "17% off"
    }
  ])
  let displayProduct = object.map((i,t)=>
  {
    return (
      
    <Product key={t} {...i} />
  )}
  );
  
  return (
    <div className="bg-[#1f1f1f] text-white">
      <h2 className=" text-center  py-[5vh] font-bold font-mono text-4xl ">
        Recommended Items
      </h2>
      <div className=" grid md:grid-cols-3 grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-5 mx-10 mb-10">
      {displayProduct}
      </div>
      <Pagination></Pagination>
    </div>
  );
}

export default Products;
