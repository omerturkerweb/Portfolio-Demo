import { useContext, useEffect } from "react";
import siteContext from "../SiteContext";

export default function Projects() {
  const context = useContext(siteContext);
  const projects = context.projects;
  const { darkMode } = useContext(siteContext);

  useEffect(() => {
    const projects = document.querySelector(".projects");
    projects.classList.toggle("dark-mode");
    projects.classList.toggle("bg-section-grey-to-white");
  }, [darkMode]);
  return (
    <>
      <div className="projects py-5 flex flex-col items-center justify-center bg-section-grey-to-white">
        <div className="projects-head flex flex-col justify-center items-center">
          <div className="section-title-primary">PROJECTS</div>
          <div className="hr w-10 h-1 bg-button-background"></div>
          <p className="section-text py-3">
            Below are 3 of my projects that I shared as open source code on
            <span className="special"> github</span>
          </p>
        </div>

        <div className="projects-body  flex flex-row justify-center p-40 items-center gap-3">
          {projects.map((project, index) => {
            return (
              <div
                key={index}
                className="project-card cursor-pointer border rounded-md flex flex-col justify-center gap-10 items-center border-gray-300"
              >
                <div className="project-card-top rounded-t-md">
                  <img className="rounded-t-md" src={project.imgSrc}></img>
                </div>
                <div className="project-card-bottom flex flex-col gap-3 p-5 ">
                  <h3 className="text-primary-text font-primary-font font-semibold text-xl tracking-wide">
                    {project.title}
                  </h3>
                  <p className="text-primary-text font-primary-font leading-7">
                    {project.description}
                  </p>
                  <div className="project-tags flex flex-row flex-wrap m-3 gap-3">
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
      </div>
    </>
  );
}
