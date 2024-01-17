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
      className=" max-w-[1980px] fixed bg-transparent w-full z-[99]"
    >
    <nav className=" relative h-12 flex items-center justify-between">
    <div className=" ps-4 pt-2">
    <h1 className="logo text-3xl lg:text-5xl text-yellow-600 font-bold select-none">
      Bakery
    </h1>
  </div>
  <div className=" pe-4">
    {nav ? (
      <svg
        onClick={handlarMenu}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2.5"
        stroke="currentColor"
        className=" h-7 text-yellow-600 font-bold xl:hidden duration-200 md:hidden cursor-pointer  transition-all"
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
        className="text-yellow-600 text-xl font-bold xl:hidden md:hidden cursor-pointer duration-200"
      />
    )}
    {nav ? (
      <div
        className={`md:hidden nav-menu fixed ${
          nav
            ? " top-14 left-0 animate__animated animate__slideInDown"
            : " "
        } w-screen h-[40%]`}
      >
        <ul className="flex flex-col text-center">
          <li className="py-4 mt-1 hover:bg-white w-full cursor-pointer duration-200 active:bg-white">
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
                className=" font-bold text-yellow-600 text-lg font-mono"
                type=" button"
              >
                Home
              </a>
            </Link>
          </li>

          <li className="py-4 hover:bg-white ps-1 w-full cursor-pointer duration-200">
            <Link
              onClick={handlarMenu}
              to="news"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <a href="news" className="font-bold text-yellow-600 text-lg font-mono">
                News
              </a>
            </Link>
          </li>
          <li className="py-4 hover:bg-white ps-1 w-full cursor-pointer duration-200">
            <Link
              onClick={handlarMenu}
              to="about"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <a href="about" className="font-bold text-yellow-600 text-lg font-mono">
                About Us
              </a>
            </Link>
          </li>
          <li className="py-4 hover:bg-white ps-1 w-full cursor-pointer duration-200">
            <Link
              onClick={handlarMenu}
              to="favorites"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <a href="favorites" className="font-bold text-yellow-600 text-lg font-mono">
                Favorites
              </a>
            </Link>
          </li>
          <li className="py-4 hover:bg-white ps-1 w-full cursor-pointer duration-200">
            <Link
              onClick={handlarMenu}
              to="location"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <a href="location" className="font-bold text-yellow-600 text-lg font-mono">
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
  <div className=" nav-menu hidden md:block lg:block pe-10 ps-10 z-10">
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
            className="text-yellow-600 hover:text-white active:text-white text-lg font-mono"
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
            className="text-yellow-600 hover:text-white active:text-white text-lg  font-mono"
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
            className="text-yellow-600 hover:text-white active:text-white text-lg  font-mono"
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
            className="text-yellow-600 hover:text-white active:text-white text-lg  font-mono"
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
            className="text-yellow-600 hover:text-white active:text-white text-lg  font-mono"
            type=" button"
          >
            Location
          </a>
        </Link>
      </li>
    </ul>
  </div>
    </nav>
    </div>
  );
};

export default Navbar;
