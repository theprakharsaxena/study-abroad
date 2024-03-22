"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";

import { PiStudentFill } from "react-icons/pi";
import { MdOutlineAutoGraph } from "react-icons/md";
import { IoBookOutline } from "react-icons/io5";
import { LiaUniversitySolid } from "react-icons/lia";
import useInView from "./lib/useInView";

interface DataItem {
  label: string;
  icon: JSX.Element;
  value: number;
  additional: string;
}

const data: DataItem[] = [
  {
    label: "Top Universities",
    icon: <LiaUniversitySolid />,
    value: 750,
    additional: "+",
  },
  {
    label: "Success rate",
    icon: <MdOutlineAutoGraph />,
    value: 98,
    additional: "%",
  },
  {
    label: "Year of Experience",
    icon: <IoBookOutline />,
    value: 8,
    additional: "+",
  },
  {
    label: "Student Enrolled",
    icon: <PiStudentFill />,
    value: 50000,
    additional: "+",
  },
];

interface CounterCardProps {
  label: string;
  icon: JSX.Element;
  value: number;
  additional: string;
}

const CounterCard: React.FC<CounterCardProps> = ({
  label,
  icon,
  value,
  additional,
}) => {
  const [counterValue, setCounterValue] = useState<number>(0);

  // Only start the interval when the component is in view
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      const interval = setInterval(() => {
        setCounterValue((prevValue) =>
          prevValue < value
            ? Math.ceil(
                prevValue +
                  (label === "Top Universities"
                    ? 6
                    : label === "Success rate"
                    ? 0.66
                    : label === "Year of Experience"
                    ? 0.05
                    : label === "Student supported and Enrolled"
                    ? 333
                    : 500)
              )
            : value
        );
      }, 10);

      return () => clearInterval(interval);
    }
  }, [inView, value]);

  return (
    <div ref={ref}>
      <div className="flex items-center space-x-4 justify-center">
        <div className="text-[#52813d] text-6xl">{icon}</div>
        <div className="flex flex-col items-start text-4xl">
          <div>
            {counterValue}
            {additional}
          </div>
          <div className="text-xl text-[#eff8ff]">{label}</div>
        </div>
      </div>
    </div>
  );
};

export const LampDemo: React.FC = () => {
  return (
    <>
      <div className="hidden lg:flex">
        <LampContainer>
          <motion.h1
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="mt-8 text-black py-4 text-center text-4xl font-medium tracking-tight md:text-7xl"
          >
            <div className="w-screen grid grid-cols-4 gap-5 justify-center">
              {data.map(({ label, icon, value, additional }, index) => (
                <CounterCard
                  key={index}
                  label={label}
                  icon={icon}
                  value={value}
                  additional={additional}
                />
              ))}
            </div>
          </motion.h1>
        </LampContainer>
      </div>
      <div className="lg:hidden flex">
        <div className="w-screen py-20 bg-[#8ec442] flex items-center justify-center">
          <div className="flex flex-col space-y-5 items-start">
            {data.map(({ label, icon, value, additional }, index) => (
              <CounterCard
                key={index}
                label={label}
                icon={icon}
                value={value}
                additional={additional}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
