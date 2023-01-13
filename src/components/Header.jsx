import TypingEffect from "./TypingEffect";

import { MdDarkMode } from "react-icons/md";
import { BsLightbulb } from "react-icons/bs";
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
  return (
    <>
      <div className="header fixed !min-w-full container shadow-prmiary-light-content-shadow flex justify-between items-center p-3 px-10">
        <div className="header-left transition  hover:bg-profile-hover cursor-pointer px-3 rounded-md flex items-center gap-3 ">
          <img
            className="w-12 h-12   rounded-full header-left-img"
            src={require("../images/selfie.jpg")}
          ></img>
          <span className="p-5  text-lg text-primary-text tracking-wider font-primary-font font-semibold transition  header-left-name">
            ÖMER TÜRKER
          </span>
        </div>
        <div className="header-mid  select-none transition hover:bg-type-hover  bg-profile-hover cursor-pointer p-5 rounded-md flex items-center gap-3">
          <TypingEffect />
        </div>

        <div className="header-right mr-10  flex items-center">
          <a
            onClick={goHome}
            className=" cursor-pointer hover:bg-social-hover rounded-md p-4 text-base text-primary-text tracking-wider font-primary-font font-semibold    header-right-menu-item "
          >
            HOME
          </a>
          <a
            onClick={goAbout}
            className="cursor-pointer hover:bg-social-hover rounded-md p-4 text-base text-primary-text tracking-wider font-primary-font font-semibold     header-right-menu-item "
          >
            ABOUT
          </a>
          <a
            onClick={goProjects}
            className="cursor-pointer hover:bg-social-hover rounded-md p-4 text-base text-primary-text tracking-wider font-primary-font font-semibold    header-right-menu-item "
          >
            PROJECTS
          </a>
          <a
            onClick={goContact}
            className="cursor-pointer hover:bg-social-hover rounded-md p-4 text-base text-primary-text tracking-wider font-primary-font font-semibold  header-right-menu-item "
          >
            CONTACT ME
          </a>

          <div className="color-mode flex flex-row gap-3 mx-2 border border-gray-300 rounded-md p-3">
            <MdDarkMode
              size={20}
              className=" rounded-md font-primary-font semibold transition hover:bg-profile-hover cursor-pointer select-none"
            />
            <BsLightbulb className="hidden active-color rounded-md font-primary-font semibold transition hover:bg-profile-hover cursor-pointer select-none " />
          </div>
        </div>
      </div>
    </>
  );
}