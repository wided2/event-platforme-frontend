import React, { useState } from "react";
import Image1 from "../../assets/evenement/coaching.jpg";
import Image2 from "../../assets/evenement/communauté.jpg";
import Image3 from "../../assets/evenement/Nettoyages.jpg";
import Image4 from "../../assets/evenement/Professionnel.jpg";
import Image5 from "../../assets/evenement/sport.jpg";
import Image6 from "../../assets/evenement/Célébrations et Fêtes.jpg";
import Image7 from "../../assets/evenement/Communautaire et Caritatif.jpg";
import Image8 from "../../assets/evenement/Éducation .jpg";
import Image9 from "../../assets/evenement/Marchés et Foires.jpg";
import Image10 from "../../assets/evenement/Formation.jpg";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import EventCard from "./EventCard";

const events = [
  { id: 1, img: Image1, title: "coaching", date: "19/02/2025", location: "sfax" },
  { id: 2, img: Image2, title: "communauté", date: "19/02/2025", location: "ariena " },
  { id: 3, img: Image3, title: "Nettoyages ", date: "19/02/2025", location: "nabeul:kélibia" },
  { id: 4, img: Image4, title: "Professionnel", date: "20/02/2025", location: "centre urbain" },
  { id: 5, img: Image5, title: "sport", date: "20/02/2025", location: "sousse" },
  { id: 6, img: Image6, title: "Célébrations et Fêtes", date: "18/02/2025", location: "sousse" },
  { id: 7, img: Image7, title: "Communautaire et Caritatif", date: "20/02/2025", location: "monastirnabeul:hammamet" },
  { id: 8, img: Image8, title: "Éducation ", date: "22/02/2025", location: "Sfax" },
  { id: 9, img: Image9, title: "Marchés et Foires", date: "22/02/2025", location: "Béja" },
  { id: 10, img: Image10, title: "Formation", date: "23/02/2025", location: "centre elif" },
];

const EventsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filteredEvents, setFilteredEvents] = useState(events);
  const [selectedFilter, setSelectedFilter] = useState(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredEvents.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredEvents.length) % filteredEvents.length);
  };

  const filterEvents = (filterType) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Réinitialiser l'heure à minuit
  
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0); // Réinitialiser l'heure à minuit
  
    const weekendStart = new Date(today);
    weekendStart.setDate(today.getDate() + (6 - today.getDay()));
    weekendStart.setHours(0, 0, 0, 0);
  
    const weekendEnd = new Date(weekendStart);
    weekendEnd.setDate(weekendStart.getDate() + 1);
    weekendEnd.setHours(23, 59, 59, 999); // La fin du week-end
  
    let filtered;//Initialisation de la variable
    if (filterType === "today") {
      filtered = events.filter((event) => {
        const eventDate = new Date(event.date.split("/").reverse().join("-"));
        eventDate.setHours(0, 0, 0, 0); // Réinitialiser l'heure de l'événement à minuit
        return eventDate.getTime() === today.getTime();
      });
    } else if (filterType === "tomorrow") {
      filtered = events.filter((event) => {
        const eventDate = new Date(event.date.split("/").reverse().join("-"));
        eventDate.setHours(0, 0, 0, 0); // Réinitialiser l'heure de l'événement à minuit
        return eventDate.getTime() === tomorrow.getTime();
      });
    } else if (filterType === "weekend") {
      filtered = events.filter((event) => {
        const eventDate = new Date(event.date.split("/").reverse().join("-"));
        eventDate.setHours(0, 0, 0, 0);
        return eventDate >= weekendStart && eventDate <= weekendEnd;
      });
    } else {
      filtered = events;
    }
  
    setFilteredEvents(filtered);
    setCurrentIndex(0);
    setSelectedFilter(filterType);
  };
  
  return (
    <div className="w-full py-10 bg-white">
      <h2 className="text-2xl font-bold text-center text-orange-400 uppercase">
        Vos sorties à Issy-les-Moulineaux
      </h2>

      <div className="flex justify-center space-x-2 my-4">
        <button
          onClick={() => filterEvents("today")}
          className={`px-4 py-2 rounded-md ${selectedFilter === "today" ? "bg-orange-600 text-white" : "border"}`}
        >
          Aujourd'hui
        </button>
        <button
          onClick={() => filterEvents("tomorrow")}
          className={`px-4 py-2 rounded-md ${selectedFilter === "tomorrow" ? "bg-orange-600 text-white" : "border"}`}
        >
          Demain
        </button>
        <button
          onClick={() => filterEvents("weekend")}
          className={`px-4 py-2 rounded-md ${selectedFilter === "weekend" ? "bg-orange-600 text-white" : "border"}`}
        >
          Ce week-end
        </button>
      </div>

      <div className="relative max-w-5xl mx-auto">
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-white shadow-md rounded-full"
        >
          <FaChevronLeft />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {filteredEvents.slice(currentIndex, currentIndex + 3).map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-white shadow-md rounded-full"
        >
          <FaChevronRight />
        </button>
      </div>

      
    </div>
  );
};

export default EventsSection;
