"use client";
import { FaArrowRight } from "react-icons/fa6";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <>
      <div
        className="flex flex-col items-start justify-start bg-fixed bg-center bg-cover page1 h-screen "
        id="home"
      >
        <Navbar />
        {/* Overlay */}
        {/* <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/80 z-[2]" /> */}
        <div className="pt-32 sm:pt-20 sm:pl-16 sm:h-[80vh] mx-[8vw] sm:mx-0">
          <div className="flex flex-col w-full justify-start animate-fade-up animate-delay-1000">
            <h2 className="xl:text-[4.5rem] lg:text-5xl md:text-5xl text-4xl font-bold text-[#8ec442]">
              Horizonwings
            </h2>
            <h2 className="xl:text-[4.5rem] lg:text-5xl md:text-5xl text-4xl font-bold text-[#8ec442]">
              Overseas Education
            </h2>
            <p className="py-5 text-xl mb-1 font-medium text-[#52813d]">
              Where Your International Academic Aspirations Take Wing!
            </p>
            <div className="flex items-center space-x-3 w-fit px-8 py-4 text-lg text-white cursor-pointer bg-[#8ec442] rounded-lg animate-fade-right hover:animate-jump">
              <a href={`/`} className="">
                Register Now
              </a>
              <FaArrowRight />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
