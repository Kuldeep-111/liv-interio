import Image from "next/image";
import React from "react";
import Heading from "./Heading";

const Card = ({data,height,center,border=false}) => {
  return (
      <div className={`max-w-[500px] mx-auto ${border ? 'order-b border-[var(--text-primary)]' : ''} b pb-[30px]`}>
        <div className={`relative w-full ${height}`}>
          <Image
            src={data?.src}
            alt={data?.alt}
            fill
            className="object-cover rounded-[15px]"
          />
        </div>
        <Heading className={`uppercase mt-[20px] mb-[10px] !text-[20px] ${center}`}>
          {data?.title}
        </Heading>
        <p className={`uppercase text-[12px] md:text-[14px] text-center md:text-left tracking-[1px] ${center}`}>
          {data?.desc}
        </p>
      </div>
  );
};

export default Card;
