import React from 'react';
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Card5 = () => {
  return (
    <div>
      <Navbar /> {/* Appel du Footer */}
    <div className="flex flex-col justify-center items-center h-screen ">
  <h1 className="text-3xl font-bold">Bienvenue sur la 5eme page</h1>
  <p className="text-gray-700 mt-4">Ceci est une page de 5eme Card5.</p>
</div>
<Footer /> {/* Appel du Footer */}
</div>

  )
}

export default Card5
