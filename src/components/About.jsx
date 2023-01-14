import { useEffect } from "react";
import { useContext } from "react";
import siteContext from "../SiteContext";

export default function About() {
  const { darkMode } = useContext(siteContext);
  useEffect(() => {
    const about = document.querySelector(".about");
    const aboutTop = document.querySelector(".about-top");
    aboutTop.classList.toggle("dark-mode");
    about.classList.toggle("dark-mode");
  }, [darkMode]);
  const goContact = () => {
    window.scroll({
      top: 2600,
      left: 0,
      behavior: "smooth",
    });
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
  return (
    <>
      <div className="about px-24 py-3 flex flex-col bg-section-grey-to-white">
        <div className="about-top py-3 flex flex-col items-center justify-center gap-4">
          <span className="title section-title-primary ">MORE ABOUT ME</span>
          <div className="hr w-10 h-1 bg-button-background"></div>
          <p className="section-text ">
            Below you can learn more about my front-end development, Programming
            and development and see the skills I have previously experienced
          </p>
        </div>
        <div className="about-bottom flex flex-row">
          <div className=" border border-gray-300 rounded-sm about-bottom-left w-full p-10 flex flex-col gap-10  ">
            <h3 className="section-title-secondary">What im a doing</h3>
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
          <div className="about-bottom-right  w-3/5 flex flex-col p-10">
            <h3 className="section-title-secondary ">My Skillset</h3>
            <div className="skills  flex flex-row gap-2  w-4/6 py-20 items-center   flex-wrap">
              {mySkills.map((skill, index) => {
                return (
                  <span
                    className="skill bg-skill-background font-primary-font transition hover:bg-profile-hover  text-primary-text rounded-md cursor-pointer block p-3"
                    key={index}
                  >
                    {skill}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
