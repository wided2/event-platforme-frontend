import React, { useState } from "react";
import Image1 from "../../assets/inscrire.png"; // Importation de l'image

const Inscription = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email soumis:", email);
  };

  return (
    <div className="bg-white flex justify-center py-12"> {/* Fond blanc */}
      <div className="bg-orange-300 max-w-6xl w-full flex flex-col md:flex-row items-center gap-10 px-6 py-12 mx-auto rounded-lg shadow-lg">
        {/* Texte à gauche */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-bold text-gray-50">
          Abonnez-vous maintenant pour bénéficier plus  d'information
          </h2>
         
          {/* Formulaire */}
          <form onSubmit={handleSubmit} className="mt-4 flex">
            <input
              type="email"
              placeholder="Enter votre  email"
              className="w-full px-4 py-2 border border-gray-300 rounded-l focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="bg-orange-500 text-white px-6 py-2 rounded-r hover:bg-orange-600 transition"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Image à droite */}
        <div className="md:w-1/2 flex justify-center">
          <img src={Image1} alt="" className=" h-auto object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Inscription;
