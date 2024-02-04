import "./App.css";

import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import CsrPage from "./pages/CsrPage/CsrPage";
import TeamPage from "./pages/TeamPage/TeamPage";
import CommitteePageIndividual from "./pages/CommitteePageIndividual/CommitteePageIndividual";
import EventsPage from "./pages/EventsPage/EventsPage";
import BlogsPage from "./pages/BlogsPage/BlogsPage";
import Evortal from "./pages/EvortalPage/EvortalPage";
import PageNotFound from "./pages/PageNotFound/PageNotFound";

import Contact from "./components/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="mainDiv">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/csr" element={<CsrPage />} />
        <Route path="/team" element={<TeamPage activeTab={"team"} />} />
        <Route
          path="/committee"
          element={<TeamPage activeTab={"committee"} />}
        />
        <Route path="/team/*" element={<CommitteePageIndividual />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/evortal" element={<Evortal />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Contact />
    </div>
  );
}
export default App;
