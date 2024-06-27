"use client";
import { useState } from "react";

const Switch = ({ primary, secondary, onChange }) => {
  const [active, setActive] = useState(primary);

  return (
    <div className="h-9 bg-gray-700 rounded-full flex items-center gap-2 px-1">
      <div
        className={`cursor-pointer flex items-center px-2 h-7 font-medium rounded-full ${
          active === primary ? "bg-white" : "hover:bg-primary"
        }`}
        onClick={() => {
          setActive(primary);
          onChange();
        }}
      >
        <p
          className={` text-sm ${
            active === primary ? "text-black-300" : "text-white"
          }`}
        >
          {primary}
        </p>
      </div>
      <div
        className={`cursor-pointer flex items-center px-2 h-7 font-medium rounded-full ${
          active === secondary ? "bg-white " : "hover:bg-primary"
        }`}
        onClick={() => {
          setActive(secondary);
          onChange();
        }}
      >
        <p
          className={`text-sm ${
            active === secondary ? "text-black-300" : "text-white "
          }`}
        >
          {secondary}
        </p>
      </div>
    </div>
  );
};

export default Switch;
