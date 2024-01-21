import "./App.css";

import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import Csr from "./pages/Csr/Csr";
import Contact from "./components/Contact/Contact";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <>
      <Navbar />
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/csr" element={<Csr />} />
          <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Contact />
    </>
    </>
  );
}
export default App;
