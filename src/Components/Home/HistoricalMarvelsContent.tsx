"use client";

import BeachesList from "../Beaches/BeachesList";
import SimpleChatbot from "../ChatBot/Chatbot";
import FooterView from "../Footer/Footer";
import HistoricleList from "../HistoricalMarvels/HistoricalList";
import QuoteForm from "../Quotes/QuateForm";
import SubscriptionCard from "../Subscribe/SubscriptionCard";

const HistoricalMarvelsContent = () => {
  return (
    <div className="">
      <div className="container mx-auto px-4 md:px-5 mt-8 xl:mt-[75px] mb-16">
        <HistoricleList/>
      </div>
      <div className="container mx-auto px-4 md:px-20 mt-8">
        <QuoteForm />
      </div>
      <div className="container mx-auto px-4 md:px-20 mt-8">
        <SubscriptionCard />
      </div>

      <div className="bg-[#077B83] bg-opacity-10 md:mt-[-100px] md:h-[100px] -z-50 relative"></div>
      <div className="bg-[#077B83] bg-opacity-10 ">
        <div className="container mx-auto px-4 md:px-20 py-8 md:pt-[160px]">
          <FooterView />
        </div>
      </div>
      <SimpleChatbot />
    </div>
  );
};

export default HistoricalMarvelsContent;
