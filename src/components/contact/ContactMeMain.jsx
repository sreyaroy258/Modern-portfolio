import ContactMeLeft from "./ContactMeLeft";
import ContactMeRight from "./ContactMeRight";

const ContactMeMain = () => {
  return (
    <div
      id="contact"
      className="max-w-[1200px] mx-auto px-4 mt-24"
    >
      <h2 className="text-4xl sm:text-5xl lg:text-6xl text-cyan mb-10 text-center">
        Contact Me
      </h2>

      <div className="flex flex-col lg:flex-row gap-10 bg-brown p-6 sm:p-8 rounded-2xl">
        <ContactMeLeft />
        <ContactMeRight />
      </div>
    </div>
  );
};

export default ContactMeMain;
