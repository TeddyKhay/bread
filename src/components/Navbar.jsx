import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handlarMenu = () => {
    setNav(!nav);
  };

  return (
    <div
      className=" flex container fixed
     justify-between items-center z-[1]"
    >
      <img className="home-bg" src="src/img/home-bg.jpg"></img>
      <div className=" ps-4 pt-2">
        <h1 className="logo text-3xl lg:text-5xl text-yellow-600 font-bold select-none">
          Bakery
        </h1>
      </div>
      <div className=" relative pe-4 pt-2">
        {nav ? (
          <svg
            onClick={handlarMenu}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-4 h-4 text-yellow-600 font-bold xl:hidden hover:border-yellow-400 border-2 border-yellow-600 active:border-yellow-400 duration-200 md:hidden cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <FaBars
            onClick={handlarMenu}
            className="text-yellow-600 font-bold xl:hidden hover:border-yellow-400 border-2 border-yellow-600 active:border-yellow-400 duration-200 md:hidden cursor-pointer"
          />
        )}
        {nav ? (
          <div
            className={`md:hidden absolute ${
              nav
                ? " -right-[350px] animate__animated animate__slideInRight"
                : ""
            } top-10 bg-yellow-600 opacity-90 w-screen h-screen`}
          >
            <ul className="flex flex-col items-center p-4 ">
              <li className="py-2 hover:bg-white w-full cursor-pointer duration-200 active:bg-white">
                <Link
                  onClick={handlarMenu}
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  <a
                    href="home"
                    className="text-black font-mono"
                    type=" button"
                  >
                    Home
                  </a>
                </Link>
              </li>

              <li className="py-2 hover:bg-white ps-1 w-full cursor-pointer duration-200">
                <Link
                  onClick={handlarMenu}
                  to="news"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  <a href="news" className="text-black font-mono">
                    News
                  </a>
                </Link>
              </li>
              <li className="py-2 hover:bg-white ps-1 w-full cursor-pointer duration-200">
                <Link
                  onClick={handlarMenu}
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  <a href="about" className="text-black font-mono">
                    About Us
                  </a>
                </Link>
              </li>
              <li className="py-2 hover:bg-white ps-1 w-full cursor-pointer duration-200">
                <Link
                  onClick={handlarMenu}
                  to="favorites"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  <a href="favorites" className="text-black font-mono">
                    Favorites
                  </a>
                </Link>
              </li>
              <li className="py-2 hover:bg-white ps-1 w-full cursor-pointer duration-200">
                <Link
                  onClick={handlarMenu}
                  to="location"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  <a href="location" className="text-black font-mono">
                    Location
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className=" lg:block md:block hidden pe-10">
        <ul className="flex flex-row gap-6 text-lg">
          <li className="py-2">
            <Link
              onClick={handlarMenu}
              to="home"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <a
                href="home"
                className="text-yellow-600 hover:text-white active:text-white  font-mono"
                type=" button"
              >
                Home
              </a>
            </Link>
          </li>
          <li className="py-2">
            <Link
              onClick={handlarMenu}
              to="news"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <a
                href="news"
                className="text-yellow-600 hover:text-white active:text-white  font-mono"
                type=" button"
              >
                News
              </a>
            </Link>
          </li>
          <li className="py-2">
            <Link
              onClick={handlarMenu}
              to="about"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <a
                href="about"
                className="text-yellow-600 hover:text-white active:text-white  font-mono"
                type=" button"
              >
                About Us
              </a>
            </Link>
          </li>
          <li className="py-2">
            <Link
              onClick={handlarMenu}
              to="favorites"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <a
                href="favorites"
                className="text-yellow-600 hover:text-white active:text-white  font-mono"
                type=" button"
              >
                Favorites
              </a>
            </Link>
          </li>
          <li className="py-2">
            <Link
              onClick={handlarMenu}
              to="location"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <a
                href="location"
                className="text-yellow-600 hover:text-white active:text-white  font-mono"
                type=" button"
              >
                Location
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
