import React, { useEffect } from "react";
import Aos from "aos";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FooterBread = () => {

  useEffect(() => {
    Aos.init({duration: 2000})
  },[]);

  return (
    <div className=" max-w-[1980px] m-auto bg-black p-4 lg:py-10 flex flex-col">
      <div className=" relative mb-10">
        <div>
          <h1 className=" text-yellow-600 text-lg">Bakery</h1>
          <p className=" text-white font-mono">
            We make the best bread <br /> in the city.
          </p>
        </div>
        <img data-aos="flip-right"
          className=" absolute top-8 right-10 w-20"
          src="img/bread-4.png"
        ></img>
        <img data-aos="flip-right" className=" absolute top-[220px] left-[120px] w-20 rotate-90" src="img/bread-3.png"></img>
      </div>
      <div className=" flex lg:flex-col justify-between mb-10">
        <div className=" lg:mb-10">
          <h2 className=" text-white font-momo font-semibold mb-2">Address</h2>
          <p className=" text-white font-mono text-sm mb-2">
            AV. The Sun #321 <br /> Lima Peru
          </p>
          <p className=" text-white font-mono text-sm">9AM - 11PM</p>
        </div>
        <div>
          <h2 className=" text-white font-momo font-semibold mb-2">
            Contact Me
          </h2>
          <p className=" text-white font-mono text-sm mb-2">bakery@email.com</p>
          <p className=" text-white font-mono text-sm">+00 987 654 321</p>
        </div>
      </div>
      <div className=" flex justify-between items-center">
        <div>
          <h2 className=" text-white font-momo font-semibold mb-2">
            Follow Us
          </h2>
          <div className=" flex gap-4 text-white me-4">
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterBread;
