import AllSkills from "./AllSkills";
import AllSkillsSM from "./AllSkillsSM";
import SkillsText from "./SkillsText";
import { motion } from "framer-motion";
import { fadeIn } from "../../framermotion/varients";

const SkillsMain = () => {
  return (
    <div id="skills">
      <div className="max-w-[1200px] px-4 mx-auto min-h-[600px] relative overflow-hidden">
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
        >
          <SkillsText />
        </motion.div>

        {/* Show AllSkills on md and larger */}
        <div className="hidden md:block bottom-[50px] absolute left-1/2 transform -translate-x-1/2">
          <AllSkills />
        </div>

        {/* Show AllSkillsSM on small screens only */}
        <div className="block md:hidden">
          <AllSkillsSM />
        </div>
      </div>
    </div>
  );
};

export default SkillsMain;
