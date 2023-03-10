import { FiArrowUp } from "react-icons/fi";
import { motion } from "framer-motion";
import siteContext from "../SiteContext";
import { useContext, useEffect, useRef } from "react";
import { BsChevronDoubleDown } from "react-icons/bs";
export default function Home() {
  const goProjects = () => {
    console.log(window.innerWidth);
    if (window.innerWidth > 700) {
      window.scroll({
        top: 1420,
        left: 0,
        behavior: "smooth",
      });
    } else if (window.innerWidth < 700) {
      window.scroll({
        top: 2250,
        left: 0,
        behavior: "smooth",
      });
    }
  };
  const { darkMode, switchTheme, scrollTop } = useContext(siteContext);
  useEffect(() => {
    if (switchTheme) {
      const home = document.querySelector(".home");
      home.classList.toggle("dark-mode");
      home.classList.toggle("bg-section-grey-to-white");
    }
  }, [darkMode]);
  const scrollToTopHandle = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    const scrollToTopContainer = document.querySelector(
      ".scroll-top-container"
    );
    if (scrollTop) {
      console.log(scrollToTopContainer);
      scrollToTopContainer.classList.add("scroll-top-active");
    } else {
      scrollToTopContainer.classList.remove("scroll-top-active");
    }
  }, [scrollTop]);
  useEffect(() => {
    const scrollTopContainer = document.querySelector(".scroll-top-container");

    darkMode
      ? scrollTopContainer.classList.toggle("dark-mode")
      : scrollTopContainer.classList.toggle("dark-mode");
  }, [darkMode]);
  return (
    <>
      <div
        onClick={scrollToTopHandle}
        className="scroll-top-container fixed bottom-10 right-10
        xs:bottom-6 xs:right-6
        md:bottom-10 md:right-10
        xl:bottom-10 xl:right-10
        2xl:bottom-10 2xl:right-10
        "
      >
        <FiArrowUp className="cursor-pointer scroll-top" />
      </div>
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
        }}
        className="home flex flex-col gap-16 justify-center items-center py-20 bg-section-grey-to-white"
      >
        <h1
          className="title-1 font-semibold text-6xl font-primary-font text-primary-text tracking-wide
          xs:text-4xl
          md:text-6xl
          xl:text-6xl
          2xl:text-6xl
          "
        >
          WELCOME
        </h1>
        <p
          className="title-2 text-center font-semibold text-3xl font-primary-font text-primary-text tracking-wide
        xs:text-xl xs:px-6
        md:text-3xl md:indent-0
        xl:text-3xl xl:indent-0
        2xl:text-3xl 2xl:indent-0
        "
        >
          IT'S OMER TURKER'S PORTFOLIO WEBSITE
        </p>
        <button className="">
          <a onClick={goProjects} className="primary-button" href="#">
            Projects
          </a>
        </button>
        <p
          className="title-3 font-light font-primary-font text-primary-text
           xs:text-sm xs:px-10
           md:text-base md:px-0
           xl:text-base xl:px-0
           2xl:text-base text-center 2xl:px-0
           "
        >
          a front-end developer who develops products with React and shares
          these products as open source
        </p>
        <p className="page-info text-sm font-extralight">
          you can learn more about me by scrolling down
        </p>
        <span className="down-arrow">
          <BsChevronDoubleDown />
        </span>
      </motion.div>
    </>
  );
}
