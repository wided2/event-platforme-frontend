import React from "react";

const EventCard = ({ event }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Image de l'événement */}
      <img src={event.img} alt="" className="w-full h-40 object-cover" />

      {/* Contenu de la carte */}
      <div className="p-4">
        <h3 className="font-semibold text-lg">{event.title}</h3>
         {/* date*/ }
         <p className="text-gray-600 font-semibold mt-2">{event.date}</p>

        {/* location*/}
        <p className="text-gray-600 font-semibold mt-2">{event.location}</p>
      </div>
    </div>
  );
};

export default EventCard;
