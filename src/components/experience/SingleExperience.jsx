import { motion } from "framer-motion";
import { fadeIn } from "../../framermotion/varients";

const SingleExperience = ({ experience }) => {
  return (
    <motion.div
      variants={fadeIn("right", 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.7 }}
      className="
        sm:w-full sm:h-auto 
        md:w-[240px] md:h-[350px] md:max-w-[240px] 
        border-2 border-orange border-dashed rounded-2xl 
        mt-12 p-4
      "
    >
      <p className="font-bold text-cyan">{experience.job}</p>
      <p className="text-orange">{experience.company}</p>
      <p className="text-lightGrey">{experience.date}</p>
      <ul className="list-disc mt-4 pl-4 space-y-1">
        {experience.responsibilities.map((resp, index) => (
          <li key={index}>{resp}</li>
        ))}
      </ul>
    </motion.div>
  );
};

export default SingleExperience;
