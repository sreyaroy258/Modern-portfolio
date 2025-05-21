import HeroText from "./HeroText";
import HeroPic from "./HeroPic";

const HeroMain = () => {
  return (
    <section className="pt-40 pb-16 px-4">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-20">
        <div className="w-full md:w-1/2">
          <HeroText />
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <HeroPic />
        </div>
      </div>
    </section>
  );
};

export default HeroMain;
