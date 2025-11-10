import React from "react";
import Title from "../components/Title";
import { clientsItems } from "../const";

const Clients = () => {
  return (
    <section className="max-w-[1200px] mx-auto flex flex-col gap-[80px] pt-[120px] pb-[160px]">
      <div>
        <Title
          title={"Past clients"}
          text={"Trusted by your favourite companies"}
        />
      </div>
      <div className="flex items-center justify-between">
        {clientsItems.map((item, index) => (
          <div key={index}>
            <img src={item.img} alt="" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
