"use client";
import Image from "next/image";
import FooterView from "../Footer/Footer";
import SubscriptionCard from "../Subscribe/SubscriptionCard";
import QuotesCard from "../Quotes/QuotesCard";
import Tel from "../../../assets/ContactUs/Asset 5@3x.png";
import Email from "../../../assets/ContactUs/Asset 4@3x.png";
import Location from "../../../assets/ContactUs/Asset 6@3x.png";
import Map from "../../../assets/ContactUs/image 22.png";
import SimpleChatbot from "../ChatBot/Chatbot";
import ContactForm from "../Contact/ContactForm";

const ContactUsContent = () => {
  return (
    <div className="">
      <div className="flex justify-center mt-8 xl:-mt-[185px] px-[20px]">
        <QuotesCard />
      </div>

      <div className="container mx-auto px-6 md:pl-[100px] md:pr-[100px] flex flex-col mt-[60px] space-y-4">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold font-[volkhov] md:ml-[100px]">
          <span className="text-[#077B83]">Get in</span> touch with us
        </h1>
        <div className="container mx-auto px-6 md:pl-[100px] md:pr-[100px] flex flex-col 2xl:flex-row 2xl:gap-[20px] gap-[100px] mt-[30px] items-center">
          <div className="flex flex-col items-center sm:items-start gap-[50px] justify-evenly">
            <div className="flex flex-col gap-[10px] sm:flex-row sm:gap-[50px] items-center">
              <div className="w-[117px] h-[117px] flex-shrink-0">
                <Image src={Tel} alt="tel" className="w-full" />
              </div>
              <div className="flex flex-col items-start justify-center">
                <h1 className="text-xl md:text-3xl lg:text-3xl font-bold font-[volkhov]">
                  +971 58 878 1993 <br /> +9476 34 09 033
                </h1>
                <p className="text-[16px] leading-[19px] text-[#222222]">
                  (Whatsapp)
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-[10px] sm:flex-row sm:gap-[50px] items-center">
              <div className="w-[117px] flex-shrink-0">
                <Image src={Email} alt="email" className="w-full" />
              </div>
              <div className="flex flex-col items-start justify-center">
                <h1 className="text-xl md:text-3xl lg:text-3xl font-bold font-[volkhov] text-center">
                  info@heavenlankatravels.com
                </h1>
              </div>
            </div>
            <div className="flex flex-col gap-[10px] sm:flex-row sm:gap-[50px] items-center">
              <div className="w-[117px] flex-shrink-0">
                <Image src={Location} alt="location" className="w-full" />
              </div>
              <div className="flex flex-col items-start justify-center">
                <h1 className="text-xl md:text-3xl lg:text-3xl font-bold font-[volkhov]">
                  No 169, Elpitiya Road, <br />
                  Wargugedara, Southern, <br />
                  Sri Lanka
                </h1>
              </div>
            </div>
          </div>

          <div className="flex-shrink-0">
            <Image src={Map} alt="map" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 md:pl-[100px] md:pr-[100px] flex flex-col mt-[100px] space-y-4">
        <h1 className="text-[#222222] text-center font-[volkhov] text-[32px] font-normal font-bold leading-[32px]">
          If you got any questions <br />
          please do not hesitate to send us a message
        </h1>
        <div>
          <ContactForm />
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-20 mt-[150px]">
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

export default ContactUsContent;
