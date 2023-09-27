"use client";
import Image from "next/image";
import Bg from ".././../../assets/Subscribe/subscribeBg.png";
import InputField from "./InputField";

const SubscriptionCard = () => {
  return (
    <div className="w-full xl:w-[1170px] mx-auto bg-[#FA7436] rounded-[20px] py-[40px] px-4 md:px-0 space-y-20">
      <div className="flex flex-col md:flex-row-reverse items-center justify-center md:gap-[60px] space-y-4 md:space-y-0 md:space-x-6">
        <div className=" hidden xl:block xl:absolute xl:ml-[1100px] mt-[50px] md:w-[20%]">
          <Image src={Bg} alt="item1" className="object-cover w-[200px] h-full" />
        </div>
        <div className="">
          <h1 className="text-2xl text-center md:text-4xl font-bold text-[#ffffff] leading-[1.5] ">
            Subscribe and get exclusive<br/> deals & offers
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
