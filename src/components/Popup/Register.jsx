// src/components/Register.jsx
import React, { useState } from "react";
import { IoMail, IoLockClosed, IoPerson, IoClose } from "react-icons/io5";
import { useAuthStore } from "../../store/authStore";

const Register = ({ setRegisterPopup, setOrderPopup }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Récupérez les fonctions et états du store
  const { signup, error, isLoading } = useAuthStore();

  // Gestion de la soumission du formulaire
  const handleSignUp = async (e) => {
    e.preventDefault();
    if (!name.trim() || !email.includes("@") || password.length < 6) {
      alert("Veuillez remplir correctement tous les champs.");
      return;
    }

    try {
      await signup(email, password, name);
      setRegisterPopup(false); // Fermez le popup après inscription
      setOrderPopup(true); // Ouvrez un autre popup si nécessaire
    } catch (error) {
      console.error("Erreur lors de l'inscription :", error);
    }
  };

  // Fermer le popup
  const closePopup = () => {
    setName("");
    setEmail("");
    setPassword("");
    setRegisterPopup(false);
  };

  return (
    <div className="popup fixed inset-0 bg-black/50 z-50 backdrop-blur-sm flex items-center justify-center">
      <div className="w-[300px] p-4 shadow-md bg-white dark:bg-gray-900 rounded-md relative">
        {/* Bouton de fermeture */}
        <button
          onClick={closePopup}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
          aria-label="Fermer"
        >
          <IoClose size={24} />
        </button>

        {/* Titre */}
        <h1 className="text-lg font-bold text-center">Créer un compte</h1>

        {/* Message d'erreur */}
        {error && (
          <p className="text-red-500 text-sm mt-2 text-center">{error}</p>
        )}

        {/* Formulaire */}
        <form onSubmit={handleSignUp} className="mt-4">
          {/* Nom */}
          <div className="relative mb-4">
            <IoPerson className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Nom"
              className="w-full rounded-full border pl-8 pr-2 py-1 focus:outline-none"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          {/* Email */}
          <div className="relative mb-4">
            <IoMail className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-full border pl-8 pr-2 py-1 focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Mot de passe */}
          <div className="relative mb-4">
            <IoLockClosed className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="password"
              placeholder="Mot de passe"
              className="w-full rounded-full border pl-8 pr-2 py-1 focus:outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Bouton d'inscription */}
          <button
            type="submit"
            disabled={isLoading}
            className="bg-orange-500 text-white w-full py-1 mt-4 rounded-full flex justify-center items-center"
          >
            {isLoading ? (
              <svg
                className="animate-spin h-5 w-5 mr-3"
                viewBox="0 0 24 24"
              ></svg>
            ) : (
              "S'inscrire"
            )}
          </button>

          {/* Lien vers la connexion */}
          <p className="text-sm mt-2 text-center">
            Déjà un compte ?{" "}
            <span
              className="text-blue-500 hover:underline cursor-pointer"
              onClick={() => setRegisterPopup(false)}
            >
              Se connecter
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;