import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="sreyaroy258@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+91 7318999970" Image={FiPhone} />
      <SingleInfo text="Midnapore , West Bengal" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;