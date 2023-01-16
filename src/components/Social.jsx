import { useContext } from "react";
import siteContext from "../SiteContext";
import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillMail,
  AiFillInstagram,
} from "react-icons/ai";
import { useEffect } from "react";
export default function Social() {
  const { darkMode, switchTheme } = useContext(siteContext);
  useEffect(() => {
    if (switchTheme) {
      const social = document.querySelector(".social");
      social.classList.toggle("dark-mode");
    }
  }, [darkMode]);
  return (
    <>
      <div
        className="social p-2 fixed flex flex-col top-52 left-0 shadow-2xl bg-white  rounded-r-md  gap-6
          xs:p-1
          md:p-2
          xl:p-2         
          2xl:p-2
          "
      >
        <a
          className="social-item h-auto transition hover:bg-social-hover rounded-md
            xs:p-0
            md:p-2
            xl:p-2         
            2xl:p-2
          "
          href="https://github.com/omerturkerweb"
        >
          <AiFillGithub size={30} />
        </a>
        <a
          className="social-item h-auto  transition  hover:bg-social-hover  rounded-md
            xs:p-0
            md:p-2
            xl:p-2         
            2xl:p-2
          "
          href="https://twitter.com/omerturkerweb"
        >
          <AiFillTwitterCircle size={30} />
        </a>
        <a
          className="social-item h-auto   transition hover:bg-social-hover  rounded-md
            xs:p-0
            md:p-2
            xl:p-2         
            2xl:p-2
          "
          href="https://www.linkedin.com/in/%C3%B6mer-t%C3%BCrker-44a28124b/"
        >
          <AiFillLinkedin size={30} />
        </a>
        <a
          className="social-item h-auto  transition hover:bg-social-hover  rounded-md
          xs:p-0
          md:p-2
          xl:p-2         
          2xl:p-2         
          "
          href="mailto:omerturkerweb@gmail.com"
        >
          <AiFillMail size={30} />
        </a>
        <a
          className="social-item h-auto  transition hover:bg-social-hover  rounded-md
            xs:p-0
            md:p-2
            xl:p-2         
            2xl:p-2
          "
          href="https://www.instagram.com/omerturker.dev/"
        >
          <AiFillInstagram size={30} />
        </a>
      </div>
    </>
  );
}
