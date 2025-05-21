import { motion } from "framer-motion";
import { fadeIn } from "../../framermotion/varients"; // make sure path is correct

const HeroText = () => {
  return (
    <div className="flex flex-col gap-4 h-full justify-center text-center md:text-left px-4 sm:px-6 md:px-0">
      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.5 }}
        className="lg:text-2xl sm:text-xl uppercase text-lightGrey"
      >
        Front-End Web Developer
      </motion.h2>

      <motion.h1
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.5 }}
        className="text-orange font-bold uppercase text-3xl sm:text-4xl md:text-6xl leading-tight"
      >
        Sreya
        <br className="hidden md:block" />
        Roy
      </motion.h1>

      <motion.p
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.5 }}
        className="text-base sm:text-lg mt-4 text-lightGrey max-w-xl mx-auto md:mx-0"
      >
        A passionate Web Developer with strong UI/UX focus, dedicated to building responsive and elegant interfaces using modern frontend technologies.
      </motion.p>
    </div>
  );
};

export default HeroText;
