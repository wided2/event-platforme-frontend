import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
const Card1 = () => {
  return (
    <div>
      <Navbar /> {/* Appel du Footer */}

      <div className="container mx-auto mt-10">
        <h1 className="text-3xl font-bold text-center">Développement Personnel</h1>
        <p className="text-gray-600 text-center mt-4">
          Découvrez nos événements dédiés au développement personnel !
        </p>
        {/* Contenu spécifique à Card1 */}
      </div>

      <Footer /> {/* Appel du Footer */}
    </div>
  );
};

export default Card1;
