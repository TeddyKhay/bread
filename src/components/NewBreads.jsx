import React, { useEffect } from "react";
import Aos from "aos";


const NewBreads = () => {

    useEffect(() => {
      Aos.init({duration: 2000})
    },[]);

  return (
      <div id="news" className=" bg-black">
        <div className=" text-center pt-5">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-white select-none" data-aos="fade">
            New Breads
          </h1>
        </div>
        <div data-aos="fade" className=" lg:flex justify-center lg:w-[900px] md:w-[900px] md:flex mx-auto">
          <div data-aos="slide-right" className=" flex p-10 lg:flex-col md:flex-col items-center">
            <div  className="">
              <h4 className=" text-yellow-600 text-lg">Rye Bread</h4>
              <p className=" text-white font-mono text-sm">
                Baked with healthy, gluten-free sourdough for good nutrition.
              </p>
            </div>
            <div>
              <img
                className=" w-52 lg:mt-10"
                src="src/img/new-bread-1.png"
              ></img>
            </div>
          </div>
          <div data-aos="slide-up" className=" flex p-10 items-center  flex-row-reverse lg:flex-col-reverse md:flex-col-reverse">
            <div>
              <h4 className=" text-yellow-600 text-lg">Whole Grain Bread</h4>
              <p className=" text-white font-mono text-sm">
                Crispy and homemade prepared from organic yeast-free flour.
              </p>
            </div>
            <div>
              <img className=" w-52 mb-10" src="src/img/new-bread-2.png"></img>
            </div>
          </div>
          <div data-aos="slide-left" className=" flex p-10 items-center lg:flex-col md:flex-col">
            <div>
              <h4 className=" text-yellow-600 text-lg">Multigrain Bread</h4>
              <p className=" text-white font-mono text-sm">
                Tasty and made with different natural grains from the
                countryside.
              </p>
            </div>
            <div>
              <img className=" w-52 mt-10" src="src/img/new-bread-3.png"></img>
            </div>
          </div>
        </div>
        <div>
          <div data-aos="zoom-in" className=" text-center lg:mt-10">
            <a
              className="mt-4 bg-yellow-600 p-4 w-36 text-black font-mono hover:bg-yellow-400 text-center transition duration-200 cursor-pointer"
              type="button"
            >
              See More
            </a>
          </div>
        </div>
      </div>
  );
};

export default NewBreads;
