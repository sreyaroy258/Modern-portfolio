import ContactInfo from "../contact/contactInfo";
import ContactSocial from "./ContactSocial";

const ContactMeRight = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-12">
      {/* <img
  src="/images/email-image.png"
  alt="test"
  className="max-w-[300px]"
/> */}

      <ContactInfo />
      <ContactSocial />
    </div>
  );
};

export default ContactMeRight;
