import React from "react";
import Title from "../components/Title";
import { imgPhoto } from "../const";
import Button from "../components/Button";

const Photography = () => {
  return (
    <section className=" max-w-max mx-auto pt-[120px] pb-[100px]">
      <div className="flex justify-center item-center pb-[42px]">
        <Title
          title={"What we do."}
          text={"The areas that we're specialized in."}
        />
      </div>
      <div className=" grid grid-cols-2 gap-[16px]">
        {imgPhoto.map((item, index) => (
          <div key={index} className="relative">
            <img src={item.img} className="" alt={item.alt} />

            <div className="absolute bottom-0 left-0 p-[30px] space-y-2">
              <h1 className="text-[16px] font-light ">{item.title}</h1>
              <p className="text-[14px] text-white01">{item.text}</p>
              <Button text={"Read more"} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Photography;
