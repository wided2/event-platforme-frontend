import React from 'react';
import image from "../../assets/image.jpg";

const TEAM = () => {
  return (
    <div className="relative w-full max-w-5xl mx-auto">
      {/* Background Image */}
      <div
        className="relative bg-cover bg-center w-full h-auto min-h-[300px] md:min-h-[500px] flex justify-center items-center text-white px-4 sm:px-6 md:px-12"
        style={{ backgroundImage: `url(${image})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        {/* Contenu */}
        <div className="relative z-10 max-w-2xl text-center">
          <p className="text-xs sm:text-sm uppercase font-semibold">Événements professionnels</p>
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold">TEAM BUILDING</h2>
          <p className="text-xs sm:text-sm mt-2">
            Participez à une expérience immersive pour renforcer l'esprit d'équipe et la motivation.
          </p>
          <button className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-4 rounded">
            En savoir plus
          </button>
        </div>
      </div>
    </div>
  );
};

export default TEAM;
