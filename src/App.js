import Header from "./components/Header";
import Cdtsm from './components/Cdtsm';
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Cdtsm />
      <NavBar />

    </div>
  );
}

export default App;
