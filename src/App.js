import { useEffect, useRef } from "react";
import WOW from "wowjs";  // Make sure WOW.js is imported properly
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./assets/templates/Home";
import About from "./assets/templates/About";
import Contact from "./assets/templates/Contact";
import Works from "./assets/templates/Works";

function App() {
  const wowRef = useRef(null);  // Creating a ref to the wow instance

  useEffect(() => {
    const wow = new WOW.WOW({
      live: false,  // Disable mutation observer
      callback: function (box) {
        console.log('WOW.js animation started', box);
      },
    });

    wowRef.current = wow;

    wow.init();

    wow.sync();

    return () => {
      wowRef.current = null;
    };
  }, []);

  return (
    <div className="App">
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route path="/my-portfolio-works" element={<Home />} />
            <Route path='/my-portfolio-works/about' element={<About />} />
            <Route path="/my-portfolio-works/contact" element={<Contact />} />
            <Route path='/my-portfolio-works/works' element={<Works />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
