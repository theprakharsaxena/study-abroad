"use client";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <div className="animate-fade-up px-[8vw]">
        <h2 className="text-5xl sm:text-7xl text-[#52813d] font-bold flex justify-center text-center py-10 sm:py-20 animate-fade-up">
          Testimonials
        </h2>
      </div>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
      <div className="bg-[#52813d] mt-16 p-0.5 w-1/3"></div>
    </div>
  );
}

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
    name: "Shivam Yadav",
    title: "",
  },
  {
    quote:
      "I highly recommend HorizonWings services to students aiming to study overseas. Their team helped me a lot from selecting the right program to accommodation facilities, they made the entire process convenient. Their team went above and beyond to help me secure admission to a top university abroad.",
    name: "Puneet Yadav",
    title: "",
  },
  {
    quote:
      "HorizonWings made my dream of studying abroad a reality. I’m so glad I chose them for my overseas education journey. I found the perfect university and program for my goals.",
    name: "Anamika Agarwal",
    title: "",
  },
];
