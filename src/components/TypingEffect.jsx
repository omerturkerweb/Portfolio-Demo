import ReactTypingEffect from "react-typing-effect";

export default function TypingEffect() {
  const myArr = [
    "I still open to work. ✍️ ",
    "I currently improving my front-end and ui/ux skills. 📝",
    "I living in istanbul and im 22 years old. 🌍",
    "You can contact me using with social icons below.💡",
    "My skills : Html5,Css3,Bootstrap,Javascript,React,Tailwind,Sass/Scss 🎨",
  ];
  return (
    <>
      <ReactTypingEffect
        speed={100}
        eraseSpeed={100}
        eraseDelay={5000}
        typingDelay={1000}
        text={myArr}
        displayTextRenderer={(text, index) => {
          if (index !== 5) {
            return (
              <span className="font-primary-font tracking-wide select-none">
                {text}
              </span>
            );
          }
        }}
      />
    </>
  );
}
