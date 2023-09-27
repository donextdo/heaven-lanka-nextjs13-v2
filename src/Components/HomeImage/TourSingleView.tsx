
import Image from "next/image";
import image from '.././../../assets/Tour/SingleView.png'
import Navbar from "../Navbar/Navbar";
import NavbarOne from "../Navbar/Navbar1";

const TourSingleViewImage = () => {
    return (
       
        <div className="relative ">
            <div className=" w-full  ">
                <Image
                    src={image}
                    alt="item1"
                    className="object-cover w-full "
                />
            </div>
            <div className="absolute  w-full top-0 ">
                    <NavbarOne/>
            </div>
            <div className="absolute flex items-center justify-center text-xs md:text-sm font-bold text-white bg-[#077B83] bg-opacity-50 w-16  md:w-[180px] md:h-[64px] md:rounded-[25px] md:text-[32px] md:font-[700]   rounded-xl bottom-2 left-1/2 transform -translate-x-1/2 ">
                2N/3D
            </div>
         
          
        </div>
        
    );
}

export default TourSingleViewImage;