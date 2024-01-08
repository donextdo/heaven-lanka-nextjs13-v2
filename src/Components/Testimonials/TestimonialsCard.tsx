import React from "react";
import Image from "next/image";

const TestimonialsCard = ({ image, name, subtitle, content, style }: any) => {
  return (
    <div className="testimonial-card-container lg:w-72 h-full flex flex-col my-2 rounded-md" style={{ ...style }}>
      <div className="relative bg-[#9DD9F3] p-4 rounded-3xl">
        <p className="mb-4">{content}</p>
        <div className="absolute bottom-0 ml-2 left-2/6 transform -translate-x-1/2 bg-[#9DD9F3] border-t-3 border-blue-500 w-8 h-8 -rotate-45"></div>
      </div>

      <div className="testimonial-info-container flex items-center">
        <div
          className="testimonial-image-container mt-4 mb-4 ml-2"
          style={{ flex: "15%" }}
        >
          <Image
            className="border rounded-full"
            src={image}
            alt={`${name}'s image`}
            style={{ width: '60px', height: '60px', objectFit: 'cover' }}
          />
        </div>
        <div className="testimonial-details ml-3 flex-grow">
          <h1 className="testimonial-name text-[#077B83] text-sm font-semibold">
            {name}
          </h1>
          <p className="testimonial-subtitle text-[#555555] text-sm">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCard;
