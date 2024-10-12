import React from "react";
import Image from "next/image"; // If you're using Next.js, otherwise replace it with 'img'
import ArrowU from "../icons/ArrowU";
import BigStar from "../icons/BigStar";
import WhiteStar from "../icons/WhiteStar";

type CourseDetailsProps = {
  imageUrl: string;
  instructorName: string;
  courseTitle: string;
  description: string;
  date: string;
  time: string;
};

const CourseDetails: React.FC<CourseDetailsProps> = ({
  imageUrl,
  instructorName,
  courseTitle,
  description,
  date,
  time,
}) => {
  return (
    <div className="flex flex-col gap-2">
      {/* Instructor Info */}
      <div className="flex flex-row items-center gap-4">
        <Image src={imageUrl} alt={instructorName} height={60} width={60} />
        <p className="font-semibold lg:text-[24px] max-md:text-[12px] max-md:leading-[15px] text-black lg:leading-[30.24px]">
          {instructorName}
        </p>
      </div>

      <div className="flex flex-row items-center">
        <ArrowU />
        <p className="font-semibold lg:text-[24px] max-md:text-[12px] text-black max-md:leading-[15px] lg:leading-[30.24px]">
          {courseTitle}
        </p>
      </div>

      <div className="flex flex-row items-center">
        {[...Array(4)].map((_, index) => (
          <BigStar key={index} />
        ))}

        <WhiteStar />
      </div>

      <p className="font-normal lg:text-[24px] lg:leading-[48px] max-md:text-[12px] max-md:leading-[24px] text-black">
        {description}
      </p>

      <div className="flex flex-row items-center gap-4">
        <p className="font-normal lg:text-[20px] max-md:text-[10px] lg:leading-[25.2px] max-md:leading-[12px] text-darkgray">
          {date}
        </p>
        <p className="font-normal lg:text-[20px] max-md:text-[10px] max-md:leading-[12px]  leading-[25.2px] text-darkgray">
          {time}
        </p>
      </div>
    </div>
  );
};

export default CourseDetails;
