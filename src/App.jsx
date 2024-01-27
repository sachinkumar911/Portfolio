import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "../src/pages/Home";
import About from "../src/pages/About";
import Projects from "../src/pages/Projects";
import Contact from "../src/pages/Contact";

import Navbar from "./component/Navbar";

function App() {
  return (
    <>
      <main className="bg-slate-300/20 h-full">
        <Router>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/Projects" element={<Projects/>} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
        </Router>
      </main>
    </>
  );
}

export default App;
