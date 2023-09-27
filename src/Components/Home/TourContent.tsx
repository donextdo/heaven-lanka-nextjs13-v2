"use client";
import FeedbackMsgList from "../Feedback/FeedbackMsgList";
import FooterView from "../Footer/Footer";
import SubscriptionCard from "../Subscribe/SubscriptionCard";
import QuotesCard from "../Quotes/QuotesCard";
import AllVaccationList from "../Vacccation/AllVacationList";
import SpecialVacationaList from "../Vacccation/SpecialVacationList";
import SimpleChatbot from "../ChatBot/Chatbot";
import VaccationList from "../Vacccation/VaccationList";
import QuoteForm2 from "../Quotes/QuateForm2";

const TourContent = () => {
  return (
    <div className="">
      <div className="flex justify-center mt-8 xl:-mt-[185px] px-[20px]">
        <QuotesCard />
      </div>
      <div className="container mx-auto md:px-20  flex flex-col justify-center items-center mt-[100px] space-y-4">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold font-[volkhov]">
          vacation <span className="text-[#077B83]">plans</span>
        </h1>
        <p className="text-base text-center md:text-lg text-[#222222] leading-7 w-full">
          Embark on an unforgettable adventure with our &apos;Ultimate Sri
          Lanka&apos; tour package.
        </p>
        <p className="text-base text-center md:text-lg text-[#222222] leading-7 w-full">
          Discover the country&apos;s stunning landscapes, ancient temples, and
          wildlife on this comprehensive tour.
        </p>
      </div>

      <div className="container mx-auto px-4 md:px-20 mt-8">
        <AllVaccationList />
      </div>
      <div className="container mx-auto md:px-20  flex flex-col justify-center items-center mt-[100px] space-y-4">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold font-[volkhov]">
          Special vacation <span className="text-[#077B83]">plans</span>
        </h1>
        <p className="text-base text-center md:text-lg text-[#222222] leading-7 w-full">
          Unforgettable Experiences for Honeymoons and Luxury Getaways
        </p>
      </div>

      <div className="container mx-auto px-4 md:px-20 mt-8 mb-[20px] md:mb-[70px]">
        <SpecialVacationaList />
      </div>

      <div className="bg-[#077B83] bg-opacity-10">
        <div className="container mx-auto  md:px-80 px-8 py-8 flex flex-col md:flex-row items-center">
          {/* <div className="md:left-0 md:mr-8">
      <Image src={Bg} alt="item1" className="w-full" />
    </div> */}
          <div className="md:w-[70%]">
            <div className="text-center md:text-left space-y-4">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold font-[volkhov]">
                Voices <span className="text-[#077B83]">of Delight:</span>
              </h1>
              <p className="text-base md:text-lg text-[#222222]">
                Hear What Our Customers Have to Say!
              </p>
            </div>
            <div className="mt-4 md:mt-[-60px]">
              <FeedbackMsgList />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 xl:px-20 p-4 lg:p-10 mb-8 lg:mb-16 flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center mt-4 md:mt-8 space-y-4">
          <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold font-[volkhov]">
            Yes!{" "}
            <span className="text-[#077B83]">
              Sri Lanka Your Ideal Vacation Destination
            </span>
          </h1>
          <p className="w-full  text-base md:text-xl text-center leading-[24px] md:mx-[180px] lg:mx-[0px] xl:mx-[180px] 2xl:mx-[200px] lg:w-[750px] xl:w-[1000px]">
            Escape to Sri Lanka and unlock a world of wonders. With its pristine
            beaches, lush landscapes, vibrant culture, and rich heritage, Sri
            Lanka offers an unparalleled vacation experience. Discover a land
            where ancient temples stand alongside modern cities, where wildlife
            roams freely in national parks, and where warm hospitality embraces
            every visitor. Whether you seek relaxation on golden shores,
            thrilling adventures in the wilderness, or cultural immersion in
            historical treasures, Sri Lanka promises an unforgettable vacation
            that will captivate your heart and leave you yearning for more.
          </p>
        </div>

        <div className="mt-6 md:mt-8 space-y-4 lg:mx-[180px] 2xl:mx-[250px]">
          <p className="text-[16px] md:text-lg leading-[24px]">
            <span className="text-[#077B83]">1. Breathtaking Beaches:</span>{" "}
            Sink your toes into soft sands, soak up the sun, and swim in
            crystal-clear waters along Sri Lanka&apos;s stunning coastline. From
            lively beach towns to secluded coves, there&apos;s a beach for every
            mood.
          </p>
          <p className="text-[16px] md:text-lg leading-[24px]">
            <span className="text-[#077B83]">2. Lush Landscapes:</span> Explore
            the enchanting landscapes of Sri Lanka, from rolling tea plantations
            to mist-covered mountains and cascading waterfalls. Trek through
            verdant forests and marvel at the diversity of flora and fauna that
            thrive here.
          </p>
          <p className="text-[16px] md:text-lg leading-[24px]">
            <span className="text-[#077B83]">3. Rich Cultural Heritage:</span>{" "}
            Immerse yourself in Sri Lanka&apos;s rich cultural heritage, with
            ancient cities, UNESCO World Heritage sites, and religious
            landmarks. Witness traditional ceremonies, explore intricate
            temples, and delve into centuries-old history.
          </p>
          <p className="text-[16px] md:text-lg leading-[24px]">
            4. <span className="text-[#077B83]">Wildlife Encounters:</span>
            Embark on thrilling wildlife safaris and witness elephants,
            leopards, birds, and other exotic creatures in their natural
            habitats. Sri Lanka&apos;s national parks and reserves offer
            incredible opportunities for wildlife enthusiasts.
          </p>
          <p className="text-[16px] md:text-lg leading-[24px]">
            5. <span className="text-[#077B83]">Adventure Awaits:</span>From
            thrilling water sports and exhilarating hikes to scenic train rides
            and hot air balloon flights, Sri Lanka presents endless
            opportunities for adventure seekers.
          </p>
          <p className="text-[16px] md:text-lg leading-[24px]">
            6. <span className="text-[#077B83]">Warm Hospitality:</span>{" "}
            Experience the genuine warmth and hospitality of the Sri Lankan
            people, who will make you feel right at home and ensure your
            vacation is filled with unforgettable moments.
          </p>
          <p className="text-[16px] md:text-lg leading-[24px]">
            7. <span className="text-[#077B83]">Mouthwatering Cuisine:</span>
            Indulge in the flavors of Sri Lanka, where aromatic spices, fresh
            seafood, and exotic fruits come together to create a culinary
            paradise. Sample delicious curries, street food delicacies, and
            traditional sweets.
          </p>
          <p className="text-[16px] md:text-lg leading-[24px]">
            8. <span className="text-[#077B83]">Serene Wellness Retreats:</span>
            Find tranquility and rejuvenation at wellness retreats in Sri Lanka,
            offering yoga, meditation, Ayurvedic treatments, and spa experiences
            to revitalize your mind, body, and soul.
          </p>
          <p className="text-[16px] md:text-lg leading-[24px]">
            9.{" "}
            <span className="text-[#077B83]">Festivals and Celebrations:</span>
            Immerse yourself in the vibrant festivals and cultural celebrations
            of Sri Lanka, where colorful processions, traditional dance
            performances, and music fill the streets with joy and excitement.
          </p>
          <p className="text-[16px] md:text-lg leading-[24px]">
            10. <span className="text-[#077B83]">Safe and Welcoming:</span>Sri
            Lanka is known for being a safe and welcoming destination, where
            travelers can explore with peace of mind and create beautiful
            memories.
          </p>
          {/* Repeat similar adjustments for remaining numbered list items */}
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-20 mt-8">
        <QuoteForm2 />
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

export default TourContent;
