// // import FeedbackMsgCard from "./FeedbackMsgCard"
// // import UserProfile from '../../../assets/Feedback/user5.jpeg'
// // import { FiArrowLeftCircle ,FiArrowRightCircle } from 'react-icons/fi';

// // const FeedbackMsgList = () => {
// //     const Feedback =[
// //     {
// //         image: UserProfile ,
// //         content: "“I had the most incredible experience with Heaven Lanka! From the moment I booked my tour package until the very last day of my trip, everything was seamless. The personalized attention, knowledgeable guides, and attention to detail exceeded my expectations..”",
// //         name :'Mike taylor',
// //         location :'Lahore, Pakistan'
// //     }

// //     ]

// //     return (
// //         <div className="flex flex-row ">
// //             <div className="flex flex-row gap-[40px] mt-[60px]">
// //             <FiArrowLeftCircle className='w-10 h-10 text-[#FFFFFF] text-opacity-[50%] opacity-[50%] fill-[#999999]'/>
// //              <FiArrowRightCircle className='w-10 h-10 text-[#FFFFFF] text-opacity-[50%]  fill-[#FA7436]'/>
// //             </div>
            
// //              <div className=" ml-[320px] -mt-[50px]">
// //              {Feedback.map((message ,index) => (
// //                  <FeedbackMsgCard key={index} message={message}  />
// //              ))}
// //              </div>
            
            

// //         </div>
// //     )

// // }

// // export default FeedbackMsgList

// import React from 'react';
// import FeedbackMsgCard from './FeedbackMsgCard';
// import UserProfile from '../../../assets/Feedback/user5.jpeg';
// import { FiArrowLeftCircle, FiArrowRightCircle } from 'react-icons/fi';

// const FeedbackMsgList = () => {
//   const Feedback = [
//     {
//       image: UserProfile,
//       content:
//         '“I had the most incredible experience with Heaven Lanka! From the moment I booked my tour package until the very last day of my trip, everything was seamless. The personalized attention, knowledgeable guides, and attention to detail exceeded my expectations..”',
//       name: 'Mike Taylor',
//       location: 'Lahore, Pakistan',
//     },
//   ];

//   return (
//     <div className="flex flex-col md:flex-row md:gap-[400px] items-center mt-4">
//       <div className="flex gap-4 mt-4">
//         <FiArrowLeftCircle className="w-8 h-8 text-[#FFFFFF] text-opacity-50 fill-[#999999]" />
//         <FiArrowRightCircle className="w-8 h-8 text-[#FFFFFF] text-opacity-50 fill-[#FA7436]" />
//       </div>

//       <div className="mt-4">
//         {Feedback.map((message, index) => (
//           <FeedbackMsgCard key={index} message={message} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FeedbackMsgList;


import React, { useState } from 'react';
import FeedbackMsgCard from './FeedbackMsgCard';
import UserProfile from '../../../assets/Feedback/user5.jpeg';
import UserProfile1 from '../../../assets/Feedback/download (2).jpeg'
import UserProfile2 from '../../../assets/Feedback/download (3).jpeg'
import { FiArrowLeftCircle, FiArrowRightCircle } from 'react-icons/fi';

const FeedbackMsgList = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const feedbackList = [
    {
      image: UserProfile2,
      content:
        '“I had the most incredible experience with Heaven Lanka! From the moment I booked my tour package until the very last day of my trip, everything was seamless. The personalized attention, knowledgeable guides, and attention to detail exceeded my expectations..”',
      name: 'Mike Taylor',
      location: 'Lahore, Pakistan',
    },
    // Add more feedback messages here
    {
      image: UserProfile,
      content:
        '“Absolutely amazing tour! The sights, the sounds, the people – everything was a delight. I can’t recommend Heaven Lanka enough. A truly unforgettable experience!”',
      name: 'Emily Johnson',
      location: 'New York, USA',
    },
    {
      image: UserProfile1,
      content:
        '“My family and I had an incredible vacation with Heaven Lanka. The tour was well-organized, and the guides were friendly and knowledgeable. We enjoyed every moment of our trip!”',
      name: 'David Smith',
      location: 'London, UK',
    },
  ];

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? feedbackList.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === feedbackList.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="flex flex-col xl:flex-row xl:gap-[400px] items-center ">
      <div className="flex gap-4 ">
        <FiArrowLeftCircle
          className="w-8 h-8 text-[#FFFFFF] fill-[#999999] cursor-pointer"
          onClick={handlePrevious}
        />
        <FiArrowRightCircle
          className="w-8 h-8 text-[#FFFFFF]  fill-[#FA7436] cursor-pointer"
          onClick={handleNext}
        />
      </div>

      <div className="">
        <FeedbackMsgCard message={feedbackList[currentIndex]} />
      </div>
    </div>
  );
};

export default FeedbackMsgList;

