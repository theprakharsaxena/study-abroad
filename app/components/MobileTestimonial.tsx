"use client";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    quote:
      "Choosing HorizonWings Overseas Education was one of the best decisions. The team helped me a lot to secure admission to a top university abroad. From selecting the right program to visa assistance, they made the entire process stress-free and efficient.",
    name: "Devansh Mittal",
    title: "",
  },
  {
    quote:
      "Thanks to HorizonWings Overseas Education, I was able to pursue my dream of studying abroad without any problem. Their personalized guidance and support throughout the application process made all the difference. I highly recommend their services to anyone seeking to pursue higher studies abroad",
    name: "Yash Agarwal",
    title: "",
  },
  {
    quote:
      "I cannot thank enough HorizonWings Overseas Education for guiding me toward my educational goals overseas. Their knowledgeable counselors provided invaluable advice and assistance at every step. I’m grateful for their dedication and expertise.",
    name: "A Dream Within a Dream",
    title: "",
  },
  {
    quote:
      "I highly recommend HorizonWings services to students aiming to study overseas. Their team helped me a lot from selecting the right program to accommodation facilities, they made the entire process convenient. Their team went above and beyond to help me secure admission to a top university abroad.",
    name: "Pride and Prejudice",
    title: "",
  },
  {
    quote:
      "HorizonWings made my dream of studying abroad a reality. I’m so glad I chose them for my overseas education journey. I found the perfect university and program for my goals.",
    name: "Anamika Agarwal",
    title: "",
  },
];

const MobileTestimonial = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
  };
  return (
    <div className="py-20 bg-white">
      <Slider {...settings}>
        {testimonials.map((item, idx) => (
          <div
            className="w-[300px] rounded-2xl border flex-shrink-0 border-slate-700 px-8 py-6 bg-[#8ec442]"
            key={item.name}
          >
            <blockquote>
              <span className="text-sm leading-[1.6] text-white font-normal">
                {item.quote}
              </span>
              <div className="mt-6 flex flex-row items-center">
                <span className="flex flex-col gap-1">
                  <span className="text-sm leading-[1.6] text-white font-normal">
                    {item.name}
                  </span>
                  <span className="text-sm leading-[1.6] text-white font-normal">
                    {item.title}
                  </span>
                </span>
              </div>
            </blockquote>
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default MobileTestimonial;
