import React from "react";
import Image from "next/image";
import logo from "../public/png/gamers-galaxy-high-resolution-logo-color-on-transparent-background (1).png"
import searchIcon from "../public/png/magnifiying-glass.png";
import fav from "../public/png/heart (1).png"
import cart from "../public/png/shopping-cart (1).png"
import profile from "../public/png/user.png"
import Dropsdown from "./Dropsdown";
import "./Header.css"
function Header() {
  const hide="hidden";
  const OpenDropDown=()=>{

  }
  return (
    <div className=" bg-black px-[5vw] py-[3vh]"  >
      <div className="navTop flex justify-between">
        <Image src={logo} className="w-[25vh] " alt="" />
        <div className="search flex">
          <input type="text" placeholder="Search..." className="searchBar placeholder:text-xl placeholder:text-black pl-[2vw] text-xl pr-[17vw] h-[5vh] my-auto rounded-2xl "/>
          <Image src={searchIcon} className="searchIcon w-[3vh] h-[3vh] my-auto ml-[-6vh] " alt=""/>
        </div>
        <div className="user flex">
                <div className="fav w-[5.5vh] hover:bg-red-500  hover:cursor-pointer p-[1.2vh] mr-[2vw] bg-white my-auto rounded-full " ><Image src={fav} alt=""/></div>
                <div className="cart w-[5.5vh] p-[1.2vh] hover:bg-red-500  hover:cursor-pointer mr-[2vw] bg-white my-auto rounded-full "><Image src={cart} alt=""/></div>
                <div className="profile w-[5.5vh] p-[1.2vh] hover:bg-red-500  hover:cursor-pointer bg-white my-auto rounded-full "><Image src={profile} alt=""/></div>
            </div>
      </div>
      <div className="text-white font-mono font-semibold flex gap-[4vw] my-[2vh] text-3xl  justify-center"> 
        <h2>Laptops </h2>
        <h2>Monitors</h2>
        <h2>Graphic Cards</h2>
        <h2>Processores</h2>
        <h2>Keyboards</h2>
        
      </div>
      <div className="d1 absolute left-[15vw]  ">
        <Dropsdown category="Laptop" className=" absolute right-[10vw]" />
      </div>
      <div className="absolute left-[25vw] hidden">
        <Dropsdown category="Laptop" className=" absolute right-[10vw]" />
      </div>
      <div className="absolute left-[38vw] hidden">
        <Dropsdown category="Laptop" className=" absolute right-[10vw]" />
      </div>
      <div className="absolute right-[29vw] hidden">
        <Dropsdown category="Laptop" className=" absolute right-[10vw]" />
      </div>
      <div className="absolute right-[17vw] hidden">
        <Dropsdown category="Laptop" className=" absolute right-[10vw]" />
      </div>
        

      
      
    </div>
  );
}

export default Header;
