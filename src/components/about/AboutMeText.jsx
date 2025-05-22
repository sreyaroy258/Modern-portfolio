import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col items-center text-center md:items-start md:text-left w-full max-w-[800px] px-4">
      <h2 className="text-4xl md:text-6xl text-cyan mb-6">About Me</h2>

      <p className="text-lightGrey text-base md:text-lg leading-relaxed">
        I’m Sreya Roy, a web developer with 1 year of experience including freelancing. 
        I specialize in front-end development using React and modern web technologies. 
        Alongside coding, I am passionate about creating elegant, responsive interfaces 
        and delivering great user experiences. I am continuously learning and growing 
        in this fast-paced tech world.
      </p>

      <button className="border border-orange rounded-full py-2 px-6 text-base md:text-lg flex gap-2 items-center mt-8 hover:bg-orange transition-all duration-500 cursor-pointer">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
