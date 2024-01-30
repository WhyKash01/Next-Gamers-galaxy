import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/Components/ui/sheet";
  import React from "react";
  import Link from "next/link";
  
  const Hamburger = () => {
    return (
      <div>
        <Sheet>
          <SheetTrigger  className="flex flex-col gap-1">
            <div className="bg-red-700 h-[3px] rounded-md w-5"></div>
            <div className="bg-red-700 h-[3px] rounded-md w-5"></div>
            <div className="bg-red-700 h-[3px] rounded-md w-5"></div>
          </SheetTrigger>
          <SheetContent side={"left"} className="bg-zinc-900/90 shadow-l shadow-zinc-700 z-[70] border-l-2 border-zinc-700 ">
            <SheetHeader className="mt-10">
              <Link href="#HeroPage">
                <SheetClose>
                  <button type="submit" className=" text-[#48C9B0] text-2xl">Home</button>
                </SheetClose>
              </Link><br />
              <Link href="#Skill">
                <SheetClose>
                  <button className="text-[#48C9B0] text-2xl" type="submit">Skill</button>
                </SheetClose>
              </Link>
              <br />
              <Link href="#Project">
                <SheetClose>
                  <button className="text-[#48C9B0] text-2xl" type="submit">Project</button>
                </SheetClose>
              </Link>
              <br />
              <Link href="#Contact">
                <SheetClose>
                  <button className="text-[#48C9B0] text-2xl" type="submit">Contact</button>
                </SheetClose>
              </Link>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    );
  };
  
  export default Hamburger;
  