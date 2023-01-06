import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

export default function Content() {
  return (
    <>
      <div className=" content container w-full  bg-white mx-auto pt-10  shadow-prmiary-light-content-shadow">
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
    </>
  );
}
