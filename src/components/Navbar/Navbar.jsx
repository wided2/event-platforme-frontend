import React, { useState } from "react";
import Logo from "../../assets/logo4.png";
import { IoMdSearch } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { FaCaretDown } from "react-icons/fa";

const Menu = [
  { id: 1, name: "Éducation et Formation", link: "/#" },
  { id: 2, name: "Culture et Loisirs", link: "/#" },
  { id: 3, name: "Professionnel", link: "/#" },
  { id: 4, name: "Sport et Bien-être", link: "/#" },
  { id: 5, name: "Communautaire et Caritatif", link: "/#" },
  { id: 6, name: "Écologie et Environnement", link: "/#" },
  { id: 7, name: "Célébrations et Fêtes", link: "/#" },
  { id: 8, name: "Marchés et Foires", link: "/#" },
];

const Navbar = () => {
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      {/* Upper Navbar */}
      <div className="bg-gradient-to-r from-orange-300 to-orange-300">
        <div className="container flex justify-between items-center px-6 py-3">
          {/* Logo + EVENT */}
          <div className="flex items-center gap-x-3">
            <a href="#" className="font-bold text-2xl sm:text-3xl flex items-center gap-x-2">
              <img src={Logo} alt="Logo" className="w-16 h-16 object-contain" />
              <span className="text-white tracking-wide">EVENT</span>
            </a>
          </div>

             {/* search bar */}
          <div className="flex justify-between items-center gap-4">
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="search"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800  "
              />
              <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
            </div>

            {/* Profile Dropdown */}
            <div className="relative">
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="bg-white text-orange-600 px-4 py-2 rounded-full flex items-center gap-2 shadow-md hover:bg-orange-100 transition-all"
              >
                <CgProfile className="text-xl" />
                <span className="hidden sm:inline">Profil</span>
                <FaCaretDown className={`transition-transform ${profileOpen ? "rotate-180" : "rotate-0"}`} />
              </button>

              {/* Dropdown menu */}
              {profileOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden animate-fade-in">
                  <a
                    href="/connexion"
                    className="block px-4 py-2 text-gray-700 hover:bg-orange-100 transition-all flex items-center"
                  >
                    🔑 Connexion
                  </a>
                  <a
                    href="/inscription"
                    className="block px-4 py-2 text-gray-700 hover:bg-orange-100 transition-all flex items-center"
                  >
                    📝 Inscription
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Lower Navbar */}
      <div className="bg-gray-100 dark:bg-gray-800 py-3">
        <ul className="flex justify-center space-x-6 text-gray-700 dark:text-gray-300 font-medium">
          {Menu.map((item) => (
            <li key={item.id} className="hover:text-orange-600 transition-all">
              <a href={item.link} className="px-3">{item.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
