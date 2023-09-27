import Image from "next/image";
import image from ".././../../assets/Tour/promodhya-abeysekara-gjd-7_3Ek_w-unsplash 1.png";
import iconView from "../../../assets/Tour/Asset 4@3x.png";
import iconViewOne from "../../../assets/Tour/Asset 3@3x.png";
import bulletiocn from "../../../assets/Tour/Asset 2@3x 3.png";
import Image1 from "../../../assets/Tour/datingscout--rXNxKh35Rc-unsplash 1.png";
import image2 from "../../../assets/Tour/promodhya-abeysekara-rdrGpquZ1Hc-unsplash.png";
import image3 from "../../../assets/Tour/yves-alarie-yaGheETUSK4-unsplash.png";
import Image4 from "../../../assets/Tour/3Nmain.png";
import image5 from "../../../assets/Tour/3N1.png";
import image6 from "../../../assets/Tour/3N2.png";
import Image7 from "../../../assets/Tour/3N3.png";
import image8 from "../../../assets/Tour/3N4.png";
import image10 from "../../../assets/Tour/Mask group.png";
import image11 from "../../../assets/Tour/daniel-klein-3EMuRsz55mk-unsplash.png";
import image12 from "../../../assets/Tour/dasith-kavin-S7c0CaxO2TI-unsplash.png";
import image13 from "../../../assets/Tour/ramesh-ranasinghe-KzUBox4l1ZM-unsplash.png";
import image14 from "../../../assets/Tour/tharoushan-kandarajah-p743KeSLQPI-unsplash.png";
import image9 from "../../../assets/Tour/Ellipse 39.png";

