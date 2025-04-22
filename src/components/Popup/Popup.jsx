import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register"; // Assurez-vous que le chemin est correct

const Popup = ({ orderPopup, setOrderPopup }) => {
  const [registerPopup, setRegisterPopup] = useState(false);

  return (
    <>
      {/* Affiche le popup de connexion */}
      {orderPopup && (
        <Login
          setOrderPopup={setOrderPopup} // nsaker le popup de connexion
          setRegisterPopup={setRegisterPopup} // nhil le popup d'inscription
        />
      )}

      {/* Affiche le popup d'inscription */}
      {registerPopup && (
        <Register
          setRegisterPopup={setRegisterPopup} // Permet de fermer le popup d'inscription
          setOrderPopup={setOrderPopup} // Permet de revenir au popup de connexion
        />
      )}
    </>
  );
};

export default Popup;