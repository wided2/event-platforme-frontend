import React from 'react';
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Card2 = () => {
  return (
    <div>
      <Navbar/>
    <div className="flex flex-col justify-center items-center h-screen ">
  <h1 className="text-3xl font-bold">Bienvenue sur la 2eme page</h1>
  <p className="text-gray-700 mt-4">Ceci est une page de 2eme Card2.</p>
</div>
<Footer/>
</div>
  )
}

export default Card2
