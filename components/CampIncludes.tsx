import React from "react";
import CheckIcon from "../icons/CheckIcon";

type props = {
  text: string;
};

const CampIncludes = ({ text }: props) => {
  return (
    <div className="flex flex-row  gap-3">
      <CheckIcon />{" "}
      <p className="font-normal lg:text-[24px] lg:leading-[52px] max-md:text-[12px] max-md:leading-[26px] text-black">
        {text}
      </p>
    </div>
  );
};

export default CampIncludes;
