"use client";

import { useEffect, useState } from "react";
import Arrow from "../../icons/Arrow";
import MailIcons from "../../icons/MailIcons";
import TalntsIcon from "../../icons/TalntsIcon";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const Images = [
    {
      bgImage: "url('/images/image 4.png')",
    },
    {
      bgImage: "url('/images/Slide.png')",
    },
    {
      bgImage: "url('/images/image 5.png')",
    },
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const cycleImages = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % Images.length);
    }, 3000);

    return () => clearInterval(cycleImages);
  });
  return (
    <div className="flex overflow-y-hidden max-md:overflow-hidden">
      <div
        className="w-1/2  bg-cover inset-0 -z-10 h-screen max-md:hidden "
        style={{ backgroundImage: Images[index].bgImage }}
      >
        <AnimatePresence>
          <motion.div
            key={Images[index].bgImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.0 }}
            className=""
            // style={{ backgroundImage: `url(${Images[index]})` }}
          />
        </AnimatePresence>
      </div>
      <div className="py-3 px-12">
        <TalntsIcon />
        <div className="flex flex-col lg:py-3 gap-8">
          <h1 className="text-[32px] leading-[40.32px] font-bold text-black1">
            Register
          </h1>
          <p className="font-normal text-[18px] leading-[30px]">
            Enter your email address below to continue
          </p>
          <CustomInput
            label="Email Address"
            placeholder="example@example.com"
          />
        </div>

        <div className="lg:pt-14 max-md:pt-10 flex flex-col gap-8">
          <Link
            href="/bootcamp"
            className="w-[200px] bg-bluelight h-[60px] rounded-[35px]"
          >
            <span className="flex flex-row items-center gap-3 font-bold text-[14px] leading-[17.64px] justify-center text-white ">
              Continue <Arrow />
            </span>
          </Link>
          <div className="flex flex-col gap-4">
            <p className="text-[16px] font-normal leading-[30px] text-black ">
              Already have an account?{" "}
              <span className="text-bluelight font-extrabold leading-[30px] text-[16px]">
                Login
              </span>
            </p>
            <div className="flex items-center gap-3">
              <div className="w-full border-gray border-2 h-px" />{" "}
              <p className="font-medium text-[16px] leading-[30px] text-black2">
                OR
              </p>{" "}
              <div className="w-full border-gray border-2 h-px" />
            </div>
            <button className="w-full bg-gray2 rounded-[35px] h-[70px] text-black font-medium text-[16px] leading-[30px]">
              Continue with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

type props = {
  placeholder: string;
  label: string;
  type?: string;
  value?: string | number;
  // onChange?: any;
};

export const CustomInput = ({ placeholder, label, type, value }: props) => {
  return (
    <>
      <div className="flex flex-col gap-2">
        <label className="text-[16px] font-semibold text-black leading-[30px]">
          {label}
        </label>
        <input
          className="lg:w-[550px] max-md:min-w-full rounded-[35px] px-5 py-4 border-gray border-2 focus:outline-none p-5"
          placeholder={placeholder}
          value={value}
          type={type}
          // onChange={onChange}
        />
        <div className="relative bottom-3">
          <div className="absolute bottom-4 right-3">
            <MailIcons />
          </div>
        </div>
      </div>
    </>
  );
};
