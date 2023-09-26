'use client';
import Image from "next/image";
import Bg from '.././../../assets/Subscribe/subscribeBg.png';
import InputField from "./InputField";

const SubscriptionCard = () => {
  return (
    <div className=" w-full md:w-[700px] lg:w-[1000px] mx-auto bg-[#FA7436] rounded-[20px] py-[40px] px-4 md:px-0 space-y-20">
      <div className="flex flex-col-reverse md:flex-row items-center justify-center md:gap-[60px] space-y-4 md:space-y-0 md:space-x-6">
        <div className="hidden md:w-[60%]">
          <Image src={Bg} alt="item1" className="object-cover w-full h-full" />
        </div>
        <div className=" ">
          <h1 className="text-2xl text-center md:text-4xl font-bold text-[#ffffff] leading-[1.5] ">
            Subscribe and get exclusive deals & offers
          </h1>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center">
        <InputField />
      </div>
    </div>
  );
};

export default SubscriptionCard;
