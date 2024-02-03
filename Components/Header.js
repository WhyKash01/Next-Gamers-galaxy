"use client";
import React from "react";
import Image from "next/image";
import logo from "../public/png/gamers-galaxy-high-resolution-logo-color-on-transparent-background (1).png";
import searchIcon from "../public/png/magnifiying-glass.png";
import fav from "../public/png/heart (1).png";
import cart from "../public/png/shopping-cart (1).png";
import Drop from "./Drop";
import Drop1 from "./Drop1";
import Drop2 from "./Drop2";
import Drop3 from "./Drop3";
import Drop4 from "./Drop4";
import profile from "../public/png/user.png";
import "./Header.css";
import Link from "next/link";
import { RecoilRoot } from "recoil";
import Hamburger from "./Hamburger";
function Header() {
  const hide = "hidden";
  return (
    <RecoilRoot>
      <div className=" bg-black px-[5vw] sm:py-[3vh] py-3">
        <div className="navTop flex justify-between">
          <div className="flex items-center gap-4">
            <div className="sm:hidden">
              <Hamburger />
            </div>
            <Link href={"/"}>
              <Image
                src={logo}
                className="sm:w-[25vh] sm:h-auto h-6 w-auto "
                alt="a"
              />
            </Link>
          </div>
          <div className="search hidden sm:flex">
            <input
              type="text"
              placeholder="Search..."
              className="searchBar placeholder:text-lg placeholder:text-black pl-[2vw] text-lg pr-[17vw] h-[5vh] py-5 my-auto rounded-xl "
            />
            <Image
              src={searchIcon}
              className="searchIcon w-[3vh] h-[3vh]  my-auto ml-[-6vh] "
              alt="Image"
            />
          </div>
          <div className="user flex my-auto">
            <Link href="AddToCart">
              <div className="cart sm:w-[5.5vh] w-6 p-1 sm:p-[1.2vh] hover:bg-red-500  hover:cursor-pointer  bg-white  rounded-full mr-[2vw] ">
                <Image src={cart} alt="Image" />
              </div>
            </Link>
            <Link href={"/"}>
              <div className="profile sm:w-[5.5vh] w-6 p-1 sm:p-[1.2vh] hover:bg-red-500  hover:cursor-pointer  bg-white  rounded-full mr-[2vw]">
                <Image src={profile} alt="Image" />
              </div>
            </Link>
            <Link href={"SignIn"}>
              <div className="hover:bg-red-500 flex items-center h-6 sm:h-[5.5vh] text-black hover:cursor-pointer sm:px-5 px-1 sm:text-lg text-xs py-1 font-semibold bg-white  sm:rounded-md rounded-sm">
                Login
              </div>
            </Link>
          </div>
        </div>
        <div className="text-white mt-2 font-semibold hidden sm:flex gap-[5vw]  text-xl  justify-center">
          <Drop title={"Laptop"} />
          <Drop1 title={"Monitor"} />
          <Drop2 title={"GPU"} />
          <Drop3 title={"Processor"} />
          <Drop4 title={"Keyboard"} />
        </div>
      </div>
    </RecoilRoot>
  );
}

export default Header;
