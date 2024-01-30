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
function Header() {
  const hide = "hidden";
  return (
    <div className=" bg-black px-[5vw] py-[3vh]">
      <div className="navTop flex justify-between">
        <Link href={"/"}>
          <Image src={logo} className="w-[25vh] " alt="a" />
        </Link>

        <div className="search flex">
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
            <div className="cart w-[5.5vh] p-[1.2vh] hover:bg-red-500  hover:cursor-pointer  bg-white  rounded-full mr-[2vw] ">
              <Image  src={cart} alt="Image" />
            </div>
          </Link>
          <Link href={"/"}>
            <div className="profile w-[5.5vh] p-[1.2vh] hover:bg-red-500  hover:cursor-pointer mr-[2vw] bg-white  rounded-full ">
              <Image src={profile} alt="Image" />
            </div>
          </Link>
          <Link href={"SignIn"}>
            <div className="hover:bg-red-500 flex items-center h-[5.5vh] text-black hover:cursor-pointer px-5 text-lg py-1 font-semibold bg-white  rounded-md ">
              Login
            </div>
          </Link>
        </div>
      </div>
      <div className="text-white mt-2 font-semibold flex gap-[5vw]  text-xl  justify-center">
        <Drop title={"Laptop"}  />
        <Drop1 title={"Monitor"} />
        <Drop2 title={"GPU"} />
        <Drop3 title={"Processor"} />
        <Drop4 title={"Keyboard"} />
      </div>
    </div>
  );
}

export default Header;
