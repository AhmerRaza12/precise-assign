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
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: 'linear',
        pauseOnHover: false,
        arrows: false,
        draggable: false,
        
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 5,
                },
            },
        ],
    };

    const logos = [
        ArdenLogo, BedfordshireLogo, BoltonLogo, EdinburghLogo,
        GlasgowLogo, HuddersfieldLogo, ManchesterLogo, RGULogo,
        SheffieldLogo, StaffordshireLogo, UniversityOfDerbyLogo,
        UniversityOfSouthWalesLogo, UniversityOfSunderlandLogo
    ];

    return (
        <div className="text-center mt-4 max-sm:mt-2">
            <div
                className="mt-5 mb-6 mx-auto max-sm:mb-4 max-sm:mt-2"
                style={{ maxWidth: '80%', overflowX: 'hidden' }}
            >
              <h1 className='text-center font-bold text-black text-4xl leading-8 mb-2 capitalize max-sm:leading-6 max-sm:text-2xl'>Trusted by 85,000 Customers</h1>
              <p className='text-center text-gray-500 text-lg leading-7 mb-4 max-sm:text-sm'>Connecting With Over 4500 Trusted Legends</p>
                <Slider {...settings}>
                    {logos.map((logo, index) => (
                        <div
                            key={index}
                            className="px-4 max-sm:px-2 cursor-pointer"
                        >
                            <div
                                className="mx-auto max-sm:h-[90px] max-sm:w-[90px] h-[120px] w-[120px]"
                                // style={{
                                //     width: '120px', 
                                //     height: '120px', 
                                // }}
                            >
                                <img
                                    src={logo}
                                    alt={`Partner ${index + 1}`}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default SliderCarousel;
