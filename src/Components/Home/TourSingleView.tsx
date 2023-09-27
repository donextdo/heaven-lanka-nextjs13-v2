"use client";
import { useState } from "react";
import "./single.css";
import FooterView from "../Footer/Footer";
import SubscriptionCard from "../Subscribe/SubscriptionCard";
import Inclusions from "../Inclusions/Inclusions";
import ItinaryDetailsContent from "../TourDetails/ItinaryDetailsContent";
import TourPageMap from "../MapView/TourPageMap";
import SimpleChatbot from "../ChatBot/Chatbot";
import QuoteForm from "../Quotes/QuateForm";

const TourSingleViewContent = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber: number) => {
    setActiveTab(tabNumber);
  };

  return (
    <div className="">
      <div className=" mt-8 ">
        <TourPageMap />
      </div>

      <div className="container mx-auto px-20 mt-[40px] flex flex-col justify-center items-center pb-[60px]"></div>

      <div className="md:container md:mx-auto px-10 lg:px-40 mt-10 md:mt-[200px] ">
        <div className="flex items-center justify-center ">
          <nav className="flex flex-row justify-end ">
            <div className="w-[200px]  2xl:w-[650px] md:w-[400px] sm:w-[300px] border-b-[2px] border-[black] "></div>
            <button
              type="button"
              className={`w-[80px]  2xl:w-[286px] 2xl:h-[65px]  2xl:text-[32px] md:w-[180px] md:h-[45px]  md:text-[24px] text-[black] font-[volkhov] font-[400] border-b-[2px] border-[black]  ${
                activeTab === 1
                  ? "active   border-[2px] border-[black]  border-b-[0px] border-b-[white] md:rounded-t-[30px] rounded-t-[10px]"
                  : ""
              }`}
              id="card-type-tab-item-1"
              data-hs-tab="#card-type-tab-1"
              aria-controls="card-type-tab-1"
              role="tab"
              onClick={() => handleTabClick(1)}
            >
              Itinerary
            </button>
            <button
              type="button"
              className={`w-[80px] h-[40px] 2xl:w-[286px] 2xl:h-[65px]  2xl:text-[32px] md:w-[180px] md:h-[45px]  md:text-[24px] text-[black] font-[volkhov] font-[400] border-b-[2px] border-[black] ${
                activeTab === 2
                  ? "active border-[2px] border-[black] border-b-[0px] border-b-[white] md:rounded-t-[30px] rounded-t-[10px] "
                  : ""
              }`}
              id="card-type-tab-item-2"
              data-hs-tab="#card-type-tab-2"
              aria-controls="card-type-tab-2"
              role="tab"
              onClick={() => handleTabClick(2)}
            >
              Inclusions
            </button>
          </nav>
        </div>

        <div className="mt-3">
          <div
            id="card-type-tab-1"
            role="tabpanel"
            aria-labelledby="card-type-tab-item-1"
            className={activeTab === 1 ? "" : "hidden"}
          >
            <ItinaryDetailsContent />
          </div>
          <div
            id="card-type-tab-2"
            role="tabpanel"
            aria-labelledby="card-type-tab-item-2"
            className={activeTab === 2 ? "" : "hidden"}
          >
            <Inclusions />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-20 mt-8">
        <QuoteForm />
      </div>

      <div className="container mx-auto px-4 md:px-20 mt-8">
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

export default TourSingleViewContent;
