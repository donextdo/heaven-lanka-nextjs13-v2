"use client";
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

      <div className="container mx-auto px-4 md:px-20 mt-8  md:mt-28 " >
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
        <TreasuresList />
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
          {/* <div className="md:left-0 md:mr-8">
      <Image src={Bg} alt="item1" className="w-full" />
    </div> */}
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

      <div className="bg-[#077B83] bg-opacity-10 md:mt-[-100px] md:h-[100px] -z-50 relative">
        
        </div>
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
