import bgImage from "../assets/bg-image.png";
const About = ({ para,para2,title }) => {
  return (
    <div className=" h-full w-full border border-l-2 flex flex-col">
      <div className="w-96 h-fit border">
        <h1>{para}</h1>
        <p>{para2}</p>
        <h2>{title}</h2>
      </div>
    </div>
  );
};

export default About;
