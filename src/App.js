import Footer from "./components/Footer";
import SiteContext from "./SiteContext";
import Header from "./components/Header";
import Content from "./components/Content";
import Social from "./components/Social";
import { useEffect, useState } from "react";
function App() {
  const [darkMode, setDarkMode] = useState(false);
  const value = {
    projects: [
      {
        id: 1,
        title: "OpenSea Clone",
        description:
          "I developed the frontend of the OpenSea website, which is widely used in nft shopping, with react. In this project, I made it for the first time using Router and Redux.",
        imgSrc:
          "https://camo.githubusercontent.com/28803e84ecbd0338767de4acb5693774e6cc3b3b3f487ad7f60509180c88414d/68747470733a2f2f696d673030312e70726e747363722e636f6d2f66696c652f696d673030312f3741465133595543514e47467768754b72632d396b772e706e67",
        tags: ["HTML", "CSS", "REACT", "JAVASCRIPT", "REDUX", "SASS/SCSS"],
      },
      {
        id: 2,
        title: "Shiba Clone ",
        description:
          "I made the index page of one of the most popular coins, shiba coin, using only html and css. This is one of my first works.",
        imgSrc:
          "https://camo.githubusercontent.com/d8b66f1469abb79640f1b80506037093016b5928a58da660dd7def2be995c642/68747470733a2f2f696d673030312e70726e747363722e636f6d2f66696c652f696d673030312f594746394458543352624b6a6c6c62624d72363469772e706e67",
        tags: ["HTML", "CSS", "CLONE", "SHIBA", "DESIGN", "BASICS"],
      },
      {
        id: 3,
        title: "Twitter Clone",
        description:
          "I cloned the homepage of twitter, which is one of the most used social media platforms in the world. I used SCSS/SASS for the first time in this project.",

        imgSrc:
          "https://camo.githubusercontent.com/278e42e21e4d4170a0ec9b5105b754b397f29ce7d442415dace2f3206290d775/68747470733a2f2f696d673030312e70726e747363722e636f6d2f66696c652f696d673030312f4861683453635533516f4b33695737316b6e544955412e706e67",
        tags: ["HTML", "CSS", "SASS/SCSS", "REACT", "JAVASCRIPT", "CONTEXT"],
      },
    ],
    darkMode,
    setDarkMode,
  };
  const headerStickyOn = () => {
    const headerLeft = document.querySelector(".header-left");
    const headerLeftImg = document.querySelector(".header-left-img");
    const headerLeftName = document.querySelector(".header-left-name");
    const headerMid = document.querySelector(".header-mid");
    const headerRightMenuItem = document.querySelectorAll(
      ".header-right-menu-item"
    );
    const header = document.querySelector(".header");
    headerLeft.classList.add("header-left-sticky");
    headerLeftImg.classList.add("header-left-img-sticky");
    headerLeftName.classList.add("header-left-name-sticky");
    headerMid.classList.add("header-mid-sticky");
    const menuItems = Array.from(headerRightMenuItem);
    menuItems.forEach((item) => {
      item.classList.add("header-right-menu-item-sticky");
    });

    header.classList.add("header-sticky");
  };
  const headerStickyOff = () => {
    const headerLeft = document.querySelector(".header-left");
    const headerLeftImg = document.querySelector(".header-left-img");
    const headerLeftName = document.querySelector(".header-left-name");
    const headerMid = document.querySelector(".header-mid");
    const headerRightMenuItem = document.querySelectorAll(
      ".header-right-menu-item"
    );
    const header = document.querySelector(".header");

    headerLeftImg.classList.remove("header-left-img-sticky");
    headerLeftName.classList.remove("header-left-name-sticky");
    headerMid.classList.remove("header-mid-sticky");
    const menuItems = Array.from(headerRightMenuItem);
    menuItems.forEach((item) => {
      item.classList.remove("header-right-menu-item-sticky");
    });
    header.classList.remove("header-sticky");
    headerLeft.classList.remove(".header-left-sticky");
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 0) {
        headerStickyOn();
      } else if (window.pageYOffset == 0) {
        headerStickyOff();
      }
    });
  }, []);
  useEffect(() => {
    setDarkMode(false);
  }, []);
  return (
    <SiteContext.Provider value={value}>
      <div className="App">
        <Social />
        <Header />
        <Content />
        <Footer />
      </div>
    </SiteContext.Provider>
  );
}

export default App;
