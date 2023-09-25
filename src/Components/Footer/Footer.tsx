// import Image from "next/image";
// import { FaInstagram,FaFacebookF,FaTwitter } from "react-icons/fa";
// import logo from ".././../../assets/Logo/logo1.png";

// const FooterView = () => {
//   return (
//     <div className="pb-[40px]">
//     <div className="grid grid-cols-5 gap-5">
//       <div className="col-span-2">
//         <div className="w-[150px] h-[72px]">
//           <Image
//             src={logo}
//             alt="item1"
//             className="object-cover w-full h-full"
//           />
//         </div>
//         <div>
//           <p className="w-[250px] mt-[20px] text-left text-sm text-[#666666]">
//             Book your trip in minute, get full Control for much longer.
//           </p>
//         </div>
//         <div className="flex flex-row gap-5 mt-[20px] ">
//             <div className="w-[40px] h-[40px] rounded-full bg-[#FFFFFF] flex justify-center items-center">
//                 <FaFacebookF className="text-[#E9B4A5]"/>
//             </div>
//             <div className="w-[40px] h-[40px] rounded-full bg-[#FA7436] flex justify-center items-center">
//                 <FaInstagram className="text-[#FFFFFF]"/>
//             </div>
//             <div className="w-[40px] h-[40px] rounded-full bg-[#FFFFFF] flex justify-center items-center">
//                 <FaTwitter className="text-[#E9B4A5]"/>
//             </div>
            

//         </div>
//       </div>

//       <div className="col-span-1 text-sm">
//         <div className="font-semibold text-[#077B83] mt-[20px] mt-[25px] leading-[26px]">
//           Company
//         </div>
//         <div className="mt-[20px]">About</div>
//         <div className="mt-[20px]">Career</div>
//         <div className="mt-[20px]">Logistic</div>
//         <div className="mt-[20px]">Privacy & Policy</div>
//       </div>

//       <div className="col-span-1 text-sm">
//         <div className="font-semibold text-[#077B83] mt-[20px] mt-[25px] leading-[26px]">
//           Contact
//         </div>
//         <div className="mt-[20px]">Help/FAQ</div>
//         <div className="mt-[20px]">Press</div>
//         <div className="mt-[20px]">Affilates</div>
//       </div>

//       <div className="col-span-1 text-sm">
//         <div className="font-semibold text-[#077B83] mt-[20px] mt-[25px] leading-[26px]">
//           More
//         </div>
//         <div className="mt-[20px]">Press Centre</div>
//         <div className="mt-[20px]">Our Blog</div>
//         <div className="mt-[20px]">Low fare tips</div>
//       </div>

//     </div>
//     <div className=" mt-[20px] border border-[1px] bg-[#999999] bg-opacity-[56%]">
//         <hr/>
//     </div>
//     <div className="grid grid-cols-2 ">
//         <div className="font-normal text-[#222222] mt-[20px] mt-[25px] leading-[26px] text-[12px] text-left">
//         Copyright, Heaven Lanka 2023. All rights reserved.
//         </div>
//         <div className="font-normal text-[#222222] mt-[20px] mt-[25px] leading-[26px] text-[12px] text-right">
//         Terms & Conditions
//         </div>

//     </div>
//     </div>
//   );
// };

// export default FooterView;

import Image from "next/image";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
import logo from ".././../../assets/Logo/logo1.png";
import { useRouter } from 'next/navigation';
import Payments from '../../../assets/Footer/Group 1000003575.png'
import xtwitter from '../../../assets/Footer/twitter.png'

