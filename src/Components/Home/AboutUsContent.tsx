'use client'; 
import Image from "next/image";
import FooterView from "../Footer/Footer";
import SubscriptionCard from "../Subscribe/SubscriptionCard";
import QuotesCard from "../Quotes/QuotesCard";
import profile1 from "../../../assets/AboutUs/335322207_877656710200879_3485686787873823548_n 1.png";
import SimpleChatbot from "../ChatBot/Chatbot";

const AboutUsContent = () => {
  return (
    <div className="">
       <div className="flex justify-center mt-8 xl:-mt-[185px] px-[20px]">
        <QuotesCard />
      </div>

      <div className="container mx-auto px-6 md:pl-[100px] md:pr-[100px] flex flex-col mt-[60px] space-y-4">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold font-[volkhov] lg:ml-[100px]">
          <span className="text-[#077B83]">Our</span> Story
        </h1>
        <div className=" flex flex-col md:items-start lg:ml-[150px] lg:mr-[100px]">
          <p className="mt-2 text-[16px]  md:text-[20px] text-left leading-[32px] text-[#222222]">
            At Heaven Lanka, our story is one of passion, discovery, and a deep
            love for travel. It all began with a group of adventurous souls who
            shared a common dream – to unveil the hidden gems of Sri Lanka and
            curate unforgettable experiences for fellow explorers. Inspired by
            the rich tapestry of this beautiful island nation, we embarked on a
            journey to create a travel agency that goes beyond the ordinary.
          </p>
          <p className="mt-2 text-[16px]  md:text-[20px] text-left leading-[32px] text-[#222222]">
            With years of experience in the industry, our team of travel
            enthusiasts understands the transformative power of travel. We
            believe that every journey has the potential to change lives, foster
            connections, and create cherished memories. Guided by this belief,
            we set out to craft tailor-made tours and immersive experiences that
            capture the essence of Sri Lanka.
          </p>
          <p className="mt-2 text-[16px]  md:text-[20px] text-left leading-[32px] text-[#222222]">
            From the misty mountains to the sun-kissed beaches, from the
            bustling cities to the serene countryside, we curate itineraries
            that showcase the diverse landscapes, vibrant culture, and warm
            hospitality of Sri Lanka. Our meticulous attention to detail ensures
            that each trip is personalized, catering to the unique interests and
            preferences of our clients.
          </p>
          <p className="mt-2 text-[16px]  md:text-[20px] text-left leading-[32px] text-[#222222]">
            But our story doesn&apos;t end there. We are committed to sustainable and
            responsible travel, striving to protect the environment, support
            local communities, and preserve the cultural heritage of Sri Lanka.
            Through our partnerships with local guides, eco-conscious
            accommodations, and ethical tourism practices, we aim to create a
            positive impact on both travelers and the destinations we visit.
          </p>
          <p className="mt-2 text-[16px]  md:text-[20px] text-left leading-[32px] text-[#222222]">
            We are proud to have earned the trust and loyalty of countless
            adventurers who have embarked on unforgettable journeys with us.
            Their stories of awe-inspiring encounters, cultural immersion, and
            lifelong connections fuel our passion and drive us to continuously
            push the boundaries of what&apos;s possible.
          </p>
          <p className="mt-2 text-[16px]  md:text-[20px] text-left leading-[32px] text-[#222222]">
            Join us as we invite you to write your own chapter in the story of
            Heaven Lanka. Let us be your guide, your storyteller, and your
            trusted companion on your journey of discovery. Together, let&apos;s
            create memories that will last a lifetime.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 md:pl-[100px] md:pr-[100px] flex flex-col mt-[60px] space-y-4">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold font-[volkhov] lg:ml-[100px]">
          <span className="text-[#077B83]">Our</span> Vision
        </h1>
        <div className="flex flex-col md:items-start lg:ml-[150px] lg:mr-[100px]">
          <p className="text-[16px]  md:text-[20px] text-left leading-[32px] text-[#222222]">
            Our vision at Heaven Lanka is to be the gateway to unforgettable
            journeys, where wanderlust meets curated experiences. We envision a
            world where travelers immerse themselves in the vibrant tapestry of
            Sri Lanka, connecting with its natural wonders, cultural heritage,
            and warm-hearted people. Through personalized itineraries,
            exceptional service, and a commitment to sustainable travel, we
            strive to create transformative moments that inspire a lifelong love
            for exploration. Our vision is to be the trusted companion that
            unlocks the hidden treasures of Sri Lanka, leaving a lasting impact
            on the hearts and minds of our travelers.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 md:pl-[100px] md:pr-[100px] flex flex-col mt-[60px] space-y-4">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold font-[volkhov] lg:ml-[100px]">
          <span className="text-[#077B83]">Our</span> Mission
        </h1>
        <div className="flex flex-col md:items-start lg:ml-[150px] lg:mr-[100px]">
          <p className=" text-[16px]  md:text-[20px]  text-left leading-[32px] text-[#222222]">
            At Heaven Lanka, our mission is to curate exceptional travel
            experiences that ignite a sense of wonder, foster cultural
            understanding, and create lasting memories. We are dedicated to
            crafting personalized itineraries that showcase the best of Sri
            Lanka&apos;s diverse landscapes, rich heritage, and warm hospitality.
            With a commitment to responsible and sustainable travel practices,
            we aim to protect the natural environment, support local
            communities, and promote cultural preservation. Through our passion
            for travel and unwavering dedication to exceeding customer
            expectations, we strive to be the trusted partner that guides and
            empowers travelers to embark on unforgettable journeys of discovery
            in Sri Lanka.
          </p>
        </div>
      </div>

<div className="mt-[90px] pt-[40px] pb-[70px] bg-[#077B83] bg-opacity-[12%] flex flex-col items-center justify-center">
  <div className="container mx-auto px-6 md:pl-[100px] md:pr-[100px] flex flex-col">
    <h1 className="text-[24px] md:text-[48px] font-bold font-[volkhov]">
      Unveiling the
      <span className="text-[#077B83]">
        {" "}
        Visionary Behind Heaven Lanka!
      </span>
    </h1>
  </div>
  <div className="container mx-auto px-6 md:pl-[100px] md:pr-[100px] flex flex-col lg:flex-row gap-[20px] md:gap-[60px] mt-[30px]">
    <div className="flex flex-col items-center lg:items-start">
      <Image
        src={profile1}
        alt="item1"
        className=" w-full rounded-[30px] "
      />
      <span className="mt-[20px] text-[24px] md:text-[40px] font-[700] leading-[32px]">
        Harsha De Silva
      </span>
      <span className="mt-[10px] text-[16px] font-[700] leading-[32px]">
        Founder & CEO
      </span>
    </div>
    <div className="lg:w-[700px] flex flex-col ">
      <p className="text-[14px] md:text-[20px] text-left leading-[24px] md:leading-[32px] text-[#222222]">
        Meet Harsha De Silva, the driving force and guiding light of our
        travel agency. With an unwavering passion for exploration and a
        deep love for Sri Lanka, Harsha has dedicated their life to
        creating unforgettable travel experiences.
      </p>
      
      <p className=" text-[14px] md:text-[20px] text-left leading-[24px] md:leading-[32px] text-[#222222]">
              As an experienced traveler and industry expert, Harsha brings a
              wealth of knowledge and expertise to our team. Their profound
              understanding of the diverse landscapes, rich culture, and hidden
              gems of Sri Lanka allows us to curate exceptional itineraries that
              capture the essence of this remarkable destination.
            </p>
            <p className="  text-[14px] md:text-[20px] text-left leading-[24px] md:leading-[32px] text-[#222222]">
              Beyond their expertise, Harsha is committed to providing
              unparalleled service and exceeding the expectations of our valued
              clients. With a genuine belief in the transformative power of
              travel, they strive to create moments that leave a lasting impact
              and forge lifelong memories.
            </p>
            <p className="  text-[14px] md:text-[20px] text-left leading-[24px] md:leading-[32px] text-[#222222]">
              Under the visionary leadership of Harsha, Heaven Lanka continues
              to flourish as a trusted name in the travel industry. Their
              dedication to authenticity, sustainability, and personalized
              experiences is at the core of everything we do.
            </p>
            <p className="  text-[14px] md:text-[20px] text-left leading-[24px] md:leading-[32px] text-[#222222]">
              Join us as we embark on a journey shaped by Harsha&apos;s passion,
              expertise, and unwavering commitment to delivering extraordinary
              travel experiences.
            </p>
      {/* ... Rest of the content ... */}
    </div>
  </div>
</div>


      {/* <div className="container mt-[20px] md:mt-[40px] mx-auto px-6 md:pl-[100px] md:pr-[100px] flex flex-col">
    <h1 className="text-[24px] md:text-[48px] font-bold font-[volkhov] text-center lg:text-start">
          {" "}
          Meet Our <span className="text-[#077B83]">Extraordinary Team</span>
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row justify-center gap-[30px] items-center mt-[50px] pb-20 lg:pb-[330px]">
        <div className="flex flex-col  items-center  ">
          <Image
            src={profile1}
            alt="item1"
            className="rounded-[30px]  w-[240px] h-[240px] "
          />
          <span className=" mt-[25px] text-[24px] font-[700] leading-[32px]">
            Harsha De Silva
          </span>
          <span className=" text-[16px] font-[400] leading-[32px]">
            Founder & CEO{" "}
          </span>
        </div>

        <div className="flex flex-col  items-center ">
          <Image
            src={profile1}
            alt="item1"
            className="rounded-[30px]  w-[240px] h-[240px]"
          />
          <span className=" mt-[25px] text-[24px] font-[700] leading-[32px]">
            Harsha De Silva
          </span>
          <span className=" text-[16px] font-[400] leading-[32px]">
            Founder & CEO{" "}
          </span>
        </div>

        <div className="flex flex-col  items-center ">
          <Image
            src={profile1}
            alt="item1"
            className="rounded-[30px]  w-[240px] h-[240px]"
          />
          <span className=" mt-[25px] text-[24px] font-[700] leading-[32px]">
            Harsha De Silva
          </span>
          <span className=" text-[16px] font-[400] leading-[32px]">
            Founder & CEO{" "}
          </span>
        </div>

        <div className="flex flex-col  items-center ">
          <Image
            src={profile1}
            alt="item1"
            className="rounded-[30px] w-[240px] h-[240px]"
          />
          <span className=" mt-[25px] text-[24px] font-[700] leading-[32px]">
            Harsha De Silva
          </span>
          <span className=" text-[16px] font-[400] leading-[32px]">
            Founder & CEO{" "}
          </span>
        </div>
      </div> */}

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

export default AboutUsContent;
