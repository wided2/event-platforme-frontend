import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Remise from "./components/Remise/Remise";
import EventsSection from "./components/Filtrer/EventsSection";
import Inscrire from "./components/Inscrire/Inscrire";
import Description from "./components/Description/TEAM";
import Footer from "./components/Footer/Footer";
import Livechat  from "./components/Feedback/Livechat";
import CardSection from "./components/lesPages/CardSection";
import CookieConsent from "./components/Cookie/CookieConsent";
import Admin from "./components/Dashbord/Admin";
import Gestionnaire from "./components/Dashbord/Gestionnaire";

import AOS from "aos";
import "aos/dist/aos.css";

import Card1 from "./components/lesPages/Card1";
import Card2 from "./components/lesPages/Card2";
import Card3 from "./components/lesPages/Card3";
import Card4 from "./components/lesPages/Card4";
import Card5 from "./components/lesPages/Card5";
import Education from "./components/Categorie/Education";
import Celebrations from "./components/Categorie/Celebrations";
import Culture from "./components/Categorie/Culture";
import Ecologie from "./components/Categorie/Ecologie";
import Sport from "./components/Categorie/Sport";
import Professionnel from "./components/Categorie/Professionnel";
import Marches from "./components/Categorie/Marches";
import Communautaire from "./components/Categorie/Communautaire";






import Popup from "./components/Popup/Popup";
import Utilisateurs from "./components/Utilisateur/Utilisateurs"; // Ajout du Dashboard
import UpdateProfil from "./components/Utilisateur/updateProfil";

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
     
      <CookieConsent/>
    <Livechat/>
      
     
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
        <Route path="/Education-et-Formation" element={<Education />} />
        <Route path="/Culture-et-Loisirs" element={<Culture />} />
        <Route path="/Celebrations-et-Fêtes" element={<Celebrations />} />
        <Route path="/Ecologie-et-Environnement" element={<Ecologie />} />
        <Route path="/Sport-et-Bien-être" element={<Sport />} />
        <Route path="/Professionnel" element={<Professionnel />} />
        <Route path="/Marches-et-Foires" element={<Marches/>} />
        <Route path="/Communautaire-et-Caritatif" element={<Communautaire/>} />
        <Route path="/" element={<Home />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/Gestionnaire" element={<Gestionnaire />} />
        <Route path="/UpdateProfil" element={<UpdateProfil/>} />

       

      </Routes>
    </Router>
  );
};

export default App;
