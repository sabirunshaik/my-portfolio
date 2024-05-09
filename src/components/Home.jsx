import { useRef, useEffect } from "react";
import myImage from "../assets/sabi.jpeg";
import { init } from "ityped";

const Home = () => {
 
  const textRef = useRef();
  useEffect(() => {
    const element = textRef.current;
    if (element) {
      init(element, {
        showCursor: true,
        strings: ["Sabirun shaik", "React Developer", "Frontend Developer"],
      });
    }
  }, []);

  return (
    <div className="relative container mx-auto my-6 gap-5 md:gap-0 flex flex-col md:flex-row justify-center items-center h-screen w-full p-4 bg-gradient-to-r from-purple-500 to-pink-500">
      <div className="absolute top-20 left-0 z-0 rounded-full w-[25rem] h-[25rem] blur-3xl bg-blue-400"></div>
      <div className="absolute bottom-0 right-0  rounded-full w-[15rem] h-[15rem] blur-2xl bg-purple-400"></div>
      
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
      
      <img className="md:w-1/3 w-full h-[25rem] rounded-full " src={myImage} alt="" />
    </div>
  );
};

export default Home;
