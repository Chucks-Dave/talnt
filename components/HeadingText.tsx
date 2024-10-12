import React from "react";

type props = {
  header: string;
};

const HeadingText = ({ header }: props) => {
  return (
    <>
      <h4 className="lg:text-[32px] lg:leading-[40.36px] max-md:text-[18px] max-md:leading-[20px] font-bold text-center py-5">
        {header}
      </h4>
    </>
  );
};

export default HeadingText;
