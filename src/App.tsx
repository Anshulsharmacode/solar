// src/App.js
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home";
import Navbar from "./components/navbar";
import AboutUs from "./components/AboutUs";
import Register from "./components/register";
import Footer from "./components/footer";
import OfferPopup from "./components/offer";

function App() {
  return (
    <Router>
      <OfferPopup />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
