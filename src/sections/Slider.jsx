import React, { useState } from "react";
import { sliderItems } from "../const";

const Slider = () => {
  const [currItem, setCurrItem] = useState(0);
  const currCard = 1;
  const totalCard = Math.ceil(sliderItems.length / currCard);

  const startIndex = currItem * currCard;
  const endIndex = startIndex + currCard;
  const cards = sliderItems.slice(startIndex, endIndex);

  function handleNext() {
    setCurrItem((prev) => (prev + 1 === totalCard ? 0 : prev + 1));
  }
  function handlePrev() {
    setCurrItem((prev) => (prev - 1 >= 0 ? prev - 1 : totalCard - 1));
  }
  return (
    <section className="max-w-[1200px] mx-auto py-[70px] flex flex-col items-center justify-center gap-5">
      <div>
        {cards.map((item, idx) => (
          <div key={idx}>
            <img
              src={item.img}
              className="w-full h-[600px] rounded-[12px]"
              alt="img"
            />
          </div>
        ))}
      </div>
      <div className="flex text-center gap-5">
        <button
          onClick={handlePrev}
          className="text-3xl text-black bg-white rounded-[12px] px-[12px] py-[2px]"
        >
          ⬅
        </button>
        <button
          onClick={handleNext}
          className="text-3xl text-black bg-white rounded-[12px] px-[12px] py-[2px]"
        >
          ➡
        </button>
      </div>
      <div>
        {String(currItem + 1).padStart(2, "0")} of{" "}
        {String(totalCard).padStart(2, "0")}
      </div>
    </section>
  );
};

export default Slider;
