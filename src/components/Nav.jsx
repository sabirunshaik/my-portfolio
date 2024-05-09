import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4 md:flex md:justify-between items-center ">
      <div className="flex items-center justify-between md:flex-col">
        <div className="text-white bg-black text-3xl p-3 font-bold font-serif rounded">
          <h1>$abirun $haik</h1>
           
        </div>
        {/* Display SVG toggle on mobile */}
        <div
          className="cursor-pointer text-white md:hidden"
          onClick={handleToggle}
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 hover:text-gray-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 hover:text-gray-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
              />
            </svg>
          )}
        </div>
      </div>

      {/* Display navigation links on desktop */}
      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } md:flex md:flex-row flex-col items-center md:items-center gap-3 text-center`}
      >
        <Link
          to={"/"}
          className="text-white block py-1 mt-3 md:mt-0 hover:bg-slate-950 border w-full px-3"
        >
          Home
        </Link>
        <Link
          to={"/projects"}
          className="text-white block py-1 mt-3 md:mt-0 hover:bg-slate-950 border w-full px-3"
        >
          Projects
        </Link>
        <Link
          to={"/skills"}
          className="text-white block py-1 mt-3 md:mt-0 hover:bg-slate-950 border w-full px-3"
        >
          Skills
        </Link>
        <Link
          to={"/internship"}
          className="text-white block py-1 mt-3 md:mt-0 hover:bg-slate-950 border w-full px-3"
        >
          Internship
        </Link>
        <Link
          to={"/contact"}
          className="text-white block py-1 mt-3 md:mt-0 hover:bg-slate-950 border w-full px-3"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
