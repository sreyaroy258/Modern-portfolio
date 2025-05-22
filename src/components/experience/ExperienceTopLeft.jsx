import ExperienceInfo from "./ExperienceInfo";

const ExperienceTopLeft = () => {
  return (
    <div className="flex flex-col gap-6 w-full max-w-[300px] mx-auto sm:max-w-[280px] px-4 sm:px-6">
      <p className="text-orange font-bold uppercase text-3xl sm:text-2xl font-special text-center">
        Since 2024
      </p>
      <div className="flex justify-center items-center -gap-1">
        <ExperienceInfo number="1" text="Year" />
        <p className="font-bold text-6xl sm:text-5xl text-lightBrown">-</p>
        <ExperienceInfo number="10+" text="Websites" />
      </div>
      <p className="text-center text-sm sm:text-xs px-2 ">
        With 1 year of experience building dynamic and user-friendly web
        applications.
      </p>
    </div>
  );
};

export default ExperienceTopLeft;
