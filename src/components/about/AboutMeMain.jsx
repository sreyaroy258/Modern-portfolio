import AboutMeImage from "../about/AboutMeIamge";
import AboutMeText from "../about/AboutMeText";
import { motion } from "framer-motion";
import { fadeIn } from "../../framermotion/varients";

const AboutMeMain = () => {
  return (
    <div
      id="about"
      className="flex flex-col md:flex-row gap-12 px-4 max-w-[1200px] mx-auto mt-[100px] items-center justify-center"
    >
      <motion.div
        variants={fadeIn("right", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="w-full md:w-1/2 flex justify-center"
      >
        <AboutMeText />
      </motion.div>

      <motion.div
        variants={fadeIn("left", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="hidden md:flex w-full md:w-1/2 justify-center"
      >
        <AboutMeImage className="max-w-full h-auto" />
      </motion.div>
    </div>
  );
};

export default AboutMeMain;
