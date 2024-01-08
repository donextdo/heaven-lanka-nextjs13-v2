import React from "react";
import HillCountry from "../../../assets/Testimonials/testimonial-person.png";
import Island from "../../../assets/Testimonials/rhino-testimonial.png";
import WildLife from "../../../assets/Testimonials/testimonial-person.png";
import Nature from "../../../assets/Testimonials/testimonial-man-3.png";
import Cost from "../../../assets/Testimonials/testimonial-man-3.png";
import SriLanka from "../../../assets/Testimonials/rhino-testimonial.png";
import Beyond from "../../../assets/Testimonials/rhino-testimonial.png";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";

import TestimonialsCard from "./TestimonialsCard";

const testimonials = [
    {
      image: HillCountry,
      name: "John Doe",
      subtitle: "Adventure Enthusiast",
      content:
        "Absolutely loved my experience with the Hill Country Wonders travel package! The breathtaking landscapes and thrilling adventures made it an unforgettable journey. From pristine white sands to crystal-clear waters, it was a tropical paradise. Highly recommend!",
    },
    {
      image: Island,
      name: "Jane Smith",
      subtitle: "Beach Explorer",
      content:
        "Island Escapes provided the perfect beach getaway.The accommodations and activities exceeded my expectations.",
    },
    {
      image: WildLife,
      name: "Chris Johnson",
      subtitle: "Wildlife Photographer",
      content:
        "Wildlife and Nature tours offered me incredible opportunities for capturing stunning shots. From lush forests to majestic waterfalls, every moment was a celebration of Earth's wonders.  The knowledgeable guides and diverse wildlife made it a photographer's dream come true.",
    },
    {
      image: Nature,
      name: "Emily White",
      subtitle: "Nature Enthusiast",
      content:
        "The Natural Heritage expedition was a journey into the heart of nature.Truly awe-inspiring!",
    },
    {
      image: Cost,
      name: "Alex Turner",
      subtitle: "Coastal Explorer",
      content:
        "Coast to Clouds provided a seamless coastal experience. The transition from the mesmerizing coastlines to the mist-covered mountains was magical. A must-try for nature lovers!",
    },
    {
      image: SriLanka,
      name: "Lily Rodriguez",
      subtitle: "Cultural Explorer",
      content:
        "Sri Lanka Unveiled immersed me in the rich culture and history of the island. From ancient temples to vibrant markets, it was an eye-opening and culturally enriching journey.",
    },
    {
      image: Beyond,
      name: "Samuel Brown",
      subtitle: "Adventurous Spirit",
      content:
        "Beyond Boundaries took me on an adrenaline-pumping adventure. From thrilling activities to off-the-beaten-path destinations, it was a journey that pushed my limits and left me craving for more.",
    },
    {
      image: Nature,
      name: "Olivia Green",
      subtitle: "Eco Explorer",
      content:
        "The Nature Retreat was not only a peaceful escape but also an eco-friendly experience. Sustainable practices and serene surroundings made it an ideal destination for environmentally conscious travelers.",
    },
  ];

const AllTestimonialsList = () => {
    const cardMargins = [
        '0 0 0 0',
        '0 0 0 0',
        '0 0 0 0',
        '0 0 0 0',
        '0 0 0 0',
        '-130px 0 0 0',
        '-10px 0 0 0',
        '-130px 0 0 0',
      ];


  return (
   <div className="flex flex-wrap justify-center gap-8">
      {testimonials.map((testimonial, index) => (
        <TestimonialsCard key={index} {...testimonial} style={{ margin: cardMargins[index] }} />
      ))}
    </div>
  );
};

export default AllTestimonialsList;
