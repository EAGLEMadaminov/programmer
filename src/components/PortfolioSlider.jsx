import React, { useRef } from "react";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import komp from "../pages/images/simple-png.webp";
import project1 from "../pages/images/project.png";
import project2 from "../pages/images/project-back.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";

function PortfolioSlider() {
  const projectsSlider = useRef();
  let settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    className: "notes-slider",
    autoplay: true,
    autoPlaySpeed: 9000,
  };
  const projects = [
    {
      id: 1,
      title:
        "Geo Go taksi ilovasi. Qulay hamda chiroyli dizaynga ega bo'lgan taksi platformasi.",
      parag: "Mobil dasturini ishlab chiqish.",
      link: "https://play.google.com/store/apps/details?id=io.geo.go",
      image: project1,
      image2: project2,
    },
    {
      id: 2,
      title: "TozaUz Yurtimizni birga asraylik!!",
      parag: "Mobil dastur , Web Site ishlab chiqish.",
      link: "https://play.google.com/store/apps/details?id=uz.toza.tozauz",
      image: project1,
      image2: project2,
    },
    {
      id: 3,
      title: "Vita in line sog'ligimzni birga asraylik!!",
      parag: "Mobil dastur , Web Site ishlab chiqish.",
      link: "https://play.google.com/store/apps/details?id=uz.hayot.vitaInLine&hl=ru&gl=US",
      image: project1,
      image2: project2,
    },
    {
      id: 4,
      title:
        "Allone shahar ichi hamda shaharlar aro taksi xizmati uchun maxsuz ilova.",
      parag: "Mobil dasturini ishlab chiqish.",
      link: "https://play.google.com/store/apps/details?id=io.geo.go",
      image: project1,
      image2: project2,
    },
  ];

  const gotoNextBtn = () => {
    projectsSlider?.current?.slickNext();
  };

  const gotoPrevBtn = () => {
    projectsSlider?.current?.slickPrev();
  };
  return (
    <div className="flex box-shadow">
      <Slider
        {...settings}
        ref={projectsSlider}
        className=" ml-[2%]  lg:ml-0 rounded-[32px] bg-white w-[350px] md:w-[600px] lg:w-[1000px] statistiks"
      >
        {projects.map((item) => {
          return (
            <div
              key={item.id}
              className=" projects-slider mx-auto rounded-[32px]"
            >
              <div className="sm:w-[450px]  sm:text-left px-3 md:ml-[70px] sm:mt-[70px] mt-[40px]">
                <p className="uppercase font-[700] ml-[50px] sm:ml-auto dark:text-black">
                  Bizning
                  <span className="bg-gradient-to-r ml-1 from-[#0677E1] to-[#8C1FE2]  bg-clip-text text-transparent">
                    portfolio
                  </span>
                </p>
                <h2 className="text-[25px] dark:text-black w-[300px] md:w-auto  mt-2 font-[700] leading-8">
                  {item.title}
                </h2>
                <div className="flex mt-3">
                  <Image src={komp} alt="comp img" className="w-8 h-8 mt-2 " />
                  <p className="mt-4 dark:text-black"> Bizning rolimiz</p>
                </div>
                <p className="mt-3 w-[280px] text-center sm:text-left sm:w-auto dark:text-black">
                  {item.parag}
                </p>
                <div className="btn from-left flex justify-between mt-8 flex-wrap  sm:flex-auto">
                  <div className="flex ml-14  sm:ml-5 w-[350px] text-center  sm:w-auto  font-[600] items-center rounded-xl  hover:bg-gradient-to-r hover:from-[#0677E1] hover:to-[#8C1FE2] hover:text-white">
                    <a
                      href={item.link}
                      target="blank"
                      className="py-[10px] flex px-5 hover:text-white  bg-gradient-to-r from-[#0677E1] to-[#8C1FE2] bg-clip-text text-transparent"
                    >
                      Loyihani ko&apos;rish
                      <AiOutlineRight className="text-[12px] text-[#807fac] mt-3 ml-2" />
                    </a>
                  </div>
                  <div className="text-center ml-[100px] sm:ml-0 sm:mr-0 pt-[8px] ">
                    <button
                      className="text-[12px] dark:text-black mr-4 hover:text-white w-10 h-10 rounded-[40px] hover:bg-gradient-to-r hover:from-sky-600 hover:to-indigo-700"
                      onClick={() => gotoPrevBtn()}
                    >
                      <AiOutlineLeft className="ml-[14px]" />
                    </button>
                    <button
                      className="text-[12px] dark:text-black hover:text-white text-center w-10 h-10 rounded-[40px] hover:bg-gradient-to-r hover:from-sky-600 hover:to-indigo-700"
                      onClick={() => gotoNextBtn()}
                    >
                      <AiOutlineRight className="ml-[14px]  font-bold" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="sm:mt-8  sm:mb-0 ml-4 relative">
                <Image
                  src={item.image2}
                  alt="project 2"
                  className="w-[250px]  h-[150px] sm:w-[400px] md:w-[600px] md:ml-12 mt-6 lg:w-[400px] sm:h-[320px]"
                />
                <Image
                  src={item.image}
                  alt="statistika"
                  className="absolute z-[1] right-0 top-8 md:top-12 w-[250px] lg:w-[400px]"
                />
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default PortfolioSlider;
