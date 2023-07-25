import React, { useState, useRef } from "react";
import Image from "next/image";
import { AiOutlineRight } from "react-icons/ai";
import { AiOutlineLeft } from "react-icons/ai";
import uzum from "../pages/images/uzum.png";
import car from "../pages/images/car.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function ProductSlider() {
  const customeSlider = useRef();
  const sliderItems = [
    { id: 1, image: uzum },
    { id: 2, image: car },
    { id: 3, image: car },
    { id: 4, image: car },
    { id: 5, image: car },
    { id: 6, image: car },
  ];
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const gotoNext = () => {
    customeSlider.currentTarget.slickNext();
  };

  const gotoPrev = () => {
    customeSlider.currentTarget.slickPrev();
  };
  return (
    <div className="relative lg:w-[1000px] md:w-[800px] ">
      <button
        onClick={() => gotoPrev()}
        className="border z-[1] bg-white md:left-[50px] ml-[20px] mt-[90px] lg:ml-0 text-[12px] absolute text-[#0677E1] mr-4 hover:text-white w-10 h-10 rounded-[40px] hover:bg-gradient-to-r hover:from-[#0677E1] hover:to-[#8C1FE2]"
      >
        <AiOutlineLeft className="ml-[14px] " />
      </button>
      <Slider
        {...settings}
        ref={customeSlider}
        className="text-center ml-[70px]"
      >
        {sliderItems.map((item) => {
          return (
            <div key={item.id} className="flex mx-3 justify-between mt-8 ">
              <div className="flex justify-center items-center bg-white w-[210px] h-[150px] border rounded-[18px] mx-2">
                <Image src={item.image} alt="uzum foto" />
              </div>
            </div>
          );
        })}
      </Slider>
      <button
        onClick={() => gotoNext()}
        className="border z-[1] bg-white  absolute right-[-20px] top-[90px] text-[12px] text-[#0677E1] mr-7  md:mr-2 lg:mr-0 hover:text-white w-10 h-10 rounded-[40px] hover:bg-gradient-to-r hover:from-[#0677E1] hover:to-[#8C1FE2]"
      >
        <AiOutlineRight className="ml-[14px]" />
      </button>
    </div>
  );
}

export default ProductSlider;
