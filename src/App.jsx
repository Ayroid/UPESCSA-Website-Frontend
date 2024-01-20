import "./App.css";

import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import Csr from "./pages/Csr/Csr";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/csr" element={<Csr />} />
    </Routes>
  );
}
export default App;
