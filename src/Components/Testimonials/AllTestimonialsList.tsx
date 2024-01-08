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
    subtitle: "Web Developer",
    content:
      "John Doe provided excellent service. His expertise in web development was evident throughout the project. I highly recommend him for any web development tasks.John Doe provided excellent service. His expertise in web development was evident throughout the project. I highly recommend him for any web development tasks.",
  },
  {
    image: Island,
    name: "Island Escapes",
    subtitle: "Web Developer",
    content:
      "Island Escapes provided excellent service. Their expertise in web development was evident throughout the project. I highly recommend them for any web development tasks.",
  },
  {
    image: HillCountry,
    name: "Hill Country Wonders",
    subtitle: "Web Developer",
    content:
      "Hill Country Wonders provided excellent service.Hill Country Wonders provided excellent service. Their expertise in web development was evident throughout the project. I highly recommend them for any web development tasks.",
  },
  {
    image: WildLife,
    name: "Wildlife and Nature",
    subtitle: "Web Developer",
    content:
      "Wildlife and Nature provided excellent service. Their expertise in web development was evident throughout the project. I highly recommend them for any web development tasks.",
  },
  {
    image: Nature,
    name: "Natural Heritage",
    subtitle: "Web Developer",
    content:
      "Natural Heritage provided excellent service.project Natural Heritage provided excellent service. Their expertise in web development was evident throughout the project.. I highly recommend them for any web development tasks.",
  },
  {
    image: Cost,
    name: "Coast to Clouds",
    subtitle: "Web Developer",
    content:
      "Coast to Clouds provided excellent service Their expertise in web development was evident throughout the project",
  },
  {
    image: SriLanka,
    name: "Sri Lanka Unveiled",
    subtitle: "Web Developer",
    content:
      "Sri Lanka Unveiled provided excellent service. Their expertise in web development was evident throughout the project. I highly recommend them for any web development tasks.",
  },
  {
    image: Beyond,
    name: "Beyond Boundaries",
    subtitle: "Web Developer",
    content:
      "Beyond Boundaries provided excellent service. Their expertise in web development was evident throughout the project. Beyond Boundaries provided excellent service. Their expertise in web development was evident throughout the project. I highly recommend them for any web development tasks.",
  },
];

const AllTestimonialsList = () => {
    const cardMargins = [
        '0 0 0 0',
        '0 0 0 0',
        '0 0 0 0',
        '0 0 0 0',
        '0 0 0 0',
        '-100px 0 0 0',
        '-50px 0 0 0',
        '-100px 0 0 0',
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
