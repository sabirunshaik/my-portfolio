import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Nav";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Internship from "./components/Internship";
import ContactForm from "./components/Contact";

const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/internship" element={<Internship />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
    </>
  );
};

export default AppRouter;
