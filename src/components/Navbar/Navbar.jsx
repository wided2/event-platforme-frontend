import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Logo from "../../assets/logo4.png";
import { IoMdSearch } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { FaBars, FaTimes } from "react-icons/fa";
import { useAuthStore } from "../../store/authStore";

const Navbar = ({ handleOrderPopup }) => {
  const { isAuthenticated, user, logout } = useAuthStore();
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();  // Utilisation de useLocation pour récupérer la page actuelle

  const handleLogin = () => {
    handleOrderPopup();
  };

  const handleLogout = () => {
    logout();
    setProfileMenuOpen(false);
    navigate("/");
  };

  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      {/* Top Section */}
      <div className="bg-gradient-to-r from-orange-300 to-orange-300">
        <div className="container flex justify-between items-center px-4 sm:px-6 py-3">
          {/* Logo + EVENT */}
          <div className="flex items-center gap-x-2">
            <Link
              to="/"
              className="font-bold text-2xl sm:text-3xl flex items-center gap-x-2"
            >
              <img
                src={Logo}
                alt="Logo"
                className="w-12 sm:w-16 h-12 sm:h-16 object-contain"
              />
              <span className="text-white tracking-wide">EVENT</span>
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="sm:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white text-2xl focus:outline-none"
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Desktop Actions */}
          <div className="hidden sm:flex items-center gap-4">
            {/* Search */}
            <div className="relative group">
              <input
                type="text"
                placeholder="search"
                className="w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none dark:border-gray-500 dark:bg-gray-800"
              />
              <IoMdSearch className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 group-hover:text-primary" />
            </div>

            {/* Bouton Tous les événements */}
            {location.pathname !== "/evenements" && (
              <Link
                to="/evenements"
                className="bg-orange-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-orange-600 transition-all"
              >
                Tous les événements
              </Link>
            )}

            {/* Profile button / Dropdown */}
            <div className="relative">
              {isAuthenticated ? (
                user?.isVerified ? (
                  <div className="relative">
                    <button
                      onClick={() => setProfileMenuOpen(!profileMenuOpen)}
                      className="bg-white text-orange-600 px-4 py-2 rounded-full flex items-center gap-2 shadow-md hover:bg-orange-100 transition-all"
                    >
                      <CgProfile className="text-xl" />
                      <span className="hidden sm:inline">
                        {user?.name}
                      </span>
                    </button>

                    {profileMenuOpen && (
                      <div className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg">
                        <Link
                          to="/UpdateProfil"
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                        >
                          Mon Profil
                        </Link>
                        <button
                          onClick={handleLogout}
                          className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-200"
                        >
                          Déconnexion
                        </button>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="bg-yellow-100 border border-yellow-400 text-yellow-800 px-4 py-3 rounded-md shadow-md max-w-md mx-auto mt-4">
                    <p className="font-semibold">
                      📩 Vérification de l'email requise
                    </p>
                    <p className="text-sm mt-1">
                      Un lien de vérification a été envoyé à votre adresse
                      email. Veuillez consulter votre boîte de réception pour
                      activer votre compte.
                    </p>

                    <Link
                      to="/verify-email"
                      className="inline-block mt-3 text-sm text-blue-600 hover:underline"
                    >
                      ➤ Aller à la page de vérification
                    </Link>
                  </div>
                )
              ) : (
                <button
                  onClick={handleLogin}
                  className="bg-white text-orange-600 px-4 py-2 rounded-full flex items-center gap-2 shadow-md hover:bg-orange-100 transition-all"
                >
                  <CgProfile className="text-xl" />
                  <span className="hidden sm:inline">Se Connecter</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* menu Navbar (mobile) */}
      <div
        className={`sm:flex justify-center ${
          menuOpen ? "block" : "hidden"
        } bg-gray-100 dark:bg-gray-800 py-3`}
      >
        <div className="text-center text-xl text-orange-500 dark:text-white animate-pulse">
          Bienvenue sur EVENT ! Explorez nos événements
        </div>
      </div>
    </div>
  );
};

export default Navbar;
