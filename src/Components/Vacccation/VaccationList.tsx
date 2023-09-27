// import Cultural from '../../../assets/Vaccation/Cultural.png'
// import WildLife from '../../../assets/Vaccation/WildLife.png'
// import Island from '../../../assets/Vaccation/Island.png'
// import HillCountry from '../../../assets/Vaccation/HillCountry.png'
// import { FiArrowLeftCircle ,FiArrowRightCircle } from 'react-icons/fi';

// import VaccationCard from './VaccationCard';


// const VaccationList = () => {
//     const VaccationLists = [
//         {
//           image: Cultural,
//           name: "Cultural Highlights",
//           rate:'5.0',
//           price:'$400',
//           duration:'4N/5D',
//           quoted:'per person'
//         },
//         {
//           image: WildLife,
//           name: "Adventurous Escapes",
//           rate:'5.0',
//           price:'$400',
//           duration:'3N/4D',
//           quoted:'per person'
//         },
        
//         {
//             image: Island,
//             name: "Historical Marvels",
//             rate:'4.0',
//             price:'$800',
//             duration:'6N/7D',
//             quoted:'per person'
//           },
//           {
//             image: HillCountry,
//             name: "Wellness Retreats",
//             rate:'4.9',
//             price:'$500',
//             duration:'8N/9D',
//             quoted:'per person'
//           },
//           // {
//           //   image: beach,
//           //   name: "Unspoiled Beaches",
//           // },
//           // {
//           //   image: beach,
//           //   name: "Unspoiled Beaches",
//           // },
//     ]
//     return ( 
//       <div>
//         <div className='flex flex-row items-center gap-[30px] justify-center mt-4'>
     
//                 {VaccationLists.map((item, index)=>(
//                     <VaccationCard key={index} item={item}/>
//                 ))}
           
          
//         </div>
//         <div className="flex flex-row justify-center items-center gap-[40px] mt-[30px]">
//             <FiArrowLeftCircle className='w-10 h-10 text-[#FFFFFF] fill-[#999999]'/>
//              <FiArrowRightCircle className='w-10 h-10 text-[#FFFFFF]   fill-[#077B83]'/>
//             </div>
//         </div>
//      );
// }
 
// export default VaccationList;

import React, { useState } from 'react';
import { FiArrowLeftCircle, FiArrowRightCircle } from 'react-icons/fi';
import VaccationCard from './VaccationCard';

import Cultural from '../../../assets/Vaccation/Cultural.png';
import WildLife from '../../../assets/Vaccation/WildLife.png';
import Island from '../../../assets/Vaccation/Island.png';
import HillCountry from '../../../assets/Vaccation/HillCountry.png';

const VaccationList = () => {
  const VaccationLists = [
    {
      image: Cultural,
      name: 'Cultural Highlights',
      rate: '4.8',
      price: '$850',
      duration: '2N/3D',
      quoted: 'per person',
    },
    {
      image: WildLife,
      name: 'Adventurous Escapes',
      rate: '4.9',
      price: '$950',
      duration: '7N/8D',
      quoted: 'per person',
    },
    {
      image: Island,
      name: 'Historical Marvels',
      rate: '5.0',
      price: '$800',
      duration: '9N/10D',
      quoted: 'per person',
    },
    {
      image: HillCountry,
      name: 'Wellness Retreats',
      rate: '4.8',
      price: '$500',
      duration: '12N/13D',
      quoted: 'per person',
    },
  ];

  const [currentCard, setCurrentCard] = useState(0);

  const goToNextCard = () => {
    setCurrentCard((prevCard) => (prevCard + 1) % VaccationLists.length);
  };

  const goToPrevCard = () => {
    setCurrentCard((prevCard) =>
      prevCard === 0 ? VaccationLists.length - 1 : prevCard - 1
    );
  };

  return (
    <div>
      <div className='flex flex-col items-center mt-4'>
        <div className='lg:flex lg:justify-center lg:gap-4 lg:items-center'>
          {/* {VaccationLists.map((item, index) => (
            <VaccationCard key={index} item={item} />
          ))} */}

          <VaccationCard
          image={HillCountry}
          name='Cultural Highlights'
          rate= '4.8'
          price= '$850'
          duration= '2N/3D'
          quoted= 'per person'
          pathName='./singlePage'
          />

<VaccationCard
         image= {WildLife}
         name= 'Adventurous Escapes'
         rate= '4.9'
         price= '$950'
         duration= '7N/8D'
         quoted= 'per person'
          pathName='./single7N8DPage'
          />

<VaccationCard
          image= {Island}
          name='Historical Marvels'
          rate= '5.0'
          price='$800'
          duration= '9N/10D'
          quoted= 'per person'
          pathName='./single9NPage'
          />

<VaccationCard
          image= {HillCountry}
          name= 'Wellness Retreats'
          rate= '4.8'
          price= '$500'
          duration= '12N/13D'
          quoted= 'per person'
          pathName='./singlePage'
          />
        </div>
     
      </div>
      {/* <div className='flex flex-row justify-center items-center gap-[20px] mt-[20px]'>
        <FiArrowLeftCircle
          className='w-8 h-8 text-[#FFFFFF] fill-[#999999]'
          onClick={goToPrevCard}
        />
        <FiArrowRightCircle
          className='w-8 h-8 text-[#FFFFFF] fill-[#077B83]'
          onClick={goToNextCard}
        />
      </div> */}
    </div>
  );
};

export default VaccationList;
