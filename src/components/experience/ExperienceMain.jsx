import AllExperiences from "./AllExperiences";
import ExperienceText from "./ExperienceText";
import ExperienceTop from "./ExperienceTop";
import { motion } from "framer-motion";
import { fadeIn } from "../../framermotion/varients";

const ExperienceMain = () => {
  return (
    <div
      id="experience"
      className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 box-border"
      // box-border ensures padding and borders are included within width
    >
      <motion.div
        variants={fadeIn("down", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="overflow-hidden break-words max-w-full"
        // prevent text overflow & ensure width is max 100%
      >
        <ExperienceText />
      </motion.div>

      <motion.div
        variants={fadeIn("down", 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="mt-6 sm:mt-8 md:mt-10 overflow-hidden break-words max-w-full"
        // added overflow and break to avoid overflow issues
      >
        <ExperienceTop />
      </motion.div>

      <div className="w-full h-1 mt-4 bg-lightBrown lg:block sm:hidden"></div>

      <div className="mt-8 sm:mt-10 md:mt-12 max-w-full">
        <AllExperiences />
      </div>
    </div>
  );
};

export default ExperienceMain;
