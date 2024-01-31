import { useRef, useEffect } from "react";
import myImage from "../assets/profileimage.png";
import { init } from "ityped";

const Home = () => {
  // const [displayText, setDisplayText] = useState("Hello, I am Samir");
  const textRef = useRef();
  useEffect(() => {
    const element = textRef.current;
    if (element) {
      init(element, {
        showCursor: true,
        strings: ["Name", "React Developer", "Frontend Developer"],
      });
    }
  }, []);

  return (
    <div className="container relative gap-5 md:gap-0 flex flex-col md:flex-row justify-center items-center h-full mx-auto p-4">
      <div className="absolute top-20 left-0 z-0 rounded-full w-[25rem] h-[25rem] blur-2xl bg-blue-100"></div>
      <div className="absolute bottom-0 right-0 z-0 rounded-full w-[15rem] h-[15rem] blur-2xl bg-purple-500"></div>
      <div className="md:w-1/2 w-full text-black z-10">
        <h1 className="text-3xl font-bold mb-4">
          Hello, I am <span ref={textRef}></span>{" "}
        </h1>
        <div></div>
        <p className="text-lg">
          Welcome to my portfolio! I am a passionate developer with experience
          in HTML, CSS, JavaScript, Tailwind CSS, and React. Check out my
          projects and skills below.
        </p>
      </div>
      {/* <img className="md:w-1/2 w-full h-[25rem] z-10" src={myImage} alt="" /> */}
      <img className="md:w-1/2 w-full h-[25rem] rounded-lg z-10" src="https://marketplace.canva.com/EAFu3pqFr-k/1/0/1600w/canva-pink-and-blue-neon-facebook-profile-picture-dKTM-ks2g_c.jpg" alt="" />
    </div>
  );
};

export default Home;
