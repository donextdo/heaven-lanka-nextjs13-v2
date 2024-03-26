import React from 'react';
import arugambay from '../../../assets/AdventureEscapes/AdventureEscapeList/arugambay.png';
import Kitulgala from '../../../assets/AdventureEscapes/AdventureEscapeList/kitulgala.png';
import Hikkaduwa from '../../../assets/AdventureEscapes/AdventureEscapeList/hikkaduwa.png';
import Dambulla from '../../../assets/AdventureEscapes/AdventureEscapeList/dambulla.png';
import HortonPlains from '../../../assets/AdventureEscapes/AdventureEscapeList/hortonplains.png';
import Ella from '../../../assets/AdventureEscapes/AdventureEscapeList/ella.png';
import AdventureEscapeCard from './AdventureEscapecard';


const AdventureEscapeList = () => {
    const BeachList = [
        {
            image: Kitulgala,
            name : 'Whitewater Rafting in Kitulgala',
            location: 'Kitulgala',
            description: "Kitulgala, Sri Lanka, offers a thrilling whitewater rafting experience on the Kelani River, suitable for all skill levels. Surrounded by lush rainforests, rafters navigate exciting rapids under the guidance of expert instructors, ensuring a memorable and safe adventure."
        },
        {
            image: arugambay,
            name : 'Surfing in Arugam Bay',
            location: 'Arugam Bay',
            description: "Arugam Bay in Sri Lanka is a surfer's haven, known for its excellent waves and beautiful beaches. It's a favorite spot for all surfers, offering perfect conditions from April to October, complemented by the local community's welcoming vibe."
        },
        {
            image: Hikkaduwa,
            name : 'Scuba Diving in Hikkaduwa',
            location: 'Hikkaduwa',
            description : "Hikkaduwa's scuba diving scene is a treasure trove of coral reefs, shipwrecks, and marine life, offering clear waters and visibility for all levels of divers. Guided by experts, both novices and seasoned divers can safely explore its underwater marvels."
        },
        {
            image: Dambulla,
            name : 'Hot air ballooning in Dambulla',
            location: 'Dambulla',
            description: "Soar above Dambulla in a hot air balloon to witness Sri Lanka's Cultural Triangle, including Anuradhapura and Sigiriya Rock Fortress, from the sky. This serene journey offers a unique perspective of the country's heritage and landscapes, guided by skilled pilots."
        },
        {
            image: HortonPlains,
            name : 'Trekking in Horton Plains National Park',
            location: 'Horton Plains National Park',
            description: "Horton Plains National Park trekking is a captivating adventure through diverse landscapes, leading to the stunning World's End viewpoint and refreshing Baker's Falls. It's a journey rich in biodiversity, guided by knowledgeable locals."
        },
        {
            image: Ella,
            name : 'Ella Flying Ravana Mega Zipline',
            location: 'Ella',
            description: "The Flying Ravana Mega Zipline in Ella offers a thrilling flight over breathtaking landscapes, inspired by the legendary king Ravana. It's a must-do for those seeking adventure in Sri Lanka."
        }
    ];
    return(
        <div className='flex glex-col lg:flex-row flex-wrap gap-5 md:gap-16 justify-center'>
            {BeachList.map((beach,index)=>(
                <AdventureEscapeCard key={index} beach={beach}/>
            ))}
        </div>
    )
}

export default AdventureEscapeList;