import React, { useState } from "react";
import DropIcon from "../icons/DropIcon";

type DropdownProps = {
  label: string;
  children?: React.ReactNode;
};

const Dropdown: React.FC<DropdownProps> = ({ label, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="w-full bg-white border-gray border rounded-[12px]">
      <div
        className="px-4 py-2 flex justify-between items-center cursor-pointer"
        onClick={toggleDropdown}
      >
        <p className="font-normal lg:text-[24px] max-md:text-[12px] text-black1">
          {label}
        </p>

        <div
          className={`transition-transform transform cursor-pointer ${
            isOpen ? "rotate-180" : "rotate-180"
          }`}
        >
          <DropIcon />
        </div>
      </div>

      {isOpen && <div className="px-4 py-2">{children}</div>}
    </div>
  );
};

export default Dropdown;
