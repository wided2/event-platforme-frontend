import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Remise from "./components/Remise/Remise";
import EventsSection from "./components/Filtrer/EventsSection";
import Inscrire from "./components/Inscrire/Inscrire";
import Description from "./components/Description/Description";
import Footer from "./components/Footer/Footer";

import AOS from "aos";
import "aos/dist/aos.css";

import Card1 from "./components/lesPages/Card1";
import Card2 from "./components/lesPages/Card2";
import Card3 from "./components/lesPages/Card3";
import Card4 from "./components/lesPages/Card4";
import Card5 from "./components/lesPages/Card5";
import CardSection from "./components/lesPages/CardSection";

import Popup from "./components/Popup/Popup";
import Utilisateurs from "./components/Dashbord/Utilisateurs"; // Ajout du Dashboard

const Home = () => {
  const [orderPopup, setOrderPopup] = useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  return (
    <>
      <Navbar handleOrderPopup={handleOrderPopup} />
      <Remise handleOrderPopup={handleOrderPopup} />
      <CardSection />
      <EventsSection />
      <Inscrire />
      <Description />
      <Footer />
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </>
  );
};

const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Card1" element={<Card1 />} />
        <Route path="/Card2" element={<Card2 />} />
        <Route path="/Card3" element={<Card3 />} />
        <Route path="/Card4" element={<Card4 />} />
        <Route path="/Card5" element={<Card5 />} />
        <Route path="/Utilisateurs" element={<Utilisateurs />} /> 
      </Routes>
    </Router>
  );
};

export default App;
