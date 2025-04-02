import React, { useState } from "react";
import { IoCloseOutline, IoMail, IoLockClosed, IoPerson } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Popup = ({ orderPopup, setOrderPopup }) => {
  const [registerPopup, setRegisterPopup] = useState(false);
  const [forgotPasswordPopup, setForgotPasswordPopup] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  // État pour les champs de connexion
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  const [loginErrors, setLoginErrors] = useState({});

  // État pour les champs d'inscription
  const [registerForm, setRegisterForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [registerErrors, setRegisterErrors] = useState({});

  // Validation des champs de connexion
  const validateLoginForm = () => {
    const errors = {};
    if (!loginForm.email) {
      errors.email = "L'email est requis.";
    } else if (!/\S+@\S+\.\S+/.test(loginForm.email)) {
      errors.email = "L'email n'est pas valide.";
    }
    if (!loginForm.password) {
      errors.password = "Le mot de passe est requis.";
    } else if (loginForm.password.length < 6) {
      errors.password = "Le mot de passe doit contenir au moins 6 caractères.";
    }
    setLoginErrors(errors);
    return Object.keys(errors).length === 0; // Retourne true si aucune erreur
  };

  // Validation des champs d'inscription
  const validateRegisterForm = () => {
    const errors = {};
    if (!registerForm.name) {
      errors.name = "Le nom est requis.";
    }
    if (!registerForm.email) {
      errors.email = "L'email est requis.";
    } else if (!/\S+@\S+\.\S+/.test(registerForm.email)) {
      errors.email = "L'email n'est pas valide.";
    }
    if (!registerForm.password) {
      errors.password = "Le mot de passe est requis.";
    } else if (registerForm.password.length < 6) {
      errors.password = "Le mot de passe doit contenir au moins 6 caractères.";
    }
    setRegisterErrors(errors);
    return Object.keys(errors).length === 0; // Retourne true si aucune erreur
  };

  // Gestion de la soumission du formulaire de connexion
  const handleConnect = () => {
    if (validateLoginForm()) {
      setOrderPopup(false);
      navigate("/Utilisateurs"); // Redirection vers le Dashboard
    }
  };

  // Gestion de la soumission du formulaire d'inscription
  const handleRegister = () => {
    if (validateRegisterForm()) {
      setSuccessMessage("Compte créé avec succès !");
      setRegisterPopup(false);
      setOrderPopup(true);
    }
  };

  return (
    <>
      {/* Popup de connexion */}
      {orderPopup && (
        <div className="popup">
          <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900 rounded-md duration-200 w-[300px]">
              <div className="flex items-center justify-between">
                <h1>Se Connecter</h1>
                <IoCloseOutline
                  className="text-2xl cursor-pointer"
                  onClick={() => setOrderPopup(false)}
                />
              </div>

              {/* Message de succès */}
              {successMessage && (
                <div className="text-green-500 text-center mb-2">
                  {successMessage}
                </div>
              )}

              {/* form section */}
              <div className="mt-4">
                <div className="relative mb-4">
                  <IoMail className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    placeholder="Email"
                    value={loginForm.email}
                    onChange={(e) =>
                      setLoginForm({ ...loginForm, email: e.target.value })
                    }
                    className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 pl-8 pr-2 py-1"
                  />
                  {loginErrors.email && (
                    <p className="text-red-500 text-xs mt-1">{loginErrors.email}</p>
                  )}
                </div>
                <div className="relative mb-4">
                  <IoLockClosed className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="password"
                    placeholder="Mot de passe"
                    value={loginForm.password}
                    onChange={(e) =>
                      setLoginForm({ ...loginForm, password: e.target.value })
                    }
                    className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 pl-8 pr-2 py-1"
                  />
                  {loginErrors.password && (
                    <p className="text-red-500 text-xs mt-1">{loginErrors.password}</p>
                  )}
                </div>

                <div className="flex justify-between text-sm text-blue-500">
                  <button
                    className="hover:underline"
                    onClick={() => {
                      setOrderPopup(false);
                      setForgotPasswordPopup(true);
                    }}
                  >
                    Mot de passe oublié ?
                  </button>
                </div>
                <div className="flex justify-center mt-4">
                  <button
                    className="bg-gradient-to-r from-orange-400 to-orange-600 hover:scale-105 duration-200 text-white py-1 px-4 rounded-full flex items-center gap-2"
                    onClick={handleConnect} // Redirection après connexion
                  >
                    Connecter
                  </button>
                </div>
                <div className="flex justify-center-end gap-2 text-sm mt-2">
                  <p className="text-black">Nouveau ici?</p>
                  <button
                    className="text-blue-500 hover:underline"
                    onClick={() => {
                      setOrderPopup(false);
                      setRegisterPopup(true);
                    }}
                  >
                    Créer un compte
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Popup d'inscription */}
      {registerPopup && (
        <div className="popup">
          <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900 rounded-md duration-200 w-[300px]">
              <div className="flex items-center justify-between">
                <h1>Créer un compte</h1>
                <IoCloseOutline
                  className="text-2xl cursor-pointer"
                  onClick={() => setRegisterPopup(false)}
                />
              </div>
              <div className="mt-4">
                {/* Champ "Nom" */}
                <div className="relative mb-4">
                  <IoPerson className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Nom"
                    value={registerForm.name}
                    onChange={(e) =>
                      setRegisterForm({ ...registerForm, name: e.target.value })
                    }
                    className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 pl-8 pr-2 py-1"
                  />
                  {registerErrors.name && (
                    <p className="text-red-500 text-xs mt-1">{registerErrors.name}</p>
                  )}
                </div>

                <div className="relative mb-4">
                  <IoMail className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    placeholder="Email"
                    value={registerForm.email}
                    onChange={(e) =>
                      setRegisterForm({ ...registerForm, email: e.target.value })
                    }
                    className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 pl-8 pr-2 py-1"
                  />
                  {registerErrors.email && (
                    <p className="text-red-500 text-xs mt-1">{registerErrors.email}</p>
                  )}
                </div>
                <div className="relative mb-4">
                  <IoLockClosed className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="password"
                    placeholder="Mot de passe"
                    value={registerForm.password}
                    onChange={(e) =>
                      setRegisterForm({ ...registerForm, password: e.target.value })
                    }
                    className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 pl-8 pr-2 py-1"
                  />
                  {registerErrors.password && (
                    <p className="text-red-500 text-xs mt-1">{registerErrors.password}</p>
                  )}
                </div>
                <div className="flex justify-center">
                  <button
                    className="bg-gradient-to-r from-orange-400 to-orange-600 hover:scale-105 duration-200 text-white py-1 px-4 rounded-full flex items-center gap-2"
                    onClick={handleRegister}
                  >
                    S'inscrire
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;