import React from "react";
import Image from "next/image";
import logo from "../public/png/gamers-galaxy-high-resolution-logo-color-on-transparent-background (1).png"
import searchIcon from "../public/png/magnifiying-glass.png";
import fav from "../public/png/heart (1).png"
import cart from "../public/png/shopping-cart (1).png"
import Drop from "./Drop"
import profile from "../public/png/user.png"
import "./Header.css"
import Link from "next/link";
function Header() {
  const hide="hidden";

  const displayDD = ()=>{
  }
  return (
    <div className=" bg-black px-[5vw] py-[3vh]"  >
      <div className="navTop flex justify-between">
        <Link href={'/'}>
        <Image src={logo} className="w-[25vh] " alt="" />
        </Link>
        
        <div className="search flex">
          <input type="text" placeholder="Search..." className="searchBar placeholder:text-lg placeholder:text-black pl-[2vw] text-lg pr-[17vw] h-[5vh] py-5 my-auto rounded-xl "/>
          <Image src={searchIcon} className="searchIcon w-[3vh] h-[3vh] my-auto ml-[-6vh] " alt=""/>
        </div>
        <div className="user flex my-auto">
                <Link href={'/'}>
                <div className="fav w-[5.5vh] hover:bg-red-500  hover:cursor-pointer p-[1.2vh] mr-[2vw] bg-white  rounded-full " ><Image src={fav} alt=""/></div>
                </Link>
                <Link href="AddToCart">
                  <div className="cart w-[5.5vh] p-[1.2vh] hover:bg-red-500  hover:cursor-pointer mr-[2vw] bg-white  rounded-full "><Image src={cart} alt=""/></div>
                </Link>
                <Link href={'/'}>
                  <div className="profile w-[5.5vh] p-[1.2vh] hover:bg-red-500  hover:cursor-pointer bg-white  rounded-full "><Image src={profile} alt=""/></div>
                </Link>            
            </div>
      </div>
      <div className="text-white font-semibold flex gap-[5vw]  text-xl  justify-center"> 
        <Drop title={"Laptops"}/>
        <Drop title={"Monitors"}/>
        <Drop title={"Graphic Cards"}/>
        <Drop title={"Processores"}/>
        <Drop title={"Keyboards"}/>
      </div>
      

  
        

      
      
    </div>
  );
}

export default Header;

