import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
const Card1 = () => {
  return (
    <div>
      <Navbar /> {/* Appel du Navbar */}

      <div className="flex flex-col justify-center items-center h-screen ">
      <h1 className="text-3xl font-bold">Développement Personnel</h1>
        <p className="text-gray-600 text-center mt-4">
          Découvrez nos événements dédiés au développement personnel !
        </p>
      </div>

      <Footer /> {/* Appel du Footer */}
    </div>
  );
};

export default Card1;
