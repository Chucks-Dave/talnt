import React from "react";

type props = {
  name: string;
};

const CampHeader = ({ name }: props) => {
  return (
    <>
      <h5 className="font-bold lg:text-[28px] max-md:text-[14px] lg:leading-[35.28px] max-md:leading-[17px] text-black1 text-center">
        {name}
      </h5>
    </>
  );
};

export default CampHeader;
