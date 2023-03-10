import { motion } from "framer-motion";
import { useContext, useEffect, useRef, useState } from "react";
import siteContext from "../SiteContext";

export default function () {
  const [showContact, setShowContact] = useState(false);
  const { darkMode, switchTheme } = useContext(siteContext);
  useEffect(() => {
    if (switchTheme) {
      const contact = document.querySelector(".contact");
      contact.classList.toggle("dark-mode");
      contact.classList.toggle("bg-section-grey-to-white");
    }
  }, [darkMode]);
  const submitHandle = (e) => {
    e.preventDefault();
  };
  const contactRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowContact(true);
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(contactRef.current);
    return () => observer.disconnect();
  }, []);
  return (
    <>
      <motion.div
        initial={{
          opacity: 0,
        }}
        transition={{
          duration: 0.7,
        }}
        animate={
          showContact
            ? {
                opacity: 1,
              }
            : {}
        }
        ref={contactRef}
        className="contact bg-section-grey-to-white flex flex-col py-10"
      >
        <div className="contact-top flex flex-col items-center justify-center gap-5">
          <div className="section-title-primary">CONTACT</div>
          <div className="hr w-10 h-1 bg-button-background"></div>
          <p className="section-text text-center px-3">
            Contact me for any offers, questions, suggestions or to meet!
          </p>
        </div>
        <div
          className="contact-bottom  px-52
          xs:px-12
          md:px-32
          xl:px-40
          2xl:px-52
          "
        >
          <form onSubmit={submitHandle} className="flex flex-col gap-10">
            <label>
              <span className="input-title-text">Name</span>
              <br />

              <input
                type="text"
                placeholder="Enter Your Name..."
                className=" input-text"
              ></input>
            </label>
            <label>
              <span className="input-title-text">E-mail</span>
              <br />
              <input
                placeholder="Enter Your E-mail..."
                type="text"
                className="input-text"
              ></input>
            </label>
            <label>
              <span className="input-title-text">Message</span>
              <br />
              <textarea
                className="input-textarea"
                placeholder="Enter Your Message Here..."
              ></textarea>
            </label>

            <button type="submit" className="primary-button">
              Send
            </button>
          </form>
        </div>
      </motion.div>
    </>
  );
}
