"use client";
import Image from "next/image";

const WhatsApp = () => {
  return (
    <div className="fixed bottom-0 right-0 z-[99999]">
      <a href="https://wa.me/9953102105">
        <Image
          src="/images/whatsapp.png"
          className="m-5 cursor-pointer"
          alt="whatsaap logo"
          height={100}
          width={60}
        />
      </a>
    </div>
  );
};

export default WhatsApp;
