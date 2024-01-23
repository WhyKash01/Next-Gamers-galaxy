import React from "react";
import i2 from "../../../public/png/company.png";
import i3 from "../../../public/png/bgDiscription.jpg";
import Image from "next/image";
import DisCard from "./DisCard";
import "./ProPage.css"
import Review from "./Review";
import { Table } from "lucide-react";
import { TableDemo } from "./TableDemo";

const RightSection = (props) => {
  const object = props;
  const i1 = object.src;

  return (
    <div className="w-[50vw] text-white">
      <div class="content">
        <h2 className="text-2xl font-semibold mb-5">
          {props.LongName}</h2>
        <div className="price flex gap-10 font-serif text-xl">
          <s className=" text-red-600">{props.OrPrice}</s>
          <h2 className=" text-green-800">{props.Price}</h2>
          <h4>{props.percent}</h4>
        </div>
        <div className="mt-5">
            <Review/>
            
        </div>
        <div class="flex gap-5 mt-5">
          <Image className="bg-white rounded-sm h-7 w-20 my-auto " src={i2}></Image>
          <h4 class="text-lg">1 Year Onsite Warranty</h4>
        </div>

        <h1 className="text-3xl font-semibold mt-10 mb-5">Product Description</h1>
        <DisCard {...object} />
        <DisCard {...object} />

        
          <h2 className="lg:text-3xl mb-5 font-semibold">Specification</h2>
          {/* <table className="mb-5 ">
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
          </table> */}
          <TableDemo/>
        
      </div>
    
    </div>
  );
};

export default RightSection;
