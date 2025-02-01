import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./assets/templates/Home";
import About from "./assets/templates/About";
import Contact from "./assets/templates/Contact";
import Works from "./assets/templates/Works";
import 'animate.css';
import WOW from "wowjs";
import { useEffect, useRef } from "react";

function App() {
  const wowRef = useRef(null); // Creating a ref to the wow instance

  useEffect(() => {
    // Initialize WOW.js with custom options
    const wow = new WOW.WOW({
      live: false, // Disable automatic mutation detection
      callback: function (box) {
        console.log('WOW.js animation started', box);
      },
    });

    // Store WOW instance in the ref to access later
    wowRef.current = wow;

    // Initialize WOW.js
    wow.init();

    // Manually sync WOW.js after React renders content
    setTimeout(() => {
      wow.sync();
    }, 500);  // Small delay to ensure content is fully loaded

    // Cleanup on component unmount
    return () => {
      wowRef.current = null;
    };
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
