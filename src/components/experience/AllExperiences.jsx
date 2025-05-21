import React from "react";
import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framermotion/varients";

const experiences = [
  {
    job: "Internship - Frontend Developer",
    company: "Sisyphus Infotech",
    date: "May 2024 - July 2024",
    responsibilities: [
      "Worked on Photography Website UI.",
      "Collaborated on responsive design.",
      "Used React and TailwindCSS.",
    ],
  },
  {
    job: "Internship - Frontend Developer",
    company: "Cognorise Infotech",
    date: "July 2024 - September 2024",
    responsibilities: [
      "Completed 3 solo frontend projects.",
      "Designed fully functional UIs.",
      "Optimized responsiveness and UX.",
    ],
  },
  {
    job: "Freelance Frontend Developer",
    company: "AbsDreams Facility Service",
    date: "Sept 2024 - Oct 2024",
    responsibilities: [
      "Worked on facility service website.",
      "Developed UI components.",
      "Collaborated for frontend integration.",
    ],
  },
  {
    job: "Freelance Frontend Developer",
    company: "Avoron",
    date: "Nov 2024 - Dec 2024",
    responsibilities: [
      "Built e-commerce frontend features.",
      "Implemented animations and responsive design.",
      "Coordinated API integration with backend.",
    ],
  },
  {
    job: "Social Media Marketing Manager",
    company: "Avoron",
    date: "Ongoing",
    responsibilities: [
      "Managed Facebook & Instagram pages.",
      "Created content and ads using Canva.",
      "Boosted posts via Meta Business Suite.",
      "Increased engagement & visibility.",
    ],
  },
  {
    job: "Social Media Marketing Manager",
    company: "Mamtaz Handicrafts",
    date: "Ongoing",
    responsibilities: [
      "Handled Facebook and Instagram accounts.",
      "Developed content strategies.",
      "Created targeted ads and boosted posts.",
      "Monitored and optimized campaigns.",
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between flex-wrap gap-4">
      {experiences.map((experience, index) => (
        <React.Fragment key={index}>
          <SingleExperience experience={experience} />
          {index < experiences.length - 1 && (
            <motion.div
              variants={fadeIn("right", 0)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
              className="flex items-center"
            >
              <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
            </motion.div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default AllExperiences;
