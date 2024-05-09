import image1 from '../assets/barbar.screenshot.png'
import image2 from'../assets/bakery.png'
import image3 from'../assets/adventure.png'
import image4 from'../assets/fetch.png'
import image5 from'../assets/lifechoaching.png'
const Projects = () => {
  
  const dummyProjects = [
  
    { id: 1, title: 'Barbar website', description: ' This project is made with the help of hypertext markup language (html) and Casceding style sheet(css) ',image:(image1) ,btn:('https://github.com/sabirunshaik/barbar-project')},
    { id: 2, title: 'Bakery website', description: 'This project is made with the help of hypertext markup language (html) and Casceding style sheet(css)',image:(image2),btn:('https://github.com/sabirunshaik/bakrey') },
    { id: 3, title: 'Adventure website', description: 'This project is made with the help of React.js ,Tailwindcss and React-router-dom ',image:(image3),btn:('https://github.com/sabirunshaik/adventure-programme') },
    { id: 4, title: 'Fetch API', description: 'This project is completed with Fetch apis and javascript(js)',image:(image4),btn:('https://github.com/sabirunshaik/json/commit/15f0a7b8c9ab26e091ea1425fc5078e542c6a035')},
    { id: 5, title: 'Choaching Website', description: ' This project is made with the help of hypertext markup language (html), Casceding style sheet(css) and Javascript js',image:(image5) ,btn:('https://github.com/sabirunshaik/practice/tree/main/coaching')},
  
  ];
  

  return (
    <div className=" container mx-auto my-9 p-4 bg-gradient-to-r from-purple-500 to-pink-500">
      <h2 className="text-4xl font-bold mb-4 underline text-center">MY PROJECTS</h2>
      <ul>
        {dummyProjects.map((project) => (
          <li key={project.id} className="mb-2 border rounded-md bg-blue-300 flex flex-col px-5 md:flex-row items-center justify-between  gap-1 py-3">
            <div className='flex flex-col justify-between items-start  gap-4 md:w-[60%] w-full my-3'>
            <h1 className="text-2xl font-bold underline ">{project.title}</h1>
            <p className="text-xl font-semibold">{project.description}</p>
            <button className='border p-3 px-6 text-white bg-gradient-to-r from-purple-500 to-pink-500 font-bold '> <a href={project.btn} target='_blank' >SEE MORE</a></button>
            </div>
            <div className='md:w-[50%] w-full'>
            <img className='h-[20rem] w-[32rem]' src={project.image} alt="" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
