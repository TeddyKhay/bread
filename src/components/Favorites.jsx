import React, { useEffect } from "react";
import Aos from "aos";

const Favorites = ({ name, price, image }) => {

  useEffect(() => {
    Aos.init({duration: 2000})
  },[]);


  return (
      <div data-aos="zoom-in-up" className=" flex flex-col items-center mt-10 w-1/3 md:w-1/4 lg:w-1/4">
      <div className=" -mb-[80px] z-10">
      <img data-aos="ease-in" className=" w-40" src={image}></img>
      </div>
      <div className=" bg-neutral-900 pt-[50px] w-40">
          <div className=" flex justify-between items-center p-2 pt-[50px]">
            <div>
              <h4 className=" text-yellow-600 text-[1.2rem]">{name}</h4>
              <p className=" text-white">Bread</p>
              <p className=" text-white">{price}</p>
            </div>
            <div className="mt-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 border-2 bg-yellow-500  border-yellow-500 text-white cursor-pointer hover:bg-yellow-600"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Favorites;
