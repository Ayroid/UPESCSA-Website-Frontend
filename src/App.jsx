import "./App.css";

import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import Csr from "./pages/Csr/Csr";
import Team from "./pages/Team/Team";
import Events from "./pages/Events/Events";
import Blogs from "./pages/Blogs/Blogs";
import Evortal from "./pages/Evortal/Evortal";
import PageNotFound from "./pages/PageNotFound/PageNotFound";

import Contact from "./components/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="mainDiv">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/csr" element={<Csr />} />
        <Route path="/team" element={<Team />} />
        <Route path="/events" element={<Events />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/evortal" element={<Evortal />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Contact />
    </div>
  );
}
export default App;
