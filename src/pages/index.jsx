import Head from "next/head";
import Image from "next/image";
import Logo from "./images/Logo.png";
import PortFolio1 from "./images/portfolio1.png";
import portfoli2 from "./images/portfolio2.png";
import maket3 from "./images/maket3.png";
import bot from "./images/Telegram.png";
import crm from "./images/crm.png";
import phone from "./images/phone.png";
import dizayn from "./images/dizayn.png";
import graf from "./images/graf.png";
import saytlar from "./images/sayt-logo.png";
import { MdOutlinePhone } from "react-icons/md";
import Goal from "./images/business-goal.png";
import Tools from "./images/repair-tool.png";
import Slider from "../components/Slider";
import Modal from "@/components/modal";
import { useGlobalContext } from "../context";
import Accordion from "@/components/Accordion";
import PortfolioSlider from "@/components/PortfolioSlider";

export default function Home() {
  const { showModal, setShowModal } = useGlobalContext();
  return (
    <div className="bg-[#F9FBFC] scroll-smooth w-full">
      <Head>
        <title>Programmer</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-[300px] md:w-[800px] lg:w-[1000px] mx-auto pt-5">
        <div className="flex border  border-[#D7E0E8] rounded-[30px] sm:items-center p-2">
          <Image src={Logo} alt="logo img" className="w-[100px] md:w-auto" />
          <ul className="lg:flex mx-auto text-[17px] md:flex hidden m-0">
            <li className="mx-[20px] ">
              <a className=" text-black" href="#portfolio">
                Portfolio
              </a>
            </li>
            <li className="mx-[20px]">
              <a href="#services" className=" text-black">
                Bizning xizmatlarimiz
              </a>
            </li>
            <li className="mx-[20px] ">
              <a href="#founders" className="text-black">
                Hamkorlar
              </a>
            </li>
          </ul>
          <button
            type="tell"
            className="ml-7 sm:ml-0 flex items-center sm:mr-4 text-[12px] sm:text-[16px]"
          >
            <MdOutlinePhone className="mr-3" />
            <p className="m-0 dark:text-black">+998 91 339 99 00</p>
          </button>
        </div>
        <div className="mx-auto text-center mt-10">
          <p className="text-[17px]">
            Biznesingizni keyingi bosqichga olib chiqish yoki
            g&apos;oyalaringizni binzesga aylantirish haqida
            qayg&apos;uryapsizmi?
          </p>
          <h1 className="text-[#0D0C0F] text-[40px] md:text-[60px]">
            <span className="text-[#0677E1]">Programmist.uz</span> bilan
            tanishing
          </h1>
          <p className="text-[17px]">
            Hurmat bilan, Mijozlar muammosiga IT orqali yechim beruvchi jamoa!
          </p>
          {showModal ? <Modal /> : ""}
          <button
            onClick={() => setShowModal(true)}
            className="mt-3 bg-[#0677E1] rounded-xl px-[60px] py-[14px] text-white bg-gradient-to-r from-[#0677E1] to-[#8C1FE2]"
          >
            Bepul konsultatsiya olish
          </button>
          <div className="flex overflow-auto mt-10 flex-wrap">
            <Image
              src={PortFolio1}
              alt="maket1"
              className="w-[300px] md:w-[650px] md:h-[550px]"
            />
            <div className="reletive flex">
              <Image
                alt="maket2"
                src={portfoli2}
                className="w-[200px] sm:w-[300px] md:h-[520px] ml-4 z-[1]"
              />
              <Image
                alt="maket3"
                src={maket3}
                className="w-[200px] sm:w-[300px] right-[85px] z-[0] absolute md:right-[100px] mt-[20px] md:h-[520px]"
              />
            </div>
          </div>
        </div>
      </div>
      <section id="portfolio">
        <div className="lg:w-[1000px] mx-auto md:mt-10">
          <h1 className="mt-10 sm:mt-0 text-[30px] md:text-[40px] text-center font-[700]">
            Bizning{" "}
            <span className="bg-gradient-to-r from-[#0677E1] to-[#8C1FE2]  bg-clip-text text-transparent">
              statistika
            </span>{" "}
          </h1>
          <div className="flex justify-center mt-8 flex-wrap dark:text-black">
            <div className="bg-white  border w-[150px] sm:w-[280px] rounded-[18px]  text-center h-[150px]">
              <h2 className="text-[30px] sm:text-[40px] font-[700] mt-8 ">
                3+
              </h2>
              <p>Yillik tajriba</p>
            </div>
            <div className="bg-white border w-[150px] sm:w-[280px] rounded-[18px]  mx-5 text-center h-[150px]">
              <h2 className="text-[30px] sm:text-[40px] font-[700] mt-8">
                13 +
              </h2>
              <p>Loyihalar</p>
            </div>
            <div className="mt-4 lg:mt-0 bg-white border w-[320px] sm:w-[280px] rounded-[18px]  text-center h-[150px]">
              <h2 className="text-[30px] sm:text-[40px] font-[700] mt-8">
                13 +
              </h2>
              <p>Mutaxxasislar</p>
            </div>
          </div>
        </div>
        <div className="mt-10 w-[1000px] mx-auto">
          <PortfolioSlider />
        </div>
      </section>
      <section className="bg-white rounded-[40px] mt-20 " id="services">
        <div className="lg:w-[1000px] md:w-[800px ] mx-auto">
          <h1 className="text-center text-[30px] md:text-[40px] font-[700] ">
            Bizning{" "}
            <span className="bg-gradient-to-r from-[#0677E1] to-[#8C1FE2]  bg-clip-text text-transparent">
              xizmatlar
            </span>{" "}
          </h1>
          <div className="flex flex-wrap mx-auto justify-center text-center dark:text-black">
            <div className="w-[150px] sm:w-[300px] h-[150px] sm:h-[200px] flex flex-col items-center justify-center bg-[#F8FBFE] m-2 rounded-[18px] border">
              <div className="w-20 h-20 rounded-[80px]  bg-[#ECEBFC] place-items-center flex justify-center">
                <Image className="" src={saytlar} alt="saytlar" />
              </div>
              <p className="mt-2">Vebsayt yaratish</p>
            </div>
            <div className="w-[150px] sm:w-[300px] h-[150px] sm:h-[200px] flex flex-col items-center justify-center bg-[#F8FBFE] m-2 rounded-[18px] border">
              <div className="w-20 h-20 rounded-[80px] bg-[#ECEBFC] place-items-center flex justify-center">
                <Image src={crm} alt="CRM" />
              </div>
              <p className="mt-2">CRM</p>
            </div>
            <div className="w-[150px] sm:w-[300px] h-[150px] sm:h-[200px] flex flex-col items-center justify-center bg-[#F8FBFE] m-2 rounded-[18px] border">
              <div className="w-20 h-20 rounded-[80px] bg-[#ECEBFC] place-items-center flex justify-center">
                <Image src={bot} alt="telegram" />
              </div>
              <p className="mt-2">Telegram bot</p>
            </div>
            <div className="w-[150px] sm:w-[300px] h-[150px] sm:h-[200px] flex flex-col items-center justify-center bg-[#F8FBFE] m-2 rounded-[18px] border">
              <div className="w-20 h-20 rounded-[80px] bg-[#ECEBFC] place-items-center flex justify-center">
                <Image src={phone} alt="phone" />
              </div>
              <p className="mt-2">Mobile ilovalar</p>
            </div>
            <div className="w-[150px] sm:w-[300px] flex flex-col items-center justify-center h-[150px] sm:h-[200px] bg-[#F8FBFE] m-2 rounded-[18px] border">
              <div className="w-20 h-20 rounded-[80px] bg-[#ECEBFC] place-items-center flex justify-center">
                <Image src={dizayn} alt="grafic dizayn" />
              </div>
              <p className="mt-2">Grafik dizayn</p>
            </div>
            <div className="w-[150px] sm:w-[300px] place-items-center flex-col flex justify-center h-[150px] sm:h-[200px] bg-[#F8FBFE] m-2 rounded-[18px] border">
              <div className="w-20 h-20 rounded-[80px] bg-[#ECEBFC] place-items-center flex justify-center">
                <Image src={graf} alt="UI UX dizayn" />
              </div>
              <p className="mt-2">UX/UI Dizayn</p>
            </div>
          </div>

          <button
            onClick={() => setShowModal(true)}
            className="text-center text-white rounded-xl mt-5 sm:mt-[60px] block mx-auto px-[60px] py-[14px] bg-gradient-to-r from-[#0677E1] to-[#8C1FE2]"
          >
            Bepul konsultatsiya olish
          </button>
        </div>
      </section>
      <section id="founders">
        <div className=" md:w-[1000px] mx-auto mt-10 md:mt-[150px]">
          <h1 className="text-center text-[30px]  md:text-[40px] font-[700] dark:text-black">
            Bizning{" "}
            <span className="bg-gradient-to-r from-[#0677E1] to-[#8C1FE2]  bg-clip-text text-transparent">
              hamkorlar
            </span>{" "}
          </h1>
          <Slider />
          <div className="mt-20 flex flex-wrap dark:text-black  justify-center ">
            <h2 className="text-[30px]  md:text-[40px] text-center w-[300px] sm:w-[400px] md:w-[500px] lg:w-[400px] font-[700]">
              Eng ko&apos;p beriladigan{" "}
              <span className="text-[#8C1FE2] ">savollar</span>{" "}
            </h2>
            <div>
              <Accordion />
            </div>
          </div>
        </div>
      </section>

      <footer className="md:w-[1000px] dark:text-black mx-auto md:h-[300px] flex-wrap justify-around bg-white rounded-[40px] flex">
        <div className="mt-10">
          <Image src={Goal} alt="business goal" />
        </div>
        <div className="w-[300px] md:w-[500px] flex flex-col justify-center items-center">
          <h2 className="text-[30px] md:text-[50px] font-[700]  ">
            O&apos;ylab{" "}
            <span className="bg-gradient-to-r from-[#0677E1] to-[#8C1FE2]  bg-clip-text text-transparent">
              ko&apos;ring!
            </span>{" "}
          </h2>
          <p>O&apos;ylab o&apos;tirishga vaqt yo&apos;q!</p>
          <p className="text-center px-7 my-2">
            Hoziroq biznesingizni keyingi bosqichga olib chiqing yoki o&apos;z
            g&apos;oyalaringizni biznesga aylantiring!
          </p>
          <button
            onClick={() => setShowModal(true)}
            className=" text-white rounded-xl py-[14px] px-[60px] bg-gradient-to-r from-[#0677E1] to-[#8C1FE2]"
          >
            Bepul konsultatsiya olish
          </button>
        </div>
        <div className="md:mt-[120px]">
          <Image src={Tools} alt="repair tools" />
        </div>
      </footer>
      <h1 className="text-center text-[25px] dark:text-black md:text-[30px] font-[700]">
        Biz bilan{" "}
        <span className="bg-gradient-to-r from-[#0677E1] to-[#8C1FE2]  bg-clip-text text-transparent">
          bog&apos;lanish
        </span>
      </h1>
      <div className="dark:text-black  w-[300px] mt-10 text-center flex-wrap rounded-[30px] pb-4 md:w-[800px] lg:w-[1000px] justify-between py-2 mx-auto  flex items-center">
        <a
          href=" https://t.me/programmist_outsource"
          className="flex items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-telegram mr-4 text-[#3E52E2]"
            viewBox="0 0 16 16"
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z" />
          </svg>
          Telegram
        </a>

        <a
          className="m-0 flex items-center"
          href="http://instagram.com/programmistuz_/"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-instagram mr-4 text-[#3E52E2]"
            viewBox="0 0 16 16"
          >
            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
          </svg>
          Instagram
        </a>
        <button
          type="tell"
          className="flex items-center ml-[70px] sm:ml-0 md:mr-10"
        >
          <MdOutlinePhone className="mr-3 text-center text-[#3E52E2]" /> +998 91
          339 99 00
        </button>
      </div>
    </div>
  );
}
