import Image from "next/image";
import NavbarOne from "../Navbar/Navbar1";
import image from ".././../../assets/HistoricalMarvels/image1.png";

const HistoricalMarvelsPageImage = () => {
  return (
    <div className="relative flex flex-col items-center">
      <div className="h-[300px] md:h-[500px] xl:h-[800px] w-full relative">
        <Image src={image} alt="item1" className="object-cover w-full h-full" />
      </div>
      <div className="absolute w-full top-0 z-10">
        <NavbarOne />
      </div>
      <div className="absolute flex items-center justify-center text-xs md:text-lg font-bold text-white bg-[#077B83] bg-opacity-50 w-[150px] h-[30px]  md:w-[200px] md:h-[64px] md:rounded-[25px] md:text-[32px] md:font-[700] rounded-xl bottom-2 left-1/2 transform -translate-x-1/2 ">
      Historical Marvels
      </div>
    </div>
  );
};

export default HistoricalMarvelsPageImage;