const FooterView = () => {
  const router = useRouter();

  const facebookUrl = "https://www.facebook.com/heavenlankatravels?mibextid=LQQJ4d";
  const instagramUrl = "https://twitter.com/heaven_lanka/status/1627940024737009664?s=46&t=9sWVYPeyua1guC6vynx0fg";
  const twitterUrl = "https://twitter.com/heaven_lanka/status/1627940024737009664?s=46&t=9sWVYPeyua1guC6vynx0fg";

  return (
    <div className="pb-[40px]">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
        <div className="col-span-1 md:col-span-2">
          <div className="w-[150px] h-[72px] mx-auto md:mx-0">
            <Image src={logo} alt="item1" className="object-cover w-full h-full" />
          </div>
          {/* <div className="text-center md:text-left mt-[20px] md:mt-0 text-sm text-[#666666]">
            Book your trip in minute, get full Control for much longer.
          </div> */}
          <div className="flex justify-center md:justify-start mt-[20px] space-x-5">
          <a href={facebookUrl} target="_blank" rel="noopener noreferrer">
          <div className="w-[40px] h-[40px] rounded-full bg-[#FFFFFF] flex justify-center cursor-pointer items-center transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-100 duration-300">
            <FaFacebookF className="text-[#E9B4A5]" />
          </div>
        </a>
             {/* Instagram Icon with Link */}
        <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
          <div className="w-[40px] h-[40px] rounded-full bg-[#FA7436] flex justify-center cursor-pointer items-center transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-100 duration-300">
            <FaInstagram className="text-[#FFFFFF]" />
          </div>
        </a>

        {/* Twitter Icon with Link */}
        <a href={twitterUrl} target="_blank" rel="noopener noreferrer">
          <div className="w-[40px] h-[40px] rounded-full bg-[#FFFFFF] flex justify-center cursor-pointer items-center transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-100 duration-300">
          <Image src={xtwitter} alt="item1" className="" />
          </div>
        </a>
          </div>
          <div className="text-center md:text-left mt-[20px] md:mt-4 text-sm text-[#666666] ">
          <p>Tourist Board License No : SLTDA/SQA/PRO/TA/00720 </p>    <span>       ©2023 Heaven Lanka Travels (Pvt) Ltd Sri Lanka (Reg: PV 00271994)        </span>          

          </div>

          <div className="text-center md:text-left mt-[30px] md:mt-[50px] text-sm text-[#666666]">
          Acceptable payment methods
          </div>

          <div className="flex flex-row justify-center">

          <Image src={Payments} alt="item1" className="xl:ml-[-190px]" />
          </div>

        </div>

        <div className="col-span-1 md:col-span-1 text-center md:text-left md:text-sm">
          <div className="font-semibold text-[#077B83] mt-[20px] md:mt-[25px] leading-[26px]">
            Company
          </div>
          <div className="mt-[20px] cursor-pointer hover:opacity-75">About</div>
          <div className="mt-[20px]  cursor-pointer hover:opacity-75">Career</div>
          <div className="mt-[20px] cursor-pointer hover:opacity-75">Logistic</div>
          <div className="mt-[20px] cursor-pointer hover:opacity-75"
          onClick={() => router.push('./privacyPage')}
          >Privacy & Policy</div>
        </div>

        <div className="col-span-1 md:col-span-1 text-center md:text-left md:text-sm">
          <div className="font-semibold text-[#077B83] mt-[20px] md:mt-[25px] leading-[26px]">
            Contact
          </div>
          <div className="mt-[20px] cursor-pointer hover:opacity-75">Help/FAQ</div>
          <div className="mt-[20px] cursor-pointer hover:opacity-75">Press</div>
          <div className="mt-[20px] cursor-pointer hover:opacity-75">Affilates</div>
        </div>

        <div className="col-span-1 md:col-span-1 text-center md:text-left md:text-sm">
          <div className="font-semibold text-[#077B83] mt-[20px] md:mt-[25px] leading-[26px]">
            More
          </div>
          <div className="mt-[20px]  cursor-pointer hover:opacity-75">Press Centre</div>
          <div className="mt-[20px] cursor-pointer hover:opacity-75">Our Blog</div>
          <div className="mt-[20px] cursor-pointer hover:opacity-75">Low fare tips</div>
        </div>
      </div>
      <div className="mt-[20px] border border-[1px] bg-[#999999] bg-opacity-[56%]">
        <hr />
      </div>
      <div className="grid grid-cols-2 text-sm">
        <div className="font-normal text-[#222222] mt-[20px] md:mt-[25px] leading-[26px] text-[12px] text-center md:text-left">
          Copyright, Heaven Lanka 2023. All rights reserved.
        </div>
        <div className="font-normal text-[#222222] mt-[20px] md:mt-[25px] leading-[26px] text-[12px] text-center md:text-right cursor-pointer hover:opacity-75"
        onClick={() => router.push('./termsPage')}
        >
          Terms & Conditions
        </div>
      </div>
    </div>
  );
};

export default FooterView;

