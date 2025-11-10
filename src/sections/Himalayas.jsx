import PhotoComp from "../components/PhotoComp";
import bgPhoto5 from "/assets/photo5.png";

const Himalayas = () => {
  return (
    <section className="pb-10 mx-auto max-w-max">
      <PhotoComp
        title={"Star fall in the Himalayas"}
        text={
          "Nulla rhoncus feugiat eros quis consectetur. Morbi neque ex, condimentum dapibus congue et, vulputate ut ligula."
        }
        frame={"6''"}
        cam={"f/11"}
        iso={"800"}
        map={"Nepal"}
        img={bgPhoto5}
      />
    </section>
  );
};

export default Himalayas;
