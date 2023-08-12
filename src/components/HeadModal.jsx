import React from "react";
import Image from "next/image";
import { MdOutlinePhone } from "react-icons/md";
import Logo from "../pages/images/Logo.png";
import { useGlobalContext } from "@/context";

function HeadModal() {
  const { showHeadModal, setShowHeadModal } = useGlobalContext();
  return (
    <div
      onClick={() => setShowHeadModal(false)}
      className="w-full z-[5] fixed top-0 right-0 left-0 bottom-0 bg-[rgba(0,0,0,0.7)] h-[100vh]"
    >
      <div
        className="bg-white p-5 pb-10 w-[300px]  rounded-br-[18px]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between">
          <Image src={Logo} alt="logo img" className="w-[200px] md:w-auto" />
          <button
            onClick={() => setShowHeadModal(false)}
            className="w-10 h-10 rounded-[40px] bg-[#F3EFFD] pb-1 mb-2 dark:text-black"
          >
            🗙
          </button>
        </div>
        <ul className="lg:flex mx-auto text-[17px] mt-5 md:flex  m-0">
          <li
            className="mx-[20px]  my-10"
            onClick={() => setShowHeadModal(false)}
          >
            <a className=" text-black" href="#portfolio">
              Portfolio
            </a>
          </li>
          <li
            className="mx-[20px] my-10"
            onClick={() => setShowHeadModal(false)}
          >
            <a href="#services" className=" text-black">
              Bizning xizmatlarimiz
            </a>
          </li>
          <li
            className="mx-[20px]  my-10"
            onClick={() => setShowHeadModal(false)}
          >
            <a href="#founders" className="text-black">
              Hamkorlar
            </a>
          </li>
        </ul>

        <button
          type="tell"
          className="ml-4 sm:ml-0 flex items-center sm:mr-4"
          onClick={() => setShowHeadModal(false)}
        >
          <MdOutlinePhone className="mr-3 text-black" />
          <p className="m-0 dark:text-black md:block ">+998 91 339 99 00</p>
        </button>
      </div>
    </div>
  );
}

export default HeadModal;
