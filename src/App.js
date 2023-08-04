import Header from "./components/Header";
import Cdtsm from "./components/Cdtsm";
import NavBar from "./components/NavBar";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Projects from "./components/pages/Projects";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AiFillLinkedin } from "react-icons/ai";
import { useState, useEffect } from "react";
// import getWeatherData from "./services/weatherService";
import fetchData from "./services/weatherService";

function App() {
  const [time, setTime] = useState(new Date());

  // Test my get api function
  
fetchData();

  return (
    <div className="App">
      <Header />
      <Cdtsm
        month={time.getMonth()}
        day={time.getDate()}
        year={time.getFullYear()}
      />
      <NavBar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/PROJECTS" element={<Projects />} />
        <Route path="/CONTACT" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
