"use client";
// import Image from "next/image";
// import Bg from '.././../../assets/Feedback/Asset 2@3x 2.png'

// import AdventureList from "../AdventureProcess/AdventureList";
// import DetailsList from "../DetailsCard/Detailslist";
// import TreasuresList from "../Treasures/TreasuresList";
// import FeedbackMsgList from "../Feedback/FeedbackMsgList";
// import FooterView from "../Footer/Footer";
// import SubscriptionCard from "../Subscribe/SubscriptionCard";
// import QuotesCard from "../Quotes/QuotesCard";
// import VaccationList from "../Vacccation/VaccationList";
// import SimpleChatbot from "../ChatBot/Chatbot";

// const HomeContent = () => {
//   return (
//     <div className="">
//       <div className=" -mt-[185px] flex flex-row justify-center">
//         <QuotesCard />
//       </div>

//       <div className="">
//       <div className="container mx-auto px-20  flex flex-col justify-center items-center mt-[100px]  space-y-4">
//         <h1 className="text-[48px] font-bold font-[volkhov]">
//           Why <span className="text-[#077B83]">Heaven Lanka</span>
//         </h1>
//         <p className="w-[600px] text-center text-[20px] text-[#222222]">
//           At Heaven Lanka, we are passionate about providing our clients with an
//           exceptional travel experience
//         </p>
//       </div>

//       <div className="container mx-auto px-20 mt-8">
//         <DetailsList />
//       </div>
//       </div>

//       <div className="container mx-auto px-20  flex flex-col justify-center items-center mt-[100px] space-y-4">
//         <h1 className="text-[48px] font-bold font-[volkhov]">
//           <span className="text-[#077B83]">Best</span> vacation plans
//         </h1>
//         <p className="w-[850px]  text-[20px] text-center leading-[8px] text-[#222222]">
//           Embark on an unforgettable adventure with our &apos;Ultimate Sri Lanka&apos;
//           tour package.
//         </p>
//         <p className="w-[1000px]  text-[20px] text-center leading-[20px] text-[#222222]">
//           Discover the country&apos;s stunning landscapes, ancient temples, and
//           wildlife on this comprehensive tour.
//         </p>
//       </div>

//       <div className=" container mx-auto px-20 mt-[55px]">
//         <VaccationList />
//       </div>

//       <div className="container mx-auto px-20  flex flex-col justify-center items-center mt-[100px] space-y-4">
//         <h1 className="text-[48px] font-bold font-[volkhov]">
//           <span className="text-[#077B83]">Sri Lanks&apos;s</span> Tresasures
//         </h1>
//         <p className="w-[790px]  text-[20px] text-[#222222] text-center">
//           Discover the highlights of Sri Lanka, where natural wonders, cultural
//           marvels, and unforgettable experiences await.
//         </p>
//       </div>

//       <div className=" container mx-auto px-20 mt-8">
//         <TreasuresList />
//       </div>

//       <div className=" flex flex-col mt-[90px] pb-[40px]  bg-[#077B83] bg-opacity-[12%] ">
//         <div className=" items-left flex justify-start">
//         <Image
//                     src={Bg}
//                     alt="item1"
//                     className=""
//                 />

//         </div>
//         <div className="items-center gap-[20px] justify-centers">
//         <div className="container mx-auto pl-[250px] flex flex-col  space-y-4">
//           <h1 className="text-[48px] font-bold font-[volkhov] -ml-[60px] text-left">
//             Voices <span className="text-[#077B83]">of Delight :</span>
//           </h1>
//           <p className="w-[500px] text-[20px] text-left -ml-[60px] ">
//             Hear What Our Customers Have to Say!
//           </p>
//         </div>
//         <div className="container mx-auto px-60 mt-[-8px] ">
//           <FeedbackMsgList />
//         </div>
//         </div>

//       </div>

//       <div className="container mx-auto px-20 p-10 mb-[250px]  flex flex-col justify-center items-center">
//         <div className=" flex flex-col justify-center items-center mt-8 space-y-4">
//           <h1 className="text-[48px] font-bold font-[volkhov]">
//             How It Works -{" "}
//             <span className="text-[#077B83]">From Inquiry to Adventure!</span>
//           </h1>
//           <p className="w-[820px]  text-center text-[20px]">
//             Ready to embark on your dream journey to Sri Lanka? Making an
//             inquiry with Heaven Lanka is simple and hassle-free. Follow these
//             easy steps to kickstart your personalized travel experience
//           </p>
//         </div>

//         <div className="mt-[80px]">
//           <AdventureList />
//         </div>
//       </div>

//       <div className="container mx-auto px-20 absolute -mt-[220px] ml-[180px] flex flex-col justify-center items-center">
//         <SubscriptionCard />
//       </div>

//       <div className="mt-[0px] pt-[250px] pb-[60px] pl-[150px] pr-[150px] bg-[#077B83] bg-opacity-[10%]">
//         <div className="container mx-auto px-60">
//           <FooterView />
//         </div>
//       </div>
//       <SimpleChatbot/>
//     </div>
//   );
// };

// export default HomeContent;

import Image from "next/image";
import Bg from ".././../../assets/Feedback/Asset 2@3x 2.png";
import LA from ".././../../assets/HomePage/leftArrow.png";
import RA from ".././../../assets/HomePage/rightArrow.png";
import slideArrow from ".././../../assets/HomePage/Slider-btn.png";

