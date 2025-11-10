import React from "react";

const Title = ({ title, text }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-[16px]">
      <h1 className="text-[40px] font-normal text-center">{title}</h1>
      <p className="text-[24px] font-light text-white01 text-center">{text}</p>
    </div>
  );
};

export default Title;
