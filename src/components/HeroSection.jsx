import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const HeroSection = () => {
  return (
    <div id="home">
    <img className="home-bg" src="src/img/home-bg.jpg"></img>
      <div className=" flex flex-col lg:flex-row lg:justify-center lg:gap-52 items-center pt-20">
        <div className=" flex flex-col items-center animate__animated animate__slideInLeft">
          <h1 className="text-5xl lg:text-7xl font-bold mb-4 text-white select-none">
            Select The Best <br></br> Quality Breads
          </h1>
          <button className=" mt-4 bg-yellow-600 p-2 w-36 text-black font-mono hover:bg-yellow-400 transition duration-200">
            Select Breads
          </button>
        </div>
        <div className=" relative z-[-1]">
          <img
            className=" w-12 absolute top-10 left-0 animate__animated animate__bounce"
            src="src/img/bread-1.png"
          ></img>
          <img
            className=" w-72 lg:w-96 rotate-45 animate__animated animate__headShake"
            src="src/img/home-bread.png"
          ></img>
        </div>
      </div>
      <div className=" flex mt-5 justify-between items-center lg:justify-around animate__animated animate__fadeIn">
        <div className=" flex gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 text-yellow-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
            />
          </svg>

          <h1 className=" text-white font-mono font-medium">
            AV. The Sun #321 <br></br> Lima Peru
          </h1>
        </div>

        <div className=" flex gap-4 text-white me-4">
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
