import React, { useState } from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import Image1 from "./../assets/evenement/coaching.jpg";
import Image2 from "../assets/evenement/communauté.jpg";
import Image3 from "./../assets/evenement/Nettoyages.jpg";
import Image4 from "./../assets/evenement/Professionnel.jpg";
import Image5 from "./../assets/evenement/sport.jpg";
import Image6 from "./../assets/evenement/Célébrations et Fêtes.jpg";
import Image7 from "./../assets/evenement/Communautaire et Caritatif.jpg";
import Image8 from "./../assets/evenement/Éducation .jpg";
import Image9 from "./../assets/evenement/Marchés et Foires.jpg";
import { Link } from "react-router-dom";
import { Filter, CalendarDays, FolderOpen } from "lucide-react";


const eventsData = [
  {
    title: "Le coaching",
    description: "Accompagnement personnalisé pour atteindre vos objectifs.",
    category: "Éducation et Formation",
    date: "2025-03-12",
    img: Image1,
    path: "/card1",
  },
  {
    title: "Atelier bien-être",
    description: "Découverte des techniques de relaxation.",
    category: "Culture et Loisirs",
    date: "2025-03-15",
    img: Image2,
    path: "/card2",
  },
  {
    title: "Rencontre Pro",
    description: "Conférence entre experts.",
    category: "Professionnel",
    date: "2025-03-15",
    img: Image3,
    path: "/card3",
  },
  {
    title: "Cours Yoga",
    description: "Bien-être et relaxation.",
    category: "Sport et Bien-être",
    date: "2025-03-15",
    img: Image4,
    path: "/card4",
  },
  {
    title: "Solidarité locale",
    description: "Rencontre associative.",
    category: "Communautaire et Caritatif",
    date: "2025-03-15",
    img: Image5,
    path: "/card5",
  },
  {
    title: "Nettoyage de plage",
    description: "Action pour l'environnement.",
    category: "Écologie et Environnement",
    date: "2025-03-15",
    img: Image6,
    path: "/card5",
  },
  {
    title: "Fête locale",
    description: "Événement festif et convivial.",
    category: "Célébrations et Fêtes",
    date: "2025-03-15",
    img: Image7,
    path: "/card3",
  },
  {
    title: "Marché artisanal",
    description: "Foire locale et artisanat.",
    category: "Marchés et Foires",
    date: "2025-03-15",
    img: Image8,
    path: "/caard4",
  },
  {
    title: "Hackathon",
    description: "Compétition tech & innovation.",
    category: "Technologie et Innovation",
    date: "2025-03-15",
    img: Image9,
    path: "/card1",
  },
];

const Event = () => {
  const categories = [...new Set(eventsData.map((e) => e.category))];
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");

  // Réinitialiser les filtres
  const resetFilters = () => {
    setSelectedDate("");
    setSelectedCategories([]); // <- ici on réinitialise correctement le tableau
  };
  

  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const filteredEvents = eventsData.filter((event) => {
    const isCategoryMatch =
      selectedCategories.length === 0 || selectedCategories.includes(event.category);
    const isDateMatch = !selectedDate || event.date === selectedDate;
    return isCategoryMatch && isDateMatch;
  });

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow container mx-auto px-4 py-10 flex gap-6">
        {/* Filtres */}
        <aside>
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Filter className="w-5 h-5 text-orange-500" /> Filtres
          </h2>

          {/* Filtrage par catégories */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Catégories</h3>
            <div className="space-y-2">
              {categories.map((category, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id={category}
                    checked={selectedCategories.includes(category)}
                    onChange={() => handleCategoryChange(category)}
                    className="accent-orange-500"
                  />
                  <label htmlFor={category} className="text-sm text-gray-700">
                    {category}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Filtrage par date */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Date</h3>
            <input
              type="date"
              value={selectedDate}
              onChange={handleDateChange}
              className="w-full px-2 py-1 border border-gray-300 rounded-md text-sm"
            />
          </div>
            {/* Bouton de réinitialisation */}
            <button
  onClick={resetFilters}
  className="bg-orange-700 text-white px-4 py-2 rounded hover:bg-orange-400 transition-all duration-200 active:scale-95"
>
  Réinitialiser
</button>

        </aside>

        {/* Liste des événements */}
        <section className="flex-grow">
          <h1 className="text-3xl font-bold mb-8 text-center text-gray-800 flex items-center justify-center gap-2">
            <CalendarDays className="w-6 h-6 text-orange-500" /> Événements à venir
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.length > 0 ? (
              filteredEvents.map((event, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow hover:shadow-lg p-4 transition duration-200"
                >
                  <img
                    src={event.img}
                    alt={event.title}
                    className="w-full h-40 object-cover rounded-lg"
                  />
                  <h3 className="text-lg font-bold text-gray-800 mt-3">{event.title}</h3>
                  <p className="text-sm text-gray-600">{event.description}</p>
                  <div className="text-sm text-gray-500 mt-2 space-y-1">
                    <div>
                      <FolderOpen className="inline w-4 h-4 mr-1 text-gray-500" />
                      {event.category}
                    </div>
                    <div>
                      <CalendarDays className="inline w-4 h-4 mr-1 text-gray-500" />
                      {event.date}
                    </div>
                  </div>
                  <Link
                    to={event.path}
                    className="mt-4 inline-block bg-orange-400 text-white px-4 py-2 rounded hover:bg-gray-800"
                    aria-label={`Read more about the event: ${event.title}`}
                  >
                    Read More
                  </Link>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500 col-span-full">
                Aucun événement trouvé.
              </p>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Event;
