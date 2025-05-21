import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaWordpress } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { fadeIn } from "../../framermotion/varients";

const skills = [
  { skill: "HTML", icon: FaHtml5 },
  { skill: "CSS", icon: FaCss3Alt },
  { skill: "JavaScript", icon: IoLogoJavascript },
  { skill: "WordPress", icon: FaWordpress },
  { skill: "ReactJS", icon: FaReact },
  { skill: "NextJS", icon: SiNextdotjs },
  { skill: "TailwindCSS", icon: RiTailwindCssFill },
];

const AllSkillsSM = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 md:gap-12 my-12 px-4 sm:px-6 md:px-0">
      {skills.map((item, index) => (
        <motion.div
          key={index}
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          className="flex flex-col items-center"
        >
          <item.icon className="text-6xl md:text-7xl text-orange" />
          <p className="text-center mt-3 md:mt-4 text-sm md:text-base">{item.skill}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default AllSkillsSM;
