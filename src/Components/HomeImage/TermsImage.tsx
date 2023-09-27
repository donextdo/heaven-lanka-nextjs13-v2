"use client";
import Image from "next/image";
import image from ".././../../assets/Terms/Mask group (2).png";
import Navbar from "../Navbar/Navbar";

const TermsImage = () => {
  return (
    <div className="relative flex flex-col items-center">
      <div className="absolute top-0 w-full z-10">
        <Navbar />
      </div>
      <div className="h-[300px] md:h-[500px] xl:h-[800px] w-full relative">
        <Image src={image} alt="item1" className="object-cover w-full h-full" />
      </div>

      <div className="container absolute mx-auto  top-[120px] md:top-[200px] px-4 xl:px-[180px] md:px-[50px] lg:px-[20px]  md:mt-8">
        <h1 className="font-[volkhov] w-[60px] md:w-[60px] xl-[100px] 2xl:w-[100px] text-[25px] md:text-[35px] lg:text-[45px] xl:text-[55px] lg:text-2xl xl:text-3xl 2xl:text-[66px] font-bold text-[white] leading-[1.3] md:leading-[1.4] lg:leading-[1.5] xl:leading-[1.6] 2xl:leading-[1.2] max-w-sm md:max-w-md drop-shadow-2xl">
          Terms and Conditions
        </h1>
        <h5 className=" text-[14px] w-[300px] md:w-[400px] xl:w-[500px] 2xl:w-[600px]  md:text-lg lg:text-base xl:text-lg 2xl:text-xl font-normal text-white mt-4 xl:mt-[20px] 2xl:mt-[30px] 3xl:mt-[60px] md:mt-2 max-w-md md:max-w-2xl drop-shadow-2xl">
          Your Gateway to an Unforgettable Experiencet
        </h5>
      </div>
    </div>
  );
};

export default TermsImage;
