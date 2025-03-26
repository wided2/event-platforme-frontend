import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"; // Pour la redirection
import Logo from "../../assets/logo4.png";
import { IoMdSearch } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { FaBars, FaTimes } from "react-icons/fa";

const Menu = [
  { id: 1, name: "Education et Formation", link: "/Education-et-Formation" },
  { id: 2, name: "Culture et Loisirs", link: "/Culture-et-Loisirs" },
  { id: 3, name: "Professionnel", link: "/Professionnel" },
  { id: 4, name: "Sport et Bien-être", link: "/Sport-et-Bien-être" },
  { id: 5, name: "Communautaire et Caritatif", link: "/Communautaire-et-Caritatif" },
  { id: 6, name: "Ecologie et Environnement", link: "/Ecologie-et-Environnement" },
  { id: 7, name: "Célébrations et Fêtes", link: "/Celebrations-et-Fêtes" },
  { id: 8, name: "Marchés et Foires", link: "/Marches-et-Foires" },
];

const Navbar = ({ handleOrderPopup }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("user") ? true : false
  ); // Vérifie si l'utilisateur est connecté
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Met à jour l'état si localStorage change
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setIsAuthenticated(true); // Utilisateur déjà connecté
    } else {
      setIsAuthenticated(false); // Pas encore connecté
    }
  }, []);

  // Fonction de connexion
  const handleLogin = () => {
    // Simule une connexion (par exemple, un appel API pour une vraie connexion)
    localStorage.setItem("user", "true"); // Stocke l'état connecté
    setIsAuthenticated(true); // Mets l'état à vrai lorsque l'utilisateur est authentifié
    handleOrderPopup(); // Affiche le formulaire de connexion ou effectue une action supplémentaire
  };

  // Fonction de déconnexion
  const handleLogout = () => {
    localStorage.removeItem("user"); // Supprime l'état connecté
    setIsAuthenticated(false);
    setProfileMenuOpen(false);
    navigate("/"); // Retour à la page d'accueil
  };

  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      {/* Upper Navbar */}
      <div className="bg-gradient-to-r from-orange-300 to-orange-300">
        <div className="container flex justify-between items-center px-4 sm:px-6 py-3">
          {/* Logo + EVENT */}
          <div className="flex items-center gap-x-2">
            <Link to="/" className="font-bold text-2xl sm:text-3xl flex items-center gap-x-2">
              <img src={Logo} alt="Logo" className="w-12 sm:w-16 h-12 sm:h-16 object-contain" />
              <span className="text-white tracking-wide">EVENT</span>
            </Link>
          </div>

          {/* Hamburger Menu (Mobile) */}
          <div className="sm:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-white text-2xl focus:outline-none">
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Search bar + Profile */}
          <div className="hidden sm:flex justify-between items-center gap-4">
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="search"
                className="w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none dark:border-gray-500 dark:bg-gray-800"
              />
              <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
            </div>

            {/* Profile button / Dropdown */}
            <div className="relative">
              {isAuthenticated ? (
                // Si connecté, bouton "Mon Profil"
                <button
                  onClick={() => setProfileMenuOpen(!profileMenuOpen)}
                  className="bg-white text-orange-600 px-4 py-2 rounded-full flex items-center gap-2 shadow-md hover:bg-orange-100 transition-all"
                >
                  <CgProfile className="text-xl" />
                  <span className="hidden sm:inline">Mon Profil</span>
                </button>
              ) : (
                // Si non connecté, bouton "Connecté"
                <button
                  onClick={() => {
                    handleOrderPopup(); // Afficher le formulaire de connexion
                    handleLogin(); // Simuler la connexion
                  }}
                  className="bg-white text-orange-600 px-4 py-2 rounded-full flex items-center gap-2 shadow-md hover:bg-orange-100 transition-all"
                >
                  <CgProfile className="text-xl" />
                  <span className="hidden sm:inline">Connecté</span>
                </button>
              )}

              {/* Dropdown Menu */}
              {isAuthenticated && profileMenuOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg">
                 <Link to="/UpdateProfil" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">
                  Mon Profil
                  </Link>

                  <button
                    onClick={handleLogout} // Déconnexion
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-200"
                  >
                    Déconnexion
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Lower Navbar */}
      <div className={`sm:flex justify-center ${menuOpen ? "block" : "hidden"} bg-gray-100 dark:bg-gray-800 py-3`}>
        <ul className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 text-gray-700 dark:text-gray-300 font-medium">
          {Menu.map((item) => (
            <li key={item.id} className="hover:text-orange-600 transition-all">
              <Link to={item.link} className="px-3">{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
