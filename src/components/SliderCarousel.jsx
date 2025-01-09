import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ArdenLogo from '../assets/Logos for Carousel/Arden.png';
import BedfordshireLogo from '../assets/Logos for Carousel/Bedfordshire.png';
import BoltonLogo from '../assets/Logos for Carousel/Bolton.png';
import EdinburghLogo from '../assets/Logos for Carousel/Edinburgh.png';
import GlasgowLogo from '../assets/Logos for Carousel/Glasgow.png';
import HuddersfieldLogo from '../assets/Logos for Carousel/Huddersfield.png';
import ManchesterLogo from '../assets/Logos for Carousel/Manchester.png';
import RGULogo from '../assets/Logos for Carousel/RGU.png';
import SheffieldLogo from '../assets/Logos for Carousel/Sheffield.png';
import StaffordshireLogo from '../assets/Logos for Carousel/Staffordshire.png';
import UniversityOfDerbyLogo from '../assets/Logos for Carousel/University of Derby.png';
import UniversityOfSouthWalesLogo from '../assets/Logos for Carousel/University of South Wales.png';
import UniversityOfSunderlandLogo from '../assets/Logos for Carousel/University of Sunderland.png';

const SliderCarousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 1500,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        pauseOnHover: true,
        arrows: false,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      };
    const logos =[ArdenLogo, BedfordshireLogo, BoltonLogo, EdinburghLogo, GlasgowLogo, HuddersfieldLogo, ManchesterLogo, RGULogo, SheffieldLogo, StaffordshireLogo, UniversityOfDerbyLogo, UniversityOfSouthWalesLogo, UniversityOfSunderlandLogo];

    return (
        <div className="text-center mt-20">
        <div className="mb-8">
        </div>
        <div className="mt-20 mb-20" style={{ maxWidth: '100%', overflowX: 'hidden' }}>
          <Slider {...settings}>
            {logos.map((logo, index) => (
              <div key={index} className="mx-1 cursor-pointer">
                <img src={logo} alt={`Partner ${index + 1}`} className="mx-auto w-24 h-24" />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    )
};
export default SliderCarousel;
