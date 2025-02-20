import React from 'react';
import Image1 from "../../assets/logo1.png";
import Image2 from "../../assets/sale.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const ImageList = [
    {
      id: 1,
      img: Image1,
      title: "Jusqu'à 50% de réduction sur les Formation MERN ",
    },
    {
        id: 2,
        img: Image2,
        title: "70% de réduction sur tous les evenement",
       },]

    const Remise = ({ handleOrderPopup }) => {
    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
        pauseOnHover: false,
        pauseOnFocus: true,
      };
  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200 ">
    {/* background pattern */}
    <div className="h-[700px] w-[700px] bg-orange-300 
    absolute -top-1/2 right-0 rounded-3xl rotate-45 -z[8]"></div>
        {/* remise section*/ }
        <div className="container pb-8 sm:pb-0">
            <Slider {...settings}>
                {ImageList.map((data)=> (
                    <div>
                {/* liktiba tkoun 3ala jnab te5ou grid */}
             <div className="grid grid-cols-1 sm:grid-cols-2">
                {/*contenue de offre */}
                 <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                    <h1 className="text-5xl sm:text-6xl font-bold">
                        {data.title}
                        </h1>
                    <div className="flex justify-end pr-4 sm:justify-start sm:pr-0 ">
                    <button
                    onClick={handleOrderPopup}
 
                    className="bg-orange-600 hover:bg-orange-700 transition-transform transform hover:scale-105 text-white py-3 px-6 rounded-full shadow-lg">
                       Voir
                    </button>
                    </div>
                 </div>
                 {/* les images */}
                 <div className="order-1 sm:order-2 ">
                    <div className="relative z-10">
                        <img src={data.img} alt=""
                        className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-125 object-contain mx-auto"/>
                    </div>
                 </div>
             </div>
            </div>
                ))}
            
            </Slider>

        </div>
    </div>
  )
}

export default Remise;