import AdventureList from "../AdventureProcess/AdventureList";
import DetailsList from "../DetailsCard/Detailslist";
import TreasuresList from "../Treasures/TreasuresList";
import FeedbackMsgList from "../Feedback/FeedbackMsgList";
import FooterView from "../Footer/Footer";
import SubscriptionCard from "../Subscribe/SubscriptionCard";
import QuotesCard from "../Quotes/QuotesCard";
import VaccationList from "../Vacccation/VaccationList";
import SimpleChatbot from "../ChatBot/Chatbot";

const HomeContent = () => {
  return (
    <div className="">
      <div className="flex justify-center mt-8 xl:-mt-[185px] px-[20px]">
        <QuotesCard />
      </div>

      <div className="container mx-auto px-4 md:px-20 mt-8  md:mt-28 ">
        <div className="text-center space-y-4">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold font-[volkhov]">
            Why <span className="text-[#077B83]">Heaven Lanka</span>
          </h1>
          <p className="text-base md:text-lg text-[#222222]">
            At Heaven Lanka, we are passionate about providing our clients with
            an exceptional travel experience
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-20 mt-8  ">
        <DetailsList />
      </div>

      <div className="container mx-auto px-4 md:px-20 mt-8  md:mt-28">
        <div className="text-center space-y-4">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold font-[volkhov]">
            <span className="text-[#077B83]">Best</span> vacation plans
          </h1>
          <p className="text-base md:text-lg text-[#222222] leading-7">
            Embark on an unforgettable adventure with our &apos;Ultimate Sri
            Lanka&apos; tour package.
          </p>
          <p className="text-base md:text-lg text-[#222222] leading-7">
            Discover the country&apos;s stunning landscapes, ancient temples,
            and wildlife on this comprehensive tour.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-20 mt-8">
        <VaccationList />
      </div>
      <div className="flex items-center justify-center mt-[15px]">
        <button className="hidden lg:block">
          <Image src={slideArrow} alt="item1" className="w-[70px]" />
        </button>
      </div>

      <div className="container mx-auto px-4 lg:px-20 mt-8  lg:mt-28">
        <div className="text-center space-y-4">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold font-[volkhov]">
            <span className="text-[#077B83]">Sri Lanka&apos;s</span> Treasures
          </h1>
          <p className="text-base md:text-lg text-[#222222]">
            Discover the highlights of Sri Lanka, where natural wonders,
            cultural marvels, and unforgettable experiences await.
          </p>
        </div>
      </div>

      <div className="container flex items-center justify-center gap-[20px] mx-auto px-4 lg:px-20 mt-8 mb-5">
        <button className="hidden lg:block ">
          <Image src={LA} alt="item1" className="w-[17px]" />
        </button>
        <TreasuresList />
        <button className="hidden lg:block ">
          <Image src={RA} alt="item1" className="w-[17px]" />
        </button>
      </div>

      {/* <div className="bg-[#077B83] bg-opacity-10">
        <div className="container mx-auto px-4 md:px-20 py-8 flex flex-col md:flex-row items-center">
          <div className="md:w-[30%] md:mr-8">
            <Image
              src={Bg}
              alt="item1"
              className=""
            />
          </div>
          <div className="md:w-[70%]">
            <div className="text-left space-y-4">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold font-[volkhov]">
                Voices <span className="text-[#077B83]">of Delight:</span>
              </h1>
              <p className="text-base md:text-lg text-[#222222]">
                Hear What Our Customers Have to Say!
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <FeedbackMsgList />
            </div>
          </div>
        </div>
      </div> */}

      <div className="bg-[#077B83] bg-opacity-10 mt-8  md:mt-28 ">
        <div className="container mx-auto  xl:px-80 px-8 py-8 flex lg:flex-row items-center md:justify-center">
          <div className="hidden md:block absolute mt-[-200px] md:left-0 md:mr-8 ">
            <Image src={Bg} alt="item1" className="w-[150px]" />
          </div>
          <div className="lg:w-[70%]">
            <div className="text-center xl:text-left space-y-4">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold font-[volkhov]">
                Voices <span className="text-[#077B83]">of Delight:</span>
              </h1>
              <p className="text-base md:text-lg text-[#222222]  lg:flex-row">
                Hear What Our Customers Have to Say!
              </p>
            </div>
            <div className="mt-4 xl:mt-[-60px]">
              <FeedbackMsgList />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-20 mt-8  md:mt-28">
        <div className="text-center space-y-4">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold font-[volkhov]">
            How It Works -{" "}
            <span className="text-[#077B83]">From Inquiry to Adventure!</span>
          </h1>
          <p className="text-base md:text-lg">
            Ready to embark on your dream journey to Sri Lanka? Making an
            inquiry with Heaven Lanka is simple and hassle-free. Follow these
            easy steps to kickstart your personalized travel experience
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-20 mt-8">
        <AdventureList />
      </div>

      <div className="container mx-auto px-4 md:px-20 mt-8  md:mt-28 ">
        <SubscriptionCard />
      </div>

      <div className="bg-[#077B83] bg-opacity-10 md:mt-[-100px] md:h-[100px] -z-50 relative"></div>
      <div className="bg-[#077B83] bg-opacity-10  ">
        <div className="container mx-auto px-4 md:px-20 py-8 md:pt-[160px]">
          <FooterView />
        </div>
      </div>
      <SimpleChatbot />
    </div>
  );
};

export default HomeContent;
