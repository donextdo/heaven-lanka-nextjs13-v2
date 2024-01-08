"use client";
import FooterView from "../Footer/Footer";
import SubscriptionCard from "../Subscribe/SubscriptionCard";
import QuotesCard from "../Quotes/QuotesCard";
import AllTestimonialsList from "../Testimonials/AllTestimonialsList";
import SimpleChatbot from "../ChatBot/Chatbot";

const TestimonialsContent = () => {
  return (
    <div className="">
      <div className="flex justify-center mt-8 xl:-mt-[185px] px-[20px]">
        <QuotesCard />
      </div>
      <div className="container mx-auto md:px-20  flex flex-col justify-center items-center mt-[100px] space-y-4">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold font-[volkhov]">
          Our <span className="text-[#077B83]">Testimonials</span>
        </h1>
        <p className="text-base text-center md:text-lg text-[#222222] leading-7 w-full">
          Embark on a Journey Through Authentic Experiences and Inspiring
          Adventures Shared by Our Globetrotting Community
        </p>
      </div>

      <div className="container mx-auto px-4 md:px-20 mt-8">
        <AllTestimonialsList />
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

export default TestimonialsContent;
