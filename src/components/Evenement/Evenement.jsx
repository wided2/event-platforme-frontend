import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Image1 from "../../assets/evenement/coaching.jpg";
import Image2 from "../../assets/evenement/communauté.jpg";
import Image3 from "../../assets/evenement/Nettoyages.jpg";
import Image4 from "../../assets/evenement/Professionnel.jpg";
import Image5 from "../../assets/evenement/sport.jpg";

import { FaStar } from "react-icons/fa6";

const EvenementData = [
  {
    id: 1,
    img: Image1,
    title: "Développement Personnel",
    rating: 5.0,
    aosDelay: "0",
    prix:"160dt",
  },
  {
    id: 2,
    img: Image2,
    title: "Communautaire et Caritatif",
    rating: 4.5,
    aosDelay: "200",
    prix:"80dt",
  },
  {
    id: 3,
    img: Image3,
    title: "Écologie et Environnement",
    rating: 4.7,
    aosDelay: "400",
    prix:"40dt",
  },
  {
    id: 4,
    img: Image4,
    title: "Professionnel",
    rating: 4.4,
    aosDelay: "600",
    prix:"80dt",
  },
  {
    id: 5,
    img: Image5,
    title: "Sport et Bien-être",
    rating: 4.5,
    aosDelay: "800",
    prix:"120DT",
  },
];

const Evenement = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-base text-orange-600">
            À NE PAS RATER
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Les Meilleures Evenement  Chez Nous
          </h1>
        </div>

        {/* Body section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 mx-auto ml-40">

            {/* Card */}
            {EvenementData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="space-y-3"
              >
                <a href="">
                <img
                  src={data.img}
                  alt={data.title} // Amélioration pour l'accessibilité
                  className="h-[220px] w-[200px] object-cover rounded-md mx-auto"
                /></a>
                <div>
                  <h3 className="font-semibold text-center">{data.title}</h3>
                  <div className="flex items-center justify-center gap-1">
                    <FaStar className="text-amber-400" />
                    <span>{data.rating}</span>
                  </div>
                  <div className="text-center mt-2"> {/* Nouvelle div pour le prix */}
                    <h1>{data.prix}</h1>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Evenement;
