"use client";
import Image from "next/image";
import FooterView from "../Footer/Footer";
import SubscriptionCard from "../Subscribe/SubscriptionCard";
import QuotesCard from "../Quotes/QuotesCard";
import profile1 from "../../../assets/AboutUs/335322207_877656710200879_3485686787873823548_n 1.png";
import SimpleChatbot from "../ChatBot/Chatbot";
import QuoteForm from "../Quotes/QuateForm";

const PrivacyContent = () => {
  return (
    <div className="">
      <div className="flex justify-center mt-8 xl:-mt-[185px] px-[20px]">
        <QuotesCard />
      </div>
      <div className="container mx-auto px-6 lg:pl-[100px] lg:pr-[100px] flex flex-col mt-[60px]  space-y-4">
        <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold font-[volkhov] md:ml-[50px] xl:ml-[100px]">
          <span className="text-[#077B83]">Privacy </span>Policy
        </h1>
        <div className="flex flex-col md:items-start md:ml-[50px] xl:ml-[150px] md:mr-[50px] xl:mr-[100px]">
          <p className="mt-2 text-[16px] md:text-[20px] md:text-left leading-[32px] text-[#222222]">
            At Heaven Lanka, we value and respect your privacy, and this Privacy
            Policy outlines how we collect, use, and process your personal data.
            We encourage you to read this policy carefully to understand our
            practices regarding your information and how we handle it.
          </p>
        </div>
      </div>
      ;
      <div className="container mx-auto px-6 lg:pl-[100px] lg:pr-[100px] flex flex-col mt-[60px] space-y-4">
        <h1 className="text-xl md:text-3xl lg:text-3xl font-bold font-[volkhov] md:ml-[50px] xl:ml-[100px]">
          Data We Collect
        </h1>
        <div className="flex flex-col md:items-start md:ml-[50px] xl:ml-[150px] md:mr-[50px] xl:mr-[100px]">
          <p className="mt-2 text-[16px]  md:text-[20px] text-left leading-[32px] text-[#222222]">
            To provide our exceptional services, Heaven Lanka may collect, use,
            and disclose your information, including personal data. Personal
            data includes any information that can identify you or that we can
            link to you. While using our services, you may be asked to provide
            certain information, but you have the choice to decline. However,
            please note that if you choose not to provide necessary data
            required for specific services or features, you may not be able to
            receive the full benefits of our offerings. The data we collect may
            include:
          </p>
          <ul className="pl-10 text-[16px]  md:text-[20px] text-left leading-[32px] text-[#222222]">
            <li className="flex items-center  gap-5">
              &#8226; Names and contact information (e.g., contact number, email
              address)
            </li>
            <li className="flex items-center  gap-5">
              &#8226; Travel information (e.g., citizenship, date of birth,
              gender)
            </li>
            <li className="flex items-center  gap-5">
              &#8226; Travel preferences and other details (e.g., travel dates,
              passenger count, room and meal preferences)
            </li>
            <li className="flex items-center  gap-5">
              &#8226; Payment and bank information
            </li>
          </ul>
          <p className="mt-2 text-[16px]  md:text-[20px] text-left leading-[32px] text-[#222222]">
            We do not collect or share your information for direct marketing
            purposes without your consent.
          </p>
        </div>
      </div>
      <div className="container mx-auto px-6 lg:pl-[100px] lg:pr-[100px] flex flex-col mt-[60px] space-y-4">
        <h1 className="text-xl md:text-3xl lg:text-3xl font-bold font-[volkhov] md:ml-[50px] xl:ml-[100px]">
          How We Use Your Information
        </h1>
        <div className="flex flex-col md:items-start md:ml-[50px] xl:ml-[150px] md:mr-[50px] xl:mr-[100px]">
          <p className="mt-2 text-[16px]  md:text-[20px] text-left leading-[32px] text-[#222222]">
            Heaven Lanka may use the information we collect or that you provide,
            including personal data, for the following purposes:
          </p>
          <ul className="pl-10 text-[16px]  md:text-[20px] text-left leading-[32px] text-[#222222]">
            <li className="flex items-center  gap-5">
              &#8226; Providing our services and fulfilling our obligations to
              you
            </li>
            <li className="flex items-center  gap-5">
              &#8226; Handling requests made by you
            </li>
            <li className="flex items-center  gap-5">
              &#8226; Communicating with you via email, telephone, or other
              communication channels
            </li>
            <li className="flex items-center  gap-5">
              &#8226; Offering customer care and support services
            </li>
            <li className="flex items-center  gap-5">
              &#8226; Processing payments for your bookings
            </li>
            <li className="flex items-center  gap-5">
              &#8226; Sending you information about products or services that
              may interest you, with your consent
            </li>
            <li className="flex items-center  gap-5">
              &#8226; Complying with applicable laws and regulations
            </li>
            <li className="flex items-center  gap-5">
              &#8226; Protecting our operations, rights, and property
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-6 lg:pl-[100px] lg:pr-[100px] flex flex-col mt-[60px] space-y-4">
        <h1 className="text-xl md:text-3xl lg:text-3xl font-bold font-[volkhov] md:ml-[50px] xl:ml-[100px]">
          Disclosure of Your Personal Information
        </h1>
        <div className="flex flex-col md:items-start md:ml-[50px] xl:ml-[150px] md:mr-[50px] xl:mr-[100px]">
          <p className="mt-2 text-[16px]  md:text-[20px] text-left leading-[32px] text-[#222222]">
            We may disclose your personal information to related or unrelated
            third parties for the following purposes:
          </p>
          <ul className="pl-10 text-[16px]  md:text-[20px] text-left leading-[32px] text-[#222222]">
            <li className="flex items-center  gap-5">
              &#8226; Sharing your information with third-party service
              providers who assist us in offering our services, such as credit
              card processing and email management providers
            </li>
            <li className="flex items-center  gap-5">
              &#8226; Complying with legal requirements, court orders, or
              tribunal requests
            </li>
            <li className="flex items-center  gap-5">
              &#8226; Protecting our operations, rights, and property, as well
              as those of our affiliates, you, or others
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-6 lg:pl-[100px] lg:pr-[100px] flex flex-col mt-[60px] space-y-4">
        <h1 className="text-xl md:text-3xl lg:text-3xl font-bold font-[volkhov] md:ml-[50px] xl:ml-[100px]">
          Data Retention
        </h1>
        <div className="flex flex-col md:items-start md:ml-[50px] xl:ml-[150px] md:mr-[50px] xl:mr-[100px]">
          <p className="mt-2 text-[16px]  md:text-[20px] text-left leading-[32px] text-[#222222]">
            Heaven Lanka retains personal data for the period necessary to
            fulfill the purposes outlined in this policy, unless a longer
            retention period is required or permitted by applicable law. We
            consider our need to provide products and services, applicable laws
            and regulations, and contractual and legal obligations when
            determining the data retention period.
          </p>
        </div>
      </div>
      <div className="container mx-auto px-6 lg:pl-[100px] lg:pr-[100px] flex flex-col mt-[60px] space-y-4">
        <h1 className="text-xl md:text-3xl lg:text-3xl font-bold font-[volkhov] md:ml-[50px] xl:ml-[100px]">
          Cookies
        </h1>
        <div className="flex flex-col md:items-start md:ml-[50px] xl:ml-[150px] md:mr-[50px] xl:mr-[100px]">
          <p className="mt-2 text-[16px]  md:text-[20px] text-left leading-[32px] text-[#222222]">
            Heaven Lanka uses session cookies to keep your website login active
            during a session and to track your preferences for that session. We
            also utilize a persistent cookie to track your acceptance of our use
            of cookies to avoid prompting you again on your next visit to our
            site. We do not track information about your computer or browsing
            activity from other websites.
          </p>
        </div>
      </div>
      <div className="container mx-auto px-6 lg:pl-[100px] lg:pr-[100px] flex flex-col mt-[60px] space-y-4">
        <h1 className="text-xl md:text-3xl lg:text-3xl font-bold font-[volkhov] md:ml-[50px] xl:ml-[100px]">
          Changes to This Privacy Policy
        </h1>
        <div className="flex flex-col md:items-start md:ml-[50px] xl:ml-[150px] md:mr-[50px] xl:mr-[100px]">
          <p className="mt-2 text-[16px]  md:text-[20px] text-left leading-[32px] text-[#222222]">
            We may update this Privacy Policy as needed. In case of material
            changes affecting personal information already collected, we will
            make reasonable efforts to notify you and provide the opportunity to
            amend or cancel your registrations.
          </p>
          <p className="mt-2 text-[16px]  md:text-[20px] text-left leading-[32px] text-[#222222]">
            If you have any questions or concerns about our Privacy Policy or
            your personal data, please do not hesitate to contact us.
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

export default PrivacyContent;
