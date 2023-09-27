import Cultural from "../../../assets/Vaccation/Cultural.png";
import WildLife from "../../../assets/Vaccation/WildLife.png";
import Island from "../../../assets/Vaccation/Island.png";
import HillCountry from "../../../assets/Vaccation/HillCountry.png";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";

import VaccationCard from "./VaccationCard";
import Ratings from "./Rating/Ratings";

const SpecialVacationaList = () => {
  const VaccationLists = [
    {
      image: Cultural,
      name: "Cultural Highlights",
      rate: "5.0",
      price: "$400",
      duration: "4N/5D",
      quoted: "per person",
    },
    {
      image: WildLife,
      name: "Adventurous Escapes",
      rate: "5.0",
      price: "$400",
      duration: "3N/4D",
      quoted: "per person",
    },

    {
      image: Island,
      name: "Historical Marvels",
      rate: "4.0",
      price: "$800",
      duration: "6N/7D",
      quoted: "per person",
    },
    {
      image: HillCountry,
      name: "Wellness Retreats",
      rate: "4.9",
      price: "$500",
      duration: "8N/9D",
      quoted: "per person",
    },
    {
      image: Cultural,
      name: "Cultural Highlights",
      rate: "5.0",
      price: "$400",
      duration: "4N/5D",
      quoted: "per person",
    },
    {
      image: WildLife,
      name: "Adventurous Escapes",
      rate: "5.0",
      price: "$400",
      duration: "3N/4D",
      quoted: "per person",
    },

    {
      image: Island,
      name: "Historical Marvels",
      rate: "4.0",
      price: "$800",
      duration: "6N/7D",
      quoted: "per person",
    },
    {
      image: HillCountry,
      name: "Customize a trip?",
      rate: "4.9",
      price: "$500",
      duration: "8N/9D",
      quoted: "per person",
    },
  ];

  const displayedItems = VaccationLists.slice(0, 4);

  return (
    <div>
      <div className="flex flex-col lg:flex-row items-center gap-[30px] justify-center mt-4">
        {/* {displayedItems.map((item, index) => (
            <VaccationCard key={index} item={item} />
          ))} */}

        <VaccationCard
          image={HillCountry}
          name="Cultural Highlights"
          rate="4.8"
          price="$850"
          duration="2N/3D"
          quoted="per person"
          pathName="./singlePage"
        />

        <VaccationCard
          image={WildLife}
          name="Adventurous Escapes"
          rate="4.9"
          price="$950"
          duration="7N/8D"
          quoted="per person"
          pathName="./single7N8DPage"
        />

        <VaccationCard
          image={Island}
          name="Historical Marvels"
          rate="5.0"
          price="$800"
          duration="9N/10D"
          quoted="per person"
          pathName="./single9NPage"
        />

        <VaccationCard
          image={HillCountry}
          name="Wellness Retreats"
          rate="4.8"
          price="$500"
          duration="12N/13D"
          quoted="per person"
          pathName="./singlePage"
        />
      </div>
      <div className="mt-20">
        <Ratings />
      </div>
    </div>
  );
};

export default SpecialVacationaList;
