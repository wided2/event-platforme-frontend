import React, { useState, useEffect } from "react";

const UpdateProfil = () => {
  // État pour les données du profil
  const [profileData, setProfileData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // État pour gérer les erreurs
  const [errors, setErrors] = useState({});

  // État pour les événements auxquels l'utilisateur est inscrit
  const [userEvents, setUserEvents] = useState([]);

  // État pour les messages de confirmation ou d'erreur globaux
  const [message, setMessage] = useState("");

  // Simulation d'une récupération des données de l'utilisateur depuis une API
  useEffect(() => {
    const fetchUserData = async () => {
      const mockUserData = {
        name: "John Doe",
        email: "johndoe@example.com",
      };
      setProfileData((prevData) => ({ ...prevData, ...mockUserData }));
    };

    const fetchUserEvents = async () => {
      const mockEvents = [
        { id: 1, title: "Conférence sur React", date: "2023-11-15", location: "Paris" },
        { id: 2, title: "Atelier Node.js", date: "2023-11-20", location: "Lyon" },
        { id: 3, title: "Hackathon AI", date: "2023-12-01", location: "Marseille" },
      ];

      // Simulez que l'utilisateur est inscrit à certains événements
      const userRegisteredEvents = mockEvents.filter((event) =>
        [1, 3].includes(event.id)
      );
      setUserEvents(userRegisteredEvents);
    };

    fetchUserData();
    fetchUserEvents();
  }, []);

  // Gestion des changements dans les champs du formulaire
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  // Validation du formulaire
  const validateForm = () => {
    const errors = {};
    if (!profileData.name) {
      errors.name = "Le nom est requis.";
    }
    if (!profileData.email) {
      errors.email = "L'email est requis.";
    } else if (!/\S+@\S+\.\S+/.test(profileData.email)) {
      errors.email = "L'email n'est pas valide.";
    }
    if (profileData.password && profileData.password.length < 6) {
      errors.password = "Le mot de passe doit contenir au moins 6 caractères.";
    }
    if (profileData.password !== profileData.confirmPassword) {
      errors.confirmPassword = "Les mots de passe ne correspondent pas.";
    }
    setErrors(errors);
    return Object.keys(errors).length === 0; // Retourne true si aucune erreur
  };

  // Soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        // Simulez une requête API pour mettre à jour les données de l'utilisateur
        console.log("Données envoyées :", profileData);

        // Affichez un message de confirmation
        setMessage("Profil mis à jour avec succès !");
        setTimeout(() => setMessage(""), 3000); // Efface le message après 3 secondes
      } catch (error) {
        console.error("Erreur lors de la mise à jour du profil :", error);

        // Affichez un message d'erreur
        setMessage("Une erreur est survenue lors de la mise à jour du profil.");
        setTimeout(() => setMessage(""), 3000); // Efface le message après 3 secondes
      }
    } else {
      // Affichez un message d'erreur général si le formulaire n'est pas valide
      setMessage("Veuillez corriger les erreurs ci-dessous.");
      setTimeout(() => setMessage(""), 3000); // Efface le message après 3 secondes
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md">
        {/* Affichage des messages de confirmation ou d'erreur */}
        {message && (
          <div
            className={`mb-4 p-2 rounded-md text-center ${
              message.includes("succès") ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
            }`}
          >
            {message}
          </div>
        )}

        <h1 className="text-2xl font-bold text-center mb-4">Mettre à jour le profil</h1>

        {/* Formulaire */}
        <form onSubmit={handleSubmit}>
          {/* Champ Nom */}
          <div className="relative mb-4">
            <label htmlFor="name" className="sr-only">
              Nom
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Nom"
              value={profileData.name}
              onChange={handleInputChange}
              className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-700 pl-4 pr-2 py-1"
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name}</p>
            )}
          </div>

          {/* Champ Email */}
          <div className="relative mb-4">
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={profileData.email}
              onChange={handleInputChange}
              className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-700 pl-4 pr-2 py-1"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          {/* Champ Mot de passe */}
          <div className="relative mb-4">
            <label htmlFor="password" className="sr-only">
              Mot de passe
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Nouveau mot de passe (optionnel)"
              value={profileData.password}
              onChange={handleInputChange}
              className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-700 pl-4 pr-2 py-1"
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password}</p>
            )}
          </div>

          {/* Champ Confirmation du mot de passe */}
          <div className="relative mb-4">
            <label htmlFor="confirmPassword" className="sr-only">
              Confirmez le mot de passe
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirmez le mot de passe"
              value={profileData.confirmPassword}
              onChange={handleInputChange}
              className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-700 pl-4 pr-2 py-1"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>
            )}
          </div>

          {/* Bouton de soumission */}
          <button
            type="submit"
            className="bg-gradient-to-r from-orange-400 to-orange-600 hover:scale-105 duration-200 text-white py-1 px-4 rounded-full flex items-center gap-2 w-full justify-center mb-4"
          >
            Mettre à jour
          </button>
        </form>

        {/* Historique des événements inscrits */}
        <div className="mt-6">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
            Mes événements inscrits
          </h2>
          {userEvents.length === 0 ? (
            <p className="text-sm text-gray-500">Vous n'êtes inscrit à aucun événement.</p>
          ) : (
            <ul className="space-y-2">
              {userEvents.map((event) => (
                <li
                  key={event.id}
                  className="flex justify-between items-center p-2 bg-gray-50 dark:bg-gray-700 rounded-md shadow-sm"
                >
                  <div>
                    <p className="font-medium">{event.title}</p>
                    <p className="text-xs text-gray-500">
                      {event.date} | {event.location}
                    </p>
                  </div>
                  <button
                    className="px-2 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-200"
                    onClick={() => {
                      setUserEvents((prevEvents) =>
                        prevEvents.filter((e) => e.id !== event.id)
                      );
                      setMessage(`Vous avez été désinscrit de l'événement "${event.title}".`);
                      setTimeout(() => setMessage(""), 3000); // Efface le message après 3 secondes
                    }}
                  >
                    Se désinscrire
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default UpdateProfil;