import Cultural from "../../../assets/Vaccation/Cultural.png";
import WildLife from "../../../assets/Vaccation/WildLife.png";
import Island from "../../../assets/Vaccation/Island.png";
import HillCountry from "../../../assets/Vaccation/HillCountry.png";
import Cost from "../../../assets/Vaccation/Coast to Clouds.png";
import Nature from "../../../assets/Vaccation/Natural Heritage.png";
import SriLanka from "../../../assets/Vaccation/Sri Lanka Unveiled.png";
import Beyond from "../../../assets/Vaccation/Beyond Boundaries.png";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";

import VaccationCard from "./VaccationCard";

const AllVaccationList = () => {
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
    // {
    //   image: beach,
    //   name: "Unspoiled Beaches",
    // },
    // {
    //   image: beach,
    //   name: "Unspoiled Beaches",
    // },
  ];

  const firstRow = VaccationLists.slice(0, 4);
  const secondRow = VaccationLists.slice(4);
  return (
    <div>
      <div className="flex flex-col lg:flex-row items-center gap-[30px] justify-center mt-4">
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
          image={Island}
          name="Island Escapes"
          rate="5.0"
          price="$800"
          duration="3N/4D"
          quoted="per person"
          pathName="./single3N4DPage"
        />

        <VaccationCard
          image={HillCountry}
          name="Hill Country Wonders"
          rate="4.8"
          price="$850"
          duration="4N/5D"
          quoted="per person"
          pathName="./single4N5DPage"
        />

        <VaccationCard
          image={WildLife}
          name="Wildlife and Nature"
          rate="4.9"
          price="$950"
          duration="5N/6D"
          quoted="per person"
          pathName="./single5N6DPage"
        />
      </div>
      <div className="flex flex-col lg:flex-row items-center gap-[30px] justify-center mt-4">
        <VaccationCard
          image={Nature}
          name="Natural Heritage"
          rate="4.8"
          price="$850"
          duration="6N/7D"
          quoted="per person"
          pathName="./single6N7DPage"
        />

        <VaccationCard
          image={Cost}
          name="Coast to Clouds"
          rate="4.9"
          price="$950"
          duration="7N/8D"
          quoted="per person"
          pathName="./single7N8DPage"
        />

        <VaccationCard
          image={SriLanka}
          name="Sri Lanka Unveiled"
          rate="5.0"
          price="$800"
          duration="9N/10D"
          quoted="per person"
          pathName="./single9NPage"
        />

        <VaccationCard
          image={Beyond}
          name="Beyond Boundaries"
          rate="4.8"
          price="$500"
          duration="2N/3D"
          quoted="per person"
          pathName="./singlePage"
        />
      </div>
    </div>
  );
};

export default AllVaccationList;
