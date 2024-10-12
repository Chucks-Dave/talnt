import React, { useState } from "react";
import SearchIcon from "../icons/SearchIcon";
import Link from "next/link";
import DropIcon from "../icons/DropIcon";
import SurfaceIcon from "../icons/SurfaceIcon";
import CancelIcon from "../icons/CancelIcon";
import Hamburger from "../icons/Hamburger";

const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };
  return (
    <>
      <nav className="w-full justify-between flex drop-shadow-xl  bg-white py-4 rounded-br-[12px] rounded-bl-[12px] px-5 relative">
        <span className="flex justify-between items-center bg-white drop-shadow-xl w-[176px]  rounded-[30px] border-gray border px-3 py-2">
          <div className="flex flex-row items-center gap-3">
            <SurfaceIcon />
            <div className="font-semibold text-[16px] leading-[20.16px] text-black">
              App
            </div>
          </div>
          <DropIcon />
        </span>
        <div className="relative">
          <input
            placeholder="Android"
            className="lg:w-[550px] max-md:hidden rounded-[35px] px-5 h-[60px] py-4 border-gray border-2 focus:outline-none pl-8"
          />
          <div className="">
            <div className="absolute bottom-5 left-3 max-md:hidden">
              <SearchIcon />
            </div>
          </div>
          <div className="lg:w-[107px] max-md:hidden absolute -right-1 bottom-[3px] top-[0.5px] rounded-r-[35px] border-gray border  bg-gray3 h-[59px] flex flex-row gap-3  items-center justify-center">
            <div className="font-normal text-[14px] leading-[17.64px] text-black1">
              All
            </div>
            <DropIcon />
          </div>
        </div>

        <div className="flex flex-row items-center gap-3 max-md:hidden">
          <Link
            href="#"
            className="text-bluelight font-extrabold text-[14px] leading-[17.64px]"
          >
            Get Started
          </Link>
          <button className="w-[151px] bg-bluelight h-[60px] rounded-[35px]">
            <span className="flex flex-row items-center gap-3 font-bold text-[14px] leading-[17.64px] justify-center text-white ">
              Login
            </span>
          </button>
        </div>

        <div
          className="lg:hidden absolute right-3 top-0 bottom-0 flex items-center"
          onClick={handleClick}
        >
          {active ? <CancelIcon /> : <Hamburger />}
        </div>
      </nav>
      {active && (
        <div className="lg:hidden w-full bg-black py-2 absolute">kaka</div>
      )}
    </>
  );
};

export default Navbar;
