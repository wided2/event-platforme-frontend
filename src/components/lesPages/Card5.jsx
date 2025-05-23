import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Feedback from "../Feedback/Livechat";
import Image1 from "../../assets/evenement/sport.jpg"; // Import de l'image
import Commentaire  from "../Feedback/Commentaire";
import PaymentPopup from "../Popup/PaymentPopup";
const events = [
  {
    id: 1,
    title: "Compétitions sportives",
    description:
      "sont des événements où des individus ou des équipes s'affrontent pour remporter un titre, une médaille ou simplement pour le plaisir du défi sportif",
    category: "  Sport et Bien-être ",
    startDate: "12 Mars 2025, 7:00 AM",
    endDate: "12 Mars 2025, 5:00 PM",
    location: " Tunis-center urbain",
    capacity: "20 Participants",
    price: "50 dt",
    creator: "CALIFORNIA GYM",
    creationDate: "15 Février 2025",
  },
];

const Card5 = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handlePaymentSuccess = () => {
    setPaymentSuccess(true);
    setShowPopup(false);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <div className="container mx-auto py-10 px-4 sm:px-8 flex justify-center">
        <div className="bg-white shadow-xl rounded-lg overflow-hidden p-6 w-full max-w-4xl">
          <div className="flex justify-center mb-6">
            <img
              src={Image1}
              alt="Image de l'événement de coaching"
              className="w-full h-80 object-cover rounded-lg brightness-125"
            />
          </div>
          <div className="flex justify-between items-center">
            <div className="p-4 rounded-lg w-2/3">
              <h1 className="text-2xl font-bold text-gray-800">{events[0].title}</h1>
              <p className="text-lg text-gray-700 mt-2">{events[0].description}</p>
              <p className="text-lg text-gray-700 mt-2"><strong>📍 Lieu: </strong>{events[0].location}</p>
            </div>
            <div className="bg-orange-200 p-4 rounded-lg w-1/3">
              <h2 className="text-xl font-semibold"><strong>💰 Prix: </strong>{events[0].price}</h2>
              <p><strong>👥 Capacité: </strong>{events[0].capacity}</p>
              <button
                className="bg-white hover:bg-orange-400 text-orange-700 py-2 px-6 rounded-lg w-full transition duration-300"
                onClick={() => setShowPopup(true)}
              >
                Inscrire
              </button>
            </div>
          </div>
          <div className="mt-6">
            <h2 className="text-2xl font-semibold">Autres informations</h2>
            <div className="mt-4 space-y-2">
              <p><strong>Catégorie: </strong>{events[0].category}</p>
              <p><strong>📅 Début: </strong>{events[0].startDate}</p>
              <p><strong>📆 Fin: </strong>{events[0].endDate}</p>
              <p><strong>👤 Créateur: </strong>{events[0].creator}</p>
              <p><strong>🕰 Création: </strong>{events[0].creationDate}</p>
            </div>
          </div>
        </div>
      </div>
      <Commentaire/>
      <Footer />
      {/* Passer price et title à PaymentPopup */}
      {showPopup && <PaymentPopup 
        onClose={() => setShowPopup(false)} 
        onSuccess={handlePaymentSuccess}
        price={events[0].price} // Passer le prix
        title={events[0].title} // Passer le titre
      />}
      {paymentSuccess && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <p className="text-green-600 font-semibold mt-4">Paiement activé avec succès !</p>
            <button
              className="mt-4 px-6 py-2 bg-orange-500 text-white rounded-lg"
              onClick={() => setPaymentSuccess(false)}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card5
