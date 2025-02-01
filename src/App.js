import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./assets/templates/Home";
import About from "./assets/templates/About";
import Contact from "./assets/templates/Contact";
import Works from "./assets/templates/Works";
import 'animate.css';
import WOW from "wowjs";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const wow = new WOW.WOW();
    wow.init();
  }, []);
  
  return (
    <div className="App">
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path='/works' element={<Works />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
