import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { useContext, useEffect } from "react";
import siteContext from "../SiteContext";

export default function Projects() {
  const [showProjects, setShowProjects] = useState(false);
  const context = useContext(siteContext);
  const projects = context.projects;
  const { darkMode, switchTheme } = useContext(siteContext);

  useEffect(() => {
    if (switchTheme) {
      const projects = document.querySelector(".projects");
      projects.classList.toggle("dark-mode");
      projects.classList.toggle("bg-section-grey-to-white");
    }
  }, [darkMode]);
  const projectsRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowProjects(true);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(projectsRef.current);
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
        animate={showProjects ? { opacity: 1 } : {}}
        ref={projectsRef}
        className="projects py-5 flex flex-col items-center justify-center bg-section-grey-to-white"
      >
        <div className="projects-head flex flex-col justify-center items-center">
          <div className="section-title-primary text-center ">PROJECTS</div>
          <div className="hr w-10 h-1 bg-button-background"></div>
          <p className="section-text py-3 text-center px-11">
            Below are 3 of my projects that I shared as open source code on
            <span className="special"> github</span>
          </p>
        </div>

        <div
          className="projects-body flex flex-row justify-center p-20 items-center gap-3
            xs:flex-col xs:p-0
            md:flex-row md:p-20
            xl:flex-row xl:p-20
            2xl:flex-row 2x:p-20
            "
        >
          {projects.map((project, index) => {
            return (
              <div
                key={index}
                className="project-card !mb-5  cursor-pointer border rounded-md flex flex-col justify-center gap-10 items-center border-gray-300"
              >
                <div className="project-card-top rounded-t-md">
                  <img className="rounded-t-md" src={project.imgSrc}></img>
                </div>
                <div className="project-card-bottom flex flex-col gap-3 p-5 ">
                  <h3 className="text-primary-text font-primary-font font-semibold text-xl tracking-wide text-center">
                    {project.title}
                  </h3>
                  <p className="text-primary-text font-primary-font px-4 leading-7 text-center">
                    {project.description}
                  </p>
                  <div
                    className="project-tags flex flex-row  flex-wrap m-3 gap-3 
                  xs:px-2
                  md:px-0
                  xl:px-0
                  2xl:px-0
                  "
                  >
                    {project.tags.map((tag, index) => {
                      return (
                        <span
                          key={index}
                          className=" bg-skill-background font-primary-font transition hover:bg-profile-hover  text-primary-text rounded-md cursor-pointer p-3"
                        >
                          {tag}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="projects-bottom">
          <a
            href="https://github.com/omerturkerweb?tab=repositories"
            target="_blank"
          >
            <button className="primary-button">Show More Project</button>
          </a>
        </div>
      </motion.div>
    </>
  );
}
