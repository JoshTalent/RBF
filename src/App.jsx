
import {  Routes, Route } from "react-router-dom";

// import files
import About from "./pages/About";
import Events from "./pages/events";
import News from "./pages/news";
import Home from "./pages/Home";
import Portifolio from "./pages/portifolio";
import Project from "./pages/project";
import Clubs from "./pages/clubs";
import Contact from "./pages/contact"

const App = () => {
  return (
    <>
        <Routes>
          <Route path="/" element={<Home />} ></Route>
          <Route path="/about" element={<About />} ></Route>
          <Route path="/news" element={<News />} ></Route>
          <Route path="/events" element={<Events />} ></Route>
          <Route path="/Portifolio" element={<Portifolio />} ></Route>
          <Route path="/projects" element={<Project />} ></Route>
          <Route path="/clubs" element={<Clubs />} ></Route>
          <Route path="/contact" element={<Contact />} ></Route>
        </Routes>
    </>
  );
};

export default App;
