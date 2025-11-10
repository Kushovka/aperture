import React from "react";
import Title from "../components/Title";
import Button from "../components/Button";

const Help = () => {
  return (
    <section className="max-w-[570px] mx-auto flex flex-col items-center justify-center gap-[24px] py-[100px]">
      <Title
        title={"Need help with photography or videography?"}
        text={"We're here for you!"}
      />
      <Button text={"Get in touch"} />
    </section>
  );
};

export default Help;
