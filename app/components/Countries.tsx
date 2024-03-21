"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";

import { EffectCards } from "swiper/modules";
import { useState } from "react";
import Image from "next/image";

const data = [
  {
    image: "https://images.unsplash.com/photo-1562884328-39da45501a9c",
    title: "United States",
  },
  {
    image: "https://plus.unsplash.com/premium_photo-1675865393568-4bbf930ac1fb",
    title: "Australia",
  },
  {
    image: "https://plus.unsplash.com/premium_photo-1674591172352-0af9308f0dac",
    title: "Canada",
  },
  {
    image: "https://plus.unsplash.com/premium_photo-1674588218663-a0655e1be7db",
    title: "France",
  },
  {
    image: "https://plus.unsplash.com/premium_photo-1674588217709-c269e03cff9e",
    title: "Germany",
  },
  {
    image: "https://plus.unsplash.com/premium_photo-1675865394105-f4b090661646",
    title: "Ireland",
  },
  {
    image: "https://plus.unsplash.com/premium_photo-1675865395876-1cf435b64e78",
    title: "United Kingdom",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/0/00/Flag-of-uae.png",
    title: "Dubai",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Flag_of_Malaysia.svg/255px-Flag_of_Malaysia.svg.png",
    title: "Malaysia",
  },
];

const imageLoader = ({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

function Countries() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="bg-[#eff8ff] py-10 sm:py-20 px-[8vw] sm:px-0" id="about">
      <div className="animate-fade-up">
        <h2 className="text-5xl sm:text-7xl text-[#52813d] font-bold flex justify-center text-center py-10 sm:py-20 animate-fade-up">
          Where do you want to study?
        </h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 py-16">
        <div className="flex items-center justify-center order-1 sm:order-none mt-16 sm:mt-0">
          <div className="sm:pl-[5vw] flex flex-col justify-center space-y-5 h-full pb-16">
            <h3 className="text-3xl sm:text-5xl font-bold">
              Multiple Locations
            </h3>
            <p className="text-[#8ec442] text-xl sm:text-2xl font-bold text-justify py-2.5">
              Our team of experienced professionals recognized the increasing
              demand for quality education abroad and identified the need for
              personalized guidance and support throughout the application
              process. With a passion for helping students achieve their dreams,
              Embarked on this entrepreneurial journey to establish a reputable
              brand in the overseas education sector.
            </p>
          </div>
        </div>
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
        >
          {data.map(({ image, title }, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="relative">
                  <Image
                    className="swiper-slide-img"
                    loader={imageLoader}
                    src={image}
                    quality={100}
                    alt="slide_image"
                    width={300} // Example width, adjust as needed
                    height={300} // Example height, adjust as needed
                  />
                  <div
                    className="absolute bottom-0 right-0 left-0 top-0 hover:bg-black/40 flex justify-center items-center"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    {hoveredIndex === index && title}
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
          {/* <SwiperSlide>
            <img
              className="swiper-slide-img"
              src={slide_image_2}
              alt="slide_image"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="swiper-slide-img"
              src={slide_image_3}
              alt="slide_image"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="swiper-slide-img"
              src={slide_image_4}
              alt="slide_image"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="swiper-slide-img"
              src={slide_image_5}
              alt="slide_image"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="swiper-slide-img"
              src={slide_image_6}
              alt="slide_image"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="swiper-slide-img"
              src={slide_image_7}
              alt="slide_image"
            />
          </SwiperSlide> */}
        </Swiper>
      </div>
    </div>
  );
}

export default Countries;
