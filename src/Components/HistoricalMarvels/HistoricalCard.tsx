import React from "react";
import Image from "next/image";
import { FaMapLocationDot } from "react-icons/fa6";

const HistoricalCard = ({ beach }: any) => {
  const handleDirections = () => {
    // Construct the Google Maps URL for the specified location
    const mapUrl = `https://www.google.com/maps/search/?api=1&query=${beach.name}`;
    // Open the URL in a new tab
    window.open(mapUrl, "_blank");
  };
  return (
    <div
      className="lg:h-[500px] lg:w-[420px] w-full shadow-lg flex flex-col border border-gray-100 rounded-md my-2 cursor-pointer hover:md:shadow-2xl "
      //   onClick={() => router.push(pathName)}
    >
      <div className="relative h-[250px]">
        <div className="absolute inset-0">
          <Image
            className="object-cover w-full h-full rounded-md"
            src={beach.image}
            alt="beachImg"
            layout="fill"
          />
        </div>
      </div>
      <div className="flex flex-row justify-between  pr-[10px]">
        <div className="flex flex-col">
          <h1 className="text-[#077B83] text-lg font-semibold text-left pl-[10px] pt-[10px]">
            {beach.name}
          </h1>
          <h3 className="text-[#077B83] text-sm font-semibold text-left pl-[10px]">
            {beach.location}
          </h3>
        </div>
        <div
        className="mt-2 px-4 py-2 bg-[#077B83] h-[44px] rounded-[50%] text-white hover:bg-opacity-80"
        onClick={handleDirections}
      >
        <FaMapLocationDot size={24}/>
      </div>
      </div>

      <p className="text-sm p-[10px]">{beach.description}</p>
      
    </div>
  );
};

export default HistoricalCard;
