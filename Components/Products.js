import React from "react";
import Product from "./Product";
import p1 from "../public/png/-original-imagetj2awbvdju6.webp";
import p2 from "../public/png/-original-imagsatbymyszzjf.jpg";
import p3 from "../public/png/g15-5521-se-gaming-laptop-dell-original-imagdktezaswjvsk.jpg";
import p5 from "../public/png/gaming-keyboard-with-87-keys-rgb-backlit-with-suspension-keys-original-imagzcgwtrabgjna.jpg";
import p6 from "../public/png/Screenshot 2023-08-19 012825.png";
import p4 from "../public/png/-original-imagdyc4ehaygvug.webp";
import p7 from "../public/png/-original-imagsatbymyszzjf.jpg";
import p8 from "../public/png/Screenshot 2023-08-19 012825.png";
function Products() {
  let object= [
    {
      name: "Asus Tuf Gaming F15",
      src: p1,
      OrPrice:"₹1,03,990",
      Price: "₹85,990",
      percent:"17% off"
    },
    {
      name: "Acer 23.8 inch Full HD LED",
      src: p2,
      OrPrice:"₹11,800",
      Price: "₹7,999",
      percent:"32% off"
    },
    {
      name:"DELL G15",
      src: p3,
      OrPrice: "₹99,786",
      Price: "₹72,500",
      percent: "27% off"
    },
    {
      name:"ZEBRONICS 24 inch Full HD ",
      src: p4,
      OrPrice: "₹24,999",
      Price: "₹7,999",
      percent: "68% off"
    },
    {
      name:"RPM Euro Games Gaming Keyboard",
      src: p5,
      OrPrice: "₹1,490",
      Price: "₹702",
      percent: "52% off"
    },
    {
      name:"ZOTAC NVIDIA RTX 3050",
      src: p6,
      OrPrice: "₹41,070",
      Price: "₹23,500",
      percent: "42% off"
    },
    {
      name:"Acer 23.8 inch Full HD LED",
      src: p7,
      OrPrice: "₹11,800",
      Price: "₹7,999",
      percent: "32% off"
    },
    {
      name:"Acer 23.8 inch Full HD LED",
      src: p8,
      OrPrice: "₹11,800",
      Price: "₹7,999",
      percent: "32% off"
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
      </div>
      {/* <div className="pdt px-[3vw]">
      //   <div className="products flex justify-between mb-[5vh]">
      //     <div className="row bg-white p-[2vh] rounded-lg text-center text-black ">
      //       <div className="p1" id="1">
      //         <a href="./gg.html">
      //           <img src={p1} alt="" />
      //         </a>
      //         <h3 id="name" className="text-3xl my-[2vh] font-bold font-serif">
      //           Asus Tuf Gaming F15{" "}
      //         </h3>
      //         <div className="price flex justify-between font-serif text-2xl mx-[10%] ">
      //           <s className=" text-red-600">₹1,03,990</s>
      //           <h2 className=" text-green-800">₹85,990</h2>
      //           <h4>17% off</h4>
      //         </div>
      //       </div>
      //     </div>
      //     <div className="row">
      //       <div className="p1" id="hi">
      //         <img src={p2} alt="" />
      //         <h3 id="name">Acer 23.8 inch Full HD LED</h3>
      //         <div className="price">
      //           <s>₹11,800</s>
      //           <h2>₹7,999</h2>
      //           <h4>32% off</h4>
      //         </div>
      //       </div>
      //     </div>
      //     <div className="row">
      //       <div className="p1">
      //         <img src={p3} alt="" />
      //         <h3 id="name">DELL G15 </h3>
      //         <div className="price">
      //           <s>₹99,786</s>
      //           <h2>₹72,500</h2>
      //           <h4>27% off</h4>
      //         </div>
      //       </div>
      //     </div>
      //     <div className="row">
      //       <div className="p1">
      //         <a href="./gg.html">
      //           <img src={p4} alt="" />
      //         </a>

      //         <h3 id="name">ZEBRONICS 24 inch Full HD </h3>
      //         <div className="price">
      //           <s>₹24,999</s>
      //           <h2>₹7,999</h2>
      //           <h4>68% off</h4>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      //   <div className="products flex justify-between">
      //     <div className="row">
      //       <div className="p1">
      //         <img src={p5} alt="" />
      //         <h3 id="name">RPM Euro Games Gaming Keyboard</h3>
      //         <div className="price">
      //           <s>₹1,490</s>
      //           <h2>₹702</h2>
      //           <h4>52% off</h4>
      //         </div>
      //       </div>
      //     </div>
      //     <div className="row">
      //       <div className="p1">
      //         <img src={p6} alt="" />
      //         <h3 id="name">ZOTAC NVIDIA RTX 3050 </h3>
      //         <div className="price">
      //           <s>₹41,070</s>
      //           <h2>₹23,500</h2>
      //           <h4>42% off</h4>
      //         </div>
      //       </div>
      //     </div>
      //     <div className="row">
      //       <div className="p1">
      //         <img src={p7} alt="" />
      //         <h3 id="name">ZEBRONICS 24 inch Full HD </h3>
      //         <div className="price">
      //           <s>₹24,999</s>
      //           <h2>₹7,999</h2>
      //           <h4>68% off</h4>
      //         </div>
      //       </div>
      //     </div>
      //     <div className="row">
      //       <div className="p1">
      //         <img src={p8} alt="" />
      //         <h3 id="name">Acer 23.8 inch Full HD LED</h3>
      //         <div className="price">
      //           <s>₹11,800</s>
      //           <h2>₹7,999</h2>
      //           <h4>32% off</h4>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      </div> */}
    </div>
  );
}

export default Products;
