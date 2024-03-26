// import beach from '../../../assets/Treasures/beach.png'
// import wellness from '../../../assets/Treasures/wellness.png'
// import escapes from '../../../assets/Treasures/escapes.png'
// import historical from '../../../assets/Treasures/Historical.png'
// import Slider from '../Shared/Slider';
// import TreasuresCard from './TreasuresCard';

// const TreasuresList = () => {
//     const TreasuresLists = [
//         {
//           image: beach,
//           name: "Unspoiled Beaches",
//         },
//         {
//           image: escapes,
//           name: "Adventurous Escapes",
//         },
        
//         {
//             image: historical,
//             name: "Historical Marvels",
//           },
//           {
//             image: wellness,
//             name: "Wellness Retreats",
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
//         <div className='flex flex-row items-center justify-center mt-4'>
//             <Slider>
//                 {TreasuresLists.map((item, index)=>(
//                     <TreasuresCard key={index} item={item}/>
//                 ))}
//             </Slider>

//         </div>
//      );
// }
 
// export default TreasuresList;

import React from 'react';
import Image from 'next/image';
// import Slider from '../Shared/Slider';
import TreasuresCard from './TreasuresCard';

import beach from '../../../assets/Treasures/beach.png';
import wellness from '../../../assets/Treasures/wellness.png';
import escapes from '../../../assets/Treasures/escapes.png';
import historical from '../../../assets/Treasures/Historical.png';

const TreasuresList = () => {
  const TreasuresLists = [
    {
      image: beach,
      name: 'Unspoiled Beaches',
      pathName: './beachesPage'
    },
    {
      image: escapes,
      name: 'Adventurous Escapes',
      pathName: './adventureEscapesPage'
    },
    {
      image: historical,
      name: 'Historical Marvels',
      pathName: './HistoricalMarvelsPage'
    },
    {
      image: wellness,
      name: 'Wellness Retreats',
      pathName: './wellness'
    },
  ];

  return (
    <div className='flex flex-row lg:flex-row items-center gap-5 justify-center mt-4'>
      {/* <Slider> */}
        {TreasuresLists.map((item, index) => (
          <TreasuresCard key={index} item={item}/>
        ))}
      {/* </Slider> */}
    </div>
  );
};

export default TreasuresList;
