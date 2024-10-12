import React from "react";
import CalendarIcon from "../icons/CalendarIcon";
import DateIcon from "../icons/DateIcon";

type ClassScheduleProps = {
  label: string;
  schedule: string;
  time: string;
};

const ClassSchedule: React.FC<ClassScheduleProps> = ({
  label,
  schedule,
  time,
}) => {
  return (
    <div className="border-gray border rounded-[12px] px-3 py-3 flex flex-col gap-3">
      <p className="font-medium text-black1 lg:text-[12px] lg:leading-[15.12px] max-md:text-[6px] max-md:leading-[12px]">
        {label}
      </p>

      <div className="flex flex-row items-center gap-3">
        <CalendarIcon />
        <p className="font-normal text-[16px] leading-[20.16px] text-black">
          {schedule}
        </p>
      </div>

      <div className="flex flex-row items-center gap-3">
        <DateIcon />
        <p className="font-normal text-[16px] leading-[20.16px] text-black">
          {time}
        </p>
      </div>
    </div>
  );
};

export default ClassSchedule;
