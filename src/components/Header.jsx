import { FaBars } from "react-icons/fa";
import TypingEffect from "./TypingEffect";
import { useContext } from "react";
import { MdDarkMode } from "react-icons/md";
import { BsLightbulb } from "react-icons/bs";
import siteContext from "../SiteContext";
import { useEffect } from "react";
export default function Header() {
  const goHome = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  const goAbout = () => {
    window.scroll({
      top: 670,
      left: 0,
      behavior: "smooth",
    });
  };
  const goProjects = () => {
    window.scroll({
      top: 1420,
      left: 0,
      behavior: "smooth",
    });
  };
  const goContact = () => {
    window.scroll({
      top: 2600,
      left: 0,
      behavior: "smooth",
    });
  };
  const { darkMode, setDarkMode } = useContext(siteContext);
  const darkModeHandle = () => {
    darkMode ? setDarkMode(false) : setDarkMode(true);
  };
  useEffect(() => {
    const Header = document.querySelector(".header");
    Header.classList.toggle("dark-mode");
  }, [darkMode]);
  const xsMenuHandler = () => {
    const xsMenu = document.querySelector(".xs-menu");
    xsMenu.classList.toggle("!opacity-100");
    xsMenu.classList.toggle("!visible");
  };
  return (
    <>
      <div
        className="header !min-w-full !h-24 fixed container shadow-prmiary-light-content-shadow flex justify-between whitespace-nowrap items-center p-3 px-12
 
         md:justify-center md:gap-10
         xl:justify-between  
         2xl:justify-between"
      >
        <div className="header-left transition  hover:bg-profile-hover cursor-pointer p-3 ml-[10%] rounded-md flex items-center">
          <img
            className="w-12 h-12 rounded-full header-left-img max-w-[50px]"
            src={require("../images/selfie.jpg")}
          ></img>
          <span
            className="owner-brand-text p-5  text-lg text-primary-text tracking-wider font-primary-font font-semibold transition  header-left-name
           xs:!block
           md:!block
           xl:block
           2xl:block"
          >
            ÖMER TÜRKER
          </span>
        </div>
        <div
          className="typing-section header-mid   select-none transition hover:bg-type-hover p-3 bg-profile-hover cursor-pointer  rounded-md flex items-center gap-3 
          xs:!hidden 
          md:!hidden
          xl:!block
          2xl:!block"
        >
          <TypingEffect />
        </div>
        <div
          onClick={xsMenuHandler}
          className="xs-area absolute right-[10%] cursor-pointer
            xs:!block 
            md:!hidden
            xl:!hidden
            2xl:!hidden"
        >
          <FaBars size={30} />
          <div className="xs-menu cursor-pointer  flex flex-col justify-center items-center p-5 absolute top-20 -left-9">
            <a onClick={goHome}>Home</a>
            <a onClick={goAbout}>About</a>
            <a onClick={goProjects}>Projects</a>
            <a onClick={goContact}>Contact</a>
            <a onClick={darkModeHandle}>
              <MdDarkMode size={20} />
            </a>
          </div>
        </div>

        <div
          className="header-right mr-10 flex items-centera relative
          xs:hidden 
          md:!flex
          xl:!flex
          2xl:!flex"
        >
          <a
            onClick={goHome}
            className="menu-item cursor-pointer hover:bg-social-hover rounded-md p-4 text-base text-primary-text tracking-wider font-primary-font font-semibold    header-right-menu-item "
          >
            HOME
          </a>
          <a
            onClick={goAbout}
            className=" menu-item cursor-pointer hover:bg-social-hover rounded-md p-4 text-base text-primary-text tracking-wider font-primary-font font-semibold     header-right-menu-item "
          >
            ABOUT
          </a>
          <a
            onClick={goProjects}
            className=" menu-item cursor-pointer hover:bg-social-hover rounded-md p-4 text-base text-primary-text tracking-wider font-primary-font font-semibold    header-right-menu-item "
          >
            PROJECTS
          </a>
          <a
            onClick={goContact}
            className="menu-item cursor-pointer hover:bg-social-hover rounded-md p-4 text-base text-primary-text tracking-wider font-primary-font font-semibold  header-right-menu-item "
          >
            CONTACT ME
          </a>

          <div
            onClick={darkModeHandle}
            className="menu-item color-mode flex flex-row border hover:bg-profile-hover cursor-pointer px-3 border-gray-300 rounded-md items-center justify-center"
          >
            <MdDarkMode
              size={20}
              className="rounded-md font-primary-font semibold transition flex flex-row items-center justify-center  cursor-pointer select-none"
            />
          </div>
        </div>
      </div>
    </>
  );
}
