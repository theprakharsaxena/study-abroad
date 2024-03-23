"use client";
import { FaFacebookF, FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import Image from "next/image";
import { IoCall, IoLocation } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";

var today = new Date();
var year = today.getFullYear();

const Footer = () => {
  return (
    <div className="bg-[#eff8ff]">
      <div className="mx-10 py-12 text-black">
        <div className="grid grid-cols-1 sm:grid-cols-9 gap-20">
          <div className="flex flex-col items-center space-y-5 sm:col-span-2">
            <Image
              src="/images/logo.jpg"
              width={165}
              height={50}
              alt="Horizonwings Overseas Education
              "
            />
            <div className="flex items-start space-x-10">
              <a
                href="https://horizonwingsoverseaseducation.com/your-facebook-url"
                className="text-2xl cursor-pointer flex items-center justify-center rounded-full bg-[#eff8ff]/10"
              >
                <FaFacebookF className="text-[#8ec442]" />
              </a>
              {/* <div className="text-2xl cursor-pointer flex items-center justify-center rounded-full bg-[#eff8ff]/10">
              <FaTwitter className="text-[#8ec442]" />
            </div> */}
              <a
                href="https://www.instagram.com/horizonwings_overseaseducation"
                className="text-2xl cursor-pointer flex items-center justify-center rounded-full bg-[#eff8ff]/10"
              >
                <AiFillInstagram className="text-[#8ec442]" />
              </a>
              <a
                href="https://www.linkedin.com/company/horizonwings-overseas-education/"
                className="text-2xl cursor-pointer flex items-center justify-center rounded-full bg-[#eff8ff]/10"
              >
                <FaLinkedin className="text-[#8ec442]" />
              </a>
            </div>
          </div>
          <div className="flex flex-col items-start space-y-16 sm:col-span-4">
            <div className="flex items-center justify-around w-full">
              <a href="/our-cause" className="other-link">
                Home
              </a>
              <a href="/" className="other-link">
                Services
              </a>
              <a href="/" className="other-link">
                About Us
              </a>
              <a href="/" className="other-link">
                Register
              </a>
            </div>
            <div className="flex flex-col justify-between w-full">
              <h3 className="text-xl">Study Abroad, Register Now</h3>
              <div className="flex mt-3">
                <input
                  type="text"
                  placeholder="Enter your email address"
                  className="bg-opacity-15 border-0 text-black py-3 px-4 w-full rounded-l"
                />
                <a
                  href="#contact"
                  className="bg-[#8ec442] px-12 py-3 text-white rounded-r"
                >
                  Join
                </a>
              </div>
            </div>
          </div>
          <div className="sm:col-span-3">
            <div className="flex flex-col space-y-1 font-normal text-sm text-black items-start h-full">
              <span className="flex space-x-1 items-center">
                <IoLocation className="text-[#52813d]" />
                <p>Noida, India</p>
              </span>
              <span className="flex space-x-1 items-center">
                <IoCall className="text-[#52813d]" />
                <p>+91 9953102105</p>
              </span>
              <span className="flex space-x-1 items-center">
                <IoCall className="text-[#52813d]" />
                <p>+91 8920338680</p>
              </span>
              <span className="flex space-x-1 items-center">
                <IoCall className="text-[#52813d]" />
                <p>+91 9695033798</p>
              </span>
              <span className="flex space-x-1 items-center">
                <HiOutlineMail className="text-[#52813d]" />
                <p>info.horizonwings@gmail.com</p>
              </span>
              <span className="flex space-x-1 items-center">
                <HiOutlineMail className="text-[#52813d]" />
                <p>hitesh.horizonwings@gmail.com</p>
              </span>
              <span className="flex space-x-1 items-center">
                <HiOutlineMail className="text-[#52813d]" />
                <p>anusha.horizonwings@gmail.com</p>
              </span>
            </div>
          </div>
        </div>
        <div className="bg-[#8ec442] p-1 mt-8 pb-1"></div>
        <div className="flex flex-col sm:justify-between">
          <p className="font-normal text-sm pt-3">
            Horizonwings Overseas Education &copy; {year} All Rights Reserved
          </p>
          <div className="flex pt-3 justify-between">
            <p className="font-normal text-sm">Terms & Conditions</p>
            <p className="font-normal text-sm">Privacy & Cookies</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
