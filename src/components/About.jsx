import { motion } from "framer-motion";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import { useContext } from "react";
import siteContext from "../SiteContext";

export default function About() {
  const [showAbout, setShowAbout] = useState(false);
  const { darkMode, switchTheme } = useContext(siteContext);
  useEffect(() => {
    if (switchTheme) {
      const about = document.querySelector(".about");
      about.classList.toggle("dark-mode");
    }
  }, [darkMode]);
  const goContact = () => {
    if (window.innerWidth > 700) {
      window.scroll({
        top: 2430,
        left: 0,
        behavior: "smooth",
      });
    } else if (window.innerWidth < 700) {
      window.scroll({
        top: 4300,
        left: 0,
        behavior: "smooth",
      });
    }
  };
  const mySkills = [
    "HTML5",
    "CSS3",
    "JAVASCRIPT",
    "RESPONSIVE DESIGN",
    "BOOTSTRAP",
    "REACTJS",
    "SASS/LESS",
    "PHP",
    "FIGMA",
    "GIT/GITHUB",
    "SQL",
    "REDUX",
    "ADOBE PREMIRE PRO",
  ];
  const aboutRef = useRef(null);
  useEffect(() => {
    console.log(aboutRef.current);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowAbout(true);
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(aboutRef.current);
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
          showAbout
            ? {
                opacity: 1,
              }
            : {}
        }
        ref={aboutRef}
        className="about py-3 flex px-4 flex-col items-center justify-center bg-section-grey-to-white"
      >
        <div className="about-top py-3 flex flex-col items-center justify-center gap-4">
          <span
            className="title section-title-primary text-center
            xs:text-2xl
            md:text-4xl
            xl:text-4xl
            2xl:text-4xl
            "
          >
            MORE ABOUT ME
          </span>
          <div className="hr w-10 h-1 bg-button-background"></div>
          <p
            className="section-text 
           xs:text-sm
           md:text-base
           xl:text-base
           2xl:text-base text-center
           "
          >
            Below you can learn more about my front-end development, Programming
            and development and see the skills I have previously experienced
          </p>
        </div>
        <div
          className="about-bottom flex flex-row px-20
        xs:flex-col xs:px-0
        md:flex-row md:px-20
        xl:flex-row xl:px-20
        2xl:flex-row 2xl:px-20
        "
        >
          <div className=" border border-gray-300 rounded-sm about-bottom-left w-full p-10 flex flex-col gap-10  ">
            <h3 className="section-title-secondary text-center">
              What im a doing
            </h3>
            <p className="section-text">
              I am a <span className="special">Frontend Web Developer</span>. I
              simply design the front parts of the websites you view, make the
              display <span className="special">responsive</span> on mobile
              devices and develop various
              <span className="special"> extensions</span>.
              <br />
              <br />
              I'm actively doing specific demos using
              <span className="special"> react</span> and
              <span className="special"> tailwind</span>, you can take a look at
              the <span className="special">projects</span> section below. I
              share the content I produce as open source code on my
              <span className="special"> github</span> account. My roadmap is to
              develop myself in <span className="special">react</span> and
              <span className="special"> typescript</span> first and become
              fully professional in the front end.
              <span className="special"> Technologies</span> that I have used
              and experienced in my projects before You can see it on the right.
              <br />
              <br />I am
              <span className="special"> still open to job offers</span> for
              positions that will provide me with my development and growth and
              experience. You can reach me from the
              <span className="special"> form </span> below or from my
              <span className="special"> social</span> media accounts.
            </p>

            <div className="contact-button cursor-pointer">
              <a onClick={goContact} className="primary-button">
                CONTACT ME
              </a>
            </div>
          </div>
          <div
            className="about-bottom-right  mx-auto w-3/5 flex flex-col flex-wrap p-10
          xs:w-5/6
          md:w-3/5
          xl:w-3/5
          2xl:w-3/5
          "
          >
            <h3 className="section-title-secondary text-center">My Skillset</h3>
            <div
              className="skills  flex flex-row gap-2 w-4/6 items-center !flex-wrap
            xs:py-5 xs:w-full 
            md:py-20
            xl:py-20
            2xl:py-20
            "
            >
              {mySkills.map((skill, index) => {
                return (
                  <span
                    className="skill select-none bg-skill-background font-primary-font transition hover:bg-profile-hover whitespace-nowrap  text-primary-text rounded-md cursor-pointer block p-3
                    xs:text-[11px]
                    md:text-base
                    xl:text-base
                    2xl:text-base
                    "
                    key={index}
                  >
                    {skill}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
