import { BsChevronDoubleDown } from "react-icons/bs";
export default function Home() {
  return (
    <>
      <div className="about flex flex-col gap-16 justify-center items-center py-20 bg-section-grey-to-white">
        <h1 className="title-1 font-semibold text-6xl font-primary-font text-primary-text tracking-wide">
          WELCOME
        </h1>
        <p className="title-2 font-semibold text-3xl font-primary-font text-primary-text tracking-wide">
          IT'S OMER TURKER'S PORTFOLIO WEBSITE
        </p>
        <button className="">
          <a className="primary-button" href="#">
            Projects
          </a>
        </button>
        <p className="title-3 font-light font-primary-font text-primary-text">
          a front-end developer who develops products with React and shares
          these products as open source
        </p>
        <p className="text-sm font-extralight">
          you can learn more about me by scrolling down
        </p>
        <span className="down-arrow">
          <BsChevronDoubleDown />
        </span>
      </div>
    </>
  );
}
