import logo from "/assets/logo.svg";
import facebook from "/assets/social/facebook.svg";
import insta from "/assets/social/instagram.svg";
import twitter from "/assets/social/twitter.svg";

import { footerItems_1, footerItems_2 } from "../const";

const Footer = () => {
  return (
    <footer className="max-w-[1200px] mx-auto flex flex-col pb-[100px]">
      <div className="flex justify-between pb-[40px]">
        <div>
          <div className="pb-[20px]">
            <img src={logo} className="h-full" alt="" />
          </div>
          <p className="text-[14px] font-normal leading-[20px] text-white01">
            Photographers & videographers capturing the world around us.
          </p>
        </div>
        <div className="flex gap-[55px]">
          <div className="flex flex-col gap-[10px]">
            <h1 className="text-[16px] text-white01 font-light tracking-[2px] leading-[20px]">
              Business areas
            </h1>
            {footerItems_1.map((item, index) => (
              <div key={index}>
                <p className="text-[14px] font-normal leading-[20px]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-[10px]">
            <h1 className="text-[16px] text-white01 font-light tracking-[2px] leading-[20px]">
              Pages
            </h1>
            {footerItems_2.map((item, index) => (
              <div key={index}>
                <p className="text-[14px] font-normal leading-[20px]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <span className="h-[2px] w-full bg-white" />
      <div className="flex justify-between items-center py-[40px]">
        <div className="flex flex-col gap-[20px]">
          <h1 className="text-[16px] text-white01 font-light tracking-[2px] leading-[20px]">
            Subscribe to our newsletter
          </h1>
          <p className="text-[14px] font-normal leading-[20px]">
            Read about all the things we do.
          </p>
        </div>
        <div className="relative">
          <div className="relative">
            <input
              type="text"
              className="h-[52px] relative rounded-[12px] w-[450px] text-black px-5"
            />
          </div>
          <button className="absolute top-[20%] right-5 border bg-black rounded-[12px] w-[64px] h-[30px]"></button>
        </div>
      </div>
      <span className="h-[2px] w-full bg-white" />
      <div className="flex items-center justify-between pt-[56px]">
        <div>
          <p className="text-[14px] font-normal leading-[20px]">
            © Aperture Photography, Inc. All rights reserved. Licensing.
          </p>
        </div>
        <div className="flex gap-[20px]">
          <img src={twitter} alt="" />
          <img src={insta} alt="" />
          <img src={facebook} alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
