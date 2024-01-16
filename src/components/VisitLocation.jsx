import React, { useEffect } from "react";
import Aos from "aos";

const VisitLocation = () => {

  useEffect(() => {
    Aos.init({duration: 2000})
  },[]);

  return (
    <div id="location" className=" relative">
      <div className=" flex flex-col items-center pt-10">
        <div data-aos="flip-up">
          <h1 className="text-4xl lg:text-6xl font-bold text-white select-none text-center lg:mb-5">
            Visit Us
          </h1>
          <p className=" text-white lg:text-[25px] font-mono text-lg select-none w-[500px] p-4">
            Discover the best bread, we look forward to your visit.
          </p>
        </div>
        <div data-aos="zoom-in" className=" p-10">
          <a
            className="mt-4 bg-yellow-600 p-2 w-36 text-black font-mono hover:bg-yellow-400 transition duration-200 select-none cursor-pointer text-center"
            type="button"
          >
            See Location
          </a>
        </div>
        </div>
        <img data-aos="fade-in" className=" absolute h-[100%] w-[100%] z-[-1]  object-cover top-0" src="src/img/visit-bg.jpg"></img>
    </div>
  );
};

export default VisitLocation;
