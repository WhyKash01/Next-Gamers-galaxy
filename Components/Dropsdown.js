import React from "react";

const Dropsdown = () => {
  return (
    <div className=" text-white border text-2xl py-10 text-center font-mono bg-zinc-900 relative z-[1000] rounded-md w-[20vw]">
      <div className="">
        <h3 className=" text-3xl mb-5 font-semibold ">Latest Products</h3>
        <div className=" flex  flex-col gap-3">
        <h4 className="hover:cursor-pointer hover:text-red-500">Asus Tuf</h4>
        <h4 className="hover:cursor-pointer hover:text-red-500">Dell G15</h4>
        <h4 className="hover:cursor-pointer hover:text-red-500">Acer Nitro</h4>
        <h4 className="hover:cursor-pointer hover:text-red-500">Msi sword</h4>
        <h4 className="hover:cursor-pointer hover:text-red-500">HP Victus</h4>
        </div>
      </div>
      </div>
  );
};

export default Dropsdown;
