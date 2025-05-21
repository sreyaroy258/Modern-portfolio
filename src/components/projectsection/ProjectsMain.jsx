import ProjectsText from "../projectsection/projectText";
import SingleProject from "../projectsection/SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framermotion/varients";

const projects = [
  
  {
    name: "AbsDreamFacility Service",
    year: "September 2024",
    align: "left",
    image: "/images/project2.png",
    link: "https://www.absdreamsfacilities.com/", // ✅ full link
  },
 
  {
    name: "3d Portfolio",
    year: "November 2024",
    align: "right",
    image: "/images/project4.png",
    link: "https://3d-portfolio-psi-puce.vercel.app/", // 
  },
   {
    name: "Avoron",
    year: "December 2024",
    align: "left",
    image: "/images/project1.png",
    link: "https://www.avoron.in/", // ❌ FIXED — removed '#' from the beginning
  },
  {
    name: "CoffeeShop",
    year: "May2025",
    align: "right",
    image: "/images/project3.png",
    link: "https://coffee-shop-one-iota.vercel.app/", // ✅ full link
  },
     
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>

      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => (
          <SingleProject
            key={index}
            name={project.name}
            year={project.year}
            align={project.align}
            image={project.image}
            link={project.link} // ✅ FIXED — added the link prop
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsMain;
