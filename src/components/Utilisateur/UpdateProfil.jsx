import React, { useState, useEffect } from 'react';

const UpdateProfil = () => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',

  });

  // Simuler un appel API pour obtenir les données actuelles de l'utilisateur
  useEffect(() => {
    // Ici, on simule la récupération des données de l'utilisateur depuis un backend
    const currentUser = {
      name: 'wided',
      email: 'wiwi@example.com',
      
    };
    setUserData(currentUser);
  }, []);

  // Gérer la modification des champs du formulaire
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Gérer la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique pour envoyer les données modifiées au serveur
    alert('Profil mis à jour avec succès !');
    // Exemple : ici on pourrait faire une requête API pour mettre à jour le profil
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Mettre à jour votre profil</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Nom
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={userData.name}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md mt-1"
            placeholder="Votre nom"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={userData.email}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md mt-1"
            placeholder="Votre email"
          />
        </div>


        <button
          type="submit"
          className="w-full bg-orange-400 text-white p-2 rounded-md hover:bg-orange-700"
        >
          Mettre à jour
        </button>
      </form>
    </div>
  );
};

export default UpdateProfil;
