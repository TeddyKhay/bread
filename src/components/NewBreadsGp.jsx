import React, { useEffect } from "react";
import NewBreads from "./NewBreads";
import Aos from "aos";

const NewBreadsGp = () => {
  const newBreads = [
    {
      id: 1,
      name: "Rye Bread",
      pic: "img/new-bread-1.png",
      description:
        "Baked with healthy, gluten-free sourdough for good nutrition. ",
    },
    {
      id: 2,
      name: "Whole Grain Bread",
      pic: "img/new-bread-2.png",
      description:
        "Crispy and homemade prepared from organic yeast-free flour.",
    },
    {
      id: 3,
      name: "Multigrain Bread",
      pic: "img/new-bread-3.png",
      description:
        "Tasty and made with different natural grains from the countryside.",
    },
  ];

  useEffect(() => {
    Aos.init({duration:2000})
  },[]);

  return (
    <div id="news" className=" max-w-[1980px] m-auto bg-black py-10">
      <h1
        className="text-4xl lg:text-5xl text-center font-bold mb-4 text-white select-none"
        data-aos="fade"
      >
        New Breads
      </h1>
      <div className=" flex flex-wrap justify-center">
        {newBreads.map(({ id, name, pic, description }) => (
          <NewBreads key={id} name={name} pic={pic} description={description} />
        ))}
      </div>
      <div data-aos="zoom-in" className=" text-center lg:mt-10">
      <a
        class="mt-4 bg-yellow-600 py-4 px-4 text-black font-mono hover:bg-yellow-400 text-center transition duration-200 cursor-pointer"
        type="button"
      >
        See More breads
      </a>
    </div>
    </div>
  );
};

export default NewBreadsGp;
