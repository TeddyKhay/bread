import React, { useEffect } from "react";
import Aos from "aos";

const About = () => {

  useEffect(() => {
    Aos.init({duration: 2000})
  },[]);

  return (
    <div id="about" className=" max-w-[1980px] m-auto bg-black flex flex-col lg:flex-row-reverse lg:justify-center md:flex-row-reverse md:justify-center items-center">
      <div  className=" relative w-fit lg:w-1/3 md:w-10/3 z-[0] ">
        <h1 data-aos="fade" className="text-4xl lg:text-5xl font-bold mb-4 text-white select-none text-center pt-20">
          About Us
        </h1>
        <p data-aos="fade" className=" text-white font-mono text-lg select-none p-4">
          We prepare all types of bread that are made at home, maintaining the
          tradition of using only the best ingredients made with local products
          whenever possible. We have an extensive line of freshly prepared
          bakery and coffee products.
        </p>
        <img data-aos="flip-right" className=" absolute w-20 left-10 top-10 rotate-12" src="img/bread-3.png"></img>
        <img data-aos="flip-right" className=" absolute w-20 right-8 bottom-5 rotate-180" src="img/bread-2.png"></img>
        <div data-aos="zoom-in" className=" text-center m-5">
          <a
            className="mt-4 bg-yellow-600 p-2 w-36 text-black font-mono hover:bg-yellow-400 text-center transition duration-200 cursor-pointer"
            type="button"
          >
            Know More
          </a>
        </div>
      </div>
      <div data-aos="zoom-in" className="w-fit lg:w-1/3 md:w-1/3">
        <img className=" w-80 lg:w-[80%] pt-10 lg:pb-10 " src="img/about-bread.png"></img>
      </div>
    </div>
  );
};

export default About;
