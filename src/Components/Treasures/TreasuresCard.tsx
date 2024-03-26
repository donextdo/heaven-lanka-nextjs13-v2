// import Image from 'next/image';
// import beach from '../../../assets/Treasures/beach.png'

// const TreasuresCard = ({item}:any) => {
//     return ( 
//         <div className='h-52 w-52 p-2 space-y-2 shadow-lg flex flex-col items-center justify-center border border-gray-100 rounded-md  my-2'>
//             <div className="h-36 w-full ">
//                 <Image
//                     src={item?.image}
//                     alt="item1"
//                     style={{
//                         objectFit: "contain",
//                         backgroundColor: "white",
//                         width: "100%",
//                         height: "100%",
//                     }}
//                     width={450}
//                     height={400}
//                 />
//             </div>
//             <h1 className='text-[#077B83] text-sm'>{item.name}</h1>
//         </div>
//      );
// }
 
// export default TreasuresCard;


import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const TreasuresCard = ({ item }: any) => {
  const router = useRouter();
  return (
    <div className='h-16 md:h-40 lg:h-52 lg:w-52 md:w-40 p-2 md:space-y-2 shadow-lg flex flex-col items-center justify-center border border-gray-100 rounded-md lg:my-2 cursor-pointer transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-100 duration-300'
    onClick={() => router.push(item?.pathName)}
    >
      <div className='h-8  md:h-36 w-8 md:w-36'>
        <Image
          src={item?.image}
          alt='item1'
          style={{
            objectFit: 'contain',
            backgroundColor: 'white',
            width: '100%',
            height: '100%',
          }}
          layout='responsive'
          width={400}
          height={300}
        />
      </div>
      <h1 className='text-[8px] md:text-[#077B83] md:text-[12px] lg:text-sm'>{item.name}</h1>
    </div>
  );
};

export default TreasuresCard;
