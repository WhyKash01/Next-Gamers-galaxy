import React from "react";
import Image from "next/image";
import logo from "../public/png/gamers-galaxy-high-resolution-logo-color-on-transparent-background (1).png"
import searchIcon from "../public/png/magnifiying-glass.png";
import fav from "../public/png/heart (1).png"
import cart from "../public/png/shopping-cart (1).png"
import profile from "../public/png/user.png"
function Header() {
  
  return (
    <div className=" bg-black px-[5vw] py-[3vh]"  >
      <div className="navTop flex justify-between">
        <Image src={logo} className="w-[25vh] " alt="" />
        <div className="search flex">
          <input type="text" placeholder="Search..." className="searchBar placeholder:text-xl placeholder:text-black pl-[3vw] pr-[17vw] h-[6vh] my-auto rounded-3xl "/>
          <Image src={searchIcon} className="searchIcon w-[4vh] h-[4vh] my-auto ml-[-6vh] " alt=""/>
        </div>
        <div className="user flex">
                <div className="fav w-[6vh] p-[1.2vh] mr-[2vw] bg-white my-auto rounded-full " ><Image src={fav} alt=""/></div>
                <div className="cart w-[6vh] p-[1.2vh] mr-[2vw] bg-white my-auto rounded-full "><Image src={cart} alt=""/></div>
                <div className="profile w-[6vh] p-[1.2vh]  bg-white my-auto rounded-full "><Image src={profile} alt=""/></div>
            </div>
      </div>
      <div className="navBottom text-white flex mt-[2vh] justify-between mx-[20vw] text-3xl ">
            <h3 className="menuItem">Laptop <i className="fas fa-caret-down"></i>
                <div className="dropDown hidden">
                    <ul>
                        <li>
                            <h3>Latest Products</h3>
                        </li>
                        <li>
                            <h4>Asus Tuf</h4>
                        </li>
                        <li>
                            <h4>Dell G15</h4>
                        </li>
                        <li>
                            <h4>Acer Nitro</h4>
                        </li>
                        <li>
                            <h4>Msi sword</h4>
                        </li>
                        <li>
                            <h4>HP Victus</h4>
                        </li>
                    </ul>
                </div>
            </h3>
            <h3 className="menuItem">Graphic Card <i className="fas fa-caret-down"></i>
                <div className="dropDown1 hidden">
                    <ul>
                        <li>
                            <h3>Latest Products</h3>
                        </li>
                        <li>
                            <h4>GTX 1650</h4>
                        </li>
                        <li>
                            <h4>RTX 3050</h4>
                        </li>
                        <li>
                            <h4>RTX 3090</h4>
                        </li>
                        <li>
                            <h4>RTX 4050</h4>
                        </li>
                        <li>
                            <h4>RTX 4090</h4>
                        </li>
                    </ul>
                </div>
            </h3>
            <h3 className="menuItem">Keyboard <i className="fas fa-caret-down"></i>
                <div className="dropDown2 hidden">
                    <ul>
                        <li>
                            <h3>Latest Products</h3>
                        </li>
                        <li>
                            <h4>Asus Tuf</h4>
                        </li>
                        <li>
                            <h4>Dell G15</h4>
                        </li>
                        <li>
                            <h4>Acer Nitro</h4>
                        </li>
                        <li>
                            <h4>Msi sword</h4>
                        </li>
                        <li>
                            <h4>HP Victus</h4>
                        </li>
                    </ul>
                </div>
            </h3>
            <h3 className="menuItem">Monitor <i className="fas fa-caret-down"></i>
                <div className="dropDown3 hidden">
                    <ul>
                        <li>
                            <h3>Latest Products</h3>
                        </li>
                        <li>
                            <h4>Asus Tuf</h4>
                        </li>
                        <li>
                            <h4>Dell G15</h4>
                        </li>
                        <li>
                            <h4>Acer Nitro</h4>
                        </li>
                        <li>
                            <h4>Msi sword</h4>
                        </li>
                        <li>
                            <h4>HP Victus</h4>
                        </li>
                    </ul>
                </div>
            </h3>
            <h3 className="menuItem">Processor <i className="fas fa-caret-down"></i>
                <div className="dropDown4 hidden">
                    <ul>
                        <li>
                            <h3>Latest Products</h3>
                        </li>
                        <li>
                            <h4>Asus Tuf</h4>
                        </li>
                        <li>
                            <h4>Dell G15</h4>
                        </li>
                        <li>
                            <h4>Acer Nitro</h4>
                        </li>
                        <li>
                            <h4>Msi sword</h4>
                        </li>
                        <li>
                            <h4>HP Victus</h4>
                        </li>
                    </ul>
                </div>
            </h3>

        </div>
    </div>
  );
}

export default Header;
