"use client";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useEffect, useState } from "react";
import { FaArrowRight, FaFacebookF } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

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

interface NavbarProps {
  page: string;
}

const Navbar = (props: NavbarProps) => {
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
          <div className="mx-[8vw] sm:mx-12 flex justify-between items-center p-3 text-white xl:my-2">
            <Link href="/" className="hover:animate-jump">
              <Image
                src="/images/logo_bg_remove.png"
                width={125}
                height={125}
                alt="Horizonwings Overseas Education"
                className="xl:w-[125px] w-[100px]"
              />
            </Link>
            <div className="flex space-x-40 items-center">
              <div className="flex space-x-2">
                <a
                  href="https://horizonwingsoverseaseducation.com/your-facebook-url"
                  className="xl:w-10 xl:h-10 w-8 h-8 flex items-center justify-center rounded-full bg-gray-500/10 hover:animate-fade cursor-pointer"
                >
                  <FaFacebookF className="text-[#52813d] xl:text-base text-sm" />
                </a>
                {/* <div className="xl:w-10 xl:h-10 w-8 h-8 flex items-center justify-center rounded-full bg-gray-500/10 hover:animate-fade cursor-pointer">
                  <FaTwitter className="text-[#52813d] xl:text-base text-sm" />
                </div> */}
                <a
                  href="https://www.instagram.com/horizonwings_overseaseducation"
                  className="xl:w-10 xl:h-10 w-8 h-8 flex items-center justify-center rounded-full bg-gray-500/10 hover:animate-fade cursor-pointer"
                >
                  <AiFillInstagram className="text-[#52813d] xl:text-base text-sm" />
                </a>
                <a
                  href="https://www.linkedin.com/company/horizonwings-overseas-education/"
                  className="xl:w-10 xl:h-10 w-8 h-8 flex items-center justify-center rounded-full bg-gray-500/10 hover:animate-fade cursor-pointer"
                >
                  <FaLinkedin className="text-[#52813d] xl:text-base text-sm" />
                </a>
              </div>
            </div>
            {props?.page === "home" && (
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
            )}
            {props?.page === "home" && (
              <div
                className={
                  nav
                    ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
                    : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
                }
              >
                <ul>
                  <li className="p-4 text-4xl hover:text-[#52813d] hover:animate-wiggle">
                    <a href="#home" onClick={handleNav}>
                      Home
                    </a>
                  </li>
                  <li className="p-4 text-4xl hover:text-[#52813d] hover:animate-wiggle">
                    <a href="#services2" onClick={handleNav}>
                      Services
                    </a>
                  </li>
                  <li className="p-4 text-4xl hover:text-[#52813d] hover:animate-wiggle">
                    <a href="#about" onClick={handleNav}>
                      About
                    </a>
                  </li>
                  <li className="p-4 text-4xl hover:text-[#52813d] hover:animate-wiggle">
                    <a href="#contact" onClick={handleNav}>
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        )}
        {props?.page === "home" && (
          <div
            className={
              topbar
                ? "mx-[60px] xl:py-2 py-1 pl-3 bg-gray-500/10 relative rounded-xl hidden sm:flex"
                : "bg-white mx-[60px] py-2 pl-3 relative rounded-xl hidden sm:flex"
            }
          >
            <ul className="hidden sm:flex">
              <li className="p-2 lg:p-3 xl:p-4 xl:text-lg hover:text-[#52813d] hover:animate-wiggle">
                <a href="#home" onClick={handleNav}>
                  Home
                </a>
              </li>
              <li className="p-2 lg:p-3 xl:p-4 xl:text-lg hover:text-[#52813d] hover:animate-wiggle">
                <a href="#services" onClick={handleNav}>
                  Services
                </a>
              </li>
              <li className="p-2 lg:p-3 xl:p-4 xl:text-lg hover:text-[#52813d] hover:animate-wiggle">
                <a href="#about" onClick={handleNav}>
                  About
                </a>
              </li>
              <li className="p-2 lg:p-3 xl:p-4 xl:text-lg hover:text-[#52813d] hover:animate-wiggle">
                <a href="#contact" onClick={handleNav}>
                  Contact
                </a>
              </li>
            </ul>
            <a
              href="#contact"
              className="absolute right-0 h-full top-0 flex cursor-pointer hover:animate-fade-right"
            >
              <div className="border-l-transparent border-solid xl:border-l-[35px] border-l-[25px] xl:border-b-[75px] border-b-[56px] border-b-[#52813d]"></div>
              <div className="bg-[#52813d] xl:px-[52px] px-[40px] flex items-center text-white xl:text-lg rounded-r-[0.65rem] xl:space-x-3 space-x-1">
                <h4 className="">Register Now</h4>
                <FaArrowRight />
              </div>
            </a>
          </div>
        )}
      </div>
      {!topbar && <div className="py-[84.5px] px-40"></div>}
    </>
  );
};

export default Navbar;
