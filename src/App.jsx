import React from "react" ;
import {Routes, Route } from "react-router-dom"; 
import Navbar from "./components/Navbar/Navbar";
import Remise from "./components/Remise/Remise";
import Evenement from "./components/Evenement/Evenement";
import EventsSection from "./components/Filtrer/EventsSection";
import Inscrire from "./components/Inscrire/Inscrire";
import Description from "./components/Description/Description";
import Footer from "./components/Footer/Footer";


import AOS from "aos";
import "aos/dist/aos.css";
import EventDetail from "./pages/eventDetail/EventDetail";

const App =() => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
  <div >
    
    <Navbar/>
    <Remise/>
    <Routes>
    <Evenement/>
   
   </Routes>
    <EventsSection/>
    <Inscrire/>
    <Description/>
   <Footer/>
   

  </div>
  );
 };
 export default App ;
