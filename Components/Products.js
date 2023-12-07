import React from "react";
import Product from "./Product";
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
  let object= [
    {
      name: "Asus Tuf Gaming F15",
      src: l1,
      OrPrice:"₹1,03,990",
      Price: "₹85,990",
      percent:"17% off"
    },
    {
      name: "Acer 23.8 inch Full HD LED",
      src: m1,
      OrPrice:"₹11,800",
      Price: "₹7,999",
      percent:"32% off"
    },
    {
      name:"DELL G15",
      src: l2,
      OrPrice: "₹99,786",
      Price: "₹72,500",
      percent: "27% off"
    },
    {
      name:"ZEBRONICS 24 inch Full HD ",
      src: m2,
      OrPrice: "₹24,999",
      Price: "₹7,999",
      percent: "68% off"
    },
    {
      name:"RPM Euro Games Gaming Keyboard",
      src: k1,
      OrPrice: "₹1,490",
      Price: "₹702",
      percent: "52% off"
    },
    {
      name:"ZOTAC NVIDIA RTX 3050",
      src: g1,
      OrPrice: "₹41,070",
      Price: "₹23,500",
      percent: "42% off"
    },
    {
      name:"Acer Nitro 5",
      src: l3,
      OrPrice: "₹1,23,999",
      Price: "₹89,990",
      percent: "27% off"
    },
    {
      name:"Lenovo LOQ",
      src: l4,
      OrPrice: "₹1,33,790",
      Price: "₹99,990",
      percent: "25% off"
    },
    {
      name:"Acer Predator Neo (2023)",
      src: l5,
      OrPrice: "₹1,04,990",
      Price: "₹1,29,999",
      percent: "19% off"
    },
    {
      name:"ZEBRONICS 32 inch Curved",
      src: m3,
      OrPrice: "₹44,999",
      Price: "₹14,999",
      percent: "66% off"
    },
    {
      name:"MarQ by Flipkart 27 inch",
      src: m4,
      OrPrice: "₹21,999",
      Price: "₹11,999",
      percent: "45% off"
    },
    {
      name:"MSI 23.8 inch Full HD ",
      src: m5,
      OrPrice: "₹22,200",
      Price: "₹9,999",
      percent: "54% off"
    },
    {
      name:"EVOFOX Warhammer",
      src: k3,
      OrPrice: "₹1,499",
      Price: "₹1,099",
      percent: "26% off"
    },
    {
      name:"Ant Esports MK 1500 Mini",
      src: k4,
      OrPrice: "₹3,999",
      Price: "₹1,312",
      percent: "67% off"
    },
    {
      name:"Aula F3287 Mechanical ",
      src: k5,
      OrPrice: "₹6,999",
      Price: "₹2,199",
      percent: "68% off"
    },
    {
      name:"amd Ryzen 5 5600G ",
      src: p3,
      OrPrice: "₹34,500",
      Price: "₹13,755",
      percent: "60% off"
    },
    {
      name:"Intel i3-10105F 3.7 GHz",
      src: p4,
      OrPrice: "₹12,000",
      Price: "₹7,241",
      percent: "39% off"
    },
    {
      name:"amd Ryzen 9 5900X",
      src: p1,
      OrPrice: "₹75,000",
      Price: "₹32,159",
      percent: "57% off"
    },
    {
      name:"Intel i5-11400F 4.4 GHz",
      src: p2,
      OrPrice: "₹22,000",
      Price: "₹11,970",
      percent: "45% off"
    },
    {
      name:"Intel i7-12700F 4.9 GHz ",
      src: p5,
      OrPrice: "₹48,000",
      Price: "₹27,536",
      percent: "42% off"
    },
    {
      name:"ZOTAC NVIDIA GAMING GEFORCE GTX1650",
      src: g2,
      OrPrice: "₹22,385",
      Price: "₹11,973",
      percent: "46% off"
    },
    {
      name:"ZOTAC NVIDIA GeForce RTX 3060 ",
      src: g3,
      OrPrice: "₹44,400",
      Price: "₹27,950",
      percent: "37% off"
    },
    {
      name:"ASUS AMD Radeon DUAL RX560",
      src: g4,
      OrPrice: "₹19,999",
      Price: "₹9,999",
      percent: "49% off"
    },
    {
      name:"GIGABYTE AMD Radeon GV-R68XT",
      src: g5,
      OrPrice: "₹1,14,423",
      Price: "₹94,489",
      percent: "17% off"
    }
  ]
  return (
    <div className="bg-black text-white">
      <h2 className="bef text-center text-5xl font-serif text-red-600 py-[5vh] ">
        Recommended Items
      </h2>
      <div className=" pb-[5vh]">
        <div className=" flex justify-between mb-[5vh] mx-[5vw]">
          <Product {...object[0]} />
          <Product {...object[1]} />
          <Product {...object[2]}/>
          <Product {...object[3]} />
        </div>
        <div className=" flex justify-between mb-[5vh] mx-[5vw]">
          <Product {...object[4]} />
          <Product {...object[5]} />
          <Product {...object[6]} />
          <Product {...object[7]} />
        </div>
        <div className=" flex justify-between mb-[5vh] mx-[5vw]">
          <Product {...object[8]} />
          <Product {...object[9]} />
          <Product {...object[10]} />
          <Product {...object[11]} />
        </div>
        <div className=" flex justify-between mb-[5vh] mx-[5vw]">
          <Product {...object[12]} />
          <Product {...object[13]} />
          <Product {...object[14]} />
          <Product {...object[15]} />
        </div>
        <div className=" flex justify-between mb-[5vh] mx-[5vw]">
          <Product {...object[16]} />
          <Product {...object[17]} />
          <Product {...object[18]} />
          <Product {...object[19]} />
        </div>
        <div className=" flex justify-between mb-[5vh] mx-[5vw]">
          <Product {...object[20]} />
          <Product {...object[21]} />
          <Product {...object[22]} />
          <Product {...object[23]} />
        </div>
      </div>
      
    </div>
  );
}

export default Products;
