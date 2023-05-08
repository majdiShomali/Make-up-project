import React, { useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import { Link } from "react-router-dom";
import beautyb from "../Image/beautyb.png";
import logomakeup from "../Image/logomakeup.png";

import Icon from "@mdi/react";
import { mdiAlphaX, mdiMenu } from "@mdi/js";
import "./Navbar.css";
import { IconButton } from "@material-tailwind/react";

import { useContext } from "react";
import { UserContext } from "../Product/ProductContext";





const Navbar = () => {

  const {signState,updatesignState } = useContext(UserContext);



  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="w-screen h-[80px] z-10 bg-[#e4e4e7] drop-shadow-lg sticky top-0">
      <div className="px-2 flex justify-between items-center w-full h-full px-10">
        <div className="flex items-center ">
          <div className="w-12">
            <img className="object-cover" src={logomakeup} alt="" />
          </div>

          <ul className="hidden md:flex">
            <Link to="Landing">
              <li className="liNav" smooth={true} duration={500}>
                Home
              </li>
            </Link>
            <Link to="About">
              <li className="liNav" smooth={true} offset={-200} duration={500}>
                About
              </li>
            </Link>
            <Link to="Store">
              <li className="liNav" smooth={true} offset={-50} duration={500}>
                Store
              </li>
            </Link>
            <Link to="Contact">
              <li className="liNav" smooth={true} offset={-100} duration={500}>
                {" "}
                Contact
              </li>
            </Link>
            <li className="liNav">
              <Link to="" smooth={true} offset={-50} duration={500}>
                Cart
              </Link>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex pr-4">
         <Link to="Cart"> <button className="px-8 py-3 buttonNav border-none bg-transparent text-black mr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
            </svg>
          </button>
          </Link>
          <button className="buttonNav border-none bg-transparent px-8 py-3 text-black mr-4">
            <Link to="Login">{signState}</Link>
          </button>
        </div>
        <div className="md:hidden mr-4" onClick={handleClick}>
          {!nav ? (
            <Icon path={mdiMenu} size={2} />
          ) : (
            <Icon path={mdiAlphaX} size={2} />
          )}
          {/* <XIcon className='w-5'  /> */}
        </div>
      </div>

      <ul className={!nav ? "hidden" : "absolute bg-[#d4d4d8] w-full px-8 z-10"}>
        <li className="liNav border-b-2 border-[#d4d4d8] w-full">
          <Link to="Landing" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="liNav border-b-2 border-[#d4d4d8] w-full">
          <Link to="About" smooth={true} offset={-200} duration={500}>
            About
          </Link>
        </li>
        <li className="liNav border-b-2 border-[#d4d4d8] w-full">
          <Link to="Store" smooth={true} offset={-50} duration={500}>
            Store
          </Link>
        </li>
        <li className="liNav border-b-2 border-[#d4d4d8] w-full">
          <Link to="Contact" smooth={true} offset={-100} duration={500}>
            Contact
          </Link>
        </li>
        <li className="liNav border-b-2 border-[#d4d4d8] w-full">
          <Link to="" smooth={true} offset={-50} duration={500}>
            #
          </Link>
        </li>
        <div className="flex flex-col my-4">
          <button className="buttonNav bg-transparent text-pink-600 px-8 py-3 mb-4">
            <Link to="Login">{signState}</Link>
          </button>
          <button className="buttonNav px-8 py-3 text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
            </svg>
          </button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
