import React, { useState } from "react";
import { IoCloseOutline, IoMail, IoLockClosed, IoPerson } from "react-icons/io5";

const Popup = ({ orderPopup, setOrderPopup }) => {
  const [registerPopup, setRegisterPopup] = useState(false);
  const [forgotPasswordPopup, setForgotPasswordPopup] = useState(false);

  return (
    <>
      {orderPopup && (
        <div className="popup">
          <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900 rounded-md duration-200 w-[300px]">
              {/* header */}
              <div className="flex items-center justify-between">
                <h1>Se Connecter</h1>
                <IoCloseOutline
                  className="text-2xl cursor-pointer"
                  onClick={() => setOrderPopup(false)}
                />
              </div>
              {/* form section */}
              <div className="mt-4">
                <div className="relative mb-4">
                  <IoMail className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 pl-8 pr-2 py-1"
                  />
                </div>
                <div className="relative mb-4">
                  <IoLockClosed className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="password"
                    placeholder="Mot de passe"
                    className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 pl-8 pr-2 py-1"
                  />
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
                  <button className="bg-gradient-to-r from-orange-400 to-orange-600 hover:scale-105 duration-200 text-white py-1 px-4 rounded-full flex items-center gap-2">
                    Se connecter
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
                <div className="relative mb-4">
                  <IoPerson className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Nom"
                    className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 pl-8 pr-2 py-1"
                  />
                </div>
                <div className="relative mb-4">
                  <IoMail className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 pl-8 pr-2 py-1"
                  />
                </div>
                <div className="relative mb-4">
                  <IoLockClosed className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="password"
                    placeholder="Mot de passe"
                    className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 pl-8 pr-2 py-1"
                  />
                </div>
                <div className="flex justify-center">
                  <button className="bg-gradient-to-r from-orange-400 to-orange-600 hover:scale-105 duration-200 text-white py-1 px-4 rounded-full flex items-center gap-2">
                    S'inscrire
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {forgotPasswordPopup && (
        <div className="popup">
          <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900 rounded-md duration-200 w-[300px]">
              <div className="flex items-center justify-between">
                <h1>Mot de passe oublié</h1>
                <IoCloseOutline
                  className="text-2xl cursor-pointer"
                  onClick={() => setForgotPasswordPopup(false)}
                />
              </div>
              <div className="mt-4">
                <div className="relative mb-4">
                  <IoMail className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    placeholder="Entrez votre email"
                    className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 pl-8 pr-2 py-1"
                  />
                </div>
                <div className="flex justify-center">
                  <button className="bg-gradient-to-r from-orange-400 to-orange-600 hover:scale-105 duration-200 text-white py-1 px-4 rounded-full flex items-center gap-2">
                    Réinitialiser
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
