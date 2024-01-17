import React, { useEffect } from "react";
import Aos from "aos";

const NewBreads = ({ name, pic, description }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className=" flex flex-row items-center md:flex-col-reverse lg:flex-col-reverse max-w-full md:w-1/3 lg:w-1/3 p-8 md:p-4 lg:p-10">
      <div data-aos="slide-right">
        <h1 className=" text-yellow-600 text-lg md:text-xl lg:text-2xl">{name}</h1>
        <p className=" text-white font-mono md:text-base lg:text-lg">{description}</p>
      </div>
      <div className="">
        <img data-aos="zoom-in-down" className=" w-52 max-w-full" src={pic}></img>
      </div>
    </div>
  );
};

export default NewBreads;
