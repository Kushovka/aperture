import React from "react";

const Button = ({ text }) => {
  return (
    <button className="text-black bg-white01 hover:bg-white transition-all duration-300 p-[10px] rounded-[14px] flex items-center gap-[6px] hover:scale-105">
      <span className="h-[32px] w-[32px] bg-black rounded-[15px]" />
      <p>{text}</p>
    </button>
  );
};

export default Button;
