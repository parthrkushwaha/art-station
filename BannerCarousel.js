import React from "react";
import './BannerCarousel.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner1 from '../images/sketch7.jpg'
import banner2 from '../images/painting21.jpg'
import banner3 from '../images/brushes3.jpg'
const BannerCarousel = () => {
  const banners = [
    {
      id: 1,
      image: banner1 
    },
    {
      id: 2,
      image: banner2 
    },
    {
      id: 3,
      image: banner3,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-4 img-fluid w-1">
      <Slider {...settings}>
        {banners.map((banner) => (
          <div key={banner.id} className="flex justify-center ms-0">
            <img src={banner.image} alt={`Banner ${banner.id}`}  className={`  object-cover  img-fluid rounded-lg 
                ${banner.id === 2 ?  "h-[100px] w-auto" : "h-40 w-auto" }
              `}
             />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BannerCarousel;
