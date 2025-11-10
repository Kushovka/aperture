import Settings from "./Settings";

const PhotoComp = ({ title, text, frame, cam, iso, map, img }) => {
  return (
    <div className="relative">
      <img src={img} className="w-screen h-full" alt="" />
      <div className="absolute right-10 flex flex-col top-1/2  w-[17%]">
        <h1 className="text-[16px] font-light">{title}</h1>
        <p className="text-[14px] font-light text-white01">{text}</p>
      </div>
      <div className="absolute bottom-0 right-0 p-[40px]">
        <Settings frame={frame} cam={cam} iso={iso} map={map} />
      </div>
    </div>
  );
};

export default PhotoComp;
