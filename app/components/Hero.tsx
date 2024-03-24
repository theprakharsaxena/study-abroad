"use client";
import { FaArrowRight } from "react-icons/fa6";
import Navbar from "./Navbar";
import MobileNavbar from "./MobileNavbar";

const Hero = () => {
  return (
    <>
      <div
        className="flex flex-col items-start justify-start bg-[#eff8ff] bg-[url('https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiiTCa5UrICizjb7Es8Us3BHnnLNMqZEg4zCEmcAuPrsl30EO6IL3s1WWhQXYn3qnPhq6AxkY49ZhEVDU6qufOqpDO9QlqW8ccIJbmdxJNDFlRL5tEP0Y_V817ufMF5iacmLVZvgp-PjGU3kGXhtfLXaDnHmfb2v0it7LmtdC2lEdz2JQp-oaSNbqkrbuU/s16000/bgm1.png')] sm:bg-[url('https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi99mAtjQZNh_7M37NaKOLsSkAlFUJfQOBkbx3ZgU9hqivqJyAmkgex_GBud1PRI8jn-X43YS6x0kLfN5gAHkAfbhppZbaei9o6qdb53GOCU2708K4_mNSTF9_FIJuxfHtBi7-FEhxEPZJt-lJAvY8AbqqBKF27R3G08NXXLHiBnEXKhiAuDxF4i8RsrgU/s16000/bg1.png')] bg-cover page1"
        id="home"
      >
        <div className="hidden sm:flex w-full">
          <Navbar />
        </div>
        <div className="sm:hidden flex">
          <MobileNavbar />
        </div>
        {/* Overlay */}
        {/* <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/80 z-[2]" /> */}
        <div className="justify-center items-center sm:items-start flex sm:pt-10 lg:pt-14 xl:pt-20 sm:pl-16 h-screen sm:h-[80vh] mx-[8vw] sm:mx-0">
          <div className="flex flex-col w-full justify-start animate-fade-up animate-delay-1000">
            <h2 className="xl:text-[4.5rem] lg:text-[3rem] text-4xl font-bold text-[#8ec442] xl:pb-10 pb-3">
              Horizonwings
            </h2>
            <h2 className="xl:text-[4.5rem] lg:text-[3rem] text-4xl font-bold text-[#8ec442] xl:pb-4">
              Overseas Education
            </h2>
            <p className="xl:py-5 py-4 xl:text-xl lg:text-lg md:text-base text-lg mb-1 font-medium text-white sm:text-[#52813d]">
              Where Your International Academic Aspirations Take Wing!
            </p>
            <a
              href="#contact"
              className="flex items-center xl:space-x-3 w-fit xl:px-8 xl:py-4 xl:text-lg text-base py-3 px-7 space-x-2 text-white cursor-pointer bg-[#8ec442] rounded-lg animate-fade-right hover:animate-jump"
            >
              <h4 className="">Register Now</h4>
              <FaArrowRight />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
