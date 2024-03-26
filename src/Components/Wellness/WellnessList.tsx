import React from "react";
import ulpotha from "../../../assets/Wellness/WellnessList/ulpotha.png";
import samadhi from "../../../assets/Wellness/WellnessList/samadhi.png";
import jetwing from "../../../assets/Wellness/WellnessList/jetwing.png";
import sen from "../../../assets/Wellness/WellnessList/sen.png";
import santhani from "../../../assets/Wellness/WellnessList/santhani.png";
import barbaryen from "../../../assets/Wellness/WellnessList/barbaryen.png";
import WellnessCard from "./WellnessCard";

const WellnessList = () => {
  const BeachList = [
    {
      image: ulpotha,
      name: "Ulpotha",
      location: "Embogama",
      description:
        "Ulpotha is a tranquil eco-friendly retreat nestled in a secluded Sri Lankan village, offering a holistic experience that harmonizes yoga, Ayurveda, and traditional village living. Amidst lush natural surroundings, guests can indulge in immersive yoga and meditation sessions to rejuvenate mind and body. Ayurvedic treatments provide therapeutic healing, complemented by organic vegetarian meals sourced locally, promoting wellness from within. Cultural experiences enrich the journey, offering insights into Sri Lanka's vibrant heritage.",
    },
    {
      image: samadhi,
      name: "Samadhi Centre",
      location: "Kandy",
      description:
        "The Samadhi Centre, located in the serene surroundings of Kandy, specializes in immersive retreats centered on mindfulness, meditation, and holistic wellness. Guests engage in guided meditation sessions and participate in mindfulness workshops, cultivating mental clarity and emotional balance. Surrounded by nature's beauty, the Samadhi Centre provides a serene sanctuary for individuals seeking to reconnect with themselves and find peace amidst life's challenges, making it an ideal destination for holistic well-being.",
    },
    {
      image: jetwing,
      name: "Jetwing Ayurveda Pavilions",
      location: "Negombo",
      description:
        "Jetwing Ayurveda Pavilions, nestled in Negombo, specializes in authentic Ayurvedic treatments and customized wellness programs. Alongside wellness practices, Jetwing Ayurveda Pavilions offers nourishing Ayurvedic cuisine, promoting health and vitality from within. This harmonious blend of ancient healing techniques, mindful practices, and natural beauty creates an idyllic haven for guests seeking holistic wellness and renewal.",
    },
    {
      image: sen,
      name: "Sen Wellness Sanctuary",
      location: "Netolpitiya",
      description:
        "Sen Wellness Sanctuary, cocooned within Sri Lanka's southern coast, offers bespoke wellness retreats amidst unspoiled natural surroundings. Tailored to individual needs, guests embark on journeys of holistic healing, encompassing yoga, meditation, and Ayurvedic therapies. Sen Wellness Sanctuary thus provides a sanctuary for guests to reconnect with themselves and nature, promoting profound transformation and holistic wellness.",
    },
    {
      image: santhani,
      name: "Santani Wellness Resort & Spa",
      location: "Kandy",
      description:
        "Nestled amid the verdant hills of Sri Lanka's central province, Santani Wellness Resort & Spa is a haven for holistic wellness seekers. Embracing the tranquility of its surroundings, Santani offers bespoke wellness programs tailored to individual needs, fostering physical, mental, and spiritual well-being. Guests indulge in rejuvenating yoga and meditation sessions, guided by experienced instructors, while spa treatments further enhance relaxation and rejuvenation. ",
    },
    {
      image: barbaryen,
      name: "The Ayurveda Retreat at Barberyn Resorts in Beruwala & Weligama",
      location: "Beruwala",
      description:
        "Barberyn Resorts' Ayurveda Retreat in Sri Lanka offers a personalized wellness journey with expert Ayurvedic care, yoga, and meditation, set against a backdrop of coastal serenity for a rejuvenating experience.",
    },
  ];
  return (
    <div className="flex glex-col lg:flex-row flex-wrap gap-5 md:gap-16 justify-center">
      {BeachList.map((beach, index) => (
        <WellnessCard key={index} beach={beach} />
      ))}
    </div>
  );
};

export default WellnessList;
