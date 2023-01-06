import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillMail,
  AiFillInstagram,
} from "react-icons/ai";
export default function Social() {
  return (
    <>
      <div className="social p-2 fixed flex flex-col top-52 shadow-2xl bg-white  rounded-r-md  gap-6">
        <a
          className="h-auto p-2  transition hover:bg-social-hover rounded-md"
          href="https://github.com/omerturkerweb"
        >
          <AiFillGithub size={30} />
        </a>
        <a
          className="h-auto p-2 transition  hover:bg-social-hover  rounded-md"
          href="https://twitter.com/omerturkerweb"
        >
          <AiFillTwitterCircle size={30} />
        </a>
        <a
          className="h-auto p-2 transition hover:bg-social-hover  rounded-md"
          href="https://www.linkedin.com/in/%C3%B6mer-t%C3%BCrker-44a28124b/"
        >
          <AiFillLinkedin size={30} />
        </a>
        <a
          className="h-auto  p-2 transition hover:bg-social-hover  rounded-md"
          href="mailto:omerturkerweb@gmail.com"
        >
          <AiFillMail size={30} />
        </a>
        <a
          className="h-auto  p-2 transition hover:bg-social-hover  rounded-md"
          href="mailto:omerturkerweb@gmail.com"
        >
          <AiFillInstagram size={30} />
        </a>
      </div>
    </>
  );
}
