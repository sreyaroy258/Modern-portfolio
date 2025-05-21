import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="https://www.linkedin.com/in/sreya-roy-572b9522b" Icon={FaLinkedinIn} />
      <SingleContactSocial link="https://github.com/sreyaroy258" Icon={FiGithub} />
    </div>
  );
};

export default ContactSocial;
