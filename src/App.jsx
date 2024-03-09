import "./App.css";

import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import CsrPage from "./pages/CsrPage/CsrPage";
import CommitteePageIndividual from "./pages/CommitteePageIndividual/CommitteePageIndividual";
import EventsPage from "./pages/EventsPage/EventsPage";
import BlogsPage from "./pages/BlogsPage/BlogsPage";
import Evortal from "./pages/EvortalPage/EvortalPage";
import PageNotFound from "./pages/PageNotFound/PageNotFound";

import Contact from "./components/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import ManagementPage from "./pages/TeamPage/TeamPage";
import CommitteePage from "./pages/CommitteePage/CommitteePage";
// import HackerSummitRegistrationPage from "./pages/EventRegistrationPage/HackerSummitRegistrationPage";
import FrenzyPitchRegistrationPage from "./pages/EventRegistrationPage/FrenzyPitchRegistrationPage";
import UltimateShowdownRegistrationPage from "./pages/EventRegistrationPage/UltimateShowDownRegistrationPage";
import VirtualEscapeRoomRegistrationPage from "./pages/EventRegistrationPage/VirtualEscapeRoomRegistrationPage";

import RegistrationSuccess from "./pages/RegistrationSuccess/RegistrationSuccess";

function App() {
  return (
    <div className="mainDiv">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/csr" element={<CsrPage />} />
        <Route path="/team" element={<ManagementPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/evortal" element={<Evortal />} />
        <Route path="/registrationSuccess" element={<RegistrationSuccess />} />
        <Route path="/committees" element={<CommitteePage />} />
        <Route path="/committees/*" element={<CommitteePageIndividual />} />
        <Route path="*" element={<PageNotFound />} />

        {/* EVENT ROUTES */}
        {/* <Route
          path="/evortal/hackersummit"
          element={<HackerSummitRegistrationPage />}
        /> */}
        <Route
          path="/evortal/frenzypitch"
          element={<FrenzyPitchRegistrationPage />}
        />
        <Route
          path="/evortal/virtualescaperoom"
          element={<VirtualEscapeRoomRegistrationPage />}
        />
        <Route
          path="/evortal/theultimateshowdown"
          element={<UltimateShowdownRegistrationPage />}
        />
      </Routes>
      <Contact />
    </div>
  );
}
export default App;