const ItinaryDetails3NContent = () => {
  return (
    <div className="flex flex-col  justify-start  mt-[100PX]">
      {/* ----------------Day 1----------------- */}
      <div className="flex flex-col justify-start items-left border-dashed border-l-[3px] border-[#077B83] ">
        <div className="flex flex-row gap-[10px] md:gap-[30px] items-center justify-start">
          <Image src={image9} alt="item1" className="w-[20px] md:w-[47px] ml-[-11px] md:ml-[-23px]"  />
          <h1 className="md:text-[44px] md:w-full text-[20px] font-bold font-[volkhov] text-left">
            Day 01 - <span className="text-[#077B83]"> Kandy</span>
          </h1>
        </div>
        <div className="font-[700] md:text-[20px] md:leading-[28px] text-[14px] leading-[18px] text-[#FA7436] ml-[20px] md:ml-[60px] tracking-[-2%] ">
          (1 Night)
        </div>
        <div className="flex flex-col xl:flex-row gap-[50px] mt-[40px] px-[20px] xl:pl-[60px]">
          <div className="flex flex-row gap-[60px] w-full md:w-[570px] font-[400] text-[18px] md:text-[20px] leading-[32px]">
            <div className="flex flex-col gap-[20px] md:gap-[50px]">
              <p>
                Kandy is a city in central Sri Lanka, also known as the Hill
                Capital of Sri Lanka. It is the second largest city in the
                country with a population of around 125,000 people. The city is
                famous for its ancient Buddhist temples, including the Temple of
                the Tooth Relic (also known as Sri Dialed Maligawa), which is
                believed to hold the sacred tooth relic of the Buddha. Kandy was
                declared a UNESCO World Heritage Site in 1988 for its cultural
                significance and historical importance. The city is also home to
                the Kandy Lake, one of the most visited tourist attractions in
                Sri Lanka.
              </p>

              <div className="flex flex-col md:gap-[30px]">
              <div className="flex flex-row items-center gap-[20px]">
                  <Image src={iconView} alt="item1" className="w-[25px] h-[18px] md:w-[45px] md:h-[32px]" />

                  <span className="font-semibold">
                    Cinnamon Citadel (4 Star Hotel)
                  </span>
                </div>
                <div className="flex flex-row  items-center gap-[20px]">
                  <Image src={iconViewOne} alt="item1" className="w-[24px] h-[20px] md:w-[43px] md:h-[36px]" />

                  <span className="font-semibold">Half Board Basis</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Image
              src={image}
              alt="item1"
              className="object-cover w-full h-full rounded-[20px]"
            />
          </div>
        </div>
      </div>
      <div>
      <div className="flex flex-col gap-[40px] px-[20px] md:pl-[70px]  border-dashed border-l-[3px] border-[#077B83]  ">
        <h1 className="mt-[90px] md:text-[36px] text-[24px] font-bold font-[volkhov] text-left">
            Activities
          </h1>
          <div className="flex flex-col md:gap-[30px]">
          <div className="flex flex-row gap-[20px] ">
              <Image
                src={bulletiocn}
                alt="item1"
                className="w-[20px] h-[20px] md:w-[25px] md:h-[25px]"
              />

              <span className="w-[1200px] font-[400] md:text-[20px] md:leading-[32px] text-[18px] leading-[30px]">
                Visit the Temple of the Tooth Relic: This temple is considered
                to be one of the most sacred Buddhist temples in the world and
                is a must-visit when in Kandy.{" "}
              </span>
            </div>
            <div className="flex flex-row gap-[20px] ">
              <Image
                src={bulletiocn}
                alt="item1"
                className="w-[20px] h-[20px] md:w-[25px] md:h-[25px]"
              />

              <span className="w-[1200px] font-[400] md:text-[20px] md:leading-[32px] text-[18px] leading-[30px]">
                Explore the Royal Botanic Gardens: With over 4000 species of
                plants and trees, this garden is a piece of paradise on earth.
              </span>
            </div>
            <div className="flex flex-row gap-[20px] ">
              <Image
                src={bulletiocn}
                alt="item1"
                className="w-[20px] h-[20px] md:w-[25px] md:h-[25px]"
              />

              <span className="w-[1200px] font-[400] md:text-[20px] md:leading-[32px] text-[18px] leading-[30px]">
                Watch a cultural performance: Kandy is home to traditional dance
                and music performances that showcase the rich culture of Sri
                Lanka.{" "}
              </span>
            </div>
            <div className="flex flex-row gap-[20px] ">
              <Image
                src={bulletiocn}
                alt="item1"
                className="w-[20px] h-[20px] md:w-[25px] md:h-[25px]"
              />

              <span className="w-[1200px] font-[400] md:text-[20px] md:leading-[32px] text-[18px] leading-[30px]">
                Walk around the Kandy Lake: This scenic lake is a peaceful spot
                to relax, take in the views, and watch the locals go about their
                day.{" "}
              </span>
            </div>
            <div className="flex flex-row gap-[20px] ">
              <Image
                src={bulletiocn}
                alt="item1"
                className="w-[20px] h-[20px] md:w-[25px] md:h-[25px]"
              />

              <span className="w-[1200px] font-[400] md:text-[20px] md:leading-[32px] text-[18px] leading-[30px]">
                Browse the markets: Kandy has many markets selling fresh fruits,
                vegetables, spices, and handicrafts.{" "}
              </span>
            </div>
            <div className="flex flex-row gap-[20px] ">
              <Image
                src={bulletiocn}
                alt="item1"
                className="w-[20px] h-[20px] md:w-[25px] md:h-[25px]"
              />

              <span className="w-[1200px] font-[400] md:text-[20px] md:leading-[32px] text-[18px] leading-[30px]">
                Visit tea plantations: Kandy is surrounded by lush tea
                plantations that produce some of Sri Lanka&apos;s best teas.
                Take a tour of one of these plantations to learn about the tea
                making process and sample some of the local blends{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center px-[20px] gap-[40px] md:pl-[70px]  border-dashed border-l-[3px] border-[#077B83] ">
        <h1 className="mt-[90px] md:text-[36px] text-[24px] font-bold font-[volkhov] text-left">
          Kandy Highlights
        </h1>
        <div className="flex flex-col md:flex-row gap-[30px]">
          <Image src={Image1} alt="item1" className="w-[355px]" />
          <Image src={image2} alt="item1" className="w-[355px]" />
          <Image src={image3} alt="item1" className="w-[355px]" />
        </div>
      </div>

      {/* ----------------day 02------------ */}
      <div className="flex flex-col justify-start items-left  border-dashed border-l-[3px] border-[#077B83]  ">
      <div className="mt-[90px] flex flex-row gap-[10px] md:gap-[30px] items-center justify-start">
          <Image src={image9} alt="item1" className="w-[20px] md:w-[47px] ml-[-11px] md:ml-[-23px]" />
          <h1 className="md:text-[44px] md:w-full text-[20px] font-bold font-[volkhov] text-left">
            Day 02 - <span className="text-[#077B83]"> Hikkaduwa</span>
          </h1>
        </div>
        <div className="font-[700] md:text-[20px] md:leading-[28px] text-[14px] leading-[18px] text-[#FA7436] ml-[20px] md:ml-[60px] tracking-[-2%] ">
          (1 Night)
        </div>
        <div className="flex flex-col xl:flex-row gap-[50px] mt-[40px] px-[20px] xl:pl-[60px]">
          <div className="flex flex-row gap-[60px] w-full md:w-[570px] font-[400] text-[18px] md:text-[20px] leading-[32px]">
            <div className="flex flex-col gap-[20px] md:gap-[50px]">
              <p>
                Hikkaduwa is a small coastal town located on the southwestern
                coast of Sri Lanka. It is known for its beautiful beaches,
                vibrant marine life, and relaxed atmosphere, making it apopular
                destination for tourists and locals alike. The main attraction
                of Hikkaduwa is its stunning beach, which stretches for several
                kilometers and offers golden sands, crystal- clear waters, and
                excellent surfing opportunities. The town has a laid-back and
                bohemian vibe, with a range of beachfront bars, restaurants, and
                guesthouses catering to visitors.
              </p>

              <div className="flex flex-col gap-[10px] md:gap-[30px]">
                <div className="flex flex-row items-center gap-[20px]">
                  <Image src={iconView} alt="item1" className="w-[25px] h-[18px] md:w-[45px] md:h-[32px]" />

                  <span className="font-semibold">Hikka Tranz by Cinnamon</span>
                </div>
                <div className="flex flex-row  items-center gap-[20px]">
                  <Image src={iconViewOne} alt="item1" className="w-[24px] h-[20px] md:w-[43px] md:h-[36px]" />

                  <span className="font-semibold">Half Board Basis</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Image
              src={Image4}
              alt="item1"
              className="object-cover w-full h-full rounded-[20px]"
            />
          </div>
        </div>
      </div>

      <div>
      <div className="flex flex-col gap-[40px] px-[20px] md:pl-[70px]  border-dashed border-l-[3px] border-[#077B83] ">
          <h1 className="mt-[90px] md:text-[36px] text-[24px] font-bold font-[volkhov] text-left">
            Activities
          </h1>
          <div className="flex flex-col md:gap-[30px]">
            <div className="flex flex-row gap-[20px] ">
              <Image
                src={bulletiocn}
                alt="item1"
                className="w-[20px] h-[20px] md:w-[25px] md:h-[25px]"
              />

              <span className="w-[1200px] font-[400] md:text-[20px] md:leading-[32px] text-[18px] leading-[30px]">
                Beach Fun: Enjoy the beautiful beaches of Hikkaduwa by swimming,
                sunbathing, or simply relaxing on the golden sands. You can also
                try surfing, as Hikkaduwa is known for its excellent surf breaks
                suitable for both beginners and experienced surfers.
              </span>
            </div>
            <div className="flex flex-row gap-[20px] ">
              <Image
                src={bulletiocn}
                alt="item1"
                className="w-[20px] h-[20px] md:w-[25px] md:h-[25px]"
              />

              <span className="w-[1200px] font-[400] md:text-[20px] md:leading-[32px] text-[18px] leading-[30px]">
                Snorkeling and Diving: Explore the vibrant coral reef just off
                the coast of Hikkaduwa. Snorkeling and diving tours are
                available, allowing you to witness the diverse marine life,
                including colorful coral formations, turtles, tropical fish, and
                more.
              </span>
            </div>
            <div className="flex flex-row gap-[20px] ">
              <Image
                src={bulletiocn}
                alt="item1"
                className="w-[20px] h-[20px] md:w-[25px] md:h-[25px]"
              />

              <span className="w-[1200px] font-[400] md:text-[20px] md:leading-[32px] text-[18px] leading-[30px]">
                Glass Bottom Boat Rides: If you prefer to stay dry but still
                want to see the underwater wonders, take a glass-bottom boat
                ride. These tours allow you to observe the marine life through
                the glass bottom of the boat.
              </span>
            </div>
            <div className="flex flex-row gap-[20px] ">
              <Image
                src={bulletiocn}
                alt="item1"
                className="w-[20px] h-[20px] md:w-[25px] md:h-[25px]"
              />

              <span className="w-[1200px] font-[400] md:text-[20px] md:leading-[32px] text-[18px] leading-[30px]">
                Turtle Hatchery: Take a trip to the nearby turtle hatchery,
                where you can learn about conservation efforts and observe baby
                turtles before they are released into the ocean.
              </span>
            </div>
            <div className="flex flex-row gap-[20px] ">
              <Image
                src={bulletiocn}
                alt="item1"
                className="w-[20px] h-[20px] md:w-[25px] md:h-[25px]"
              />

              <span className="w-[1200px] font-[400] md:text-[20px] md:leading-[32px] text-[18px] leading-[30px]">
                Madu River Safari: Embark on a boat trip along the picturesque
                Madu River. Explore the mangrove forests, visit small islands,
                and spot diverse bird species and wildlife along the way.
              </span>
            </div>
            <div className="flex flex-row gap-[20px] ">
              <Image
                src={bulletiocn}
                alt="item1"
                className="w-[20px] h-[20px] md:w-[25px] md:h-[25px]"
              />

              <span className="w-[1200px] font-[400] md:text-[20px] md:leading-[32px] text-[18px] leading-[30px]">
                Yoga and Wellness: Hikkaduwa has a growing wellness scene, with
                many yoga retreats, meditation centers, and spas offering
                relaxation and rejuvenation experiences.
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center px-[20px] gap-[40px] md:pl-[70px]  border-dashed border-l-[3px] border-[#077B83] ">
        <h1 className="mt-[90px] md:text-[36px] text-[24px] font-bold font-[volkhov] text-left">
          Hikkaduwa Highlights
        </h1>
        <div className="flex flex-col md:flex-row gap-[30px]">
          <Image src={image5} alt="item1" className="w-[355px]" />
          <Image src={image6} alt="item1" className="w-[355px]" />
          <Image src={Image7} alt="item1" className="w-[355px]" />
          <Image src={image8} alt="item1" className="w-[355px]" />
        </div>
      </div>

      {/* --------------------day03---------------------- */}
      <div className="flex flex-col justify-start items-left  border-dashed border-l-[3px] border-[#077B83] ">
      <div className=" mt-[90px] flex flex-row gap-[10px] md:gap-[30px] items-center justify-start">
          <Image src={image9} alt="item1" className="w-[20px] md:w-[47px] ml-[-11px] md:ml-[-23px]" />
          <h1 className="md:text-[44px] md:w-full text-[20px] font-bold font-[volkhov] text-left">
            Day 03 - <span className="text-[#077B83]"> Colombo</span>
          </h1>
        </div>
        <div className="font-[700] md:text-[20px] md:leading-[28px] text-[14px] leading-[18px] text-[#FA7436] ml-[20px] md:ml-[60px] tracking-[-2%] ">
          (1 Night)
        </div>
        <div className="flex flex-col xl:flex-row gap-[50px] mt-[40px] px-[20px] xl:pl-[60px]">
          <div className="flex flex-row gap-[60px] w-full md:w-[570px] font-[400] text-[18px] md:text-[20px] leading-[32px]">
            <div className="flex flex-col gap-[20px] md:gap-[50px]">
              <p>
                Colombo, the commercial capital of Sri Lanka is a vibrant city
                with a rich history and cultural heritage. It is a popular
                tourist destination, known for its beautiful beaches, historic
                landmarks, and vibrant nightlife.
              </p>

              <div className="flex flex-col gap-[10px] md:gap-[30px]">
                <div className="flex flex-row items-center gap-[20px]">
                  <Image src={iconView} alt="item1" className="w-[25px] h-[18px] md:w-[45px] md:h-[32px]" />

                  <span className="font-semibold">
                    Kingsbury Colombo (5 Star Hotel)
                  </span>
                </div>
                <div className="flex flex-row  items-center gap-[20px]">
                  <Image src={iconViewOne} alt="item1" className="w-[24px] h-[20px] md:w-[43px] md:h-[36px]" />

                  <span className="font-semibold">Half Board Basis</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Image
              src={image10}
              alt="item1"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
      <div>
      <div className="flex flex-col gap-[40px] px-[20px] md:pl-[70px]  border-dashed border-l-[3px] border-[#077B83] ">
          <h1 className="mt-[90px] md:text-[36px] text-[24px] font-bold font-[volkhov] text-left">
            Activities
          </h1>
          <div className="flex flex-col md:gap-[30px]">
            <div className="flex flex-row gap-[20px] ">
              <Image
                src={bulletiocn}
                alt="item1"
                className="w-[20px] h-[20px] md:w-[25px] md:h-[25px]"
              />

              <span className="w-[1200px] font-[400] md:text-[20px] md:leading-[32px] text-[18px] leading-[30px]">
                Gangaramaya Temple is a beautiful Buddhist temple located in the
                heart of Colombo. The temple attracts thousands of worshippers
                and tourists every year. Visitors can admire the stunning
                architecture and learn about Buddhist practices and teachings.
              </span>
            </div>
            <div className="flex flex-row gap-[20px] ">
              <Image
                src={bulletiocn}
                alt="item1"
                className="w-[20px] h-[20px] md:w-[25px] md:h-[25px]"
              />

              <span className="w-[1200px] font-[400] md:text-[20px] md:leading-[32px] text-[18px] leading-[30px]">
                Pettah Market is a bustling market located in the heart of
                Colombo. It is a great place to experience the local culture and
                people. Visitors can buy a variety of items, including spices,
                fruits, and vegetables at reasonable prices.
              </span>
            </div>
            <div className="flex flex-row gap-[20px] ">
              <Image
                src={bulletiocn}
                alt="item1"
                className="w-[20px] h-[20px] md:w-[25px] md:h-[25px]"
              />

              <span className="w-[1200px] font-[400] md:text-[20px] md:leading-[32px] text-[18px] leading-[30px]">
                Visitation of Independence Square ( Optional)
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center px-[20px] gap-[40px] md:pl-[70px]  border-dashed border-l-[3px] border-[#077B83] ">
        <h1 className="mt-[90px] md:text-[36px] text-[24px] font-bold font-[volkhov] text-left">
          Colombo Highlights
        </h1>
        <div className="flex flex-col md:flex-row gap-[30px]">
          <Image src={image11} alt="item1" className="w-[355px]" />
          <Image src={image12} alt="item1" className="w-[355px]" />
          <Image src={image13} alt="item1" className="w-[355px]" />
          <Image src={image14} alt="item1" className="w-[355px]" />
        </div>
      </div>
      <div className="flex flex-row gap-[10px] md:gap-[30px] items-center justify-start  border-dashed border-l-[3px] border-[#077B83] ">
          <Image src={image9} alt="item1" className="w-[20px] md:w-[47px] ml-[-11px] md:ml-[-23px] mt-[90px]"  />
          <h1 className="mt-[90px] md:text-[44px] md:w-full text-[20px] font-bold font-[volkhov] text-left">End</h1>
      </div>
    </div>
  );
};

export default ItinaryDetails3NContent;
