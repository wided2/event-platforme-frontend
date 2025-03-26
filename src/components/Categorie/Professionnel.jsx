import React, { useState } from 'react';
import Navbar from "../Navbar/Navbar"; // Import du composant Navbar
import Footer from "../Footer/Footer"; // Import du composant Footer
import DatePicker from "react-datepicker"; // Import du calendrier
import "react-datepicker/dist/react-datepicker.css"; // Styles pour le calendrier

// Exemple d'événements
const events = [
  { id: 1, name: "Fête d'anniversaire", day: "Lundi", category: "Conférences", date: "2025-03-17" },
  { id: 2, name: "Réunion",  category: "Sessions de networking", date: "2025-03-17" },
  { id: 3, name: "Festival de musique", category: "Sessions de networking", date: "2025-03-19" },
  { id: 4, name: "Féte de famille",  category: "Conférences", date: "2025-03-21" },
  // Autres événements
];


const categories = [
  "Conférences",
  "Sessions de networking",
  
];

const Professionnel = () => {
  const [selectedDate, setSelectedDate] = useState(null); // Date sélectionnée dans le calendrier
  const [selectedCategory, setSelectedCategory] = useState(""); // Catégorie sélectionnée

  // Filtrer les événements par date et catégorie
  const filteredEvents = events.filter((event) => {
    const isDateMatch = selectedDate
      ? new Date(event.date).toDateString() === selectedDate.toDateString()
      : true;
    const isCategoryMatch = selectedCategory ? event.category === selectedCategory : true;
    return isDateMatch && isCategoryMatch;
  });

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Contenu principal */}
      <div className="container mx-auto px-4 py-6">
        <h2 className="text-2xl font-semibold mb-4">Catégorie Professionnel
        </h2>
        <p className="mb-4">Voici la section des événements de la catégorie Professionnel
        ...</p>

        {/* Filtres */}
        <div className="mb-6">
          <div className="flex gap-4 items-center">
            {/* Calendrier compact pour sélectionner une date */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Sélectionner une date :
              </label>
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                dateFormat="dd/MM/yyyy"
                placeholderText="Choisir une date"
                className="p-2 border rounded w-full"
              />
            </div>

            {/* Filtrage par catégorie */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Sélectionner une catégorie :
              </label>
              <select
                onChange={(e) => setSelectedCategory(e.target.value)}
                value={selectedCategory}
                className="p-2 border rounded w-full"
              >
                <option value="">Toutes les catégories</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Affichage des événements filtrés */}
        <div>
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event) => (
              <div key={event.id} className="bg-white p-4 mb-4 shadow-md rounded">
                <h3 className="font-semibold text-lg">{event.name}</h3>
                <p className="text-sm text-gray-500">Date : {event.date}</p>
                <p className="text-sm text-gray-500">Catégorie : {event.category}</p>
              </div>
            ))
          ) : (
            <p>Aucun événement trouvé pour les critères sélectionnés.</p>
          )}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Professionnel;
