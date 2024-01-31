import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4 md:flex md:justify-between items-center">
      <div className="flex items-center justify-between">
        <div className="text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-12 h-12 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0"
            />
          </svg>
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
        } md:flex md:items-center gap-3`}
      >
        <Link
          to={"/"}
          className="text-white block py-1 mt-3 md:mt-0 hover:bg-slate-950 border w-fit px-3"
        >
          Home
        </Link>
        <Link
          to={"/projects"}
          className="text-white block py-1 mt-3 md:mt-0 hover:bg-slate-950 border w-fit px-3"
        >
          Projects
        </Link>
        <Link
          to={"/skills"}
          className="text-white block py-1 mt-3 md:mt-0 hover:bg-slate-950 border w-fit px-3"
        >
          Skills
        </Link>
        <Link
          to={"/internship"}
          className="text-white block py-1 mt-3 md:mt-0 hover:bg-slate-950 border w-fit px-3"
        >
          Internship
        </Link>
        <Link
          to={"/contact"}
          className="text-white block py-1 mt-3 md:mt-0 hover:bg-slate-950 border w-fit px-3"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
