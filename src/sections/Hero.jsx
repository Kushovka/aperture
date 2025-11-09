import React from "react";
import hero from "/assets/hero_img.png";
import Settings from "../components/Settings";

const Hero = () => {
  return (
    <section className="relative w-full h-screen text-white">
      {/* Фон */}
      <img
        src={hero}
        className="absolute inset-0 object-cover w-full h-full"
        alt=""
      />

      {/* Контейнер для текста и Settings */}
      <div className="relative z-10 w-full h-full flex items-end justify-center px-4 pb-[60px]">
        {/* Текст по центру */}
        <div className="max-w-3xl text-center">
          <p className="text-[18px] font-light text-white01">
            Photographer & Filmmaker
          </p>
          <h1 className="text-[54px] font-normal">Aperture Studios</h1>
          <p className="text-[16px] font-normal text-white01 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem
            imperdiet. Nunc ut sem vitae risus tristique posuere.
          </p>
        </div>

        {/* Settings справа снизу */}
        <div className="absolute bottom-2 right-8">
          <Settings
            frame={"1/2000s"}
            cam={"f/11"}
            iso={"100"}
            map={"Iceland"}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
