import { Route, Routes, useSearchParams } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Nav";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Internship from "./components/Internship";
import ContactForm from "./components/Contact";
import { useState } from "react";

const AppRouter = () => {
  const [darkMode,setDarkMode]=useState(false);

  const toggleDarkMode=()=>{
    setDarkMode (!darkMode);
  }
  return (
    
    <>
      <Navbar />
    
      <div className={`${darkMode &&"dark"}`}>
      <Routes className="dark:text-white dark:bg-bg-gradient-to-r from-sky-500 to-purple-500">
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/internship" element={<Internship />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
      </div>
      {/* <button
      className="absolute w-16 h-16 bottom-16 right-16 bg-neutral-900 dark:bg-white rounded-full text-white dark:text-black font-semibold"
       onClick={toggleDarkMode}>
      {darkMode ?"LHT":"DRK"}
      </button> */}
    </>
  );
};

export default AppRouter;
