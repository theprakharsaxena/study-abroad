"use client";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { FaFacebookF } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaHome, FaInfoCircle, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import { MdDesignServices } from "react-icons/md";
import { IoMdContacts } from "react-icons/io";

const MobileNavbarData = [
  {
    link: "/",
    title: "Home",
  },
  {
    link: "/services",
    title: "Services",
  },
  {
    link: "/about",
    title: "About",
  },
  {
    link: "/contact",
    title: "Contact",
  },
];

const MobileNavbar = () => {
  // const [active, setActive] = useState("Home")
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <div className="fixed left-0 top-0 right-0 w-full ease-in duration-300 z-[99999] bg-white shadow-2xl rounded-b-xl">
        <div className="mx-[8vw] sm:mx-12 flex justify-between items-center py-2 text-white my-2">
          <a href="/" className="hover:animate-jump">
            <Image
              src="/images/logo_bg_remove.png"
              width={100}
              height={100}
              alt="Horizonwings Overseas Education"
              // className="w-[100px]"
            />
          </a>
          <div className="flex space-x-40 items-center">
            <div className="flex space-x-2">
              <a
                href="https://horizonwingsoverseaseducation.com/your-facebook-url"
                className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-gray-500/10 hover:animate-fade cursor-pointer"
              >
                <FaFacebookF className="text-[#52813d]" />
              </a>
              {/* <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-gray-500/10 hover:animate-fade cursor-pointer">
                  <FaTwitter className="text-[#52813d]" />
                </div> */}
              <a
                href="https://www.instagram.com/horizonwings_overseaseducation"
                className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-gray-500/10 hover:animate-fade cursor-pointer"
              >
                <AiFillInstagram className="text-[#52813d]" />
              </a>
              <a
                href="https://www.linkedin.com/company/horizonwings-overseas-education/"
                className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-gray-500/10 hover:animate-fade cursor-pointer"
              >
                <FaLinkedin className="text-[#52813d]" />
              </a>
            </div>
          </div>
          <div
            onClick={handleNav}
            className="block sm:hidden z-10 cursor-pointer text-[#52813d]"
          >
            {nav ? (
              <AiOutlineClose size={20} className="" />
            ) : (
              <AiOutlineMenu size={20} />
            )}
          </div>
          <div
            className={
              nav
                ? "sm:hidden absolute top-20 right-3 flex justify-center items-start bg-[#52813d] rounded-xl ease-in duration-300 shadow-2xl shadow-black"
                : "sm:hidden absolute top-20 right-[-100%] flex justify-center items-start bg-[#52813d] ease-in duration-300 shadow-2xl shadow-black"
            }
          >
            <ul>
              <li className="px-6 py-2 text-xl hover:text-[#8ec442] hover:animate-wiggle flex items-center space-x-2">
                <FaHome />
                <a href="#home" onClick={handleNav}>
                  Home
                </a>
              </li>
              <li className="px-6 py-2 text-xl hover:text-[#8ec442] hover:animate-wiggle flex items-center space-x-2">
                <MdDesignServices />
                <a href="#services2" onClick={handleNav}>
                  Services
                </a>
              </li>
              <li className="px-6 py-2 text-xl hover:text-[#8ec442] hover:animate-wiggle flex items-center space-x-2">
                <FaInfoCircle />
                <a href="#about" onClick={handleNav}>
                  About
                </a>
              </li>
              <li className="px-6 py-2 text-xl hover:text-[#8ec442] hover:animate-wiggle flex items-center space-x-2">
                <IoMdContacts />
                <a href="#contact" onClick={handleNav}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNavbar;
