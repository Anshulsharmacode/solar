// src/App.js
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home";
import Navbar from "./components/navbar";
import AboutUs from "./components/AboutUs";
import Register from "./components/register";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/register" element={< Register />} />


        
      </Routes>
    </Router>
  );
}

export default App;
