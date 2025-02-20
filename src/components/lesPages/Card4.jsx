import React from 'react';
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Card4 = () => {
  return (
    <div>
      <Navbar />
    <div className="flex flex-col justify-center items-center h-screen ">
  <h1 className="text-3xl font-bold">Bienvenue sur la 4eme page</h1>
  <p className="text-gray-700 mt-4">Ceci est une page de 4eme card4.</p>
</div>
<Footer/>
</div>
  )
}

export default Card4
