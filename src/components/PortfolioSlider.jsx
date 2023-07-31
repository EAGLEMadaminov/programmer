import React, { useRef } from "react";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import komp from "../pages/images/simple-png.webp";
import portfolio1 from "../pages/images/portfolio.jpg";
import Project2 from "../pages/images/project2.jpg";
import Project3 from "../pages/images/project3.jpg";
import Project4 from "../pages/images/project4.jpg";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

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
      image: portfolio1,
    },
    {
      id: 2,
      title: "TozaUz Yurtimizni birga asraylik!!",
      parag: "Mobil dastur , Web Site ishlab chiqish.",
      link: "https://play.google.com/store/apps/details?id=uz.toza.tozauz",
      image: Project2,
    },
    {
      id: 3,
      title: "Vita in line sog'ligimzni birga asraylik!!",
      parag: "Mobil dastur , Web Site ishlab chiqish.",
      link: "https://play.google.com/store/apps/details?id=uz.hayot.vitaInLine&hl=ru&gl=US",
      image: Project3,
    },
    {
      id: 4,
      title:
        "Allone shahar ichi hamda shaharlar aro taksi xizmati uchun maxsuz ilova.",
      parag: "Mobil dasturini ishlab chiqish.",
      link: "https://play.google.com/store/apps/details?id=io.geo.go",
      image: Project4,
    },
  ];

  const gotoNextBtn = () => {
    projectsSlider?.current?.slickNext();
  };

  const gotoPrevBtn = () => {
    projectsSlider?.current?.slickPrev();
  };
  return (
    <div>
      <Slider {...settings} ref={projectsSlider}>
        {projects.map((item) => {
          return (
            <div
              key={item.id}
              className="flex projects-slider mx-auto flex-wrap border bg-white rounded-[32px] w-[350px] md:w-[600px] lg:w-[1000px] "
            >
              <div className="sm:w-[450px] ml-[70px] sm:mt-[70px] mt-[40px]">
                <p className="uppercase font-[700]">
                  Bizning
                  <span className="bg-gradient-to-r from-[#0677E1] to-[#8C1FE2]  bg-clip-text text-transparent">
                    portfolio
                  </span>
                </p>
                <h2 className="text-[25px]  sm:text-[32px] font-[700] leading-8">
                  {item.title}
                </h2>
                <div className="flex">
                  <Image src={komp} alt="comp img" className="w-8 h-8 mt-2" />
                  <p className="mt-4"> Bizning rolimiz</p>
                </div>
                <p className="mt-3 w-[280px] sm:w-auto">{item.parag}</p>
                <div className="flex justify-between mt-8 flex-wrap  sm:flex-auto">
                  <button className="flex ml-5 w-[350px] text-center sm:w-auto  font-[600] items-center rounded-xl bg-[#F0F4F8] py-[14px] px-5 bg-gradient-to-r from-[#0677E1] to-[#8C1FE2]  bg-clip-text text-transparent">
                    <a href={item.link} target="blank">
                      Loyihani ko&apos;rish
                    </a>
                    <AiOutlineRight className="text-[12px] ml-2 text-[#8C1FE2]" />
                  </button>
                  <div className="text-center ml-[60px] sm:ml-0 sm:mr-0">
                    <button
                      className="text-[12px] mr-4 hover:text-white w-10 h-10 rounded-[40px] hover:bg-gradient-to-r hover:from-sky-600 hover:to-indigo-700"
                      onClick={() => gotoPrevBtn()}
                    >
                      <AiOutlineLeft className="ml-[14px]" />
                    </button>
                    <button
                      className="text-[12px] hover:text-white text-center w-10 h-10 rounded-[40px] hover:bg-gradient-to-r hover:from-sky-600 hover:to-indigo-700"
                      onClick={() => gotoNextBtn()}
                    >
                      <AiOutlineRight className="ml-[14px]  font-bold" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="sm:mt-8  sm:mb-0 ml-4">
                <Image
                  src={item.image}
                  alt="statistika"
                  className="w-[330px] sm:w-[400px] md:w-[600px] md:ml-5  z-[2] mt-6 lg:w-[400px] h-[300px]"
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
