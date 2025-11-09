import imgFrame from "/assets/setting_img/frame.svg";
import imgCam from "/assets/setting_img/cam.svg";
import imgIso from "/assets/setting_img/iso.svg";
import imgMap from "/assets/setting_img/map.svg";

const Settings = ({ frame, cam, iso, map }) => {
  return (
    <div className="flex item-center justify-between gap-[28px]">
      <div className="flex gap-[7px]">
        <img src={imgFrame} className="w-full h-full" alt="" />
        <span>{frame}</span>
      </div>
      <div className="flex gap-[7px]">
        <img src={imgCam} className="w-full h-full" alt="" />
        <span>{cam}</span>
      </div>
      <div className="flex gap-[7px]">
        <img src={imgIso} className="w-full h-full" alt="" />
        <span>{iso}</span>
      </div>
      <div className="flex gap-[7px] whitespace-nowrap">
        <img src={imgMap} className="w-full h-full" alt="" />
        <span>{map}</span>
      </div>
    </div>
  );
};

export default Settings;
