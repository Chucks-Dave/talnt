"use client";
import React, { useState, useEffect } from "react";
import BackArrow from "../../../icons/BackArrow";
import BootcampIcon from "../../../icons/BoootCamp";
import ClockIcon from "../../../icons/ClockIcon";
import GroupIcon from "../../../icons/GroupIcon";
import HeartIcon from "../../../icons/HeartIcon";
import Illustration from "../../../icons/Illustration";
import Image from "next/image";
import RatingIcon from "../../../icons/RatingIcon";
import HeadingText from "../../../components/HeadingText";
import { GuestProfile } from "../../../components/GuestInstructor";
import Dropdown from "../../../components/BootCamp";
import FlutterIcon from "../../../icons/FlutterIcon";
import CampHeader from "../../../components/CampHeader";
import ClassSchedule from "../../../components/ClassSchedule";
import CampRequirements from "../../../components/CampRequirements";
import CampIncludes from "../../../components/CampIncludes";
import CertificateIcon from "../../../components/CertificateIcon";
import CourseDetails from "../../../components/CourseDetails";
import Navbar from "../../../components/Navbar";

const BootCamp = () => {
  const [currentTime, setCurrentTime] = useState<Date | null>(null);
  useEffect(() => {
    setCurrentTime(new Date());

    const timerId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);
  const formatTime = (date: Date) => {
    const days = Math.floor(date.getTime() / (10000000 * 60 * 60 * 24));
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    return { days, hours, minutes, seconds };
  };

  if (!currentTime) return null;

  const { days, hours, minutes, seconds } = formatTime(currentTime);
  const progress = 70;

  return (
    <div className="flex flex-col gap-4">
      <Navbar />
      <div className="px-12  py-8">
        <BackArrow />

        <div className="py-5  flex max-md:flex-col lg:items-center">
          <div className="w-1/2 flex flex-col gap-4">
            <h1 className="font-extrabold text-black2 lg:text-[48px] max-md:text-[24px] lg:leading-[76px] max-md:leading-[38px]">
              Foundation of Android
              <br /> Development
            </h1>
            <div className="font-normal lg:text-[24px] max-md:text-[12px] lg:leading-[42px] max-md:leading-[21px] text-black">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <br /> Semper quam pulvinar interdum porttitor elit quis
              <br /> elementum duis curabitur.
            </div>
            <div className="lg:grid flex max-md:flex-col lg:grid-cols-3 max-md:gap-4">
              <LabelProps Icon={BootcampIcon} label="Bootcamp" />
              <LabelProps Icon={ClockIcon} label="4 Weeks" />
              <LabelProps Icon={GroupIcon} label="3rd December" />
            </div>
            <p className="font-extrabold lg:text-[36px] max-md:text-[18px] lg:leading-[45.36px] leading-[22.68px] text-black2">
              N30,000
            </p>
            <div className="flex flex-row items-center gap-3 py-3">
              <button className="lg:w-[272px] max-md:w-full bg-bluelight h-[60px] rounded-[35px]">
                <span className="flex flex-row items-center gap-3 font-bold lg:text-[20px] text-[10px] leading-[12px] lg:leading-[25.2px] justify-center text-white ">
                  Enroll Now
                </span>
              </button>
              <HeartIcon />
            </div>
          </div>
          <div className="w-1/2 pt-2 max-md:hidden">
            <Illustration />
          </div>
        </div>
      </div>
      <div className="w-full bg-limered py-8 rounded-br-[20px] items-center rounded-bl-[20px] rounded-tr-[20px] lg:px-12 px-6 flex max-md:gap-2 lg:justify-between rounded-tl-[20px]">
        <h2 className="font-semibold lg:text-[24px] max-md:text-[12px] max-md:leading-[15px] lg:leading-[30.24px] text-lightred">
          Registration Deadline:
        </h2>

        <div className="flex flex-col">
          <span className="font-extrabold lg:text-[40px] max-md:text-[20px] lg:leading-[50.4px] max-md:leading-[25px] text-center">
            {days}
          </span>
          <span className="font-normal lg:text-[20px] lg:leading-[25.2px] max-md:text-[10px] max-md:leading-[12.5px] text-center">
            Days
          </span>
        </div>

        <div className="flex flex-col">
          <span className="font-extrabold max-md:text-[20px] lg:text-[40px] max-md:leading-[25px]  lg:leading-[50.4px] text-center">
            {hours}
          </span>
          <span className="font-normal lg:text-[20px] lg:leading-[25.2px] max-md:text-[10px] max-md:leading-[12.5px] text-center">
            Hours
          </span>
        </div>

        <div className="flex flex-col">
          <span className="font-extrabold lg:text-[40px] max-md:leading-[25px] max-md:text-[20px] lg:leading-[50.4px] text-center">
            {minutes}
          </span>
          <span className="font-normal lg:text-[20px] lg:leading-[25.2px] max-md:text-[10px] max-md:leading-[12.5px] text-center">
            Minutes
          </span>
        </div>

        <div className="flex flex-col">
          <span className="font-extrabold lg:text-[40px] max-md:leading-[25px] lg:leading-[50.4px] max-md:text-[20px] text-center">
            {seconds}
          </span>
          <span className="font-normal lg:text-[20px] lg:leading-[25.2px] max-md:text-[10px] max-md:leading-[12.5px] text-center">
            Seconds
          </span>
        </div>
        <button className="lg:w-[151px] max-md:w-full bg-white h-[60px] rounded-[35px]">
          <div className="flex flex-row items-center gap-3 font-bold lg:text-[20px] max-md:text-[10px] lg:leading-[17.64px] justify-center text-black1 ">
            Enroll Now
          </div>
        </button>
      </div>

      <section className="flex justify-center items-center flex-col px-12 gap-4">
        <h3 className="font-extrabold lg:text-[32px] lg:leading-[40.32px] max-md:text-[16px] max-md:leading-[20px] text-center py-3">
          About this Bootcamp
        </h3>
        <div className="">
          <iframe
            src="https://www.youtube.com/embed/1FLYZdxsteo"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="lg:w-[999px] lg:h-[400.9px] max-md:w-[full] aspect-video "
          />
        </div>
        <div className="text-center font-normal lg:text-[28px] max-md:text-[14px] lg:leading-[70px] max-md:leading-[35px] text-black">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper quam
          pulvinar interdum
          <br /> porttitor elit quis elementum duis curabitur. Adipiscing ac ut
          eros, sed aenean justo lacinia
          <br /> ornare consectetur. Viverra vel ornare mauris donec aenean
          gravida aliquet vestibulum quam.
          <br /> Vitae ullamcorper dignissim auctor quis volutpat morbi arcu
          blandit massa. Adipiscing ac ut eros, sed aenean justo lacinia ornare
          consectetur. <br />
          <span className="font-semibold lg:text-[28px] max-md:text-[14px] leading-[70px]  max-md:leading-[35px] text-bluelight">
            {" "}
            See More
          </span>
        </div>
        <hr className="w-full bg-gray h-px border-gray border" />
      </section>
      <section className="px-12 flex flex-col gap-4">
        <HeadingText header="Host" />
        <HostProfile
          imageSrc="/Human.png"
          username="jessno1"
          fullName="Jessica Noah"
          bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper quam pulvinar interdum porttitor elit quis elementum duis curabitur."
          rating="4.6"
          reviews="330,256"
          transactions="8,315"
          //   customers="13K"
        />
        <div className="py-5">
          <HeadingText header="Co-Host" />
        </div>
        <HostProfile
          imageSrc="/Oche.png"
          username="jessno1"
          fullName="Jessica Noah"
          bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper quam pulvinar interdum porttitor elit quis elementum duis curabitur."
          rating="4.6"
          reviews="330,256"
          transactions="8,315"
        />
        <HostProfile
          imageSrc="/Arinze.png"
          username="jessno1"
          fullName="John Doe"
          bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper quam pulvinar interdum porttitor elit quis elementum duis curabitur."
          rating="4.6"
          reviews="330,256"
          transactions="8,315"
        />
      </section>
      <section className="px-12  ">
        <div className="py-5 flex-col gap-4 flex">
          <HeadingText header="Guest Instructor" />
          <div className="grid lg:grid-cols-4 max-md:grid-cols-2 max-md:gap-3">
            <GuestProfile
              imageSrc="/Girl.png"
              username="@jessno1"
              fullName="Jessica Noah"
              description={`Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. 
                Semper quam pulvinar.`}
            />
            <GuestProfile
              imageSrc="/Hot.png"
              username="@jessno1"
              fullName="Jessica Noah"
              description={`Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. 
                Semper quam pulvinar.`}
            />
            <GuestProfile
              imageSrc="/Chick.png"
              username="@jessno1"
              fullName="Jessica Noah"
              description={`Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. 
                Semper quam pulvinar.`}
            />
            <GuestProfile
              imageSrc="/Girl.png"
              username="@jessno1"
              fullName="Jessica Noah"
              description={`Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. 
                Semper quam pulvinar.`}
            />
          </div>
        </div>
        <hr className="w-full bg-gray h-px border-gray border" />
      </section>
      <section className="px-12  py-3 flex flex-col gap-4">
        <CampHeader name=" Bootcamp Content" />
        <Dropdown label="Section 1 - Introduction">
          <p className="font-medium text-[20px] leading-[25.2px]">
            What is Flutter ?
          </p>
        </Dropdown>
        <Dropdown label="Section 2 - The Basics">
          <p className="font-medium lg:text-[20px] max-md:text-[10px] max-md:leading-[12.5px] lg:leading-[25.2px]">
            How to Create flutter
          </p>
        </Dropdown>
        <Dropdown label="Section 3 - Intermediate">
          <p className="font-medium lg:text-[20px] max-md:text-[10px] max-md:leading-[12.5px] lg:leading-[25.2px]">
            Start With Flutter
          </p>
        </Dropdown>
        <Dropdown label="Section 4 - Advanced">
          <div className="flex flex-col gap-3">
            <div className="w-full bg-white border-gray border rounded-[12px] gap-4 px-4 py-2 flex flex-row items-center">
              <FlutterIcon />{" "}
              <p className="font-medium lg:text-[20px] max-md:text-[10px] max-md:leading-[12.5px] lg:leading-[25.2px]">
                Working with Flutter
              </p>
            </div>
            <div className="w-full bg-white border-gray border rounded-[12px] gap-4 px-4 py-2 flex flex-row items-center">
              <FlutterIcon />{" "}
              <p className="font-medium lg:text-[20px] max-md:text-[10px] max-md:leading-[12.5px] lg:leading-[25.2px]">
                Working with Flutter
              </p>
            </div>
          </div>
        </Dropdown>
        <hr className="w-full bg-gray h-px border-gray border" />
      </section>
      <section className="px-12  py-3 flex-col flex gap-4">
        <CampHeader name="Live Class Schedule" />
        <div className="grid lg:grid-cols-4 max-md:grid-cols-2 gap-4">
          <ClassSchedule
            label="Live Class"
            schedule="Every Tuesday"
            time="4:00PM - 6:00PM (WAT)"
          />
          <ClassSchedule
            label="Live Class"
            schedule="Every Tuesday"
            time="4:00PM - 6:00PM (WAT)"
          />
          <ClassSchedule
            label="Live Class"
            schedule="Every Tuesday"
            time="4:00PM - 6:00PM (WAT)"
          />
          <ClassSchedule
            label="Live Class"
            schedule="Every Tuesday"
            time="4:00PM - 6:00PM (WAT)"
          />
        </div>
        <hr className="w-full bg-gray h-px border-gray border" />
      </section>
      <section className="px-12  py-3 flex-col flex gap-4">
        <CampHeader name="Requirements for this Bootcamp" />
        <div className="grid lg:grid-cols-4 max-md:grid-cols-2 gap-4">
          <CampRequirements
            text="1"
            description={`Lorem ipsum dolor sit 
              amet, consectetur 
              adipiscing elit. `}
          />
          <CampRequirements
            text="2"
            description={`Lorem ipsum dolor sit 
              amet, consectetur 
              adipiscing elit. `}
          />
          <CampRequirements
            text="3"
            description={`Lorem ipsum dolor sit 
              amet, consectetur 
              adipiscing elit. `}
          />
          <CampRequirements
            text="4"
            description={`Lorem ipsum dolor sit 
              amet, consectetur 
              adipiscing elit. `}
          />
        </div>
        <hr className="w-full bg-gray h-px border-gray border" />
      </section>
      <section className="px-12  py-3 flex-col flex gap-4">
        <CampHeader name="This Bootcamp Includes" />
        <CampIncludes text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper quam pulvinar interdum porttitor elit quis elementum duis curabitur. Adipiscing ac ut eros, sed aenean justo lacinia ornare consectetur." />
        <CampIncludes text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper quam pulvinar interdum porttitor elit quis elementum duis curabitur. Adipiscing ac ut eros, sed aenean justo lacinia ornare consectetur." />
        <CampIncludes text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper quam pulvinar interdum porttitor elit quis elementum duis curabitur. Adipiscing ac ut eros, sed aenean justo lacinia ornare consectetur." />
        <CampIncludes text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper quam pulvinar interdum porttitor elit quis elementum duis curabitur. Adipiscing ac ut eros, sed aenean justo lacinia ornare consectetur." />
        <hr className="w-full bg-gray h-px border-gray border" />
      </section>
      <section className="px-12  py-3 flex-col flex max-md:hidden gap-4 justify-center items-center">
        <CampHeader name="You’ll Get A Certificate Of  Completion" />
        <CertificateIcon />
        <hr className="w-full bg-gray h-px border-gray border" />
      </section>
      <section className="px-12  py-3 flex-col flex gap-4 ">
        <CampHeader name="Frequently Asked Questions" />

        <Dropdown label="What is Android Development?">
          <p className="font-normal text-[20px] leading-[46px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper quam
            pulvinar interdum porttitor elit quis elementum duis curabitur.
            Adipiscing ac ut eros, sed aenean justo lacinia ornare consectetur.
            Viverra vel ornare mauris donec aenean gravida aliquet vestibulum
            quam. Vitae ullamcorper dignissim auctor quis volutpat morbi arcu
            blandit massa. Viverra vel ornare mauris donec aenean gravida
            aliquet vestibulum quam. Vitae ullamcorper dignissim auctor quis
            volutpat morbi arcu blandit massa.
          </p>
        </Dropdown>
        <Dropdown label="What is Android Development?">
          <p className="font-normal text-[20px] leading-[46px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper quam
            pulvinar interdum porttitor elit quis elementum duis curabitur.
            Adipiscing ac ut eros, sed aenean justo lacinia ornare consectetur.
            Viverra vel ornare mauris donec aenean gravida aliquet vestibulum
            quam. Vitae ullamcorper dignissim auctor quis volutpat morbi arcu
            blandit massa. Viverra vel ornare mauris donec aenean gravida
            aliquet vestibulum quam. Vitae ullamcorper dignissim auctor quis
            volutpat morbi arcu blandit massa.
          </p>
        </Dropdown>
        <Dropdown label="What is Android Development?">
          <p className="font-normal text-[20px] leading-[46px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper quam
            pulvinar interdum porttitor elit quis elementum duis curabitur.
            Adipiscing ac ut eros, sed aenean justo lacinia ornare consectetur.
            Viverra vel ornare mauris donec aenean gravida aliquet vestibulum
            quam. Vitae ullamcorper dignissim auctor quis volutpat morbi arcu
            blandit massa. Viverra vel ornare mauris donec aenean gravida
            aliquet vestibulum quam. Vitae ullamcorper dignissim auctor quis
            volutpat morbi arcu blandit massa.
          </p>
        </Dropdown>
        <Dropdown label="What is Android Development?">
          <p className="font-normal text-[20px] leading-[46px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper quam
            pulvinar interdum porttitor elit quis elementum duis curabitur.
            Adipiscing ac ut eros, sed aenean justo lacinia ornare consectetur.
            Viverra vel ornare mauris donec aenean gravida aliquet vestibulum
            quam. Vitae ullamcorper dignissim auctor quis volutpat morbi arcu
            blandit massa. Viverra vel ornare mauris donec aenean gravida
            aliquet vestibulum quam. Vitae ullamcorper dignissim auctor quis
            volutpat morbi arcu blandit massa.
          </p>
        </Dropdown>
        <hr className="w-full bg-gray h-px border-gray border" />
      </section>

      <section className="px-12  py-3 flex-col flex gap-4 ">
        <CampHeader name="Host Reviews" />
        <div className="lg:w-full bg-white max-md:hidden border-gray5 border rounded-[25px] drop-shadow-lg px-9 py-4 flex flex-row items-center gap-16">
          <div className="flex flex-col gap-2">
            <div className="flex flex-row items-center gap-3">
              <p className="font-semibold lg:text-[40px] max-md:text-[20px] max-md:leading-[25px] lg:leading-[50.4px] text-black1">
                4.5
              </p>
              <RatingIcon />
            </div>
            <p className="text-darkgray font-normal lg:text-[16px] max-md:text-[8px] max-md:leading-[10px] lg:leading-[20.16px]">
              80 Reviews
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex justify-between  items-center gap-5">
              <div> 5</div> <ProgressBar progress={progress} />
              <p>5</p>
            </div>
            <div className="flex justify-between  items-center gap-5">
              <div className="font-sans text-[16px] leading-[21.79px] text-darkgray">
                {" "}
                4
              </div>{" "}
              <ProgressBar progress={progress} />
              <p className="font-sans text-[16px] leading-[21.79px] text-darkgray">
                30
              </p>
            </div>
            <div className="flex justify-between  items-center gap-5">
              <div className="font-sans text-[16px] leading-[21.79px] text-darkgray">
                {" "}
                3
              </div>{" "}
              <ProgressBar progress={progress} />
              <p className="font-sans text-[16px] leading-[21.79px] text-darkgray">
                5
              </p>
            </div>
            <div className="flex justify-between  items-center gap-5">
              <div className="font-sans text-[16px] leading-[21.79px] text-darkgray">
                {" "}
                2
              </div>{" "}
              <ProgressBar progress={progress} />
              <p className="font-sans text-[16px] leading-[21.79px] text-darkgray">
                1
              </p>
            </div>
            <div className="flex justify-between  items-center gap-5">
              <div className="font-sans text-[16px] leading-[21.79px] text-darkgray">
                {" "}
                1
              </div>{" "}
              <ProgressBar progress={progress} />
              <p className="font-sans text-[16px] leading-[21.79px] text-darkgray">
                7
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <CourseDetails
            imageUrl="/header.png"
            instructorName="John David"
            courseTitle="Introduction to Android Development"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper quam pulvinar interdum porttitor elit quis elementum duis curabitur. Adipiscing ac ut eros, sed aenean justo lacinia ornare consectetur. Viverra vel ornare mauris donec aenean gravida aliquet vestibulum quam. Vitae ullamcorper dignissim auctor quis volutpat morbi arcu blandit massa. Viverra vel ornare mauris donec aenean gravida aliquet vestibulum quam. Vitae ullamcorper dignissim auctor quis volutpat morbi arcu blandit massa."
            date="28th March"
            time="10:10AM"
          />
          <CourseDetails
            imageUrl="/header.png"
            instructorName="John David"
            courseTitle="Introduction to Android Development"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper quam pulvinar interdum porttitor elit quis elementum duis curabitur. Adipiscing ac ut eros, sed aenean justo lacinia ornare consectetur. Viverra vel ornare mauris donec aenean gravida aliquet vestibulum quam. Vitae ullamcorper dignissim auctor quis volutpat morbi arcu blandit massa. Viverra vel ornare mauris donec aenean gravida aliquet vestibulum quam. Vitae ullamcorper dignissim auctor quis volutpat morbi arcu blandit massa."
            date="28th March"
            time="10:10AM"
          />
          <CourseDetails
            imageUrl="/header.png"
            instructorName="John David"
            courseTitle="Introduction to Android Development"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper quam pulvinar interdum porttitor elit quis elementum duis curabitur. Adipiscing ac ut eros, sed aenean justo lacinia ornare consectetur. Viverra vel ornare mauris donec aenean gravida aliquet vestibulum quam. Vitae ullamcorper dignissim auctor quis volutpat morbi arcu blandit massa. Viverra vel ornare mauris donec aenean gravida aliquet vestibulum quam. Vitae ullamcorper dignissim auctor quis volutpat morbi arcu blandit massa."
            date="28th March"
            time="10:10AM"
          />
        </div>
      </section>
    </div>
  );
};

export default BootCamp;

type props = {
  Icon: React.ElementType;
  label: string;
};

const LabelProps = ({ Icon, label }: props) => {
  return (
    <div className="flex flex-row items-center gap-4">
      <Icon />
      <div className="font-normal lg:text-[20px] max-md:text-[10px] max-md:leading-[12px] lg:leading-[24px] text-black1">
        {label}
      </div>
    </div>
  );
};

type prop = {
  name: string;
};

const SubText = ({ name }: prop) => {
  return <div className="font-bold text-[20px] leading-[25.2px]">{name}</div>;
};

type proptext = {
  label: string;
};

const SubNo = ({ label }: proptext) => {
  return (
    <div className="font-normal text-[14px] leading-[17.64px] text-black1">
      {label}
    </div>
  );
};

type HostProfileProps = {
  imageSrc: string;
  username: string;
  fullName: string;
  bio: string;
  rating: string;
  reviews: string;
  transactions: string;
};

const HostProfile: React.FC<HostProfileProps> = ({
  imageSrc,
  username,
  fullName,
  bio,
  rating,
  reviews,
  transactions,
}) => {
  return (
    <div>
      <div className="flex lg:flex-row max-md:flex-col items-center lg:gap-4">
        <Image
          src={imageSrc}
          alt={fullName}
          height={400}
          width={400}
          className="aspect-square lg:h-[400px] lg:w-[400px]"
        />
        <div className="flex flex-col lg:gap-7 max-md:gap-2">
          <div className="font-medium lg:text-[24px] max-md:text-[12px] max-md:py-2 lg:leading-[30.24px] max-md:leading-[15px] text-darkgray">
            @{username}
          </div>
          <div className="lg:text-[32px] max-md:text-[16px] font-semibold lg:leading-[40.32px] max-md:leading-[20px] text-black">
            {fullName}
          </div>
          <div className="lg:text-[24px] lg:leading-[48px] max-md:text-[12px] max-md:leading-[24px] text-black">
            {bio}
          </div>
          <div className="flex flex-col lg:gap-4 max-md:gap-2">
            <div className="grid grid-cols-3">
              <div className="flex flex-row items-center gap-2">
                <SubText name={rating} />
                <RatingIcon />
              </div>
              <SubText name={reviews} />
              <SubText name={transactions} />
            </div>
            <div className="grid grid-cols-3">
              <SubNo label="13K Reviews" />
              <SubNo label="Transactions" />
              <SubNo label="Customers" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

type ProgressBarProps = {
  progress: number;
};

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <div className="lg:w-[900.22px]  bg-gray6 h-[8px] border-gray6 rounded-[8px] border relative">
      <div className="flex justify-between items-center gap-4">
        <div
          className="bg-yellow-500 h-[8px] rounded-[8px]"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};
