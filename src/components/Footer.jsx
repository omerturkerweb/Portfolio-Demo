import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillMail,
  AiFillInstagram,
} from "react-icons/ai";

export default function Footer() {
  return (
    <>
      <div className="footer w-full bg-black p-10 flex flex-col items-center justify-center">
        <div className="footer-top">
          <span className="footer-info text-white font-primary-font block">
            This website was developed by front-end developer /
            <a href="https://twitter.com/omerturkerweb" className="underline">
              Ömer TÜRKER
            </a>
            .
          </span>
          <div
            style={{ height: "1px" }}
            className="hr w-30 my-10 bg-white"
          ></div>
        </div>
        <div className="footer-bottom flex flex-row gap-3 cursor-pointer">
          <a href="https://github.com/omerturkerweb" target="_blank">
            <AiFillGithub size={30} color="white" />
          </a>
          <a target="_blank" href="https://twitter.com/omerturkerweb">
            <AiFillTwitterCircle size={30} color="white" />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/%C3%B6mer-t%C3%BCrker-44a28124b/"
          >
            <AiFillLinkedin size={30} color="white" />
          </a>

          <a target="_blank" href="https://www.instagram.com/omerturker.dev/">
            <AiFillInstagram size={30} color="white" />
          </a>

          <a target="_blank" href="mailto:omerturkerweb@gmail.com">
            <AiFillMail size={30} color="white" />
          </a>
        </div>
        <div className="">
          <span className="rights text-white font-primary-font pt-3 text-sm block">
            @Copyright. All rights reserved.
          </span>
        </div>
      </div>
    </>
  );
}
