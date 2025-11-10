import Button from "../components/Button";
import PhotoComp from "../components/PhotoComp";
import Settings from "../components/Settings";
import bgPhoto1 from "/assets/photo2.png";
import bgPhoto2 from "/assets/photo3.png";
import bgPhoto3 from "/assets/photo4.png";

const PhotoSet = () => {
  return (
    <section className="pb-10 mx-auto max-w-max">
      <PhotoComp
        title={"Sunset at Mount Fuji"}
        text={
          "Duis tristique sed lorem a vestibulum. Cras commodo consequat orci, in convallis risus egestas non."
        }
        frame={"1''"}
        cam={"f/16"}
        iso={"400"}
        map={"Japan"}
        img={bgPhoto1}
      />

      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-[15px] w-1/2 pl-[100px]">
          <div className="w-[70%]">
            <span className="text-[16px] font-light text-white01">
              The Gear cage
            </span>
            <h1 className="text-[32px] font-light ">The tools that we use.</h1>
            <p className="text-[16px] text-white01">
              The say that "no place is boring if you've had a good night's
              sleep and have a pocket full of unexposed film". While we don't
              shoot (a lot) of film these days — these are the tools that we
              actually use everyday to capture the amazing things around us.
            </p>
          </div>
          <div>
            <Button text={"Check it out"} />
          </div>
        </div>
        <div className="relative w-1/2">
          <img src={bgPhoto2} className="w-full h-full" alt="" />
          <div className="absolute bottom-0 right-0 p-[40px]">
            <Settings
              frame={"0,8''"}
              cam={"f/5,6"}
              iso={"100"}
              map={"Sweden"}
            />
          </div>
        </div>
      </div>

      <PhotoComp
        title={"Monstera Leafs"}
        text={
          "Vestibulum sit amet urna turpis. Mauris euismod elit et nisi ultrices, ut faucibus orci tincidunt."
        }
        frame={"1/400s"}
        cam={"f/3,5"}
        iso={"100"}
        map={"Costa Rica"}
        img={bgPhoto3}
      />
    </section>
  );
};

export default PhotoSet;
