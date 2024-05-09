import ProgressBar from"@ramonak/react-progress-bar"
import htmlIcon from '../assets/html-5.png'
import cssIcon from'../assets/css.png.svg'
import javascript from'../assets/javascript.svg'
import tailwindcss from'../assets/tailwind-css.svg'
import reactjs from'../assets/reactpng.png'
const Skills = () => {
  // const skills = ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS', 'React'];
  const skills = [{
    id: 1,
    course:'HTML',
    image:htmlIcon,
    progress: 95

  },
  {
    id: 2,
    course:'CSS',
    image:cssIcon,
    progress: 80

  },
  {
    id: 3,
    course:'JAVASCRIPT',
    image:javascript,
    progress: 70

  },
  {
    id: 4,
    course:'TAILWIND CSS',
    image:tailwindcss,
    progress: 90

  },
  {
    id: 5,
    course:'REACT.JS',
    image:reactjs,
    progress: 88

  },
];

  return (
    <>
    
    <div className="h-full relative">
      <img className=" w-full" src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdlYiUyMGRldmVsb3BtZW50fGVufDB8fDB8fHww" alt="" />
    </div>
    
    <div className="absolute border  text-white p-8 bg-gradient-to-r from-purple-500 to-pink-500 right-[26rem]  w-auto rounded-md mb-2 top-64 ">
      <h2 className="text-2xl font-bold mb-2 underline">Skills</h2>
      <ul className="flex flex-col">
        {skills.map((skill) => (
          <li key={skill.id} className="flex flex-col gap-1 items-start ">
            <img className="w-6 h-6 mt-2" src={skill.image} alt="" />
             <h1 className="font-bold">{skill.course}</h1>
            <div className="z-50 items-center w-96">
            <ProgressBar completed={skill.progress}/>
            </div>
          </li>
        ))}
      </ul>
    </div>
    
    </>
  );
};

export default Skills;
