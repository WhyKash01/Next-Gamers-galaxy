import React from "react";
import i2 from "../../../public/png/company.png";
import i3 from "../../../public/png/bgDiscription.jpg";
import Image from "next/image";
import DisCard from "./DisCard";
import "./ProPage.css"
import Review from "./Review";

const RightSection = (props) => {
  const object = props;
  const i1 = object.src;

  return (
    <div className="w-[50vw] text-white">
      <div class="content">
        <h2 className="text-4xl font-semibold mb-10">
          ASUS TUF Gaming F15 Core i5 12th Gen - (16 GB/512 GB SSD/Windows 11
          Pro/4 GB Graphics/NVIDIA GeForce RTX 3050) FX507ZC4-HN116W Gaming
          Laptop (15.6 Inch, Mecha Gray, 2.20 Kg)
        </h2>
        <div className="price flex gap-10 font-serif text-3xl">
          <s className=" text-red-600">{props.OrPrice}</s>
          <h2 className=" text-green-800">{props.Price}</h2>
          <h4>{props.percent}</h4>
        </div>
        <div className="mt-10">
            <Review/>
            
        </div>
        <div class="flex gap-5 my-10">
          <Image className="bg-white rounded-md" src={i2}></Image>
          <h4 class="text-2xl">1 Year Onsite Warranty</h4>
        </div>

        <h1 className="text-5xl font-semibold mb-10">Product Description</h1>
        <DisCard {...object} />
        <DisCard {...object} />

        
          <h2 className="lg:text-5xl font-semibold">Specification</h2>
          <h2 className="lg:text-3xl font-bold my-10">General</h2>
          <table className="mb-10 ">
          <tbody>
          <tr className="flex text-2xl mb-5 font-semibold">
            <td className="w-[25vw]">Brand</td>
            <td>Dell</td>
          </tr>
          <tr className="flex  text-2xl mb-5 font-semibold">
              <td className="w-[25vw]">Series</td>
              <td>G15</td>
          </tr>
          <tr className="flex  text-2xl mb-5 font-semibold">
              <td className="w-[25vw]">Graphic Processor</td>
              <td>NVIDIA GeForce RTX 3050</td>
          </tr>
          <tr className="flex text-2xl mb-5 font-semibold">
              <td className="w-[25vw]">Processor</td>
              <td>Intel Core i5 12th gen</td>
          </tr>
          <tr className="flex text-2xl mb-5 font-semibold">
              <td className="w-[25vw]">Color</td>
              <td>Dark Shadow Grey</td>
          </tr>
          <tr className="flex text-2xl mb-5 font-semibold">
              <td className="w-[25vw]">Battery Backup</td>
              <td>Upto 10 Hours</td>
          </tr>
          <tr className="flex text-2xl mb-5 font-semibold">
              <td className="w-[25vw]">Dedicated Graphic Memory Type</td>
              <td>GDDR6</td>
          </tr>
          <tr className="flex text-2xl mb-5 font-semibold">
              <td className="w-[25vw]">RAM Type</td>
              <td>DDR5</td>
          </tr>
          </tbody>
          </table>
    
        
      </div>
    
    </div>
  );
};

export default RightSection;
