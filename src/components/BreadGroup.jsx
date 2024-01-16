import React from "react";
import Favorites from "./Favorites";

const BreadGroup = () => {
  const breads = [
    {
      id: 1,
      name: "Whole Grain",
      price: "$6.00",
      image: "src/img/favorite-bread-1.png",
    },
    {
      id: 2,
      name: "Rye",
      price: "$8.00",
      image: "src/img/favorite-bread-2.png",
    },
    {
      id: 3,
      name: "Wheat",
      price: "$3.00",
      image: "src/img/favorite-bread-3.png",
    },
    {
      id: 4,
      name: "Multigrain",
      price: "$5.00",
      image: "src/img/favorite-bread-4.png",
    },
    {
      id: 5,
      name: "Sourdough",
      price: "$7.00",
      image: "src/img/favorite-bread-5.png",
    },
    {
      id: 6,
      name: "French",
      price: "$3.00",
      image: "src/img/favorite-bread-6.png",
    },
  ];

  return (
    <div id="favorites" className=" bg-black pb-20">
      <div>
        <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-white select-none text-center pt-20">
          Customer Favorites
        </h1>
      </div>
      <div className=" flex flex-wrap lg:w-[700px] md:w-[700px] md:mx-auto justify-center lg:mx-auto gap-10 lg:gap-24">
        {breads.map(({ id, name, price, image }) => (
          <Favorites key={id} name={name} price={price} image={image}/>
        ))}
      </div>
    </div>
  );
};

export default BreadGroup;
