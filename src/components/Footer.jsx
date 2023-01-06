import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillMail,
  AiFillInstagram,
} from "react-icons/ai";

const iconValue = {
  color: "white",
};

export default function Footer() {
  return (
    <>
      <div className="footer w-full bg-black p-10 flex flex-col items-center justify-center">
        <div className="footer-top">
          <span className="text-white font-primary-font block">
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
          <AiFillGithub size={30} color="white" />

          <AiFillTwitterCircle size={30} color="white" />

          <AiFillLinkedin size={30} color="white" />

          <AiFillInstagram size={30} color="white" />

          <AiFillMail size={30} color="white" />
        </div>
        <div className="">
          <span className="text-white font-primary-font pt-3 text-sm block">
            @Copyright. All rights reserved.
          </span>
        </div>
      </div>
    </>
  );
}
