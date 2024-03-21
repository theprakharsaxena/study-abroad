"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Service {
  id: string;
  image: string;
  title: string;
  description: string;
}

function isNumber(variable: any): boolean {
  return (
    !isNaN(variable) &&
    typeof variable !== "boolean" &&
    typeof variable !== "object"
  );
}

function average(num1: number, num2: number): number {
  return (num1 + num2) / 2;
}

const serviceData: Service[] = [
  {
    id: "section1",
    image: "https://images.unsplash.com/photo-1565535941810-e9892acd7704",
    title: "Education Loan and Visas",
    description:
      "Horizonwings Overseas Education is your trusted partner in providing a seamless journey to achieving your international academic goals. We offer complete guidance on selecting the perfect international university, alongside tailored advice on securing education loans to finance your studies. Understanding the complexities of the visa application process, we also provide expert assistance to ensure a smooth and successful visa. With Horizonwings, learners are equipped with all the necessary resources and support to guide your educational studies abroad confidently. Horizonwings Overseas Education will open the door to your global academic aspirations.",
  },
  {
    id: "section2",
    image: "https://images.unsplash.com/photo-1463620910506-d0458143143e",
    title: "Accommodation",
    description:
      "At Horizonwings Overseas Education, we make studying abroad more comfortable for you. Along with guiding you through choosing the right course and university, we also help you find a place to live. We know how essential it is to have a comfortable home while studying in a new country. Our team carefully selects accommodation options to match what you’re looking for and what you can afford. This way, you can focus more on your studies and less on the focus of moving. Let Horizonwings be your companion to a successful and worry-free study abroad experience.",
  },
  {
    id: "section3",
    image: "https://images.unsplash.com/photo-1576267423445-b2e0074d68a4",
    title: "University Shortlisting",
    description:
      "Horizonwings Overseas Education offers expert guidance for students looking to study abroad. Our professional team works closely with students to choose the right universities that match your goals and academic backgrounds. We simplify the process of university shortlisting, ensuring students understand all application requirements to improve your chances of getting accepted. Our goal is to help students find the prestigious university for your overseas education journey. Trust Horizonwings to be your partner in opening the doors to global educational opportunities.",
  },
  {
    id: "section4",
    image: "https://images.unsplash.com/photo-1586282391129-76a6df230234",
    title: "Application",
    description:
      "Horizonwings Overseas Education streamlines your journey to study abroad with an efficient application process. Our approach is to guide students through every step, from selecting the perfect institution and course to submitting applications and securing visas. We ensure a smooth experience, making your dream of international education achievable with expert advice and personalized support. Begin your adventure with Horizonwings Overseas Education and explore a world of opportunities in prestigious universities worldwide. Experience professional guidance according to your academic aspirations and career goals.",
  },
  {
    id: "section5",
    image: "https://images.unsplash.com/photo-1660927059794-152d06e11016",
    title: "IELTS Preparation",
    description:
      "Horizonwings Overseas Education offers complete support for students aiming to study abroad, including specialized IELTS preparation to ensure you meet the English language requirements of your chosen institution. Our tailored approach combines expert guidance, proven study strategies, and extensive practice materials to enhance your reading, writing, listening, and speaking skills. Start your international education journey with confidence, backed by Horizonwings' commitment to your success.",
  },
  {
    id: "section6",
    image: "https://images.unsplash.com/photo-1622186477895-f2af6a0f5a97",
    title: "Scholarship",
    description:
      "Horizonwings Overseas Education is your premier gateway to global learning possibilities. We specialize in guiding students toward achieving their international education dreams, offering complete information and support on universities and courses worldwide. Additionally, we provide entire access to scholarship information, helping students open financial assistance for their studies abroad. Horizonwings Overseas Education is here to guide your journey towards academic excellence and cultural immersion in prestigious institutions around the globe.",
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

function MobileServicesPage() {
  const [serviceAnimation, setServiceAnimation] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const section1 = document.getElementById("section1")?.offsetTop;
      const scroll = window.scrollY;

      if (section1 === undefined) {
        // Handle the case where section1 or section6 is undefined
        return;
      }

      if (scroll > section1 / 4) {
        setServiceAnimation(true);
      } else {
        setServiceAnimation(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-[#8ec442] pt-20 px-[8vw] sm:px-0" id="services">
      <div className={serviceAnimation ? "animate-fade-up" : ""}>
        <h2 className="text-5xl text-white font-bold flex justify-center pb-10 underline underline-offset-8 animate-fade-up">
          Services
        </h2>
      </div>
      <div className="py-10">
        {serviceData.map(({ id, image, title, description }, index) => (
          <section id={id} key={index} className="pb-20">
            <div className="grid grid-cols-1 gap-8">
              <div className="flex w-full justify-center">
                <Image
                  loader={imageLoader}
                  src={image}
                  alt="Section 1"
                  width={400}
                  height={400}
                  quality={100}
                  className={
                    "w-[400px] block shadow-2xl shadow-black rounded-3xl"
                  }
                />
              </div>
              <div className="flex items-center justify-center">
                <div className="flex flex-col justify-center space-y-5 h-full">
                  <h3 className="text-3xl underline underline-offset-8 font-bold text-white">
                    {title}
                  </h3>
                  <p className="text-white text-lg">{description}</p>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

export default MobileServicesPage;
