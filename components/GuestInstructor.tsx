import Image from "next/image";
import React from "react";

type HostProfileProps = {
  imageSrc: string;
  username: string;
  fullName: string;
  description: string;
};

export const GuestProfile: React.FC<HostProfileProps> = ({
  imageSrc,
  username,
  fullName,
  description,
}) => {
  const formattedDescription = description.split("\n").map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));

  return (
    <>
      <div className="flex flex-col  ">
        <Image
          src={imageSrc}
          alt={fullName}
          height={323}
          width={323}
          className="aspect-square lg:h-[323px] lg:w-[323px]"
        />
        <div className="font-medium lg:text-[20px] max-md:text-[10px] lg:leading-[25.2px] max-md:leading-[12.5px] text-darkgray items-start flex">
          {username}
        </div>
        <div className="text-black font-semibold lg:text-[28px] max-md:text-[14px] max-md:leading-[17px] lg:leading-[35.28px]">
          {fullName}
        </div>
        <div className="font-normal lg:text-[24px] max-md:text-[12px] lg:leading-[48px] max-md:leading-[24px]">
          {formattedDescription}
        </div>
      </div>
    </>
  );
};
