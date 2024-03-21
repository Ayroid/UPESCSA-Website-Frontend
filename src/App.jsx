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
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <HomePage />
              <Contact />
            </>
          }
        />
        <Route
          path="/csr"
          element={
            <>
              <Navbar />
              <CsrPage />
              <Contact />
            </>
          }
        />
        <Route
          path="/team"
          element={
            <>
              <Navbar />
              <ManagementPage />
              <Contact />
            </>
          }
        />
        <Route
          path="/events"
          element={
            <>
              <Navbar />
              <EventsPage />
              <Contact />
            </>
          }
        />
        <Route
          path="/blogs"
          element={
            <>
              <Navbar />
              <BlogsPage />
              <Contact />
            </>
          }
        />
        <Route
          path="/evortal"
          element={
            <>
              <Navbar />
              <Evortal />
              <Contact />
            </>
          }
        />
        <Route
          path="/registrationSuccess"
          element={
            <>
              <Navbar />
              <RegistrationSuccess />
              <Contact />
            </>
          }
        />
        <Route
          path="/committees"
          element={
            <>
              <Navbar />
              <CommitteePage />
              <Contact />
            </>
          }
        />
        <Route
          path="/committees/*"
          element={
            <>
              <Navbar />
              <CommitteePageIndividual />
              <Contact />
            </>
          }
        />
        <Route
          path="*"
          element={
            <>
              <Navbar />
              <PageNotFound />
              <Contact />
            </>
          }
        />

        {/* EVENT ROUTES */}
        {/* <Route
          path="/evortal/hackersummit"
          element={<>      <Navbar /><HackerSummitRegistrationPage /></>}
        /> */}
        <Route
          path="/evortal/frenzypitch"
          element={
            <>
              <Navbar />
              <FrenzyPitchRegistrationPage />
              <Contact />
            </>
          }
        />
        <Route
          path="/evortal/virtualescaperoom"
          element={
            <>
              <Navbar />
              <VirtualEscapeRoomRegistrationPage />
              <Contact />
            </>
          }
        />
        <Route
          path="/evortal/ultimateshowdown"
          element={
            <>
              <Navbar />
              <UltimateShowdownRegistrationPage />
              <Contact />
            </>
          }
        />
      </Routes>
    </div>
  );
}
export default App;
