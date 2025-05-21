import AboutMeImage from "../about/AboutMeIamge";
import AboutMeText from "../about/AboutMeText";
import { motion } from "framer-motion";
import { fadeIn } from "../../framermotion/varients";

const AboutMeMain = () => {
  return (
    <div
      id="about"
      className="flex md:flex-row sm:flex-col gap-12 sm:gap-8 px-4 max-w-[1200px] mx-auto mt-[100px] justify-between items-center"
    >
      <motion.div
        variants={fadeIn("right", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="md:w-1/2 sm:w-full sm:mb-8"
      >
        <AboutMeText />
      </motion.div>
      <motion.div
        variants={fadeIn("left", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="md:w-1/2 sm:w-full flex justify-center"
      >
        <AboutMeImage className="max-w-full h-auto" />
      </motion.div>
    </div>
  );
};

export default AboutMeMain;
