import { Routes, Route } from "react-router-dom";

// import files
// about dropdown
import Excome from "./components/about/excome";
import About from "./components/about/About";
import History from "./components/about/history";
import Reports from "./components/about/Reports";
import Partiners from "./components/about/Partiners";
import ProjectPage from "./components/about/project"
import Judges from "./components/about/judges";

// athelets dropdown
import National from "./components/athelets/National";
import Others from "./components/athelets/Others";
import Rankings from "./components/athelets/Rankings";

// competition dropdown
import Upcoming from "./components/competition/Upcoming";
import Result from "./components/competition/Result";

// get Involved dropdown
import Clubs from "./components/getInvolved/Clubs";
import Membership from "./components/getInvolved/membership";
import CoachEducation from "./components/getInvolved/CoachEducation";
import Promoters from "./components/getInvolved/Promoters";

// media dropdown
import Gallery from "./components/Media/Gallery";
import VideoGallery from "./components/Media/VideoGallery";
import PressKit from "./components/Media/PressKit";

// Rources dropdown
import Documents from "./components/resources/Documents";
import AntiDoping from "./components/resources/AntiDoping";
import Rules from "./components/resources/Rules";

import Home from "./pages/Home";

import Contact from "./pages/contact";

const App = () => {
  return (
    <>
      <Routes>
        {/* starting Route */}
        <Route path="/" element={<Home />}></Route>

        {/* About routes  */}
        <Route path="/about" element={<About />}></Route>
        <Route path="/about/excome" element={<Excome />}></Route>
        <Route path="/about/history" element={<History />}></Route>
        <Route path="/about/reports" element={<Reports />}></Route>
        <Route path="/about/partners" element={<Partiners />}></Route>
        <Route path="/about/projects" element={<ProjectPage />}></Route>
        <Route path="/about/judges" element={<Judges />}></Route>

        {/* athelets */}
        <Route path="/athletes/national-team" element={<National />}></Route>
        <Route path="/athletes/profiles" element={<Others />}></Route>
        <Route path="/athletes/rankings" element={<Rankings />}></Route>

        {/* competition */}
        <Route path="/competitions/upcoming" element={<Upcoming />}></Route>
        <Route path="/competitions/results" element={<Result />}></Route>

        {/* get involved */}
        <Route path="/clubs" element={<Clubs />}></Route>
        <Route path="/membership" element={<Membership />}></Route>
        <Route path="/coach-education" element={<CoachEducation />}></Route>
        <Route path="/promoter" element={<Promoters />}></Route>

        {/* media */}
        <Route path="/media/photos" element={<Gallery />}></Route>
        <Route path="/media/videos" element={<VideoGallery />}></Route>
        <Route path="/media/press-kit" element={<PressKit />}></Route>

        {/* Rources */}
        <Route path="/resources/anti-doping" element={<AntiDoping />}></Route>
        <Route path="/resources/rules" element={<Rules />}></Route>
        <Route path="/resources/documents" element={<Documents />}></Route>

        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </>
  );
};

export default App;
