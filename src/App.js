import Header from "./components/Header";
import Cdtsm from "./components/Cdtsm";
import NavBar from "./components/NavBar";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Projects from "./components/pages/Projects";
import Resume from "./components/pages/Resume";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Footer from "./components/Footer";
import { useState, useEffect } from "react";
// import getWeatherData from "./services/weatherService";
import fetchData from "./services/weatherService";
import axios from "axios";

// const variable
const API_KEY = "a9dd3a26089d4c1bb6163134230408";

function App() {
  const [time, setTime] = useState(new Date());
  // useState variable
  const [data, setData] = useState({});

  // Test my get api function

  //  fetchData("keller");

  //  function to get the weather data
  const fetchData = async (city) => {
    const url =
      "https://api.weatherapi.com/v1/current.json?key=a9dd3a26089d4c1bb6163134230408&q=${keller}";

    try {
      const response = await axios.get(url);

      setData(response.data);

      // console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData("keller");
  }, []);

  return (
    <div className="App">
      <Header />
      <Cdtsm
        data={data}
        month={time.getMonth()}
        day={time.getDate()}
        year={time.getFullYear()}
      />
      <NavBar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/PROJECTS" element={<Projects />} />
        <Route path="/CONTACT" element={<Contact />} />
        <Route path="/resume" element={<Resume/>} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
