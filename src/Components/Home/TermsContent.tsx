"use client";
import Image from "next/image";
import FooterView from "../Footer/Footer";
import SubscriptionCard from "../Subscribe/SubscriptionCard";
import QuotesCard from "../Quotes/QuotesCard";
import profile1 from "../../../assets/AboutUs/335322207_877656710200879_3485686787873823548_n 1.png";
import SimpleChatbot from "../ChatBot/Chatbot";
import QuoteForm from "../Quotes/QuateForm";

const TermsContent = () => {
  return (
    <div className="">
      <div className="flex justify-center mt-8 md:-mt-[185px] px-[20px]">
        <QuotesCard />
      </div>

      <div className="container mx-auto px-6 md:pl-[100px] md:pr-[100px] flex flex-col mt-[50px] md:mt-[80px] space-y-4">
        <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold font-[volkhov] md:ml-[100px]">
          <span className="text-[#077B83]">Terms and </span>Conditions
        </h1>
      </div>

      <div className="container mx-auto px-6 md:pl-[100px] md:pr-[100px] flex flex-col mt-[60px] space-y-4">
        <h1 className="text-xl md:text-3xl lg:text-3xl font-bold font-[volkhov] md:ml-[100px]">
          Name Change Amendments
        </h1>
        <div className="flex flex-col md:items-start md:ml-[150px] md:mr-[100px]">
          <p className="mt-2 text-[16px]  md:text-[20px] text-left leading-[32px] text-[#222222]">
            Upon making the booking, it is essential to provide accurate and
            complete names as they appear on your passport. Please note that
            airlines do not permit name changes on issued tickets. Heaven Lanka
            will not be held responsible for any charges incurred due to the
            incorrect submission of names. To ensure a smooth process, we
            recommend submitting a copy of your passport when providing your
            preferred travel dates for your vacation. Payment and Pricing Policy
          </p>
          <p className="mt-4 text-[16px]  md:text-[20px] text-left leading-[32px] text-[#222222] ">
            Your reservation request will be confirmed upon receipt of the full
            payment due at the time of booking. While every effort will be made
            to confirm your request, please note that travel arrangements are
            not confirmed until you receive our written confirmation. Heaven
            Lanka reserves the right to make changes if required. Before a
            booking is confirmed, Heaven Lanka reserves the right to amend the
            price of the product due to any circumstances outside our control,
            such as changes relating to governmental actions, transportation
            costs, taxes, fees, and hotel rate adjustments. Advertised prices
            are subject to seasonal changes and exchange rates and may vary
            slightly. Payments can be made via bank transfers, Visa, or
            MasterCard.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 md:pl-[100px] md:pr-[100px] flex flex-col mt-[60px] space-y-4">
        <h1 className="text-xl md:text-3xl lg:text-3xl font-bold font-[volkhov] md:ml-[100px]">
          Cancellation by Clients
        </h1>
        <div className="flex flex-col md:items-start md:ml-[150px] md:mr-[100px]">
          <p className="mt-2 text-[16px]  md:text-[20px] text-left leading-[32px] text-[#222222]">
            Clients wishing to cancel must inform Heaven Lanka in writing,
            signed by the lead passenger on the booking form. Cancellation will
            take effect on the date the cancellation request is received by
            Heaven Lanka, and the following general cancellation charges will
            apply:
          </p>
          <ul className="pl-10 mt-2 text-[16px]  md:text-[20px] text-left leading-[32px] text-[#222222]">
            <li className="flex items-center  gap-5">
              &#8226; Up to 21 days before departure: No cancellation charge
            </li>
            <li className="flex items-center  gap-5">
              &#8226; 18 to 20 days before departure: 40% of the package price
            </li>
            <li className="flex items-center  gap-5">
              &#8226; 15 to 17 days before departure: 60% of the package price
            </li>
            <li className="flex items-center  gap-5">
              &#8226; Less than 14 days before departure: 100% of the package
              price{" "}
            </li>
          </ul>

          <p className="mt-4 text-[16px]  md:text-[20px] text-left leading-[32px] text-[#222222]">
            For specific packages, additional charges may apply as mentioned in
            the paragraph &apos;&apos;Amendments and Cancellation by Clients.&apos;&apos; Unredeemed
            vouchers can be canceled within the validity period with a
            cancellation fee. Crazy Deal Vouchers are valid for six months, and
            unused vouchers cannot be utilized or refunded after the expiration
            date.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 md:pl-[100px] md:pr-[100px] flex flex-col mt-[60px] space-y-4">
        <h1 className="text-xl md:text-3xl lg:text-3xl font-bold font-[volkhov] md:ml-[100px]">
          Cancellation by Heaven Lanka
        </h1>
        <div className="flex flex-col md:items-start md:ml-[150px] md:mr-[100px]">
          <p className="mt-2 text-[16px]  md:text-[20px] text-left leading-[32px] text-[#222222]">
            Heaven Lanka reserves the right to cancel any confirmed booking in
            any circumstances, except in the unusual circumstances of force
            majeure, which include unforeseen events beyond our control. While
            compensation is not available in the event of force majeure, if we
            are unable to provide the tour booked, we are not responsible to
            deliver any service or liable to refund or compensate the customer.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 md:pl-[100px] md:pr-[100px] flex flex-col mt-[60px] space-y-4">
        <h1 className="text-xl md:text-3xl lg:text-3xl font-bold font-[volkhov] md:ml-[100px]">
          Amendments/Changes
        </h1>
        <div className="flex flex-col md:items-start md:ml-[150px] md:mr-[100px]">
          <p className="mt-2 text-[16px]  md:text-[20px] text-left leading-[32px] text-[#222222]">
            Once a booking has been confirmed, any amendments must be advised
            and confirmed at least 72 hours before traveling by the lead
            passenger on the booking and may incur charges based on airline and
            hotels. Bookings/Refunds on Heaven Lanka Gift Voucher
          </p>
          <p className="mt-4 text-[16px]  md:text-[20px] text-left leading-[32px] text-[#222222]">
            Customers can redeem their gift voucher against any of the holiday
            packages offered. Any unredeemed gift voucher or pending balance
            will be refunded upon request, after deducting a cancellation/refund
            fee. Product Information
          </p>
          <p className="mt-4 text-[16px]  md:text-[20px] text-left leading-[32px] text-[#222222]">
            All product information has been published by Heaven Lanka in good
            faith. While we strive to operate all products, we reserve the right
            to change facilities and services described on our website and
            publications, substituting alternative arrangements of comparable
            value without compensation. We accept no liability for any loss of
            enjoyment resulting from such changes.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 md:pl-[100px] md:pr-[100px] flex flex-col mt-[60px] space-y-4">
        <h1 className="text-xl md:text-3xl lg:text-3xl font-bold font-[volkhov] md:ml-[100px]">
          Sri Lanka Public/National Holidays
        </h1>
        <div className="flex flex-col md:items-start md:ml-[150px] md:mr-[100px]">
          <p className="mt-2 text-[16px]  md:text-[20px] text-left leading-[32px] text-[#222222]">
            Crazy Deal Vouchers do not apply for travel periods during Sri Lanka
            Public/National Holidays. For travel during public holidays, kindly
            contact our Call Center for additional fees.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 md:pl-[100px] md:pr-[100px] flex flex-col mt-[60px] space-y-4">
        <h1 className="text-xl md:text-3xl lg:text-3xl font-bold font-[volkhov] md:ml-[100px]">
          Inclusions and Exclusions of Package Price
        </h1>
        <div className="flex flex-col md:items-start md:ml-[150px] md:mr-[100px]">
          <p className="mt-2 text-[16px]  md:text-[20px] text-left leading-[32px] text-[#222222]">
            The price of any holiday booked includes only the specified items.
            It does not include personal expenses or items of a personal nature,
            including optional excursions, passport and visa fees, gratuities,
            taxes, meals and beverages not specified, and more. Clients are
            fully responsible for arranging their travel insurance.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 md:pl-[100px] md:pr-[100px] flex flex-col mt-[60px] space-y-4">
        <h1 className="text-xl md:text-3xl lg:text-3xl font-bold font-[volkhov] md:ml-[100px]">
          Liability of Heaven Lanka
        </h1>
        <div className="flex flex-col md:items-start md:ml-[150px] md:mr-[100px]">
          <p className="mt-2 text-[16px]  md:text-[20px] text-left leading-[32px] text-[#222222]">
            Heaven Lanka acts as the Tour Operator on behalf of suppliers and
            accepts no liability for any loss, damage, injury, accident, delay,
            or irregularity arising from travel. Heaven Lanka&apos;s products may
            contain an element of risk, and clients undertake such risks
            voluntarily. We accept no liability for damages where we have
            provided products of a reasonable standard.
          </p>
        </div>
      </div>
      <div className="container mx-auto px-6 md:pl-[100px] md:pr-[100px] flex flex-col mt-[60px] space-y-4">
        <h1 className="text-xl md:text-3xl lg:text-3xl font-bold font-[volkhov] md:ml-[100px]">
          Delays
        </h1>
        <div className="flex flex-col md:items-start md:ml-[150px] md:mr-[100px]">
          <p className="mt-2 text-[16px]  md:text-[20px] text-left leading-[32px] text-[#222222]">
            Heaven Lanka will not be liable for any delays due to technical
            difficulties, strikes, weather conditions, or circumstances beyond
            our control. Any expenses relating to unscheduled extensions will be
            the client&apos;s responsibility.
          </p>
        </div>
      </div>
      <div className="container mx-auto px-6 md:pl-[100px] md:pr-[100px] flex flex-col mt-[60px] space-y-4">
        <h1 className="text-xl md:text-3xl lg:text-3xl font-bold font-[volkhov] md:ml-[100px]">
          Travel Documentation
        </h1>
        <div className="flex flex-col md:items-start md:ml-[150px] md:mr-[100px]">
          <p className="mt-2 text-[16px]  md:text-[20px] text-left leading-[32px] text-[#222222]">
            Clients are responsible for possessing valid passports, visas,
            necessary travel documents, vaccinations, and other medical
            certificates required for travel. It is important to verify the
            accuracy of travel documentation upon receipt. Passport and Visas
          </p>
          <p className="mt-4 text-[16px]  md:text-[20px] text-left leading-[32px] text-[#222222]">
            Clients are responsible for obtaining correct, current, and valid
            passports and re-entry permits where required. Heaven Lanka will not
            be liable for any consequences arising from failure to comply with
            such requirements.
          </p>
        </div>
      </div>
      <div className="container mx-auto px-6 md:pl-[100px] md:pr-[100px] flex flex-col mt-[60px] space-y-4">
        <h1 className="text-xl md:text-3xl lg:text-3xl font-bold font-[volkhov] md:ml-[100px]">
          Health and Conduct
        </h1>
        <div className="flex flex-col md:items-start md:ml-[150px] md:mr-[100px]">
          <p className="mt-2 text-[16px]  md:text-[20px] text-left leading-[32px] text-[#222222]">
            Clients are expected to be fit to complete their chosen tour and
            must disclose pre-existing medical conditions or illnesses. Clients
            are responsible for arranging their travel insurance to cover
            medical expenses and adventure activities.
          </p>
        </div>
      </div>
      <div className="container mx-auto px-6 md:pl-[100px] md:pr-[100px] flex flex-col mt-[60px] space-y-4">
        <h1 className="text-xl md:text-3xl lg:text-3xl font-bold font-[volkhov] md:ml-[100px]">
          Client Exclusion and Local Law
        </h1>
        <div className="flex flex-col md:items-start md:ml-[150px] md:mr-[100px]">
          <p className="mt-2 text-[16px]  md:text-[20px] text-left leading-[32px] text-[#222222]">
            Clients agree to accept the authority and decisions of Heaven Lanka
            and its suppliers&apos; employees and representatives. Clients may be
            excluded from the tour if their health or conduct endangers the safe
            and comfortable progress of the tour.
          </p>
        </div>
      </div>
      <div className="container mx-auto px-6 md:pl-[100px] md:pr-[100px] flex flex-col mt-[60px] space-y-4 md:mb-[50px]">
        <h1 className="text-xl md:text-3xl lg:text-3xl font-bold font-[volkhov] md:ml-[100px]">
          Client Exclusion and Local Law
        </h1>
        <div className="flex flex-col md:items-start md:ml-[150px] md:mr-[100px]">
          <p className="mt-2 text-[16px]  md:text-[20px] text-left leading-[32px] text-[#222222]">
            Clients must raise any complaints immediately with Heaven Lanka,
            allowing us to rectify the problem. Failure to complain immediately
            may reduce our liability to pay compensation. However, we will make
            every effort to resolve complaints to the customer&apos;s satisfaction.
          </p>
          <p className="mt-2 text-[16px]  md:text-[20px] text-left leading-[32px] text-[#222222]">
            Please note that the above terms and conditions are subject to
            change, and it is the client&apos;s responsibility to stay updated with
            any modifications. Should you have any questions or concerns, please
            do not hesitate to contact us.
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-20 mt-8">
        <QuoteForm/>
      </div>
      <div className="container mx-auto px-4 md:px-20 mt-8">
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

export default TermsContent;
