"use client";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useEffect, useState } from "react";
import { FaArrowRight, FaFacebookF, FaTwitter } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import Image from "next/image";

const NavbarData = [
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

const Navbar = () => {
  // const [active, setActive] = useState("Home")
  const [nav, setNav] = useState(false);
  const [topbar, setTopbar] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setTopbar(false);
      } else {
        setTopbar(true);
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <>
      <div
        style={{ backgroundColor: "transparent" }}
        className={
          topbar
            ? `w-full z-[99999]`
            : `fixed left-0 top-0 w-full ease-in duration-300 z-[99999]`
        }
      >
        {topbar && (
          <div className="mx-[8vw] sm:mx-12 flex justify-between items-center py-3 sm:p-3 text-white my-2">
            <a href="/" className="hover:animate-jump">
              <Image
                src="/images/logo_bg_remove.png"
                width={125}
                height={125}
                alt="Horizonwings Overseas Education
              "
              />
            </a>
            <div className="flex space-x-40 items-center">
              <div className="flex space-x-2">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-500/10 hover:animate-fade cursor-pointer">
                  <FaFacebookF className="text-[#52813d]" />
                </div>
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-500/10 hover:animate-fade cursor-pointer">
                  <FaTwitter className="text-[#52813d]" />
                </div>
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-500/10 hover:animate-fade cursor-pointer">
                  <AiFillInstagram className="text-[#52813d]" />
                </div>
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-500/10 hover:animate-fade cursor-pointer">
                  <IoLogoWhatsapp className="text-[#52813d]" />
                </div>
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
                  ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
                  : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
              }
            >
              <ul>
                <li className="p-4 text-4xl hover:underline hover:underline-offset-8 hover:text-[#52813d] hover:animate-wiggle">
                  <a href="#home" onClick={handleNav}>
                    Home
                  </a>
                </li>
                <li className="p-4 text-4xl hover:underline hover:underline-offset-8 hover:text-[#52813d] hover:animate-wiggle">
                  <a href="#services" onClick={handleNav}>
                    Services
                  </a>
                </li>
                <li className="p-4 text-4xl hover:underline hover:underline-offset-8 hover:text-[#52813d] hover:animate-wiggle">
                  <a href="#about" onClick={handleNav}>
                    About
                  </a>
                </li>
                <li className="p-4 text-4xl hover:underline hover:underline-offset-8 hover:text-[#52813d] hover:animate-wiggle">
                  <a href="#contact" onClick={handleNav}>
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        )}
        <div
          className={
            topbar
              ? "mx-[60px] py-2 pl-3 bg-gray-500/10 relative rounded-xl hidden sm:flex"
              : "bg-white mx-[60px] py-2 pl-3 relative rounded-xl hidden sm:flex"
          }
        >
          <ul className="hidden sm:flex">
            <li className="p-2 md:p-4 md:text-lg hover:underline hover:underline-offset-8 hover:text-[#52813d] hover:animate-wiggle">
              <a href="#home" onClick={handleNav}>
                Home
              </a>
            </li>
            <li className="p-2 md:p-4 md:text-lg hover:underline hover:underline-offset-8 hover:text-[#52813d] hover:animate-wiggle">
              <a href="#services" onClick={handleNav}>
                Services
              </a>
            </li>
            <li className="p-2 md:p-4 md:text-lg hover:underline hover:underline-offset-8 hover:text-[#52813d] hover:animate-wiggle">
              <a href="#about" onClick={handleNav}>
                About
              </a>
            </li>
            <li className="p-2 md:p-4 md:text-lg hover:underline hover:underline-offset-8 hover:text-[#52813d] hover:animate-wiggle">
              <a href="#contact" onClick={handleNav}>
                Contact
              </a>
            </li>
          </ul>
          <div className="absolute right-0 h-full top-0 flex cursor-pointer hover:animate-fade-right">
            <div className="border-l-transparent border-solid border-l-[35px] border-b-[75px] border-b-[#52813d]"></div>
            <div className="bg-[#52813d] px-[52px] flex items-center text-white text-lg rounded-r-[0.65rem] space-x-3">
              <a href={`/`} className="">
                Register Now
              </a>
              <FaArrowRight />
            </div>
          </div>
        </div>
      </div>
      {!topbar && <div className="py-[84.5px] px-40"></div>}
    </>
  );
};

export default Navbar;
