import React from "react";
type props = {
  text?: string;
  description: string;
};

const CampRequirements = ({ text, description }: props) => {
  const formattedDescription = description.split("\n").map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));
  return (
    <div className="w-full border-gray border  rounded-[12px] px-3 py-3 flex flex-col gap-3">
      <div className="size-[70px] bg-gray4 z-50 font-bold lg:text-[24px] max-md:text-[12px] lg:leading-[46px] max-md:leading-[23px] text-blue  rounded-full">
        {text}
      </div>
      <p className="font-normal lg:text-[24px] max-md:text-[12px] lg:leading-[46px] max-md:leading-[23px] text-darkgray1">
        {formattedDescription}
      </p>
    </div>
  );
};

export default CampRequirements;
