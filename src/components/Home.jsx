import siteContext from "../SiteContext";
import { useContext, useEffect } from "react";
import { BsChevronDoubleDown } from "react-icons/bs";
export default function Home() {
  const goProjects = () => {
    window.scroll({
      top: 1420,
      left: 0,
      behavior: "smooth",
    });
  };
  const { darkMode } = useContext(siteContext);
  useEffect(() => {
    const home = document.querySelector(".home");
    const title1 = document.querySelector(".title-1");
    const title2 = document.querySelector(".title-2");
    const title3 = document.querySelector(".title-3");
    const pageInfo = document.querySelector(".page-info");
    const downArrow = document.querySelector(".down-arrow");
    downArrow.classList.toggle("dark-mode");
    title1.classList.toggle("dark-mode");
    title2.classList.toggle("dark-mode");
    title3.classList.toggle("dark-mode");
    pageInfo.classList.toggle("dark-mode");
    home.classList.toggle("dark-mode");
    home.classList.toggle("bg-section-grey-to-white");
  }, [darkMode]);
  return (
    <>
      <div className="home flex flex-col gap-16 justify-center items-center py-20 bg-section-grey-to-white">
        <h1 className="title-1 font-semibold text-6xl font-primary-font text-primary-text tracking-wide">
          WELCOME
        </h1>
        <p className="title-2 font-semibold text-3xl font-primary-font text-primary-text tracking-wide">
          IT'S OMER TURKER'S PORTFOLIO WEBSITE
        </p>
        <button className="">
          <a onClick={goProjects} className="primary-button" href="#">
            Projects
          </a>
        </button>
        <p className="title-3 font-light font-primary-font text-primary-text">
          a front-end developer who develops products with React and shares
          these products as open source
        </p>
        <p className="page-info text-sm font-extralight">
          you can learn more about me by scrolling down
        </p>
        <span className="down-arrow">
          <BsChevronDoubleDown />
        </span>
      </div>
    </>
  );
}
