
// import Image from "next/image";
// import image from '.././../../assets/Tour/9N/main.png'
// import NavbarOne from "../Navbar/Navbar1";

// const Singl9NPageImage = () => {
//     return (
       
//         <div className="relative flex flex-col items-center">
//             <div className="h-[800px] w-full mt-[70px] ">
//                 <Image
//                     src={image}
//                     alt="item1"
//                     className="object-cover w-full h-full"
//                 />
//             </div>
//             <div className="absolute  w-full h-[114px] ">
//                     <NavbarOne/>
//             </div>
//             <div className="absolute flex items-center justify-center text-[32px] font-[700] text-[white] bg-[#077B83] bg-opacity-[50%] w-[180px] h-[64px] rounded-[25px] top-[760px]">
//        9N/10D
//        </div>
 
          
//         </div>
        
//     );
// }

// export default Singl9NPageImage;


import Image from "next/image";
import image from '.././../../assets/Tour/9N/main.png'
import NavbarOne from "../Navbar/Navbar1";

const Singl9NPageImage = () => {
    return (
        <div className="relative">
            <div className="w-full">
                <Image
                    src={image}
                    alt="item1"
                    className="object-cover w-full"
                />
            </div>
            <div className="absolute w-full top-0">
                <NavbarOne/>
            </div>
           
            <div className="absolute flex items-center justify-center text-xs md:text-sm font-bold text-white bg-[#077B83] bg-opacity-50 w-16  md:w-[180px] md:h-[64px] md:rounded-[25px] md:text-[32px] md:font-[700] rounded-xl bottom-2 left-1/2 transform -translate-x-1/2 ">
                9N/10D
            </div>
        

        </div>
    );
}

export default Singl9NPageImage;
