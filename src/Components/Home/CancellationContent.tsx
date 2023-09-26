"use client";
import FooterView from "../Footer/Footer";
import SubscriptionCard from "../Subscribe/SubscriptionCard";
import QuotesCard from "../Quotes/QuotesCard";
import SimpleChatbot from "../ChatBot/Chatbot";

const CancellationContent = () => {
  return (
    <div className="">
      <div className="flex justify-center mt-8 xl:-mt-[185px] px-[20px]">
        <QuotesCard />
      </div>
      <div className="container mx-auto px-6 lg:pl-[100px] lg:pr-[100px] flex flex-col mt-[60px]  space-y-4">
        <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold font-[volkhov] md:ml-[50px] xl:ml-[100px]">
          <span className="text-[#077B83]">Cancellation </span>Policies
        </h1>
      </div>
      ;
      <div className="container mx-auto px-6 lg:pl-[100px] lg:pr-[100px] flex flex-col mt-[40px] space-y-4">
        <h1 className="text-xl md:text-3xl lg:text-3xl font-bold font-[volkhov] md:ml-[50px] xl:ml-[100px]">
          Cancellations by Clients
        </h1>
        <div className="flex flex-col md:items-start md:ml-[50px] xl:ml-[150px] md:mr-[50px] xl:mr-[100px]">
          <p className="mt-2 text-[16px]  md:text-[20px] text-left leading-[32px] text-[#222222]">
            Clients who wish to cancel their booking must inform Heaven Lanka in
            writing, signed by the lead passenger on the booking form. The
            cancellation will be effective from the date we receive the
            cancellation request, and the following general cancellation charges
            will apply:
          </p>
          <ul className="pl-10 text-[16px]  md:text-[20px] text-left leading-[32px] text-[#222222]">
            <li className="flex items-center  gap-5">
              &#8226; 21 days or more prior to check-in: No charge
            </li>
            <li className="flex items-center  gap-5">
              &#8226; 18-20 days prior to check-in: 40% of the total value
            </li>
            <li className="flex items-center  gap-5">
              &#8226; 15-17 days prior to check-in: 60% of the total value
            </li>
            <li className="flex items-center  gap-5">
              &#8226; 14 days or less prior to check-in: 100% of the total value
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-6 lg:pl-[100px] lg:pr-[100px] flex flex-col mt-[60px] space-y-4">
        <h1 className="text-xl md:text-3xl lg:text-3xl font-bold font-[volkhov] md:ml-[50px] xl:ml-[100px]">
          Cancellation by Heaven Lanka
        </h1>
        <div className="flex flex-col md:items-start md:ml-[50px] xl:ml-[150px] md:mr-[50px] xl:mr-[100px]">
          <p className="mt-2 text-[16px]  md:text-[20px] text-left leading-[32px] text-[#222222]">
            Heaven Lanka reserves the right to cancel any confirmed booking in
            any circumstances. However, we will not cancel a Guaranteed
            Departure Product except in the unusual circumstances of force
            majeure. Force majeure includes war, threat of war, riot, civil
            strife, industrial dispute, terrorist activity, natural or nuclear
            disaster, fire, adverse weather conditions, flight cancellation, or
            any other external circumstances beyond our control. In the event of
            force majeure, compensation will not be available, and Heaven Lanka
            will not be responsible to deliver any service or liable for any
            service for an already booked package. In such cases, we are not
            obligated to refund or compensate the customer. We will make every
            effort to notify customers of any changes or cancellations due to
            force majeure.
          </p>
        </div>
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

export default CancellationContent;
